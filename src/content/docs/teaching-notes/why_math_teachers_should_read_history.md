---
title: Why math teachers should read a little math history
---

# Why math teachers should read a little math history

The thing a math teacher needs to be most wary of is perhaps not explaining a problem incorrectly, but beginning to frequently say: "This is so simple, why don't you get it yet?"

Many teachers have said this sentence, or at least thought it in their hearts. It's usually not malicious, just impatience. But there is a very troublesome thing behind this sentence: the teacher has stood past the conclusion for too long, and has forgotten that the student is still before the conclusion.

Math teachers are prone to being affected by the "curse of knowledge". Once a person truly masters a certain concept, it is difficult to accurately imagine what their state was when they didn't understand it. Mathematics is especially so. Its symbols are too compressed, its conclusions too clean; after becoming proficient, everything looks like a matter of course.

The teacher feels that complex numbers are just a step in the expansion of the number system, while the student is still confused about whether "imaginary numbers are just made up". The teacher feels that matrix multiplication is just taking the row of the first matrix and dotting it with the column of the second, and placing the result in the corresponding position, while the student is still asking "why isn't it entrywise multiplication". The teacher feels that the auxiliary equation of a second-order linear differential equation is very natural, while the student doesn't understand why a quadratic equation can determine the solution of a differential equation. The teacher feels that probability formulas are just basic tools, while the student doesn't understand why games and dividing stakes would lead to a whole system of mathematics.

Are these questions really low-level? Not necessarily.

Many times, the places where students get stuck today are exactly the places where humanity has been stuck for long periods in the history of mathematics. The value of math history lies right here. It is not to add a few interesting stories to the classroom, nor is it to let students relax between doing practice problems. Its more important role is to remind teachers: behind a concise line of definition in the textbook, there may have been a long period of chaos, debate, and reorganization.

Math teachers reading math history is not for the sake of telling a few more anecdotes about mathematicians, but to re-understand "how people who don't understand math think".

## Textbooks write the result, students experience the process

The math in math textbooks is usually the completed math.

Definitions have been organized, symbols unified, theorems proven, formulas summarized, and examples filtered. When a student opens the textbook, what they see is a well-ordered system: first definitions, then properties, then examples, then exercises. It is clear, compact, and contains almost no nonsense.

But real math does not happen like this.

Real math often has problems first, then concepts; vague intuitions first, then clear definitions; makeshift methods first, then unified symbols; a large amount of inexplicable parts first, which are later compressed into a single "obviously" in the textbook.

This is the difference between textbooks and math history. Textbooks write math as results, while math history restores math into a process.

If a teacher is only familiar with the result, it is easy to misjudge the student's difficulties. In the teacher's eyes, the definition is already laid out, the formula has been derived, the examples done, and the student ought to just follow along. But for the student, the concept hasn't truly grown yet. What they see might just be a strange symbol, a suddenly appearing rule, a tool that hasn't yet been needed.

To a teacher,  $re^{i\theta}$  is the natural expression of complex numbers; to a student, many haven't even truly thought through what it means to put an irrational number in the exponent, let alone a complex number. To a teacher, matrix multiplication is just the dot product of each row of the former with each column of the latter; to a student, without the help of geometric transformations, this abstract rule is neither easy to understand nor easy to remember. To a teacher, writing the auxiliary equation  $ar^2+br+c=0$  is the standard procedure for solving second-order linear differential equations with constant coefficients; to a student, this step looks a lot like magic: why do the original  $y''$ ,  $y'$ , and  $y$  suddenly turn into a quadratic equation about  $r$ ?

The teacher stands after the concept matures, while the student stands before the concept is born.

The reason math history is useful is because it gives teachers the opportunity to go back to "before". It reminds us: this concept did not drop from the sky. It used to be unnatural, unclear, and not easily accepted. The student's hesitation today is not necessarily an intellectual problem; often, it is the historical resistance of the concept itself reappearing in the classroom.

These examples can be expanded upon:

