---
title: "Lecture 5: The Wisdom of Number Theory in the East—China and India"
---

## Lecture 5: The Wisdom of Number Theory in the East — China and India

## Review and Introduction

In the previous lectures, we explored the brilliant achievements of Greek mathematics in geometry, number theory, and the concept of infinity. However, the mathematical sky was not only bright over the Mediterranean. On the other side of the world, ancient Eastern civilizations independently developed distinctive and equally profound mathematical ideas.

Today, we turn our attention to Asia, particularly ancient China and India. We will see that some ideas we consider "Greek," such as the Euclidean algorithm, also took root here independently. More importantly, Eastern mathematicians made astonishing breakthroughs in solving problems that the Greeks had not deeply explored or had not fully resolved, especially in finding integer solutions to equations. In this lecture, we will focus on the crystallization of ancient Chinese mathematical wisdom — the Chinese Remainder Theorem — and the Indian mathematicians' remarkable skills in solving Pell's equation.

## Practical Background of Congruence Problems: Ancient Calendrical Science

Before diving into the ingenious algorithm of the Chinese Remainder Theorem, we first need to understand an important question: why was solving systems of congruences so important in ancient China? The answer lies primarily in one extremely important field — **Calendrical Science**.

Unlike purely solar calendars (such as the ancient Roman Julian calendar), the ancient Chinese calendar was a **lunisolar calendar**. It had to reflect both the solar year cycle (determining seasons and solar terms) and the lunar month cycle (determining month divisions). These two cycles are not simple integer multiples of each other:

- A tropical year is approximately 365.2422 days.
- A synodic month is approximately 29.5306 days.

Coordinating these two different cycles, along with the 60-day sexagenary cycle used for daily timekeeping, was a core challenge faced by ancient astronomers and mathematicians. This naturally led to congruence problems.

**A Simplified Example:** Imagine an ancient calendar maker who needs to predict an important day. He knows the universe follows several independent "clocks":

1. **Solar clock:** Cycles every 365 days (simplified year).
2. **Lunar clock:** Cycles every 30 days (simplified month).
3. **Sexagenary clock:** Cycles every 60 days.

Suppose the starting point of the universe, called "Shang Yuan," is when all clocks point to 0. Now, the calendar maker observes that today is the 4th day of the "solar clock," the 10th day of the "lunar clock," and the 25th day of the "sexagenary clock." How many days ($x$) have passed since "Shang Yuan"? This problem translates into a system of congruences:

$$
\begin{aligned}
x &\equiv 4 \pmod{365} \\
x &\equiv 10 \pmod{30} \\
x &\equiv 25 \pmod{60}
\end{aligned}
$$

Ancient mathematicians needed a general method to solve such problems in order to create accurate calendars, predict eclipses, and guide agricultural production. The Chinese Remainder Theorem and its systematic algorithm, the "Dayan Qiyishu," were powerful mathematical tools developed precisely for this practical challenge.

## The Chinese Remainder Theorem: An Ingenious Algorithm for Congruence Problems

This is one of the most important contributions of ancient Chinese mathematics to the world, with profound ideas and wide applications.

### Origin: The "Master Sun's Problem"

Around the 3rd century CE, the ancient Chinese mathematical text *Sunzi Suanjing* recorded the following famous problem:

> "There is an unknown number. When counted by threes, the remainder is 2; when counted by fives, the remainder is 3; when counted by sevens, the remainder is 2. What is the number?"

In modern mathematical language, this is a system of congruences:

$$
\begin{aligned}
x &\equiv 2 \pmod{3} \\
x &\equiv 3 \pmod{5} \\
x &\equiv 2 \pmod{7}
\end{aligned}
$$

### Sunzi's Solution: A Constructive Genius Idea

Sunzi's solution is clear and systematic:

1. Find a number divisible by 5 and 7 (i.e., a multiple of 35) that leaves remainder 1 when divided by 3. This number is 70. Since we need remainder 2, we take $2 \times 70 = 140$.
2. Find a number divisible by 3 and 7 (i.e., a multiple of 21) that leaves remainder 1 when divided by 5. This number is 21. Since we need remainder 3, we take $3 \times 21 = 63$.
3. Find a number divisible by 3 and 5 (i.e., a multiple of 15) that leaves remainder 1 when divided by 7. This number is 15. Since we need remainder 2, we take $2 \times 15 = 30$.
4. Add these three numbers: $140 + 63 + 30 = 233$. This number satisfies all conditions.
5. Finally, subtract multiples of $3 \times 5 \times 7 = 105$ to get the smallest positive solution: $233 - 2 \times 105 = 23$.

