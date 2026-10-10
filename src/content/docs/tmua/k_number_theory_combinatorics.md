---
title: "K Number Theory and Combinatorics"
---

## Module K: Number Theory and Combinatorics

> **Corresponding Syllabus Section 1**: MM1.1, MM2.4, M2.3, M2.5
> **Corresponding Paper**: P2 Focus (Logical Reasoning and Proof Verification)
> **Recommended Class Hours**: 1 hour | **Target Number of Questions**: 8 questions

---

## 📋 Module Overview

| Section | Content | Corresponding Syllabus | Past Paper Frequency | Class Hours |
|------|------|---------|-------------|------|
| K1 | Divisibility and Remainders | MM1.1, M2.3 | 3 times in 8 years | 0.4 |
| K2 | Fundamentals of Combinatorics | M2.5 | 3 times in 8 years | 0.3 |
| K3 | Properties of Binomial Coefficients | MM2.4 | 2 times in 8 years | 0.3 |

---

## K1 Divisibility and Remainders [MM1.1, M2.3]

### 1.1 Basic Concepts of Divisibility

**Divisibility**: If there exists an integer $k$ such that $a = bk$, then we say $b$ divides $a$, denoted as $b \mid a$.

**⚠️ Common Misconception**: The divisibility relationship does not have a special form of transitivity. For example, if $a \mid bc$, it does **not** necessarily imply $a \mid b$ or $a \mid c$.

**Counterexample**: $a = 6$, $b = 2$, $c = 3$. We have $6 \mid 6$, but $6 \nmid 2$ and $6 \nmid 3$.

### 1.2 Division with Remainder

For an integer $a$ and a positive integer $b$, there exist unique integers $q$ (quotient) and $r$ (remainder), such that:

$$a = bq + r, \quad 0 \le r < b$$

**⚠️ Crucial Trap**: The remainder $r$ must be strictly less than the divisor $b$. When two remainders are multiplied, the product may exceed the divisor, in which case the **actual remainder** is $rs \bmod b$, not $rs$ itself.

**Classic Error Example**:
Suppose the remainder of $b$ divided by $a$ is $r$, and the remainder of $c$ divided by $a$ is $s$. If $r, s > 0$, can we deduce that the remainder of $bc$ divided by $a$ is $rs$?

**Error**: For instance, let $a = 6$, $r = 2$, $s = 3$, then $rs = 6$, which is exactly equal to $a$. In this case, $bc$ is divisible by $a$ (the remainder is $0$), rather than having a remainder of $6$.

### 1.3 Prime Numbers and Prime Factorisation

**Prime Number**: An integer greater than $1$ that has exactly two positive factors: $1$ and itself.

**Unique Factorisation Theorem**: Every integer greater than $1$ can be uniquely factored into a product of prime numbers.

**Applications**: Determining divisibility, finding the greatest common divisor, determining the number of primes.

---

## K2 Fundamentals of Combinatorics [M2.5]

### 2.1 Basic Counting Principles

**Multiplication Principle**: If task $A$ can be done in $m$ ways, and for each way, task $B$ can be done in $n$ ways, then doing both $A$ and $B$ can be done in $m \times n$ ways.

**Pigeonhole Principle**: If $n+1$ items are placed into $n$ boxes, then at least one box must contain at least $2$ items.

**⚠️ Application Scenarios**:
- Round table seating problems: controlling gaps to ensure latecomers must sit adjacently.
- Pairing problems: selecting several items from an ordered set, guaranteeing that a certain pair satisfies a condition.

### 2.2 Dyck Paths (Mountain Encoding Problem)

**Definition**: A path consisting of $n$ up-steps (U) and $n$ down-steps (D), starting at height $0$, returning to height $0$, and never dropping below height $0$ during the process.

**Characteristics of a Valid Encoding**:
- The first character must be U.
- The last character must be D.
- At any position, the cumulative number of U's is not less than the cumulative number of D's.

**Transformation Verification Techniques**:
- Reversal operation: The first letter becomes D → Invalid.
- Swapping U and D: The first letter becomes D → Invalid.
- Adding U at the beginning and D at the end: Raising the whole path by one level → Valid.

