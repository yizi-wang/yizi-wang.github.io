---
title: "N Mock Exam Sprint"
---

## Module N: Mock Exam Sprint

> **Corresponding Syllabus**: Full Syllabus (MM1-MM8 + Arg1-Arg4 + Prf1-Prf5 + Err1-Err2)
> **Corresponding Paper**: Paper 1 (Applications of Mathematical Knowledge) + Paper 2 (Mathematical Reasoning)
> **Recommended Hours**: 2 hours | **Number of Questions**: 2 complete mock papers (20 questions each, 40 questions in total)
> **Question Source**: All carefully selected from TMUA past papers (2016-2023)

---

## 📋 Module Overview

| Mock Paper | Number of Questions | Syllabus Coverage | Question Characteristics | Suggested Time |
|----------|--------|---------|---------|---------|
| Paper 1 Mock Questions | 20 questions | MM1-MM8 (Full Syllabus Section 1) | Focuses on calculation speed and accuracy | 75 minutes |
| Paper 2 Mock Questions | 20 questions | MM1-MM8 + Arg1-Arg4 + Prf1-Prf5 + Err1-Err2 | Focuses on reasoning depth and logical chains | 75 minutes |

### Paper 1 Syllabus Coverage

| Syllabus Module | Topic | Question Numbers | Quantity |
|----------|--------|------|------|
| MM1 | Algebra and Functions | Q1, 2, 11, 15 | 4 |
| MM2 | Sequences and Series | Q3, 16 | 2 |
| MM3 | Coordinate Geometry | Q4, 13, 19 | 3 |
| MM4 | Trigonometry | Q5, 14, 20 | 3 |
| MM5 | Exponentials and Logarithms | Q6 | 1 |
| MM6 | Differentiation | Q7, 17 | 2 |
| MM7 | Integration | Q8, 12, 18 | 3 |
| MM8 | Graphs of Functions | Q9, 10 | 2 |
| **Total** | | | **20** |

### Paper 2 Syllabus Coverage

| Syllabus Module | Topic | Question Numbers | Quantity |
|----------|--------|------|------|
| Arg1-Arg4 | Logical Reasoning | Q1, 4, 6, 8, 12 | 5 |
| Prf1-Prf5 | Mathematical Proof | Q2, 7, 11, 20 | 4 |
| Err1-Err2 | Identifying Errors | Q3, 5, 19 | 3 |
| MM6 | Differentiation Reasoning | Q13, 14, 15, 16, 18 | 5 |
| MM7 | Integration Reasoning | Q9, 10, 17 | 3 |
| **Total** | | | **20** |

---

## 📝 Paper 1 Mock Questions (Applications of Mathematical Knowledge)

> **Exam Requirements**: Complete 20 questions in 75 minutes, approximately 3.75 minutes per question. No calculators allowed, no formula sheets provided.
> **Strategy Tips**: Do the questions you are confident in first, mark the difficult ones, and return to them later. All questions carry equal marks, and there is no penalty for incorrect answers.

### Question 1 (2016 P1 Q1 · Algebra)

**Syllabus**: MM1.1-MM1.7

**Question**: It is given that the expansion of $(ax + b)^3$ is $8x^3 - px^2 + 18x - 3\sqrt{3}$, where $a$, $b$ and $p$ are real constants.

What is the value of $p$?

**Options**:
- **A**: $-12\sqrt{3}$
- **B**: $-6\sqrt{3}$
- **C**: $-4\sqrt{3}$
- **D**: $-\sqrt{3}$
- **E**: $\sqrt{3}$
- **F**: $4\sqrt{3}$
- **G**: $6\sqrt{3}$
- **H**: $12\sqrt{3}$

**Correct Answer**: H

【Question Analysis】
This question tests binomial expansion and coefficient matching. The core idea is to expand $(ax+b)^3$, compare the coefficients term by term with the given expression, solve for $a$ and $b$, and then find $p$.

【Solution Steps】
Step 1: Write out the binomial expansion

$$(ax+b)^3 = a^3x^3 + 3a^2b\,x^2 + 3ab^2\,x + b^3$$

Step 2: Compare the coefficient of the $x^3$ term

$$a^3 = 8 \quad \Rightarrow \quad a = 2$$

Step 3: Compare the constant term

$$b^3 = -3\sqrt{3}$$

Notice that $(-\sqrt{3})^3 = -(\sqrt{3})^3 = -3\sqrt{3}$, therefore $b = -\sqrt{3}$.

Step 4: Verify with the coefficient of the $x$ term (can be skipped in the exam)

$$3ab^2 = 3 \times 2 \times (-\sqrt{3})^2 = 3 \times 2 \times 3 = 18$$

This matches the $18x$ in the question, confirming that $a$ and $b$ are correct.

Step 5: Find the coefficient of the $x^2$ term to determine $p$

$$3a^2b = 3 \times 2^2 \times (-\sqrt{3}) = -12\sqrt{3}$$

The $x^2$ term in the question is $-px^2$, so $-p = -12\sqrt{3}$, which means

$$p = 12\sqrt{3}$$

【Quick Shortcut】
From $a^3=8$ and $b^3=-3\sqrt{3}$, directly deduce $a=2$ and $b=-\sqrt{3}$. Substitute these into $3a^2b = -p$ to obtain $p=12\sqrt{3}$ without needing to verify the intermediate coefficients.

---

### Question 2 (2020 P1 Q10 · Algebra)

**Syllabus**: MM1.1-MM1.7

**Question**: The following sequence of transformations is applied to the curve $y = 4x^2$

1. Translation by $\begin{pmatrix} 3 \\ -5 \end{pmatrix}$

2. Reflection in the $x$-axis

3. Stretch parallel to the $x$-axis with scale factor 2

What is the equation of the resulting curve?

**Options**:
- **A**: $y = -x^2 + 12x - 31$
- **B**: $y = -x^2 + 12x - 41$
- **C**: $y = x^2 + 12x + 31$
- **D**: $y = x^2 + 12x + 41$
- **E**: $y = -16x^2 + 48x - 31$
- **F**: $y = -16x^2 + 48x - 41$
- **G**: $y = 16x^2 - 48x + 31$
- **H**: $y = 16x^2 - 48x + 41$

**Correct Answer**: A

【Question Analysis】
Apply three consecutive transformations to $y = 4x^2$ to find the final equation.

【Solution Steps】
Starting from $y = 4x^2$, apply transformations step by step:

**Transformation 1: Translation by $\begin{pmatrix}3\\-5\end{pmatrix}$**
Translate 3 units right and 5 units down:
$y = 4(x-3)^2 - 5$

**Transformation 2: Reflection in the $x$-axis**
$y$ becomes $-y$:
$y = -4(x-3)^2 + 5$

**Transformation 3: Stretch parallel to the $x$-axis with scale factor 2**
Replace $x$ with $\frac{x}{2}$:
$y = -4\left(\frac{x}{2}-3\right)^2 + 5 = -4 \cdot \frac{(x-6)^2}{4} + 5 = -(x-6)^2 + 5$

Expand: $y = -(x^2 - 12x + 36) + 5 = -x^2 + 12x - 31$

Corresponds to Option A.

---

### Question 3 (2016 P1 Q4 · Sequences and Series)

**Syllabus**: MM2.1-MM2.4

**Question**: The sequence $a_n$ is defined by the rule:

$$a_n = (-1)^n - (-1)^{n-1} + (-1)^{n+2} \text{ for } n \geq 1.$$

Find the value of

$$\sum_{n=1}^{39} a_n$$

**Options**:
- **A**: $-39$
- **B**: $-3$
- **C**: $-1$
- **D**: $0$
- **E**: $1$
- **F**: $3$
- **G**: $39$

**Correct Answer**: B

【Question Analysis】
This question tests the simplification of a general term containing $(-1)^n$ and its summation. First simplify $a_n$ into a concise form, then observe the alternating pattern of odd and even terms to quickly calculate the sum.

【Solution Steps】
Step 1: Simplify the general term $a_n$

$$a_n = (-1)^n - (-1)^{n-1} + (-1)^{n+2}$$

Using the properties of exponents:

$$(-1)^{n-1} = (-1)^n \cdot (-1)^{-1} = -(-1)^n$$

$$(-1)^{n+2} = (-1)^n \cdot (-1)^2 = (-1)^n$$

Substitute to get

$$a_n = (-1)^n - \bigl(-(-1)^n\bigr) + (-1)^n = 3 \cdot (-1)^n$$

Step 2: Write out the first few terms to verify the pattern

$$a_1 = -3,\quad a_2 = 3,\quad a_3 = -3,\quad a_4 = 3,\quad \ldots$$

The sequence alternates between $-3$ and $3$, showing a clear pattern.

Step 3: Calculate $\displaystyle\sum_{n=1}^{39} a_n$

$$\sum_{n=1}^{39} a_n = 3 \sum_{n=1}^{39} (-1)^n$$

From $n=1$ to $39$, there are $20$ odd terms (each being $-1$) and $19$ even terms (each being $+1$):

$$\sum_{n=1}^{39} (-1)^n = 20 \times (-1) + 19 \times 1 = -1$$

Therefore

$$\sum_{n=1}^{39} a_n = 3 \times (-1) = -3$$

【Quick Shortcut】
The sum of any two adjacent terms is zero ($a_{2k-1}+a_{2k} = -3+3 = 0$). In the $39$ terms, there are $19$ complete pairs that sum to zero, leaving only the last term $a_{39} = 3 \cdot (-1)^{39} = -3$, which yields the answer.

---

### Question 4 (2017 P1 Q3 · Coordinate Geometry)

**Syllabus**: MM3.1-MM3.3

**Question**: A line $l$ has equation $y = 6 - 2x$

A second line is perpendicular to $l$ and passes through the point $(-6, 0)$.

Find the area of the region enclosed by the two lines and the $x$-axis.

**Options**:
- **A**: $16 \frac{1}{5}$
- **B**: 18
- **C**: $21 \frac{3}{5}$
- **D**: 27
- **E**: $40 \frac{1}{2}$

**Correct Answer**: A

【Question Analysis】
This question focuses on line equations and area calculation in coordinate geometry. You need to find the equation of the perpendicular line, find the intersection of the two lines, and then calculate the area of the triangle enclosed by them and the $x$-axis.

【Solution Steps】
Step 1: Determine the equation of the second line. The line $l: y = 6-2x$ has a gradient of $-2$, so the perpendicular line has a gradient of $\frac{1}{2}$. Passing through the point $(-6,0)$, the equation is:
$$y - 0 = \frac{1}{2}(x + 6) \quad \Rightarrow \quad y = \frac{1}{2}x + 3$$

Step 2: Find the intersections of the two lines with the $x$-axis.
Line $l$ intersects the $x$-axis at $y=0 \Rightarrow x=3$, giving point $A(3,0)$.
The second line intersects the $x$-axis at $y=0 \Rightarrow x=-6$, giving point $B(-6,0)$.

Step 3: Find the intersection of the two lines. Solve the simultaneous equations:
$$6 - 2x = \frac{1}{2}x + 3 \quad \Rightarrow \quad \frac{5}{2}x = 3 \quad \Rightarrow \quad x = \frac{6}{5}$$
Substitute to get $y = \frac{1}{2}\cdot\frac{6}{5} + 3 = \frac{18}{5}$, so the intersection point is $C\left(\frac{6}{5}, \frac{18}{5}\right)$.

Step 4: Calculate the area of the triangle. The base $AB$ has length $3 - (-6) = 9$, and the height is the $y$-coordinate of the intersection point, $\frac{18}{5}$:
$$\text{Area} = \frac{1}{2} \times 9 \times \frac{18}{5} = \frac{81}{5} = 16\frac{1}{5}$$

Corresponds to Option A.

【Quick Shortcut】
The base length $9$ can be directly read (the difference between the $x$-coordinates of the intersections with the $x$-axis), so you only need to calculate the $y$-coordinate of the intersection and substitute it into the area formula.

---

### Question 5 (2016 P1 Q8 · Trigonometry)

**Syllabus**: MM4.1-MM4.6

**Question**: Find the maximum angle $x$ in the range $0^\circ \le x \le 360^\circ$ which satisfies the equation

$$\cos^2(2x) + \sqrt{3} \sin(2x) - \frac{7}{4} = 0$$

**Options**:
- **A**: $30^\circ$
- **B**: $60^\circ$
- **C**: $120^\circ$
- **D**: $150^\circ$
- **E**: $210^\circ$
- **F**: $240^\circ$
- **G**: $300^\circ$
- **H**: $330^\circ$

**Correct Answer**: F

【Question Analysis】
This question tests solving trigonometric equations. Use $\cos^2\theta = 1 - \sin^2\theta$ to transform it into a quadratic equation in terms of $\sin(2x)$.

【Solution Steps】
Step 1: Substitute to get $\sin^2(2x) - \sqrt{3}\sin(2x) + \frac{3}{4} = 0$.

Step 2: Let $t = \sin(2x)$, giving $t^2 - \sqrt{3}\,t + \frac{3}{4} = 0$. The discriminant $\Delta = 0$, so we have a repeated root $t = \dfrac{\sqrt{3}}{2}$.

Step 3: Since $x \in [0^\circ, 360^\circ]$, we have $2x \in [0^\circ, 720^\circ]$. The solutions to $\sin(2x) = \dfrac{\sqrt{3}}{2}$ are $2x = 60^\circ, 120^\circ, 420^\circ, 480^\circ$.

