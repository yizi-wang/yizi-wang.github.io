---
title: A2.2 Solving Equations as Breaking Symmetry
---

# A2.2 Solving Equations as Breaking Symmetry

## 1. The STEP Problem We Are Trying To Understand

STEP III 2017 Q3 begins with a quartic

$$
x^4+px^3+qx^2+rx+s=0
$$

with roots

$$
\alpha,\beta,\gamma,\delta.
$$

It then introduces three expressions:

$$
\alpha\beta+\gamma\delta,
$$

$$
\alpha\gamma+\beta\delta,
$$

$$
\alpha\delta+\beta\gamma.
$$

The problem says these three expressions satisfy a cubic equation of the form

$$
y^3+Ay^2+(pr-4s)y+(4qs-p^2s-r^2)=0.
$$

At first, this looks unexpected. Why should a quartic problem produce a cubic?
Why these three expressions?

The answer is not a trick specific to this question. It is part of a larger
story:

> The coefficients see the roots symmetrically. Solving means gradually breaking
> that symmetry until the individual roots become visible.

Before the quartic, look at degrees 2 and 3.

---

## 2. Degree 2: The Discriminant Separates Two Roots

Let a quadratic have roots $\alpha$ and $\beta$:

$$
x^2-sx+p=0.
$$

Vieta gives

$$
\alpha+\beta=s,\qquad \alpha\beta=p.
$$

This is symmetric information. If we swap $\alpha$ and $\beta$, the sum and
product do not change.

But if we want the roots themselves, we need to separate them.

The difference

$$
\alpha-\beta
$$

is not symmetric. It changes sign when $\alpha$ and $\beta$ are swapped.

However, its square is symmetric:

$$
(\alpha-\beta)^2.
$$

Compute it using Vieta:

