---
title: "A3 Exponents and Logarithms"
---

## Module A3: Exponents and Logarithms

> **Corresponding Syllabus Section 1**: MM5.1, MM5.2, MM5.3
> **Corresponding Paper**: P1 Main Focus (Approx. 15/320 questions), P2 Involves (Logical reasoning questions on exponents and logarithms)
> **Recommended Time**: 1 lesson | **Target Number of Questions**: 10-15 questions

---

## 📋 Module Overview

| Section | Content | Syllabus | Past Paper Frequency | Lessons |
|------|------|---------|-------------|------|
| A3.1 | Exponential Functions and Graphs | MM5.1 | 8 times in 8 years | 0.25 |
| A3.2 | Laws of Logarithms | MM5.2 | 12 times in 8 years | 0.25 |
| A3.3 | Solving Exponential and Logarithmic Equations | MM5.3 | 15 times in 8 years | 0.5 |

---

## A3.1 Exponential Functions and Graphs [MM5.1]

### 1.1 Definition of Exponential Functions

An exponential function takes the form $y = a^x$, where $a > 0$ and $a \neq 1$.

**⚠️ Why do we require $a \neq 1$?** When $a = 1$, $y = 1^x = 1$ is a constant function and does not exhibit characteristics of exponential growth or decay.

### 1.2 Graphical Characteristics of Exponential Functions

| Base $a$ | Function Property | Graphical Characteristics | Key Points |
|---------|---------|---------|--------|
| $a > 1$ | Strictly increasing | From bottom-left to top-right, passing through $(0,1)$ | As $x \to +\infty$, $y \to +\infty$ |
| $0 < a < 1$ | Strictly decreasing | From top-left to bottom-right, passing through $(0,1)$ | As $x \to +\infty$, $y \to 0$ |

**Common Characteristics**:
- Always passes through the point $(0, 1)$ (since $a^0 = 1$)
- Always lies above the $x$-axis ($y > 0$)
- No roots (x-intercepts) and no symmetry

### 1.3 Review of the Laws of Indices [MM1.1]

$$a^m \cdot a^n = a^{m+n}$$

$$\frac{a^m}{a^n} = a^{m-n}$$

$$(a^m)^n = a^{mn}$$

$$a^{-n} = \frac{1}{a^n}$$

$$a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$$

**⚡ Common Special Case**: $a^{x} \cdot a^{-x} = 1$, which means $a^{-x} = \frac{1}{a^x}$.

---

## A3.2 Laws of Logarithms [MM5.2]

### 2.1 Definition of Logarithms

If $a^b = c$ (where $a > 0$, $a \neq 1$, $c > 0$), then $b = \log_a c$.

**Fundamental Understanding**: A logarithm is the inverse operation of exponentiation. $\log_a c$ answers the question: "To what power must $a$ be raised, to produce $c$?"

### 2.2 Basic Properties of Logarithms

| Property | Formula | Derivation |
|------|------|------|
| Logarithmic Identity | $\log_a a = 1$ | $a^1 = a$ |
| Logarithm of One | $\log_a 1 = 0$ | $a^0 = 1$ |
| Exponential Inversion | $a^{\log_a x} = x$ | Derived directly from the definition |

### 2.3 Laws of Logarithms

$$\log_a x + \log_a y = \log_a(xy)$$

$$\log_a x - \log_a y = \log_a\left(\frac{x}{y}\right)$$

$$k \log_a x = \log_a(x^k)$$

**Special Cases**:

$$\log_a\left(\frac{1}{x}\right) = -\log_a x$$

$$\log_a \sqrt{x} = \frac{1}{2}\log_a x$$

**⚠️ Common Mistakes**:
- $\log_a(x + y) \neq \log_a x + \log_a y$
- $\log_a(xy) \neq (\log_a x)(\log_a y)$
- Logarithms only simplify multiplication, division, and exponentiation; they are not distributive over addition or subtraction.

### 2.4 Change of Base Formula (Not required for the exam, but helpful for understanding)

$$\log_a b = \frac{\log_c b}{\log_c a}$$

**⚡ Common Form**: $\log_2 3 = \frac{\log_{10} 3}{\log_{10} 2}$.

---

## A3.3 Solving Exponential and Logarithmic Equations [MM5.3]

### 3.1 Strategies for Solving Exponential Equations

**Core Idea**: Use substitution to convert the exponential equation into a familiar algebraic equation.

**Typical Patterns**:
- $a^{2x} + b a^x + c = 0$ → Let $u = a^x$, then convert it to $u^2 + bu + c = 0$
- $a^x = b$ → $x = \log_a b$
- $a^x = a^y$ → $x = y$ (Equating the exponents when the bases are the same)

### 3.2 Strategies for Solving Logarithmic Equations

**Core Idea**: Use the laws of logarithms to simplify the expression, then apply exponentiation to solve.

**Typical Steps**:
1. Use the laws of logarithms to combine/expand logarithmic terms.
2. Convert it to the form $\log_a A = \log_a B$.
3. Remove the logarithms to get $A = B$.
4. **Check the Domain**: Logarithms require their arguments to be strictly positive ($> 0$).