Step 4: Therefore $x = 30^\circ, 60^\circ, 210^\circ, 240^\circ$. The maximum value is $240^\circ$.

【Quick Shortcut】
The discriminant is zero. The maximum solution for $2x$ is $480^\circ$, which gives $x = 240^\circ$.

---

### Question 6 (2020 P1 Q15 · Algebra)

**Syllabus**: MM1.1-MM1.7

**Question**: Find the positive difference between the two real values of $x$ for which

$$(\log_2 x)^4 + 12 \left( \log_2 \left( \frac{1}{x} \right) \right)^2 - 2^6 = 0$$

**Options**:
- **A**: 4
- **B**: 16
- **C**: $\frac{15}{4}$
- **D**: $\frac{17}{4}$
- **E**: $\frac{255}{16}$
- **F**: $\frac{257}{16}$

**Correct Answer**: C

【Question Analysis】
Solve the equation $(\log_2 x)^4 + 12\left(\log_2 \frac{1}{x}\right)^2 - 2^6 = 0$ and find the positive difference between the two real values of $x$.

【Solution Steps】

First, simplify: $\log_2 \frac{1}{x} = -\log_2 x$, so $\left(\log_2 \frac{1}{x}\right)^2 = (\log_2 x)^2$

Since $2^6 = 64$, the equation becomes:

$(\log_2 x)^4 + 12(\log_2 x)^2 - 64 = 0$

Let $y = (\log_2 x)^2 \geq 0$, then:

$y^2 + 12y - 64 = 0$

Factorising gives: $(y + 16)(y - 4) = 0$

$y = -16$ (reject) or $y = 4$

So $(\log_2 x)^2 = 4$, yielding $\log_2 x = 2$ or $\log_2 x = -2$

$x = 2^2 = 4$ or $x = 2^{-2} = \frac{1}{4}$

Positive difference $= 4 - \frac{1}{4} = \frac{15}{4}$

Corresponds to Option C.

---

### Question 7 (2016 P1 Q3 · Differentiation)

**Syllabus**: MM6.1-MM6.3

**Question**: A line is drawn normal to the curve $y = \frac{2}{x^2}$ at the point on the curve where $x = 1$.

This line cuts the $x$-axis at $P$ and the $y$-axis at $Q$.

The length of $PQ$ is

**Options**:
- **A**: $\frac{3\sqrt{5}}{2}$
- **B**: $\frac{3\sqrt{17}}{4}$
- **C**: $\frac{7\sqrt{17}}{4}$
- **D**: $\frac{35}{4}$
- **E**: $\frac{35\sqrt{5}}{2}$
- **F**: $\frac{3\sqrt{17}}{2}$

**Correct Answer**: C

【Question Analysis】
This question tests the geometric meaning of derivatives and normal equations. First find the derivative (tangent gradient) at the specified point, take the negative reciprocal to find the normal gradient, write the normal equation, find its intersections with both axes, and finally use the distance formula to calculate $PQ$.

【Solution Steps】
Step 1: Find the coordinates of the tangent point

When $x = 1$, $y = \dfrac{2}{1^2} = 2$. The tangent point is $(1, 2)$.

Step 2: Find the derivative and tangent gradient

$$y = 2x^{-2} \quad \Rightarrow \quad \frac{dy}{dx} = -4x^{-3} = -\frac{4}{x^3}$$

At $x = 1$, the tangent gradient is $y'(1) = -4$.

Step 3: Find the normal gradient and normal equation

The normal gradient is the negative reciprocal of the tangent gradient:

$$m_{\text{normal}} = -\frac{1}{-4} = \frac{1}{4}$$

The normal line passes through $(1, 2)$, so the equation is

$$y - 2 = \frac{1}{4}(x - 1)$$

Step 4: Find intersections with the axes

Intersection with the $x$-axis, $P$: Set $y = 0$, giving $-2 = \dfrac{1}{4}(x-1)$, which yields $x = -7$. Thus $P(-7, 0)$.

Intersection with the $y$-axis, $Q$: Set $x = 0$, giving $y - 2 = -\dfrac{1}{4}$, which yields $y = \dfrac{7}{4}$. Thus $Q\!\left(0, \dfrac{7}{4}\right)$.

Step 5: Calculate the length of $PQ$

$$PQ = \sqrt{(-7)^2 + \left(\frac{7}{4}\right)^2} = \sqrt{49 + \frac{49}{16}} = \sqrt{\frac{833}{16}}$$

Notice that $833 = 49 \times 17$, therefore

$$PQ = \frac{\sqrt{49 \times 17}}{4} = \frac{7\sqrt{17}}{4}$$

【Quick Shortcut】
The normal gradient is $m = \dfrac{1}{4}$, and the absolute value of the $x$-intercept is $7$. Given the gradient and $x$-intercept, you can directly write the hypotenuse $PQ = 7 \times \dfrac{\sqrt{1^2+4^2}}{4} = \dfrac{7\sqrt{17}}{4}$, saving the step of separately calculating the coordinates of $Q$.

---

### Question 8 (2016 P1 Q5 · Integration)

**Syllabus**: MM7.1-MM7.6

**Question**: What is the total area enclosed between the curve $y = x^2 - 1$, the $x$-axis and the lines $x = -2$ and $x = 2$?

**Options**:
- **A**: $\frac{4}{3}$
- **B**: $\frac{8}{3}$
- **C**: 4
- **D**: $\frac{16}{3}$
- **E**: 12
- **F**: 16

**Correct Answer**: C

【Question Analysis】
This question tests using definite integrals to find the area enclosed by a curve and the coordinate axes. The parabola $y = x^2 - 1$ crosses the $x$-axis on the interval $[-2, 2]$, so the integral needs to be split and absolute values taken.

【Solution Steps】
Step 1: Find the zero-crossings. Let $x^2 - 1 = 0$, giving $x = \pm 1$. The function $y \ge 0$ on $[-2, -1]$ and $[1, 2]$, while $y \le 0$ on $[-1, 1]$.

Step 2: Use even function symmetry:
$$\text{Area} = 2\left[\int_{0}^{1}(1 - x^2)\,dx + \int_{1}^{2}(x^2 - 1)\,dx\right]$$

Step 3: $\displaystyle\int_{0}^{1}(1 - x^2)\,dx = \frac{2}{3}$, $\displaystyle\int_{1}^{2}(x^2 - 1)\,dx = \frac{4}{3}$.

Step 4: Area $= 2 \times \left(\frac{2}{3} + \frac{4}{3}\right) = 4$.

【Quick Shortcut】
For even functions, simply calculate the right half and multiply by $2$. The three area sections are each $\frac{4}{3}$, totalling $4$.

---

### Question 9 (2022 P1 Q18 · Graphs)

**Syllabus**: MM8.1-MM8.7

**Question**: It is given that

$$f(x) = x^2(x - 1)^2(x - 2)$$

$$g(x) = -p(x - q)^2(x - r)^2$$

where $p$, $q$ and $r$ are positive and $q < r$

Find the set of values of $q$ and $r$ that guarantees the greatest number of distinct real solutions of the equation $f(x) = g(x)$ for all $p$.

**Options**:
- **A**: $q < 1$ and $r < 1$
- **B**: $q < 1$ and $1 < r < 2$
- **C**: $q < 1$ and $r > 2$
- **D**: $1 < q < 2$ and $1 < r < 2$
- **E**: $1 < q < 2$ and $r > 2$
- **F**: $q > 2$ and $r > 2$

**Correct Answer**: B

【Question Analysis】
Given a quintic polynomial $f(x)=x^2(x-1)^2(x-2)$ and a quartic polynomial $g(x)=-p(x-q)^2(x-r)^2$ (where $p,q,r>0$, $q<r$), find the range of values for $q, r$ that ensures the equation $f(x)=g(x)$ has the maximum number of distinct real roots for all $p>0$. This is essentially a discussion about the number of intersection points of two function graphs.

【Solution Steps】
Let $h(x)=f(x)-g(x)$, then the equation $f(x)=g(x)$ is equivalent to $h(x)=0$. $h(x)$ is a quintic polynomial, so it has at most $5$ distinct real roots.

Analyse the graph of $f(x)$: the roots are $x=0$ (repeated, touches $x$-axis), $x=1$ (repeated, touches $x$-axis), and $x=2$ (single root). For $x>2$, $f(x)>0$, and for $x<2$, $f(x)\le 0$, forming two concave "valleys" around $x=0$ and $x=1$.

Analyse the graph of $g(x)$: $g(x)\le 0$ holds for all $x$, touching the $x$-axis at $x=q$ and $x=r$, forming convex "peaks".

To guarantee $5$ intersections always, the peaks of $g(x)$ must cover the two valleys of $f(x)$, meaning $q$ and $r$ must each fall into one valley. If $r>2$ or $r<1$, when $p$ is very large, the peak of $g(x)$ will be too steep and skip one of the valleys, resulting in no more than $3$ intersections. Thus, it is required that $1<r<2$.

Similarly, if $q>1$ (i.e., $1<q<r$), the left valley is uncovered, so it is necessary that $q<1$. At this point, $g(1)<0$, and the peaks cover both valleys producing two intersections each (total 4). Additionally, for $x<0$, since $f(x)$ is a quintic while $g(x)$ is a quartic, $f(x)$ decreases faster as $x\to-\infty$, so there must be a 5th intersection.

Checking the boundaries: when $q=1$, a repeated root appears at $x=1$, resulting in less than $5$ distinct roots; when $r=2$, $5$ distinct roots can still be maintained because $x=2$ is a single root of $f(x)$. The option that best matches is $q<1$ and $1<r<2$.

【Quick Shortcut】
Grasp the core logic: a quintic polynomial has at most $5$ real roots, so $g(x)$ needs to cover the two valleys of $f(x)$. Observing the root distribution directly indicates that $q\in(0,1)$ and $r\in(1,2)$.

---

### Question 10 (2018 P1 Q5 · Functions)

**Syllabus**: MM1.7, MM8.1-MM8.7

**Question**: The function f is defined by $f(x) = x^3 + ax^2 + bx + c$.

$a, b$ and $c$ take the values 1, 2 and 3 with no two of them being equal and not necessarily in this order.

The remainder when $f(x)$ is divided by $(x + 2)$ is $R$.

The remainder when $f(x)$ is divided by $(x + 3)$ is $S$.

What is the largest possible value of $R - S$?

**Options**:
- **A**: $-26$
- **B**: $5$
- **C**: $7$
- **D**: $17$
- **E**: $29$

**Correct Answer**: D

【Question Analysis】
Given a cubic polynomial $f(x)=x^3+ax^2+bx+c$, where $a,b,c$ is a permutation of $\{1,2,3\}$ (mutually distinct). Let $R$ be the remainder when $f(x)$ is divided by $(x+2)$, and $S$ be the remainder when $f(x)$ is divided by $(x+3)$. Find the largest possible value of $R-S$.

The core tool here is the Remainder Theorem: the remainder when $f(x)$ is divided by $(x-p)$ is equal to $f(p)$. Therefore $R=f(-2)$ and $S=f(-3)$.

【Solution Steps】
From the Remainder Theorem:
$R=f(-2)=-8+4a-2b+c$
$S=f(-3)=-27+9a-3b+c$

Subtracting them gives:
$R-S=(-8+4a-2b+c)-(-27+9a-3b+c)=19-5a+b$

To maximise $R-S$, we need to maximise $-5a+b$. Since the coefficient of $a$ is negative, $a$ should be as small as possible; the coefficient of $b$ is positive, so $b$ should be as large as possible. Since $a,b,c$ are permutations of $\{1,2,3\}$, we choose $a=1$, $b=3$, and $c=2$.

Then $R-S=19-5\times 1+3=17$.

【Quick Shortcut】
Subtract directly to eliminate $c$, yielding $R-S=19-5a+b$. Since the absolute value of the coefficient of $a$ is much larger than that of $b$, prioritise setting $a$ to the minimum value $1$, then set $b$ to the maximum value $3$, immediately giving the answer $17$.

---

### Question 11 (2018 P1 Q14 · Algebra)

**Syllabus**: MM1.1-MM1.7

**Question**: The line $y = mx + 4$ passes through the points $(3, \log_2 p)$ and $(\log_2 p, 4)$.

What are the possible values of $p$?

**Options**:
- **A**: $p = 1$ and $p = 4$
- **B**: $p = 1$ and $p = 16$
- **C**: $p = \frac{1}{4}$ and $p = 4$
- **D**: $p = \frac{1}{4}$ and $p = 64$
- **E**: $p = \frac{1}{64}$ and $p = 4$
- **F**: $p = \frac{1}{64}$ and $p = 16$

**Correct Answer**: B

【Question Analysis】
Given that the line $y = mx + 4$ passes through the two points $(3, \log_2 p)$ and $(\log_2 p, 4)$, find the possible values of $p$. This question combines line equations with logarithmic operations, testing the substitution method for solving parameters.

【Solution Steps】
Substitute both points into the line equation:
$\log_2 p = 3m + 4$ ...... (1)
$4 = m \log_2 p + 4$ ...... (2)

From (2), we get $m \log_2 p = 0$, so $m = 0$ or $\log_2 p = 0$.

