---
title: "H Logic and Counterexamples"
---

## Module H: Logic and Counterexamples

> **Syllabus Section 2**: MR1.1-MR1.8 (Arg1-Arg4, Prf1, Err1)
> **Target Paper**: P2 Core (Logical Reasoning and Proofs)
> **Recommended Time**: 2 hours | **Target Questions**: 23 questions

---

## 📋 Module Overview

| Section | Content | Syllabus | Frequency in Past Papers | Hours |
|------|------|---------|-------------|------|
| H1 | Basics of Propositional Logic | Arg1 | 11 times in 8 years | 0.5 |
| H2 | Necessary and Sufficient Conditions | Arg2 | 6 times in 8 years | 0.5 |
| H3 | Constructing Counterexamples | Prf1, Err1 | 12 times in 8 years | 1 |

---

## H1 Basics of Propositional Logic [Arg1]

### 1.1 Propositions and Logical Connectives

**Proposition**: A declarative sentence that can be judged as either true or false.

Logical connectives covered in the TMUA syllabus:

| Connective | Meaning | Mathematical Notation |
|-------|------|---------|
| **and** | Both are true simultaneously | $A \land B$ |
| **or** (inclusive) | At least one is true | $A \lor B$ |
| **not** | Negation | $\neg A$ |

**⚠️ Note**: The `or` in TMUA is an **inclusive or**, meaning either $A$ is true, or $B$ is true, or both are true.

### 1.2 Truth Relationships of Conditional Propositions

Four forms of conditional propositions explicitly required by the syllabus:

| Form | Meaning | Mathematical Notation |
|------|------|---------|
| **if A then B** | If A is true, B must be true | $A \Rightarrow B$ |
| **A if B** | If B is true, A must be true | $B \Rightarrow A$ (Note the reverse direction!) |
| **A only if B** | A is true only when B is true | $A \Rightarrow B$ |
| **A if and only if B** | A and B are true together, or false together | $A \Leftrightarrow B$ |

**⚡ Key Memorization**:
- `A only if B` is equivalent to `if A then B` (If A is true → B must be true)
- `A if B` is equivalent to `if B then A` (If B is true → A must be true)
- `if and only if` requires bi-directional truth, i.e., **equivalence**

### 1.3 Converse, Inverse, and Contrapositive

Given the original proposition $A \Rightarrow B$:

| Type of Proposition | Form | Relationship with Original Proposition |
|---------|------|----------------|
| **Converse** | $B \Rightarrow A$ | **Unrelated**: If the original is true, the converse is not necessarily true |
| **Inverse** | $\neg A \Rightarrow \neg B$ | **Unrelated**: If the original is true, the inverse is not necessarily true |
| **Contrapositive** | $\neg B \Rightarrow \neg A$ | **Equivalent**: The original proposition and its contrapositive are both true or both false |

**Deriving the Equivalence of the Contrapositive** (understand rather than memorize):

If the original proposition `if A then B` is true, it means whenever A is true, B must be true. If B is false, then A must be false (otherwise it would imply B is true), which gives `if not B then not A`.

**⚠️ Common Mistake**: Students often confuse `not A implies not B` (inverse) with `not B implies not A` (contrapositive). Remember: **the contrapositive requires reversing the positions of A and B**.

### 1.4 Universal and Existential Propositions [Arg3, Arg4]

| Type of Proposition | Meaning | Mathematical Notation |
|---------|------|---------|
| **for all** | True for all elements | $\forall$ |
| **for some** | True for at least one element | $\exists$ (at least one) |
| **there exists** | There exists | $\exists$ |

**Rules for Negation**:

| Original Proposition | Negation |
|-------|------|
| for all $x$, $P(x)$ | there exists $x$ such that not $P(x)$ |
| there exists $x$ such that $P(x)$ | for all $x$, not $P(x)$ |
| for some $x$, $P(x)$ | for all $x$, not $P(x)$ |

**⚡ Quick Memorization**: When negating, `for all` becomes `there exists`, `there exists` becomes `for all`, and the conclusion is negated.

---

## H2 Necessary and Sufficient Conditions [Arg2]

### 2.1 Sufficient and Necessary Conditions