**⚠️ Common Pitfall**: After removing the logarithms, you must verify that the argument is positive to eliminate any extraneous roots.

### 3.3 Traps in Logarithmic Inequalities

When the base of the logarithm is $a > 1$, the function is strictly increasing, so the direction of the inequality remains unchanged:
$$\log_a x > \log_a y \iff x > y$$

When the base of the logarithm is $0 < a < 1$, the function is strictly decreasing, so the **inequality sign must be reversed**:
$$\log_a x > \log_a y \iff x < y$$

---

## ⚡ Quick Solving Techniques Summary

| Scenario | Technique |
|------|------|
| Exponential equation $a^{2x} + ba^x + c = 0$ | Let $u = a^x$ to convert it into a quadratic equation |
| Comparing the sizes of $a^x$ and $b^x$ | Check whether $x > 0$ or $x < 0$ and use monotonicity |
| Combining logarithms | $\log(xy) = \log x + \log y$, and vice versa |
| Solving $\log_a x = k$ | Write $x = a^k$ directly in one step |
| Determining the graph of $f(x) = a^{kx}$ | The effective base is $a^k$; compare it with $b^x$ |
| Logarithmic inequalities with a base less than 1 | The inequality sign must be reversed |

## ⚠️ Common Pitfalls

- ❌ $\log(x+y) \neq \log x + \log y$ — Logarithms cannot be split over addition.
- ❌ $\log(xy) \neq (\log x)(\log y)$ — The logarithm of a product is not the product of the logarithms.
- ❌ After substituting in an exponential equation, $u = a^x$ must be $> 0$; negative roots must be excluded.
- ❌ In logarithmic inequalities with a base $< 1$, the inequality sign must be reversed.
- ❌ $a^{x+y} = a^x \cdot a^y$, not $(a^x)^y$ (the latter equals $a^{xy}$).

---

## 📝 Selected Worked Examples

### Example 1 (2016 P1 Q11 · Solving Exponential Equations)

**Question**: The equation $4^{2x} + 12 = 2^{2x+3}$ has two real roots, $p$ and $q$ (where $p > q$). Find the value of $p - q$.

【Question Analysis】
This question tests solving exponential equations via substitution. The key is to recognise the base relationship $4 = 2^2$, convert the equation into exponential forms with the same base, and then use substitution to convert it into a quadratic equation.

【Solving Steps】
Step 1: Unify the bases

$$4^{2x} = (2^2)^{2x} = 2^{4x} = (2^{2x})^2$$

$$2^{2x+3} = 2^{2x} \cdot 2^3 = 8 \cdot 2^{2x}$$

Step 2: Let $u = 2^{2x}$ ($u > 0$). The equation becomes:

$$u^2 + 12 = 8u$$

$$u^2 - 8u + 12 = 0$$

Step 3: Solve the quadratic equation

$$(u-6)(u-2) = 0$$

This yields $u = 6$ or $u = 2$ (both are positive, so they are valid).

Step 4: Substitute back to find $x$

When $u = 6$: $2^{2x} = 6$, which means $2x = \log_2 6$, thus $x = \frac{1}{2}\log_2 6$.

When $u = 2$: $2^{2x} = 2$, which means $2x = 1$, thus $x = \frac{1}{2}$.

Step 5: Calculate $p - q$

$$p - q = \frac{1}{2}\log_2 6 - \frac{1}{2} = \frac{1}{2}(\log_2 6 - \log_2 2) = \frac{1}{2}\log_2 3$$

Using the change of base formula $\log_2 3 = \frac{\log_{10} 3}{\log_{10} 2}$ and $2\log_{10} 2 = \log_{10} 4$:

$$p - q = \frac{\log_{10} 3}{\log_{10} 4}$$

【Shortcut Method】
After substituting $u = 2^{2x}$, the roots of the quadratic equation are 6 and 2. The difference between the two values of $x$ is $\frac{1}{2}\log_2\frac{6}{2} = \frac{1}{2}\log_2 3$. Since the options are all given in terms of $\log_{10}$, applying the change of base formula matches the correct answer in one step.

【Correct Answer】E ($\frac{\log_{10} 3}{\log_{10} 4}$)

【Topic】Algebra (Exponential Equations) | **Syllabus**: MM5.3

---

### Example 2 (2017 P1 Q14 · Simultaneous Exponential Equations)

**Question**: Solve the simultaneous equations $\begin{cases} 2^x + 3 \times 2^y = 3 \\ 2^{2x} - 9 \times 2^{2y} = 6 \end{cases}$. If the solution is given by $x = p$, $y = q$, find the value of $p - q$.

【Question Analysis】
This question tests solving simultaneous equations with exponential variables. The key is to recognise that the second equation can be simplified using the difference of two squares, avoiding complex substitution and elimination.

【Solving Steps】
Step 1: Let $u = 2^x$, $v = 2^y$ ($u > 0$, $v > 0$).

The equations become:
$$u + 3v = 3$$
$$u^2 - 9v^2 = 6$$

Step 2: Apply the difference of two squares to the second equation