Case 1: $m = 0$. Substitute into (1) to get $\log_2 p = 4$, so $p = 2^4 = 16$.
Case 2: $\log_2 p = 0$, so $p = 2^0 = 1$. Substitute into (1) to get $3m + 4 = 0$, giving $m = -4/3$, so a solution exists.

Overall, $p = 1$ or $p = 16$.

【Quick Shortcut】
Let $q = \log_2 p$ to simplify notation. The equations become $q = 3m + 4$ and $4 = mq + 4$. From the second equation, we immediately get $mq = 0$. Discuss the two cases $m = 0$ and $q = 0$ to avoid repeatedly writing $\log_2 p$.

---

### Question 12 (2019 P1 Q12 · Integration)

**Syllabus**: MM7.1-MM7.6

**Question**: It is given that

$$\frac{dV}{dt} = \frac{24\pi(t - 1)}{(1 + \sqrt{t})} \text{ for } t \geq 1$$

and $V = 7$ when $t = 1$.

Find the value of $V$ when $t = 9$.

**Options**:
- **A**: $208\pi + 7$
- **B**: $216\pi + 7$
- **C**: $224\pi + 7$
- **D**: $416\pi + 7$
- **E**: $608\pi + 7$
- **F**: $744\pi + 7$

**Correct Answer**: C

【Question Analysis】
Given $\frac{dV}{dt} = \frac{24\pi(t-1)}{1+\sqrt{t}}$ ($t \geq 1$), and $V(1) = 7$, find $V(9)$.

【Simplification】
Note that $t-1 = (\sqrt{t}+1)(\sqrt{t}-1)$, so:
$\frac{dV}{dt} = 24\pi(\sqrt{t}-1)$

【Integration】
$V = 24\pi \left( \frac{2}{3}t^{3/2} - t \right) + c$
$V = 16\pi t^{3/2} - 24\pi t + c$

Substitute $t = 1$, $V = 7$:
$7 = 16\pi - 24\pi + c$
$c = 8\pi + 7$

When $t = 9$:
$V = 16\pi \times 9^{3/2} - 24\pi \times 9 + 8\pi + 7$
$= (16 \times 27 - 24 \times 9 + 8)\pi + 7$
$= (432 - 216 + 8)\pi + 7$
$= 224\pi + 7$

Corresponds to Option C.

---

### Question 13 (2021 P1 Q8 · Coordinate Geometry)

**Syllabus**: MM3.1-MM3.3

**Question**: The line $y = 2x + 3$ meets the curve $y = x^2 + bx + c$ at exactly one point.

The line $y = 4x - 2$ also meets the curve $y = x^2 + bx + c$ at exactly one point.

What is the value of $b - c$?

**Options**:
- **A**: $-9$
- **B**: $-5.5$
- **C**: $-1$
- **D**: $5$
- **E**: $6$
- **F**: $14$

**Correct Answer**: A

【Question Analysis】
The lines $y = 2x+3$ and $y = 4x-2$ each intersect the parabola $y = x^2+bx+c$ at exactly one point (i.e., they are tangents). Find $b-c$.

【Solution Steps】
A line is tangent to a parabola $\Leftrightarrow$ the simultaneous equations have a repeated root $\Leftrightarrow$ the discriminant $= 0$

**Line 1:** $x^2 + bx + c = 2x + 3$, which is $x^2 + (b-2)x + (c-3) = 0$
$(b-2)^2 - 4(c-3) = 0$ ......①

**Line 2:** $x^2 + bx + c = 4x - 2$, which is $x^2 + (b-4)x + (c+2) = 0$
$(b-4)^2 - 4(c+2) = 0$ ......②

Expand and simplify:
①: $b^2 - 4b - 4c = -16$
②: $b^2 - 8b - 4c = -8$

Subtract: $4b = -8$, so $b = -2$

Substitute into ①: $4 + 8 - 4c = -16$, so $c = 7$

$b - c = -2 - 7 = -9$

Corresponds to Option A.

---

### Question 14 (2019 P1 Q17 · Trigonometry)

**Syllabus**: MM4.1-MM4.6

**Question**: Find the fraction of the interval $0 \le \theta \le \pi$ for which the inequality

$$(\sin(2\theta) - \frac{1}{2}) (\sin \theta - \cos \theta) \ge 0$$

is satisfied.

**Options**:
- **A**: $\frac{1}{12}$
- **B**: $\frac{1}{6}$
- **C**: $\frac{1}{4}$
- **D**: $\frac{5}{12}$
- **E**: $\frac{7}{12}$
- **F**: $\frac{3}{4}$
- **G**: $\frac{5}{6}$
- **H**: $\frac{11}{12}$

**Correct Answer**: C

【Question Analysis】
Find the proportion of the total interval $0 \leq \theta \leq \pi$ where the inequality $(\sin 2\theta - 1)(\sin \theta - \cos \theta) \geq 0$ is satisfied.

【Sign Analysis】
The product is $\geq 0$ if and only if both factors have the same sign (both non-negative or both non-positive).

On $0 \leq \theta \leq \pi$:
- $\sin 2\theta - 1 \leq 0$ is always true (since $\sin 2\theta \leq 1$)
- $\sin \theta - \cos \theta < 0$ when $\theta < \frac{\pi}{4}$
- $\sin \theta - \cos \theta > 0$ when $\theta > \frac{\pi}{4}$

【Determining the Interval】
Both factors have the same sign:
- Both non-positive: $\theta \in \left[0, \frac{\pi}{4}\right]$ (both factors are $\leq 0$)
- Both non-negative: Only satisfied when $\theta = \frac{5\pi}{4}$ (not in $[0,\pi]$, so reject)

Therefore, the interval where the inequality holds is $\left[0, \frac{\pi}{4}\right]$.
Total length $= \frac{\pi}{4}$.

The proportion of the total interval $\pi$ $= \frac{\pi/4}{\pi} = \frac{1}{4}$.

Corresponds to Option C.

---

### Question 15 (2020 P1 Q4 · Algebra)

**Syllabus**: MM1.1-MM1.7

**Question**: The 1<sup>st</sup>, 2<sup>nd</sup> and 3<sup>rd</sup> terms of a geometric progression are also the 1<sup>st</sup>, 4<sup>th</sup> and 6<sup>th</sup> terms, respectively, of an arithmetic progression.

The sum to infinity of the geometric progression is 12.

Find the 1<sup>st</sup> term of the geometric progression.

**Options**:
- **A**: 1
- **B**: 2
- **C**: 3
- **D**: 4
- **E**: 5
- **F**: 6

**Correct Answer**: D

【Question Analysis】
The first 3 terms of a geometric progression are also the 1st, 4th, and 6th terms of a certain arithmetic progression. The sum to infinity of the geometric progression $= 12$. Find the first term.

【Solution Steps】
Let the geometric progression have a first term $a$ and common ratio $r$. The first 3 terms are: $a$, $ar$, $ar^2$
Sum to infinity: $\frac{a}{1-r} = 12$, so $a = 12(1-r)$ ......①

Let the arithmetic progression have a first term $a$ and common difference $d$. The 1st, 4th, and 6th terms are: $a$, $a+3d$, $a+5d$

Therefore $ar = a+3d$ ......②, and $ar^2 = a+5d$ ......③

Eliminate $d$: $5 \times$② $- 3 \times$③ gives $5ar - 3ar^2 = 2a$
Divide by $a$ ($a \neq 0$): $5r - 3r^2 = 2$, which is $3r^2 - 5r + 2 = 0$
Factorising gives: $(3r-2)(r-1) = 0$, so $r = \frac{2}{3}$ or $r = 1$

When $r = 1$ the sum to infinity diverges, so reject.
For $r = \frac{2}{3}$: $a = 12(1 - \frac{2}{3}) = 12 \cdot \frac{1}{3} = 4$

Corresponds to Option D.

---

### Question 16 (2017 P1 Q7 · Sequences and Series)

**Syllabus**: MM2.1-MM2.4

**Question**: The first three terms of an arithmetic progression are $p$, $q$ and $p^2$ respectively, where $p < 0$

The first three terms of a geometric progression are $p$, $p^2$ and $q$ respectively.

Find the sum of the first 10 terms of the arithmetic progression.

**Options**:
- **A**: $\frac{23}{8}$
- **B**: $\frac{95}{8}$
- **C**: $\frac{115}{8}$
- **D**: $\frac{185}{8}$

**Correct Answer**: B

【Question Analysis】
Given that the first three terms of an arithmetic progression are $p, q, p^2$ ($p < 0$), and the first three terms of a geometric progression are $p, p^2, q$, find the sum of the first 10 terms of the arithmetic progression. This question requires combining the definitions of the two types of sequences to build an equation for $p$.

【Solution Steps】
First use the geometric progression: common ratio $r = \frac{p^2}{p} = p$, third term $q = p \cdot r = p^3$.

Then use the arithmetic progression: common difference $d = q - p$, third term $p + 2d = p^2$. Substitute $q = p^3$ to get:
$$p + 2(p^3 - p) = p^2 \implies 2p^3 - p^2 - p = 0$$
Factorising gives: $p(2p+1)(p-1) = 0$.

Since $p < 0$ and $p \neq 0$, we get $p = -\frac{1}{2}$. Consequently, $q = p^3 = -\frac{1}{8}$, and the common difference $d = q - p = \frac{3}{8}$.

The sum formula for the first $n$ terms of an arithmetic progression is $S_n = \frac{n}{2}[2a + (n-1)d]$. Substitute $n = 10$, $a = -\frac{1}{2}$, and $d = \frac{3}{8}$:
$$S_{10} = 5 \times \left(-1 + \frac{27}{8}\right) = 5 \times \frac{19}{8} = \frac{95}{8}$$

【Quick Shortcut】
Combine the arithmetic and geometric conditions to directly eliminate $q$ and $d$: from the geometric sequence, $q = p^3$; from the arithmetic sequence, $2q = p + p^2$. Combining these gives $2p^3 - p^2 - p = 0$. After solving for $p$, substitute into the sum formula.

---

### Question 17 (2020 P1 Q1 · Differentiation)

**Syllabus**: MM6.1-MM6.3

**Question**: Which of the following is an expression for the first derivative with respect to $x$ of

$$\frac{x^3 - 5x^2}{2x\sqrt{x}}$$

**Options**:
- **A**: $-\frac{\sqrt{x}}{2}$
- **B**: $\frac{\sqrt{x}}{4}$
- **C**: $\frac{3x - 5}{4\sqrt{x}}$
- **D**: $\frac{3\sqrt{x} - 5}{4\sqrt{x}}$
- **E**: $\frac{3\sqrt{x} - 10}{3\sqrt{x}}$
- **F**: $\frac{3x^2 - 10x}{3\sqrt{x}}$

**Correct Answer**: C

【Question Analysis】
Find the derivative of $f(x) = \frac{x^3 - 5x^2}{2x\sqrt{x}}$.

【Solution Steps】
First rewrite the expression in terms of powers of $x$:

$f(x) = \frac{x^3 - 5x^2}{2x^{3/2}} = \frac{x^3}{2x^{3/2}} - \frac{5x^2}{2x^{3/2}} = \frac{1}{2}x^{3/2} - \frac{5}{2}x^{1/2}$

Differentiate each term:

$f'(x) = \frac{1}{2} \cdot \frac{3}{2}x^{1/2} - \frac{5}{2} \cdot \frac{1}{2}x^{-1/2} = \frac{3}{4}x^{1/2} - \frac{5}{4}x^{-1/2}$

Rearrange the result into the format of the options:

$f'(x) = \frac{3\sqrt{x}}{4} - \frac{5}{4\sqrt{x}} = \frac{3\sqrt{x} \cdot \sqrt{x} - 5}{4\sqrt{x}} = \frac{3x - 5}{4\sqrt{x}}$

This corresponds to Option C.

---

### Question 18 (2017 P1 Q17 · Integration)

**Syllabus**: MM7.1-MM7.6

**Question**: The two functions $F(n)$ and $G(n)$ are defined as follows for positive integers $n$:

$$F(n) = \frac{1}{n} \int_{0}^{n} (n - x) \, dx$$

$$G(n) = \sum_{r=1}^{n} F(r)$$

What is the smallest positive integer $n$ such that $G(n) > 150$?

**Options**:
- **A**: 22
- **B**: 23
- **C**: 24
- **D**: 25
- **E**: 26

**Correct Answer**: D

【Question Analysis】
This question tests the combined application of integration and summation of sequences. First find $F(n)$ via the definite integral, then sum to find $G(n)$, and finally solve the inequality to find the smallest $n$.

【Solution Steps】
Calculate $F(n)$:
$$F(n)=\frac{1}{n}\int_{0}^{n}(n-x)\,dx=\frac{1}{n}\left[nx-\frac{x^2}{2}\right]_{0}^{n}=\frac{n}{2}$$
Sum to get $G(n)$:
$$G(n)=\sum_{r=1}^{n}\frac{r}{2}=\frac{1}{2}\cdot\frac{n(n+1)}{2}=\frac{n(n+1)}{4}$$
Solve $G(n) > 150$, which is $n(n+1) > 600$:
$24\times 25=600$, so $G(24)=150$ is not satisfied; $25\times 26=650$, so $G(25)=162.5>150$.

【Quick Shortcut】
Geometric method: $y=n-x$ on $[0,n]$ encloses a triangle with area $n^2/2$, so $F(n)=n/2$. Use the triangular number formula to directly write $G(n)$. Start testing values from $25$: $25^2=625$, $25\times 26=650>600$.

