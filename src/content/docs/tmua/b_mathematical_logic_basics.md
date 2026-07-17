---
title: "B Mathematical Logic Basics"
---

## Module B: Mathematical Logic Basics

> **Corresponding Syllabus Section 2**: Arg1, Arg2, Arg3, Arg4, Prf1, Prf2, Err1, Err2
> **Corresponding Paper**: P2 Focus (19/320 questions, all from Paper 2)
> **Recommended Time**: 2 lessons | **Target Volume**: 15-20 questions

---

## 📋 Module Overview

| Section | Content | Syllabus | Past Paper Frequency | Lessons |
|------|------|---------|-------------|------|
| B1 | Basic Logic Concepts | Arg1 | 8 times in 8 years | 0.5 |
| B2 | Sufficient and Necessary Conditions | Arg2 | 5 times in 8 years | 0.5 |
| B3 | Counterexamples and Negation | Arg4, Prf1 | 11 times in 8 years | 1 |

---

## B1 Basic Logic Concepts [Arg1]

### 1.1 Statements and Truth Values

**Statement**: A declarative sentence that can be judged as true or false.

For example:
- "The sum of the interior angles of a triangle is $180^\circ$" — True statement
- "All prime numbers are odd" — False statement ($2$ is an even prime number)
- "$x > 3$" — Not a statement (contains a variable, truth value cannot be determined)

**⚠️ Note**: A statement must be a declarative sentence. Interrogative sentences, exclamatory sentences, and open sentences containing variables are not statements.

### 1.2 Four Types of Statements

Given an original statement "If $P$ then $Q$", four forms can be derived:

| Name | Form | Truth Value Relationship |
|------|------|---------|
| Original Statement | If $P$ then $Q$ | — |
| Converse | If $Q$ then $P$ | **Independent** of the original statement |
| Inverse | If not $P$ then not $Q$ | **Independent** of the original statement |
| **Contrapositive** | If not $Q$ then not $P$ | **Same truth value** as the original statement |

**Core Theorem**: The original statement and its contrapositive are logically equivalent, i.e.:
$$\text{"If }P\text{ then }Q\text{"} \iff \text{"If not }Q\text{ then not }P\text{"}$$

**Intuitive Understanding**: "If it rains, the ground is wet" is equivalent to "If the ground is not wet, it did not rain". This is the most natural deduction in everyday logic.

**⚠️ Common Pitfalls**:
- The truth values of the converse and inverse are **independent** of the original statement.
- "All odd numbers are prime" is a false statement, and its converse "All prime numbers are odd" is also a false statement (due to $2$), but there is no inevitable connection between them.
- The original statement "If $x > 2$ then $x^2 > 4$" is true, but its converse "If $x^2 > 4$ then $x > 2$" is false (e.g., when $x = -3$).

### 1.3 Logical Connectives

| Connective | Meaning | Symbol | Truth Rule |
|-------|------|------|---------|
| and | Both are true | $P \land Q$ | True only if both are true |
| or | At least one is true (**inclusive or**) | $P \lor Q$ | True if at least one is true |
| not | Negation | $\neg P$ | True becomes false, false becomes true |

**⚡ Meaning of Inclusive Or**: "$P$ or $Q$" includes the case of "$P$ and $Q$". For example, "Today is Saturday or Sunday" includes "It is both Saturday and Sunday" (although impossible in reality, it is logically permitted).

### 1.4 Quantifiers

| Quantifier | Meaning | Symbol | Example |
|------|------|------|------|
| for all | Universal quantifier | $\forall$ | "The sum of interior angles for all triangles is $180^\circ$": $\forall$ triangle $T$, interior angles sum$(T) = 180^\circ$ |
| there exists | Existential quantifier | $\exists$ | "There exists an even prime number": $\exists$ integer $n$, $n$ is even and $n$ is prime |

**⚠️ TMUA Does Not Test Symbols**: The syllabus clearly states "candidates will not be expected to recognise or use the symbols", but you must understand the logical meaning of phrases like "for all" and "there exists".

---

## B2 Sufficient and Necessary Conditions [Arg2]

### 2.1 Definition and Judgment

| Condition Type | Definition | Notation |
|---------|------|---------|
| **Sufficient Condition** | If $P$ is true, then $Q$ must be true | $P \Rightarrow Q$ |
| **Necessary Condition** | If $Q$ is true, then $P$ must be true | $Q \Rightarrow P$ (i.e., $P$ is a necessary condition for $Q$) |
| **Necessary and Sufficient Condition** | $P$ and $Q$ imply each other | $P \iff Q$ |

