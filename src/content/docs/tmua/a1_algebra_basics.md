---
title: "A1 Algebra Basics"
---

## Module A1: Algebra Basics

> **Syllabus Sections**: MM1.1, MM1.2, MM1.6, MM1.7
> **Paper**: Focus in P1 (Calculation techniques), Involved in P2 (Foundation of algebraic reasoning)
> **Suggested Lessons**: 2 lessons | **Target Number of Questions**: 15-20 questions

---

## 📋 Module Overview

| Section | Content | Syllabus | Past Paper Frequency | Lessons |
|------|------|---------|-------------|------|
| A1.1 | Index laws and operations | MM1.1 | 12 times in 8 years | 0.5 |
| A1.2 | Surd operations and rationalisation | MM1.2 | 8 times in 8 years | 0.5 |
| A1.3 | Polynomial operations (expansion, factorisation, remainder theorem) | MM1.6 | 20 times in 8 years | 1 |
| A1.4 | Foundation of function properties | MM1.7 | 10 times in 8 years | 0.5 |

---

## A1.1 Index Laws and Operations [MM1.1]

### 1.1.1 Overview of Index Laws

Index laws are essentially **simplified notations for multiplication**. Understand them rather than memorise by rote:

$$a^m \cdot a^n = a^{m+n}$$

**Derivation**: $a^m$ is the product of $m$ copies of $a$, and $a^n$ is the product of $n$ copies of $a$. Together, they form the product of $m+n$ copies of $a$.

$$\frac{a^m}{a^n} = a^{m-n}$$

**Derivation**: $m$ copies of $a$ multiplied together, divided by $n$ copies of $a$, leaves $m-n$ copies.

$$(a^m)^n = a^{mn}$$

**Derivation**: $a^m$ is multiplied repeatedly $n$ times, each contributing $m$ copies of $a$, totalling $mn$ copies.

$$a^{-n} = \frac{1}{a^n}$$

**Derivation**: From the division law, $a^0 \div a^n = a^{-n}$, and $a^0 = 1$.

$$a^{1/n} = \sqrt[n]{a}$$

**Derivation**: Since $(a^{1/n})^n = a^1 = a$, $a^{1/n}$ is defined as the $n$-th root of $a$.

### 1.1.2 Strategies for Solving Exponential Equations

The core techniques for exponential equations are **making bases uniform** or **substitution to reduce the degree**.

**Typical Structure**: $a^{f(x)} = b$

If $b$ can be expressed as a power of $a$: $b = a^c$, then $f(x) = c$.

If it cannot be expressed directly, take logarithms: $f(x) = \log_a b$.

**Composite Exponential Equations**: $a^{2x} + ka^{x} + c = 0$

Substitution: Let $y = a^x$, converting it to a quadratic equation $y^2 + ky + c = 0$. Solve for $y$, then substitute back to find $x$.

---

## A1.2 Surd Operations and Rationalisation [MM1.2]

### 1.2.1 Properties of Surds

Surds are the inverse operations of index laws:

$$\sqrt{a^2} = |a|$$

**⚠️ Key Difference**: $\sqrt{x^2} = |x|$, not $x$. When $x < 0$, $\sqrt{x^2} = -x$.

$$\sqrt{ab} = \sqrt{a} \cdot \sqrt{b} \quad (a, b \geq 0)$$

$$\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} \quad (a \geq 0, b > 0)$$

### 1.2.2 Rationalisation Techniques

**Denominator with a single surd**: $\frac{1}{\sqrt{a}}$

Multiply by $\frac{\sqrt{a}}{\sqrt{a}}$ to get $\frac{\sqrt{a}}{a}$.

**Denominator with binomial surds**: $\frac{1}{\sqrt{a} + \sqrt{b}}$

Use the difference of two squares formula $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$:

$$\frac{1}{\sqrt{a} + \sqrt{b}} = \frac{\sqrt{a} - \sqrt{b}}{a - b}$$

