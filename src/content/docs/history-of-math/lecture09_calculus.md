---
title: "Lecture 9: Calculus—From Exhaustion to Rules of Calculation"
---

## Lecture 9: Calculus—From Exhaustion to Rules of Calculation

## Lecture Line

This lecture should not be a story about the priority dispute between Newton and Leibniz. It is about how a mathematical method formed. Greek exhaustion could prove certain area results, but it did not easily become a general classroom algorithm. In the 17th century, areas, volumes, tangents, and extrema were turned into repeatable algebraic procedures.

Stillwell Chapter 9 emphasizes the computational character of early calculus: Cavalieri and Fermat treated areas under powers, Fermat treated tangents and extrema, Wallis generalized by analogy and interpolation, Newton treated functions as infinite series, and Leibniz supplied notation and rules.

Students should actually do three things:

- derive an area from power sums;
- use Fermat's small quantity $E$ to find a tangent;
- derive a logarithm series from a geometric series.

## Entry Problem: Why Exhaustion Was Not Enough

Archimedes could use exhaustion to find the area of a parabolic segment and the volume of a sphere. But these arguments were usually designed for one object at a time. They were brilliant proofs, not a general calculation machine.

Seventeenth-century mathematicians faced a broader set of questions:

- What is the area under $y=x^k$?
- How should volumes of solids of revolution be calculated?
- What is the tangent to a curve at a point?
- Where does a function reach a maximum or minimum?
- Can logarithms and trigonometric quantities be computed systematically?

The early strength of calculus was that it replaced special ingenuity with rules of calculation.

## 1. Areas and Volumes Become Power Sums

Consider the area under $y=x^k$ on $[0,a]$. Divide the interval into $n$ equal parts and use right-endpoint rectangles. The approximation is

$$
A_n=\frac{a}{n}\left[\left(\frac{a}{n}\right)^k+\left(\frac{2a}{n}\right)^k+\cdots+\left(\frac{na}{n}\right)^k\right].
$$

So

$$
A_n=\frac{a^{k+1}}{n^{k+1}}(1^k+2^k+\cdots+n^k).
$$

An area problem has become a problem about sums of powers.

For $k=2$, use

$$
1^2+2^2+\cdots+n^2=\frac{n(n+1)(2n+1)}{6}.
$$

Then

$$
A_n=\frac{(n+1)(2n+1)}{6n^2}\to \frac13.
$$

Thus

$$
\int_0^1 x^2\,dx=\frac13.
$$

Work by Cavalieri, Fermat, and Roberval gradually produced the general pattern

$$
\int_0^a x^k\,dx=\frac{a^{k+1}}{k+1}.
$$

The historical point is that integration began close to summation, approximation, and power sums.

## 2. Fermat's Tangent Method

Tangents matured later than areas because a tangent asks for an instantaneous direction.

For $y=x^2$, compare the points at $x$ and $x+E$:

$$
\frac{(x+E)^2-x^2}{E}
=\frac{2xE+E^2}{E}
=2x+E.
$$

If $E$ is small, the secant is close to the tangent. Fermat then neglects the remaining $E$ and obtains slope $2x$.

Modern notation would write

$$
\lim_{E\to 0}(2x+E)=2x.
$$

But Fermat did not have modern limit language. He used $E$ as a nonzero quantity for algebraic division, then discarded the remaining small terms.

This raises a real foundational question:

- If $E=0$, how could we divide by $E$?
- If $E\ne 0$, why may it be discarded?

Early calculus worked before its foundations were fully explained.

For $y=x^3$:

$$
\frac{(x+E)^3-x^3}{E}
=3x^2+3xE+E^2.
$$

Neglecting terms with $E$ gives slope $3x^2$. Students can use this to guess

$$
\frac{d}{dx}x^k=kx^{k-1}.
$$

## 3. Curves as Equations Made Tangents Algebraic

Analytic geometry made tangent problems calculable because curves became equations.

For example, for

$$
y^2=x^3,
$$

modern implicit differentiation gives

$$
2y\frac{dy}{dx}=3x^2,
$$

so

$$
\frac{dy}{dx}=\frac{3x^2}{2y}.
$$

The point is not that Fermat wrote exactly this. The point is that once curves had equations, tangents could be attacked by algebraic manipulation rather than by geometric intuition alone.

## 4. Linearization: The Derivative Is More Than Slope

If the derivative is understood only as tangent slope, the power of calculus is understated. The deeper step is that, near a point, a function can first be replaced by a linear function.

Modern notation writes

$$
f(x+h)=f(x)+f'(x)h+\text{higher order terms}.
$$

The term $f'(x)h$ is the principal linear part of the change. Early mathematicians did not yet have this language, but they were already using the same idea: keep the first-order change and discard higher-order small quantities.

