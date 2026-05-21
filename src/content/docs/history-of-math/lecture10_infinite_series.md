---
title: "Lecture 10: Infinite Series - From Infinite Sums to a Language of Functions"
---

## Lecture 10: Infinite Series - From Infinite Sums to a Language of Functions

## Lecture Line

In the previous lecture, Newton's calculus was already tied to infinite series: if a function can be written as an infinite polynomial, it can often be differentiated, integrated, and inverted term by term. Chapter 10 asks what infinite series themselves are. When are they reliable? How did they become a language for functions, sequences, and primes?

The route follows Stillwell Chapter 10: geometric series, harmonic series, Madhava's trigonometric series, power series, interpolation and Taylor series, summation problems, fractional power series, generating functions, and Euler's product for the zeta function.

Students should learn to make four judgments:

- whether an infinite sum converges;
- whether a function can be written as a power series;
- whether a given series can be summed;
- whether a series is being used to encode a sequence or a set of numbers.

## Entry Problem: Terms Go to Zero, But the Sum May Still Diverge

A natural first guess is: if the terms of a series get smaller and approach $0$, then the sum should settle down.

The harmonic series breaks this intuition:

$$
1+\frac12+\frac13+\frac14+\cdots.
$$

Each term tends to $0$, but the total still diverges. The lesson is that an infinite series is not simply "adding smaller and smaller things." One must examine speed, structure, and range of validity.

## 1. Early Results: Geometric Series and Potential Infinity

Greek mathematics already dealt with infinite processes, but often through finite arguments. Zeno's dichotomy can be read as

$$
\frac12+\frac14+\frac18+\frac1{16}+\cdots=1.
$$

Archimedes' quadrature of the parabola also involves a geometric series:

$$
1+\frac14+\frac1{4^2}+\frac1{4^3}+\cdots=\frac43.
$$

In general, if $|r|<1$,

$$
a+ar+ar^2+ar^3+\cdots=\frac{a}{1-r}.
$$

Start with the finite partial sum

$$
S_n=a+ar+\cdots+ar^n.
$$

Multiplying by $r$ and subtracting gives

$$
S_n-rS_n=a-ar^{n+1}.
$$

Hence

$$
S_n=\frac{a(1-r^{n+1})}{1-r}.
$$

When $|r|<1$, $r^{n+1}\to 0$, so the infinite sum is obtained as a limit of partial sums.

## 2. Oresme and the Divergence of the Harmonic Series

Oresme's grouping proof is classroom-ready:

$$
1+\frac12+\left(\frac13+\frac14\right)+\left(\frac15+\frac16+\frac17+\frac18\right)+\cdots.
$$

Each grouped block is at least $\frac12$:

$$
\frac13+\frac14>\frac14+\frac14=\frac12,
$$

$$
\frac15+\frac16+\frac17+\frac18>4\cdot\frac18=\frac12.
$$

Continuing this grouping gives endlessly many new contributions of at least $\frac12$. Therefore the sum can exceed any bound.

So

$$
a_n\to 0
$$

is necessary for convergence of $\sum a_n$, but it is not sufficient.

Oresme also connected the harmonic series with the area under $y=1/x$. The partial sums

$$
1+\frac12+\cdots+\frac1n
$$

grow roughly like $\log n$, which later leads toward Euler's constant $\gamma$.

## 3. Madhava and Trigonometric Series

The Kerala school, especially Madhava, discovered series for inverse tangent, sine, and cosine. The most useful example here is

$$
\arctan x=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\cdots.
$$

Putting $x=1$ gives

$$
\frac{\pi}{4}=1-\frac13+\frac15-\frac17+\cdots.
$$

This has two meanings:

- it gives an explicit rule for computing $\pi$;
- it shows that trigonometric quantities can be handled by infinite series.

It also shows the difference between theoretical validity and computational efficiency. At $x=1$, the convergence is slow. Students should compute the first few partial sums and observe the speed.

## 4. Power Series: Functions as Infinite Polynomials

After the invention of calculus, power series became central:

$$
a_0+a_1x+a_2x^2+a_3x^3+\cdots.
$$

They are powerful because they let functions be treated like polynomials.

From the geometric series,

$$
\frac{1}{1-x}=1+x+x^2+x^3+\cdots,\quad |x|<1.
$$

Integrating term by term gives

$$
-\log(1-x)=x+\frac{x^2}{2}+\frac{x^3}{3}+\frac{x^4}{4}+\cdots.
$$

Similarly,

$$
\frac{1}{1+x}=1-x+x^2-x^3+\cdots
$$

gives

