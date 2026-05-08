---
title: After Using AI to Write Handouts, I Nearly Forgot How to Teach
---

I recently built a personal website with [OpenClaw](https://www.openclaw.ai/). Back in my PhD days, setting up a personal site meant days wrestling with frameworks and CSS. Now, a few conversations with AI and a polished site is ready. That made me think — it's time to start writing a blog.

For the first post, I want to share my experience using AI to generate course handouts. Not a tutorial, just honest reflections — including the mistakes I made.

## Why I started using AI for handouts

I teach A-Level Further Mathematics. Commercial textbooks have a problem: knowledge points sit in isolation, with little connection between chapters. I wanted to give students a set of notes that trace how ideas develop, weave in exam questions, and offer extension material for different levels.

Writing all of that in [LaTeX](https://www.latex-project.org/) by hand is enormous. [FP2](/further-math/fp2/), [FP3](/further-math/fp3/), [S2](/further-math/s2/), [M2](/further-math/m2/), S3 — five full sets of course notes, typed from scratch by one person. I had no idea how long that would take.

So I started using AI.

## My workflow

I began with [Cursor](https://cursor.com/) IDE. AI capabilities were more limited back then, so my approach was: first think through the chapter structure myself, then brainstorm with AI on how to sequence the knowledge points and what examples would work best as introductions.

Once the framework was set, I'd have AI generate a rough LaTeX skeleton, then refine it section by section. I kept a set of fixed prompts, swapping in different course content each time.

Most examples needed me to come up with the framework and let AI fill in the details. For the [S2](/further-math/s2/) chapter on the Binomial Distribution, I was researching the origins of probability theory and found the famous correspondence between Pascal and Fermat — in 1654 France, two knights wagering 64 gold coins, Antoine leading 2:1 when the game was interrupted. How should the coins be divided fairly? The answer leads directly to the definition of the binomial distribution. I thought it would make a great classroom introduction, so I designed the structure and had AI add historical detail, polish the narrative, and embed the mathematical derivation.

Exam questions were more tedious. I needed OCR tools (now recommended: [LlamaParse](https://github.com/run-llama/llama_parse)) to convert problems into LaTeX, then have AI integrate them into the handout. Every graph — functions, 3D geometry, polar coordinates — required multiple rounds of adjustment. AI can't check how a rendered PDF looks, can't judge whether the vertical spacing between a problem and its workspace is reasonable. All of that had to be done by hand.

Each time I started a new chapter, I'd feed the previous handout to AI as a format reference. Looking back, that was wasteful — stuffing an entire old handout into the context every time instead of defining a proper format standard upfront. AI capabilities improved over time, tools supported longer contexts, and things got better.

## The pitfalls

### First pitfall: a better-looking structure that taught worse

When writing the S3 handout, I combined two chapters — "Combination of Random Variables" and "Estimators and Confidence Intervals" — into one. My reasoning: students would see how the earlier material applies in later topics, which should feel more coherent. AI agreed and generated the complete handout.

Then I taught it. The interleaved structure worked fine for the strongest students, but for most, it was disorienting. They hadn't solidified one concept before being pushed to the next, and the pacing fell apart. I split the chapters back apart, set clear learning objectives for each, and the teaching improved significantly.

AI can organize your content to look "elegant," but elegant doesn't mean teachable. Curriculum structure and knowledge structure are different things.

### Second pitfall: the framework was right, the questions were made up

For a while I was exploring [NotebookLM](https://notebooklm.google.com/) and found it well-suited for planning handout frameworks. I uploaded STEP past papers and asked it to plan a complex numbers handout — exam-focused, with theory as support.

The framework it produced was excellent. It even cited specific questions from the papers. I sent the outline (questions included) to my AI IDE to write the handout, and did a quick check — I recognized those problems, and the initial review looked fine.

Then I taught it. There were errors in the questions. On closer inspection, NotebookLM had preserved the general structure of each problem while completely rewriting the content inside. The scaffolding and transitions were wrong. This kind of mistake is harder to catch than hallucination — the framework looks right, so you instinctively trust that the questions are right too.

I ended up rewriting the entire handout from the original papers.

### Third pitfall: good handouts made me a lazy teacher

This one was the hardest to spot.

After completing all five sets of handouts, I gradually realized I'd become the kind of teacher who just reads through material in class — except the material wasn't a textbook, it was my own handout. Teaching actually got worse than the days before I had any handouts, when I just wrote on the board.

Having ready-made handouts made me lazy. Before each lesson, I stopped thinking deeply about the flow and structure of the class. I had everything written out already, so I'd just go through it. Students sat and listened while I walked through definitions and exercises. Flat. Lifeless.

I was the one who noticed the class had become dull.

This wasn't AI's fault — it was mine. But the faster and better the handouts got, the less effort I put into lesson preparation.

## What I do now

I still use AI to write handouts. Five complete sets of notes would have been impossible without it.

But the role of the handout has changed. It's no longer the script for the class — it's supporting material. Students use it for exercises and reference, but the rhythm of the lesson is led by the board.

Before every lesson, I still spend time designing the flow. For concepts that appear in the handout, I'll find a different way to introduce them — something from current events, or an unexpected angle. The board and the handout cover the same content, but present it differently, which actually helps students stay engaged.

The time AI saves me, I spend on something more important: thinking about how to make each lesson interesting.

## Final thoughts

The efficiency gains from using AI for handouts are real. Five complete sets of notes — doing that by hand would have taken forever. Tools improve, workflows get refined, and it's a net win no matter how you count it.

But tools change more than efficiency. They changed my relationship with handouts, and with the classroom. From "I write the handouts" to "AI writes the handouts" to "handouts are support material, the classroom is the stage" — the journey was more winding than I expected.

If you're using AI for teaching materials, here's the one thing I'd say: don't just sit on the time you save. Use it to think about how to teach better. AI can write your handouts. It can't teach your class.
