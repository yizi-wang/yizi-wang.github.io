---
title: Exponents are not just "multiplying a few times"
---

# Exponents are not just "multiplying a few times"

When students hear about exponents for the first time, there is usually not much resistance.

$2^3$ is just $2\cdot2\cdot2$. This explanation is very easy to use, intuitive, effortless, and matches students' existing experience with multiplication.

Trouble starts with $2^{-1}$. If an exponent is just "multiplying itself by how many times", then negative one times, half a time, or $\sqrt2$ times makes no sense. The problem is not with the student, but that this sentence was originally only suitable for positive integer exponents.

Later on, the explanation must change. First, save the laws of exponents, then use continuity to fill in real number exponents. Once in calculus, $e^x$ will stand out on its own because of its derivative properties. If students always strictly apply "multiplying a few times", they will eventually get stuck.

## Start from $2^n$, but don't stop there

Starting from $2^3$ is fine.

$$
2^3=2\cdot2\cdot2
$$

Within the scope of positive integer exponents, repeated multiplication explains it very cleanly. It can also derive the law of exponents:

$$
2^3\cdot2^4=(2\cdot2\cdot2)(2\cdot2\cdot2\cdot2)=2^7
$$

So we get

$$
2^m\cdot2^n=2^{m+n}
$$

This equation is initially only observed within the positive integers. The next question to ask is: if we still want this equation to hold true, how should new exponents be defined?

At this point, a definition is not a patch. It is answering whether a rule that has already appeared can still be used.

## Negative exponents were forced out by the laws of exponents

Ask students:

$$
2^3\cdot2^{-1}
$$

If the law of exponents is to still hold, it should equal

$$
2^{3+(-1)}=2^2
$$

Which is

$$
8\cdot2^{-1}=4
$$

So

$$
2^{-1}=\frac12
$$

Don't rush to say "a negative exponent is just the reciprocal" here. The sequence must be made clear: it's not knowing what $2^{-1}$ is first and then verifying the law of exponents; it's the law of exponents forcing out the value of $2^{-1}$.

Similarly,

$$
2^{-3}=\frac1{2^3}
$$

The reason is not that "negative three multiplications" has some mysterious meaning. The reason is

$$
2^3\cdot2^{-3}=2^0=1
$$

This step can conveniently explain $2^0=1$ as well. Many students treat $a^0=1$ as an isolated stipulation, but it actually comes from the same structural requirement:

$$
2^3\cdot2^0=2^3
$$

Then $2^0$ can only be 1.

At this point, the exponent has changed its meaning for the first time. Positive integer exponents can still be said to be "multiplying a few times", but a more accurate statement for negative and zero exponents is: to preserve $2^m2^n=2^{m+n}$, they must be defined this way.

## Fractional exponents are searching backwards for numbers

Next ask:

$$
2^{1/2}
$$

If we still want to preserve

$$
(2^x)^n=2^{nx}
$$

Then

$$
(2^{1/2})^2=2^{1}=2
$$

So $2^{1/2}$ should be the positive number that equals 2 when squared, which is

$$
2^{1/2}=\sqrt2
$$

This is not "multiplying 2 by itself half a time". It is worth pausing here. What a fractional exponent is looking for is a number that fits into the law of exponents.

$2^{3/2}$ is the same. It can be written as

$$
2^{3/2}=(2^{1/2})^3=(\sqrt2)^3
$$

It can also be written as

$$
2^{3/2}=(2^3)^{1/2}=\sqrt8
$$

Only when both calculations give the same number does the fractional exponent hold ground. Otherwise, $2^{3/2}$ is just a new notation that fails to connect to the original law of exponents.

More generally, $2^{p/q}$ can be understood as the positive number that equals $2^p$ when raised to the $q$-th power:

$$
(2^{p/q})^q=2^p
$$

There is no need to turn the class into real number theory here. Just speaking precisely is enough: rational exponents come from the coordination of radicals and the laws of exponents, not from "multiplying itself $p/q$ times".

## Irrational exponents require continuity

$2^{\sqrt2}$ makes the explanation of "multiplying a few times" fail completely.

$\sqrt2$ is not a number of times you can count out. It's not something that can be explained away as a bit more than 1 time and a bit less than 2 times. We can approximate it using decimals:

$$
1.4,\quad 1.41,\quad 1.414,\quad 1.4142,\ldots
$$

These are all rational numbers, so $2^{1.4}$, $2^{1.41}$, $2^{1.414}$ already have meaning. As the exponent gets closer and closer to $\sqrt2$, the corresponding value should also get closer and closer to a certain definite number. This limit is what we want to call $2^{\sqrt2}$.

There is no need to bring out Dedekind cuts or the completeness of real numbers in the classroom. A picture is enough at first: we have already defined $2^x$ on the rational points, and these points are packed very densely; if the exponential function is to be an unbroken curve, $2^{\sqrt2}$ cannot be filled in arbitrarily.