### From Specific to General: Qin Jiushao's "Dayan Qiyishu"

Sunzi's method was ingenious, but it did not explain how to systematically find the key number "that leaves remainder 1 when divided by a certain number" (i.e., the **modular inverse**). It was not until 1247 CE that the Southern Song mathematician Qin Jiushao, in his book *Shushu Jiuzhang* (Mathematical Treatise in Nine Sections), proposed a fully systematic algorithm — the "Dayan Zongshu Shu," whose core is the "Dayan Qiyishu."

**The "Gengxiang Jiansun Shu" as Foundation:** Before explaining the "Dayan Qiyishu," we need to understand its foundation — the "Gengxiang Jiansun Shu" for finding the greatest common divisor. This method, recorded in the earlier *Nine Chapters on the Mathematical Art*, is essentially identical to the Euclidean algorithm. The procedure is: for two positive integers, subtract the smaller from the larger, and repeat with the difference and the smaller number until both numbers are equal. This equal number is their GCD.

**Dayan Qiyishu: Systematic Modular Inverse:** The essence of the "Dayan Qiyishu" is what we now call the **extended Euclidean algorithm**. It is a clever backtracking process built on the "Gengxiang Jiansun Shu." Its goal is to systematically solve the linear congruence equation $ax \equiv 1 \pmod{m}$.

1. **Prerequisite:** First, $a$ and $m$ must be coprime, i.e., $\text{gcd}(a, m) = 1$. If they are not coprime, no inverse exists.
2. **The "Qiyi" Process:** The algorithm uses the "Gengxiang Jiansun Shu" to find $\text{gcd}(a, m)$, recording the quotients at each step.
3. **Backtracking Construction:** Starting from the last step where $\text{gcd} = 1$, the algorithm works backward using the recorded quotients to express $1$ as a linear combination of $a$ and $m$, i.e., finding integers $x$ and $y$ such that $ax + my = 1$.
4. **Obtaining the Modular Inverse:** When the equation $ax + my = 1$ is considered modulo $m$, the term $my$ becomes 0, so the equation reduces to $ax \equiv 1 \pmod{m}$. The value of $x$ is then a modular inverse of $a$ modulo $m$.

**Historical Significance:** Qin Jiushao systematized this algorithm, providing a general method for solving any linear congruence system. This achievement marks the high level of algorithmic design in ancient Chinese mathematics, nearly 600 years before European mathematicians like Gauss established the complete theory.

## Pell's Equation: Another Peak of Indian Mathematics

Turning to India, we find remarkable achievements in solving another famous Diophantine equation — Pell's equation $x^2 - Ny^2 = 1$.

### Brahmagupta's "Composition Method" (c. 628 AD)

Brahmagupta was the first mathematician to systematically study Pell's equation and make breakthroughs. His core contribution is a remarkable identity (now called "Brahmagupta's identity"):

$$
(x_1^2 - Ny_1^2)(x_2^2 - Ny_2^2) = (x_1x_2 + Ny_1y_2)^2 - N(x_1y_2 + x_2y_1)^2
$$

**"Composition of Solutions":** This identity means that if you have solutions to $x_1^2 - Ny_1^2 = k_1$ and $x_2^2 - Ny_2^2 = k_2$, you can "compose" them to obtain a solution to $x^2 - Ny^2 = k_1k_2$.

**Significance:** This provides a powerful tool for generating new solutions from known ones (even from solutions where $k \neq 1$). For example, from one solution, infinitely many solutions can be generated.

### Bhaskara II's "Cyclic Method" (Chakravala, c. 1150 AD)

Brahmagupta's method, though powerful, was not universally applicable for all $N$. Five hundred years later, Bhaskara II perfected the theory and proposed a universal algorithm known as the "cyclic method."