**Counting Formula** (Catalan Numbers): The number of valid encodings of order $n$ is

$$C_n = \frac{1}{n+1}\binom{2n}{n}$$

### 2.3 Applications of Pairing and the Pigeonhole Principle

**Strategy**:
1. Identify all pairings that satisfy the specific condition.
2. Determine the isolated items (items not participating in pairings).
3. Calculate the maximum number of safe choices: number of isolated items + number of pairings.
4. Answer = Safe choices + 1.

---

## K3 Properties of Binomial Coefficients [MM2.4]

### 3.1 Definition of Binomial Coefficients

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

Represents the number of ways to choose $k$ items from $n$ items.

### 3.2 Divisibility Analysis

When determining whether $\binom{n}{k} a^{n-k} b^k$ is divisible by a certain number $m$, consider:
- The prime factorisation of $\binom{n}{k}$.
- The contribution from $a^{n-k}$ and $b^k$.

**Technique**: If $m = p^e q^f$ (prime factorisation), then the coefficient must simultaneously satisfy:
- Containing at least $e$ factors of $p$.
- Containing at least $f$ factors of $q$.

**Common Mistake**: Ignoring the prime factor contribution of the binomial coefficient itself and only looking at the powers of $a$ and $b$.

---

## ⚡ Quick Solving Techniques Summary

| Scenario | Technique |
|------|------|
| Remainder Product Problems | Check if $rs$ exceeds the divisor; the actual remainder is $rs \bmod a$. |
| Round Table Seating Problems | At most $k$ empty seats between every two people; total $\div$ (people + empty spaces) rounded up. |
| Dyck Path Transformations | Check if the first letter is U; if not, it is invalid. |
| Pairing Problems | Count pairings and isolated items; safe choices = isolated + pairings. |
| Binomial Divisibility | Check the first and last terms first; intermediate terms often automatically satisfy the condition. |

## ⚠️ Common Pitfalls

- ❌ If $a \mid bc$, it does **not** necessarily mean $a \mid b$ or $a \mid c$.
- ❌ The product of remainders may exceed the divisor; it cannot be directly taken as the new remainder.
- ❌ Reversing a Dyck path makes the first letter D, rendering it invalid.
- ❌ When determining the divisibility of binomial coefficients, you must check multiple sources of prime factor contributions simultaneously.

---

## 📝 Selected Examples

### Example 1 (2016 P2 Q13 · Divisibility Proof Error)

**Question**: In the following proof of a false proposition, which line contains the error?

Proposition: If $a$ divides $bc$, then $a$ divides $b$ or $a$ divides $c$.

Proof Steps:
1. Contrapositive conversion.
2. Let remainders be $r, s$, where $0 < r, s < a$.
3. $b = ax + r$, $c = ay + s$.
4. $bc = a(axy + xs + yr) + rs$.
5. The remainder of $bc$ divided by $a$ is $rs$.
6. $rs > 0$, hence $a$ does not divide $bc$.

【Problem Analysis】
This question tests logical reasoning regarding divisibility. You need to review the proof step by step to identify where the deduction goes wrong.

【Solution Steps】
Lines 1-4 are all correct.

Line 5 asserts that the remainder of $bc$ divided by $a$ is $rs$, which is **where the error lies**.

When $rs \ge a$, $rs$ is not the remainder. For example, $a = 6$, $r = 2$, $s = 3$:
$$rs = 6 = a$$

In this case, the remainder of $bc$ divided by $a$ is $0$ (i.e., $a$ divides $bc$), not a remainder of $6$.

Counterexample $a = 6$, $b = 2$, $c = 3$:
- $6 \mid bc$ (since $bc = 6$)
- But $6 \nmid 2$ and $6 \nmid 3$

The proof attempts to use remainders to argue the converse, but in Line 5, it ignores the scenario where the product of the remainders might exceed the divisor.

【Shortcut Idea】
Directly construct a counterexample: $a = 6$, $r = 2$, $s = 3$, then $rs = 6 = a$, and the remainder should be $0$. The assertion in line 5 fails under this counterexample.

【Correct Answer】E (Line 5)

【Knowledge Point】Number Theory | **Syllabus**: MM1.1, M2.3

---