---

### Question 19 (2021 P1 Q1 · Coordinate Geometry)

**Syllabus**: MM3.1-MM3.3

**Question**: Two circles have the same radius.

The centre of one circle is (–2, 1).

The centre of the other circle is (3, –2).

The circles intersect at two distinct points.

What is the equation of the straight line through the two points at which the circles intersect?

**Options**:
- **A**: $3x - 5y = 4$
- **B**: $3x + 5y = -1$
- **C**: $5x - 3y = -4$
- **D**: $5x - 3y = -1$
- **E**: $5x - 3y = 1$
- **F**: $5x - 3y = 4$
- **G**: $5x + 3y = 1$

**Correct Answer**: F

【Question Analysis】
Two circles have the same radius and intersect at two points. Find the equation of the line passing through the intersections.

【Solution Steps - Method 1: Simultaneous Equations】

Let the radius of both circles be $r$, then:
$(x+2)^2 + (y-1)^2 = r^2$
$(x-3)^2 + (y+2)^2 = r^2$

Expand:
$x^2 + 4x + 4 + y^2 - 2y + 1 = r^2$
$x^2 - 6x + 9 + y^2 + 4y + 4 = r^2$

Subtract the two equations to eliminate $x^2, y^2, r^2$:
$10x - 6y - 8 = 0$

Simplify to get $5x - 3y = 4$

Corresponds to Option F.

【Solution Steps - Method 2: Geometric Method】

Since the two circles have the same radius, the line connecting the intersections is the perpendicular bisector of the line connecting their centres.

Centres $O_1 = (-2, 1)$, $O_2 = (3, -2)$

Midpoint $M = \left(\frac{1}{2}, -\frac{1}{2}\right)$

Gradient of $O_1O_2 = \frac{-2-1}{3-(-2)} = -\frac{3}{5}$

Gradient of the perpendicular bisector $= \frac{5}{3}$

Equation: $y - \left(-\frac{1}{2}\right) = \frac{5}{3}\left(x - \frac{1}{2}\right)$

Simplify to get $5x - 3y = 4$, which corresponds to Option F.

---

### Question 20 (2022 P1 Q14 · Trigonometry)

**Syllabus**: MM4.1-MM4.6

**Question**: A circle has centre $O$ and radius 6.

$P, Q$ and $R$ are points on the circumference with angle $POQ \geq \frac{\pi}{2}$

The area of the triangle $POQ$ is $9\sqrt{3}$

What is the greatest possible area of triangle $PRQ$?

**Options**:
- **A**: $18 + 9\sqrt{3}$
- **B**: $18\sqrt{3}$
- **C**: $27 + 9\sqrt{3}$
- **D**: $27\sqrt{3}$
- **E**: $36 + 9\sqrt{3}$
- **F**: $36\sqrt{3}$

**Correct Answer**: D

【Question Analysis】
Circle $O$ has radius $6$. $P$, $Q$, $R$ are on the circumference, $\angle POQ \geq \frac{\pi}{2}$, and the area of triangle $POQ$ is $9\sqrt{3}$. Find the maximum possible area of triangle $PRQ$. This is a comprehensive problem combining circle geometry and trigonometry.

【Solution Steps】
First step, use the triangle area formula $A = \frac{1}{2}ab \sin C$ to find $\angle POQ$. Let $\angle POQ = 2\theta$, then
$\frac{1}{2} \times 6 \times 6 \times \sin 2\theta = 9\sqrt{3}$, giving $\sin 2\theta = \frac{\sqrt{3}}{2}$.
Since $2\theta \geq \frac{\pi}{2}$, we know $2\theta = \frac{2\pi}{3}$, which means $\theta = \frac{\pi}{3}$.

Second step, find the length of the chord $PQ$. Draw a perpendicular from $O$ to $PQ$ intersecting at $S$, then $PS = 6 \sin\theta = 6 \sin\frac{\pi}{3} = 3\sqrt{3}$, so $PQ = 6\sqrt{3}$. Also $OS = 6 \cos\theta = 6 \cos\frac{\pi}{3} = 3$.

Third step, fixing $PQ$ as the base, the area of triangle $PRQ$ is $\frac{1}{2} \times PQ \times h$, where $h$ is the distance from $R$ to $PQ$. Since $R$ is on the circumference, the maximum value of $h$ occurs when $R$ is on the opposite side of $PQ$ at the furthest distance, making the height $RO + OS = 6 + 3 = 9$.

Fourth step, the maximum area is $\frac{1}{2} \times 6\sqrt{3} \times 9 = 27\sqrt{3}$.

【Quick Shortcut】
The core idea is that once the base $PQ$ is fixed, the area depends solely on the height. The maximum distance from a point on a circle to a fixed chord equals the radius plus the perpendicular distance from the centre to the chord. Thus, we directly get the max height as $6+3=9$, yielding the result in one step.

---



## 📝 Paper 2 Mock Questions (Mathematical Reasoning)

> **Exam Requirements**: Complete 20 questions in 75 minutes, approximately 3.75 minutes per question. You need to read and analyze mathematical arguments.
> **Strategy Tips**: Paper 2 focuses on reasoning rather than calculation. Carefully analyze the logic of each step and pay attention to logical connectives.

### Question 1 (2016 P2 Q4 · Logic)

**Syllabus**: Arg1-Arg4

**Question**: Five sealed urns, labelled P, Q, R, S, and T, each contain the **same** (non-zero) number of balls. The following statements are attached to the urns.

Urn P This urn contains one or four balls.

Urn Q This urn contains two or four balls.

Urn R This urn contains more than two balls and fewer than five balls.

Urn S This urn contains one or two balls.

Urn T This urn contains fewer than three balls.

Exactly one of the urns has a true statement attached to it.

Which urn is it?

**Options**:
- **A**: Urn P
- **B**: Urn Q
- **C**: Urn R
- **D**: Urn S
- **E**: Urn T

**Correct Answer**: C

【Question Analysis】
This question tests logical reasoning. Five urns contain the same number of balls $n$ ($n > 0$), and each urn has a statement about $n$ attached to it, exactly one of which is true. The set of values for $n$ corresponding to each statement is: $P:\{1,4\}$, $Q:\{2,4\}$, $R:\{3,4\}$, $S:\{1,2\}$, $T:\{1,2\}$ (i.e. $n < 3$). Key observation: when $n=1$, $P$ and $S$ are both true; when $n=2$, $Q$, $S$, and $T$ are all true; when $n=4$, $P$ and $Q$ are both true. Only when $n=3$ is exactly $R$ true, and all others are false.

【Solution Steps】
Assume a specific urn's statement is true and check if it leads to a contradiction:
- Assume $P$ is true: $n \in \{1,4\}$. If $n=1$, $S$ is also true (contradiction); if $n=4$, $Q$ is also true (contradiction).
- Assume $Q$ is true: $n \in \{2,4\}$. If $n=2$, $S$ and $T$ are also true (contradiction); if $n=4$, $P$ is also true (contradiction).
- Assume $R$ is true: $n \in \{3,4\}$. If $n=4$, $P$ is also true (contradiction); if $n=3$, verify $P$ is false, $Q$ is false, $S$ is false, $T$ is false. All pass.
- Assume $S$ is true: $n \in \{1,2\}$. If $n=1$, $P$ is also true; if $n=2$, $Q$ is also true. Both contradict.
- Assume $T$ is true: $n < 3$, meaning $n \in \{1,2\}$, in which case $S$ is also true (contradiction).

The only contradiction-free scenario: $n=3$, and $R$'s statement is true.

【Quick Shortcut】
Notice that the sets for $S$ and $T$ have a subset relationship ($n<3$ implies $n \in \{1,2\}$), so when $T$ is true, $S$ must be true. Eliminate it directly. The rest only requires checking the three cases $P$, $Q$, $R$.

---

### Question 2 (2016 P2 Q9 · Proof)

**Syllabus**: Prf1-Prf5

**Question**: Triangles $ABC$ and $XYZ$ have the **same area**.

Which of these extra conditions, taken independently, would **imply** that they are congruent?

**(1)** $AB = XY$ **and** $BC = YZ$

**(2)** $AB = XY$ **and** $\angle ABC = \angle XYZ$

**(3)** $\angle ABC = \angle XYZ$ **and** $\angle BCA = \angle YZX$

<table>
  <thead>
    <tr>
        <th> </th>
        <th>Condition (1)</th>
        <th>Condition (2)</th>
        <th>Condition (3)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>A</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>B</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
    </tr>
<tr>
        <td>C</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>D</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
    </tr>
<tr>
        <td>E</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>F</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
<td>Implies congruent</td>
    </tr>
<tr>
        <td>G</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
<td>Does not imply congruent</td>
    </tr>
<tr>
        <td>H</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
<td>Implies congruent</td>
    </tr>
  </tbody>
</table>

**Options**:
- **A**: Option A
- **B**: Option B
- **C**: Option C
- **D**: Option D
- **E**: Option E
- **F**: Option F
- **G**: Option G
- **H**: Option H

**Correct Answer**: D

【Question Analysis】
Given that $\triangle ABC$ and $\triangle XYZ$ have the same area, determine which of the three extra conditions can independently imply that the two triangles are congruent. The core of this question lies in combining the area formula with congruence theorems (SSS, SAS, ASA), noting that equal area alone is insufficient to guarantee congruence.

【Solution Steps】
Condition (1): $AB = XY$ and $BC = YZ$. From the area formula $\frac{1}{2}AB\cdot BC\sin B = \frac{1}{2}XY\cdot YZ\sin Y$, and knowing two sides are equal, we get $\sin B = \sin Y$. However, $\sin B = \sin Y$ does not imply $B = Y$, because we could have $Y = 180^\circ - B$. In this case, the included angles are unequal, so SAS cannot be used to prove congruence. Counterexamples exist, so it does not imply congruence.

Condition (2): $AB = XY$ and $\angle ABC = \angle XYZ$. Equal area gives $\frac{1}{2}AB\cdot BC\sin B = \frac{1}{2}XY\cdot YZ\sin Y$. Knowing $AB = XY$ and $\angle B = \angle Y$ (since the angle is in $(0,180^\circ)$, the sine is positive), cancelling them out leaves $BC = YZ$. Thus, two sides and the included angle are correspondingly equal. By SAS, they are congruent.

Condition (3): $\angle ABC = \angle XYZ$ and $\angle BCA = \angle YZX$. If two angles are equal, the third angle is also equal, so the two triangles are similar. The ratio of areas of similar triangles is the square of the similarity ratio. Since the areas are equal, the similarity ratio is $1$, meaning the two triangles are congruent.

Therefore, conditions (2) and (3) each imply congruence. Choose D.

【Quick Shortcut】
In condition (1), $\sin B = \sin Y$ might correspond to supplementary angles, unable to lock the included angle; in condition (2), knowing one angle is equal, the area formula directly determines the second side, completing SAS; in condition (3), two equal angles guarantee similarity, and equal area locks the similarity ratio to $1$.

---

### Question 3 (2016 P2 Q18 · Counterexamples)

**Syllabus**: Prf1, Err1-Err2

**Question**: Consider this statement about a function $f(x)$:

$$(*) \text{ If } (f(x))^2 \le 1 \text{ for all } -1 \le x \le 1 \text{ then } \int_{-1}^{1} (f(x))^2 \, dx \le \int_{-1}^{1} f(x) \, dx$$

Which one of the following functions provides a **counterexample** to (*)?

**Options**:
- **A**: $f(x) = x + \frac{1}{2}$
- **B**: $f(x) = x - \frac{1}{2}$
- **C**: $f(x) = x + x^3$
- **D**: $f(x) = x - x^3$
- **E**: $f(x) = x^2 + x^4$
- **F**: $f(x) = x^2 - x^4$

**Correct Answer**: D

【Question Analysis】
Construct a counterexample to the proposition $(*)$: If $(f(x))^2 \leq 1$ holds on $[-1, 1]$, then $\int_{-1}^{1}(f(x))^2\,dx \leq \int_{-1}^{1}f(x)\,dx$. We need the premise to be true and the conclusion to be false.

【Solution Steps】
Check the premise: In A, $f(1) = 3/2$, squaring exceeds $1$, reject. In B, $f(-1) = -3/2$, reject. In C and E, $f(1) = 2$, both rejected.

Only D and F are possible. For D: $f(x) = x - x^3$, stationary points at $x = \pm 1/\sqrt{3}$, extreme values $2/(3\sqrt{3}) < 1$, the premise is true. $f$ is an odd function, so $\int_{-1}^{1}f = 0$, while $\int_{-1}^{1}f^2 > 0$. The conclusion is false, so D is a counterexample.

For F: $0 \leq f(x) < 1$, so $f^2 \leq f$, making the conclusion true. It is not a counterexample.

【Quick Shortcut】
The endpoint values for A, B, C, E exceed $1$, immediately reject them. D is an odd function, so $\int f = 0 < \int f^2$. It is a natural counterexample.

---

### Question 4 (2017 P2 Q5 · Logic)

**Syllabus**: Arg1-Arg4

**Question**: Consider the following three statements:

**1** $10p^2 + 1$ and $10p^2 - 1$ are both prime when $p$ is an odd prime.

**2** Every prime greater than 5 is of the form $6n + 1$ for some integer $n$.

