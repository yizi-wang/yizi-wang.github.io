---
title: "C Sequences and Series"
---

## Module C: Sequences & Series

> **Syllabus Mapping Section 1**: MM2.1, MM2.2, MM2.3, MM2.4
> **Paper Focus**: P1 (nth term, summation formulas), P2 (recurrence relations, convergence analysis)
> **Recommended Time**: 2 lessons | **Target Questions**: 21 questions

---

## 📋 Module Overview

| Section | Content | Syllabus Mapping | Exam Frequency | Lessons |
|---------|---------|------------------|----------------|---------|
| C1 | Sequences and Recurrence Relations | MM2.1 | 12 times in 8 years | 0.5 |
| C2 | Arithmetic Progressions | MM2.2 | 6 times in 8 years | 0.5 |
| C3 | Geometric Progressions and Infinite Series | MM2.3 | 8 times in 8 years | 0.5 |
| C4 | Binomial Expansion | MM2.4 | 5 times in 8 years | 0.5 |

---

## C1 Sequences and Recurrence Relations [MM2.1]

### 1.1 Methods of Defining a Sequence

**Explicit Formula**: An explicit expression for the $n$-th term, e.g., $a_n = 2n - 1$.

**Recurrence Relation**: A rule connecting terms of a sequence, e.g., $x_{n+1} = f(x_n)$.

Common recurrence relations in TMUA:
- Linear recurrence: $x_{n+1} = ax_n + b$
- Fractional recurrence: $x_{n+1} = \dfrac{ax_n + p}{bx_n + q}$ (requires finding fixed points)
- Derivative recurrence: $f_{n+1}(x) = x \cdot f_n'(x)$

### 1.2 Finding Periodic Patterns in Recurrence Sequences

**Core Strategy**: Calculate the first few terms and observe whether repetition or a period occurs.

**Typical Example** (2017 P1 Q11): For the recurrence $x_{n+1} = \dfrac{23x_n - 53}{5x_n + 1}$, the first three terms are $7, 3, 1$. Continuing the calculation reveals the sequence is $7, 3, 1, -5, 7, \ldots$, which has a period of 4.

**Methods for identifying periods**:
1. Calculate the first 5-10 terms.
2. If a term matches the first term, a cycle might have begun.
3. Verify the length of the period.

---

## C2 Arithmetic Progressions [MM2.2]

### 2.1 Basic Formulas

| Formula | Expression | Note |
|---------|------------|------|
| $n$-th Term | $a_n = a + (n-1)d$ | $a$ is the first term, $d$ is the common difference |
| Sum of First $n$ Terms | $S_n = \dfrac{n}{2}[2a + (n-1)d]$ | Memorization required |
| Sum of First $n$ Terms (Simplified) | $S_n = \dfrac{n}{2}(a + a_n)$ | Using the average of the first and last terms |
| Sum of First $n$ Natural Numbers | $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$ | Common special case |

### 2.2 Properties of Arithmetic Progressions

**Property 1**: If $m + n = p + q$, then $a_m + a_n = a_p + a_q$.

**Property 2**: $S_n$ is a quadratic function of $n$ (with no constant term).

**Property 3**: $a, b, c$ are in an arithmetic progression $\Leftrightarrow 2b = a + c$.

**⚠️ Common Mistake**: In the formula for $S_n$, the multiplier is $\dfrac{n}{2}$, not $\dfrac{n-1}{2}$.

---

## C3 Geometric Progressions and Infinite Series [MM2.3]

### 3.1 Basic Formulas

| Formula | Expression | Note |
|---------|------------|------|
| $n$-th Term | $a_n = ar^{n-1}$ | $a$ is the first term, $r$ is the common ratio |
| Sum of First $n$ Terms | $S_n = a\dfrac{1 - r^n}{1 - r}$ ($r \neq 1$) | Or $a\dfrac{r^n - 1}{r - 1}$ |
| Sum to Infinity | $S_\infty = \dfrac{a}{1 - r}$ | Only valid when $|r| < 1$ |

### 3.2 Convergence of Infinite Series

**Convergence Condition**: $|r| < 1$, i.e., $-1 < r < 1$.

**Determining Convergence**:
- If $r$ involves $\sqrt{3}$, it may be necessary to recognize that $\dfrac{\sqrt{3}}{2} \approx 0.866 < 1$.
- If a question states that the sum to infinity exists, it implies $|r| < 1$.

### 3.3 Power Transformations of Geometric Progressions

