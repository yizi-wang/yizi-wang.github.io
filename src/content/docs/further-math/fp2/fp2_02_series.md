---
title: "FP2 Chapter 2: Series — Method of Differences"
---

# FP2 Lecture Notes: Method of Differences

The method of differences is a powerful technique for finding sums of sequences, particularly those involving rational expressions. We begin with a fascinating problem that motivated the development of this method: proving that the sum of reciprocal squares converges.

:::note[Motivating Problem: Basel Problem]
Consider the infinite series:

$$\sum_{n=1}^{\infty} \frac{1}{n^2}$$

How can we prove this sum is finite? And what is its value?

---

This famous problem, known as the **Basel Problem**, was solved by Euler in 1735. He proved that:

$$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

While Euler's proof used deep analysis, we can prove the sum is finite using **the method of differences**.

To show that the sum is finite, we use the comparison test. Notice that:

$$\frac{1}{n^2} < \frac{1}{n(n-1)} \quad \text{for } n \geq 2$$

This implies:

$$\sum_{n=2}^{\infty} \frac{1}{n^2} < \sum_{n=2}^{\infty} \frac{1}{n(n-1)}$$

The series on the right can be simplified using partial fractions:

$$\frac{1}{n(n-1)} = \frac{1}{n-1} - \frac{1}{n}$$

This results in a telescoping series:

$$\sum_{n=2}^{\infty} \left( \frac{1}{n-1} - \frac{1}{n} \right)$$

The terms cancel, leading to a finite limit. Thus, since $\sum_{n=2}^{\infty} \frac{1}{n(n-1)}$ converges, we conclude that $\sum_{n=1}^{\infty} \frac{1}{n^2}$ is also finite.
:::

## Module 1: Basic Method of Differences

### Definition and Key Concept

**Definition — Method of Differences:** The method of differences is used to find sums of sequences by:

1. First expressing the term as a difference of two or more terms
2. Then using cancellation to find the sum

### Key Steps for Partial Fractions and Method of Differences

:::note[Standard Approach]
**1. For expressions like** $\dfrac{cn+d}{(n+a)(n+b)}$:

- Split into partial fractions: $\dfrac{A}{n+a} + \dfrac{B}{n+b}$
- Find $A$ and $B$ by multiplying both sides by $(n+a)(n+b)$

**2. For sums using method of differences:**

- Identify the non-cancelling terms at start and end
- Write out first 3 terms and last 2 terms to spot the pattern
- Put over a common denominator to simplify
:::

### Example 1

Express $\dfrac{1}{(r+3)(r+5)}$ in partial fractions. Hence find $\displaystyle\sum_{r=1}^n \frac{1}{(r+3)(r+5)}$ using the method of differences.

**Solution:**

1. Let $\dfrac{1}{(r+3)(r+5)} = \dfrac{A}{r+3} + \dfrac{B}{r+5}$

2. Multiply both sides by $(r+3)(r+5)$:

$$1 = A(r+5) + B(r+3)$$

3. $A = \_\_\_\_$ and $B = \_\_\_\_$

4. Therefore:

$$\frac{1}{(r+3)(r+5)} = \_\_\_\_$$

5. Write out first 3 terms and last 2 terms:

$$\_\_\_\_ + \_\_\_\_ + \_\_\_\_ + \cdots + \_\_\_\_ + \_\_\_\_$$

6. Non-cancelling terms are:

$$\_\_\_\_ + \_\_\_\_ - \_\_\_\_ - \_\_\_\_$$

7. Put over common denominator and simplify:

$$= \_\_\_\_$$

### In-class Exercise

:::note[Exercise]
Express $\dfrac{2}{(r-1)(r+1)}$ in partial fractions and hence find:

$$\sum_{r=2}^n \frac{1}{(r-1)(r+1)}$$
:::

## Module 2: Three-Term Partial Fractions

### Three-Term Partial Fractions Decomposition

### Example 2 — Three-Term Partial Fractions

Express $\dfrac{1}{(2r-1)(2r+1)(2r+3)}$ in partial fractions. Hence find $\displaystyle\sum_{r=1}^n \frac{1}{(2r-1)(2r+1)(2r+3)}$ using the method of differences.

**Solution:**

1. Let $\dfrac{1}{(2r-1)(2r+1)(2r+3)} = \dfrac{A}{2r-1} + \dfrac{B}{2r+1} + \dfrac{C}{2r+3}$

2. Multiply throughout by $(2r-1)(2r+1)(2r+3)$:

$$1 = A(2r+1)(2r+3) + B(2r-1)(2r+3) + C(2r-1)(2r+1)$$

