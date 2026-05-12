---
title: "Lecture 3: Greek Number Theory and Arithmetic"
---

## Lecture 3: Greek Number Theory and Arithmetic

## Review and Introduction

Welcome, everyone. In the previous two lectures, we delved into the brilliant achievements of Greek geometry. Today, we turn to another great source of ancient Greek mathematics: **Number Theory**.

Number theory is the study of the properties of integers. Its origins can also be traced back to the Pythagorean school, but its developmental trajectory and character are distinctly different from geometry. If geometry is a well-structured, magnificent edifice, then number theory is more like a vast forest full of mysterious treasures and unsolved riddles.

## Early Number Theory Concepts: A "Zoo" of Numbers

**Polygonal Numbers:** By arranging dots into triangles, squares, etc., they defined triangular numbers (1, 3, 6, 10, ...), square numbers (1, 4, 9, 16, ...), and so on.

**Prime Numbers:** The ancient Greeks already recognized primes as the fundamental "atoms" composing all integers. In his *Elements*, Euclid gave an elegant proof that **there are infinitely many primes**.

**Perfect Numbers:** A number is called perfect if it is equal to the sum of its proper divisors (e.g., $6 = 1+2+3$). Euclid discovered that if $2^n - 1$ is a prime number, then $2^{n-1}(2^n - 1)$ is a perfect number. Whether any odd perfect numbers exist remains one of the oldest unsolved problems in mathematics.

## The Euclidean Algorithm

This is a powerful algorithm for finding the greatest common divisor (GCD) of two positive integers.

**Profound Consequences:**

- **Linear Representation of GCD:** The $\text{gcd}(a, b)$ can be expressed as an integer linear combination of $a$ and $b$: $ma + nb = \text{gcd}(a, b)$.
- **Prime Divisor Property:** If a prime $p$ divides the product $ab$, then $p$ must divide $a$ or $p$ must divide $b$.
- **Fundamental Theorem of Arithmetic:** Every integer greater than 1 can be uniquely represented as a product of prime numbers.

## Diophantine Equations

**Pell's Equation:** An equation of the form $x^2 - Ny^2 = 1$. For $x^2 - 2y^2 = 1$, its solutions $(x, y)$ provide excellent rational approximations for $\sqrt{2}$ ($x/y \approx \sqrt{2}$). The solutions to this type of equation are closely related to the continued fraction expansion of $\sqrt{N}$.

**Chord and Tangent Methods:** A method for finding new rational points on a curve starting from known rational points. If one or two rational points are known, the new intersection points of tangent or secant lines through them with the curve will also be rational points.

## Two Major Branches: Analytic and Algebraic

### Analytic Number Theory: Using Analysis to Study Integers

**Core Idea:** Connect discrete problems about integers (like the distribution of primes) with continuous analytical objects (like functions and integrals), using tools of analysis (limits, complex function theory) to study their asymptotic behavior.

**Example: Proving Infinitude of Primes with an "Infinite Sum" Function**

**Step 1: Understanding the Harmonic Series.** Imagine a simple sum: $1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots$. Although the terms get smaller, mathematicians have proven that this sum grows infinitely large, eventually surpassing any number you can imagine. It diverges to infinity.

**Step 2: Unveiling the Connection Between $\zeta$-function and Primes.** The Riemann $\zeta$-function is a generalization of the harmonic series: $\zeta(s) = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{4^s} + \cdots$. Euler discovered the astonishing connection: this "sum" form can be transformed into a "product" form involving only primes. The transformation works like a "sieve":

1. Write $\zeta(s)$: $\zeta(s) = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \frac{1}{4^s} + \frac{1}{5^s} + \frac{1}{6^s} + \cdots$
2. Multiply both sides by $\frac{1}{2^s}$: $\frac{1}{2^s}\zeta(s) = \frac{1}{2^s} + \frac{1}{4^s} + \frac{1}{6^s} + \cdots$
3. Subtract the second line from the first — all terms with denominator a multiple of 2 are eliminated: $(1-\frac{1}{2^s})\zeta(s) = 1 + \frac{1}{3^s} + \frac{1}{5^s} + \frac{1}{7^s} + \frac{1}{9^s} + \cdots$
4. Now multiply the remaining result by $\frac{1}{3^s}$, subtract again — all terms with denominator a multiple of 3 are eliminated.
5. This process acts like a "sieve," removing all multiples of primes. If we repeat this for *all* primes (2, 3, 5, 7, ...), only 1 remains on the right side.
6. We obtain: $(\cdots)(1-\frac{1}{7^s})(1-\frac{1}{5^s})(1-\frac{1}{3^s})(1-\frac{1}{2^s})\zeta(s) = 1$
7. Move all terms to the right side, giving Euler's product formula:

