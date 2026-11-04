---
title: "L Proof Methods"
---

## Module L: Proof Methods

> **Corresponding Syllabus Section 2**: Prf1, Prf2, Prf3, Prf4, Prf5, Err1, Err2
> **Corresponding Paper**: P2 Core (8/320 questions), P1 Involved (logical reasoning questions)
> **Suggested Lessons**: 2 Lessons | **Target Question Count**: 12-15 Questions

---

## 📋 Module Overview

| Section | Content | Corresponding Syllabus | Historical Frequency | Lessons |
|---------|---------|------------------------|----------------------|---------|
| L1 | Direct Proof and Proof by Cases | Prf1 | 3 times in 8 years | 0.5 |
| L2 | Proof by Contradiction and Disproof by Counterexample | Prf1, Err1 | 5 times in 8 years | 1 |
| L3 | Proof Evaluation and Error Identification | Err1, Err2 | 6 times in 8 years | 0.5 |

---

## L1 Direct Proof and Proof by Cases [Prf1]

### 1.1 Basic Structure of Direct Proof

**Direct Proof** is the most fundamental proof method. Its structure is:

> Assuming A holds, through a series of logical deductions, conclude that B holds, thereby proving "If A, then B".

**Standard Format**:
$$\text{Assumption A} \quad \Rightarrow \quad \text{Intermediate Steps} \quad \Rightarrow \quad \text{Conclusion B}$$

**Key Elements**:
1. **Clear Starting Point**: Clearly state the assumption or condition.
2. **Complete Chain**: Every deduction step must have a logical basis.
3. **Clear Ending Point**: Finally arrive at the conclusion to be proved.

**⚠️ Common Errors**:
- Jumping to conclusions: Missing intermediate steps, jumping directly from assumption to conclusion.
- Circular reasoning: Using the conclusion to be proved as part of the proof process.

### 1.2 Proof by Cases

When a proposition involves multiple possibilities, you can **discuss by categories**, proving that it holds for each case.

**Applicable Scenarios**:
- Parity (even/odd) of integers
- Signs of positive/negative numbers
- Piecewise defined functions
- Different shapes in geometric figures

**Classic Example**: Prove that any integer $n$ satisfies $n^2 \geq n$.

**Proof by Cases**:
- **Case 1**: When $n \geq 1$, $n^2 - n = n(n-1) \geq 0$ ✓
- **Case 2**: When $n \leq 0$, $n^2 \geq 0$ and $n < 0$, so $n^2 - n > 0$ ✓
- **Case 3**: When $n = 0$ or $n = 1$, $n^2 = n$ ✓

The three cases cover all integers, so the proposition holds.

**⚡ Tips for Proof by Cases**:
- Categories must be **exhaustive** (covering all possibilities).
- Categories must be **mutually exclusive** (non-overlapping).
- Keep the proof format for each case as **consistent** as possible.

---

## L2 Proof by Contradiction and Disproof by Counterexample [Prf1, Err1]

### 2.1 Logical Structure of Proof by Contradiction

**Proof by Contradiction**: Assume the proposition does not hold, deduce a contradiction, and thereby prove that the proposition holds.

**Logical Foundation**:
$$\text{Assume "Not B"} \quad \Rightarrow \quad \text{Deduce a contradiction} \quad \Rightarrow \quad \text{"Not B" is false} \quad \Rightarrow \quad \text{B is true}$$