3. Put $r = \_\_\_\_$, $r = \_\_\_\_$, $r = \_\_\_\_$ to find $A$, $B$, $C$:

$$A = \_\_\_\_, \quad B = \_\_\_\_, \quad C = \_\_\_\_$$

4. Therefore:

$$\frac{1}{(2r-1)(2r+1)(2r+3)} = \_\_\_\_$$

5. Write out first three terms and the last two terms:

$$\_\_\_\_ + \_\_\_\_ + \_\_\_\_ + \cdots + \_\_\_\_ + \_\_\_\_$$

6. Identify non-cancelling terms:

$$\_\_\_\_ - \_\_\_\_ + \_\_\_\_ - \_\_\_\_$$

7. Put over common denominator:

$$= \_\_\_\_$$

:::tip[Key Points for Three-Term Problems]
**1. When finding partial fractions:**
- Write $\dfrac{A}{ax+b} + \dfrac{B}{cx+d} + \dfrac{C}{ex+f}$
- Use strategic values of $x$ to find coefficients
- Check your work by expanding back

**2. When using method of differences:**
- Write out enough terms to establish the pattern
- Pay attention to coefficients when identifying non-cancelling terms
- Combine terms carefully over a common denominator
:::

### In-class Exercise

:::note[Exercise]
Express $\dfrac{r+4}{r(r+1)(r+2)}$ in partial fractions and hence find:

$$\sum_{r=1}^n \frac{r+4}{r(r+1)(r+2)}$$
:::

## Module 3: Advanced Applications

### Polynomial Differences

:::note[Guided Exercise 1]
Use the binomial expansion to show that:

$$n^5 - (n-1)^5 = 5n^4 - 10n^3 + 10n^2 - 5n + 1$$

Hence, show that:

$$\sum_{r=1}^n r^4 = \frac{1}{30}n(n+1)(2n+1)(3n^2 + 3n - 1)$$

**Guidance:**

1. Rearrange to express $r^4$ in terms of the other expressions.
2. Write out the sum $\sum_{r=1}^n r^4$ using this expression.
3. Use these known formulas:
   - $\displaystyle\sum_{r=1}^n r = \frac{n(n+1)}{2}$
   - $\displaystyle\sum_{r=1}^n r^2 = \frac{n(n+1)(2n+1)}{6}$
   - $\displaystyle\sum_{r=1}^n r^3 = \left(\frac{n(n+1)}{2}\right)^2$
4. Substitute and simplify to get the required form.
:::

### In-class Exercise

:::note[Exercise]
Use the method of differences to prove that:

$$\sum_{r=1}^n r^3 = \left(\frac{n(n+1)}{2}\right)^2$$

**Hint:** Consider the difference $(r+1)^4 - r^4$.
:::

### Sums with Square Roots

### Example 3 — Sum with Square Root

Show that for $r \geq 1$:

$$\frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = A\left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

where $A$ is a constant to be determined.

**Solution:**

1. Let the left side be $L$ and the right side be $R$:

$$L = \frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}}, \quad R = A\left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

2. To find $A$, multiply $L$ by $\dfrac{\sqrt{r(r+1)} - \sqrt{r(r-1)}}{\sqrt{r(r+1)} - \sqrt{r(r-1)}}$ to rationalise the denominator:

$$L = \frac{r\left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)}{\_\_\_\_}$$

3. Therefore:

$$L = \_\_\_\_ \left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

4. Comparing with $R$, we find $A = \_\_\_\_$.

### Example 4 — Method of Differences with Square Roots

Using the previous result, find:

$$\sum_{r=1}^n \frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}}$$

**Solution:**

1. From the previous example:

$$\frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \_\_\_\_ \left(\sqrt{r(r+1)} - \sqrt{r(r-1)}\right)$$

2. Write out first three terms and last two terms, then identify the telescoping pattern.

3. Therefore:

$$\sum_{r=1}^n \frac{r}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \_\_\_\_$$

### Example 5 — Extension

Find the constant $k$ such that:

$$\sum_{r=1}^n \frac{kr}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \sqrt{\sum_{r=1}^n r}$$

**Solution:**

1. From the previous example:

$$\sum_{r=1}^n \frac{kr}{\sqrt{r(r+1)} + \sqrt{r(r-1)}} = \_\_\_\_$$

2. The right side is:

$$\sqrt{\sum_{r=1}^n r} = \_\_\_\_$$

3. Equating these and solving: $k = \_\_\_\_$.

### Trigonometric Forms*

### Example 6 — Trigonometric Identity

