---
title: What exactly does the auxiliary equation omit?
---

# What exactly does the auxiliary equation omit?

When second-order linear differential equations with constant coefficients appear for the first time, students can usually follow the calculations.

For example, write:

 $$
y''-y'-2y=0
$$ 

Then let

 $$
y=e^{rx}
$$ 

Substitute it in to get

 $$
r^2-r-2=0.
$$ 

The trouble lies here: why does an equation about a function suddenly turn into a quadratic equation about a number  $r$ ? Why is it enough to just try  $e^{rx}$ ? If the quadratic equation has repeated roots, why does an extra  $x$  suddenly appear in the answer?

This isn't just nitpicking. Students are actually just asking one step further: what exactly happened just now?

The traditional way of teaching is very efficient, especially for exams. When encountering

 $$
ay''+by'+cy=0
$$ 

Let  $y=e^{rx}$ , substitute it in, cancel out  $e^{rx}$ , and you get the auxiliary equation:

 $$
ar^2+br+c=0.
$$ 

Then write the general solution according to the roots. In exam training, this process is very fast.

But it bypasses a problem: substituting  $y=e^{rx}$  is only checking if the exponential function works. It hasn't explained why the answer won't miss anything.

Teachers know in their hearts that there is a theoretical guarantee behind this step, but what students often hear is "just let it be this way first". To the student, this step looks a lot like guessing the answer.

I would first treat the auxiliary equation as a kind of shorthand. What  $r^2-r-2$  records behind the scenes is breaking down the second-order derivative action into two first-order actions.

## Starting with an equation

Using

 $$
y''-y'-2y=0
$$ 

as the main example. Don't rush to write  $D$ . Keep  $\frac{d}{dx}$ , because this step is very important for students:

 $$
\left[\left(\frac{d}{dx}\right)^2-\frac{d}{dx}-2\right]y=0.
$$ 

Here  $\left(\frac{d}{dx}\right)^2$  is not the square of a number. It means "differentiate once, then differentiate again".  $\frac{d}{dx}$  is an action acting on a function; two such actions connected together make the second derivative.

In linear equations with constant coefficients,  $\frac{d}{dx}$  and constants can form an operator polynomial like this. So the above operator can be factorized like a quadratic expression:

 $$
\left(\frac{d}{dx}\right)^2-\frac{d}{dx}-2
=
\left(\frac{d}{dx}-2\right)\left(\frac{d}{dx}+1\right).
$$ 

So the original equation can be written as

 $$
\left(\frac{d}{dx}-2\right)\left(\frac{d}{dx}+1\right)y=0.
$$ 

This step reveals one more layer than the auxiliary equation: the original second-order action is now broken down into two consecutive first-order actions.

## Breaking a second-order problem into two first-order problems

Let

 $$
u=\left(\frac{d}{dx}+1\right)y=y'+y.
$$ 

Then the original equation becomes

 $$
\left(\frac{d}{dx}-2\right)u=0,
$$ 

which is

 $$
u'-2u=0.
$$ 

This is a first-order equation that students are already familiar with. Its general solution is

 $$
u=Ce^{2x}.
$$ 

Now go back to  $u=y'+y$ :

 $$
y'+y=Ce^{2x}.
$$ 

This is another first-order linear equation. Using the integrating factor  $e^x$ :

 $$
e^x y'+e^x y=Ce^{3x},
$$ 

so

 $$
(e^x y)'=Ce^{3x}.
$$ 

Integrating gives

 $$
e^x y=Ae^{3x}+B,
$$ 

therefore

 $$
y=Ae^{2x}+Be^{-x}.
$$ 

This is the answer we usually write out directly from the auxiliary equation

 $$
r^2-r-2=(r-2)(r+1)=0
$$ 

The difference is that now students can see the middle path that was omitted.

Why does this guarantee no missing solutions? Because we didn't just check two guessed functions. We first completely solved

 $$
u'-2u=0,
$$ 

getting all possible  $u$ ; then we completely solved

 $$
y'+y=Ce^{2x},
$$ 

getting all possible  $y$ . Each step is the general solution of a first-order equation. After the second-order equation is broken down into two first-order equations, the things in the solution space have been swept through sequentially.

This also explains why there are two arbitrary constants in the end. We solved first-order equations twice, and each integration left a constant.

## Looking back at  $y=e^{rx}$ 

Now if we talk about  $y=e^{rx}$  again, students will accept it much more easily.

If

 $$
y=e^{rx},
$$ 

then

 $$
\frac{d}{dx}y=ry,\qquad
\left(\frac{d}{dx}\right)^2y=r^2y.
$$ 

In other words, on this class of exponential functions, the effect of the action  $\frac{d}{dx}$  is like "multiplying by  $r$ ". So when the operator

 $$
\left(\frac{d}{dx}\right)^2-\frac{d}{dx}-2
$$ 

acts on  $e^{rx}$ , it corresponds to

 $$
r^2-r-2.
$$ 

This is the origin of the auxiliary equation. On exponential functions, the action of differentiation does indeed degenerate into multiplying by a constant.

