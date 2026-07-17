---
title: From cubic equations to complex exponentials
---

# From cubic equations to complex exponentials

When students encounter complex numbers for the first time, the question they most often ask is not how to solve a particular problem.

What they get stuck on is: does $i$ actually count as a number? If $i^2=-1$ is just something the teacher stipulated, then can I also stipulate a new symbol and make it satisfy whatever property I want?

Further down the line, $e^{i\theta}$ feels even more like an outrageous upgrade. Putting an irrational number in the exponent is abstract enough, but now we have to put $i$ up there too, and then tell students it equals $\cos\theta+i\sin\theta$. Students might not object, but internally they likely place it in the category of "advanced formulas, just memorize it for now".

I am reluctant to simply attribute this to students being unwilling to accept new things. Much of the time, it's because the mathematics in between has been compressed away by us.

## Don't start with "stipulating $i^2=-1$"

The statement "stipulate $i^2=-1$" is not wrong. The problem is, if that is the entry point, what the student sees is an artificially added object. The teacher knows it is supported by algebra, geometry, and differential equations later on, so they feel this stipulation is natural; the student at this moment only sees a lone symbol.

I prefer to first present an awkward fact: some real number problems, which clearly have real number answers, force you to face the square root of a negative number in the intermediate steps.

The most common classroom version is the cubic equation

$$
x^3-15x-4=0.
$$

This equation has a very plain real number solution: $x=4$. Substituting it in gives

$$
64-60-4=0.
$$

Here comes the problem. If we use Cardano's formula to handle this kind of cubic equation, the intermediate steps will produce

$$
\sqrt{-121}.
$$

In other words, the formula seems to require us to calculate

$$
\sqrt[3]{2+\sqrt{-121}}+\sqrt[3]{2-\sqrt{-121}}.
$$

There is no need to fully derive Cardano's formula here. Just let students see one thing: an equation that clearly has a real number solution, if calculated according to the formula of the time, will put $\sqrt{-121}$ right in front of you. It didn't appear just to create a sense of mystery.

This history of Bombelli should be stated a bit conservatively in class: 16th-century algebraists encountered these "seemingly illegal" intermediate quantities in cubic equations; Bombelli seriously calculated the arithmetic rules for these quantities and showed that they could synthesize into real number answers at the end. For example, in the above case, we can observe that

$$
(2+i)^3=2+11i,\qquad (2-i)^3=2-11i.
$$

So

$$
\sqrt[3]{2+11i}+\sqrt[3]{2-11i}=(2+i)+(2-i)=4.
$$

We write it very smoothly today because we already have modern complex number notation. Historically, it wasn't this clear to everyone from the beginning. More accurately, it wasn't that someone patted their head, stipulated a new number, and forced equations to accommodate it; it was that the calculation of real number equations first pushed this intermediate object to the center stage.

The name "imaginary" can easily mislead students. It sounds like a fake, but it's actually more like a set of coordinates that hadn't been drawn yet. It feels weird at first because we only allowed ourselves to look at problems standing on the real number line.

## But the problem of complex exponentials is still not solved

After acknowledging $i$, students will ask a second question: even if $i$ can be calculated, why would $e^{i\theta}$ have anything to do with trigonometric functions?

If you directly give Euler's formula here

$$
e^{i\theta}=\cos\theta+i\sin\theta,
$$

most students will think it's very beautiful, but also highly inexplicable. The problem lies right here: beautiful formulas are especially prone to being memorized by students as mysterious conclusions.

I prefer to enter from differential equations.

Let's first take the exponential function out of "repeated multiplication". For A-Level Further Maths students, the most important property of $e^{rx}$ is not its graph, but its derivative:

$$
\frac{d}{dx}e^{rx}=re^{rx}.
$$

In other words, it is the solution to the equation

$$
y'=ry,\qquad y(0)=1
$$

This perspective is very suitable for explaining complex exponentials: if $r$ can be a real number, why can't we ask what the solution to the equation is when $r=i$?

Thus consider

$$
z'=iz,\qquad z(0)=1.
$$

We should pause here, no rush to write the answer. Let's first look at the geometric meaning of this line of equations.

On the Argand diagram, a complex number $z=x+iy$ can be seen as a point or vector $(x,y)$ on the plane. What happens when you multiply by $i$?

$$
i(x+iy)=-y+ix.
$$

Which means

$$
(x,y)\mapsto(-y,x).
$$

This transformation is exactly a $90^\circ$ counter-clockwise rotation. For example, $1$ becomes $i$, $i$ becomes $-1$, $-1$ becomes $-i$. If students have already drawn Argand diagrams, having them mark this themselves is more useful than listening to the teacher say it.

So the meaning of

$$
z'=iz
$$

is: the position of the point is $z$, and its velocity $z'$ is always equal to the vector obtained by rotating the current position $90^\circ$.

In human terms, the velocity is always perpendicular to the position.

This is the picture of circular motion. A point starts from $1$, and its velocity always goes in the direction perpendicular to the radius. It won't run outwards, nor will it fall inwards, it will just rotate around the origin. This statement is enough as an intuitive explanation for now; rigorous proof can be temporarily put aside.

Next, we calculate. Let

$$
z(\theta)=x(\theta)+iy(\theta).
$$

Substitute into $z'=iz$:

$$
x'+iy'=i(x+iy)=-y+ix.
$$