$$
\log(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots.
$$

The condition matters. A power-series identity usually has a range of convergence; outside that range, the formula may fail.

## 5. Interpolation and Taylor Series

Stillwell emphasizes the historical role of interpolation. Today it is often treated as a numerical method, but for Newton, Gregory, and Leibniz it was connected to calculus and infinite expansions.

Interpolation asks: from known values of a function at a sequence of points, can we recover other values?

Finite data lead to polynomial interpolation. Infinite data lead toward Gregory-Newton interpolation. Taylor series can be viewed as a limiting case when the spacing between known points tends to zero:

$$
f(a+h)=f(a)+hf'(a)+\frac{h^2}{2!}f''(a)+\frac{h^3}{3!}f'''(a)+\cdots.
$$

In class, however, Taylor series should not be reduced to writing an infinite expansion. For computation, we first take a finite polynomial:

$$
T_m(a+h)=f(a)+hf'(a)+\cdots+\frac{h^m}{m!}f^{(m)}(a),
$$

and then ask how large the remainder

$$
R_m=f(a+h)-T_m(a+h)
$$

is.

For example, for $e^{0.1}$, taking terms through degree three gives

$$
1+0.1+\frac{0.1^2}{2!}+\frac{0.1^3}{3!}.
$$

The next term has size only about $\frac{0.1^4}{4!}$, so the approximation is already very tight. Taylor series is both an expansion of a function and a controlled approximation scheme.

Taylor series is not just a calculus formula. It is also the limit of an older problem: reconstructing a function from local information. The remainder answers the next question: how far can we trust the reconstruction?

## 6. Summation: Finding the Value of a Given Series

Expanding a known function into a series is one problem. Summing a given series is another.

Mengoli could sum telescoping series such as

$$
\sum_{n=1}^{\infty}\frac{1}{n(n+1)}.
$$

Since

$$
\frac{1}{n(n+1)}=\frac1n-\frac1{n+1},
$$

the first $N$ terms equal

$$
1-\frac1{N+1},
$$

so the infinite sum is $1$.

The Basel problem was much harder:

$$
1+\frac1{2^2}+\frac1{3^2}+\frac1{4^2}+\cdots.
$$

Euler found

$$
\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}{6}.
$$

His early reasoning treated $\sin x/x$ as an infinite polynomial and related its zeros to its factors. Later mathematicians supplied the necessary rigor, but the idea was decisive: use the zero structure of a function to sum a numerical series.

## 7. Fractional Power Series

Not every function can be expressed as an ordinary power series.

For example, $x^{1/2}$ cannot be written near $x=0$ as

$$
a_0+a_1x+a_2x^2+\cdots.
$$

If

$$
\sqrt{x}=a_1x+a_2x^2+a_3x^3+\cdots,
$$

then squaring the right-hand side gives a lowest possible power of at least $x^2$, not $x$.

Newton discovered that algebraic functions can often be described by fractional power series, for example

$$
y=x^{1/2}(1-x+x^2-x^3+\cdots).
$$

Later complex variables and Puiseux expansions made this behavior clearer. The point for this course is that the failure of ordinary power series forced a richer local language for algebraic functions.

## 8. Generating Functions: Encoding Sequences

Series can represent not just values of a function, but a whole sequence.

Let the Fibonacci sequence be

$$
F_0=0,\quad F_1=1,\quad F_{n+2}=F_{n+1}+F_n.
$$

Define the generating function

$$
F(x)=F_0+F_1x+F_2x^2+F_3x^3+\cdots.
$$

Then

$$
xF(x)=F_0x+F_1x^2+F_2x^3+\cdots,
$$

$$
x^2F(x)=F_0x^2+F_1x^3+\cdots.
$$

So

$$
F(x)-xF(x)-x^2F(x)=x,
$$

because every coefficient from $x^2$ onward is

$$
F_{n+2}-F_{n+1}-F_n=0.
$$

Thus

$$
F(x)=\frac{x}{1-x-x^2}.
$$

A recursive sequence has been compressed into a rational function.

There is also a useful distinction here. Taylor series usually make analytic claims about function values, so convergence and remainder matter. Generating functions in combinatorics are often first used as formal power series: $x$ is a marker for the index, and equality means coefficient-by-coefficient equality. In that setting, convergence is not the first issue; coefficient relations are.

## 9. Euler Product and the Zeta Function

Euler generalized the harmonic series to

$$
\zeta(s)=1+\frac1{2^s}+\frac1{3^s}+\frac1{4^s}+\cdots.
$$

For $s>1$ it converges. Euler found

$$
\zeta(s)=\prod_p \frac{1}{1-p^{-s}},
$$