$$
\zeta(s) = \left(1 - \frac{1}{2^s}\right)^{-1} \times \left(1 - \frac{1}{3^s}\right)^{-1} \times \left(1 - \frac{1}{5^s}\right)^{-1} \times \cdots
$$

This formula precisely establishes a bridge between **the sum over all integers** and **the product over all primes**, based on the Fundamental Theorem of Arithmetic — every integer can be uniquely factored into primes.

**Step 3: The Contradiction.** Now, assume there is a finite number of primes. Then the "infinite product" over primes becomes a **finite product**. This leads to a contradiction: infinity = a finite number. Therefore, our initial assumption that "primes are finite" must be wrong.

### Algebraic Number Theory: Using Algebraic Structures to Study Integers

**Core Idea:** Generalize the ring of integers $\mathbb{Z}$ to more general **rings of algebraic integers** (e.g., Gaussian integers $\mathbb{Z}[i]$), and solve number theory problems by studying the **algebraic structure** of these rings (like ideals and unique factorization).

**Example: Studying Fermat's Last Theorem with Eisenstein Integers**

Fermat's equation $x^3 + y^3 = z^3$ can be factored, after introducing the cube root of unity $\omega = e^{2\pi i/3}$, as $(x+y)(x+\omega y)(x+\omega^2 y) = z^3$.

This factorization takes place in the **ring of Eisenstein integers** $\mathbb{Z}[\omega] = \{a+b\omega \mid a,b \in \mathbb{Z}\}$.

In ordinary integers $\mathbb{Z}$, we have unique prime factorization. However, in more general rings of algebraic integers, this property **can fail**.

**The Power of Unique Factorization:** Fortunately, in the world of Eisenstein integers we've constructed for $n=3$, the law of **unique factorization still holds**! Just like regular integers, every Eisenstein integer can be uniquely factored into "Eisenstein primes." This gives us an extremely powerful tool.

- **Analogy with regular integers:** If I tell you that two coprime integers $a$ and $b$ have a product that is a cube, e.g., $a \times b = 10^3 = 1000$. Since $a$ and $b$ are coprime, they cannot share any prime factors. So the only possibility is that $a$ and $b$ themselves are cubes (e.g., $a=8=2^3, b=125=5^3$).
- **Applying this to Fermat's Equation:** We have $(x+y)(x+\omega y)(x+\omega^2 y) = z^3$. Mathematicians can prove that the three terms in the parentheses on the left are "almost" coprime.
- Since they are almost coprime and their product is a cube ($z^3$), then by the unique factorization law in this world, **each of the three terms must be the cube of some Eisenstein integer** (ignoring some small unit factors).
- So we can write:

$$
x+\omega y = (\text{some Eisenstein integer})^3
$$

- **The Final Step — Deriving a Contradiction:** Mathematicians write this "Eisenstein integer" as $a+b\omega$, then expand $(a+b\omega)^3$. After a series of algebraic manipulations, they show that this new equation leads to a smaller solution of the same form. This process can be repeated infinitely, producing ever-smaller integer solutions, until a contradiction arises (since positive integers cannot decrease indefinitely). This is the famous method of **infinite descent**.

**The Key Takeaway:** Without the **unique factorization law** in the world of Eisenstein integers, we could not confidently deduce from "the product of three terms is a cube" to "each term is a cube." This step is the core of the proof. For other values of $n$, the corresponding "new world" may not have unique factorization, making the proof enormously more difficult.

## Questions for Exploration

1. Use the Euclidean algorithm to find $\text{gcd}(252, 105)$ and find integers $m, n$ such that $252m + 105n = \text{gcd}(252, 105)$.

2. Why is the Fundamental Theorem of Arithmetic (unique prime factorization) so "fundamental" and important?

3. How did Euclid prove that "if $2^n - 1$ is prime, then $2^{n-1}(2^n - 1)$ is a perfect number"?

4. What are the first two non-trivial positive integer solutions to Pell's equation $x^2 - 2y^2 = 1$? How close are the corresponding values of $x/y$ to $\sqrt{2}$?

5. Based on the first three chapters, compare the main differences in research style and characteristics between the fields of "geometry" and "number theory" in ancient Greece.

6. Explain in your own words the core idea of proving the infinitude of primes using the Riemann $\zeta$-function. How does it embody the philosophy of "studying the discrete with the continuous"? What other applications can you find?