### Example 2 (2018 P2 Q8 · Dyck Path Transformation)

**Question**: A valid encoding of a mountain profile consists of $n$ U's and $n$ D's, starts from sea level, returns to sea level, and never goes below sea level. Determine whether the following three transformations maintain validity:

I. Reverse the encoding
II. Replace every U with D, and every D with U
III. Add U at the beginning, and D at the end

【Problem Analysis】
This question tests the properties of Dyck paths. A valid encoding must start with U, end with D, and have cumulative U's no less than cumulative D's at any point.

【Solution Steps】
**Judging I**: Reverse the encoding.

The original encoding ends with D, so reversing it makes it start with D. If the first character is D, the first step goes below sea level, so after reversal, it is **not** a valid encoding. I is incorrect.

**Judging II**: Swap U and D.

The original encoding starts with U, so swapping makes it start with D. Similarly, the first step goes below sea level, so it is **not** a valid encoding. II is incorrect.

**Judging III**: Add U at the beginning, add D at the end.

The new encoding starts with U, satisfying the basic condition. The original encoding never goes below sea level, and the new encoding raises the whole path by one level (height increases from $0$ to $1$), so it will definitely not go below sea level. The final D brings the height back to $0$. The new encoding has $n+1$ U's and $n+1$ D's, satisfying all conditions. III is correct.

【Shortcut Idea】
Grasp the core constraint: the first letter must be U. Both I and II change the first letter to D, instantly rendering them invalid. III adds U at the start, keeping the first letter U, and raises the entire path by one level, naturally keeping it valid.

【Correct Answer】D (Only III is correct)

【Knowledge Point】Combinatorics | **Syllabus**: M2.5

---

## 🏋️ After-Class Exercises (10 Minutes Time Limit)

| # | Question Number | Topic | Corresponding Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P2 Q20 | Regular Polygon Interior Angle Equation | MM1.1 | ⭐⭐⭐ |
| 2 | 2017 P2 Q13 | Standard Form Addition Carry | M2.3 | ⭐⭐⭐ |
| 3 | 2017 P2 Q20 | Combinatorial Reasoning | M2.5 | ⭐⭐⭐⭐ |
| 4 | 2019 P2 Q9 | Pigeonhole Principle Round Table Problem | M2.5 | ⭐⭐⭐ |
| 5 | 2022 P2 Q8 | Pairing and Pigeonhole Principle | M2.5 | ⭐⭐⭐ |
| 6 | 2023 P1 Q6 | Divisibility of Binomial Coefficients | MM2.4 | ⭐⭐⭐ |

---

*For full solutions, please refer to the question bank database; each question includes 【Solution Steps】 and 【Shortcut Idea】.*

---

## Appendix: Summary of Typical Question Types

### Type A: Divisibility Proof Verification

**Characteristics**: Provides a proof process for a proposition and requires identifying which step is incorrect.

**Strategy**:
1. Review the logical validity of each step line by line.
2. Pay special attention to division operations (might lose roots) and remainder operations (might exceed bounds).
3. Use specific counterexamples to verify suspicious steps.

### Type B: Applications of the Pigeonhole Principle

**Characteristics**: Circular arrangement or pairing problems, asking for the minimum number to guarantee a certain condition holds.

**Strategy**:
1. Determine the controlling quantities: number of gaps, pairings, and isolated items.
2. Construct the worst-case scenario (making the condition hardest to satisfy).
3. Calculate the safety boundary, answer = safe choices + 1.

### Type C: Properties of Binomial Coefficients

**Characteristics**: Determine which terms in an expansion have coefficients that satisfy a divisibility condition.

**Strategy**:
1. Analyse the prime factorisation of the target number.
2. Check the first and last terms (often the boundary cases).
3. Intermediate terms usually satisfy the condition automatically and do not require individual verification.

---

## 🎯 Matching Exercises

Finished this chapter? [→ Go to Number Theory related exercises](/practice/tmua/?topic=Number%20Theory)

Finished this chapter? [→ Go to Combinatorics related exercises](/practice/tmua/?topic=Combinatorics)

---

*Lecture notes complete! This module contains 8 questions, covering the two main topics of basics of number theory and combinatorial counting.*