- [Exponents are not just "multiplying a few times"](./exponent_not_repeated_multiplication): going from positive integer exponents, negative exponents, fractional exponents, irrational exponents, all the way to the derivative properties of  $e^x$ .
- [Why matrix multiplication is not entrywise](./matrix_multiplication_not_entrywise): explaining row times column and  $AB \ne BA$  from the composition of geometric transformations.
- [What exactly does the auxiliary equation omit?](./auxiliary_equation_operator_factorization): explaining second-order linear differential equations with constant coefficients using the factorization of differential operators.
- [From cubic equations to complex exponentials](./complex_numbers_to_complex_exponential): going from the square root of negative numbers in cubic equations to  $e^{i\theta}=\cos\theta+i\sin\theta$ .

## Students' errors are sometimes old intuitions rebelling

A teacher who has read a little math history will be slower to judge when facing student errors.

It is not strange that students do not understand complex numbers. Even the stable acceptance of  $0$  as a number took a long path in math history: it represents "nothing", yet can serve as a placeholder, and can also participate in calculations. Adults think this is a matter of course, but for beginners, "nothing" becoming an operable object is itself a conceptual leap. So when facing  $i$ , it is even more understandable that students feel unfamiliar. Complex numbers did not become natural because a teacher stipulated  $i^2=-1$ . They truly forced themselves into the mathematician's view starting from cubic equations: some cubic equations clearly have real solutions, but the intermediate steps of Cardano's formula require the square root of a negative number. The important part of Bombelli was not "inventing imaginary numbers" out of thin air, but realizing that some real number problems must temporarily pass through complex numbers in order to finally return to real number answers. If you then teach Argand diagrams, rotation, and scaling, what the student faces is no longer a weird symbol, but a history of a number system being forced to expand.

It is also very normal for students to treat matrix multiplication as a mechanical rule. The common classroom explanation is: the row of the first matrix dots the column of the second matrix, and the resulting number is placed in the corresponding position. This rule certainly needs to be calculated, but if it only stops at the calculation level, it looks very much like an artificial stipulation: why isn't it multiplying corresponding positions entrywise? Why are left multiplication and right multiplication different? Why can  $AB$  and  $BA$  usually not be swapped? If matrices are viewed as linear transformations in a plane or space, matrix multiplication is no longer just the mnemonic of "row times column", but the composition of "doing one transformation, then doing another". It is then no longer strange that order affects the result.

It is also very normal for students not to understand the auxiliary equation in second-order linear differential equations. Many classrooms will directly teach: when encountering

 $$
ay''+by'+cy=0
$$ 

just let  $y=e^{rx}$ , yielding  $ar^2+br+c=0$ . This method is efficient, but students can easily just memorize it as steps. Actually, a more illustrative perspective is to view  $D=\frac{d}{dx}$  as an operator, and write the equation as

 $$
(aD^2+bD+c)y=0.
$$ 

If this quadratic can be factorized, such as

 $$
a(D-r_1)(D-r_2)y=0,
$$ 

then the second-order equation is broken down into the continuous action of two first-order equations. First solve  $(D-r_1)u=0$ , then solve  $(D-r_2)y=u$ , and finally you naturally get the two classes of solutions  $e^{r_1x}$  and  $e^{r_2x}$ ; if the two roots are the same, an extra  $xe^{rx}$  will emerge. Viewed this way, the auxiliary equation is not a trick that appears out of thin air, but rather treating the differential operator as an algebraic object to be factorized. If the teacher only says "let  $e^{rx}$ ", the student might find it mysterious; if the factorization behind it is explained, they will more easily believe why this quadratic equation is sufficient to determine the general solution.

It is also very normal for students to find probability formulas abrupt. Probability theory did not grow naturally starting from "first define the sample space"; it was largely forced out from specific problems like games, betting, and dividing stakes. In S2 Chapter 1, if  $X\sim B(n,p)$  and  $\binom{n}{r}p^r(1-p)^{n-r}$  are given directly, students will easily treat it as yet another formula to memorize. But if we enter from the problem of dividing stakes discussed by Pascal and Fermat, things are different: when a game is interrupted, how should the stakes be divided? Fairness no longer depends on how many rounds have already been won, but on the probability of each person's ultimate victory across all possible future paths. Probability was not born for exam tables; initially, it was related to fairness, risk, game rules, and decision-making under uncertainty.