**Intuitive Understanding**:
- "Raining" is a **sufficient condition** for "the ground being wet": Raining ⇒ Ground is wet
- "The ground being wet" is a **necessary condition** for "raining": If it didn't rain, the ground might not be dry (water could have been spilled)
- "Raining and no cover" is a necessary and sufficient condition for "the ground being wet" (in a specific context)

### 2.2 Judgment Techniques

**⚡ Quick Judgment Rule**:
- Having $P$ guarantees $Q$ → $P$ is a sufficient condition for $Q$
- Without $P$ there might not be $Q$ → $P$ is a necessary condition for $Q$ (Contrapositive: having $Q$ guarantees $P$)

**Example**: "$x > 2$" is what condition for "$x^2 > 4$"?
- Check: $x > 2$ ⇒ $x^2 > 4$ ✓ (Sufficient)
- Counterexample: When $x = -3$, $x^2 > 4$ but $x \ngtr 2$ ✗ (Not necessary)
- Conclusion: Sufficient but not necessary

**Example**: "$a = b$" is what condition for "$a^2 = b^2$"?
- Check: $a = b$ ⇒ $a^2 = b^2$ ✓ (Sufficient)
- Counterexample: When $a = 2, b = -2$, $a^2 = b^2$ but $a \neq b$ ✗ (Not necessary)
- Conclusion: Sufficient but not necessary

### 2.3 Common Equivalent Expressions

| Expression | Logical Meaning |
|------|---------|
| "$P$ only if $Q$" | $P \Rightarrow Q$ ($Q$ is a necessary condition for $P$) |
| "$P$ if $Q$" | $Q \Rightarrow P$ ($Q$ is a sufficient condition for $P$) |
| "$P$ if and only if $Q$" | $P \iff Q$ (Necessary and sufficient condition) |

---

## B3 Counterexamples and Negation [Arg4, Prf1]

### 3.1 The Role of Counterexamples

**Counterexample**: An instance that satisfies the premise of a statement but makes the conclusion false. It is used to **negate universal statements**.

**Logical Basis**:
- The negation of a universal statement "All $x$ satisfy property $A$" is "There exists some $x$ that does not satisfy $A$".
- A single counterexample can refute a universal statement (**one example refutes a universal statement**).

**⚠️ Specific Cases Do Not Prove Truth**: "$2$ is an even prime number" cannot prove "All prime numbers are even". Existential statements require a constructive proof, while universal statements require a counterexample for negation.

### 3.2 Counterexample Construction Techniques

**Steps**:
1. Identify the statement form: "If $P$ then $Q$" or "All objects satisfying $P$ also satisfy $Q$"
2. Find an instance that satisfies $P$ but does not satisfy $Q$
3. Verify that the instance indeed satisfies the premise and the conclusion is false

**Example**: Negate "If $x^2 > 4$ then $x > 2$"
- Premise: $x^2 > 4$
- Conclusion: $x > 2$
- Counterexample: When $x = -3$, $(-3)^2 = 9 > 4$ ✓, but $-3 \ngtr 2$ ✗
- Conclusion: The original statement is false

**Example**: Negate "All prime numbers greater than $3$ are odd"
- Premise: Prime numbers greater than $3$
- Conclusion: Are odd
- Counterexample: None exists! (All prime numbers greater than $3$ are indeed odd)
- Conclusion: The original statement is true and cannot be negated

### 3.3 Common Negation Forms