**Squared Sequence**: The squares of the original sequence $a, ar, ar^2, \ldots$ are $a^2, a^2r^2, a^2r^4, \ldots$, which form another geometric progression with a common ratio of $r^2$.

**Cubed Sequence**: Forms a geometric progression with a common ratio of $r^3$.

**Property**: $|r| < 1 \Rightarrow |r^k| < 1$ (for $k \geq 1$), meaning the squared or cubed sequences are still convergent.

---

## C4 Binomial Expansion [MM2.4]

### 4.1 Binomial Theorem

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

where $\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$.

### 4.2 Common Special Cases

$$(1 + x)^n = \binom{n}{0} + \binom{n}{1}x + \binom{n}{2}x^2 + \cdots + \binom{n}{n}x^n$$

**Pascal's Triangle**: $\dbinom{n}{k} = \dbinom{n-1}{k-1} + \dbinom{n-1}{k}$.

**Common Combinations**:
- $\dbinom{3}{0}=1$, $\dbinom{3}{1}=3$, $\dbinom{3}{2}=3$, $\dbinom{3}{3}=1$
- $\dbinom{4}{2}=6$, $\dbinom{5}{2}=10$

### 4.3 Coefficients of Specific Terms in Polynomial Expansions

**Method**: Rewrite $(a + bx + cx^2)^n$ as $(a + u)^n$, then expand based on the powers of $u$.

**Strategy**: Observe the constraints on the exponent of $x$ and count the combinations methodically.

---

## C5 Typical Question Types and Strategies [MM2.1-MM2.4]

### Type A: Combining Arithmetic and Geometric Progressions

**Features**: Given the first few terms of two sequences, one arithmetic and the other geometric.

**Strategy**:
1. Determine the relationship between $p$ and $q$ using the geometric progression.
2. Set up an equation using the arithmetic progression.
3. Solve the system of equations.

**Typical Example**: 2017 P1 Q7 (The first three terms of an arithmetic progression are $p, q, p^2$, and the first three terms of a geometric progression are $p, p^2, q$).

### Type B: Comprehensive Calculations Involving Sum to Infinity

**Features**: Given the sum to infinity of the original sequence, squared sequence, or cubed sequence, and required to solve for unknown terms.

**Strategy**:
1. Set up equations using $S_\infty = \dfrac{a}{1-r}$.
2. Keep in mind that the common ratio of a squared sequence is $r^2$.
3. Solve simultaneously for $a$ and $r$.

**Typical Example**: 2018 P1 Q8 (Sum to infinity is 6, sum of squares is 12, find the sum of cubes).

### Type C: Summing Sequences with $(-1)^n$

**Features**: The general term contains $(-1)^n$, leading to alternating signs.

**Strategy**:
1. Simplify the $n$-th term into the form $C \cdot (-1)^n$.
2. Calculate the sum by considering the symmetry between odd and even terms.
3. If the number of terms is even, you can pair them up directly.

**Typical Example**: 2016 P1 Q4 ($a_n = (-1)^n - (-1)^{n-1} + (-1)^{n+2}$).

---

## ⚡ Quick Solving Tips Summary

| Scenario | Technique |
|----------|-----------|
| Finding the period in recurrences | Calculate 5-10 terms, observe the cycle |
| Sum of the first $n$ terms in AP | Use $S_n = \dfrac{n}{2}(a + a_n)$ to avoid memorizing the complex formula |
| Sum to infinity in GP | Verify $|r|<1$ first, then use $\dfrac{a}{1-r}$ |
| $n$-th term with $(-1)^n$ | Simplify to $C \cdot (-1)^n$, pair up odd and even terms |
| Common ratio of a squared sequence | The square of the original ratio $r^2$ |
| Specific term coefficients in binomial expansion | Use the combinations formula $\dbinom{n}{k}$ for direct calculation |
| Combining AP and GP | Use the GP to find variable relationships, and the AP to set up equations |

---

## ⚠️ Common Pitfalls

- ❌ $(-1)^{n-1} = -(-1)^n$ (the negative first power evaluates to a negative sign), it is **not** $(-1)^n \cdot (-1)$
- ❌ The factor in the sum formula for the first $n$ terms of an AP is $\dfrac{n}{2}$, **not** $\dfrac{n-1}{2}$
- ❌ The sum to infinity of a geometric progression only exists when $|r| < 1$; forgetting to verify convergence
- ❌ The first term of the squared sequence is $a^2$, **not** $a$; the common ratio is $r^2$, **not** $r$
- ❌ Miscalculating $\dbinom{n}{k}$ in a binomial expansion, especially when $n$ is large
- ❌ When looking for a period in a recurrence sequence, calculating too few terms and missing the start of the cycle