**Applicable Scenarios**:
- Proving "non-existence" propositions (e.g., Fermat's Last Theorem).
- Proving "impossibility" propositions.
- Problems that are difficult to start with a direct proof.

**Classic Example**: Prove that $\sqrt{2}$ is irrational.

**Proof by Contradiction**:
- Assume $\sqrt{2}$ is a rational number. Let $\sqrt{2} = \frac{p}{q}$ (where $p$ and $q$ are coprime).
- Square both sides: $2 = \frac{p^2}{q^2}$, which gives $p^2 = 2q^2$.
- $p^2$ is even, so $p$ is even. Let $p = 2k$.
- Substitute: $4k^2 = 2q^2$, which gives $q^2 = 2k^2$.
- $q^2$ is even, so $q$ is even.
- Both $p$ and $q$ are even, contradicting the assumption that they are "coprime". ✓

### 2.2 Disproof by Counterexample

**Counterexample**: A specific instance that satisfies the conditions of the proposition but does not satisfy its conclusion.

**Applicable Scenarios**:
- Overturning "all... are..." universal propositions.
- Testing whether a conjecture is correct.
- Finding the boundary conditions of a proposition.

**Classic Example**: The proposition "Integers of the form $6k \pm 1$ are all prime numbers".

**Counterexamples**:
- $25 = 6 \times 4 + 1 = 5^2$ (composite number)
- $35 = 6 \times 6 - 1 = 5 \times 7$ (composite number)
- $49 = 6 \times 8 + 1 = 7^2$ (composite number)

**⚠️ Tips for Constructing Counterexamples**:
- Test starting from **small values**.
- Pay attention to **boundary cases** (like $n = 1, 2, 3$).
- Note **special values** (like perfect squares, perfect cubes).

### 2.3 Necessary and Sufficient Conditions [Arg2]

**Necessary Condition**: If B is true, A must be true. Denoted as "B $\Rightarrow$ A".
**Sufficient Condition**: If A is true, B must be true. Denoted as "A $\Rightarrow$ B".

| Relationship | Logical Expression | Equivalent Expression |
|--------------|--------------------|-----------------------|
| A is a necessary condition for B | B $\Rightarrow$ A | Without A, there is no B |
| A is a sufficient condition for B | A $\Rightarrow$ B | With A, there is B |
| A is a necessary and sufficient condition for B | A $\Leftrightarrow$ B | A and B are equivalent |

**Classic Example**: Determine the logical relationship between "$k$ is an integer multiple of $\pi$" and "$\int_0^k \sin 2x\,dx = 0$".

**Analysis**:
$$\int_0^k \sin 2x\,dx = -\frac{1}{2}(\cos 2k - 1) = \frac{1 - \cos 2k}{2}$$

Set the integral value to zero: $\cos 2k = 1$, which gives $2k = 2n\pi$, so $k = n\pi$.

Conclusion: They are **necessary and sufficient (equivalent)**.

---

## L3 Proof Evaluation and Error Identification [Err1, Err2]

### 3.1 Core Methods of Proof Evaluation

Common question type in TMUA P2: **Evaluate the given proof and identify the line containing the first error**.

**Evaluation Steps**:
1. **Line-by-line Check**: Starting from the first line, verify each deduction step one by one.
2. **Logical Chain**: Confirm every step has a solid justification.
3. **Boundary Cases**: Pay special attention to whether special values are omitted.
4. **Implicit Assumptions**: Check if there are unstated assumptions.

### 3.2 Common Types of Proof Errors [Err2]

| Error Type | Typical Manifestation | Example |
|------------|-----------------------|---------|
| **Algebraic Error** | Sign errors, missing expansion terms | $\sin(A) = \sin(B) \Rightarrow A = B$ ✗ |
| **Logical Leap** | Splitting factors directly from a product | $ab = ac \Rightarrow b = c$ (ignoring $a = 0$) ✗ |
| **Ignoring Boundaries** | Failing to check special cases | "Multiples of 3 are not primes" (ignoring 3 itself) ✗ |
| **False Equivalence** | Mistaking a one-way implication for equivalence | Algebraic expression irreducible $\Rightarrow$ Value is prime ✗ |
| **Missing Domain** | Failing to check conditions/premises | Logarithmic equation failing to check $x > 0$ |

### 3.3 Typical Error Analysis Cases

**Case 1**: Erroneous proof of Fermat's Last Theorem for $n=3$

**Error Line**: Line III
> From $a^3 = (c-b)(c^2+cb+b^2)$, deduce that $a = c-b$ and $a^2 = c^2+cb+b^2$.

**Reason for Error**: A product equality cannot be directly split into equal factors. Counterexample: If $a = 6$, then $a^3 = 216 = 3 \times 72$, but $a \neq c-b$.

**Case 2**: Whether the difference of consecutive cubes is prime

**Error Line**: Line IV
> Algebraic expression cannot be factorised $\Rightarrow$ Its value after substituting an integer is prime.

**Reason for Error**: Algebraic irreducibility does not equate to the value being prime. Counterexample: $x^2 + 1$ is irreducible over integers, but when $x = 3$, $x^2 + 1 = 10 = 2 \times 5$.

**Case 3**: Maximum number of consecutive odd primes

**Error Line**: Line VI
> One of the integers is a multiple of 3, therefore it is not prime.

**Reason for Error**: Ignores the fact that 3 itself is both a multiple of 3 and a prime. When $n = 3$, the three numbers are $1, 3, 5$, where 3 is a multiple of 3 but also prime.

**⚡ Summary of Evaluation Tips**:
- **Calculation lines**: Check signs and expansions term by term.
- **Reasoning lines**: Confirm whether "$\Rightarrow$" has sufficient grounds.
- **Conclusion lines**: Check whether all special cases have been considered.
- **Involving primes/divisibility**: Must check multiples of small primes (2, 3, 5).

---

## ⚡ Quick Solving Tips Summary

| Scenario | Tip |
|----------|-----|
| Direct Proof | Clearly write starting point, each deduction step, and ending point. Avoid logical leaps. |
| Proof by Cases | Categories must be exhaustive and mutually exclusive. Keep formatting uniform. |
| Proof by Contradiction | Negate the assumption, find a contradiction. Ensure the contradiction is clear. |
| Constructing Counterexamples | Start with small values, boundary values, and special values. |
| Proof Evaluation | Check line by line. Focus heavily on calculation and reasoning lines. |
| Involving Primes | Test small primes like 2, 3, and 5 individually. |
| Splitting Products | Cannot deduce $a = c, b = d$ directly from $ab = cd$. |
| Algebraic Irreducibility | Does not mean the value is prime; need to verify with counterexamples. |

## ⚠️ Common Pitfalls

- ❌ $\sin A = \sin B \Rightarrow A = B$ (Ignores $A + B = 180^\circ$)
- ❌ $ab = ac \Rightarrow b = c$ (Ignores the special case $a = 0$)
- ❌ "Multiples of 3 are not primes" (Ignores 3 itself)
- ❌ Algebraic expression irreducible $\Rightarrow$ Value is prime (Ignores that the expression can yield composite values)
- ❌ Unclear contradiction in proof by contradiction (Must point out the specific contradiction)
- ❌ Missing cases in proof by cases (e.g., considering positive and negative but forgetting zero)

---

## 📝 Selected Example Questions

### Example 1 (2017 P2 Q9 · Proof Evaluation)

**Question**: Evaluate the erroneous proof of Fermat's Last Theorem for the $n=3$ case, and identify the line containing the first error.

【Question Analysis】
The question provides a deductive proof that $a^3 + b^3 = c^3$ has no positive integer solutions, asking you to identify the first logical error. The core method is to check algebraic calculations and logical deductions line by line.

【Solution Steps】
**Line I**: $a^3 = c^3 - b^3$, just rearranging terms. Correct.

**Line II**: $a^3 = (c-b)(c^2+cb+b^2)$, expanding using difference of cubes. Correct.

**Line III**: Claims to split factors directly from a product equality:
$$a^3 = (c-b)(c^2+cb+b^2) \Rightarrow a = c-b \text{ and } a^2 = c^2+cb+b^2$$

This is a fatal error! From $A = BC$, you cannot assert $A = B$ and $A^2 = B^2$ just because $A \leq B^2$ and $C \geq B$.

**Counterexample**: Let $a = 6$, then $a^3 = 216 = 3 \times 72$. We can easily set $c - b = 3$ and $c^2+cb+b^2 = 72$, in which case $a \neq c-b$.

【Quick Thinking】
The first two steps are algebraic identities and won't go wrong. The third step splits factors directly from a product expression, violating basic logic. Target Line III.

【Correct Answer】D (Line III)

【Knowledge Points】Proof | **Syllabus**: Err1, Err2

---

### Example 2 (2022 P2 Q7 · Algebraic Irreducibility Fallacy)

**Question**: Evaluate the proof that "the difference between consecutive cubes is always prime", and identify the first error.

【Question Analysis】
The proof claims that since $3x^2 + 3x + 1$ is algebraically irreducible, its value must be prime. We need to identify the flaw in this reasoning.

【Solution Steps】
**Line I-III**: Algebraic expansions and discriminant calculation are correct.

**Line IV**: Deduces "cannot be factorised after substituting integers" from "algebraic expression cannot be factorised".

This is a logical leap! **Algebraic irreducibility $\neq$ Value is prime**.

**Counterexample**: When $x = 6$, $3 \times 36 + 18 + 1 = 127$ (prime); but when $x = 7$, $3 \times 49 + 21 + 1 = 169 = 13^2$ (composite).

Or test the classic counterexample: $x^2 + 1$ is algebraically irreducible, but when $x = 3$, its value is $10 = 2 \times 5$.

【Quick Thinking】
Remember the classic counterexample $x^2 + 1$: algebraically irreducible, but yields a composite number when $x = 3$. The similar structure $3x^2 + 3x + 1$ can also take composite values.

【Correct Answer】F (Line IV)

【Knowledge Points】Proof, Counterexamples | **Syllabus**: Err1, Err2

---

### Example 3 (2016 P2 Q9 · Congruence Criteria)

**Question**: Given that $\triangle ABC$ and $\triangle XYZ$ have equal areas, determine which of the three additional conditions can independently prove congruence.

【Question Analysis】
Combine the area formula and congruence criteria (SAS, ASA) to judge the sufficiency of the conditions. The core idea is that equal areas alone do not guarantee congruence.

【Solution Steps】
**Condition (1)**: $AB = XY$ and $BC = YZ$.

From the area formula $\frac{1}{2} AB \cdot BC \sin B = \frac{1}{2} XY \cdot YZ \sin Y$, equating both sides gives $\sin B = \sin Y$.

However, $\sin B = \sin Y$ does not deduce $B = Y$, because it's possible that $Y = 180^\circ - B$ (supplementary angles).

**Counterexample**: Two sides are equal but the included angles are supplementary. The triangles are not congruent.

**Condition (2)**: $AB = XY$ and $\angle B = \angle Y$.

Knowing one angle is equal, the area formula directly determines the second side $BC = YZ$. This forms SAS, **deducing congruence**. ✓

**Condition (3)**: $\angle B = \angle Y$ and $\angle C = \angle Z$.

Two angles being equal means the third angles are also equal, making the two triangles similar. The scale factor $k$ is determined by the area relationship: $k^2 = 1$, so $k = 1$, meaning they are congruent. ✓

【Quick Thinking】
In Condition (1), equal sines could correspond to supplementary angles; in Condition (2), knowing one angle is equal, the area fixes the side to form SAS; in Condition (3), similarity + equal area locks the scale factor to 1.

【Correct Answer】D (Both conditions 2 and 3 deduce congruence)

【Knowledge Points】Proof, Coordinate Geometry | **Syllabus**: Prf1, M5.4

---

## 🏋️ After-Class Exercises (Time limit: 15 minutes)

| # | Question ID | Topic | Corresponding Syllabus | Difficulty |
|---|-------------|-------|------------------------|------------|
| 1 | 2016 P2 Q5 | Constructing Counterexamples | Prf1, Err1 | ⭐⭐⭐ |
| 2 | 2020 P2 Q3 | Algebraic Errors | Err1, Err2 | ⭐⭐⭐ |
| 3 | 2020 P2 Q4 | Evaluating Counterexamples | Prf1, Err1 | ⭐⭐⭐ |
| 4 | 2023 P2 Q4 | Missing Boundaries | Err1, Err2 | ⭐⭐⭐⭐ |
| 5 | 2023 P2 Q8 | Geometric Proof | Prf1, Prf5 | ⭐⭐⭐⭐ |
| 6 | 2023 P2 Q5 | Necessary and Sufficient Conditions | Arg2, Prf2 | ⭐⭐⭐ |
| 7 | 2017 P2 Q11 | Polynomial Properties | Prf1, Prf5 | ⭐⭐⭐⭐ |
| 8 | 2022 P2 Q9 | Logical Conditions | Arg2, Prf2 | ⭐⭐⭐ |

---

*For full solutions, see the question bank database. Each question includes 【Solution Steps】 and 【Quick Thinking】.*

---

## 📚 Supplementary Notes

### Characteristics of Paper 2 Proof Questions

1. **Diverse Types**: Proof evaluation, constructing counterexamples, geometric reasoning, logical judgment.
2. **Heavy Reading**: Requires careful reading of the provided proof processes.
3. **Hidden Traps**: Errors often lie in seemingly reasonable deductions.
4. **Tight Timing**: Recommended to spend 3-4 minutes per question.

### Exam Preparation Advice

1. **Familiarize with Common Error Types**: Algebraic errors, logical leaps, missing boundaries, false equivalences.
2. **Master Counterexample Construction Techniques**: Start with small values and boundary values.
3. **Practice Line-by-Line Evaluation**: Develop the habit of checking step-by-step.
4. **Collect Classic Counterexamples**: $x^2 + 1$, $\sin A = \sin B$, multiples of 3, etc.

---

## 🎯 Companion Exercises

Finished this chapter? [→ Go to Proof Practice Questions](/practice/tmua/?topic=Proof)

---

*Module L Notes Completed | Last Updated: 2026-04-29*
