---
title: TMUA Question Bank Share Pack Guide
---

# TMUA Question Bank Share Pack Guide

This article is written for teachers who have received the TMUA question bank share pack.

The share pack is essentially a local web project. Once you unzip the compressed package and double-click the `index.html` inside, you can open the TMUA practice system. It does not require a server, does not require installing npm, and does not require you to know how to write code.

If you just want to try it out first, you can open the online version:

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

If you want to know how this question bank was made, you can read this workflow explanation:

[Making a TMUA question bank: Manage the data first, then make the website](./tmua_question_bank_workflow)

This guide only talks about one thing: after you get the compressed package, how do you specifically use it, how do you get an Agent to help you modify it, and how do you configure QuickForm to collect feedback and grades.

## 0. Look at the conclusion first

After receiving the compressed package, do things in this order:

1. Unzip it first; do not open files from inside the compressed package.
2. Double-click `readme.html` and read the illustrated guide first.
3. Double-click `index.html` to try out the practice system.
4. If you need to make modifications, give the entire folder to an Agent software to read.
5. For the Agent software, you can use tools like [WorkBuddy](https://www.workbuddy.cn/), or ones you are familiar with like Codex, Claude Code, Cursor, etc.
6. If you want to collect data for your own school, go to [QuickForm](https://quickform.cn/) to register and create a form.
7. Fill the QuickForm API endpoints into the corresponding files in the share pack.
8. Test the question feedback, grade submission, and dashboard reading.
9. Finally, re-compress the entire folder to send to students or colleagues.

One thing must be made clear first: my QuickForm API endpoints are by default not hardcoded into the share pack. This way, data from different schools won't get mixed together. For long-term use, you will need to configure your own QuickForm.

## 1. What files are in the share pack?

After unzipping, you will see a structure similar to the following:

```text
readme.html             Illustrated instruction manual, recommended to open first
index.html              Entry point for the TMUA practice system
questions_data.js       Question bank data
dashboard.html          Grade dashboard, requires configuring your own QuickForm
feedback-dashboard.html Question feedback dashboard, requires configuring your own QuickForm
css/                    Page styles
js/                     Logic for practice, feedback, and exporting
images/                 Question images
AGENTS.md               Project rules for Agents / AI assistants to read
skills/                 Task rule cards for Agents to use
README.md               Plain text instructions
```

The most commonly used are these three:

- `readme.html`: Look at this first. It is an illustrated guide for teachers.
- `index.html`: The actual practice system.
- `questions_data.js`: The question bank data. In the future, modifying or adding questions mostly means modifying this.

Do not just take `index.html` out on its own. It needs `questions_data.js`, `css/`, `js/`, and `images/` in the same directory.

## 2. Opening the share pack for the first time

### Step 1: Unzip

Right-click the compressed package and select "Extract to Here" or "Extract to Specified Folder".

Do not double-click the HTML directly inside the compressed package. Many browsers cannot read files in the same directory under these circumstances; the page might open, but the question bank will fail to load.

### Step 2: Open the instruction page

Enter the unzipped folder and double-click:

```text
readme.html
```

After opening, you will see several entry points:

- Open practice system
- Open grade dashboard
- Open feedback dashboard
- View question bank data
- View included skills

For first-time use, you only need to click "Open practice system".

### Step 3: Try practicing a question

After entering the system, it is recommended to try in this order:

1. Click "Start Practice".
2. Select a year and a Paper.
3. Randomly do a question.
4. Click an option and submit the answer.
5. View the analysis.
6. Click "Feedback on this question" to confirm the feedback window opens.

If formulas display as `$...$`, it usually means KaTeX hasn't loaded. In a networked environment, it will usually render automatically; if your local browser blocks the CDN, you can try the online version first:

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

## 3. How to use the online version

The online version is for teachers to quickly try out and provide feedback:

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

The online version already has a question feedback channel configured. If you find a problem with a question, it is recommended to directly click "Feedback on this question" in the online version.

This way, the system will automatically include:

- Question ID
- Year
- Paper
- Question number
- topic
- modules
- sections
- skills
- Current page info

Do not just send a message saying "A question from 2018 seems wrong". Question bank maintenance fears this kind of feedback the most because the cost of locating it is very high. Clicking "Feedback on this question" saves a lot of back-and-forth confirmation time.

## 4. What is the local version suitable for?

The local share pack is suitable for a few types of scenarios.

The first type is preparing your own lessons. You can treat it as a local TMUA question bank, filtering questions by year, Paper, and knowledge points.

The second type is student practice. You can send the entire folder to students and have them unzip it and open `index.html`.

The third type is secondary modification. For example, if you want to:

- Add new exam questions;
- Modify it for MAT, AMC, AIME, or internal school tests;
- Adjust question classifications;
- Modify page titles and descriptions;
- Configure your own feedback form;
- Configure your own grade submission and dashboard.

It is not recommended to hardcode these modifications manually. A steadier way is to hand the entire folder over to an Agent software.

## 5. Using an Agent software to read the folder

Here we use [WorkBuddy](https://www.workbuddy.cn/) as an example. Different Agent software have different interfaces, but the process is similar.

### Step 1: Open WorkBuddy

After entering WorkBuddy, create a new task or project. What you need to do is not normal chatting, but letting it read and operate on a local folder.

If the software asks you to choose a working directory, choose the unzipped share pack folder, which is the directory containing `index.html` and `questions_data.js`.

### Step 2: Let the Agent read the rules first

Do not come right out and say "Help me add a set of questions". Let the Agent read the project rules first.

You can copy this paragraph:

```text
Please first read readme.html, AGENTS.md, and the skills/ directory in this folder.

This is a local static TMUA practice system. It is required to remain usable by double-clicking index.html after unzipping.

Do not introduce a server, an npm build process, a React/Vue project transformation, or a database.

Next, please modify the system according to my requests. After finishing, please tell me:
1. Which files were modified;
2. Why these files were modified;
3. How I should test it manually;
4. Whether there are places that require my manual review.
```

This step is very important. The `AGENTS.md` and `skills/` in the share pack are rule cards for the Agent to see. They tell the Agent: which files can be modified, which links need to be configured manually, and how to keep the question bank fields consistent.

### Step 3: Select prompts based on the task

If you want to modify questions, let the Agent use:

```text
skills/question-bank-importer/SKILL.md
```

If you want to modify the local system or repackage, let the Agent use:

```text
skills/tmua-local-maintainer/SKILL.md
```

If you want to modify QuickForm, feedback forms, grade submissions, or the dashboard, let the Agent use:

```text
skills/quickform-feedback-editor/SKILL.md
```

You can say it like this:

```text
Please read and follow skills/question-bank-importer/SKILL.md.
Next, I will give you a PDF and an answer key. Please do a sample of the first 5 questions first; do not import the entire exam paper at once.
```

## 6. Having the Agent correct a specific question

Suitable for this situation:

- The answer is wrong;
- The formula displays incorrectly;
- The image is missing;
- The analysis is unclear;
- The topic or skill classification is inaccurate.

The prompt is as follows:

```text
Please read and follow AGENTS.md and skills/question-bank-importer/SKILL.md.

Please only check this question in questions_data.js:

Question ID: <Fill in Question ID>
Problem description: <e.g., Wrong answer / Formula displays incorrectly / Analysis needs modification>

Requirements:
1. Only modify this question, unless image paths also need fixing.
2. Keep the Question ID unchanged.
3. Check if question, options, answer, analysis, topic, modules, sections, skills, images, and has_image are consistent.
4. Do not guess uncertain information; mark it as needs_review.
5. Tell me which fields you modified after finishing.
6. Tell me how to open it with index.html?id=<Question ID> to review it.
```

After modifying, manually open:

```text
index.html?id=<Question ID>
```

If it is inconvenient to type in the browser's address bar, you can also open `index.html` first and then find that question by year and Paper.

## 7. Having the Agent add a new exam paper

Do not directly say "Add all of this PDF into the question bank". This type of task is very easy to make too big at once.

It is recommended to do a 5-question sample first.

The prompt is as follows:

```text
Please read and follow AGENTS.md and skills/question-bank-importer/SKILL.md.

I want to add a new exam paper to this local practice system. Please add the questions into questions_data.js based on the PDF or per-question screenshots I provide.

Exam Info:
- Exam Name: <e.g., MAT / STEP / AMC / Internal School Test>
- Year: <Year>
- Paper: <Paper / Section / Round>
- Number of Questions: <Quantity>
- Question Source: <PDF or screenshot path>
- Answer Source: <answer key path>

Requirements:
1. The question stems, options, and math formulas must be restored from the original PDF or screenshots.
2. Read answers only from the answer key I specify.
3. Do not rewrite questions from memory.
4. Put images in images/, and reference them correctly in the question fields.
5. Mark uncertain information as needs_review; do not fabricate.
6. Complete the first 5 questions as a sample first, and let me confirm the format before continuing.
```

When confirming the sample, focus on five things:

1. Are there any missing characters in the question stem?
2. Are the formulas messed up by OCR?
3. Is the order of options correct?
4. Does the answer key match?
5. Do the images display?

If the sample is fine, then let the Agent continue with the next batch. 10 to 20 questions per batch is appropriate.

## 8. What is QuickForm for?

[QuickForm](https://quickform.cn/) can be understood as a lightweight form backend. The webpage POSTs data to it, it saves the submission records for you, and then you go to the backend to view the results.

In this share pack, QuickForm can do three things:

1. Collect question feedback;
2. Collect students' mock exam grades;
3. Provide a read API for the data dashboard.

The share pack by default does not hardcode specific QuickForm links. You need to register for QuickForm yourself, and then create your own forms.

## 9. QuickForm Configuration Overview

You need to know five locations:

```text
js/feedback.js          Question feedback POST address
feedback-dashboard.html Question feedback read address
js/quiz.js              Grade submission POST address
js/export.js            Old version grade submission helper logic; must be synced too
dashboard.html          Grade dashboard read address
```

Among them:

- POST addresses are used to submit data;
- Read addresses are usually used by the dashboard to pull data;
- Read addresses usually have an extra read suffix compared to the POST address; rely on what the QuickForm backend provides.

Do not mix question feedback and grade submissions. Question feedback is for teachers to report question issues; grade submission is for students to submit mock exam results. It is best to split them into two QuickForm forms.

## 10. Creating the Question Feedback Form

First, create a "Question Feedback" form in QuickForm.

Suggested fields are as follows:

```text
feedback_kind
feedback_type
message
teacher_name
school
contact
question_id
year
paper
num
topic
modules
sections
skills
primary_section
page_url
submitted_at
```

You don't necessarily have to create all the fields manually; it depends on how QuickForm receives them. Some form tools will automatically receive the fields in the POST. But you must at least know these fields will appear, so you won't get lost when exporting data later.

Once created, fill the question feedback POST address into:

```text
js/feedback.js
```

Find this line:

```js
const QUICKFORM_FEEDBACK_API_URL = '';
```

Change it to your address.

Then fill the question feedback read address into:

```text
feedback-dashboard.html
```

Find this line:

```js
const API_URL = '';
```

Change it to your read address.

## 11. Creating the Grade Submission Form

If you want students to submit mock exam grades, create another "Grade Submission" form.

Suggested fields are as follows:

```text
student_name
exam_date
paper
score_total
score_correct
score_wrong
score_pct
time_seconds
avg_seconds
wrong_questions
topic_breakdown
module_breakdown
section_breakdown
skill_breakdown
question_results
```

Once created, fill the grade submission POST address into two files:

```text
js/quiz.js
js/export.js
```

Look in these two files for:

```js
SCORE_QUICKFORM_API_URL
```

Fill in your grade submission address.

Then fill the grade dashboard read address into:

```text
dashboard.html
```

Find:

```js
DASHBOARD_QUICKFORM_API_URL
```

Fill in your read address.

## 12. Letting the Agent configure QuickForm for you

You don't need to change it by hand yourself. Copy the addresses given to you by the QuickForm backend, and let the Agent change them.

The prompt is as follows:

```text
Please read and follow AGENTS.md and skills/quickform-feedback-editor/SKILL.md.

I have already created my own forms in QuickForm.

Question feedback POST address: <Fill in your address>
Question feedback read address: <Fill in your read address>
Grade submission POST address: <Fill in your address>
Grade dashboard read address: <Fill in your read address>

Please help me fill the corresponding addresses into:
1. js/feedback.js
2. feedback-dashboard.html
3. js/quiz.js
4. js/export.js
5. dashboard.html

Requirements:
- Do not modify questions_data.js.
- Preserve the fallback function of copying feedback content when submission fails.
- After modifying, tell me how to test one question feedback, one grade submission, and one dashboard read.
```

## 13. How to test after configuring QuickForm

### Testing Question Feedback

1. Open `index.html`.
2. Enter any question.
3. Click "Feedback on this question".
4. Fill in test info, like `TEST feedback`.
5. Submit.
6. Go to the QuickForm backend to check if the record was received.
7. Open `feedback-dashboard.html` to see if the data can be read.

After testing, you can delete the test record in the QuickForm backend, or keep it and mark it as a test.

### Testing Grade Submission

1. Open `index.html`.
2. Enter a mock exam.
3. Do a few questions and finish.
4. Enter a test name, like `TEST Student`.
5. Click submit grades.
6. Go to the QuickForm backend to check if the record was received.
7. Open `dashboard.html` to see if the grade dashboard can read the data.

If the submission fails, do not rush to change the code first. Check three things:

1. Did you copy the QuickForm address completely?
2. Did you swap the POST address and the read address?
3. Did the local browser block cross-origin requests?

## 14. Repackaging for students or colleagues

After the modifications are complete, re-compress the entire folder.

Do not just send `index.html`.

Prompt for the Agent:

```text
Please read and follow AGENTS.md and skills/tmua-local-maintainer/SKILL.md.

Please repackage this local practice system into a zip for sending to other teachers or students.

Requirements:
1. Confirm readme.html, index.html, dashboard.html, feedback-dashboard.html, questions_data.js, css/, js/, images/, README.md, AGENTS.md, skills/ all exist.
2. Do not pack temporary screenshots, browser caches, system files, or personal privacy data into the zip.
3. Compress the entire directory, keeping relative paths unchanged.
4. After packaging, tell me the zip file path and size.
```

Before packaging, do at least one check yourself:

1. Unzip the new zip;
2. Double-click `readme.html`;
3. Enter `index.html` from the instruction page;
4. Open a question;
5. Try the feedback button;
6. If QuickForm was configured, try a submission once more.

## 15. Frequently Asked Questions

### Why do formulas display as `$...$` when opened locally?

Math formulas rely on KaTeX rendering. In a networked environment, it usually loads automatically. If your network blocks CDNs, or the browser has strict restrictions on local files, formulas might temporarily display as raw text.

You can check with the online version first:

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

### Why did the feedback submission fail?

There are three common reasons:

1. The QuickForm address is not configured;
2. The POST address was entered incorrectly;
3. The local browser restricts cross-origin requests.

The share pack retains the fallback method of "copying feedback content". If submission fails, you can copy the content and send it to the maintainer; don't make students repeatedly submit.

### Why does the dashboard have no data?

First, confirm that you configured the read address, not the POST address.

The question feedback dashboard uses `feedback-dashboard.html`. The grade dashboard uses `dashboard.html`. These two pages read different data; do not mix them up.

### Can this system be modified for other exams?

Yes, but it is recommended to start from a 5-question sample.

First let the Agent handle a small batch of questions, confirm the fields, formulas, images, answers, and filters have no issues, and then continue importing the whole exam paper.

## 16. One Last Piece of Advice

Do not treat this package as a normal HTML file. It is more like a small question bank workspace.

Teachers are responsible for judging if the questions, answers, and classifications are reliable. The Agent is responsible for handling files, changing code, and batch organizing. QuickForm is responsible for collecting feedback and grades. Keeping these three things separate will prevent things from getting messy later.

If you just want to try it out, start here:

[https://www.mathw.cn/practice/tmua/](https://www.mathw.cn/practice/tmua/)

If you want to see the complete construction thinking, start here:

[Making a TMUA question bank: Manage the data first, then make the website](./tmua_question_bank_workflow)