**⚠️ Sign Change in Denominator**: The rationalising factor for $\sqrt{a} - \sqrt{b}$ is $\sqrt{a} + \sqrt{b}$; the sign between the terms in the numerator and denominator is reversed.

---

## A1.3 Polynomial Operations [MM1.6]

### 1.3.1 Polynomial Expansion

**Binomial Theorem**: $(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r$

Combinations $\binom{n}{r} = \frac{n!}{r!(n-r)!}$, commonly $n = 2, 3, 4, 5$ in exams.

**Common Expansions** (memorise):

$$(a + b)^2 = a^2 + 2ab + b^2$$

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

$$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$

$$(a + b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$$

### 1.3.2 Factorisation Methods

**Taking out common factors**: $ax + ay = a(x + y)$

**Grouping method**: $ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$

**Cross-multiplication method** (Quadratics):

For $ax^2 + bx + c$, find numbers $m, n$ such that $mn = ac$ and $m + n = b$:

$$ax^2 + bx + c = (px + q)(rx + s)$$

Where $pr = a$, $qs = c$, $ps + qr = b$.

**Completing the square**:

$$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + \left(c - \frac{b^2}{4a}\right)$$

### 1.3.3 Factor Theorem and Remainder Theorem

**Factor Theorem**: If $f(x)$ is a polynomial, then

$$f(a) = 0 \iff (x - a) \text{ is a factor of } f(x)$$

**Remainder Theorem**: The remainder when $f(x)$ is divided by $(x - a)$ is equal to $f(a)$.

**Application Scenarios**:
- Known factor, find coefficients: Substitute the root of the factor to find the value.
- Known remainder, find parameters: Substitute the root of the divisor to set up an equation.
- Verify a factor: Simply check if $f(a) = 0$.

---

## A1.4 Foundation of Function Properties [MM1.7]

### 1.4.1 Basic Concepts of Functions

A function is a **mapping rule** from one set (the domain) to another set (the range).

**Many-to-one mapping**: Different inputs can have the same output (e.g., $y = x^2$, both $x = 2$ and $x = -2$ map to $y = 4$).

**One-to-one mapping**: Different inputs must have different outputs (e.g., $y = 2x$).

### 1.4.2 Special Function Properties

**Square root function**: $f(x) = \sqrt{x}$

- Domain: $x \geq 0$
- **Convention**: $\sqrt{x}$ denotes the **positive** square root (not $\pm$)
- Range: $y \geq 0$

**Absolute value function**: $f(x) = |x|$

- Definition: $|x| = \sqrt{x^2}$, which means $|x| = x$ (when $x \geq 0$), and $|x| = -x$ (when $x < 0$)
- Properties: $|a \cdot b| = |a| \cdot |b|$, $|a + b| \leq |a| + |b|$

---

## 🔍 Three Typical Question Types and Solving Strategies

### Question Type A: Solving Exponential Equations

**Characteristics**: The equation contains $a^x$ terms, requiring uniform bases or substitution.

**Strategies**:
1. Uniform bases: Convert all exponential terms to the same base.
2. Substitution: Let $y = a^x$ to convert to an algebraic equation.
3. Solve for $y$, then use logarithms to substitute back and find $x$.

**Example Structure**: $4^{2x} + 12 = 2^{2x+3}$

Substitute $y = 2^{2x}$, the equation becomes $y^2 - 8y + 12 = 0$.

---

### Question Type B: Polynomial Coefficient Matching

**Characteristics**: Some coefficients of an expansion are known; find unknown coefficients or parameters.

**Strategies**:
1. Write the general term formula $\binom{n}{r} a^{n-r} b^r$.
2. Compare the corresponding coefficients.
3. Solve the equation or system of equations.

**Example Structure**: The expansion of $(ax + b)^3$ is known, find $a, b, p$.

---

### Question Type C: Application of the Factor Theorem

**Characteristics**: A polynomial is known to have a certain factor, or the remainder of a division is known.

**Strategies**:
1. Directly substitute the root of the divisor.
2. Use $f(a) = 0$ (factor) or $f(a) = R$ (remainder) to set up an equation.
3. Solve for the parameters.

**⚠️ Key**: There is no need to expand the polynomial; substituting the root is the quickest way.

---

## ⚡ Summary of Quick Solving Techniques

| Scenario | Technique | Example |
|------|------|------|
| Exponential equations: uniform bases | $4^{2x} = (2^2)^{2x} = 2^{4x} = (2^{2x})^2$ | Avoid logarithmic calculations |
| Exponential equations: substitution | Let $y = a^x$, solve the quadratic equation and substitute back | $a^{2x} + ka^x + c = 0$ |
| Rationalise the denominator | $\frac{1}{\sqrt{a}-\sqrt{b}} \cdot \frac{\sqrt{a}+\sqrt{b}}{\sqrt{a}+\sqrt{b}}$ | Reverse the sign in the numerator |
| Quick lookup of binomial coefficients | $\binom{5}{2} = 10$, $\binom{6}{3} = 20$ | Verify by hand calculation |
| Factor theorem to find parameters | Substitute $f(a) = 0$ directly, no expansion needed | Given $(x+2)$ is a factor, find the constant term |
| Remainder theorem to find the remainder | $f(a)$ is exactly the remainder, one step solution | Remainder of $f(x)$ divided by $(x-3)$ |
| Comparing magnitudes of exponents | When $a^x > a^y$: if $a>1$ then $x>y$; if $0<a<1$ then $x<y$ | Relationship between the base and the inequality direction |

---

## ⚠️ Common Mistakes Warning

- ❌ $\sqrt{x^2} = x$ is **incorrect**, it should be $|x|$. When $x < 0$, $\sqrt{x^2} = -x$.
- ❌ $(a + b)^2 = a^2 + b^2$ is **incorrect**, it should be $a^2 + 2ab + b^2$. This is the most common expansion error.
- ❌ $\sqrt{a} + \sqrt{b} = \sqrt{a + b}$ is **incorrect**, surds cannot be directly added.
- ❌ When applying the factor theorem, **forgetting to verify the domain** after substituting the root (e.g., in logarithmic functions).
- ❌ After substituting in an exponential equation, $y = a^x > 0$, negative or zero roots must be excluded.
- ❌ The numerator sign does not follow the denominator change during rationalisation: $\frac{1}{\sqrt{a}-\sqrt{b}} \neq \frac{\sqrt{a}-\sqrt{b}}{a-b}$, the correct form is $\frac{\sqrt{a}+\sqrt{b}}{a-b}$.

---

## 📝 Selected Example Questions

### Example 1 (2016 P1 Q1 · Binomial Expansion and Coefficient Matching)

**Question**: It is given that the expansion of $(ax + b)^3$ is $8x^3 - px^2 + 18x - 3\sqrt{3}$, where $a$, $b$, and $p$ are real constants. Find the value of $p$.

【Question Analysis】
This question tests binomial expansion and coefficient matching. The core idea is to expand $(ax+b)^3$, compare the coefficients term by term with the given expression, solve for $a$ and $b$, and then find $p$.

【Solving Steps】
Step 1: Write out the binomial expansion

$$(ax+b)^3 = a^3x^3 + 3a^2b x^2 + 3ab^2 x + b^3$$

Step 2: Compare the coefficient of the $x^3$ term

$$a^3 = 8 \quad \Rightarrow \quad a = 2$$

Step 3: Compare the constant term

$$b^3 = -3\sqrt{3}$$

Notice that $(-\sqrt{3})^3 = -(\sqrt{3})^3 = -3\sqrt{3}$, so $b = -\sqrt{3}$.

Step 4: Verify with the $x$ term coefficient (can be skipped in exams)

$$3ab^2 = 3 \times 2 \times (-\sqrt{3})^2 = 3 \times 2 \times 3 = 18$$

This matches the $18x$ in the question, confirming $a$ and $b$ are correct.

Step 5: Find the coefficient of the $x^2$ term to determine $p$

$$3a^2b = 3 \times 2^2 \times (-\sqrt{3}) = -12\sqrt{3}$$

The $x^2$ term in the question is $-px^2$, therefore $-p = -12\sqrt{3}$, meaning

$$p = 12\sqrt{3}$$

【Quick Approach】
From $a^3=8$ and $b^3=-3\sqrt{3}$, directly obtain $a=2$ and $b=-\sqrt{3}$. Substitute them into $3a^2b = -p$ to get $p=12\sqrt{3}$, without verifying the intermediate coefficients.

【Correct Answer】H

【Knowledge Point】Algebra | **Syllabus**: MM1.6 (Polynomial expansion)

---

### Example 2 (2016 P1 Q11 · Solving Exponential Equations)

**Question**: The equation $4^{2x} + 12 = 2^{2x+3}$ has two real roots $p$ and $q$ ($p > q$). Find the value of $p - q$.

【Question Analysis】
This question tests the solving of exponential equations and logarithmic calculations. By substituting, convert the exponential equation into a quadratic equation, then use the logarithm change of base formula to express the difference between the two real roots as a logarithm base 10.

【Solving Steps】
Step 1: Make bases uniform and substitute

Notice that $4^{2x} = (2^2)^{2x} = 2^{4x} = (2^{2x})^2$, and $2^{2x+3} = 2^{2x} \cdot 2^3 = 8 \cdot 2^{2x}$.

Let $y = 2^{2x}$ (clearly $y > 0$), the original equation becomes:

$$y^2 + 12 = 8y$$
$$y^2 - 8y + 12 = 0$$

Step 2: Solve the quadratic equation

Factorise:

$$(y - 6)(y - 2) = 0$$

This gives $y = 6$ or $y = 2$.

Step 3: Substitute back to find $x$

When $2^{2x} = 6$: $2x = \log_2 6$, which means $x = \frac{1}{2}\log_2 6$.

When $2^{2x} = 2$: $2x = 1$, which means $x = \frac{1}{2}$.

Since $\frac{1}{2}\log_2 6 = \frac{1}{2}(1 + \log_2 3) > \frac{1}{2}$, we have:

$$p = \frac{1}{2}\log_2 6, \quad q = \frac{1}{2}$$

Step 4: Calculate $p - q$ and match the options

$$p - q = \frac{1}{2}\log_2 6 - \frac{1}{2} = \frac{1}{2}(\log_2 6 - \log_2 2) = \frac{1}{2}\log_2 3$$

Use the change of base formula $\log_2 3 = \frac{\log_{10} 3}{\log_{10} 2}$:

$$p - q = \frac{1}{2} \cdot \frac{\log_{10} 3}{\log_{10} 2} = \frac{\log_{10} 3}{2\log_{10} 2} = \frac{\log_{10} 3}{\log_{10} 4}$$

【Quick Approach】
After substitution, the two roots of the quadratic equation are 6 and 2, corresponding to a difference in $x$ values of $\frac{1}{2}\log_2 3$. The options are all given in terms of $\log_{10}$, so use the change of base formula $\log_2 3 = \frac{\log_{10} 3}{\log_{10} 2}$ and $2\log_{10} 2 = \log_{10} 4$ to match them.

【Correct Answer】E

【Knowledge Point】Algebra | **Syllabus**: MM1.1 (Index laws), MM5.3 (Exponential equations)

---

### Example 3 (2017 P1 Q4 · Polynomial Remainder Theorem)

**Question**: When $(3x^2 + 8x - 3)$ is multiplied by $(px - 1)$, the remainder when the resulting product is divided by $(x + 1)$ is 24. Find the value of $p$.

【Question Analysis】
This question tests the polynomial remainder theorem. It is known that the remainder when the polynomial $(3x^2+8x-3)(px-1)$ is divided by $(x+1)$ is $24$. Apply the remainder theorem directly by substituting to find $p$.

【Solving Steps】
Step 1: Let $f(x) = (3x^2+8x-3)(px-1)$.

Step 2: According to the remainder theorem, the remainder when $f(x)$ is divided by $(x+1)$ is equal to $f(-1)$. Calculate:

$$f(-1) = (3(-1)^2 + 8(-1) - 3)(p(-1) - 1) = (3 - 8 - 3)(-p - 1) = (-8)(-p-1) = 8(p+1)$$

Step 3: From the question, $f(-1) = 24$, giving:

$$8(p+1) = 24 \quad \Rightarrow \quad p+1 = 3 \quad \Rightarrow \quad p = 2$$

Step 4: Verification. When $p=2$, $f(-1) = (-8)(-3) = 24$, which satisfies the condition.

【Quick Approach】
Directly apply the remainder theorem, set $x=-1$ and substitute it into the product expression, without expanding the polynomial. Expanding will only increase the calculation effort and the probability of errors.

【Correct Answer】B

【Knowledge Point】Algebra | **Syllabus**: MM1.6 (Polynomial operations, Remainder theorem)

---

## 🏋️ Practice Exercises (15 Minutes Time Limit)

| # | Question ID | Knowledge Point | Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P1 Q2 | Factor theorem and factorisation | MM1.6 | ⭐⭐⭐ |
| 2 | 2016 P1 Q16 | Solving systems of logarithmic equations | MM5.2 | ⭐⭐⭐ |
| 3 | 2016 P1 Q19 | Calculating polynomial coefficients | MM1.6, MM2.4 | ⭐⭐⭐⭐ |
| 4 | 2017 P1 Q5 | Solving inequalities and interval construction | MM1.5 | ⭐⭐⭐ |
| 5 | 2017 P1 Q13 | Conditions on binomial coefficients | MM2.4 | ⭐⭐⭐ |
| 6 | 2017 P1 Q14 | Solving systems of exponential equations | MM5.3 | ⭐⭐⭐⭐ |
| 7 | 2017 P1 Q19 | Transforming quadratic inequalities | MM1.5 | ⭐⭐⭐⭐ |
| 8 | 2017 P2 Q8 | Comparing numerical values | MM1.1, MM1.2 | ⭐⭐⭐ |

---

*Full solutions can be found in the question bank database, each question includes 【Solving Steps】 and 【Quick Approach】.*

## 📌 Module Summary

### Core Formula Checklist

**Index Laws**:
- $a^m \cdot a^n = a^{m+n}$
- $a^{-n} = \frac{1}{a^n}$
- $a^{1/n} = \sqrt[n]{a}$

**Binomial Theorem** (Commonly Used):
- $\binom{n}{r} = \frac{n!}{r!(n-r)!}$
- $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$
- $(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$

**Factor Theorem and Remainder Theorem**:
- $f(a) = 0 \iff (x-a)$ is a factor of $f(x)$
- Remainder when $f(x)$ is divided by $(x-a)$ = $f(a)$

### Preparation Advice

1. **Index Operations**: Memorise the change of base formula and master the technique of uniform bases.
2. **Surd Operations**: Rationalisation is frequently tested, pay attention to the sign change in the numerator.
3. **Polynomial Operations**: The factor theorem and remainder theorem are quick solving tools, substituting the root gets it done in one step.
4. **Function Properties**: $\sqrt{x}$ denotes the positive square root, $|x|$ is defined piecewise. Be wary of these common pitfalls.

---

## 🎯 Associated Practice

Finished this chapter? [→ Go to Algebra related practice questions](/practice/tmua/?topic=Algebra)

---

*These notes are generated based on the official TMUA past paper database. Source of questions: 2016-2022 TMUA Paper 1 & Paper 2.*