These examples illustrate that students' errors are not necessarily just errors. They are often developing understanding; they are conflicts between old intuitions and new concepts.

A good math teacher won't rush to eliminate a student's error, but will first identify what kind of difficulty this error belongs to. Is it unfamiliarity with calculation, or hasn't the concept grown? Is it a memory problem, or is the abstraction level not completed? Is the method unlearned, or are old intuitions hindering new concepts?

Math history can help teachers make this judgment.

## Start from the problem, not from the definition

The problem with many math classes is not that the teacher doesn't explain clearly enough, but that they explain *too* clearly.

So clear that there is no origin story, so clear that there are no problems, so clear that students can only accept and not participate in the generation.

The teacher comes right up and writes the definition: "We call... as..." Then they give properties, derive formulas, and do examples. This process is very efficient and matches textbook layouts. But it has a risk: the concept is announced before the student has felt the need for it.

A concept that is not needed easily becomes a stipulation.

What math history provides is not just stories, but the order in which concepts were generated. Usually, it's not definitions first, then applications; it is encountering problems first, finding old tools insufficient, and thus new ideas are forced to appear, go through attempts, debates, corrections, and finally get compressed into definitions and symbols.

This also aligns with students' cognitive habits. People usually don't fall in love with a tool first and then look for problems; rather, they discover old tools are insufficient while solving problems, and only then are they willing to accept new tools.

When teaching complex numbers, you can ask first: why did it take humans a long time to even accept  $0$ ? Then why do we expect students to immediately accept  $i$ ? If many students haven't even truly understood irrational exponents like  $2^{\sqrt2}$ , why would we feel that  $e^{i\theta}$  should be naturally understood? If a cubic equation clearly has real solutions, why must the intermediate steps of the solution formula pass through the square root of a negative number? Are complex numbers escaping the problem, or are they helping us cross the boundaries of the original number system?

When teaching matrices, you can ask first: why isn't matrix multiplication entrywise? Why use the seemingly asymmetrical rule of "row dot column"? If a matrix represents a geometric transformation, then does multiplying two matrices represent two transformations happening continuously? Do the differences between left multiplication and right multiplication then have concrete meaning?

When teaching second-order linear differential equations, you can ask first: why does  $ay''+by'+cy=0$  correspond to a quadratic equation? If we view  $\frac{d}{dx}$  as  $D$ , and treat  $aD^2+bD+c$  as an object that can be factorized, can the second-order equation be broken down into two first-order equations?

When teaching probability, you can ask first: if a game stops halfway, how should the stakes be divided fairly? If fairness depends on all possible future paths, how do we systematically count these paths and compare their probabilities?

The common ground of these introductions is: let students see the problem first, then let the concept appear as the answer.

"History" here does not mean telling the biography of mathematicians in every class. The classroom doesn't need to turn into a storytelling session either. A truly effective historical introduction restores the problem context in which the concept was generated. The student first sees "why is this thing needed", and then accepts "what this thing is". Once the order changes, the student's feeling towards the concept will also change.

Mathematics is no longer a bunch of externally imposed symbols and rules, but a language humans continuously created to solve problems.

## Math history lets knowledge reconnect

If you only look at math by textbook chapters, knowledge easily becomes piece-by-piece content: this chapter teaches numbers and expressions, the next chapter teaches equations, and further on teaches functions, geometry, probability, derivatives. Students learn in fragments, and teachers might teach in fragments too.

From the perspective of math history, there are clear developmental threads between much knowledge.

One thread is the continuous expansion of the boundaries of numbers.  $0$  changing from "nothing" into a number that can be written, calculated, and hold a place, is a massive shift in itself. Negative numbers, irrational numbers, and complex numbers are similar. Complex numbers are especially suited for letting students see: mathematics doesn't introduce new objects because it likes weird things, but because the old system revealed cracks in equation solving. Cubic equations pushed mathematicians into an awkward position: the answer could be a real number, but the path to the answer would pass through the square root of a negative number. It was within this awkwardness that complex numbers slowly gained their position.