---

## 📝 Selected Examples

### Example 1 (2017 P1 Q7 · AP & GP Integration)

**Question**: The first three terms of an arithmetic progression are $p, q, p^2$ ($p < 0$), and the first three terms of a geometric progression are $p, p^2, q$. Find the sum of the first 10 terms of the arithmetic progression.

[Analysis]
This question requires integrating the definitions of arithmetic and geometric progressions. Set up equations using the known first three terms to solve for $p$ and $q$, then substitute them into the AP sum formula.

[Steps]
Step 1: Determine the relationship between $q$ and $p$ using the geometric progression.
$$r = \dfrac{p^2}{p} = p, \quad q = p \cdot r = p^3$$

Step 2: Set up an equation using the arithmetic progression.
Common difference $d = q - p = p^3 - p$. The third term is $p + 2d = p^2$:
$$p + 2(p^3 - p) = p^2 \quad \Rightarrow \quad 2p^3 - p^2 - p = 0$$

Step 3: Solve by factorization.
$$p(2p+1)(p-1) = 0$$
Since $p < 0$ and $p \neq 0$, we get $p = -\dfrac{1}{2}$.

Step 4: Calculate the AP parameters.
$$q = p^3 = -\dfrac{1}{8}, \quad d = q - p = \dfrac{3}{8}$$

Step 5: Find the sum of the first 10 terms.
$$S_{10} = \dfrac{10}{2}\left[2 \cdot \left(-\dfrac{1}{2}\right) + 9 \cdot \dfrac{3}{8}\right] = 5 \times \dfrac{19}{8} = \dfrac{95}{8}$$

[Shortcut]
The geometric progression directly provides $q = p^3$. Substitute this into the arithmetic progression condition to eliminate $q$, immediately setting up an equation for $p$. Factoring $2p^3 - p^2 - p = 0$ is the key.

[Correct Answer] B ($\dfrac{95}{8}$)

[Knowledge Point] Sequences and Series | **Syllabus**: MM2.1, MM2.2, MM2.3

---

### Example 2 (2017 P2 Q3 · GP Sum to Infinity)

**Question**: The first term of a geometric progression is $2\sqrt{3}$, and the fourth term is $\dfrac{9}{4}$. Find the sum to infinity.

[Analysis]
Given the first and fourth terms, first find the common ratio $r$, then verify that $|r| < 1$ to ensure convergence, and finally compute the sum using the formula.

[Steps]
Step 1: Find the common ratio from the fourth term.
$$ar^3 = 2\sqrt{3}\,r^3 = \dfrac{9}{4} \quad \Rightarrow \quad r^3 = \dfrac{9}{8\sqrt{3}} = \dfrac{9\sqrt{3}}{24} = \dfrac{3\sqrt{3}}{8}$$

Step 2: Recognize $r^3$ as a perfect cube.
$$\dfrac{3\sqrt{3}}{8} = \left(\dfrac{\sqrt{3}}{2}\right)^3 \quad \Rightarrow \quad r = \dfrac{\sqrt{3}}{2}$$

Step 3: Verify convergence.
$$|r| = \dfrac{\sqrt{3}}{2} \approx 0.866 < 1 \quad \text{Converges}$$

Step 4: Calculate the sum to infinity.
$$S_\infty = \dfrac{2\sqrt{3}}{1 - \dfrac{\sqrt{3}}{2}} = \dfrac{4\sqrt{3}}{2 - \sqrt{3}}$$

Rationalize the denominator:
$$\dfrac{4\sqrt{3}(2 + \sqrt{3})}{(2 - \sqrt{3})(2 + \sqrt{3})} = 4\sqrt{3}(2 + \sqrt{3}) = 4(2\sqrt{3} + 3)$$

[Shortcut]
Recognizing $\dfrac{3\sqrt{3}}{8} = \left(\dfrac{\sqrt{3}}{2}\right)^3$ is the core technique, avoiding manual cube root extraction. Note that $(2-\sqrt{3})(2+\sqrt{3}) = 4 - 3 = 1$ during rationalization.

[Correct Answer] G ($4(2\sqrt{3} + 3)$)

[Knowledge Point] Sequences and Series | **Syllabus**: MM2.3