**3** No multiple of 7 greater than 7 is prime.

The result $91 = 7 \times 13$ can be used to provide a counterexample to which of the above statements?

**Options**:
- **A**: none of them
- **B**: 1 only
- **C**: 2 only
- **D**: 3 only
- **E**: 1 and 2 only
- **F**: 1 and 3 only
- **G**: 2 and 3 only
- **H**: 1, 2 and 3

**Correct Answer**: B

【Question Analysis】
This question provides three statements and asks to determine which statement $91 = 7 \times 13$ can serve as a counterexample for. The core is understanding the logical definition of a counterexample: for a universal statement (in the form "for all $x$, property holds"), a counterexample must satisfy the premise of the statement but fail the conclusion.

The three statements are:
1. When $p$ is an odd prime, both $10p^2 + 1$ and $10p^2 - 1$ are prime.
2. Every prime greater than $5$ is of the form $6n + 1$.
3. Any multiple of $7$ greater than $7$ is not prime.

【Solution Steps】
First rewrite statement 1 as "If $p$ is an odd prime, then $10p^2 + 1$ and $10p^2 - 1$ are both prime".
If $91$ is a counterexample, there must exist an odd prime $p$ such that $10p^2 + 1 = 91$ or $10p^2 - 1 = 91$.
Solving $10p^2 + 1 = 91$ gives $p^2 = 9$, so $p = 3$. $3$ is an odd prime, but $91 = 7 \times 13$ is not a prime, so the conclusion of statement 1 is false. Thus $91$ is a counterexample to statement 1.

For statement 2, a counterexample must be a prime greater than $5$ that cannot be written in the form $6n + 1$. However, $91$ itself is not prime, so it cannot serve as a counterexample.

For statement 3, it is a true statement (any multiple of $7$ greater than $7$ can be factorised as $7 \times k$, where $k \geq 2$, so it is not prime). $91$ is a positive example confirming this statement, not a counterexample.

【Quick Shortcut】
Directly test $p = 3$ (the smallest odd prime): $10 \times 3^2 + 1 = 91 = 7 \times 13$, which is not prime, immediately disproving statement 1. Statement 3 is inherently true, so no need to verify it. The counterexample for statement 2 must be a prime, but $91$ is not.

---

### Question 5 (2018 P2 Q3 · Counterexamples)

**Syllabus**: Prf1, Err1-Err2

**Question**: Consider the following statement:

> A car journey consists of two parts. In the first part, the average speed is $u$ km/h. In the second part, the average speed is $v$ km/h. Hence the average speed for the whole journey is $\frac{1}{2}(u + v)$ km/h.

Which of the following examples of car journeys provide(s) a **counterexample** to the statement?

*   **I** In the first part of the journey, the car travels at a constant speed of 50 km/h for 100 km. In the second part of the journey, the car travels at a constant speed of 40 km/h for 100 km.
*   **II** In the first part of the journey, the car travels at a constant speed of 50 km/h for one hour. In the second part of the journey, the car travels at a constant speed of 40 km/h for one hour.
*   **III** In the first part of the journey, the car travels at a constant speed of 50 km/h for 80 km. In the second part of the journey, the car travels at a constant speed of 40 km/h for 100 km.

**Options**:
- **A**: none of them
- **B**: I only
- **C**: II only
- **D**: III only
- **E**: I and II only
- **F**: I and III only
- **G**: II and III only
- **H**: I, II and III

**Correct Answer**: F

【Question Analysis】
The question presents a claim: a journey consists of two parts, the first with an average speed of $u$, and the second with an average speed of $v$, so the total average speed is $\dfrac{1}{2}(u+v)$. We need to determine which of the three given journey examples form a counterexample to the claim, meaning their actual average speed is not equal to $\dfrac{1}{2}(u+v)$. Note that $\dfrac{1}{2}(u+v)=\dfrac{1}{2}(50+40)=45$, so we just need to calculate the actual average speed for each journey.

【Solution Steps】
Average speed = total distance $\div$ total time.

**Journey I**: First part at $50$ km/h for $100$ km, time $t_1=2$ h; second part at $40$ km/h for $100$ km, time $t_2=2.5$ h. Total distance $D=200$ km, total time $T=4.5$ h, average speed $V=\dfrac{200}{4.5}=\dfrac{400}{9}\approx 44.44\neq 45$. This is a counterexample.

**Journey II**: First part at $50$ km/h for $1$ h, distance $d_1=50$ km; second part at $40$ km/h for $1$ h, distance $d_2=40$ km. Total distance $D=90$ km, total time $T=2$ h, average speed $V=\dfrac{90}{2}=45$. This exactly equals $\dfrac{1}{2}(u+v)$, so it is not a counterexample.

**Journey III**: First part at $50$ km/h for $80$ km, time $t_1=1.6$ h; second part at $40$ km/h for $100$ km, time $t_2=2.5$ h. Total distance $D=180$ km, total time $T=4.1$ h, average speed $V=\dfrac{180}{4.1}=\dfrac{1800}{41}\approx 43.90\neq 45$. This is a counterexample.

Therefore, I and III are counterexamples.

【Quick Shortcut】
When the durations of the two parts are equal (as in Journey II), the average speed is precisely the arithmetic mean $\dfrac{u+v}{2}$; but when the distances are equal or the times are unequal (as in Journeys I and III), the actual average speed is a weighted average and not equal to the arithmetic mean. Knowing this rule allows direct judgment without individual calculation.

---

### Question 6 (2022 P2 Q9 · Logic)

**Syllabus**: Arg1-Arg4

**Question**: Consider the following statement:

($*$) **For all** real numbers $x$, **if** $x < k$ **then** $x^2 < k$

What is the complete set of values of $k$ for which ($*$) is true?

**Options**:
- **A**: no real numbers
- **B**: $k > 0$
- **C**: $k < 1$
- **D**: $k \le 1$
- **E**: $0 < k < 1$
- **F**: $0 < k \le 1$
- **G**: all real numbers

**Correct Answer**: A

【Question Analysis】
Proposition: For all real numbers $x$, if $x < k$ then $x^2 < k$. Find the range of $k$ that makes the proposition true. The core of this question is realising that $x$ can be negative, and the square of a negative number can be very large. This is the key breakthrough.

【Solution Steps】
For any real number $k$, we need to check if there is a counterexample such that $x < k$ but $x^2 \geq k$.

Case 1: $k \leq 0$. Take $x = k - 1$, clearly $x < k$ holds. However, $x^2 = (k - 1)^2 > 0$, and since $k \leq 0$, we have $x^2 > k$, meaning $x^2 < k$ does not hold.

Case 2: $k > 0$. Take $x = -\sqrt{k}$. Since $\sqrt{k} > 0$, we have $x = -\sqrt{k} < 0 < k$, so $x < k$ holds. However, $x^2 = k$, which does not satisfy the strict inequality $x^2 < k$.

Overall, no matter what value $k$ takes, we can always find a counterexample to make the proposition false.

【Quick Shortcut】
There is no need for such detailed case analysis. Just note: for any $k$, you can always pick a negative $x$ with a sufficiently large absolute value such that $x < k$ but $x^2$ is very large, which is naturally not less than $k$. Thus there are no $k$ that make the proposition true.

---

### Question 7 (2022 P2 Q7 · Proof)

**Syllabus**: Prf1-Prf5

**Question**: > The difference between two consecutive positive cube numbers is always prime.

Here is an attempted proof of this claim:

I $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$

II Taking $x$ to be a positive integer, the difference between two consecutive cube numbers can be expressed as $(x + 1)^3 - x^3 = 3x^2 + 3x + 1$

III It is impossible to factorise $3x^2 + 3x + 1$ into two linear factors with integer coefficients because its discriminant is negative.

IV Therefore for every positive integer value of $x$ the integer $3x^2 + 3x + 1$ cannot be factorised.

V Hence, the difference between two consecutive cube numbers will always be prime.

Which of the following best describes this proof?

**Options**:
- **A**: The proof is completely correct, and the claim is true.
- **B**: The proof is completely correct, but there are counterexamples to the claim.
- **C**: The proof is wrong, and the first error occurs on line I.
- **D**: The proof is wrong, and the first error occurs on line II.
- **E**: The proof is wrong, and the first error occurs on line III.
- **F**: The proof is wrong, and the first error occurs on line IV.
- **G**: The proof is wrong, and the first error occurs on line V.

**Correct Answer**: F

【Question Analysis】
The claim is that the difference between two consecutive positive cube numbers is always prime. We need to check the proof step by step to identify the line containing the first error.

【Solution Steps】
Verify line by line:
I: $(x+1)^3 = x^3 + 3x^2 + 3x + 1$, algebraic expansion is correct.
II: The difference $(x+1)^3 - x^3 = 3x^2 + 3x + 1$, calculation is correct.
III: The discriminant $3^2 - 4 \times 3 \times 1 = -3 < 0$, so $3x^2 + 3x + 1$ has no real roots and cannot be factorised into linear factors with real coefficients. Correct.
IV: From the fact that the algebraic expression cannot be factorised, it infers that for every positive integer $x$, the resulting integer value cannot be factorised. This is a faulty leap in logic. Just because an algebraic expression cannot be factored does not mean its integer values are prime. For example, $x^2+1$ cannot be factored algebraically, but when $x=3$, $3^2+1 = 10 = 2 \times 5$, which is factorisable.
V: The conclusion derived from IV, but IV itself is incorrect.

Counterexample verification: $6^3 - 5^3 = 216 - 125 = 91 = 7 \times 13$, which is not prime. Or take $x = 7$, $3(49) + 21 + 1 = 169 = 13^2$, which is also not prime.

The first error occurs on line IV.

【Quick Shortcut】
Lines I-III are all correct algebraic operations. The key trap is in IV: an algebraic expression not being factorisable $\not\Rightarrow$ substituting an integer always yields a prime. Simply remembering the classic counterexample of $x^2+1$ allows you to quickly locate the error in IV.

---

### Question 8 (2017 P2 Q17 · Logic)

**Syllabus**: Arg1-Arg4

**Question**: A set $S$ of whole numbers is called *stapled* **if and only if** for every whole number $a$ which is in $S$ there exists a prime factor of $a$ which divides at least one other number in $S$.

Let $T$ be a set of whole numbers. Which of the following is true **if and only if** $T$ is **not** stapled?

**Options**:
- **A**: For every number $a$ which is in $T$, there is no prime factor of $a$ which divides every other number in $T$.
- **B**: For every number $a$ which is in $T$, there is no prime factor of $a$ which divides at least one other number in $T$.
- **C**: For every number $a$ which is in $T$, there is a prime factor of $a$ which does not divide any other number in $T$.
- **D**: For every number $a$ which is in $T$, there is a prime factor of $a$ which does not divide at least one other number in $T$.
- **E**: There exists a number $a$ which is in $T$ such that there is no prime factor of $a$ which divides every other number in $T$.
- **F**: There exists a number $a$ which is in $T$ such that there is no prime factor of $a$ which divides at least one other number in $T$.
- **G**: There exists a number $a$ which is in $T$ such that there is a prime factor of $a$ which does not divide any other number in $T$.
- **H**: There exists a number $a$ which is in $T$ such that there is a prime factor of $a$ which does not divide at least one other number in $T$.

**Correct Answer**: F

【Question Analysis】
This question examines the negation operation on logical quantifiers, combining set theory and mathematical logic. It defines a new concept "stapled": set $S$ is stapled if and only if for every element $a$ in $S$, there exists a prime factor of $a$ that divides at least one other number in $S$. The task is to find the necessary and sufficient condition for $T$ NOT being stapled. The core lies in accurately negating a compound logical proposition.

【Solution Steps】
Original proposition: $T$ is stapled $\iff \forall a\in T,\;\exists p$ ($p$ is a prime factor of $a$, and $p$ divides at least one other number in $T$).

The negation process takes two steps:
Step 1: Negate the outer universal quantifier $\forall$, changing it to the existential quantifier $\exists$:
$T$ is not stapled $\iff \exists a\in T$, such that it is not true that there exists such a prime factor.

Step 2: "It is not true that there exists such a prime factor" is equivalent to "there is no such prime factor", i.e., "there is no prime factor of $a$ which divides at least one other number in $T$".

Combining these gives: $T$ is not stapled $\iff$ there exists $a\in T$, such that $a$ has no prime factor that divides at least one other number in $T$.

Comparing with the options, Option F exactly matches this statement.

Note: Do not confuse "at least one" with "every". Options like A and D use "every other number", which is not equivalent to "at least one other number" in the original definition.

【Quick Shortcut】
Directly apply logical negation rules: $\neg(\forall x,P(x))\iff\exists x,\neg P(x)$, and $\neg(\exists x,Q(x))\iff\forall x,\neg Q(x)$. Here, just negate the outermost "for every" to "there exists", and the inner "there exists" to "there is no", while keeping the rest of the text exactly the same. Option F is the result.

---

### Question 9 (2016 P2 Q1 · Integration)

**Syllabus**: MM7.1-MM7.6

**Question**: Find the value of

$$\int_{1}^{2} \left( x^{2} - \frac{4}{x^{2}} \right)^{2} dx$$

**Options**:
- **A**: $\frac{43}{15}$
- **B**: $3$
- **C**: $\frac{97}{15}$
- **D**: $\frac{103}{15}$
- **E**: $\frac{163}{15}$
- **F**: $18$

