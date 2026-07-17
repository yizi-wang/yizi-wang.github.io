---
title: How teachers can build their personal teaching website in the era of AI Agents
---

# How teachers can build their personal teaching website in the era of AI Agents

In the past, when mentioning a teacher building a personal website, many people's first reaction was: I don't know how to code.

That statement is not as important now. Not because coding has suddenly become easier, but because a lot of the coding work can already be handed over to Agents. Tools like [Codex](https://openai.com/codex/), [Claude Code](https://www.anthropic.com/product/claude-code), [OpenClaw](https://openclaw.ai/), [WorkBuddy](https://www.codebuddy.cn/docs/workbuddy/Overview), and [Trae SOLO](https://www.trae.ai/solo-web) do more than just write a piece of HTML for you. They can create projects locally, install dependencies, run development servers, fix build errors, and even commit code to GitHub.

But this does not mean teachers can know nothing at all. On the contrary, the parts you truly need to figure out yourself have become clearer: what to put on the website, who manages the accounts, how to create a GitHub repository, how to deploy on Vercel, how to buy a domain name, how to resolve DNS, what content can be public, and what content cannot be public.

AI Agents can do the construction, but the ownership and boundaries of the website must be in your own hands.

## Download: Agent Website Building Task Pack

If you don't want to follow the article step-by-step, you can directly download the two Markdown files below and send them to your own AI Agent.

- [Teacher Website Agent Building Task Pack](/downloads/teacher_website_agent_brief.md): Suitable to send directly to an Agent, letting it build the website for you according to the process.
- [AGENTS.md Project Template](/downloads/teacher_website_agents_template.md): Suitable for placing in the root directory of a website project, acting as long-term project rules.

The first file is better for building a site from scratch. The second file is better if you already have a project and want the Agent to maintain it according to fixed rules in the future.

## Distinguish first: What the Agent can do vs. What the teacher must do

I will break this down first. Building a personal teaching website roughly involves these steps.

| Step | What the Agent can do | What the teacher must do themselves |
|---|---|---|
| Website Planning | Generate column structure, page sketches, directory conventions | Decide what content to make public and what to keep local |
| Project Setup | Create an Astro, Starlight, React or pure HTML project | Choose a long-term maintainable solution |
| Running Locally | Install dependencies, start dev server, fix errors | Check the preview and judge if it meets requirements |
| Content Migration | Organize Markdown, Word, LaTeX into web content | Check math content, copyright, and student privacy |
| GitHub | Init git, commit code, push repository | Register account, create repository, authorize tool access |
| Vercel | Configure build commands, read errors, fix deployment | Register account, connect GitHub, confirm project deployment |
| Domain | Explain DNS records, check if config is active | Buy domain, complete real-name auth, fill in DNS records |
| Future Maintenance | Add posts, batch edit links, check builds | Decide update rhythm, audit published content |

The purpose of this table is not to scare you. On the contrary, it clarifies things.

You don't need to learn how to write a website from scratch. You need to learn how to delegate tasks to an Agent, and know which parts cannot be delegated.

![Boundary Map between AI Agent and Teacher](/images/teaching-notes/agent-boundary-map.svg)

## How to choose a tech stack

If you just want a single-page introduction, pure HTML is enough. Have the Agent generate an `index.html`, put your personal intro, course list, and contact info, then deploy to Vercel, and you're done in half an hour.

But a teacher's website usually doesn't stop at a single page. Soon you'll want to add a teaching blog, handouts, question banks, course materials, and student project showcases. Once there is a lot of content, a single-page site becomes messy.

My recommendation is:

- For just a personal showcase page: Pure HTML/CSS/JS.
- For blogs and handouts: Astro + Starlight.
- For complex interactions, like a quiz system, login, data dashboards: React, Next.js or a pure frontend app.

If you are a math teacher, you especially have to consider formulas. A standard Markdown website might not directly render math formulas and will require configuring KaTeX or MathJax. My personal website uses Astro + Starlight because it is suited for document-type content: it has a sidebar, table of contents, search, dark mode, and both handouts and blogs can be written in Markdown.

These types of projects are also suited for Agent maintenance. The directory is clear, file boundaries are clear, and if a mistake is made, it's easy to locate.

When I built this website for the first time, I fell into a trap early on: letting the Agent write the config from scratch by hand. It certainly could write it, but it easily missed the framework's own default settings. Later, when it truly stabilized, it was by switching to the official Starlight template, and then changing columns, styles, and adding math support on top of the template.

So now I tell the Agent directly:

 ```text
Please prioritize using the official starter/template; do not write framework configs by hand from scratch.
If you need to change a config, first explain why the official template is insufficient.
``` 

This sentence saves a lot of time. Agents easily have the urge to say "I can write it all," but building a website isn't an algorithm problem. If you can use an official template, use it first.

You can ask the Agent like this:

 ```text
I am a high school math teacher wanting to build a personal teaching website.

The website content includes:
1. Teaching blog
2. A-Level Further Maths handouts
3. TMUA/STEP prep materials
4. History of Math course materials
5. About Me page

Requirements:
1. Try to use a static site, no server or database needed
2. Write content in Markdown for easy self-maintenance later
3. Support math formula rendering
4. Can be deployed to Vercel
5. Can continuously add posts and handouts later

Please recommend a tech stack and explain the directory structure.
Do not write code yet.
``` 

Note the last sentence: Do not write code yet.

When many people use Agents for projects, the first step they say is "Help me make a website." The Agent will quickly start generating pages very fast, but it is often hard to maintain later. Let it first clearly state the tech stack and directory structure before getting hands-on, and it will be much steadier.

## Use an Agent that can run the project, not just a chatting model

We need to distinguish between two types of tools here.

Chat tools like the ChatGPT or Claude web versions are great for helping you brainstorm columns, write copy, and organize requirements. But they cannot directly create projects, start servers, or run builds in your computer.

Tools like [Codex](https://openai.com/codex/), [Claude Code](https://www.anthropic.com/product/claude-code), [OpenClaw](https://openclaw.ai/), [WorkBuddy](https://www.codebuddy.cn/docs/workbuddy/Overview), and [Trae SOLO](https://www.trae.ai/solo-web) are more suited for actually building a site. The reason is simple: they can touch project files, execute commands, see errors, and then continue modifying.

A real website building process should look like this:

1. Agent creates project files.
2. Agent installs dependencies.
3. Agent starts the local development server.
4. You look at the result in the browser.
5. You point out what is wrong.
6. Agent modifies the code.
7. Agent runs a build check.
8. After the build passes, it prepares to commit to GitHub.

![Agent Site Building Workflow from Requirements to Release](/images/teaching-notes/agent-site-workflow.svg)

If multiple Agents are collaborating, don't let them all modify the same thing. When I used OpenClaw to build the site, a more effective division of labor was:

- Main Agent is responsible for organizing content and files.
- Academic Agent is responsible for checking math content.
- Coding Agent is responsible for building, GitHub, and deployment.

The key to this division is not the names, but the boundaries. The Agent writing content shouldn't casually modify deployment configs, and the Agent fixing CI shouldn't casually modify handout text. Two Agents modifying the same GitHub Actions file at the same time will easily overwrite each other.

Another piece of experience: don't let long tasks drag on in one session for too long. After an Agent fails a few rounds in a row, the context gets stuffed with old errors, and it will start repeatedly analyzing without executing. At this time, opening a new session and giving it a clean error log and the current file state is often faster than continuing to badger it.

You can give an Agent a task like this:

 ```text
Please create an Astro + Starlight teaching website in the current folder.

Requirements:
1. Use Markdown to manage content
2. Configure KaTeX to support math formulas
3. Create these sections:
   - Home
   - About Me
   - Teaching Blog
   - A-Level Further Maths
   - TMUA
   - STEP
   - History of Math course
4. Use lowercase English and underscores for filenames
5. Create a sample blog page and a sample handout page
6. After finishing, run the local dev server and tell me the access address
7. Run the build command once more to confirm there are no errors
``` 

If the Agent can run commands locally, it will handle many troublesome things itself. Like missing packages, config errors, wrong paths, build failures. You don't need to read the code line-by-line; you just need to check two results:

- Can the local preview be opened?
- Does the build pass?

These two results are more reliable than "does the code look right".

## What to check during local preview

Just because a website opens locally doesn't mean it can be published. You should at least check these things:

- Does the homepage explain who you are and what you teach?
- Is the navigation clear?
- Can it be read normally on a mobile screen?
- Are the math formulas rendered?
- Are any pictures missing?
- Is Chinese text showing as gibberish?
- Do links 404 when clicked?
- Are page titles normal?
- Does the content contain student names, grades, or chat screenshots?
- Did you accidentally publish exam scans or textbook material that shouldn't be public?

The Agent can help you run automated checks, but ultimately you still need to review it yourself. Especially math formulas; passing the build doesn't mean the formula's meaning is correct.

I would have the Agent do this kind of check:

 ```text
Please check the current website:
1. Do all internal links exist?
2. Are there obvious Markdown formatting errors?
3. Are there unclosed math formula symbols?
4. Are there broken image paths?
5. Run npm run build and fix all build errors
``` 

This kind of task is very suitable for an Agent. It doesn't need to understand your pedagogical judgment; it just needs to check files and errors.

## A few special pitfalls of math websites

For an ordinary personal website, the worst that happens is a wrong image path or ugly styling. Math websites are a bit more troublesome because formulas and the documentation framework affect each other.

![A few special pitfall rules for math websites](/images/teaching-notes/math-site-pitfalls.svg)

I ran into a few problems when building the site, and later wrote them all into the rules.

First, prioritize using `.md` in Starlight, don't use `.mdx` casually.

MDX supports JSX and looks more powerful, but the `{}` in math formulas easily get treated as JSX expressions. For example, LaTeX writing like `\frac{}`, `\text{}`, `\underline{}` might trigger weird parsing errors in MDX. If the pages are just for handouts and blogs and don't need React components, using `.md` is much safer.

Second, block formulas must be written properly.

This way is safer:

 ```markdown
$$
\begin{aligned}
x &= 1 \\
y &= 2
\end{aligned}
$$
``` 

Don't cram ` $$\begin{aligned}` onto one line. Often it looks like a small issue locally, but it will explode during the build.

Third, do not put Chinese text inside `$$ ...$$` math blocks.

In KaTeX strict mode, mixing Chinese in math blocks easily causes errors. Put Chinese explanations outside the formula, and only put LaTeX inside.

Fourth, keep filenames consistent across bilingual Chinese and English pages.

If the English file is named `a1_algebra_basics.md`, the corresponding Chinese file should also be named `a1_algebra_basics.md`, just placed in the `zh/` directory. Do not write it as `a1_Algebra Basics.md`. Starlight's i18n relies on path pairing; if the filenames are inconsistent, the sidebar might duplicate and pages won't match up.

You can hand these rules to the Agent all at once:

 ```text
These are the content rules for the math website:
1. Document pages default to using .md, do not use .mdx
2. In block formulas, $$, \begin{aligned}, and \end{aligned} must be on separate lines
3. Do not put Chinese explanations inside $$...$$ formula blocks
4. Bilingual Chinese and English pages must use the same English filenames
5. Run build checks after modifications
``` 

The earlier the rules are written in, the less rework there is later.

## GitHub: Let the Agent push code, but manage the account yourself

If a website is to be maintained long-term, it is best placed in a GitHub repository.

The role of GitHub can be simply understood as: saving website code and historical versions. In the future, every time you add an article, change a page, or fix a bug, you can leave a record. Vercel can also connect to the GitHub repo to achieve automatic deployment: as long as you push new code to GitHub, Vercel will automatically republish the website.

You must do the account part yourself:

1. Register a GitHub account.
2. Enable 2-factor authentication.
3. Create a new repository, for example `my-teaching-site`.
4. Decide if the repository is public or private.
5. If a tool needs to authorize GitHub, confirm the authorization scope yourself.

GitHub's official repo creation guide is here: [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

Once the repository is created, you can give the repository address to the Agent:

 ```text
I have already created an empty repository on GitHub:
https://github.com/your-name/my-teaching-site

Please initialize the current local project as a git repository and push it to this GitHub repository.

Requirements:
1. Check first if there is already a git repo in the current directory
2. Create an appropriate .gitignore
3. Do not commit node_modules, .env, or temporary files
4. Write the commit message as "initial teaching website"
5. Push to the main branch
6. Run a build check before pushing
``` 

If you aren't logged into GitHub locally, the Agent might get stuck at the authentication step. Do not send your password directly to the Agent here. A safer way is:

- Login using GitHub Desktop.
- Or login using the GitHub CLI.
- Or complete GitHub authorization in your IDE.
- Or configure SSH keys and use the SSH address to push the repository.

Once authentication is complete, the Agent can continue pushing.

I highly recommend configuring SSH for a local Agent. The process is roughly:

1. Generate an SSH key locally.
2. Add the public key to your GitHub account.
3. Use the SSH address when cloning or binding a repository, like:

 ```text
git@github.com:your-name/my-teaching-site.git
``` 

This way, when the Agent executes `git push`, it uses local SSH authentication, and you don't need to send your GitHub token, API key, or password to it. Once configured, subsequent pushes will be much smoother.

You can let the Agent help you check, but don't let it safeguard your keys:

 ```text
Please check if the git remote of the current project uses an SSH address.
If not, please tell me what command I should change it to, but do not execute it yet.
``` 

There is a bottom line here: `.env`, API keys, tokens, student data should not go into the repository. Even if the repo is private, do not develop this habit.

If you change computers or servers, your first task should also be reconfiguring SSH keys. Previously when I migrated servers, the new server didn't register its SSH key with GitHub, and subsequent pushes could only temporarily go through HTTPS. It worked, but it got tripped up by tokens and authentication issues. If the infrastructure isn't set up well, no matter how fast the Agent works, it will get stuck on the last step.

You can have the Agent do a dedicated check once:

 ```text
Please check for sensitive information before committing:
1. .env files
2. API keys
3. tokens
4. Student names or grade data
5. PDFs or images that should not be public

Only report the results, do not automatically delete files.
``` 

That last sentence is also important. When it involves deleting files, it's best not to let the Agent act on its own.

## Vercel: Let the website publish automatically

After the code is pushed to GitHub, you can deploy it.

![Deployment chain of local project, GitHub, Vercel and purchased domain](/images/teaching-notes/deployment-chain.svg)

Vercel's basic process is:

1. Register a Vercel account.
2. Login with GitHub.
3. Select New Project in Vercel.
4. Import the GitHub repository from earlier.
5. Confirm if the framework is recognized correctly, such as Astro.
6. Confirm the build command, such as `npm run build`.
7. Confirm the output directory, such as `dist`.
8. Click Deploy.

Vercel's official Git deployment guide is here: [Deploying Git Repositories with Vercel](https://vercel.com/docs/deployments/git).

Agents can help in many places here, but they can't replace you completely. Authorizing GitHub on Vercel, selecting projects, and confirming accounts—you have to click these yourself. When a deployment fails, the Agent becomes very useful. Copy the Vercel build log to it; it can usually spot whether it's a dependency issue, a path issue, or a config issue.

Here is a real lesson: passing local builds does not mean GitHub Actions or Vercel will definitely pass.

I encountered a few types of differences at the time:

- The local Node version and CI Node version are different.
- The lockfile generated by the local npm version cannot be read by the CI's npm version.
- The local used a Chinese mirror, and `package-lock.json` wrote `registry.npmmirror.com`, which failed to access on an overseas CI.
- GitHub Pages is a clean build every time; Vercel might retain a build cache.
- Vercel's framework cache might leave old `.astro` references, causing it to still look for the old file even though you clearly changed the filename.

None of these issues look like code errors. They are environment differences.

You can have the Agent specifically check the environment:

 ```text
Please check the deployment environment risks of the current project:
1. Are the local Node version and package.json requirements consistent?
2. Does package-lock.json contain non-official npm registries?
3. Is the Node version used by GitHub Actions or Vercel explicit?
4. Will the build script clear old caches?
5. Do build cache directories like .astro or dist exist that shouldn't be committed?

Only provide check results and suggestions; do not directly change files.
``` 

If you don't know much about Node/npm, a simple rule is: make the local and deployment environments as consistent as possible. Don't have Node 24 on one side and Node 22 on the other; don't have npm v11 on one side and npm v10 on the other; don't take a lockfile with Chinese mirror addresses and run it directly in an overseas CI.

You can ask like this:

 ```text
Here is the failed Vercel deployment log:

(Paste log)

Please determine the cause of the failure and modify the local project.
After modifying, run npm run build to confirm the local build passes.
``` 

After the local build passes, have the Agent commit and push again:

 ```text
Please commit the changes that just fixed the Vercel build issue to GitHub.

Requirements:
1. Run npm run build first
2. Only commit files related to this fix
3. Write the commit message as "fix vercel build"
4. Push to GitHub
``` 

After that, Vercel will automatically redeploy. The official documentation also states that after connecting a Git repository, commits and pull requests can trigger deployments.

If it's an ordinary teacher building a site for the first time, I highly recommend first using Vercel to manually import the GitHub repo. Wait until the process is stable before considering GitHub Pages, dual-platform deployment, or complex CI. The more deployment platforms, the more cache and environment differences, and the higher the troubleshooting cost.

## Access in Mainland China: It's best to prepare your own domain

Vercel gives every project a default domain, usually `xxx.vercel.app`. This address works, but access from Mainland China is not stable. Sometimes it's slow, sometimes it won't open. For websites facing students and parents, it is best to prepare your own domain.

You don't have to buy a domain on the very first day. You can use Vercel's default address to test the website first. But if the website is going to be used long-term, especially to be sent to students, it is recommended to buy a domain early.

Domains can be purchased on platforms like [Alibaba Cloud](https://wanwang.aliyun.com/), [Tencent Cloud](https://dnspod.cloud.tencent.com/), [Cloudflare](https://www.cloudflare.com/products/registrar/), [Namecheap](https://www.namecheap.com/), etc. Domestic platforms usually require real-name authentication. After buying, what you need to do is DNS resolution.

DNS can be understood as: telling the Internet where to find your website when someone accesses this domain.

There are two common approaches.

First approach: connect the domain to Vercel.

In the Domains page of your Vercel project, add your domain, for example:

 ```text
example.com
www.example.com
``` 

Vercel will tell you what DNS records you need to add. You then go to your domain provider's backend to fill them in.

Common records are roughly:

| Domain | Record Type | Points to |
|---|---|---|
| `www.example.com` | CNAME | Target address provided by Vercel |
| `example.com` | A or other Vercel recommended record | Fill in according to Vercel page prompts |

Do not memorize a specific IP from an article or notes. Platforms might adjust them. Rely on the records given by the Vercel project page.

Vercel's custom domain documentation is here: [Setting up a custom domain](https://vercel.com/docs/domains/set-up-custom-domain).

Second approach: Use GitHub Pages.

GitHub Pages can also bind a custom domain, but again you have to configure it on both the GitHub repo settings and the DNS provider's backend. GitHub's instructions are here: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/articles/setting-up-your-pages-site-repository).

If you are already using Vercel, don't mess with GitHub Pages at the same time. Keep only one main deployment chain for a website; it's easier to troubleshoot when things go wrong.

After DNS configuration is complete, it might take a few minutes for the DNS to take effect, or it could take longer. If it won't open right after changing, it doesn't necessarily mean it's wrong. Wait a bit, then test it again using Vercel's check results and your browser.

## What content is suitable for long-term Agent maintenance

After a website is published, maintenance has just begun.

Tasks suitable for handing over to an Agent include:

- Adding a new blog post.
- Organizing a Markdown draft into a website article.
- Converting LaTeX handouts into web Markdown.
- Batch correcting filenames.
- Updating the sidebar.
- Checking for dead links.
- Fixing build errors.
- Committing newly added content to GitHub.

If there is a lot of content, it is best to use "batches" instead of throwing everything at the Agent at once. When I was importing handouts, a stable completion standard was: English version, Chinese version, images, and build checks, all completed together in the same batch. Don't just import English today, patch in Chinese tomorrow, and find images the day after. Dragging it out makes it hard to know what is missing from which chapter.

You can use this prompt:

 ```text
I want to add a new teaching blog post.

Title: ...
Draft is as follows:
...

Please:
1. Organize it into Markdown according to the existing website style
2. Put it in the teaching-notes directory
3. Use lowercase English and underscores for filenames
4. Update the teaching blog index page
5. Do not modify unrelated files
6. Run npm run build
7. After the build passes, commit to GitHub, but let me confirm the commit content first
``` 

Handout migration can be written like this:

 ```text
I want to convert a math handout into a website page.

Requirements:
1. Keep chapter titles and example numbering
2. Change math formulas to a renderable Markdown + KaTeX format
3. Present exercises and examples in separate blocks
4. Do not stuff TikZ diagrams directly into Markdown; remind me to convert them to SVG first
5. After conversion, check if formulas are closed
6. Run a build check
``` 

The common ground of these tasks is: rules are clear, repetition is high, and a portion of errors can be caught through build checks. Agents do this very well.

There is another very practical rule: things that can be handled by scripts shouldn't all be handed over to an Agent's judgment.

For example, batch renaming files, checking links, scanning for `katex-error`, counting if Chinese and English files are paired up—these are deterministic tasks. Having the Agent write a script and run it is more reliable than having it "check based on feeling". Agents are more suited to handle parts that require judgment, such as whether a handout's structure is clear, whether a paragraph of explanation is suitable for students, or whether formula derivations skip steps.

Tasks that are not suitable for entirely handing over to an Agent are also very clear:

- Judging whether a math problem's analysis is correct.
- Judging whether a piece of textbook content can be made public.
- Judging whether student data should be anonymized.
- Deciding the overall positioning of the website.
- Purchasing domains and handling account security.
- Deleting massive amounts of files.

Agents can give advice, but the final decision must be yours.

## A relatively steady complete process

If I were to lay out a process for an ordinary teacher, I would arrange it like this:

1. First use a chat model to organize the website columns and content list.
2. Choose an Agent that can run projects locally, such as [Codex](https://openai.com/codex/), [Claude Code](https://www.anthropic.com/product/claude-code), [OpenClaw](https://openclaw.ai/), [WorkBuddy](https://www.codebuddy.cn/docs/workbuddy/Overview) or [Trae SOLO](https://www.trae.ai/solo-web).
3. Let the Agent create the static website project.
4. Preview locally, and repeatedly tweak the homepage, navigation, and styling.
5. Let the Agent configure math formula rendering.
6. Put in 2-3 pieces of real content, rather than just looking at sample pages.
7. Run a build check.
8. Register for GitHub yourself and create a repository.
9. Let the Agent commit and push the local project to GitHub.
10. Register for Vercel yourself and import the GitHub repository.
11. After successful deployment, test it with the default domain.
12. If for long-term use, purchase a domain and configure DNS.
13. Every time content is added in the future, let the Agent push only after the local build passes.

This process does not require the teacher to become a programmer. It requires the teacher to know what is happening in each step.

I think this is the biggest change in website building in the era of AI Agents: previously, teachers either learned to code or found someone to do it. Now, you can let an Agent do most of the construction work. But the accounts, domain, content boundaries, and publication responsibilities must still be held by yourself.

A website is not a one-time work. It will slowly become a teaching resource library. It doesn't need to be big at the start; being able to update stably is much more important than how pretty the homepage is.
