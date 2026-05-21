---
title: "Lecture 11: The Number Theory Revival - From Diophantus to Fermat"
---

## Lecture 11: The Number Theory Revival - From Diophantus to Fermat

## Lecture Line

This lecture is not a catalogue of famous number-theory results. It asks how number theory in the 17th century regained methods. Stillwell Chapter 11 first fills the space between Diophantus and Fermat, especially binomial coefficients, then moves through Fermat's little theorem, Fermat's last theorem, infinite descent, rational right triangles, and rational points on cubics.

The main line is Fermat, not probability. Pascal's triangle appears because it connects binomial coefficients, combinations, and a route to Fermat's little theorem. The division of stakes is a useful side reading about Pascal's combinatorial interpretation, but it should not be the main classroom activity.

Students should perform three mathematical actions:

- use binomial coefficients to prove a congruence;
- understand how infinite descent proves nonexistence;
- use a line intersecting a curve to construct rational points.

## Entry Problem: How Can One Prove an Integer Equation Has No Solution?

Earlier lectures used equations to describe curves, areas, and tangents. Number theory asks a stricter question: which solutions are integers or rational numbers?

The equation

$$
x^2+y^2=z^2
$$

has many positive integer solutions. Fermat claimed that for $n>2$,

$$
x^n+y^n=z^n
$$

has no positive integer solutions.

Finding a solution can be done by search, parametrization, or construction. Proving that no solution exists requires a different kind of method. Fermat's importance lies in methods such as modular reasoning and infinite descent.

## 1. Between Diophantus and Fermat

Diophantus studied many integer and rational equations, but his work did not immediately become a continuous European tradition. Stillwell stresses that the period between Diophantus and Fermat was not empty:

- Chinese mathematics developed the Chinese remainder theorem and triangular tables of binomial coefficients;
- Yang Hui and Zhu Shijie preserved forms of what is now called Pascal's triangle, tracing it back to Jia Xian;
- Levi ben Gershon gave formulas for permutations and combinations and came close to mathematical induction.

The 17th-century revival was therefore not creation from nothing. Old problems, old tools, and new notation converged again.

## 2. Pascal's Triangle: Why It Belongs Here

Pascal's triangle records binomial coefficients:

$$
(a+b)^n=\sum_{k=0}^n {n\choose k}a^{n-k}b^k.
$$

The entries satisfy

$$
{n\choose k}={n-1\choose k-1}+{n-1\choose k}.
$$

This follows from

$$
(a+b)^n=a(a+b)^{n-1}+b(a+b)^{n-1}.
$$

Pascal did not discover the triangle first. His significance is that he unified two interpretations:

- algebraic interpretation: the entries are coefficients in the binomial expansion;
- combinatorial interpretation: ${n\choose k}$ counts ways to choose $k$ objects from $n$.

For this chapter, the important point is not naming. It is that binomial coefficients have divisibility properties that lead directly into Fermat's little theorem.

Pascal's triangle can also be viewed as a modular object. Modulo $2$, the odd entries form a Sierpinski-like pattern. Lucas's theorem explains the structure: if $n$ and $k$ are written in binary, then

$$
{n\choose k}
$$

is odd exactly when every $1$ bit of $k$ occurs in a position where $n$ also has a $1$ bit. For example,

$$
13=(1101)_2.
$$

So the odd entries in row $13$ occur at

$$
k=0,1,4,5,8,9,12,13.
$$

This turns Pascal's triangle from a table of counts into an object with modular structure.

## 3. Fermat's Little Theorem

Modern statement: if $p$ is prime and $p\nmid n$, then

$$
n^{p-1}\equiv 1\pmod{p}.
$$

Equivalently, for every integer $n$,

$$
n^p-n\equiv 0\pmod{p}.
$$

First prove the case $n=2$. By the binomial theorem,

$$
2^p=(1+1)^p=1+{p\choose 1}+{p\choose 2}+\cdots+{p\choose p-1}+1.
$$

If $p$ is prime, then for $1\le k\le p-1$,

$$
{p\choose k}=\frac{p!}{k!(p-k)!}
$$

is divisible by $p$. The numerator has a factor $p$, and the denominator does not; since the binomial coefficient is an integer, the factor $p$ remains.

Thus the middle terms are divisible by $p$, so

$$
2^p\equiv 2\pmod{p}.
$$

For general $n$, use induction through the binomial theorem. If

$$
n^p\equiv n\pmod{p},
$$

then

$$
(n+1)^p=n^p+{p\choose 1}n^{p-1}+\cdots+{p\choose p-1}n+1\equiv n+1\pmod{p}.
$$

So

$$
n^p\equiv n\pmod{p}
$$

for all positive integers $n$. If $p\nmid n$, divide by $n$ modulo $p$ to obtain

$$
n^{p-1}\equiv 1\pmod{p}.
$$

This proof places Pascal's triangle, prime divisibility, and induction in one chain.

The theorem also has an immediate algorithmic use. If $N$ is odd and