**Definitions**:
- **A is a sufficient condition for B**: If A is true ⇒ B is true ($A \Rightarrow B$)
- **A is a necessary condition for B**: If B is true ⇒ A is true ($B \Rightarrow A$), which means if A is false, B must be false
- **A is a necessary and sufficient condition for B**: A ⇔ B, true in both directions

**Intuitive Understanding**:
- Sufficient condition: Having A is enough (sufficiently guarantees B)
- Necessary condition: Cannot do without A (B must rely on A)

### 2.2 Evaluating Sufficiency and Necessity

**Evaluation Steps**:
1. Clarify the direction of the proposition: Condition ⇒ Conclusion
2. Verify the forward direction: If the condition is true, must the conclusion be true?
3. Verify the reverse direction: If the conclusion is true, must the condition be true?

**⚡ Quick Evaluation Techniques**:

| Question | Evaluation Method |
|------|---------|
| Is A sufficient? | Verify if $A \Rightarrow B$ holds true |
| Is A necessary? | Verify if $\neg A \Rightarrow \neg B$ (or $B \Rightarrow A$) holds true |
| Is A necessary and sufficient? | Verify if $A \Leftrightarrow B$ holds true in both directions |

### 2.3 Common Pitfalls

**⚠️ Typical Errors**:
- Confusing `if A then B` with `A if B`
- Thinking `A sufficient for B` is equivalent to `A necessary for B`
- Ignoring implicit conditions (e.g., domain, underlying assumptions)

**Example**:
Proposition: `If $x^2 = 4$, then $x = 2$.`
- Is $x^2 = 4$ a **necessary condition** for $x = 2$? No. $x = -2$ also satisfies $x^2 = 4$.
- Is $x^2 = 4$ a **sufficient condition** for $x = 2$? No. $x = -2$ also satisfies $x^2 = 4$.
- Is $x = 2$ a **sufficient condition** for $x^2 = 4$? Yes. $x = 2$ ⇒ $x^2 = 4$.

---

## H3 Constructing Counterexamples [Prf1, Err1]

### 3.1 What is a Counterexample?

**Counterexample**: An instance that satisfies the hypothesis of a proposition but not the conclusion.

Purpose: **A single counterexample is sufficient to disprove a universal proposition**.

**Applicable Scenarios**:
- Form of the original proposition: `for all x, P(x)` or `if A then B`
- When you need to prove a proposition is false, simply construct a counterexample

### 3.2 Strategies for Constructing Counterexamples

**Strategy 1: Boundary Value Method**
Pick boundary points of the domain or special values (e.g., $x = 0, 1, -1$).

**Strategy 2: Extreme Value Method**
Pick values that make the conditions extreme (e.g., maximum, minimum, infinity).

**Strategy 3: Piecewise Verification Method**
For propositions defined in segments, find counterexamples within each segment.

**Strategy 4: Parity Check Method**
When dealing with propositions about integers, test for differences in parity (odd/even).

**⚡ Common Types of Counterexamples in TMUA**:

| Type of Proposition | Common Counterexamples |
|---------|---------|
| Properties of functions | $f(x) = x$ or $f(x) = x^2$ (simple functions) |
| Number theory | $n = 1, 2, 3$ or composite numbers like $n = 4, 6$ |
| Algebraic inequalities | Pick boundary values or values that reverse the inequality |
| Geometry | Special triangles (equilateral, isosceles) |

### 3.3 Identifying Errors in Proofs [Err1, Err2]

TMUA requires you to identify logical errors in false proofs.

**Common Types of Errors**:

| Error Type | Example |
|---------|------|
| **Division by zero** | $ab = ac$ ⇒ $b = c$ (fails when $a = 0$) |
| **Trigonometric inference error** | $\sin A = \sin B$ ⇒ $A = B$ (actually $A = B$ or $A + B = 180^\circ$) |
| **Inequality multiplication error** | $a < b, c < d$ ⇒ $ac < bd$ (fails when negative numbers are involved) |
| **Missing prerequisites** | Ignoring domain restrictions or implicit assumptions |
| **Circular reasoning** | Using the conclusion to prove the conclusion |
| **Misuse of the converse** | Substituting the converse for the original proposition |

---

## ⚡ Summary of Quick Solving Techniques