**Correct Answer**: A

【Question Analysis】
This question tests the calculation of a definite integral. The integrand is $\left(x^2 - \frac{4}{x^2}\right)^2$, and the interval is $[1,2]$. The core idea is to expand the square in the brackets first, then integrate term by term using the power rule $\int x^n dx = \frac{x^{n+1}}{n+1}$ ($n \neq -1$), and finally substitute the upper and lower limits to calculate the difference. This is a standard procedure for calculating definite integrals; once expanded, all terms are power functions and can be integrated directly.

【Solution Steps】
Step 1: Expand the integrand
$\left(x^2 - \frac{4}{x^2}\right)^2 = x^4 - 2 \cdot x^2 \cdot \frac{4}{x^2} + \frac{16}{x^4} = x^4 - 8 + 16x^{-4}$

Step 2: Find the antiderivative term by term
$\int (x^4 - 8 + 16x^{-4})dx = \frac{x^5}{5} - 8x - \frac{16}{3x^3} + C$

Step 3: Substitute the upper and lower limits $[1,2]$
$\left[\frac{x^5}{5} - 8x - \frac{16}{3x^3}\right]_1^2 = \left(\frac{32}{5} - 16 - \frac{2}{3}\right) - \left(\frac{1}{5} - 8 - \frac{16}{3}\right) = \frac{31}{5} - 8 + \frac{14}{3} = \frac{93 - 120 + 70}{15} = \frac{43}{15}$

【Quick Shortcut】
After expansion, the three terms are $x^4$, a constant, and $x^{-4}$. Be careful when integrating $x^{-4}$; add one to the exponent and divide by the new exponent to get $-\frac{16}{3}x^{-3}$, and note that substituting the lower limit turns the negative sign positive.

---

### Question 10 (2017 P2 Q6 · Integration)

**Syllabus**: MM7.1-MM7.6

**Question**: A sequence $u_0, u_1, u_2, \dots$ is defined as follows:

$$u_0 = 1$$
$$u_n = \int_0^1 4xu_{n-1} \, dx \quad \text{for } n \geqslant 1$$

What is the value of $u_{1000}$?

**Options**:
- **A**: $2^{1000}$
- **B**: $4^{1000}$
- **C**: $\frac{4}{1000!}$
- **D**: $\frac{4}{1001!}$
- **E**: $\frac{2^{1000}}{1000!}$
- **F**: $\frac{4^{1000}}{1000!}$
- **G**: $\frac{2^{1000}}{1001!}$
- **H**: $\frac{4^{1000}}{1001!}$

**Correct Answer**: A

【Question Analysis】
Given the sequence $u_0 = 1$, $u_n = \int_0^1 4x u_{n-1} \, dx$ ($n \geq 1$), find $u_{1000}$.

Key point: Although the recurrence relation contains an integral, in each integration, $u_{n-1}$ is a constant (independent of the integration variable $x$), so the integration result is still a constant and can be computed directly.

【Solution Steps】
Calculate the terms step by step to find the pattern:
$u_0 = 1$

$u_1 = \int_0^1 4x \cdot u_0 \, dx = \int_0^1 4x \, dx = \left[ 2x^2 \right]_0^1 = 2$

$u_2 = \int_0^1 4x \cdot u_1 \, dx = \int_0^1 4x \cdot 2 \, dx = \left[ 4x^2 \right]_0^1 = 4$

$u_3 = \int_0^1 4x \cdot u_2 \, dx = \int_0^1 4x \cdot 4 \, dx = \left[ 8x^2 \right]_0^1 = 8$

The pattern is $u_n = 2^n$.

A rigorous proof can be done using mathematical induction: Assume $u_k = 2^k$, then
$u_{k+1} = \int_0^1 4x \cdot 2^k \, dx = 2^k \cdot \left[ 2x^2 \right]_0^1 = 2^k \cdot 2 = 2^{k+1}$
The induction holds, so $u_n = 2^n$ is true for all $n \geq 0$.

$u_{1000} = 2^{1000}$.

【Quick Shortcut】
Notice that $u_{n-1}$ is independent of $x$, so it can be taken outside the integral sign: $u_n = u_{n-1} \int_0^1 4x \, dx = 2 u_{n-1}$. This is a geometric progression with a common ratio of $2$ and a first term of $1$, so $u_n = 2^n$.

---

### Question 11 (2020 P2 Q3 · Proof)

**Syllabus**: Prf1-Prf5

**Question**: A student makes the following claim:

For all integers $n$, the expression $4 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right)$ is divisible by 3.

Here is the student’s argument:

$$ 4 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right) = 2 \left( 2 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right) \right) \quad \text{(I)} $$
$$ = 2(9n + 1 - 3n - 1) \quad \text{(II)} $$
$$ = 2(6n) \quad \text{(III)} $$
$$ = 12n \quad \text{(IV)} $$
$$ = 3(4n) \quad \text{(V)} $$

which is always a multiple of 3. (VI)

So the expression $4 \left( \frac{9n + 1}{2} - \frac{3n - 1}{2} \right)$ is always divisible by 3.

Which one of the following is true?

**Options**:
- **A**: The argument is correct.
- **B**: The argument is incorrect, and the first error occurs on line (I).
- **C**: The argument is incorrect, and the first error occurs on line (II).
- **D**: The argument is incorrect, and the first error occurs on line (III).
- **E**: The argument is incorrect, and the first error occurs on line (IV).
- **F**: The argument is incorrect, and the first error occurs on line (V).
- **G**: The argument is incorrect, and the first error occurs on line (VI).

**Correct Answer**: C

【Question Analysis】
Student's argument: $4((9n+1)/2-(3n-1)/2)$ is divisible by 3.
Identify the line with the first error.

【Solution Steps】
(I): $4(...)=2(2(...))$ ✓ Identity transformation
(II): $2(2((9n+1)/2-(3n-1)/2))=2(9n+1-3n-1)$
     $2\cdot((9n+1)/2-(3n-1)/2)=(9n+1)-(3n-1)=9n+1-3n+1=6n+2$
     But the student wrote it as $9n+1-3n-1=6n$ ✗

The first error is on line (II).

---

### Question 12 (2018 P2 Q12 · Logic)

**Syllabus**: Arg1-Arg4

**Question**: > For any positive integer $N$ there is a positive integer $K$ such that $N(Km + 1) - 1$ is not prime for any positive integer $m$.

Which one of the following is the negation of this statement?

**Options**:
- **A**: For any positive integer $N$ there is a positive integer $K$ such that there is a positive integer $m$ for which $N(Km + 1) - 1$ is prime.
- **B**: For any positive integer $N$ there is a positive integer $K$ such that there is a positive integer $m$ for which $N(Km + 1) - 1$ is not prime.
- **C**: For any positive integer $N$ there is a positive integer $K$ such that for any positive integer $m$, $N(Km + 1) - 1$ is not prime.
- **D**: For any positive integer $N$, any positive integer $K$ and any positive integer $m$, $N(Km + 1) - 1$ is not prime.
- **E**: There is a positive integer $N$ such that for any positive integer $K$ there is a positive integer $m$ for which $N(Km + 1) - 1$ is not prime.
- **F**: There is a positive integer $N$ such that for any positive integer $K$ there is a positive integer $m$ for which $N(Km + 1) - 1$ is prime.
- **G**: There is a positive integer $N$ such that for any positive integer $K$ and any positive integer $m$, $N(Km + 1) - 1$ is prime.
- **H**: There is a positive integer $N$ and a positive integer $K$ for which there is no positive integer $m$ for which $N(Km + 1) - 1$ is prime.

**Correct Answer**: F

【Question Analysis】
This question tests the logical rules of quantifying negation: universal quantifiers $\forall$ and existential quantifiers $\exists$ are swapped, and the internal proposition is negated. The original statement contains three nested layers of quantifiers, which need to be negated layer by layer.

【Solution Steps】
The structure of the original proposition is:
$$\forall N \in \mathbb{Z}^+, \; \exists K \in \mathbb{Z}^+, \; \forall m \in \mathbb{Z}^+, \; N(Km + 1) - 1 \text{ is not prime}$$

Negating layer by layer:
First layer: Negate $\forall N$ to $\exists N$.
Second layer: Negate $\exists K$ to $\forall K$.
Third layer: Negate $\forall m$ to $\exists m$.
Fourth layer: Negate "is not prime" to "is prime".

Combining these gives the negated proposition:
$$\exists N \in \mathbb{Z}^+, \; \forall K \in \mathbb{Z}^+, \; \exists m \in \mathbb{Z}^+, \; N(Km + 1) - 1 \text{ is prime}$$

Expressed in natural language: There is a positive integer $N$ such that for any positive integer $K$ there is a positive integer $m$ for which $N(Km + 1) - 1$ is prime.

Comparing against the options, Option F perfectly matches this statement. Elimination process: A through D still start with "for any $N$", failing to negate the first layer; H starts with "There is a positive integer $N$ and a positive integer $K$", failing to negate the second layer; G ends with "is prime" but still has double negation issues unresolved elsewhere.

【Quick Shortcut】
Mnemonic for quantifier negation: "All" becomes "exists", "exists" becomes "all", and finally negate the conclusion. Swap layer by layer: $\forall \to \exists$, $\exists \to \forall$, and reverse the internal proposition. Note that the negation of "is not prime" is "is prime" (double negation).

---

### Question 13 (2016 P2 Q2 · Differentiation)

**Syllabus**: MM6.1-MM6.3

**Question**: $$f(x) = \frac{(x^{2} + 5)(2x)}{\sqrt[4]{x^{3}}} \text{ , } \quad x > 0$$

Which one of the following is equal to $f'(x)$ ?

**Options**:
- **A**: $8x^{\frac{9}{4}} + \frac{40}{3}x^{\frac{1}{4}}$
- **B**: $\frac{9}{2}x^{\frac{5}{4}} + \frac{5}{2}x^{-\frac{3}{4}}$
- **C**: $8x^{\frac{9}{4}} + \frac{40}{3}x^{-\frac{1}{4}}$
- **D**: $\frac{8}{13}x^{\frac{13}{4}} + 8x^{\frac{5}{4}}$

**Correct Answer**: B

【Question Analysis】
This question tests finding the derivative of a function. The denominator in $f(x) = \frac{(x^2+5)(2x)}{\sqrt[4]{x^3}}$ contains a fourth root, and applying the quotient rule directly would be tedious. The correct approach is to simplify the function expression first: write the denominator $\sqrt[4]{x^3}$ as $x^{\frac{3}{4}}$, expand the numerator, divide term by term by the denominator to transform it into a sum of power functions, and then use the power rule $\frac{d}{dx}x^n = nx^{n-1}$ to differentiate term by term. This is the standard technique for dealing with derivatives involving radicals.

【Solution Steps】
Step 1: Simplify the function
Numerator: $(x^2+5)(2x) = 2x^3 + 10x$
Denominator: $\sqrt[4]{x^3} = x^{\frac{3}{4}}$
$f(x) = \frac{2x^3 + 10x}{x^{\frac{3}{4}}} = 2x^{3-\frac{3}{4}} + 10x^{1-\frac{3}{4}} = 2x^{\frac{9}{4}} + 10x^{\frac{1}{4}}$

Step 2: Differentiate term by term
$f'(x) = 2 \cdot \frac{9}{4}x^{\frac{9}{4}-1} + 10 \cdot \frac{1}{4}x^{\frac{1}{4}-1} = \frac{9}{2}x^{\frac{5}{4}} + \frac{5}{2}x^{-\frac{3}{4}}$

Step 3: Compare with the options
The result completely matches Option B.

【Quick Shortcut】
Simplifying before differentiating is always easier than directly applying the quotient rule. The key is to convert radicals into fractional exponents, expand the numerator, and divide each term by the denominator, transforming it into a linear combination of power functions.

---

### Question 14 (2017 P2 Q1 · Differentiation)

**Syllabus**: MM6.1-MM6.3

**Question**: Given that $y = \frac{(1 - 3x)^2}{2x^{\frac{3}{2}}}$, which one of the following is a correct expression for $\frac{dy}{dx}$?

**Options**:
- **A**: $\frac{9}{4}x^{-\frac{1}{2}} + \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$
- **B**: $\frac{9}{4}x^{-\frac{1}{2}} - \frac{3}{2}x^{-\frac{3}{2}} + \frac{3}{4}x^{-\frac{5}{2}}$
- **C**: $\frac{9}{4}x^{-\frac{1}{2}} - \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$
- **D**: $-\frac{9}{4}x^{-\frac{1}{2}} + \frac{3}{2}x^{-\frac{3}{2}} + \frac{3}{4}x^{-\frac{5}{2}}$
- **E**: $-\frac{9}{4}x^{-\frac{1}{2}} + \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$
- **F**: $-\frac{9}{4}x^{-\frac{1}{2}} - \frac{3}{2}x^{-\frac{3}{2}} - \frac{3}{4}x^{-\frac{5}{2}}$

**Correct Answer**: A

【Question Analysis】
The task is to differentiate the function $y = \dfrac{(1 - 3x)^2}{2x^{\frac{3}{2}}}$ and select the correct expression for $\dfrac{dy}{dx}$ from the six options. The key strategy is to expand the fraction into an algebraic sum of power functions first, and then differentiate term by term to avoid the complicated calculations of the quotient rule.