Using the formula

$$\cos(A+B) = \cos A \cos B - \sin A \sin B$$

show that:

$$2\sin\left(\frac{1}{2}\right)\sin(n) = \cos\left(n - \frac{1}{2}\right) - \cos\left(n + \frac{1}{2}\right)$$

**Solution:**

1. Use the given formula:

$$\cos(A-B) - \cos(A+B) = \cos A \cos B + \sin A \sin B - (\cos A \cos B - \sin A \sin B) = 2 \sin A \sin B$$

2. Let $A = n$ and $B = \dfrac{1}{2}$:

$$2\sin\left(\frac{1}{2}\right)\sin(n) = \cos\left(n - \frac{1}{2}\right) - \cos\left(n + \frac{1}{2}\right)$$

### Example 7 — Method of Differences with Trigonometric Terms

Using the previous result, show that:

$$\sum_{n=1}^N \sin(n) = \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{1}{2}\right) - \cos\left(\frac{2N+1}{2}\right)\right]$$

**Solution:**

1. From the previous example:

$$\sin(n) = \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(n - \frac{1}{2}\right) - \cos\left(n + \frac{1}{2}\right)\right]$$

2. Write out first few terms:

$$\frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{1}{2}\right) - \cos\left(\frac{3}{2}\right)\right] + \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{3}{2}\right) - \cos\left(\frac{5}{2}\right)\right] + \cdots$$

$$+ \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{2N-1}{2}\right) - \cos\left(\frac{2N+1}{2}\right)\right]$$

3. Notice the telescoping pattern:
   - First term contains $\cos\left(\frac{1}{2}\right)$
   - Last term contains $-\cos\left(\frac{2N+1}{2}\right)$
   - All other terms cancel in pairs

4. Therefore:

$$\sum_{n=1}^N \sin(n) = \frac{1}{2}\csc\left(\frac{1}{2}\right)\left[\cos\left(\frac{1}{2}\right) - \cos\left(\frac{2N+1}{2}\right)\right]$$

## Summary

:::note[Key Points]
**1. Basic Method:**
- Look for terms that telescope
- Use partial fractions to split complex fractions
- The sum equals first term minus last term

**2. Advanced Applications:**
- Three-term partial fractions often require two steps
- Trigonometric terms can be treated as constants
- Square roots may require algebraic manipulation
:::

:::caution[Common Pitfalls]
- Don't forget to check if terms actually telescope
- Be careful with signs when splitting fractions
- Watch for opportunities to factor before using partial fractions
- Remember that the method works only if you can find a difference form
:::

## Homework

### E.O.C.1

1. Express

$$\frac{3}{(3r-1)(3r+2)}$$

in partial fractions.

2. Using your answer to part 1 and the method of differences, show that

$$\sum_{r=1}^n \frac{3}{(3r-1)(3r+2)} = \frac{3n}{2(3n+2)}$$

3. Evaluate

$$\sum_{r=100}^{1000} \frac{3}{(3r-1)(3r+2)}$$

giving your answer to 3 significant figures.

### E.O.C.2

Given that

$$(2r+1)^3 = Ar^3 + Br^2 + Cr + 1$$

where $A$, $B$ and $C$ are constants to be determined:

1. Find $A$, $B$ and $C$.

2. Show that

$$(2r+1)^3 - (2r-1)^3 = 24r^2 + 2$$

3. Using the result in part 2 and the method of differences, show that

$$\sum_{r=1}^n r^2 = \frac{1}{6}n(n+1)(2n+1)$$

### Challenge Question (Optional): Method of Differences with Inverse Trigonometric Functions

:::note[Challenge Problem]
Given that $A > B > 0$, and letting $x = \arctan A$ and $y = \arctan B$:

**(a)** Prove that:

$$\arctan A - \arctan B = \arctan\left(\frac{A-B}{1+AB}\right)$$

**(b)** Show that when $A = r + 2$ and $B = r$:

$$\frac{A-B}{1+AB} = \frac{2}{(1+r)^2}$$

**(c)** Hence, using the method of differences, show that:

$$\sum_{r=1}^n \arctan\left(\frac{2}{(1+r)^2}\right) = \arctan(n+p) + \arctan(n+q) - \arctan 2 - \frac{\pi}{4}$$

where $p$ and $q$ are integers to be determined.

**(d)** Hence, making your reasoning clear, determine:

$$\sum_{r=1}^{\infty} \arctan\left(\frac{2}{(1+r)^2}\right)$$

giving the answer in the form $k\pi - \arctan 2$, where $k$ is a constant.
:::