But we must speak precisely: substituting  $y=e^{rx}$  is only finding exponential-type solutions. The completeness comes from the operator factorization and the two first-order general solutions just now.

You don't necessarily have to use the word "sufficiency" in class, but you can explain the meaning: we didn't just guess two answers just now, we completely solved it once after breaking the original equation apart.

## Repeated roots are not a patch

Repeated roots are where the traditional teaching method most easily looks like a rule.

For example, the auxiliary equation has a repeated root  $r$ . Textbooks often write:

 $$
y=C_1e^{rx}+C_2xe^{rx}.
$$ 

When students ask why they need to multiply by  $x$ , many handouts will say "to find a second linearly independent solution". This statement is correct, but usually not satisfying for A-Level students. It explains the purpose, not the origin.

From an operator perspective, repeated roots correspond to

 $$
\left(\frac{d}{dx}-r\right)^2y=0.
$$ 

We still set an intermediate variable:

 $$
u=\left(\frac{d}{dx}-r\right)y=y'-ry.
$$ 

Then first solve

 $$
\left(\frac{d}{dx}-r\right)u=0,
$$ 

which is

 $$
u'-ru=0.
$$ 

So

 $$
u=Ce^{rx}.
$$ 

Then go back to

 $$
y'-ry=Ce^{rx}.
$$ 

Don't skip this step. Multiply both sides by  $e^{-rx}$ :

 $$
e^{-rx}y'-re^{-rx}y=C.
$$ 

The left side is exactly

 $$
\left(e^{-rx}y\right)'.
$$ 

So

 $$
\left(e^{-rx}y\right)'=C.
$$ 

Integrate:

 $$
e^{-rx}y=Cx+B.
$$ 

Thus

 $$
y=(Cx+B)e^{rx}.
$$ 

This is how  $xe^{rx}$  comes out. When solving the first-order equation for the second time, the right side is already  $Ce^{rx}$ . After multiplying by the integrating factor, the right side becomes a constant, and integration gives  $Cx$ .

This is much steadier than memorizing formulas directly. At the very least, students know that the  $x$  wasn't forcibly inserted just to make up a second solution.

## I would start by breaking the equation

I would first ask a narrow question:

"Can this second-order equation be broken down into two first-order equations?"

Then write

 $$
y''-y'-2y=0.
$$ 

Ask a question: if differentiation is viewed as an action, is  $y''$  doing this action twice in a row?

Then write

 $$
\left[\left(\frac{d}{dx}\right)^2-\frac{d}{dx}-2\right]y=0.
$$ 

No abstract theory is needed here. The thing in the brackets is a combination of actions acting on  $y$ .

Then factorize:

 $$
\left(\frac{d}{dx}-2\right)\left(\frac{d}{dx}+1\right)y=0.
$$ 

Let

 $$
u=\left(\frac{d}{dx}+1\right)y.
$$ 

First solve

 $$
u'-2u=0.
$$ 

Then solve

 $$
y'+y=Ce^{2x}.
$$ 

Only at the end do we return to the auxiliary equation:

 $$
r^2-r-2=0.
$$ 

This quadratic equation is recording the factorization just now.  $r=2$  and  $r=-1$  correspond to the two first-order operators  $\frac{d}{dx}-2$  and  $\frac{d}{dx}+1$ .

This step will take a few extra minutes. The benefit is that when writing the auxiliary equation later, students know what they have omitted, rather than just remembering "you have to let it be  $e^{rx}$  here".

## What I would say less

I would say "let  $y=e^{rx}$ " less often.

This sentence can solve problems, but it is too abbreviated. What the student sees is a guess, what the teacher has in mind is a complete theory. The two sides are not on the same level.

I am also reluctant to use "it can be proven to be a complete solution" as an explanation. For most high school classrooms, this sentence only tells the student: here is a section you can't ask about right now.

First, use an example that can be factorized to break a second-order equation into two first-order equations. After students see that the "complete solution" comes from two first-order general solutions, bring out the auxiliary equation as a shorthand. That way, the tables that follow won't look like they popped out of thin air.

## Where are the boundaries

This article only discusses linear differential equations with constant coefficients.

Within this scope, operator polynomials formed by  $\frac{d}{dx}$  and constants can be handled in familiar algebraic ways. Constants and differential operators will not create extra trouble among themselves.

This doesn't mean all differential operators can be swapped and factorized at will. Equations with variable coefficients, non-linear equations, and boundary condition problems will bring new troubles. These don't need to be expanded upon in A-Level classrooms, but the boundaries should be made clear.

## Letting AI check derivations during lesson prep

The most suitable thing for AI to do in this piece is to check the order of derivation.

I would paste my draft in and let it check only two questions: first, from  $(\frac{d}{dx}-2)(\frac{d}{dx}+1)y=0$  to the two first-order equations, is there any skipped step in between? Second, when dealing with repeated roots, from  $(\frac{d}{dx}-r)^2y=0$  deriving  $y=(Cx+B)e^{rx}$ , is every step something high school students can follow?

This task is very narrow, which makes it useful. If you let AI generate a whole lesson directly, it easily falls into a template of "first concept, then examples, finally summary". If you let it check where a derivation jumped, the result will be much more stable.