【Solution Steps】
Step 1: Expand the numerator and split the terms. $(1 - 3x)^2 = 1 - 6x + 9x^2$. Substitute into the original equation:
$$y = \frac{1 - 6x + 9x^2}{2x^{\frac{3}{2}}} = \frac{1}{2}x^{-\frac{3}{2}} - 3x^{-\frac{1}{2}} + \frac{9}{2}x^{\frac{1}{2}}$$
Step 2: Apply the power rule $\dfrac{d}{dx}(x^n) = nx^{n-1}$ term by term.
First term: $\dfrac{1}{2} \cdot \left(-\dfrac{3}{2}\right)x^{-\frac{5}{2}} = -\dfrac{3}{4}x^{-\frac{5}{2}}$
Second term: $-3 \cdot \left(-\dfrac{1}{2}\right)x^{-\frac{3}{2}} = \dfrac{3}{2}x^{-\frac{3}{2}}$
Third term: $\dfrac{9}{2} \cdot \dfrac{1}{2}x^{-\frac{1}{2}} = \dfrac{9}{4}x^{-\frac{1}{2}}$
Step 3: Combine the results to get $\dfrac{dy}{dx} = \dfrac{9}{4}x^{-\frac{1}{2}} + \dfrac{3}{2}x^{-\frac{3}{2}} - \dfrac{3}{4}x^{-\frac{5}{2}}$, corresponding to Option A.

【Quick Shortcut】
Expanding into power functions and then differentiating is the simplest method, much faster than the quotient rule. Note that the middle term $-6x \div 2x^{3/2} = -3x^{-1/2}$, its derivative changes sign to positive, which is key to distinguishing the options.

---

### Question 15 (2022 P2 Q1 · Differentiation)

**Syllabus**: MM6.1-MM6.3

**Question**: Determine the number of stationary points on the curve with equation

$$y = 3x^4 + 4x^3 + 6x^2 - 5$$

**Options**:
- **A**: 0
- **B**: 1
- **C**: 2
- **D**: 3
- **E**: 4

**Correct Answer**: B

【Question Analysis】
The question requires determining the number of stationary points on the curve $y = 3x^4 + 4x^3 + 6x^2 - 5$. Stationary points occur where the derivative is zero, so the core task is to find the derivative, solve the equation, and determine the number of real roots.

【Solution Steps】
Step 1: Differentiate the function
$$\frac{\mathrm{d}y}{\mathrm{d}x} = 12x^3 + 12x^2 + 12x$$

Step 2: Set the derivative to zero and solve the equation
$$12x^3 + 12x^2 + 12x = 0 \quad\Longrightarrow\quad 12x(x^2 + x + 1) = 0$$

Step 3: Analyse the factors
From $12x = 0$ we get $x = 0$.
For the quadratic factor $x^2 + x + 1 = 0$, the discriminant is $\Delta = 1^2 - 4 \times 1 \times 1 = -3 < 0$, so there are no real roots.

Therefore, the equation has only one real root $x = 0$, meaning there is only one stationary point.

【Quick Shortcut】
After differentiating, extract the common factor $12x$. The remaining quadratic has a negative discriminant, directly showing there is only one real root, requiring no further calculation.

---

### Question 16 (2018 P2 Q1 · Differentiation)

**Syllabus**: MM6.1-MM6.3

**Question**: The function f is given, for $x > 0$, by

$$f(x) = \frac{x^3 - 4x}{2\sqrt{x}}$$

Find the value of $f'(4)$.

**Options**:
- **A**: 3
- **B**: 9
- **C**: 9.5
- **D**: 12
- **E**: 39.5
- **F**: 88

**Correct Answer**: C

【Question Analysis】
Given the function $f(x)=\dfrac{x^3-4x}{2\sqrt{x}}$ ($x>0$), find the value of $f'(4)$. The core of this question is to use exponent rules to simplify the fraction first, then differentiate the resulting power functions term by term, and finally substitute the value. Applying the quotient rule directly to the original fraction would be very cumbersome; simplification is the key breakthrough.

【Solution Steps】
First divide each term in the numerator by the denominator:
$$f(x)=\frac{x^3}{2x^{1/2}}-\frac{4x}{2x^{1/2}}=\frac{1}{2}x^{5/2}-2x^{1/2}$$

Use the power rule $\dfrac{d}{dx}(x^n)=nx^{n-1}$:
$$f'(x)=\frac{1}{2}\cdot\frac{5}{2}x^{3/2}-2\cdot\frac{1}{2}x^{-1/2}=\frac{5}{4}x^{3/2}-x^{-1/2}$$

Substitute $x=4$:
$$f'(4)=\frac{5}{4}\cdot 4^{3/2}-4^{-1/2}=\frac{5}{4}\cdot 8-\frac{1}{2}=10-\frac{1}{2}=9.5$$

【Quick Shortcut】
Simplifying into power functions first is the only efficient path for this question. Remember that $\sqrt{x}=x^{1/2}$ and division means subtracting exponents: $x^3\div x^{1/2}=x^{5/2}$. After simplification, differentiation is done in one step. Be mindful that $4^{3/2}=(\sqrt{4})^3=2^3=8$ when substituting.

---

### Question 17 (2017 P2 Q10 · Integration)

**Syllabus**: MM7.1-MM7.6

**Question**: $f(x)$ is a function defined for all real values of $x$.

Which one of the following is a **sufficient** condition for $\int_{1}^{3} f(x) dx = 0$?

**Options**:
- **A**: $f(2) = 0$
- **B**: $f(1) = f(3) = 0$
- **C**: $f(-x) = -f(x)$ for all $x$
- **D**: $f(x + 2) = -f(2 - x)$ for all $x$
- **E**: $f(x - 2) = -f(2 - x)$ for all $x$

**Correct Answer**: D

【Question Analysis】
Find the sufficient condition for $\int_1^3 f(x)\,dx=0$. A sufficient condition means: as long as the condition holds, the integral must be zero.

【Solution Steps】
Analyse step by step:
Option A: $f(2)=0$. A single point value cannot determine the integral over an entire interval. For example, $f(x)=(x-2)^2$ satisfies $f(2)=0$ but $\int_1^3 (x-2)^2\,dx>0$, not sufficient.
Option B: $f(1)=f(3)=0$. Zeroes at endpoints also do not guarantee the integral is zero. For example, $f(x)=(x-1)(x-3)$ is consistently negative on $[1,3]$, giving a non-zero integral, not sufficient.
Option C: $f(-x)=-f(x)$, meaning $f$ is an odd function. Odd functions are symmetric about the origin, but the integration interval $[1,3]$ is not symmetric about the origin, so it's not sufficient. For example, $f(x)=x$ is an odd function but $\int_1^3 x\,dx=4\neq 0$.
Option E: $f(x-2)=-f(2-x)$. Let $y=2-x$, then $f(-y)=-f(y)$, which is equivalent to Option C, not sufficient.
Option D: $f(x+2)=-f(2-x)$, i.e., $f(2+x)=-f(2-x)$. This implies that $f$ is centrally symmetric about the point $(2,0)$. Let $u=x-2$, then $\int_1^3 f(x)\,dx=\int_{-1}^1 f(u+2)\,du$. By the symmetry $f(u+2)=-f(2-u)$, we know the integrand is an odd function with respect to $u=0$ on $[-1,1]$, making the integral zero.

【Quick Shortcut】
The condition $f(2+x)=-f(2-x)$ in Option D means the graph is rotationally symmetric about $(2,0)$. The interval $[1,3]$ is symmetric about $x=2$, and the positive and negative areas exactly cancel out over the symmetric region.

---

### Question 18 (2017 P2 Q19 · Differentiation)

**Syllabus**: MM6.1-MM6.3

**Question**: Which one of the following is a **sufficient** condition for the equation $x^3 - 3x^2 + a = 0$, where $a$ is a constant, to have exactly one real root?

**Options**:
- **A**: $a > 0$
- **B**: $a \leqslant 0$
- **C**: $a \geqslant 4$
- **D**: $a < 4$
- **E**: $|a| > 4$
- **F**: $|a| \leqslant 4$
- **G**: $a = \frac{9}{4}$
- **H**: $|a| = \frac{3}{2}$

**Correct Answer**: E

【Question Analysis】
This question examines the relationship between the number of real roots of a cubic equation and the range of parameters, combining differentiation and functions. We need to find the sufficient condition for the equation $x^3-3x^2+a=0$ to have exactly one real root. The meaning of a sufficient condition is: if the condition holds, the conclusion must hold (but the conclusion can hold without this condition).

【Solution Steps】
Let $f(x)=x^3-3x^2+a$. Find the stationary points:
$f'(x)=3x^2-6x=3x(x-2)=0$, giving stationary points $x=0$ and $x=2$.

Calculate the function values:
$f(0)=a$ (local maximum point), $f(2)=8-12+a=a-4$ (local minimum point).

The cubic function's graph roughly forms an N-shape (the leading coefficient is positive). The necessary and sufficient condition for the equation to have exactly one real root is that the local maximum and local minimum are on the same side of the $x$-axis. That is:
Maximum $<0$: $a<0$; or
Minimum $>0$: $a-4>0$, i.e., $a>4$.

Therefore, the necessary and sufficient condition is $a<0$ or $a>4$, but this is not among the options. The question asks for a sufficient condition, which means the range given in the option must be a proper subset of the above range.

Check each option:
A: $a>0$ includes $a=1$ (which gives two roots), not sufficient.
B: $a\leq 0$ includes $a=0$ (where $x=0$ is a repeated root, meaning more than one real root), not sufficient.
C: $a\geq 4$ includes $a=4$ (maximum is on the axis, more than one real root), not sufficient.
D: $a<4$ includes $a=1$, not sufficient.
E: $|a|>4$ is equivalent to $a>4$ or $a<-4$, both of which fall within the valid range, so it is sufficient.
G: $a=\frac{9}{4}$ falls in $(0,4)$, giving three real roots, not sufficient.
H: $|a|=\frac{3}{2}$ includes positive and negative values; the positive side is not sufficient.

【Quick Shortcut】
First, determine that the necessary and sufficient condition is $|a|>4$ (i.e., $a>4$ or $a<0$), then find a subset among the options. Option E's $|a|>4$ is exactly a part of the necessary and sufficient condition (it excludes $-4\leq a<0$), thus serving as a sufficient condition.

---

### Question 19 (2017 P2 Q16 · Counterexamples)

**Syllabus**: Prf1, Err1-Err2

**Question**: Consider the following statement:

> ($\ast$) **If** $f(x)$ is an integer for every integer $x$, **then** $f'(x)$ is an integer for every integer $x$.

Which one of the following is a **counterexample** to ($\ast$)?

**Options**:
- **A**: $f(x) = \frac{x^3 + x + 1}{4}$
- **B**: $f(x) = \frac{x^4 + x^2 + x}{2}$
- **C**: $f(x) = \frac{x^4 + x^3 + x^2 + x}{2}$
- **D**: $f(x) = \frac{x^4 + 2x^3 + x^2}{4}$

**Correct Answer**: C

【Question Analysis】
This question tests constructing and verifying counterexamples. Proposition: If a function takes integer values for all integers, then its derivative also takes integer values for all integers. You need to find a function where the premise holds but the conclusion does not, to serve as a counterexample.

【Solution Steps】
A counterexample must satisfy two conditions simultaneously:
Condition 1: For all integers, $f(x)$ is an integer.
Condition 2: There exists some integer $x$ such that the derivative is not an integer.

Use simple values for quick filtering. Substitute:
$A$: $f(0) = 1/4$, fails condition 1, reject.
$B$: $f(1) = 3/2$, fails condition 1, reject.
$C$: $f(0) = 0$, $f(1) = 2$, both are integers.
$D$: $f(0) = 0$, $f(1) = 1$, both are integers.

Check the derivatives for $C$ and $D$:
$C$: $f'(x) = \frac{4x^3 + 3x^2 + 2x + 1}{2}$, $f'(0) = 1/2$, which is not an integer.
$D$: $f'(x) = \frac{4x^3 + 6x^2 + 2x}{4}$, $f'(0) = 0$, which is an integer.

Thus, $C$ is the candidate counterexample. Verify condition 1: Factorising gives
$f(x) = \frac{x(x+1)(x^2+1)}{2}$
For any integer, $x(x+1)$ is the product of two consecutive integers, which is always even. Thus the numerator is always even, meaning $f(x)$ is consistently an integer.

Verify that $D$ is not a counterexample: $f'(x) = \frac{x(x+1)(2x+1)}{2}$. The numerator here is also always even, so the derivative is always an integer.

【Quick Shortcut】
First use substitution to eliminate $A$ and $B$. To distinguish between $C$ and $D$, find their derivatives and substitute $0$: $C$'s derivative at $0$ is $1/2$, while $D$'s derivative at $0$ is $0$.

---

### Question 20 (2022 P2 Q19 · Proof)

**Syllabus**: Prf1-Prf5

**Question**: A polygon has $n$ vertices, where $n \geq 3$. It has the following properties:

*   Every vertex of the polygon lies on the circumference of a circle $C$.
*   The centre of the circle $C$ is inside the polygon.
*   The radii from the centre of the circle $C$ to the vertices of the polygon cut the polygon into $n$ triangles of equal area.

For which values of $n$ are these properties **sufficient** to deduce that the polygon is regular?

