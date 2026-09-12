---
title: "Making a TMUA question bank: Manage the data first, then make the website"
---

# Making a TMUA question bank: Manage the data first, then make the website

I used to think of "making a question bank" as making a webpage: students open the page, choose a year, choose a Paper, click options, and the system tells them if they are right or wrong.

It wasn't until I actually put the TMUA past papers from 2016 to 2023 in that I realized the webpage is just the outermost layer.

Simply put, the frontend is what students see and click in the browser, such as the question page, filter buttons, submitting answers, and re-doing incorrect questions. The backend is the part of the website that remembers things and calculates things for you behind the scenes, such as saving students' answer records, calculating the accuracy rate of a certain type of question, and managing accounts and permissions. Many websites also have a database specifically for storing questions, users, and grades.

If it's just letting students open a webpage to do questions, the frontend can do a lot. If you want students to keep their incorrect questions after changing computers, or teachers to see class data after logging in, then you usually need to use a backend and a database.

The TMUA practice system I made this time is mainly about turning questions into data that can be used in a webpage, and then pairing it with a frontend page for students to practice. After finishing it, I became increasingly certain of one thing: the trouble of building a question bank does not lie first in the frontend, nor in the backend, but in the data.

The so-called data is not just the question stem and the answer. Every question needs a stable ID, a clear analysis, needs to be filterable by year, Paper, and knowledge point, and needs to correspond with the handouts. After students finish, the system should ideally be able to tell them where they are weak. When a teacher sees a statistical table, they also need to be able to trust that the questions, answers, images, and formulas inside are not messed up.

"Data governance" here is not some mysterious management buzzword. In the context of a question bank, it's a few tedious but critical things: how to number the questions, how to unify the fields, what standards to use for classification, how deep the analysis should be, how to check images and formulas, and how to leave a record after correcting mistakes.

This time, the question bank covers the years 2016-2023, Paper 1 and Paper 2 for each year, 20 questions per paper, totaling 320 questions. Students can practice by year and Paper, or they can do random practice, mock exams, or re-do incorrect questions; teachers can see grades and knowledge point diagnostics; questions are also linked to corresponding handout modules.

In the past, there is a high probability I wouldn't have done this. Not because I couldn't think of it, but because I couldn't finish it.

Now with AI Agents, a lot of the dirty work can be handed off. Teachers don't have to handle every technical detail themselves, but they must first set the standards clearly. If the standards are unclear, the faster the AI works, the harder it is to clean up later.

## Don't rush to make pages

Many teachers have questions on hand. PDFs, Word documents, screenshots, class handouts, past exam papers, scattered in various folders. If they really need to find a question, they can find it.

But this does not equate to having a question bank.

And a question bank is not something that can be solved by just "making a pretty webpage". The page can be a bit crude at first; as long as the questions display accurately and students can smoothly submit, it's enough for the early stages. The underlying data cannot be slacked on.

A question bank useful for teaching must at least answer a few questions:

What type of questions should students practice right now?

After making a mistake, which piece of content should be reinforced next?

How does the teacher know if this class of students is weak in algebra, weak in logic, or weak in graph questions?

After finishing a handout, are there corresponding questions to practice immediately?

If a question bank cannot answer these questions, it is just a relatively tidy folder.

So when I made the TMUA question bank, the first thing I asked was: what information should each question carry? Technically these are often called "fields"; you can just think of them initially as columns in an Excel sheet. In the end, each question looks roughly like this:

 ```js
{
  id: "2016-P1-Q1",
  year: 2016,
  paper: 1,
  num: 1,
  topic: "Algebra",
  question: "...",
  options: { A: "...", B: "..." },
  answer: "H",
  analysis: "...",
  modules: ["a1_algebra_basics"],
  sections: ["a1.expansion_collection"],
  skills: ["coefficient-comparison"]
}
``` 

This string of things looks like technical details, but behind it is pedagogical judgment. Whether the frontend can filter, calculate statistics, and make recommendations basically depends on whether these fields were thought out in advance.

`id` is the ID card number of this question. `year`, `paper`, `num` solve the positioning problem. If a student says "I don't understand 2021 Paper 2 Question 17," the teacher can find it immediately.

`topic` solves major category diagnostics. Is the student actually weak in functions or weak in probability?

`modules` solves handout correlation. After teaching a certain handout, you can directly know which past papers follow up.

`skills` is even more granular, recording the actual actions students use, such as factorization, constructing counterexamples, graph intersections, or case analysis.

Teachers don't need to memorize these field names from the start, but they must remember one question: why is this question worth practicing? The frontend is only calling these answers; it cannot make the judgment for the teacher.