$$u^2 - 9v^2 = (u + 3v)(u - 3v) = 6$$

Substitute the first equation $u + 3v = 3$ into this:

$$3(u - 3v) = 6 \quad \Rightarrow \quad u - 3v = 2$$

Step 3: Solve the simplified simultaneous equations

$$\begin{cases} u + 3v = 3 \\ u - 3v = 2 \end{cases}$$

Adding the two equations yields $2u = 5$, hence $u = \frac{5}{2}$.

Subtracting the two equations yields $6v = 1$, hence $v = \frac{1}{6}$.

Step 4: Substitute back to find $x$ and $y$

$$x = \log_2 u = \log_2\frac{5}{2}$$

$$y = \log_2 v = \log_2\frac{1}{6}$$

Step 5: Calculate $p - q$

$$p - q = \log_2\frac{5}{2} - \log_2\frac{1}{6} = \log_2\left(\frac{5}{2} \div \frac{1}{6}\right) = \log_2 15$$

【Shortcut Method】
The crucial step is recognising $u^2 - 9v^2 = (u+3v)(u-3v)$, which allows you to use the first equation to obtain $u-3v$ directly, removing the need for expanding and substituting. Solving for $u$ and $v$ then takes two easy steps, and the final result can be combined using the laws of logarithms.

【Correct Answer】F ($\log_2 15$)

【Topic】Algebra (Simultaneous Exponential Equations) | **Syllabus**: MM5.3

---

### Example 3 (2017 P1 Q18 · Transformations of Logarithmic Graphs)

**Question**: Translating the graph of $y = \log_{10} x$ upwards by 2 units is equivalent to stretching it parallel to the $x$-axis by a scale factor $k$. Find the value of $k$.

【Question Analysis】
This question tests a special property of logarithmic functions: a vertical translation is equivalent to a horizontal stretch. This is because $\log x + c = \log(10^c \cdot x)$.

【Solving Steps】
Step 1: Write down the function after translation

Upward translation by 2 units: $y = \log_{10} x + 2$

Step 2: Simplify using the laws of logarithms

$$y = \log_{10} x + \log_{10} 100 = \log_{10}(100x)$$

Step 3: Compare with the stretch transformation

After a stretch by a scale factor $k$ parallel to the $x$-axis, the function becomes $y = f\left(\frac{x}{k}\right)$:

$$y = \log_{10}\left(\frac{x}{k}\right) = \log_{10} x - \log_{10} k$$

Step 4: Equate the two expressions

$$\log_{10}(100x) = \log_{10} x - \log_{10} k$$

Comparing the constant terms: $-\log_{10} k = 2$, which means $\log_{10} k = -2$.

Therefore, $k = 10^{-2} = 0.01$.

【Shortcut Method】
Verify using a specific point: The original function passes through $(1, 0)$, and after translation, this becomes $(1, 2)$. Concurrently, the point $(0.01, -2)$ on the original graph translates to $(0.01, 0)$. A stretch parallel to the $x$-axis changes the $x$-intercept from 1 to $k$, hence $k = 0.01$.

【Correct Answer】A ($0.01$)

【Topic】Functions (Graphs of Logarithmic Functions) | **Syllabus**: MM5.1, MM8.2

---

## 🏋️ End-of-Chapter Exercises (Time limit: 15 minutes)

| # | Question ID | Topic | Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P1 Q16 | Simultaneous Logarithmic Equations | MM5.2, MM5.3 | ⭐⭐⭐ |
| 2 | 2017 P2 Q7 | Comparing Exponential Graphs | MM5.1 | ⭐⭐⭐ |
| 3 | 2018 P1 Q14 | Logarithms and Straight Lines | MM5.2 | ⭐⭐ |
| 4 | 2018 P1 Q15 | Substitution in Exponential Equations | MM5.3 | ⭐⭐⭐ |
| 5 | 2019 P1 Q11 | Simultaneous Logarithmic Equations | MM5.2, MM5.3 | ⭐⭐⭐⭐ |
| 6 | 2019 P1 Q15 | Exponential Equations (Nested) | MM5.3 | ⭐⭐⭐⭐ |
| 7 | 2020 P1 Q15 | Higher-Degree Logarithmic Equations | MM5.3 | ⭐⭐⭐⭐ |
| 8 | 2021 P1 Q4 | Minimum Value of Exponential Functions | MM5.1 | ⭐⭐⭐ |
| 9 | 2021 P1 Q10 | Logarithmic Integrals | MM5.2, MM7.5 | ⭐⭐⭐ |
| 10 | 2021 P2 Q17 | Comparing Nested Logarithms | MM5.2 | ⭐⭐⭐⭐⭐ |

---

*For complete step-by-step solutions, please refer to the question bank database. Each question includes 【Solving Steps】 and 【Shortcut Method】.*

---

## 🎯 Complementary Practice

Finished this chapter? [→ Go to practice Algebra related questions](/practice/tmua/?topic=Algebra)

---

**Creation Date**: 2026-04-29  
**Data Source**: TMUA Question Bank Database (2016-2022)  
**Target Audience**: Students preparing for the TMUA