| Scenario | Technique |
|------|------|
| Judging truth of a proposition | Verify the contrapositive (same truth value), often easier than direct verification |
| Judging sufficient/necessary | Draw bi-directional arrows: Sufficient ⇒ forward, Necessary ⇐ backward |
| Disproving universal propositions | One counterexample is enough, try boundary values first like $n = 0, 1, 2$ |
| `if and only if` propositions | Requires bi-directional verification, checking only one way leads to misjudgment |
| Propositions with `or` | `or` in TMUA is inclusive, all three cases must be considered |
| Negating propositions | `for all` ⇌ `there exists`, negate the conclusion |

---

## ⚠️ Common Mistake Warnings

- ❌ `A only if B` is equivalent to `if A then B`, **NOT** `A if B`
- ❌ `A if B` is equivalent to `if B then A`, **NOT** `if A then B`
- ❌ The truth of the converse is **unrelated** to the original proposition; only the contrapositive is equivalent
- ❌ A counterexample disproves a **universal proposition**; an existential proposition requires proving no counterexamples exist
- ❌ $\sin A = \sin B$ **does not imply** $A = B$ (there is also $A + B = 180^\circ$)
- ❌ $ab = ac$ **does not imply** $b = c$ (when $a = 0$)

---

## 📝 Selected Examples

### Example 1 (2016 P2 Q4 · Logical Reasoning)

**Question**: Five sealed urns P, Q, R, S, T each contain the same number $n$ of balls ($n > 0$). Each urn has a statement attached as follows:

- P: contains 1 or 4 balls
- Q: contains 2 or 4 balls
- R: contains more than 2 and fewer than 5 balls
- S: contains 1 or 2 balls
- T: contains fewer than 3 balls

**Exactly one urn's statement is true**. Find out which urn it is.

【Question Analysis】
This question tests logical reasoning. The five urns contain the same number $n$, and each statement corresponds to a set of possible values for $n$. Exactly one being true means the other four must be false. The key is to observe the overlapping sets of the statements.

【Solving Steps】
Step 1: Convert each statement into a set of values.

| Urn | Statement Meaning | Set of values for $n$ |
|---|---------|---------------|
| P | 1 or 4 | $\{1, 4\}$ |
| Q | 2 or 4 | $\{2, 4\}$ |
| R | $>2$ and $<5$ | $\{3, 4\}$ |
| S | 1 or 2 | $\{1, 2\}$ |
| T | $<3$ | $\{1, 2\}$ |

Step 2: Verify value by value to find the $n$ that makes only one statement true.

- $n = 1$: P is true, S is true, T is true (three true, contradiction)
- $n = 2$: Q is true, S is true, T is true (three true, contradiction)
- $n = 3$: R is true, the rest are all false (P false: $3 \notin \{1,4\}$; Q false: $3 \notin \{2,4\}$; S false: $3 \notin \{1,2\}$; T false: $3 \ge 3$)
- $n = 4$: P is true, Q is true, R is true (three true, contradiction)

