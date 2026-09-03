(() => {
  "use strict";

  const screen = document.querySelector("#screen");
  const params = new URLSearchParams(window.location.search);
  const source = params.get("source") === "draft" ? "draft" : "approved";
  const autoplay = params.get("autoplay") !== "0";
  const requestedSlide = Number.parseInt(params.get("slide") || "0", 10);
  let timer = null;
  let refreshTimer = null;
  let activeIndex = Number.isFinite(requestedSlide) ? Math.max(0, requestedSlide) : 0;
  let contentFingerprint = "";

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const safeUrl = (value = "") => {
    try {
      const url = new URL(value);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch {
      return "";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(`${dateString}T00:00:00`);
    if (Number.isNaN(date.valueOf())) return escapeHtml(dateString);
    return new Intl.DateTimeFormat("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      weekday: "short"
    }).format(date);
  };

  const makeFrame = (data, options, body) => {
    const {
      rail = "BRIEF",
      accent = "aqua",
      tone = "ink",
      section = "ACADEMIC DISPLAY"
    } = options;
    const demoStamp = data.demo ? '<div class="demo-stamp">演示样例 · 非正式发布</div>' : "";

    return `
      <article class="slide" data-accent="${escapeHtml(accent)}" data-tone="${escapeHtml(tone)}">
        <aside class="rail" aria-hidden="true"><span class="rail-label">${escapeHtml(rail)}</span></aside>
        <div class="slide-main">
          <header class="masthead">
            <div>
              <span class="brand-cn">${escapeHtml(data.display.brand_cn)}</span>
              <span class="brand-en">${escapeHtml(data.display.brand_en)}</span>
            </div>
            <div class="issue-block">
              <span class="issue-date">${formatDate(data.content_date)}</span>
            </div>
          </header>
          ${body}
          <footer class="footer">
            <span>${escapeHtml(section)}</span>
          </footer>
        </div>
        ${demoStamp}
        <div class="progress" aria-hidden="true"><div class="progress-bar"></div></div>
      </article>`;
  };

  const challengeVisual = (challenge) => {
    if (challenge.visual === "rope") {
      return `
        <div class="interview-visual rope-visual" aria-hidden="true">
          <svg viewBox="0 0 760 260" role="img">
            <line class="rope-base" x1="70" y1="112" x2="690" y2="112"></line>
            <line class="rope-cut" x1="278" y1="66" x2="278" y2="158"></line>
            <line class="rope-cut" x1="510" y1="66" x2="510" y2="158"></line>
            <circle cx="70" cy="112" r="9"></circle>
            <circle cx="690" cy="112" r="9"></circle>
            <text x="62" y="202">0</text>
            <text x="268" y="202">x</text>
            <text x="500" y="202">y</text>
            <text x="681" y="202">1</text>
          </svg>
        </div>`;
    }

    if (challenge.visual === "estimation") {
      return `
        <div class="interview-visual estimation-visual">
          <div class="estimation-answer" aria-hidden="true">
            <span>ESTIMATE</span>
            <strong>${escapeHtml(challenge.answer_unit || "约 ______")}</strong>
            <small>${escapeHtml(challenge.answer_unit_en || "")}</small>
          </div>
        </div>`;
    }

    return `
      <div class="interview-visual network-visual" aria-hidden="true">
        <svg viewBox="0 0 760 320" role="img">
          <ellipse class="network-table" cx="380" cy="160" rx="170" ry="92"></ellipse>
          <g class="network-nodes">
            <circle cx="230" cy="52" r="28"></circle>
            <circle cx="530" cy="52" r="28"></circle>
            <circle cx="632" cy="160" r="28"></circle>
            <circle cx="530" cy="268" r="28"></circle>
            <circle cx="230" cy="268" r="28"></circle>
            <circle cx="128" cy="160" r="28"></circle>
          </g>
        </svg>
      </div>`;
  };

  const buildSlides = (data) => {
    const slides = [];
    const daily = data.daily;
    const weekly = data.weekly;
    const challenges = Array.isArray(weekly.challenges)
      ? weekly.challenges
      : weekly.challenge
        ? [{ ...weekly.challenge, visual: "network", origin: "本周挑战" }]
        : [];

    const dailyPages = [];
    for (let index = 0; index < daily.items.length; index += 3) {
      dailyPages.push(daily.items.slice(index, index + 3));
    }

    dailyPages.forEach((pageItems, pageIndex) => {
      const dailyCards = pageItems.map((item) => {
        const sourceUrl = safeUrl(item.source.url);
        return `
          <article class="brief-card" data-brief-accent="${escapeHtml(item.accent || "aqua")}">
            <div class="brief-meta">
              <span>${escapeHtml(item.category)}</span>
              <time datetime="${escapeHtml(item.source.published)}">${escapeHtml(item.source.published)}</time>
            </div>
            <div class="brief-copy">
              <h2>${escapeHtml(item.headline)}</h2>
              <p class="brief-headline-en" lang="en">${escapeHtml(item.headline_en)}</p>
              <p class="brief-summary">${escapeHtml(item.summary)}</p>
              <p class="brief-summary-en" lang="en">${escapeHtml(item.summary_en)}</p>
              <p class="brief-source">来源 / SOURCE · ${escapeHtml(item.source.name)}${sourceUrl ? "" : " · 链接待核查"}</p>
            </div>
          </article>`;
      }).join("");
      const firstItem = pageIndex * 3 + 1;
      const lastItem = firstItem + pageItems.length - 1;
      const pageNumber = String(pageIndex + 1).padStart(2, "0");
      const standfirst = typeof daily.standfirst === "string" && daily.standfirst.trim()
        ? `<p class="standfirst">${escapeHtml(daily.standfirst)}</p>`
        : "";

      slides.push(makeFrame(data, {
        rail: `DAILY ${pageNumber}`,
        accent: pageIndex % 2 === 0 ? "aqua" : "gold",
        section: `CURATED DAILY BRIEF · ${pageIndex + 1}/${dailyPages.length}`
      }, `
        <section class="content brief-board">
          <div class="brief-intro">
            <div class="brief-intro-topline">
              <p class="eyebrow">${escapeHtml(daily.eyebrow)}</p>
              <span class="brief-page-count">NEWS ${firstItem}-${lastItem} / ${daily.items.length}</span>
            </div>
            <div class="brief-heading${standfirst ? " has-standfirst" : ""}">
              <div>
                <h1 class="headline">${escapeHtml(daily.headline)}</h1>
                <p class="brief-title-en" lang="en">${escapeHtml(daily.headline_en)}</p>
              </div>
              ${standfirst}
            </div>
          </div>
          <div class="brief-list">${dailyCards}</div>
        </section>`));
    });

    const railLabels = { network: "PROOF", rope: "OXBRIDGE", estimation: "LOCAL" };
    challenges.forEach((challenge, index) => {
      slides.push(makeFrame(data, {
        rail: railLabels[challenge.visual] || "QUESTION",
        accent: challenge.accent || "coral",
        section: `${challenge.subject} · ${challenge.subject_en}`
      }, `
        <section class="content interview-slide" data-question-kind="${escapeHtml(challenge.visual || "network")}">
          <div class="interview-topline">
            <p class="eyebrow">${escapeHtml(challenge.eyebrow)}</p>
            <span class="question-count">QUESTION ${String(index + 1).padStart(2, "0")} / ${String(challenges.length).padStart(2, "0")}</span>
          </div>
          <h2 class="interview-question">${escapeHtml(challenge.headline)}</h2>
          <p class="interview-question-en" lang="en">${escapeHtml(challenge.headline_en)}</p>
          ${challengeVisual(challenge)}
        </section>`));
    });

    return slides;
  };

  const activateSlide = (index, slideSeconds) => {
    const slides = [...screen.querySelectorAll(".slide")];
    if (!slides.length) return;
    activeIndex = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
      slide.style.setProperty("--slide-duration", `${slideSeconds}s`);
    });
    const active = slides[activeIndex];
    screen.style.setProperty("--accent", getComputedStyle(active).getPropertyValue("--accent"));
  };

  const beginPlayback = (slideSeconds) => {
    window.clearInterval(timer);
    screen.classList.toggle("is-playing", autoplay);
    activateSlide(activeIndex, slideSeconds);
    if (!autoplay) return;
    timer = window.setInterval(() => activateSlide(activeIndex + 1, slideSeconds), slideSeconds * 1000);
  };

  const showError = () => {
    screen.innerHTML = `
      <div class="error-state">
        <span class="boot-mark" aria-hidden="true"></span>
        <p>暂时无法读取内容<br />正在保留上一版画面</p>
      </div>`;
  };

  const render = (data) => {
    const fingerprint = JSON.stringify(data);
    if (fingerprint === contentFingerprint) return;
    contentFingerprint = fingerprint;
    screen.innerHTML = buildSlides(data).join("");
    activeIndex = Math.min(activeIndex, Math.max(0, screen.querySelectorAll(".slide").length - 1));
    beginPlayback(Number(data.display.slide_seconds) || 8);
  };

  const loadContent = async () => {
    try {
      const response = await fetch(`content/${source}.json?ts=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (source === "approved" && data.status !== "approved") {
        throw new Error("Approved feed has invalid status");
      }
      if (source === "approved") {
        window.localStorage.setItem("oxbridge:last-approved", JSON.stringify(data));
      }
      render(data);
      window.clearInterval(refreshTimer);
      const refreshMinutes = Math.max(1, Number(data.display.refresh_minutes) || 5);
      refreshTimer = window.setInterval(loadContent, refreshMinutes * 60 * 1000);
    } catch (error) {
      const cached = source === "approved" ? window.localStorage.getItem("oxbridge:last-approved") : null;
      if (cached) {
        try {
          render(JSON.parse(cached));
          return;
        } catch {
          window.localStorage.removeItem("oxbridge:last-approved");
        }
      }
      showError();
      console.error("Content load failed", error);
    }
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown") {
      activateSlide(activeIndex + 1, 8);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      activateSlide(activeIndex - 1, 8);
    }
  });

  loadContent();
})();