**Options**:
- **A**: no values of $n$
- **B**: $n = 3$ only
- **C**: $n = 3$ and $n = 4$ only
- **D**: $n = 3$ and $n \geq 5$ only
- **E**: all values of $n$

**Correct Answer**: B

【Question Analysis】
An $n$-sided polygon satisfies: all vertices lie on a circle $C$, the centre of the circle is inside the polygon, and the radii from the centre to each vertex divide the polygon into $n$ triangles of equal area. Which values of $n$ are sufficient to deduce that the polygon is regular?

【Solution Steps】
Let the circle's radius be $r$, and the central angle for the $i$-th triangle be $\theta_i$, then its area is $\frac{1}{2}r^2\sin\theta_i$. Equal areas mean all $\sin\theta_i$ are equal. Since $\sin\theta = \sin\phi$ if and only if $\phi = \theta$ or $\phi = \pi - \theta$, the central angles can take two possible values: $\theta$ and $\pi - \theta$.

Assume there are $k$ angles equal to $\pi - \theta$ and $n-k$ angles equal to $\theta$. Then $(n-k)\theta + k(\pi - \theta) = 2\pi$, which simplifies to $(n-2k)\theta = (2-k)\pi$.

For $n=3$: Check $k=1,2,3$ individually. When $k=1$, $\theta = \pi$, invalid; when $k=2$, $\theta = 0$, invalid; when $k=3$, $\theta = \frac{\pi}{3}$, meaning all three angles are equal, yielding an equilateral triangle. Therefore, for $n=3$, it must be a regular polygon.

For $n=4$: When $k=2$, the equation degenerates to $0=0$, and any $\theta$ works. Take $\theta \neq \frac{\pi}{2}$, we have two angles of $\theta$ and two of $\pi-\theta$, forming a non-square rectangle, which satisfies the conditions but is not a regular polygon.

For $n \geq 5$: When $k=1$, $\theta = \frac{\pi}{n-2} < \frac{\pi}{2}$, which is an acute angle, providing a valid construction of a non-regular polygon.

Therefore, only $n=3$ is sufficient to deduce a regular polygon.

【Quick Shortcut】
The key is that equal $\sin\theta_i$ does not mean equal $\theta_i$. Because of the supplementary angles $\theta$ and $\pi-\theta$, one can always construct a non-regular polygon counterexample for $n \geq 4$. Only when $n=3$ does the equation yield no solution other than the equilateral triangle.

---



## ⚡ Exam Time Allocation Strategy

### Overall Principles

TMUA each paper **75 minutes / 20 questions ≈ 3.75 minutes/question** (it is recommended to keep the average time per question under 2 minutes, leaving 15 minutes for checking). In reality, not every question takes the same amount of time:

| Stage | Time | Task | Goal |
|------|------|------|------|
| Round 1: Quick Scan | 0-5 mins | Quickly scan the whole paper, mark difficulty | Identify "instant kill" questions and "hard" questions |
| Round 2: Secure Marks | 5-55 mins | Complete 12-14 confident questions | Ensure baseline marks |
| Round 3: Tackle Hard Ones | 55-70 mins | Solve marked medium-difficulty questions | Aim for a high score |
| Round 4: Review | 70-75 mins | Check calculations, fill in answers | Avoid careless point losses |

### Paper 1 Time Allocation (Focus on Calculation Speed)

| Question Type | Estimated Time | Quantity | Total Time |
|------|---------|------|--------|
| Direct Calculation (Algebra, Trig, Sequences) | 2 mins | 8 questions | 16 mins |
| Medium Calculation (Coordinate Geo, Differentiation, Integration) | 3 mins | 8 questions | 24 mins |
| Complex Comprehensive (Multi-step, Graph Transformations) | 4-5 mins | 4 questions | 18 mins |
| Checking and Review | — | — | 12 mins |
| **Buffer Time** | — | — | **5 mins** |

### Paper 2 Time Allocation (Focus on Reasoning Depth)

| Question Type | Estimated Time | Quantity | Total Time |
|------|---------|------|--------|
| Logic Judgment (Arg type) | 2-3 mins | 5 questions | 12 mins |
| Proof Analysis (Prf type) | 4-5 mins | 4 questions | 18 mins |
| Error Identification (Err type) | 3 mins | 3 questions | 9 mins |
| Comprehensive Mathematical Reasoning | 4-5 mins | 8 questions | 35 mins |
| **Buffer Time** | — | — | **1 min** |

### ⚡ Quick Problem Solving Tips

1. **Substitution**: For multiple-choice questions, substitute options to verify, especially for equation-solving problems
2. **Elimination**: Eliminate obviously incorrect options first to narrow down choices
3. **Special Values**: Use special values like $x = 0, 1, -1$ to test options
4. **Estimation**: For questions involving approximations, estimate the order of magnitude first
5. **Graphing**: Use rough sketches to help determine function properties and intersections

---

## ⚠️ Common Time Management Traps

### 🚫 Trap 1: Spending too much time on one question

- **Symptoms**: Thinking about a question for over 5 minutes with no clue
- **Solution**: If no progress after 3 minutes, mark it, skip, and come back after completing the whole paper
- **Remember**: Even if you give up on 3 out of 20 questions, you still have a chance to get 85% of the marks

### 🚫 Trap 2: Over-checking completed questions

- **Symptoms**: Repeatedly checking a question after finishing it, delaying subsequent progress
- **Solution**: Do not look back after the first pass; leave the last 5 minutes for a unified check
- **Principle**: The probability of getting it right the first time > the probability of finding an error while checking

### 🚫 Trap 3: Getting stuck in lengthy calculations in Paper 2

- **Symptoms**: Trying to brute-force P2 questions with algebra, ignoring shortcuts through logical reasoning
- **Solution**: The core of P2 is reasoning, not calculation. First ask yourself: "What logic is this question testing?"
- **Hint**: If a P2 question requires extensive calculation, you are likely heading in the wrong direction

### 🚫 Trap 4: Ignoring unit conversions and signs

- **Symptoms**: Confusing radians and degrees, mixing up positive and negative signs
- **Solution**: Circle key conditions while reading the question (e.g., "radian", "positive")
- **Common Errors**: Value ranges for $sin$ and $cos$, domain of $\log$

### 🚫 Trap 5: Mistakes in filling the answer sheet

- **Symptoms**: Calculating the correct answer but shading the wrong bubble, or missing a bubble
- **Solution**: Shade answers in batches of 5 to avoid a last-minute rush
- **Check**: Use the last minute to verify that question numbers match the shaded answers

---

## 📌 Summary of Answering Techniques

### Paper 1 Core Techniques

| Technique | Application | Example |
|------|---------|------|
| Coefficient Matching | Polynomial expansion, identities | Comparing coefficients in $(ax+b)^3$ |
| Discriminant Method | Roots of quadratic equations | Using $b^2 - 4ac$ to determine intersections |
| Derivative for Monotonicity | Increasing/decreasing nature, extrema | $f'(x) > 0$ means increasing |
| Piecewise Area Integration | Area enclosed by curves and axes | Split integral at zero crossings and take absolute value |
| Completing the Square | Circle equations, quadratic extrema | $x^2 + bx + c = (x + \frac{b}{2})^2 + \cdots$ |
| Trig Identity Transformation | Simplifying trig equations | $cos^2\theta = 1 - sin^2\theta$ |

### Paper 2 Core Techniques

| Technique | Application | Example |
|------|---------|------|
| Contrapositive Equivalence | Logical reasoning questions | "If A then B" is equivalent to "If not B then not A" |
| Proof by Contradiction | Proof questions | Assume the conclusion is false and derive a contradiction |
| Counterexample Method | Falsifying propositions | Find a specific example where the proposition fails |
| Case Analysis | Reasoning with parameters | Discuss positive/negative or magnitude relationships of parameters |
| Necessary vs Sufficient Condition | Logical judgment | "A is necessary for B" = "B → A" |
| Quantifier Negation | Propositions with "all" or "exists" | The negation of "All x satisfy P" is "There exists x not satisfying P" |

### General Strategies

1. **Read three times**: First to get the gist, second to extract key info, third to confirm the question
2. **Draw diagrams**: Always sketch for coordinate geometry, function graphs, and geometry questions
3. **Unify units**: Radians vs degrees, area vs volume; pay attention to requirements
4. **Checking habits**: Verify key steps using an alternative method
5. **Leave no blanks**: TMUA has no negative marking, answer every question

---

## 📚 Recommended Past Paper Combinations for Practice

Below are listed by year and difficulty; phased practice is recommended:

### Phase 1: Foundation Consolidation (Difficulty ⭐⭐)

| No. | Question | Syllabus | Difficulty | Suggested Time |
|------|------|------|------|---------|
| 1 | 2016 P1 Q1 | MM1 (Algebraic Expansion) | ⭐⭐ | 3 mins |
| 2 | 2016 P1 Q4 | MM2 (Sum of Sequences) | ⭐⭐ | 3 mins |
| 3 | 2017 P1 Q7 | MM2 (Geometric Progression) | ⭐⭐ | 3 mins |
| 4 | 2016 P1 Q5 | MM7 (Definite Integral Area) | ⭐⭐ | 4 mins |
| 5 | 2021 P1 Q1 | MM3 (Line Equations) | ⭐⭐ | 3 mins |
| 6 | 2017 P1 Q3 | MM3 (Perpendicular Lines and Area) | ⭐⭐ | 4 mins |
| 7 | 2020 P1 Q4 | MM1 (Quadratic Functions) | ⭐⭐ | 3 mins |
| 8 | 2016 P2 Q4 | Arg1-Arg4 (Logical Reasoning) | ⭐⭐ | 3 mins |

### Phase 2: Skill Enhancement (Difficulty ⭐⭐⭐)

| No. | Question | Syllabus | Difficulty | Suggested Time |
|------|------|------|------|---------|
| 1 | 2018 P1 Q14 | MM1.6 (Factor Theorem) | ⭐⭐⭐ | 4 mins |
| 2 | 2019 P1 Q12 | MM7 (Definite Integral Calculation) | ⭐⭐⭐ | 4 mins |
| 3 | 2021 P1 Q8 | MM3 (Circle Equations) | ⭐⭐⭐ | 4 mins |
| 4 | 2019 P1 Q17 | MM4 (Trig Identities) | ⭐⭐⭐ | 4 mins |
| 5 | 2022 P1 Q14 | MM4 (Sine and Cosine Rules) | ⭐⭐⭐ | 4 mins |
| 6 | 2016 P1 Q8 | MM4 (Trig Equations) | ⭐⭐⭐ | 5 mins |
| 7 | 2016 P2 Q9 | Prf1-Prf5 (Proof Analysis) | ⭐⭐⭐ | 4 mins |
| 8 | 2020 P2 Q3 | Prf1-Prf5 (Proof by Contradiction) | ⭐⭐⭐ | 5 mins |
| 9 | 2016 P1 Q3 | MM6 (Normals and Distance) | ⭐⭐⭐ | 5 mins |
| 10 | 2020 P1 Q1 | MM6 (Stationary Points) | ⭐⭐⭐ | 4 mins |

### Phase 3: Final Sprint (Difficulty ⭐⭐⭐⭐)

| No. | Question | Syllabus | Difficulty | Suggested Time |
|------|------|------|------|---------|
| 1 | 2022 P1 Q18 | MM8 (Comprehensive Graph Analysis) | ⭐⭐⭐⭐ | 5 mins |
| 2 | 2017 P1 Q17 | MM7 (Trapezium Rule and Area) | ⭐⭐⭐⭐ | 5 mins |
| 3 | 2020 P1 Q15 | MM5 (Comprehensive Exponential Equations) | ⭐⭐⭐⭐ | 5 mins |
| 4 | 2017 P1 Q17 | MM7 (Integration and Sequences) | ⭐⭐⭐⭐ | 5 mins |
| 5 | 2017 P2 Q19 | MM6 + Prf5 (Complex Reasoning Chains) | ⭐⭐⭐⭐ | 6 mins |
| 6 | 2022 P2 Q19 | Prf5 (In-depth Reasoning) | ⭐⭐⭐⭐ | 6 mins |
| 7 | 2016 P2 Q18 | Err1-Err2 (Error Identification) | ⭐⭐⭐⭐ | 5 mins |
| 8 | 2017 P2 Q17 | Arg1-Arg4 + Prf (Comprehensive Logic) | ⭐⭐⭐⭐ | 5 mins |

### Complete Mock Practice Schedule

| Practice Stage | Content | Time | Target Score |
|----------|------|------|---------|
| Week 1 | Paper 1 Mock (75 mins limit) | 75 min | ≥ 12/20 |
| Week 1 | Paper 2 Mock (75 mins limit) | 75 min | ≥ 10/20 |
| Week 2 | Redo mistakes + Targeted weak points practice | 90 min | Fill knowledge gaps |
| Week 2 | Full Mock (P1 + P2 continuous, 150 mins) | 150 min | ≥ 24/40 |
| 3 days before exam | Selected past paper combos (Phase 3) | 60 min | Maintain momentum |

---

## 🎯 Mock Exam

Ready? [→ Start TMUA Mock Exam](/practice/tmua/) (Select year and Paper, 75 minutes limit)

---

*All questions in this lecture note are from TMUA past papers (2016-2023), each with detailed solutions.*
*It is recommended to use the complete question database for targeted intensive practice.*