**The Essence of the Algorithm — Iteration and Approximation:** The Chakravala (meaning "wheel") is a sophisticated iterative algorithm. Starting from a solution $(x, y)$ of an auxiliary equation $ax^2 - Ny^2 = k$, it composes with another trivial solution $(m, 1)$ (satisfying $m^2 - N(1)^2 = m^2 - N$) to construct a new equation $a'x'^2 - Ny'^2 = k'$ with a solution $(x', y')$, cleverly choosing $m$ so that the new constant $|k'|$ is smaller than $|k|$.

**Steps:**

1. **Initial Solution:** Start with a simple integer triple $(a, b, k)$ satisfying $a^2 - Nb^2 = k$. For example, choose $a$ such that $|a^2 - N|$ is as small as possible, with $b = 1$.
2. **Finding the Next Multiplier $m$:** Find a positive integer $m$ satisfying two conditions: (i) $a + bm$ must be divisible by $k$; (ii) $|m^2 - N|$ should be as small as possible.
3. **Constructing the New Solution:** Using Brahmagupta's identity, compose the solution $(a, b)$ with the "trivial solution" $(m, 1)$, and use the special choice of $m$ to "reduce," obtaining a new integer solution $(a', b')$ of $a'^2 - Nb'^2 = k'$. Here $k' = (m^2 - N)/k$. Due to the choice of $m$, $|k'| < |k|$.
4. **Cyclic Iteration:** Using the new triple $(a', b', k')$ as the basis, repeat steps 2 and 3. This process "cycles" like a wheel.

**The Power of the Algorithm:** Bhaskara II proved that this cyclic process must eventually reach an equation with $k$ value of $1, -1, 2, -2, 4,$ or $-4$. For these cases, there exist simple methods to ultimately derive a solution to $x^2 - Ny^2 = 1$. To demonstrate the power of his method, Bhaskara II solved $x^2 - 61y^2 = 1$. This problem is quite difficult, and its smallest positive integer solution is a huge number ($x = 1766319049, y = 226153980$). This demonstrates the high ability of Indian mathematicians in developing general iterative algorithms.

## Rational Triangles: Another Masterpiece of Brahmagupta

After the ancient Greeks perfectly described rational right triangles, a natural question arises: how do we describe general rational triangles? A reasonable definition is: a **rational triangle** is a triangle whose side lengths and area are all rational numbers.

This question was rarely mentioned in Greek mathematics, but again, it was the Indian mathematician **Brahmagupta** (c. 628 AD) who gave a detailed study in his work.

**Core Idea:** Brahmagupta discovered that any rational triangle can be decomposed by one of its altitudes into **two rational right triangles**.

**Proof Sketch:** For a triangle with sides $a, b, c$, suppose the altitude $h$ falls on side $c$, dividing it into $c_1$ and $c_2$. By the Pythagorean theorem:

$$
\begin{aligned}
a^2 &= h^2 + c_1^2 \\
b^2 &= h^2 + c_2^2
\end{aligned}
$$

Subtracting gives $a^2 - b^2 = c_1^2 - c_2^2 = (c_1 - c_2)(c_1 + c_2)$. Since $a, b, c$ are rational and $c_1 + c_2 = c$, the difference $c_1 - c_2$ is also rational. Solving the system for $c_1 + c_2$ and $c_1 - c_2$ gives $c_1$ and $c_2$ as rational numbers. If the area is also rational, then $h$ must be rational. Thus, the original triangle is decomposed into two right triangles with rational side lengths ($c_1, h, a$ and $c_2, h, b$).

## Questions for Exploration

1. **Chinese Wisdom:** Try using Sunzi's approach to solve a new congruence problem: a number leaves remainder 1 when divided by 3, remainder 2 when divided by 4, and remainder 3 when divided by 5. Write out your steps.

2. **Indian Skill:** Verify Brahmagupta's identity by hand. How do you think this identity was discovered?

3. **East-West Comparison:** The Greeks studied $x^2 - Ny^2 = 1$ mainly to find rational approximations of $\sqrt{N}$, while Indian mathematicians focused on finding **integer solutions**. How do these different research motivations reflect the differences in their mathematical styles?

4. **Mathematics and Civilization:** How did political needs (such as promulgating calendars), economic activities, and cultural traditions profoundly influence the direction and focus of ancient mathematical development?