Another thread is the move from algebraic tables to spatial transformations. If a matrix is only seen as rows of numbers, the multiplication rule is very abstract; but if a matrix represents a linear transformation, and matrix multiplication represents the composition of transformations, then "row of the first dot column of the second" is no longer just a mnemonic, but is calculating how each coordinate component is formed after the composite transformation. Viewed this way, students can understand: matrices are not a bunch of tables invented to increase the calculation burden; they are a language for describing transformations and structure.

Yet another thread is from algebra to operational structures. The auxiliary equation of a second-order linear differential equation seems like just a problem-solving template, but behind it is actually the algebraization of differential operators.  $aD^2+bD+c$  is factorized like a quadratic polynomial, and the second-order equation is thus linked to two first-order equations. This angle allows students to see that some seemingly isolated techniques in A-Level actually share the same idea: rewriting complex objects into decomposable structures.

Probability also has a similar thread. Pascal and Fermat's stake-dividing problem cared about fair distribution, and only later did a more systematic language of probability gradually develop. The game problem is not a low-level starting point; it is precisely the most natural entry point into probability theory: when the result hasn't happened yet, how do we make fair judgments based on possible future paths? When teaching the binomial distribution in S2, if only the table and formula are taught, students will feel it is a distribution that appears out of thin air; if we enter from games and dividing stakes, conditions like fixed number of trials, independent trials, and probability of success gain a traceable origin.

In this way, mathematics is no longer a pile of isolated knowledge points, but a continuously growing discipline.

## Reading math history is not meant to increase classroom burden

Frontline teachers are already very busy. Lesson prep, grading, exam progress, answering student questions—everything takes time. So I don't want to phrase reading math history as a new moral requirement, as if a teacher is unprofessional if they don't read math history.

That is not the meaning.

The reading of math history I'm talking about does not require every teacher to become an expert in math history, nor does it require historical material to be added to every class. A more realistic approach is to ask a few more questions during lesson prep:

Why did this concept appear?

What old problem did it solve?

Why was it not easily accepted at first?

Why was it finally organized into the way it looks today?

When students learn it, what historical difficulties might they reenact?

As long as a teacher begins asking like this, the classroom is already different.

When teaching complex numbers, the teacher won't just say "stipulate  $i^2=-1$ ", but will place it back into cubic equations, number system expansion, complex exponents, and rotation/scaling. When teaching matrices, the teacher won't just ask students to memorize "row times column", but will let students see why matrix multiplication corresponds to the composition of geometric transformations. When teaching second-order linear differential equations, the teacher won't just let students memorize the auxiliary equation, but will explain its relationship to the factorization of differential operators. When teaching probability, the teacher won't just give formulas, but will first let students experience a judgment of "how to divide the stakes fairly when a game is interrupted".

The help math history gives teachers is not to add classroom tricks, but to reduce cognitive blind spots.

Many teachers don't lack the ability to explain; rather, they are too good at it. It's not that they don't have enough knowledge, but that they are too familiar with what knowledge looks like after it matures. Precisely because of this familiarity, it is easy to forget that what the student is facing is an immature world.

Math history lets teachers see the childhood of concepts once again.

## You can let AI help you do part of the prep

Now with AI, this task is actually much easier than in the past.

I am not saying you should let AI write a "little math history story" for the teacher to read to the students before class. That easily turns into a new decoration. What AI is more suited for is the questioning before lesson prep: helping the teacher dismantle a concept back to the problem it originally set out to solve, helping the teacher simulate where students might get stuck, and helping the teacher compress historical materials into entry points that can fit into a classroom.

For example, when preparing a lesson, you can directly ask this:

 ```text
I am a high school math teacher, preparing to teach [fill in concept].
Please do not write it as a biography of mathematicians, nor as a fun story.
Please help me organize it according to the following structure:
1. What problem was this concept roughly trying to solve when it became necessary?
2. Why were the old tools insufficient?
3. When students learn it today, what historical difficulties might they reenact?
4. What 3 questions can I use to bring the students to the point just before this concept?
5. What historical details do I need to re-verify before class and cannot trust directly?
``` 

This prompt is suitable for content like complex numbers, matrices, probability, and differential equations. Its focus is not to have AI produce a script that can be read out loud directly, but to have AI help the teacher restore the problem context "before the concept appeared".