where the product runs over all primes.

Each factor expands as

$$
\frac{1}{1-p^{-s}}=1+\frac1{p^s}+\frac1{p^{2s}}+\frac1{p^{3s}}+\cdots.
$$

Multiplying all prime factors produces every term $1/n^s$ exactly once, because every positive integer has a unique prime factorization.

Euler's product connects a sum over all positive integers with a product over primes. This is the entrance to analytic number theory.

## Classroom Activities

### Activity A: Why the Harmonic Series Diverges Slowly

First estimate

$$
H_8=1+\frac12+\frac13+\cdots+\frac18,
$$

$$
H_{16}=1+\frac12+\frac13+\cdots+\frac1{16}.
$$

Then use Oresme's grouping:

$$
1+\frac12+\left(\frac13+\frac14\right)+\left(\frac15+\cdots+\frac18\right)+\left(\frac19+\cdots+\frac1{16}\right)+\cdots.
$$

Each group is at least $\frac12$.

Students should:

1. Write a lower bound for the first four groups.
2. Explain why the harmonic series diverges.
3. Compare its divergence with the convergence of a geometric series.
4. Explain why terms tending to $0$ is only a necessary condition.

Extension: use an area picture to explain why $H_n$ grows roughly like $\log n$, not like $n$.

### Activity B: Taylor Approximation Is Not Just Formal Expansion

Estimate $e^{0.1}$ using

$$
e^{0.1}=1+0.1+\frac{0.1^2}{2!}+\frac{0.1^3}{3!}+\cdots.
$$

Students should:

1. Estimate using the first three terms.
2. Estimate again using the first four terms.
3. Compare the errors with a calculator.
4. Explain why adding one more term improves the result.

Then compare with

$$
\log(1.1)=0.1-\frac{0.1^2}{2}+\frac{0.1^3}{3}-\cdots.
$$

The point is that a series is useful when finite truncations give controlled approximation.

### Activity C: From Recurrence to Generating Function

The Fibonacci sequence satisfies

$$
F_0=0,\quad F_1=1,\quad F_{n+2}=F_{n+1}+F_n.
$$

Define

$$
F(x)=F_0+F_1x+F_2x^2+F_3x^3+\cdots.
$$

Students should:

1. Write $xF(x)$ and $x^2F(x)$.
2. Compute $F(x)-xF(x)-x^2F(x)$.
3. Identify why all coefficients from $x^2$ onward vanish.
4. Derive

$$
F(x)=\frac{x}{1-x-x^2}.
$$

Extension: explain why a recursively defined integer sequence can be encoded by a rational function.

### Activity D: A Finite Euler Product and Unique Factorization

Use only the primes $2,3,5$ and expand

$$
\left(1+\frac1{2^s}+\frac1{2^{2s}}+\cdots\right)
\left(1+\frac1{3^s}+\frac1{3^{2s}}+\cdots\right)
\left(1+\frac1{5^s}+\frac1{5^{2s}}+\cdots\right).
$$

Students should:

1. List the first ten terms of the form $\frac1{n^s}$ that appear.
2. Check that each $n$ has only prime factors $2,3,5$.
3. Explain why each such $n$ appears exactly once.
4. Explain why including all primes gives

$$
\zeta(s)=\prod_p\frac{1}{1-p^{-s}}.
$$

Final question: which theorem about integers is being used here?

## Discussion Questions

1. Why is $a_n\to 0$ only a necessary condition for convergence of $\sum a_n$? Use geometric and harmonic series in your answer.
2. The geometric series converges and can be summed directly, while the harmonic series diverges. What structural difference matters?
3. When is a Taylor series a computational tool, and when is it only a formal expression? What roles do convergence range and remainder play?
4. Formal power series can be used without convergence, while analytic power series require convergence. Which use is closer to the generating-function activity?
5. The Fibonacci generating function turns a recurrence into a rational function. Why does that make a recursive problem algebraic?
6. Euler's product turns a sum over integers into a product over primes. Where would the argument fail without unique factorization?
7. Euler's early Basel problem argument treated $\sin x/x$ like an infinite polynomial. Why did the analogy give the right answer, and why did later mathematicians still need a proof?

## Further Directions

- Oresme's proof of harmonic divergence and logarithmic growth.
- Madhava/Gregory-Leibniz series for $\pi$ and convergence speed.
- Gregory-Newton interpolation and Taylor series.
- Basel problem and Euler's infinite product for $\sin x$.
- Puiseux series for algebraic functions.
- Generating functions in combinatorics.
- Riemann zeta function and the historical entrance to the Riemann hypothesis.