---

### Example 3 (2018 P1 Q8 · Power Transformations of a GP)

**Question**: The sum to infinity of a geometric progression is 6, and the sum to infinity of the squares of its terms is 12. Find the sum to infinity of the cubes of its terms.

[Analysis]
Let the first term of the original sequence be $a$ and the common ratio be $r$. The squared sequence has a first term of $a^2$ and a common ratio of $r^2$. The cubed sequence has a first term of $a^3$ and a common ratio of $r^3$. Set up a system of equations to solve.

[Steps]
Step 1: Set up the equations.
$$\dfrac{a}{1-r} = 6 \quad \cdots (1)$$
$$\dfrac{a^2}{1-r^2} = 12 \quad \cdots (2)$$

Step 2: Simplify equation (2) using equation (1).
$$\dfrac{a^2}{(1+r)(1-r)} = 12 \quad \Rightarrow \quad \dfrac{a}{1+r} \cdot \dfrac{a}{1-r} = 12$$

Substitute equation (1): $\dfrac{a}{1+r} \cdot 6 = 12$, which gives $\dfrac{a}{1+r} = 2$.

Step 3: Solve simultaneously.
From equation (1): $a = 6 - 6r$
From the simplified equation: $a = 2 + 2r$

Equating them: $6 - 6r = 2 + 2r \quad \Rightarrow \quad r = \dfrac{1}{2}$, $a = 3$.

Step 4: Calculate the sum to infinity of the cubed sequence.
$$\dfrac{a^3}{1-r^3} = \dfrac{27}{1 - \dfrac{1}{8}} = \dfrac{27}{\dfrac{7}{8}} = \dfrac{216}{7}$$

[Shortcut]
Dividing $\dfrac{a^2}{1-r^2} = 12$ by $\dfrac{a}{1-r} = 6$ yields $\dfrac{a}{1+r} = 2$. Combine this with $a = 6 - 6r$ to solve in one step. The cubed sequence has a common ratio of $\dfrac{1}{8}$ and a first term of $27$.

[Correct Answer] D ($\dfrac{216}{7}$)

[Knowledge Point] Sequences and Series | **Syllabus**: MM2.3

---

## 🏋️ Post-Lesson Practice (Time Limit: 15 minutes)

| # | Question | Topic | Syllabus | Difficulty |
|---|----------|-------|----------|------------|
| 1 | 2016 P1 Q4 | Sum of a sequence involving $(-1)^n$ | MM2.1 | ⭐⭐⭐ |
| 2 | 2016 P1 Q14 | Sum to infinity of two combined GPs | MM2.3 | ⭐⭐⭐ |
| 3 | 2016 P2 Q12 | Sign determination of the AP sum to $n$ terms | MM2.2 | ⭐⭐⭐ |
| 4 | 2017 P1 Q11 | Finding periodicity in a recurrence relation | MM2.1 | ⭐⭐⭐ |
| 5 | 2018 P1 Q2 | Relationships in AP sums to $n$ terms | MM2.2 | ⭐⭐⭐ |
| 6 | 2018 P2 Q7 | Intersection of two arithmetic progressions | MM2.2 | ⭐⭐⭐ |
| 7 | 2022 P1 Q8 | Properties of the sum of the first $n$ terms in a GP | MM2.3 | ⭐⭐⭐ |
| 8 | 2023 P1 Q4 | Infinite series involving trigonometric functions | MM2.3 | ⭐⭐⭐⭐ |

---

*For full solutions, please refer to the question bank database. Every question includes [Steps] and [Shortcut].*

---

## 🎯 Related Practice

Finished this chapter? [→ Go to Sequences and Series related practice](/practice/tmua/?topic=Sequences%20and%20Series)

---

## 📚 Syllabus Quick Reference

**MM2.1 Sequence Definitions**: $n$-th term formula, recurrence relations $x_{n+1} = f(x_n)$

**MM2.2 Arithmetic Progressions**: $n$-th term $a_n = a + (n-1)d$, sum $S_n = \dfrac{n}{2}[2a + (n-1)d]$

**MM2.3 Geometric Progressions**: Finite sum $S_n = a\dfrac{1-r^n}{1-r}$, sum to infinity $S_\infty = \dfrac{a}{1-r}$ ($|r|<1$)

**MM2.4 Binomial Expansion**: Expansion of $(1+x)^n$, combinations $\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$

---

*Lecture Notes Completion Date: 2026-04-29*