$$
2^{N-1}\not\equiv 1\pmod{N},
$$

then $N$ is certainly composite. The converse is false: passing the test does not prove primality. A standard example is

$$
341=11\cdot 31.
$$

Since

$$
2^{10}=1024\equiv 1\pmod{341},
$$

we have

$$
2^{340}=(2^{10})^{34}\equiv 1\pmod{341}.
$$

Thus $341$ is composite but passes the base-$2$ Fermat test. This is a good place to discuss the difference between using a theorem and using its converse.

## 4. Fermat's Last Theorem

Fermat famously claimed that for $n>2$,

$$
x^n+y^n=z^n
$$

has no positive integer solutions.

The modern proof by Andrew Wiles uses elliptic curves and modular forms. That is not the focus of this lecture. The better classroom question is: what method did Fermat actually leave?

One answer is infinite descent, especially in the $n=4$ case.

It is enough to prove Fermat's last theorem for prime exponents. If $n=mp$ and

$$
a^n+b^n=c^n,
$$

then

$$
(a^m)^p+(b^m)^p=(c^m)^p.
$$

A counterexample for a composite exponent would give a counterexample for a prime exponent.

## 5. Infinite Descent

Infinite descent has a simple logical shape:

1. Assume a positive-integer object with a certain property exists.
2. Choose a smallest one.
3. Construct a smaller object with the same property.
4. This contradicts minimality.

The method relies on the well-ordering of the positive integers. It is especially suited to number theory.

Fermat used it in the theorem:

> A right triangle with rational side lengths cannot have square area.

A primitive Pythagorean triple can be written as

$$
p^2-q^2,\quad 2pq,\quad p^2+q^2,
$$

where $p,q$ are coprime and of opposite parity. Its area is

$$
pq(p+q)(p-q).
$$

If this area were a square, coprimality and parity force strong square-structure conditions on

$$
p,\quad q,\quad p+q,\quad p-q.
$$

Fermat's key step is that from such a hypothetical triangle one can construct a smaller rational right triangle whose area is still a square. Thus a smallest counterexample would produce a smaller counterexample, impossible.

This also gives the $n=4$ case of Fermat's last theorem, because an equation such as

$$
r^4-s^4=v^2
$$

leads to a rational right triangle with square area.

## 6. Rational Points on Conics

Diophantine problems are often questions about rational points on curves.

For the unit circle

$$
x^2+y^2=1,
$$

the point $(-1,0)$ is rational. Draw a line of rational slope $t$ through it:

$$
y=t(x+1).
$$

The other intersection with the circle is

$$
x=\frac{1-t^2}{1+t^2},\quad y=\frac{2t}{1+t^2}.
$$

If $t$ is rational, then $x,y$ are rational. Conversely, all rational points on the circle except $(-1,0)$ arise this way.

This is the geometric form of the formula for Pythagorean triples.

## 7. Cubics of Genus 0

Stillwell then moves to cubic curves. If a cubic has a double point, it can often be parametrized by rational functions. Such curves are of genus 0.

For the folium of Descartes,

$$
x^3+y^3=3axy,
$$

the origin is a double point. Let

$$
y=tx.
$$

Substitution gives

$$
x^3+t^3x^3=3atx^2.
$$

Apart from the double intersection at the origin, the other point is

$$
x=\frac{3at}{1+t^3},\quad y=\frac{3at^2}{1+t^3}.
$$

Rational $t$ gives rational points. The construction parallels the unit-circle method: start from a special rational point and sweep lines of rational slope.

## 8. Cubics of Genus 1

If a cubic has no double point or cusp, the situation changes. It usually cannot be parametrized by rational functions. These are genus 1 curves, the entrance to elliptic curves.

Stillwell considers cubics of the form

$$
y^2=ax^3+bx^2+cx+d.
$$

If $P_1=(x_1,y_1)$ and $P_2=(x_2,y_2)$ are rational points, the line

$$
y=tx+k
$$

through them meets the cubic at a third point $P_3$. Substituting gives a cubic equation whose roots are $x_1,x_2,x_3$. Comparing the coefficient of $x^2$ yields

$$
x_1+x_2+x_3=\frac{t^2-b}{a},
$$

so

$$
x_3=\frac{t^2-b}{a}-x_1-x_2.
$$

If the coefficients and the first two points are rational, then the third point is rational.

This chord-tangent construction later becomes the addition law on elliptic curves. If one chooses a point at infinity as the zero point, then

$$
P_1+P_2
$$

is defined as the reflection of the third intersection point across the $x$-axis. The associativity of this operation is not obvious and does not need to be proved here. The important classroom point is that rational points on a curve are not only a question of existence; they can carry an operation.

This explains why integer equations, rational points, and geometry keep returning to one another. The modern cryptographic story is a possible extension, but the lecture's main mathematical point is the connection between Diophantine equations, rational points, and geometric operations.

## Classroom Activities

### Activity A: From Fermat's Little Theorem to Primality Testing