## AI is suited for dirty work, but don't let it set the standards

Without AI, the most painful part of this project would be the mechanical labor.

Extracting question stems and options from PDFs, organizing formulas, filling in answers, writing Chinese analysis, processing images, tagging questions, and then stuffing them into webpage data files. Doing this repetitively for 320 questions makes it very easy to break down.

A large portion of these things can now be handed over to Agents.

- Organizing questions into a unified format
- Writing out Chinese steps based on official answers or existing analyses
- Judging whether a question mainly tests algebra, functions, graphs, or logic
- Suggesting corresponding handout modules for questions
- Checking if the answer exists in the options
- Discovering missing image paths, abnormal formula formatting, or inconsistent question IDs
- Opening the webpage question by question to check if the question actually displays

This is already more than just "typing for me". AI can participate in data organization: turning raw PDFs into structured questions, putting loose analyses into unified fields, and filtering out errors that are hard for humans to comprehensively check.

Especially during the review stage, AI is very suitable for the first round of screening. For example, if a Paper has 20 questions, you can have 20 sub-tasks check them respectively: is the question stem incomplete, are options missing, is the final answer in the analysis consistent, did the image load, are the tags reasonable. Each sub-task is only responsible for one question, the boundaries are clear, and errors are easily located.

But this does not mean the teacher can withdraw.

AI can make judgments, but its judgments need standards. Without standards, it will make classifications too full, write analyses too long, and ultimately might not serve the teaching.

## The First Thing: Classification Standards

The most easily underestimated thing in a question bank is classification.

Does a question belong to Algebra, Functions, Graphs, or Logic? Often there is no single answer. For example, one question might look like it's solving an equation, but actually requires looking at graph intersections; another uses algebraic simplification, but tests necessary and sufficient conditions.

AI can give suggestions, but the teacher must decide what this classification serves.

If the question bank is just for searching, then the more tags the better.

If the question bank is for review diagnostics, the main tags cannot be too arbitrary.

If the question bank is to connect with handouts, `modules` must remain consistent with the handout structure.

I later divided classifications into several layers.

The first layer is major categories that both students and teachers can understand, like Algebra, Functions, Graphs, Probability.

The second layer is handout modules, like `a1_algebra_basics`, `c_sequences_series`, `i_functions_graphs`. This layer must be done seriously because it determines whether the question bank can support the course in reverse.

The third layer is finer skills, like `coefficient-comparison`, `case-analysis`, `counterexample-construction`. This layer doesn't have to be perfect from the start; it can slowly grow during the process of reviewing questions.

What the teacher needs to do is prevent classifications from becoming decorations.

Every time a tag is added, ask: what will students or teachers use it for in the future? If no one will use it, then it is just pretty metadata.

## The Second Thing: Who is the analysis written for?

AI is very good at writing analyses. Sometimes even too good.

It will turn a multiple-choice question that can be done in two minutes into five or six steps, with a very complete tone and very smooth logic. The problem is, students don't necessarily need it to be that long.

TMUA analyses cannot just pursue "completeness". They must serve exam training.

Some questions need the steps broken down in detail, because students easily get stuck on the first step.

Some questions need to provide quick ideas, because exam time is very tight.

Some questions need to point out traps, such as which option is a common calculation error.

Some questions do not need lengthy explanations; writing too much will drown out the main points.

So I prefer to divide the analysis into several functions:

Question analysis: what is this question actually testing?

Solution steps: how does the normal path go?

Quick ideas: are there faster judgments in the exam?

Correct answer: ultimately clearly falling on which option.

AI can generate these sections, but the style must be set by the teacher. The analysis is not written for the AI to see itself; it is written for the student who still has to do problems independently next time.

## The Third Thing: Question bank and handouts must support each other

If the question bank and handouts are separated, they will quickly become two separate systems.

The handout says "see question bank for after-class practice," but the student doesn't know which questions to practice. The question bank has many tags, but the teacher cannot remember which class they correspond to during lesson prep.

What I care more about is connecting the two sides.

The handouts are divided into 15 modules based on TMUA knowledge points. For each question in the question bank, I try to mark which modules it belongs to. This way, after teaching exponents and logarithms, sequences, function graphs, or logic counterexamples, corresponding past papers can be found.

Conversely, the question bank will also expose problems with the handouts.

If a certain type of question appears repeatedly, but there is no suitable place in the handout, that might indicate the handout needs an extra section.

If many questions are forced into Algebra, it means the major category of Algebra is too broad and needs finer sections.

If a certain skill tag appears frequently, like case analysis or constructing counterexamples, then it might be worth training separately.

