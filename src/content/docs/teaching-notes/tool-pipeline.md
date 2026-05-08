---
title: "From Mathpix to Agent: An AI Tool Pipeline for a Math Teacher"
---

## OCR: The tedious early days

The first step in creating handouts is making exam papers readable by AI. The problem is that past papers come as PDFs, and feeding math-heavy PDFs directly to a model produces garbage.

I started with [Mathpix](https://mathpix.com/) for OCR — it converts mathematical formulas into [LaTeX](https://www.latex-project.org/) code (LaTeX is the standard typesetting language in mathematics; you write markup, it compiles to PDF, and formulas look far better than anything Word can produce). But Mathpix only handles math text. Exam papers mix multiple-choice, fill-in-the-blank, and long-answer questions in complex layouts. I had to manually screenshot each question and feed it in one by one. A single paper with dozens of questions meant a lot of cutting and pasting.

Mathpix's role has since been taken over by [LlamaParse](https://github.com/run-llama/llama_parse). LlamaParse processes entire PDF pages directly — no manual screenshots needed — and handles complex layouts with better formula accuracy. If you're starting this kind of work now, just use LlamaParse. It will save you a lot of trouble.

After OCR, I still had to manually piece together fragmented text into complete questions before feeding them to the model.

## The early workflow: DeepSeek for outlines, Cursor for handouts

The initial workflow was a two-step process.

First, I'd ask [DeepSeek](https://www.deepseek.com/) to generate a handout outline. The prompt had to include every detail upfront. For example, when planning a complex numbers unit:

> I want to design a math handout. Students have already learned the modulus, argument, and conjugate of complex numbers. This unit covers the exponential form of complex numbers and de Moivre's theorem. The goals are: learning to find the nth roots of a complex number, deriving identities for n倍角三角函数, and deriving identities for powers of trigonometric functions. Use an engaging introduction style. The students' ultimate goal is to pass the international exam. Please summarize the key teaching points based on the provided past papers and give me a complete handout outline.

Once I had the outline, I'd feed it to [Cursor](https://cursor.com/) to generate the full handout. Cursor is an AI coding tool — essentially a code editor with built-in AI chat. It's not designed for education, but since it can read files and output formatted content, I used it to write LaTeX handouts.

For the first handout, I let Cursor do its own thing, then adjusted the output into a proper format. Once the format was set, I had Cursor follow that format for all subsequent handouts — "use xxx.tex as a format reference" works much better than "make it look nice."

Over time, my prompts became more structured:

> Please create an English handout in xxxx folder. The handout should be in the form of a LaTeX document and should be in the format and content order and arrangement similar as in xxx.tex. DO NOT make direct translation to create the notes, instead redesign a more detailed notes based on the content provided. Formatting Requirements: Maintain a consistent font size and style throughout the document. Include any necessary diagrams or illustrations that may help in understanding the concepts.

Specify the reference file, state explicit constraints ("don't translate directly"), and keep formatting requirements separate from content requirements. The shift from "chatting with AI" to "giving AI instructions" meant shorter prompts with better results.

## Plan Mode: prompts got simpler

In October 2025, Cursor introduced plan mode. Before that, generating a single handout section required multiple rounds — first the outline, then section by section, re-feeding context each time. Plan mode could build the full framework in one pass, then refine section by section with continuous context.

The interesting part: as the tool got stronger, prompts actually needed to be less detailed. I used to cram course background, student level, and learning objectives into every prompt. Now I could just say "use this past paper as reference and write a handout on topic X" — plan mode would break down the task, pull context, and work through it sequentially.

The two-step workflow of DeepSeek for outlines and Cursor for writing could now be handled by plan mode alone.

The FP2 and FP3 handouts were produced during this phase. Shorter prompts, more consistent output.

## Agents and IDEs: different jobs

In early 2026, my Cursor subscription expired. I wasn't planning to switch — I had to find an alternative. I tried [Trae IDE](https://www.trae.ai/), found it worked fine, and started exploring Agents at the same time.

One thing became clear quickly: Agents are not good for writing handouts.

Different AI IDEs perform about the same for handout writing. Agents are actually worse — you can't see what they're writing in real time, you can't adjust on the fly, and fixing problems means waiting for another round of output.

Where Agents shine is background tasks. For example, the TMUA and STEP question banks were both built by an Agent — it produced a first draft in hours, and I spent my time reviewing and categorizing. I'll expand on that in a future article.

For writing handouts, IDEs are still the better fit. Real-time editing, instant feedback, and the ability to interrupt at any point.

## Tools keep changing, the process keeps deepening

This article mentions quite a few tools: [DeepSeek](https://www.deepseek.com/), [Cursor](https://cursor.com/), [Trae IDE](https://www.trae.ai/), [Mathpix](https://mathpix.com/), [LlamaParse](https://github.com/run-llama/llama_parse). I'm not listing them so you can try each one.

Tools keep changing. I started by screenshotting formulas one by one with Mathpix; now LlamaParse processes entire PDF pages with better accuracy. When Cursor added plan mode, I started using it. When my subscription expired, I switched to Trae. None of these transitions were planned — I tried what was available and kept what worked.

What I want to share here is a way of thinking: figure out what problem you're actually solving, then find the right tool. The real question for me was never "which tool should I use" but "how do I turn a PDF exam paper into a handout I can use in class." Once that question is clear, it doesn't matter how many times the tools change — the underlying process and judgment are yours.

If you're starting this kind of work now, your tools will be different from mine. That's fine. The process translates.

---

Finished handouts: [A-Level Further Pure Math](/further-math/)