1. Expand $(1+1)^p$.
2. Explain why ${p\choose k}$ is divisible by prime $p$ for $1\le k\le p-1$.
3. Conclude

$$
2^p\equiv 2\pmod{p}.
$$

4. Verify numerically for $p=5,7$.

Now use the theorem in reverse. If an odd number $N$ satisfies

$$
2^{N-1}\not\equiv 1\pmod{N},
$$

then $N$ is certainly composite.

Test $N=9,15,21$. Then examine the counterexample

$$
341=11\cdot 31.
$$

Since

$$
2^{10}=1024\equiv 1\pmod{341},
$$

we have

$$
2^{340}=(2^{10})^{34}\equiv 1\pmod{341}.
$$

Discussion: why can Fermat's test prove that some numbers are composite, but not prove by itself that a number is prime?

### Activity B: Pascal's Triangle mod 2 and the Lucas Idea

Draw the first 16 rows of Pascal's triangle. Color odd entries black and even entries white. Students should see a Sierpinski-like pattern.

Now look at row 13:

$$
13=(1101)_2.
$$

A mod 2 consequence of Lucas's theorem is: ${13\choose k}$ is odd exactly when the binary $1$-bits of $k$ occur only where $1101$ has $1$-bits.

Students list

$$
k=0,1,4,5,8,9,12,13.
$$

Then check these positions in row 13 of Pascal's triangle.

The aim is to move Pascal's triangle from a table of combinations to a modular object with number-theoretic structure.

### Activity C: Rational Points on the Circle and Pythagorean Triples

Use

$$
y=t(x+1)
$$

and

$$
x^2+y^2=1
$$

to derive

$$
x=\frac{1-t^2}{1+t^2},\quad y=\frac{2t}{1+t^2}.
$$

Try $t=1/2,2,3/4$ and compute the corresponding rational points.

Then write each point as

$$
\left(\frac{a}{c},\frac{b}{c}\right),
$$

obtaining a Pythagorean triple

$$
a^2+b^2=c^2.
$$

Final question: why does a line of rational slope through a rational point produce another rational point?

### Activity D: The Logic of Descent, from $\sqrt2$ to Fermat

Begin with the lighter example: prove that $\sqrt2$ is irrational.

Assume there is a smallest positive integer pair $(p,q)$ such that

$$
p^2=2q^2.
$$

Show that $p,q$ are both even, so $(p/2,q/2)$ is a smaller pair of the same kind. Contradiction.

Then return to Fermat's rational right triangle theorem. Students do not need every algebraic step; they should identify the four logical components of a descent proof:

1. What object is assumed to exist?
2. Which positive integer measures minimality?
3. How is a smaller object of the same kind produced?
4. Why can this not continue forever?

Compare the $\sqrt2$ descent with Fermat's descent. The logic is the same; where does the difficulty increase?

### Activity E: Genus 0 and Genus 1 Behave Differently

For the unit circle, one rational point plus an arbitrary rational slope gives all rational points.

For the folium of Descartes,

$$
x^3+y^3=3axy,
$$

the origin is a double point, so lines $y=tx$ also give a rational parametrization.

For a nonsingular cubic such as

$$
y^2=x^3-x+1,
$$

a line usually meets the curve in three points. Students should explain:

1. Why does "one known point plus one slope" no longer sweep out all points as it does for the circle?
2. Why does "two points determine a line, then take the third intersection" become the natural operation?
3. Why does this suggest an addition law on an elliptic curve?

## Discussion Questions

1. Fermat's little theorem can rule out compositeness failures, but why can it not by itself certify primality? What does the example $341$ show?
2. Pascal's triangle mod 2 produces a fractal pattern. What number-theoretic information is carried by binomial coefficients beyond counting?
3. Where exactly is primality used in the proof of Fermat's little theorem? Which step fails for composite moduli?
4. Infinite descent and induction both rely on well-ordering. Compare "proving upward" with "constructing downward to a contradiction."
5. Why can rational points on conics be parametrized by rational slopes? Why is the same method insufficient for nonsingular cubics?
6. Why does the chord-tangent construction on an elliptic curve turn "finding points" into "operating on points"?
7. The modern proof of Fermat's last theorem connects elliptic curves and modular forms. Does this suggest that the original integer equation already contained hidden geometry?

## Further Directions

- Early history of the Chinese remainder theorem.
- Pascal's triangle in Chinese, Hebrew, and Pascal's traditions: discovery, transmission, and systematization.
- Fermat's little theorem, Euler's theorem, and the arithmetic behind RSA.
- Infinite descent examples: irrationality of $\sqrt2$, Pythagorean triples, Fermat's $n=4$ case.
- Congruent number problem: which numbers occur as areas of rational right triangles?
- Rational parametrization of the folium of Descartes.
- Chord-tangent law on elliptic curves and its connection to Fermat's last theorem.
- Pascal's division of stakes as a side reading on combinatorial interpretation.