At this stage, the question bank is no longer just practice links at the back of the handout. It will reversely remind me: which part of the course is taught too thin, which type of question is not placed well, and which skills actually need separate training.

## The Fourth Thing: Quality Bottom Line

Technically, many errors can be found by AI or scripts.

For example, duplicate IDs, answers not in options, non-existent image paths, missing fields in questions, un-rendered LaTeX, broken deep links. These should be automatically checked as much as possible.

But some quality problems still require teacher judgment.

Did the analysis bypass a key step?

Will the classification of this question mislead the student?

Although the image displayed, did it crop out important information?

Are the "quick ideas" in the analysis truly suitable for exams?

Placing a question under a certain handout module, will it make the student think it only tests this one knowledge point?

These are not purely technical problems.

I now prefer to divide auditing into two layers. The first layer is handed over to Agents and scripts to check formats, links, images, and answer consistency. The second layer is for the teacher to spot-check or focus-review, checking the pedagogical significance.

Not every step requires manual work from scratch, but someone must be responsible for quality.

## How I actually do it

I basically did it in this order at the end.

First, let AI come up with a usage plan. You can directly tell it: I want to make a question bank for students to practice TMUA, students need to be able to practice by year, Paper, and knowledge point, teachers want to see diagnostics, and questions should ideally link to handouts. Let it first list features, data fields, and possible pitfalls.

What the teacher needs to do is audit. Which features will actually be used? Which statistics are just for show? Which classifications can help with lesson prep? These questions cannot have AI make the final call for you.

The data structure can also be drafted by AI first. It will quickly list ID, year, Paper, question number, question stem, options, answer, analysis, image info, and classification tags. The teacher then looks at whether this set of fields is enough for teaching, and which fields will drag down maintenance later.

Then let the Agent do preliminary organization. PDF parsing, question extraction, formula processing, Chinese analysis, preliminary classification—these are all suitable for AI batch processing.

Then audit Paper by Paper. Process only one Paper at a time, check each question individually, and don't mix them up for huge changes. This stage mainly looks at whether the data is trustworthy: are the IDs messed up, do the answers match, are any images missing, is the classification passable, and can the student understand the analysis.

Once these are stable, put the questions into the frontend practice system. The student side handles practice, filtering, mock exams, and redoing incorrect questions; the teacher side handles viewing submitted grades and weak points. Putting the frontend at this position is much more comfortable, because it is using already organized data, rather than guessing requirements while patching data.

Finally, do pre-release verification. Question data must pass static checks, webpages must open, formulas and images must render, and deep links must lead directly to specific questions.

Much of the work inside here can have AI participation. What the teacher must grasp is the sequence: let AI produce the plan first, then audit the plan; organize the data first, then make the pages. If the order is reversed, you will be constantly reworking later.

## Written for teachers who want to try

After finishing this time, my view on AI became a bit more concrete.

A usable question bank in the past might have required data entry personnel, teaching research personnel, frontend developers, backend developers, and testers. Now a teacher, with the help of an Agent, can also produce a usable version first.

But the teacher cannot outsource the judgment along with it.

A teacher does not necessarily have to write every line of code themselves, does not necessarily have to manually check every image path, and does not necessarily have to type out every question word by word. AI can do these things. The teacher must first articulate what a "good question bank" means:

Are the questions faithful?

Is the analysis helpful to students?

Does the classification serve review?

Can the handouts and question bank support each other?

Are there copyright and data boundaries when used publicly?

After a student finishes, can the next step be clearer?

If these questions are not thought through clearly, the faster the AI works, the messier the system might become.

If these questions are thought through clearly, the speed of AI is useful. It can push forward a lot of work that previously could not be finished.

So now when I look at this TMUA question bank, what I care most about is no longer "I have 320 questions".

These questions are finally not just scattered in PDFs. They can enter practice, enter handouts, enter diagnostics, and also enter the next lesson prep.

This is when the question bank begins to be useful.

## Appendix: Tools used during implementation

This part is not a tutorial, just clarifying the tools I actually used. If teachers want to replicate it, they don't need to copy it completely from the start, but they must know what each type of tool is responsible for in the workflow.

### Agent Tools

