---
title: A1 Polynomial Roots and Factors
---

# A1 Polynomial Roots and Factors

## 1. A root is not just a number

Suppose a polynomial curve meets the $x$-axis at $x=a$.

That sentence hides several different pictures. The curve might cut through the axis. It might touch the axis and turn back. It might flatten out at the axis before crossing. In all three cases, $a$ is a root. But the root is doing different work in the polynomial.

This is one reason polynomials are useful in STEP. A polynomial is not just a formula to expand. It stores geometric information:

- where the curve is zero;
- how it meets the axis there;
- how much of the whole polynomial is already forced once enough contact information is known.

The first point is familiar. If

$$p(a)=0,$$

then

$$x-a \text{ is a factor of } p(x).$$

This is the factor theorem. On its own, it only says that the curve passes through $(a,0)$.

STEP questions often need the next question:

> Does the curve merely pass through the axis, or does it have a higher-order contact with the axis?

Compare:

$$p(x)=x-a,$$

$$p(x)=(x-a)^2,$$

and

$$p(x)=(x-a)^3.$$

All three have $a$ as a root. But near $x=a$, they behave differently.

The linear factor crosses the axis. The square factor touches and turns. The cubic factor crosses, but with a flat tangent at the root.

The exponent on $(x-a)$ measures how much contact the curve has with the axis at that point. This is called the multiplicity of the root. We do not need the word immediately; what matters is the habit:

> A repeated factor is not just "the same factor again". It is extra local information.

Now return to a general polynomial. If

$$p(x)=(x-a)^2q(x).$$

then the curve has at least second-order contact with the axis at $x=a$. Algebraically, this extra contact leaves a trace in the derivative.

Differentiate:

$$p'(x)=2(x-a)q(x)+(x-a)^2q'(x).$$

Now substitute $x=a$:

$$p'(a)=0.$$

So the factor has told us two things:

$$p(a)=0 \quad \text{and} \quad p'(a)=0.$$

This is the first real idea in the lesson. A root gives a value condition. A repeated root gives value and slope conditions. Higher-order contact gives a chain of derivative conditions.

## 2. Contact of higher order

If

$$p(x)=(x-a)^4q(x),$$

then $x=a$ is not just a root. It is a fourth-order point of contact between the curve and the axis.

Each time we differentiate, one power of $(x-a)$ can disappear. After one derivative, every term still has a factor of $(x-a)^3$. After two derivatives, every term still has a factor of $(x-a)^2$. After three derivatives, every term still has a factor of $(x-a)$.

So

$$p(a)=p'(a)=p''(a)=p'''(a)=0.$$

The fourth derivative need not be zero. The repeated factor has given exactly four vanishing conditions.

This is often the cleanest way to read multiplicity:

$$
(x-a)^m \mid p(x)
\quad \Longrightarrow \quad
p(a)=p'(a)=\cdots=p^{(m-1)}(a)=0.
$$

For this lesson, we only need the forward direction. The important habit is to pause when a factor is repeated. It gives several equations at once, and those equations may be easier to use than the original polynomial.

## 3. Core example

Suppose

$$P(x)=x^6+4x^5-5x^4-40x^3-40x^2+32x+k$$

has a factor of the form $(x-a)^4$. Find $k$.

This is not really a sixth-degree factorisation exercise. The unknown $k$ makes a direct attack unattractive, and the repeated factor has an unknown centre $a$.

The useful information is the order of contact. The phrase "$(x-a)^4$ is a factor" tells us:

$$P(a)=P'(a)=P''(a)=P'''(a)=0.$$

The last three equations do not contain $k$, because $k$ disappears after differentiating. So we first use the derivatives to find $a$.

Differentiate:

$$P'(x)=6x^5+20x^4-20x^3-120x^2-80x+32,$$

$$P''(x)=30x^4+80x^3-60x^2-240x-80,$$

and

$$P'''(x)=120x^3+240x^2-120x-240.$$

The third derivative is the simplest place to start:

$$P'''(x)=120(x^3+2x^2-x-2).$$

Factor the cubic:

$$x^3+2x^2-x-2=(x+2)(x^2-1)=(x+2)(x-1)(x+1).$$

So the only possible values of $a$ are

$$a=-2,\quad a=-1,\quad a=1.$$

Now test them in $P''(a)=0$.

For $a=-2$:

$$P''(-2)=30(16)+80(-8)-60(4)-240(-2)-80=0.$$

For $a=-1$:

$$P''(-1)=30-80-60+240-80=50,$$

so $a=-1$ is impossible.

For $a=1$:

$$P''(1)=30+80-60-240-80=-270,$$

so $a=1$ is impossible.

Therefore

$$a=-2.$$

Now use $P(a)=0$:

$$P(-2)=64-128-80+320-160-64+k.$$

The non-$k$ terms sum to $-48$, so

$$-48+k=0.$$

Hence

$$k=48.$$

The calculation is not the main point. The point is the order of attack:

1. Read the phrase "$(x-a)^4$" as fourth-order contact.
2. Translate that contact into derivative conditions.
3. Use the equations that do not contain the unknown constant.
4. Return to $P(a)=0$ only at the end.

## 4. Extension window: when degree becomes information

Once repeated factors are seen as contact information, another STEP move becomes more natural: combine contact information with degree counting.

Start with only one side of the information. Suppose

$$p(x)-1$$

is exactly divisible by

$$(x-1)^5.$$

Then

$$p(1)=1.$$

Also, if

$$p(x)-1=(x-1)^5q(x),$$

then differentiating gives

$$p'(x)=5(x-1)^4q(x)+(x-1)^5q'(x),$$

so $p'(x)$ is divisible by $(x-1)^4$.

This is still local information near $x=1$. The new thought is that differentiation has lowered the degree by 1, while the repeated factor has only lowered its power by 1.

If another high-power factor appears somewhere else, the derivative may have so many forced factors that its whole shape is determined. That is the point of the final STEP question below.

## 5. Practice set

The first two exercises are short. They are there to make the contact idea usable. The last one is a full STEP question.

### Practice 1: finding unknowns from contact

The polynomial

$$P(x)=x^5+ux^3+vx^2+wx+2$$

has $(x-1)^3$ as a factor.

Find $u$, $v$ and $w$, and then factorise $P(x)$ completely.

Start from the contact conditions at $x=1$. The missing $x^4$ term is part of the structure; do not expand a guessed factorisation first.

### Practice 2: finding the point of contact

For some value of $k$, the polynomial

$$Q(x)=x^4-2x^3-3x^2+4x+k$$

has a repeated root.

Find all possible repeated roots, and hence find all possible values of $k$.

Here the point of contact is not given. Use the fact that a repeated root must be a common root of $Q(x)$ and $Q'(x)$.

### Final STEP problem: STEP2 2009 Q4

The polynomial $\mathrm{p}(x)$ is of degree 9 and $\mathrm{p}(x)-1$ is exactly divisible by $(x-1)^5$.

1. Find the value of $\mathrm{p}(1)$.
2. Show that $\mathrm{p}'(x)$ is exactly divisible by $(x-1)^4$.
3. Given also that $\mathrm{p}(x)+1$ is exactly divisible by $(x+1)^5$, find $\mathrm{p}(x)$.

This is a proper STEP ending for the lesson. It asks for the same contact idea, but now the useful move is not just differentiating once. You have to notice that the degree of $\mathrm{p}'(x)$ leaves no space after the two fourth-power factors have appeared.

## 6. What to remember

A-Level factor theorem:

$$p(a)=0 \Longleftrightarrow x-a \text{ is a factor of } p(x).$$

STEP version:

Repeated factors, symmetry, and degree often tell you more than a direct expansion.

Useful translations:

$$
(x-a)^2 \mid p(x)
\quad \Rightarrow \quad
p(a)=p'(a)=0,
$$

$$
(x-a)^m \mid p(x)
\quad \Rightarrow \quad
p(a)=p'(a)=\cdots=p^{(m-1)}(a)=0,
$$

and if a polynomial of known degree already has enough factors, then it has no space left for more.