Step 3: Only when $n = 3$ is exactly one statement (R's statement) true.

【Quick Thought】
Notice that the sets for S and T are identically $\{1, 2\}$, so if $n = 1$ or $n = 2$, both are true. Eliminate. Also eliminate $n = 4$ (P, Q, R are all true). The only possibility is $n = 3$.

【Correct Answer】C (Urn R)

【Knowledge Point】Logic | **Syllabus**: Arg1

---

### Example 2 (2016 P2 Q5 · Counting Counterexamples)

**Question**: Proposition: If an integer $n$ is 1 less or 5 less than a multiple of 6 (i.e., $n \equiv 1$ or $5 \pmod{6}$), then $n$ is prime. How many counterexamples are there in the range $0 < n < 50$?

【Question Analysis】
The form of the proposition is a universal proposition: All integers of the form $6k \pm 1$ are prime. A counterexample is a number that satisfies $n \equiv 1$ or $5 \pmod{6}$ but is not a prime number.

【Solving Steps】
Step 1: List the numbers of the form $6k \pm 1$ in $0 < n < 50$.

These numbers are: $1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 49$

Step 2: Determine which are not prime.

- $n = 1$: Not prime (by definition, 1 is not a prime number)
- $n = 25 = 5 \times 5$: Composite
- $n = 35 = 5 \times 7$: Composite
- $n = 49 = 7 \times 7$: Composite

Step 3: Count the counterexamples. There are 4 counterexamples in total.

【Quick Thought】
The form $6k \pm 1$ includes all primes greater than 3, but not all such numbers are primes. Simply find the composite numbers of this form in the range: $25, 35, 49$, plus $1$, making 4 in total. Note that 1 is neither prime nor composite, but it is a valid counterexample (satisfies the condition but is not prime).

【Correct Answer】C (4 counterexamples)

【Knowledge Point】Counterexamples | **Syllabus**: Prf1

---

### Example 3 (2017 P2 Q16 · Function Counterexample)

**Question**: Proposition: If $f(x)$ takes integer values for all integer $x$, then $f'(x)$ also takes integer values for all integer $x$. Find a counterexample.

【Question Analysis】
Proposition form: Function taking integer values on integers ⇒ Derivative taking integer values on integers. We need to find a function where the antecedent is true (integer inputs yield integer outputs) but the consequent is false (derivative at integer inputs is not an integer).

【Solving Steps】
Examine the functions in the options (assuming options were provided):

- $f(x) = x^2/2$: $f(0) = 0$ (integer), $f(1) = 1/2$ (non-integer) → Antecedent is false, not a counterexample
- $f(x) = x^3/3$: $f(0) = 0$, $f(1) = 1/3$ (non-integer) → Antecedent is false
- $f(x) = (x^2 + x)/2 = x(x+1)/2$: For any integer $x$, one of $x$ and $x+1$ is even and the other is odd, their product must be even, so $f(x)$ is always an integer. Antecedent is true. $f'(x) = (2x+1)/2$: When $x$ is an integer, $2x+1$ is odd, so $f'(x)$ is not an integer. Consequent is false. This is a counterexample.

【Quick Thought】
The key is to observe $x(x+1)/2$: The product of two adjacent integers must be even, so dividing by 2 yields an integer. But the derivative $(2x+1)/2$ is always half of an odd number, not an integer. The true-false pairing makes it a valid counterexample.

【Correct Answer】C

【Knowledge Point】Counterexamples | **Syllabus**: Prf1, Err1

---

## 🏋️ After-Class Practice (15 Minutes Limit)

| # | Question No. | Topic | Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P2 Q18 | Function integral counterexample | Prf1 | ⭐⭐⭐ |
| 2 | 2017 P2 Q5 | True/false judgment of propositions | Arg1 | ⭐⭐⭐ |
| 3 | 2017 P2 Q17 | Logical definitions | Arg1, Arg2 | ⭐⭐⭐⭐ |
| 4 | 2018 P2 Q3 | Inequality counterexample | Prf1 | ⭐⭐⭐ |
| 5 | 2018 P2 Q5 | Sufficiency and necessity judgment | Arg2 | ⭐⭐⭐ |
| 6 | 2018 P2 Q6 | Number theory counterexample | Prf1 | ⭐⭐⭐ |
| 7 | 2018 P2 Q12 | Propositional logic | Arg1 | ⭐⭐⭐ |
| 8 | 2022 P2 Q6 | Conditional propositions | Arg1 | ⭐⭐⭐ |
| 9 | 2022 P2 Q13 | Necessary and sufficient conditions | Arg2 | ⭐⭐⭐ |
| 10 | 2023 P2 Q3 | Constructing counterexamples | Prf1 | ⭐⭐⭐ |

---

*Full explanations are available in the question bank database; each question includes [Solving Steps] and [Quick Thought].*

---

## 📚 Syllabus Mapping Table

| Syllabus Number | Content Description | Corresponding Section in this Module |
|---------|---------|---------------|
| Arg1 | Propositional logic, conditional propositions, converse/contrapositive | H1.1-H1.3 |
| Arg2 | Sufficient conditions, necessary conditions | H2 |
| Arg3 | Universal propositions, existential propositions | H1.4 |
| Arg4 | Negation of propositions | H1.4 |
| Prf1 | Proof by counterexample | H3 |
| Err1 | Identifying errors in proofs | H3.3 |
| Err2 | Common mathematical inference errors | H3.3 |

---

## 🎯 Companion Practice

Finished this chapter? [→ Go to Counterexamples Practice Questions](/practice/tmua/?topic=Counterexamples)

---

*Module H notes completed. 2026-04-29*