I mainly used [OpenClaw](https://openclaw.ai/) and [Codex](https://openai.com/codex/). Similar tools can also include [Trae SOLO](https://www.trae.ai/solo) and [WorkBuddy](https://www.workbuddy.cn/).

The role of these tools in this project is similar: enter a local folder or code repository, read files, modify files in batches, generate frontend pages, run builds, and then give the results to you to check.

For example, have the Agent only process one Paper and fill the questions into a unified format; or have it check the ID, answer, image path, and LaTeX of a certain question in `questions_data.js`; you can also have it modify a frontend page, run a build, and see if the questions can display normally.

My experience is: do not let the Agent free-play too much. It is best to give it a very narrow task, like "only check the data and rendering issues of question 2019-P1-Q03", or "only fill in modules, sections, and skills for the questions in this Paper". The narrower the task, the easier it is to accept.

### Parsing Tools

PDF parsing mainly used [LlamaParse](https://developers.llamaindex.ai/llamaparse/).

The most troublesome things in past paper PDFs are formulas, options, graphics, and pagination. Ordinary OCR easily sticks options into the question stem, or mixes page numbers, headers, and copyright info into the questions. LlamaParse can do the first round of structured extraction, at least pulling out the questions, formulas, and some layout relationships.

But parsing tools can only solve the problem of "taking it out of the PDF", and cannot guarantee that the extracted content is definitely suitable for entering the question bank. Later, you still have to let an Agent check: are the question stems incomplete, are options continuous, do the images correspond to this question, and can the formulas render in the webpage.

### Version Control

Version control used [GitHub](https://github.com/).

Projects like question banks absolutely must have version control. The reason is simple: you will repeatedly modify questions, analyses, tags, and the frontend. Without Git, you will quickly not know which modification introduced an error.

I try to make each commit solve only one type of problem. For example, fixing 20 questions of a certain Paper at a time, fixing image paths at one time, or adjusting the tag system at one time. This way, if there is a problem, you can look back and check.

GitHub has another benefit: it gives boundaries to the Agent's work. After an Agent finishes modifying, it can't just say "I finished", you also look at the specific diff to see which files it actually modified.

### AI API

Model APIs mainly used [Xiaomi MiMo API](https://platform.xiaomimimo.com/docs/en-US/welcome) and [OpenAI API / GPT](https://developers.openai.com/api/docs).

I value multi-modal capabilities more here. TMUA questions have images, coordinate axes, geometric figures, and layout details; if a model can read images, it will be much more convenient when checking if images and question stems correspond.

- Generate first drafts: Write out the question analysis in Chinese steps first.
- Read images to verify: Check if the question stem and image correspond.
- Check logic: Determine if the analysis skipped steps.
- Assist classification: Judge topic, module, skill based on the question.

If using tools like Codex, Trae SOLO, or WorkBuddy, they often already have built-in models and do not require the teacher to bind APIs separately. Workflows like OpenClaw might require you to configure models yourself. There's no need to overcomplicate things here: having a model that can stably process text and images is enough, the focus is still on whether tasks are broken down clearly enough.

### Grade Collection Tools

After mock tests were done, I used [QuickForm](https://quickform.cn/) to collect students' submitted grades.

This use case is very simple: after a student finishes a set of mock tests, they submit their name, class, year, Paper, score, and time taken. The teacher doesn't have to scroll through chat logs for grades, nor do they need to temporarily create a messy spreadsheet. When you want to see the overall performance of a certain paper later, just look directly in the form results.

### Complete Workflow Diagram

![TMUA Question Bank Construction Workflow Diagram](/images/teaching-notes/tmua-question-bank-workflow.svg)

### My Division of Tools

Simply organized into a table:

| Step | Main Tool | What the teacher must grasp |
|---|---|---|
| Initial PDF parsing | LlamaParse | Are question stems, options, formulas and images faithful? |
| First draft organization | Agent + MiMo / GPT | Are fields complete, is the analysis suitable for students to read? |
| Question-by-question revision | Agent | Each Agent only modifies the questions it is responsible for |
| Tag classification | Agent + MiMo / GPT | Does classification serve handouts and review, rather than just looking pretty? |
| Frontend implementation | Agent | Is the student practice path smooth, is the page actually usable? |
| Version control | GitHub | Is each commit scope clear, can it be rolled back? |
| Pre-release checks | Agent + Local script + Browser | Are builds, links, formulas, images and deep links normal? |
| Mock grade collection | QuickForm | Can it correspond to student, year, Paper, score and time? |

More tools is not better. First break down the steps clearly, then decide which step to hand over to whom.

Parsing tools pull out the raw material. Agents go to modify files, run builds, and do batch checks. MiMo or GPT is used for reading images and generating analyses. GitHub leaves modification records. QuickForm collects mock test grades. The teacher watches to ensure standards haven't gone off track.

Now when I do similar projects, I first ask what steps this matter can be broken into, and what consequences errors in each step will cause. After thinking these through clearly, then decide which tool to hand it over to.
