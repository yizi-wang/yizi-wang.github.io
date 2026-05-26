---
title: A2.1 Vieta and Symmetric Information
---

# A2.1 Vieta and Symmetric Information

## 1. What Do Coefficients See?

Start with a quadratic whose roots are $\alpha$ and $\beta$:

$$
x^2-sx+p=0.
$$

Vieta gives

$$
\alpha+\beta=s,\qquad \alpha\beta=p.
$$

If we swap the names $\alpha$ and $\beta$, these two expressions do not
change. The coefficients can see

$$
\alpha+\beta,\qquad \alpha\beta.
$$

They cannot see which root was called $\alpha$ and which was called
$\beta$.

This is the first important point:

> Vieta is not only a shortcut. It tells us which information about the roots is
> naturally visible from the coefficients.

---

## 2. Vieta In Degree $n$

Let

$$
P(x)=\prod_{i=1}^{n}(x-r_i)
$$

be a monic polynomial with roots

$$
r_1,r_2,\ldots,r_n.
$$

When we expand the product,

$$
P(x)=x^n-e_1x^{n-1}+e_2x^{n-2}-e_3x^{n-3}+\cdots+(-1)^ne_n,
$$

where

$$
e_1=\sum_i r_i,
$$

$$
e_2=\sum_{i<j}r_ir_j,
$$

$$
e_3=\sum_{i<j<k}r_ir_jr_k,
$$

and so on, down to

$$
e_n=r_1r_2\cdots r_n.
$$

These are called the elementary symmetric polynomials in the roots.

The word "elementary" means basic, not easy. These are the building blocks for
many other expressions that are unchanged when the roots are renamed.

For a cubic,

$$
(x-u)(x-v)(x-w)=x^3-(u+v+w)x^2+(uv+uw+vw)x-uvw.
$$

So if

$$
x^3-px^2+qx-r=0,
$$

then

$$
e_1=p,\qquad e_2=q,\qquad e_3=r.
$$

For a quartic,

$$
x^4-Ax^3+Bx^2-Cx+D=0
$$

has

$$
e_1=A,\qquad e_2=B,\qquad e_3=C,\qquad e_4=D.
$$

---

## 3. Symmetric Or Not?

An expression in the roots is symmetric if it is unchanged whenever the roots
are renamed.

For roots $u,v,w$, the expression

$$
u^2+v^2+w^2
$$

is symmetric.

The expression

$$
u^2v+v^2w+w^2u
$$

is not symmetric. If we swap $u$ and $v$, it becomes

$$
v^2u+u^2w+w^2v,
$$

which is usually different.

The test is:

> If the roots are renamed, does the expression always keep the same value?

Coefficients naturally control symmetric information. They cannot by themselves
identify an expression that depends on a preferred naming of the roots.

---

## 4. Rewriting Symmetric Expressions

Let $u,v,w$ be the roots of

$$
x^3-px^2+qx-r=0.
$$

Then

$$
e_1=p,\qquad e_2=q,\qquad e_3=r.
$$

For example,

$$
(u+v+w)^2=u^2+v^2+w^2+2(uv+uw+vw).
$$

Therefore

$$
u^2+v^2+w^2=e_1^2-2e_2=p^2-2q.
$$

Another useful expression is

$$
(u+v)(v+w)(w+u).
$$

Expanding in a controlled way,

$$
(u+v)(v+w)(w+u)=(u+v+w)(uv+uw+vw)-uvw.
$$

So

$$
(u+v)(v+w)(w+u)=e_1e_2-e_3=pq-r.
$$

The calculation is useful, but the principle is more important:

> If an expression is symmetric, first try to rewrite it using
> $e_1,e_2,\ldots,e_n$.

---

## 5. Working Theorem

We will use the following theorem as a guiding principle.

**Symmetric polynomial theorem, working version.**  
Every symmetric polynomial in $r_1,\ldots,r_n$ can be written as a polynomial
in

$$
e_1,e_2,\ldots,e_n.
$$

For this course, we do not need the full proof. We do need to know how to use
the idea in examples.

Boundary note: the word polynomial matters. Expressions involving division,
square roots, or other non-polynomial operations need extra care.

---

## 6. Power Sums And Newton Identities

A very important family of symmetric expressions is the power sums:

$$
p_k=r_1^k+r_2^k+\cdots+r_n^k.
$$

The first few identities are

$$
p_1=e_1,
$$

$$
p_2=e_1p_1-2e_2,
$$

$$
p_3=e_1p_2-e_2p_1+3e_3.
$$

So

$$
p_2=e_1^2-2e_2,
$$

and

$$
p_3=e_1(e_1^2-2e_2)-e_2e_1+3e_3
=e_1^3-3e_1e_2+3e_3.
$$

Power sums look different from Vieta expressions, but they are still symmetric.
That is why they can be controlled by the same elementary data.

---

## 7. Anchor Problem: STEP III 2014 Q1(i)

Let $a,b,c$ be real numbers such that

$$
a+b+c=0,
$$

and

$$
(1+ax)(1+bx)(1+cx)=1+qx^2+rx^3
$$

for all real $x$.

Expanding the left hand side gives

$$
1+(a+b+c)x+(ab+bc+ca)x^2+abcx^3.
$$

Since $a+b+c=0$,

$$
q=ab+bc+ca,\qquad r=abc.
$$

Now define

$$
S_n=\frac{a^n+b^n+c^n}{n}.
$$

The problem asks for the coefficient of $x^n$ in

$$
\ln(1+qx^2+rx^3).
$$

The key observation is

$$
1+qx^2+rx^3=(1+ax)(1+bx)(1+cx).
$$

So, as a power series about $x=0$,

$$
\ln(1+qx^2+rx^3)
=\ln(1+ax)+\ln(1+bx)+\ln(1+cx).
$$

Using

$$
\ln(1+t)=t-\frac{t^2}{2}+\frac{t^3}{3}-\frac{t^4}{4}+\cdots,
$$

we get

$$
\ln(1+ax)+\ln(1+bx)+\ln(1+cx)
=\sum_{n\ge1}(-1)^{n+1}\frac{a^n+b^n+c^n}{n}x^n.
$$

Therefore the coefficient of $x^n$ is

$$
\boxed{(-1)^{n+1}S_n.}
$$

This is not just a logarithm expansion. The logarithm turns a product into a
sum, and the coefficients of that sum are power sums of the roots.

---

## 8. Writing Check

In the anchor problem, good writing should make the following visible:

1. define $S_n$ before using it;
2. use $a+b+c=0$ to remove the coefficient of $x$;
3. state why $1+qx^2+rx^3$ factors as $(1+ax)(1+bx)(1+cx)$;
4. say that the logarithm is being expanded as a power series about $x=0$;
5. compare coefficients of $x^n$.

A compressed answer that only says "by expansion" hides too much.

---