This is the intuitive version of continuous extension.

Up to this point, the exponential function has moved very far away from "repeated multiplication". Integers rely on repeated multiplication, negative and fractional numbers rely on the laws of exponents, and irrational numbers rely on continuity. Separating these three layers will save a lot of ambiguity when later teaching graphs, transformations, and inverse functions.

## Logarithms are just backward language

After exponential functions are taught up to real exponents, logarithms can conveniently appear.

When $a>0$ and $a\ne1$, $a^x$ maps exponents on the real number line to positive numbers. Taking $2^x$ as an example, $2^x=8$ is asking: to what power must 2 be raised to get 8? The answer is 3. Thus

$$
\log_2 8=3
$$

Logarithms are not a new topic here, just a backward way of stating exponent problems. It helps students understand that "exponents are no longer just a number of times", because the "how much" asked by logarithms can also be negative, fractional, or irrational.

Do not casually expand on change-of-base formulas, logarithmic equations, and graph transformations in this section. All that is needed here is to let students know: if the exponential function is a continuous, monotonic mapping relationship, then a logarithm is just asking backwards along this relationship.

## Why it ultimately leads to $e^x$

Now, looking at $e^x$ again, it is not so abrupt.

If $e$ is taught right off the bat, students easily feel this is a special constant appearing out of nowhere. They are more likely to only remember one sentence: the derivative of $e^x$ is still $e^x$.

This sentence is not wrong, but it's best to appear a bit later.

First let students know that for every base $a>0$, we can get an exponential function $a^x$. When $a\ne1$, these functions all share a common characteristic: the rate of change is proportional to the current value. It grows when the base is greater than 1, and decays when the base is between 0 and 1. Translated into the language of calculus, it is

$$
\frac{d}{dx}a^x = k a^x
$$

where $k$ depends on the base $a$. The larger the base, the larger $k$; if $0<a<1$, this $k$ is negative.

Then $e$ can appear like this: among all the bases, there is one base that makes this constant of proportionality exactly equal to 1. This base is $e$. So

$$
\frac{d}{dx}e^x=e^x
$$

This is much more suitable for connecting high school calculus and differential equations than "because $e$ is the natural constant, so it's important". $e^x$ is special because there is no extra coefficient when taking its derivative.

This is especially obvious when it comes to first-order differential equations.

$$
y'=ky
$$

This sentence means: the rate of change is proportional to the current amount. The solution will look like an exponential function:

$$
y=Ce^{kx}
$$

The $e^{kx}$ here is not an answer guessed out of thin air. It happens to be that class of functions "whose derivative only changes by a proportion". The repeated appearance of $e^{rx}$ in second-order constant-coefficient differential equations is also for the same reason: when a differential operator acts on it, its behavior is exceptionally simple.

For students, this also leaves a little room for when they see $e^{i\theta}$ in the future. There is no need to teach complex exponentials first, but a seed can be planted: when we understand the exponential function as a function that "changes proportionally after taking a derivative", it is no longer restricted by the old explanation of "multiplying itself by how many times".

## How I would conclude this lesson

When actually teaching, I would first concede that $2^3$ is repeated multiplication, to put students at ease. Then probe why $2^0$ and $2^{-1}$ must be 1 and $\frac12$ respectively, grounding the reason in the laws of exponents. Next handle $2^{1/2}$: it is the positive number that equals 2 when squared, not "multiplying half a time".

Only at the end do I ask about $2^{\sqrt2}$. Don't pretend students should understand this step. It inherently requires new ideas. You can give a few strings of approximations:

$$
2^{1.4},\quad 2^{1.41},\quad 2^{1.414},\ldots
$$

Let students see that we are using rational exponents to approximate irrational exponents, and defaulting to the idea that the exponential function should be continuous. Up to this point, then push the question towards calculus: since $2^x$, $3^x$, $10^x$ can all be defined, why do textbooks always favor $e^x$? Leave the answer to the derivative.

This path will be a bit slower. The benefits are also very concrete: students know when they can still say "multiply a few times", when they must switch to the laws of exponents, and when they must invite continuity in.

## Letting AI check boundaries during lesson prep

When using AI for this lesson, you shouldn't let it directly write a complete set of handouts. I would have it check boundaries.

For example, paste in a snippet of my own handout and ask it: which sentences overstated "an exponent is just repeated multiplication"? Where is it necessary to add the sentence "this is to preserve the laws of exponents"? Where was continuity secretly used?

This question is much narrower and more useful than "help me design a lesson on exponential functions". AI is suited to help us find places where we misspoke, and that final classroom language still has to be modified by ourselves. Especially for this lesson, teaching one less practice problem isn't a big deal; using an explanation that only applies to positive integers all the way to real number exponents is much more troublesome.