If you already have textbook examples or handout snippets, you can also paste the content in and let AI deduce the difficulties from a student's perspective:

 ```text
Below is the textbook snippet/handout snippet I am preparing to teach:
[Paste content]

Please analyze from the student's perspective:
1. What parts will the teacher feel are obvious, but the student might not feel are obvious?
2. What symbols or steps might just be mechanically memorized by the student without being truly understood?
3. Do these difficulties respectively belong to calculation difficulties, conceptual difficulties, language difficulties, or conflicts between old intuitions and new concepts?
4. Please design a classroom follow-up question for each difficulty; do not give the answer directly.
``` 

If you want to design a classroom entry point, you can ask more specifically:

 ```text
Please help me design a 5-minute classroom introduction for [fill in concept].
Requirements:
1. Start from a concrete problem, do not start from a definition.
2. Do not talk about lengthy historical backgrounds; only keep the parts that can explain the necessity of the concept.
3. Design 3 consecutive follow-up questions to let students feel the old methods are insufficient.
4. Finally, transition naturally to the definition or method in the textbook.
5. Language should be suitable for high school students; do not use overly literary expressions.
``` 

You can also ask specific questions about a concrete concept. For example, teaching matrix multiplication:

 ```text
I am preparing to teach matrix multiplication. Students easily view a matrix as a table of numbers, so they don't understand why they should "row dot column", nor do they understand why AB and BA are usually different.
Please help me design a teaching sequence starting from 2D geometric transformations:
1. First use a point or vector to illustrate a single linear transformation;
2. Then illustrate why matrix multiplication appears when doing two transformations consecutively;
3. Explain the meaning of left multiplication, right multiplication, and order;
4. Finally return to the calculation rule of row dot column.
Do not just give conclusions; give questions that can be asked of students in class.
``` 

Or teaching complex numbers:

 ```text
I am preparing to teach complex numbers, and students easily feel that i is an artificial stipulation.
Please help me draw out why mathematicians had to seriously face complex numbers, starting from cubic equations, Cardano's formula, the square root of negative numbers, and Bombelli's approach.
At the same time, please remind me: which statements are historical facts, and which are just pedagogical simplifications that need to be verified before class.
Finally, give 3 classroom questions to bring students from "are imaginary numbers fake" to "why complex numbers are useful".
``` 

The greatest use of AI here is to pull the teacher out of the inertia of "I know this concept, so I will directly teach the definition". Of course, historical facts cannot be entirely handed over to AI. Anything involving dates, people, original documents, or attribution judgments should be checked against reliable sources. AI can help us generate lesson prep routes, but it cannot bear the judgment for us.

## Good math teachers must be able to return to the side of the problem

Math teachers certainly must be able to solve problems, be familiar with textbooks, and grasp exam requirements. Without these, teaching has no basic skills. But if one only stops at these levels, a teacher easily becomes a proficient knowledge transmitter, yet may not truly understand the student's learning process.

What math history gives teachers is a perspective to re-understand mathematics, and also an ability to re-understand students.

It lets teachers know that mathematical concepts are not naturally transparent, and students' confusion does not come from nowhere. It lets teachers be a little less impatient when facing errors, have a little more judgment when facing difficulties, and provide a little more origin story when teaching knowledge. It reminds us that things we feel are obvious today were once not obvious; a concise sentence in today's textbook might have compressed a very long time of human groping in the dark.

This brings an important kind of humility.

Even humanity's process of understanding mathematics was once so tortuous, so what is strange about a student not understanding it immediately?

This humility does not mean lowering standards. On the contrary, it lets teachers know more accurately how the standard should be reached. Good math teaching is not compressing hundreds of years of understanding into a few minutes of stipulation, but taking students to walk through the necessary cognitive steps once again. It is not forcibly dragging students to the conclusion, but letting students see why the conclusion absolutely had to appear.

A good math teacher cannot just stand on the side of the answers, but must also know how to return to the side of the problems.

So, why should math teachers read a little math history?

Because only by understanding how mathematics got to today, is it more possible to understand why the student hasn't gotten here yet.