For example, estimate $\sqrt{10.4}$. Let $f(x)=\sqrt{x}$ and expand near $x=10$:

$$
f'(10)=\frac{1}{2\sqrt{10}}.
$$

Then

$$
\sqrt{10.4}\approx \sqrt{10}+\frac{0.4}{2\sqrt{10}}.
$$

This is not just drawing a tangent. It turns a difficult function value into a local linear calculation. Newton's method is the algorithmic version of the same idea.

To solve $f(x)=0$, replace the curve near the current estimate $x_k$ by its tangent line:

$$
y=f(x_k)+f'(x_k)(x-x_k).
$$

Set the tangent equal to zero:

$$
0=f(x_k)+f'(x_k)(x_{k+1}-x_k).
$$

Thus

$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}.
$$

For $f(x)=x^2-2$, this gives

$$
x_{k+1}=\frac12\left(x_k+\frac{2}{x_k}\right),
$$

a fast iteration for $\sqrt2$.

## 5. Wallis and Interpolation

Wallis's *Arithmetica Infinitorum* arithmetized areas and pushed formulas by analogy.

For integer $p$,

$$
\int_0^1 x^p\,dx=\frac{1}{p+1}.
$$

Wallis asked whether the same pattern should hold for fractional powers. If $p=\frac12$, the rule predicts

$$
\int_0^1 \sqrt{x}\,dx=\frac{2}{3}.
$$

Today this is easy to check. Historically it was a bold interpolation from tables and patterns.

This looseness mattered. It helped create the atmosphere in which Newton generalized the binomial theorem from positive integers to arbitrary exponents.

## 6. Newton: Calculus as the Algebra of Series

Newton's calculus was deeply tied to infinite series.

Start from

$$
\frac{1}{1+t}=1-t+t^2-t^3+\cdots,\quad |t|<1.
$$

Integrating from $0$ to $x$ gives Mercator's logarithm series:

$$
\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots.
$$

A logarithm can now be calculated like an infinite polynomial.

Newton also generalized the binomial theorem:

$$
(1+x)^p=1+px+\frac{p(p-1)}{2!}x^2+\frac{p(p-1)(p-2)}{3!}x^3+\cdots.
$$

For positive integer $p$, the series stops. For fractional or negative $p$, it continues indefinitely. This made functions such as $\sqrt{1+x}$ and $1/(1+x)$ part of the same computational language.

For instance,

$$
\sqrt{1+x}=1+\frac12x-\frac18x^2+\frac1{16}x^3-\cdots,\quad |x|<1.
$$

With $x=0.04$, the first three terms give

$$
1+0.02-0.0002=1.0198,
$$

very close to $\sqrt{1.04}$. The binomial theorem has become a tool for approximation, and it leads naturally into the next lecture on power series.

## 7. Newton Interpolation: From Tables to Functions

Stillwell repeatedly points out that early calculus did not come only from continuous curves. It also came from astronomical tables, numerical tables, and interpolation.

Interpolation asks: from several known values, can we construct a polynomial that organizes the data?

Take three points:

$$
(0,1),\quad (1,2),\quad (2,5).
$$

First differences are

$$
2-1=1,\quad 5-2=3.
$$

The second difference is

$$
3-1=2.
$$

The corresponding quadratic polynomial can be written

$$
P(x)=1+x+\frac{2}{2}x(x-1)=x^2+1.
$$

The point is not the formula itself. It is the idea that discrete table values can also be organized by local change. Finite differences play a role in the discrete world that resembles the derivative's role in the continuous world.

## 8. Leibniz: Notation as a Method

Leibniz wrote small changes as $dx,dy$ and integrals as

$$
\int y\,dx.
$$

The integral sign is an elongated $S$, suggesting summation. The notation $dy/dx$ treats a rate of change as a quotient of infinitesimal quantities.

For example, product rule can be motivated by

$$
d(uv)=(u+du)(v+dv)-uv
=u\,dv+v\,du+du\,dv.
$$

Neglecting the second-order term $du\,dv$ gives

$$
d(uv)=u\,dv+v\,du.
$$

Dividing by $dx$ gives

$$
\frac{d(uv)}{dx}=u\frac{dv}{dx}+v\frac{du}{dx}.
$$

Modern mathematics proves this rigorously, but Leibniz's notation already made the calculation natural and portable.

## 9. Rigor as a Later Question

Early calculus was powerful before it was foundationally settled. The question of infinitesimals remained serious: are they zero or nonzero?

Cauchy and Weierstrass later rebuilt calculus using limits. Nonstandard analysis later gave another rigorous interpretation of infinitesimals.

The historical lesson is not that early calculus was merely sloppy. It is that effective algorithms often appear before the language that fully explains them.

## Classroom Activities