$$
(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta=s^2-4p.
$$

So the discriminant is

$$
\Delta=s^2-4p.
$$

The discriminant itself is still symmetric. It has not chosen which root is
which. But taking a square root gives

$$
\alpha-\beta=\pm\sqrt{\Delta}.
$$

Now

$$
\alpha=\frac{s+\sqrt{\Delta}}2,\qquad
\beta=\frac{s-\sqrt{\Delta}}2,
$$

with the two signs swapped if the two roots are renamed.

This is the first model:

> The discriminant is a symmetric square. Its square root introduces a sign
> choice, and that sign choice separates the roots.

That is what it means to say the discriminant breaks the symmetry. The
discriminant itself is symmetric; the square root gives access to a
non-symmetric difference.

---

## 3. Degree 3: The Missing Bridge

It is too big a jump to go straight from quadratics to quartics. Cubics show a
different kind of symmetry-breaking.

Let the roots of a cubic be $\alpha,\beta,\gamma$. The cubic discriminant has
the structural form

$$
\Delta_3=(\alpha-\beta)^2(\beta-\gamma)^2(\gamma-\alpha)^2.
$$

This is symmetric in the three roots. If we rename the roots, the product may
be rearranged, but its value does not change.

For the depressed cubic

$$
x^3+px+q=0,
$$

a common coefficient form is

$$
\Delta_3=-4p^3-27q^2.
$$

The usual cubic formula often contains the related quantity

$$
\left(\frac q2\right)^2+\left(\frac p3\right)^3
=-\frac{\Delta_3}{108}.
$$

Do not worry about using this formula today. The important point is what
happens when we take a square root:

$$
\sqrt{\Delta_3}
=\pm(\alpha-\beta)(\beta-\gamma)(\gamma-\alpha).
$$

This new expression is no longer fully symmetric. If we swap two roots, its
sign changes. So the square root of the cubic discriminant distinguishes the
two possible orientations of the three roots:

$$
\alpha\to\beta\to\gamma\to\alpha
\qquad\text{or}\qquad
\alpha\to\gamma\to\beta\to\alpha.
$$

In plain symmetry language:

$$
\text{six ways to name the three roots}
\quad\longrightarrow\quad
\text{two possible cyclic orientations}.
$$

This is already more subtle than the quadratic case. In a quadratic, the square
root leaves only a sign choice. In a cubic, after the square-root step there is
still a threefold cyclic ambiguity: the roots can still be cycled.

That is why cubic formulas involve cube roots. Cube roots naturally come with
three compatible choices, and those choices deal with the remaining cyclic
symmetry. Students do not need the full complex-number machinery here. The
picture to keep is:

$$
\text{square root of discriminant}
\quad\text{chooses an orientation,}
$$

$$
\text{cube roots}
\quad\text{separate the remaining threefold cycle.}
$$

A complete cubic formula packages this process into a calculation, but that
calculation is not the object of this lesson. The object is the symmetry story:

> The cubic discriminant is symmetric; its square root separates the two cyclic
> orientations of the three roots; cube-root choices handle the remaining
> threefold ambiguity.

This is enough bridge for today. We are not trying to teach a complete cubic
formula. We only need to see why the move from degree 2 to degree 4 cannot be
explained by "just take another square root."

---

## 4. Degree 4: Why Pairings Appear

Now return to the quartic in STEP III 2017 Q3.

For four roots, Vieta gives symmetric information:

$$
\alpha+\beta+\gamma+\delta,
$$

$$
\alpha\beta+\alpha\gamma+\alpha\delta+\beta\gamma+\beta\delta+\gamma\delta,
$$

$$
\alpha\beta\gamma+\alpha\beta\delta+\alpha\gamma\delta+\beta\gamma\delta,
$$

$$
\alpha\beta\gamma\delta.
$$

This is not enough to name the four roots.

The next controlled move is to split the four roots into two pairs. There are
exactly three ways:

$$
(\alpha,\beta)(\gamma,\delta),
$$

$$
(\alpha,\gamma)(\beta,\delta),
$$

$$
(\alpha,\delta)(\beta,\gamma).
$$

For these pairings, form

$$
y_1=\alpha\beta+\gamma\delta,
$$

$$
y_2=\alpha\gamma+\beta\delta,
$$

$$
y_3=\alpha\delta+\beta\gamma.
$$

None of $y_1,y_2,y_3$ is fully symmetric on its own. If the roots are renamed,
the three values may swap places.

But the set

$$
\{y_1,y_2,y_3\}
$$

is stable. Renaming the four roots just rearranges the three possible pairings.

That is why a resolvent cubic appears: it can have these three pairing
quantities as its roots. Solving this cubic does not yet give the four roots.
It first chooses a pairing structure.

---

## 5. Determining $A$ In STEP III 2017 Q3

Let

$$
x^4+px^3+qx^2+rx+s=0
$$

have roots $\alpha,\beta,\gamma,\delta$. By Vieta,

$$
\alpha\beta+\alpha\gamma+\alpha\delta+\beta\gamma+\beta\delta+\gamma\delta=q.
$$

Using the definitions

$$
y_1=\alpha\beta+\gamma\delta,
$$

$$
y_2=\alpha\gamma+\beta\delta,
$$

$$
y_3=\alpha\delta+\beta\gamma,
$$

we get

$$
y_1+y_2+y_3=q.
$$

The resolvent cubic has roots $y_1,y_2,y_3$. Therefore it has the form

$$
(y-y_1)(y-y_2)(y-y_3)=0.
$$

The coefficient of $y^2$ is

$$
-(y_1+y_2+y_3)=-q.
$$

So in

$$
y^3+Ay^2+(pr-4s)y+(4qs-p^2s-r^2)=0,
$$

we must have

$$
\boxed{A=-q.}
$$

This is Vieta applied one level higher: not to the four original roots, but to
the three pairing quantities.

---

## 6. Solving The Particular Quartic

Now take

$$
p=0,\qquad q=3,\qquad r=-6,\qquad s=10.
$$

The quartic is

$$
x^4+3x^2-6x+10=0.
$$

The resolvent cubic is

$$
y^3-3y^2-40y+84=0.
$$

Factor:

$$
y^3-3y^2-40y+84=(y-7)(y-2)(y+6).
$$

The largest root is $7$. Hence

$$
\alpha\beta+\gamma\delta=7.
$$

Using $q=3$,

$$
(\alpha+\beta)(\gamma+\delta)
=\alpha\gamma+\alpha\delta+\beta\gamma+\beta\delta
=q-(\alpha\beta+\gamma\delta).
$$

So

$$
(\alpha+\beta)(\gamma+\delta)=3-7=-4.
$$

Using $s=10$,

$$
(\alpha\beta)(\gamma\delta)=10.
$$

Also

$$
\alpha\beta+\gamma\delta=7.
$$

Therefore $\alpha\beta$ and $\gamma\delta$ are the roots of

$$
z^2-7z+10=0.
$$

Since $\alpha\beta>\gamma\delta$,

$$
\alpha\beta=5,\qquad \gamma\delta=2.
$$

Now let

$$
U=\alpha+\beta,\qquad V=\gamma+\delta.
$$

Since $p=0$,

$$
U+V=0.
$$

Since $r=-6$,

$$
\alpha\beta\gamma+\alpha\beta\delta+\alpha\gamma\delta+\beta\gamma\delta=6.
$$

Rewrite the left side as

$$
\alpha\beta(\gamma+\delta)+\gamma\delta(\alpha+\beta)=5V+2U.
$$

Thus

$$
5V+2U=6.
$$

Together with $U+V=0$, this gives

$$
U=-2,\qquad V=2.
$$

Now split each pair:

$$
\alpha+\beta=-2,\qquad \alpha\beta=5,
$$

so $\alpha,\beta$ are roots of

$$
X^2+2X+5=0.
$$

Thus

$$
X=-1\pm2i.
$$

Similarly,

$$
\gamma+\delta=2,\qquad \gamma\delta=2,
$$

so $\gamma,\delta$ are roots of

$$
X^2-2X+2=0.
$$

Thus

$$
X=1\pm i.
$$

Therefore the quartic roots are

$$
\boxed{-1\pm2i,\qquad 1\pm i.}
$$

Writing check:

> Solving the resolvent cubic does not give the four roots directly. It chooses
> a pairing quantity. The remaining work is to use square roots to split each
> pair into two individual roots.

---

## 7. The Ladder: Degrees 2, 3, And 4

The three cases now line up.

For degree 2:

$$
\text{symmetric sum/product}
\longrightarrow
\sqrt{(\alpha-\beta)^2}
\longrightarrow
\text{two roots}.
$$

For degree 3:

$$
\text{symmetric cubic data}
\longrightarrow
\sqrt{\Delta_3}
\longrightarrow
\text{orientation of the three roots}
\longrightarrow
\text{cube-root choice for the remaining cycle}
\longrightarrow
\text{three roots}.
$$

For degree 4:

$$
\text{symmetric quartic data}
\longrightarrow
\text{resolvent cubic for pairings}
\longrightarrow
\text{choose a pairing}
\longrightarrow
\text{square roots split the pairs}.
$$

The phrase "solving breaks symmetry" means this:

> The coefficients treat the roots as an unordered set. A solution method adds
> controlled choices that gradually separate that unordered set into individual
> roots.

This also explains why formulas become more complicated as the degree rises.
The issue is not just algebraic length. The issue is how much symmetry must be
broken, and what intermediate objects make that possible.

---