| Original Statement Form | Negation Form |
|-----------|---------|
| All $x$ satisfy $A$ | There exists some $x$ that does not satisfy $A$ |
| There exists some $x$ satisfying $A$ | All $x$ do not satisfy $A$ |
| $P$ and $Q$ | Not $P$ or not $Q$ (De Morgan's Laws) |
| $P$ or $Q$ | Not $P$ and not $Q$ (De Morgan's Laws) |
| If $P$ then $Q$ | $P$ and not $Q$ |

**De Morgan's Laws**:
$$\neg(P \land Q) = \neg P \lor \neg Q$$
$$\neg(P \lor Q) = \neg P \land \neg Q$$

**Understanding**: The negation of "Neither tall nor short" is "Tall or short".

### 3.4 Multi-level Quantifier Negation

**Rule**: When negating, flip the quantifiers layer by layer ($\forall \to \exists$, $\exists \to \forall$), and negate the inner statement.

**Example**: Negate "For all positive integers $N$, there exists a positive integer $K$ such that for all positive integers $m$, $N(Km+1)-1$ is not prime."

Structure: $\forall N \; \exists K \; \forall m \; \neg\text{Prime}(N(Km+1)-1)$

Negation: $\exists N \; \forall K \; \exists m \; \text{Prime}(N(Km+1)-1)$

That is: "There exists a positive integer $N$ such that for all positive integers $K$, there exists a positive integer $m$ such that $N(Km+1)-1$ is prime."

---

## 🎯 Typical Question Types and Strategies

### Type A: Unique True Statement Reasoning

**Characteristics**: Among multiple statements, exactly one is true, requiring logical reasoning to find it.

**Strategy**:
1. List the sets of conditions corresponding to each statement
2. Check the truth values under different cases
3. Find the unique scenario with no contradictions

**Example** (2016 P2 Q4): Five sealed urns each have a statement, and exactly one is true. Find which urn it is.
- Sets of number of balls corresponding to each urn's statement: $P:\{1,4\}$, $Q:\{2,4\}$, $R:\{3,4\}$, $S:\{1,2\}$, $T:\{1,2\}$
- When $n=1$: Both $P$ and $S$ are true ✗
- When $n=2$: $Q$, $S$, and $T$ are true ✗
- When $n=3$: Only $R$ is true ✓
- When $n=4$: Both $P$ and $Q$ are true ✗
- Answer: Urn $R$

### Type B: Counterexample Construction

**Characteristics**: Find an instance that satisfies the premise but makes the conclusion false.

**Strategy**:
1. Clarify the premise and conclusion
2. Start enumerating from simple values ($0, 1, -1, 2$, etc.)
3. Verify that the antecedent is true and the consequent is false

**Example** (2016 P2 Q5): Statement "Numbers of the form $6k \pm 1$ are all prime".
- Check numbers of the form $6k \pm 1$ in $0 < n < 50$: $1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 49$
- Non-primes: $1$ (not a prime by definition), $25=5^2$, $35=5\times 7$, $49=7^2$
- Number of counterexamples: $4$

### Type C: Quantifier Negation

**Characteristics**: Rewrite statements containing "for all" and "there exists" into their negated forms.

**Strategy**:
1. Mark the quantifier levels ($\forall \to \exists$, $\exists \to \forall$)
2. Negate the inner statement
3. Express in natural language

**Example** (2018 P2 Q12): Negate "For all $N$, there exists $K$ such that for all $m$, $N(Km+1)-1$ is not prime".
- Three quantifier levels: $\forall \exists \forall$
- After negation: $\exists \forall \exists$
- "There exists some $N$ such that for all $K$, there exists some $m$ where $N(Km+1)-1$ is prime"

---

## ⚡ Quick Solution Tips Summary

| Scenario | Technique |
|------|------|
| Judging Sufficient/Necessary | "Having $P$ guarantees $Q$" $\Rightarrow$ $P$ is a sufficient condition for $Q$ |
| Judging Truth of a Statement | Construct a counterexample: find an instance where the antecedent is true but the consequent is false |
| Negating Universal Statements | Change "All" to "There exists some that do not" |
| Negating Existential Statements | Change "There exists" to "All do not" |
| Original Statement Equivalence | The contrapositive always has the same truth value, transform directly |
| De Morgan's Laws | Negation of "and" is "or", negation of "or" is "and" |
| Multi-level Quantifier Negation | Flip quantifiers layer by layer, negate the inner part |

## ⚠️ Common Mistakes Warning

- ❌ The negation of "All prime numbers are odd" is **not** "All prime numbers are even", but "There exists some prime number that is not odd" (i.e., there exists an even prime number).
- ❌ A counterexample must satisfy **antecedent true and consequent false**. Satisfying only the antecedent is not a counterexample.
- ❌ The truth values of the converse and inverse are **independent** of the original statement; only the contrapositive shares the same truth value.
- ❌ "$P$ only if $Q$" means $P \Rightarrow Q$. "Only if" introduces a necessary condition.
- ❌ An existential statement ("There exists $x$ satisfying $A$") cannot be negated with a single example; you must prove "All $x$ do not satisfy $A$".

---

## 📝 Selected Examples

### Example 1 (2016 P2 Q4 · Logical Reasoning)

**Question**: Five sealed urns $P, Q, R, S, T$ each contain the same number of balls (non-zero). Each urn has a statement, and exactly one statement is true. Determine which statement is true.

- Urn P: Contains 1 or 4 balls
- Urn Q: Contains 2 or 4 balls
- Urn R: Contains more than 2 and fewer than 5 balls
- Urn S: Contains 1 or 2 balls
- Urn T: Contains fewer than 3 balls

【Question Analysis】
This question tests the determination of a unique true statement in logical reasoning. Five urns contain the same number of balls $n$, and we need to find the unique value of $n$ that makes exactly one statement true and the rest false.

【Solution Steps】
Step 1: Convert each statement into a set of values for $n$.
- $P$: $n \in \{1, 4\}$
- $Q$: $n \in \{2, 4\}$
- $R$: $n \in \{3, 4\}$ (more than 2, fewer than 5)
- $S$: $n \in \{1, 2\}$
- $T$: $n \in \{1, 2\}$ (fewer than 3)

Step 2: Check the number of true statements for each value of $n$ one by one.
- $n = 1$: $P$ true, $S$ true, $T$ true → 3 true statements ✗
- $n = 2$: $Q$ true, $S$ true, $T$ true → 3 true statements ✗
- $n = 3$: Only $R$ is true ✓
- $n = 4$: $P$ true, $Q$ true, $R$ true → 3 true statements ✗

Step 3: The only scenario without contradiction is $n = 3$, at which point only the statement on Urn $R$ is true.

【Quick Shortcut】
Observe the intersection relationships of the sets: the sets for $S$ and $T$ are identical, so they cannot be the uniquely true statement at the same time. $P, Q, R$ all contain $4$, so when $n = 4$, all three are true. After eliminating $n = 1, 2, 4$, the only possibility is $n = 3$. Verify that $R$ is true and the rest are false.

【Correct Answer】C (Urn R)

【Knowledge Point】Logic | **Syllabus**: Arg1, Arg2

---

### Example 2 (2016 P2 Q5 · Counterexample Construction)

**Question**: Statement: "If an integer $n$ is 1 less or 5 less than a multiple of 6 (i.e., $n = 6k \pm 1$), then $n$ is a prime number." Find the number of counterexamples in the range $0 < n < 50$.

【Question Analysis】
This question tests counterexample construction. The statement form is a universal statement "All numbers of the form $6k \pm 1$ are prime". A counterexample is a number that satisfies the form but is not prime.

【Solution Steps】
Step 1: List the numbers of the form $6k \pm 1$ in $0 < n < 50$.
$$1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 49$$
A total of 17 numbers.

Step 2: Determine whether each number is a prime number.
- $1$: Not a prime by definition ✓ Counterexample
- $25 = 5 \times 5$: Composite number ✓ Counterexample
- $35 = 5 \times 7$: Composite number ✓ Counterexample
- $49 = 7 \times 7$: Composite number ✓ Counterexample

Step 3: The remaining 13 numbers are all prime, so there are $4$ counterexamples in total.

【Quick Shortcut】
Among numbers of the form $6k \pm 1$, composite numbers must be composed of factors of the form $6m \pm 1$ (since $2, 3$ are not of this form). Within the $< 50$ range, the square numbers $25 = 5^2$, $49 = 7^2$ ($5$ and $7$ are both of the form $6k \pm 1$), and $35 = 5 \times 7$ are all within this form. Adding $1$, there are $4$ counterexamples.

【Correct Answer】C (4)

【Knowledge Point】Counterexamples | **Syllabus**: Arg4, Prf1

---

### Example 3 (2018 P2 Q12 · Quantifier Negation)

**Question**: Statement: "For all positive integers $N$, there exists a positive integer $K$ such that for all positive integers $m$, $N(Km+1)-1$ is not a prime number." Find its negation form.

【Question Analysis】
This question tests the negation of multi-level quantifiers. The original statement contains three levels of quantifiers $\forall \exists \forall$. When negating, it is necessary to flip layer by layer and negate the inner part.

【Solution Steps】
Step 1: Analyze the structure of the original statement.
$$\forall N \in \mathbb{Z}^+ \; \exists K \in \mathbb{Z}^+ \; \forall m \in \mathbb{Z}^+ \; \neg\text{Prime}(N(Km+1)-1)$$

Step 2: Negate layer by layer.
- $\forall N \to \exists N$
- $\exists K \to \forall K$
- $\forall m \to \exists m$
- "is not a prime number" negates to "is a prime number"

Step 3: Combine into the negated statement.
$$\exists N \in \mathbb{Z}^+ \; \forall K \in \mathbb{Z}^+ \; \exists m \in \mathbb{Z}^+ \; \text{Prime}(N(Km+1)-1)$$

Expressed in natural language:
"There exists some positive integer $N$ such that for all positive integers $K$, there exists some positive integer $m$ such that $N(Km+1)-1$ is a prime number"

【Quick Shortcut】
Quantifier negation mnemonic: "All" becomes "exists", "exists" becomes "all", negate the inner statement. The three levels of quantifiers flip sequentially.

【Correct Answer】F (Corresponding to the option "there exists $N$ such that for all $K$ there exists $m$ such that it is a prime number")

【Knowledge Point】Logic | **Syllabus**: Arg3, Arg4

---

## 🏋️ After-Class Exercises (15 Minutes Time Limit)

| # | Question | Topic | Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2017 P2 Q5 | Counterexample Identification | Arg4, Prf1 | ⭐⭐⭐ |
| 2 | 2017 P2 Q16 | Function Counterexample | Arg4, Prf1 | ⭐⭐⭐ |
| 3 | 2017 P2 Q17 | Statement Truth Judgment | Arg1, Arg2 | ⭐⭐⭐ |
| 4 | 2018 P2 Q3 | Average Speed Counterexample | Arg4 | ⭐⭐⭐ |
| 5 | 2018 P2 Q5 | Sufficient and Necessary Conditions | Arg2 | ⭐⭐⭐ |
| 6 | 2018 P2 Q6 | Logical Reasoning | Arg1 | ⭐⭐⭐ |
| 7 | 2018 P2 Q17 | Logical Statement Negation | Arg4 | ⭐⭐⭐ |
| 8 | 2022 P2 Q3 | Counterexample Construction | Arg4, Prf1 | ⭐⭐⭐ |
| 9 | 2022 P2 Q6 | Unique True Statement | Arg1 | ⭐⭐⭐ |
| 10 | 2022 P2 Q9 | Statement Negation | Arg4 | ⭐⭐⭐ |
| 11 | 2022 P2 Q10 | Logical Reasoning | Arg1, Arg2 | ⭐⭐⭐ |
| 12 | 2022 P2 Q13 | Sufficient and Necessary | Arg2 | ⭐⭐⭐ |
| 13 | 2022 P2 Q16 | Function Counterexample | Arg4 | ⭐⭐⭐ |

---

*For full explanations, see the question bank database. Each question includes [Solution Steps] and [Quick Shortcut].*

---

## 📚 Syllabus Mapping Detailed Table

| Syllabus Code | Content Description | Corresponding Topic |
|---------|---------|-----------|
| Arg1 | True/false, and/or/not, statement forms, converse, contrapositive | B1.1-B1.4 |
| Arg2 | Necessary, sufficient conditions | B2.1-B2.3 |
| Arg3 | For all, there exists, there exists at least one | B1.4 |
| Arg4 | Negating statements containing the above terms | B3.3-B3.4 |
| Prf1 | Counterexample to negate statements | B3.1-B3.2 |
| Prf2 | Deducing implications | B1.2, B2.1 |
| Err1 | Identifying flaws in proofs | B3.1 |
| Err2 | Common mathematical errors (e.g., $\sin A = \sin B \Rightarrow A = B$) | B3.2 |

---

## 🎯 Accompanying Exercises

Finished this chapter? [→ Go to Logic related exercises](/practice/tmua/?topic=Logic)

---

**Lecture Notes Features**:
- ✅ Full syllabus coverage (Arg1-Arg4, Prf1, Prf2, Err1, Err2)
- ✅ 19 selected past paper questions (Logic 8 Qs + Counterexamples 11 Qs)
- ✅ Three detailed examples (Logical Reasoning, Counterexample Construction, Quantifier Negation)
- ✅ Clear warnings on common mistakes (Quantifier Negation, Counterexample Verification, Statement Equivalence)
- ✅ Tabularized quick solution tips (easy to memorize and apply)

*Lecture Notes Completion Date: 2026-04-29*