### Activity A: Fermat's Extremum Method and Adequality

Fix the perimeter of a rectangle at $20$. Let one side be $x$, so the other is $10-x$. The area is

$$
A(x)=x(10-x).
$$

Do not begin with modern derivatives. Imitate Fermat by comparing $A(x+E)$ and $A(x)$:

$$
A(x+E)=(x+E)(10-x-E).
$$

Students should:

1. Expand $A(x+E)-A(x)$.
2. Discard the higher-order term involving $E^2$.
3. Set the remaining first-order term equal to $0$ and solve for $x$.
4. Check the answer using the modern derivative $A'(x)$.

The point is that a local extremum is where the first-order change disappears.

### Activity B: Area from Power Sums, With Error

Use right-endpoint rectangles for $y=x^2$ on $[0,1]$:

$$
A_n=\frac{1}{n}\left[\left(\frac1n\right)^2+\left(\frac2n\right)^2+\cdots+\left(\frac nn\right)^2\right].
$$

Use

$$
1^2+2^2+\cdots+n^2=\frac{n(n+1)(2n+1)}6.
$$

Students should:

1. Simplify $A_n$.
2. Compute $A_n-\frac13$.
3. Decide whether right-endpoint rectangles give an overestimate or underestimate.
4. Explain why the main error term is about $\frac{1}{2n}$.

Integration becomes not only a limit, but a controlled approximation.

### Activity C: Linearization and Local Approximation

Estimate $\sqrt{10.4}$ using $f(x)=\sqrt{x}$.

Take base point $x=10$ and $dx=0.4$. Students compute

$$
f'(10)=\frac{1}{2\sqrt{10}},
$$

so

$$
\sqrt{10.4}\approx \sqrt{10}+\frac{0.4}{2\sqrt{10}}.
$$

Then compare with a calculator.

Questions:

- Why is this really "using the tangent line instead of the curve"?
- Why would the same approximation be worse for $\sqrt{14}$?
- Besides slope, what does the derivative measure?

### Activity D: Newton's Method for $\sqrt2$

Students should derive the iteration from the tangent line.

Let

$$
f(x)=x^2-2.
$$

At the current estimate $x_k$, the tangent line is

$$
y=f(x_k)+f'(x_k)(x-x_k).
$$

Set $y=0$ to obtain

$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}
=\frac12\left(x_k+\frac{2}{x_k}\right).
$$

Start with $x_0=1.5$ and iterate twice. Compare $x_1,x_2$ with $\sqrt2$.

Final question: why is Newton's method often faster than bisection, and when might it fail?

### Activity E: Newton Interpolation and Finite Differences

Give students three points:

$$
(0,1),\quad (1,2),\quad (2,5).
$$

Do not tell them the function. Ask them to complete the difference table:

$$
\begin{array}{c|ccc}
x&0&1&2\\
\hline
y&1&2&5\\
\Delta y&&1&3\\
\Delta^2 y&&&2
\end{array}
$$

Students should:

1. Write a quadratic in the form $P(x)=a+bx+cx(x-1)$.
2. Use $P(0)=1$, $P(1)=2$, and $P(2)=5$ to find $a,b,c$.
3. Verify that $P(x)=x^2+1$.
4. Discuss whether the quadratic interpolation remains trustworthy if a fourth data point is $(3,11)$.

This activity connects Wallis's interpolation, Newton's table tradition, and the idea of change in calculus. It also warns that an interpolating polynomial organizes data but does not automatically reveal the true function.

## Discussion Questions

1. Fermat's adequality and the modern derivative both capture first-order change. What is the same, and what is different?
2. Why does an interior local extremum usually satisfy $f'(x)=0$? Where can this fail, such as endpoints or nondifferentiable points?
3. Among slope, rate of change, and linear approximation, which interpretation of derivative best explains Newton's method?
4. Early calculus had effective algorithms before complete foundations. When is that acceptable in mathematics, and when is it dangerous?
5. Wallis generalized area formulas by interpolation. How can we distinguish fruitful pattern recognition from unreliable guessing?
6. In Newton interpolation, finite differences and derivatives both describe change. Where are they similar, and where are they fundamentally different?
7. Newton's series method needs convergence; Leibniz's differential notation needs an interpretation of infinitesimals. What is the mathematical risk in each?
8. If a notation guides correct calculation before its foundation is fully settled, is it already a reliable mathematical tool?

## Further Directions

- Cavalieri's principle and indivisibles.
- Fermat's adequality and the modern derivative.
- Wallis product for $\pi$.
- Newton's generalized binomial theorem.
- Newton interpolation and finite differences.
- Mercator's logarithm series.
- Leibniz's differentials and the fundamental theorem of calculus.
- Berkeley's criticism of infinitesimals and later limit foundations.