Comparing real and imaginary parts, we get

$$
x'=-y,\qquad y'=x.
$$

Differentiate once more:

$$
x''=-y'=-x,\qquad y''=x'=-y.
$$

At this point, the familiar trigonometric functions return. The initial condition $z(0)=1$ means

$$
x(0)=1,\qquad y(0)=0.
$$

From $x'=-y,\ y'=x$ we also get

$$
x'(0)=0,\qquad y'(0)=1.
$$

The function satisfying

$$
x''=-x,\quad x(0)=1,\quad x'(0)=0
$$

is $\cos\theta$; the function satisfying

$$
y''=-y,\quad y(0)=0,\quad y'(0)=1
$$

is $\sin\theta$. So

$$
z(\theta)=\cos\theta+i\sin\theta.
$$

On the other hand, if we understand "$e^{r\theta}$" as the solution to the differential equation

$$
z'=rz,\qquad z(0)=1
$$

then when $r=i$, this solution is denoted as $e^{i\theta}$. Therefore

$$
e^{i\theta}=\cos\theta+i\sin\theta.
$$

By this point, $e^{i\theta}$ isn't equaling trigonometric functions out of thin air. We just extended the property of the exponential function "derivation only changes the proportion" to $r=i$, and the calculated motion just happens to go around the unit circle.

## Don't mention rotation too early

Many teachers, when reaching this point, will casually say: so $e^{i\theta}$ represents rotation.

This sentence can be said, but if said too early, students will still feel the teacher is just naming things. Let them first see a few concrete facts:

Multiplying by $i$ rotates a vector by $90^\circ$.

$z'=iz$ means velocity is always the direction of position rotated by $90^\circ$.

After splitting $z=x+iy$, the real and imaginary parts satisfy $x''=-x,\ y''=-y$ respectively, so $\cos$ and $\sin$ appear.

Only then when you say "rotation", does it sound like a shorthand for that string of calculations we just did.

## Pushing one step further: growth and rotation can be superimposed

With this entry point, when we later teach

$$
e^{(a+bi)x}=e^{ax}e^{ibx}
$$

we don't have to teach it as another magical formula.

We can state it plainly: $a$ is in charge of the real exponent part, bringing growth or decay; $bi$ is in charge of the imaginary exponent part, bringing rotation or oscillation. Put together, it's rotating while zooming in or out.

So when the characteristic roots of a second-order differential equation are

$$
a\pm bi
$$

it's not surprising that the solutions contain

$$
e^{ax}\cos bx,\qquad e^{ax}\sin bx
$$

$e^{ax}$ is the outer envelope, $\cos bx,\sin bx$ is the oscillation inside. If students later study damped oscillations, this thread will be very useful.

This lesson does not need to touch general complex variables. The goal is very narrow: first, make $i$ no longer look like a hard stipulation, and then make $e^{i\theta}$ no longer look like a black box. Achieving these two points will remove some of the memorization flavor from Euler's formula, characteristic roots, and damped oscillations later on.

## I would put Euler's formula at the end

I would first use cubic equations to create trouble.

If an equation has real number solutions, but $\sqrt{-121}$ appears in the middle of the formula, should we say the formula is broken, or the number system is insufficient? $x^3-15x-4=0$ is sufficient enough. Let students first verify $x=4$, and then show that Cardano's formula will lay out the square root of a negative number. Do not completely derive the formula, just display the scene of contradiction.

Then teach the simplified classroom version of Bombelli: some "illegal" intermediate quantities, calculated according to consistent rules, will eventually synthesize into real numbers. Make it clear here that we are not restoring complete history, just using this example to explain why complex numbers were forced to appear.

Then move on to the Argand diagram. $i(x+iy)=-y+ix$, so multiplying by $i$ is a $90^\circ$ rotation. This step requires drawing pictures, not just writing formulas.

Finally, use $z'=iz,\ z(0)=1$ to deduce $x'=-y,\ y'=x$, and then deduce $x''=-x,\ y''=-y$. After $\cos$ and $\sin$ appear on their own, then give $e^{i\theta}=\cos\theta+i\sin\theta$. If Euler's formula is written too early, it's just a beautiful conclusion; writing it a bit later makes it look like something calculated.

## Two shortcuts I would avoid

The first one is to introduce complex numbers by saying "we stipulate $i^2=-1$" and then immediately begin algebraic operations. This is very efficient, but students will think mathematics is just the teacher approving certain symbols as legal.

The second one is to directly throw out Euler's formula as a beautiful conclusion. To someone who already understands it, it is beautiful of course; to a student who hasn't walked this path, it is just a more advanced black box.

## Let AI check two things during lesson prep

When using AI to prepare this lesson, I would only let it check two things.

One is historical boundaries. Write down the cubic equation and Bombelli part, and ask it: which statements are classroom simplifications, and which historical details need to be verified before class? Don't let it narrate the simplified version as complete historical fact.

Two is the order of derivation. Paste the blackboard draft of $z'=iz,\ z(0)=1$ into it and ask: from multiplying by $i$ being a $90^\circ$ rotation, to $x'=-y,\ y'=x$, to $x''=-x,\ y''=-y$, are there any steps that jumped too fast?

AI is suitable for helping to check gaps here, not for writing the "meaning of complex numbers" for you. Once those kinds of words are written large, they easily become empty.
