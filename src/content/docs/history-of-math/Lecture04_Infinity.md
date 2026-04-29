---
title: "Lecture 4: The Concept of Infinity in Greek Mathematics"
---

# Lecture 4: The Concept of Infinity in Greek Mathematics

## Introduction

Infinity is one of the most profound, challenging, and thought-provoking concepts in mathematics. For the ancient Greeks, infinity was both alluring and terrifying. How did they manage to rigorously handle infinity-related problems without directly embracing "the infinite"? This is what we will explore today.

## Fear of Infinity: Zeno's Paradoxes

The cautious attitude of Greek mathematicians towards infinity largely stems from a series of profound paradoxes proposed by the philosopher Zeno of Elea (c. 490–430 BCE).

**Two Views of Infinity:**

- **Potential Infinity:** A process that can continue indefinitely. For example, the sequence of natural numbers can be counted forever. This was generally accepted.
- **Actual Infinity:** Conceiving of an infinite number of objects as a single, complete, and definite entity (e.g., the set of all natural numbers $\{1, 2, 3, \dots\}$). This was strongly avoided.

**Zeno's Paradoxes:**

- **The Dichotomy:** To reach a destination, an object must first reach the halfway point, then the halfway point of the remaining distance, and so on ad infinitum. The conclusion is that motion can never begin.

**Eastern Echoes: Zhuangzi's Infinite Division:** Interestingly, in the distant East, the Daoist philosopher Zhuangzi (c. 369–286 BCE) proposed a similar idea. In his writings, he stated: "A stick one foot long, halved each day, will never be exhausted in ten thousand generations." This precisely describes the same infinite division process as the Dichotomy paradox. However, unlike the Greeks who saw it as a logical crisis, Zhuangzi seemed to embrace this "unexhausted" process as a philosophical affirmation of the infinite nature of the universe.

**Impact of the Paradoxes:** Zeno's paradoxes made Greek mathematicians extremely cautious when dealing with limits, leading them to develop a unique style of proof: instead of directly stating the limit of a sequence, they used **reductio ad absurdum** to prove that no other value could possibly be the limit.

## Eudoxus's Theory of Proportions: Taming Irrationals

Facing the crisis of irrational numbers, Eudoxus (c. 408–355 BCE) proposed a brilliant solution — the theory of proportions.

**Core Idea:** To compare the equality of two magnitudes ($\lambda_1, \lambda_2$), one does not look at their numerical values but at their relationship with all rational magnitudes.

**Definition:** $\lambda_1 = \lambda_2$ if and only if every rational magnitude less than $\lambda_1$ is also less than $\lambda_2$, and every rational magnitude greater than $\lambda_1$ is also greater than $\lambda_2$.

**Avoiding Infinity:** This theory cleverly avoids treating "the set of all rational numbers" as an "actual infinity" by making judgments "for any given rational number."

## The Method of Exhaustion: A Rigorous Path to Quadrature

The method of exhaustion is the application of the theory of proportions to problems of finding areas and volumes (quadrature).

**Core Principle:** Use simple, known shapes (like polygons) to infinitely approximate an irregular figure, "exhausting" the difference in area by proving it can be made **arbitrarily small**.

**Style of Proof:** To prove that the area of a circle is proportional to the square of its radius, the argument proceeds by:

1. Assume the ratio of the areas is **not equal** to the ratio of the squares of the radii (e.g., $A_1/A_2 < r_1^2/r_2^2$).
2. Construct an inscribed polygon whose area is so close to the circle's that it leads to a contradiction with known geometric theorems.
3. Therefore, the initial assumption is false. The same can be shown for the greater-than case, leaving equality as the only possibility.

## Archimedes' Masterpiece: Quadrature of the Parabola

Archimedes (c. 287–212 BCE) applied the method of exhaustion to a masterful degree.

**Ingenious Subdivision:** He "filled" the parabolic segment with a series of triangles, starting with a maximal inscribed triangle $\Delta_1$, then constructing new maximal triangles in the remaining segments.

**Astonishing Discovery:** Archimedes proved that the sum of the areas of all triangles added at each new step is **exactly equal** to $\frac{1}{4}$ the sum of the areas of the triangles from the previous step.

**Sum of a Geometric Series:** The total area $A$ of the parabolic segment is an infinite geometric series:

$$
A = \Delta_1 + \frac{1}{4}\Delta_1 + \left(\frac{1}{4}\right)^2\Delta_1 + \left(\frac{1}{4}\right)^3\Delta_1 + \cdots
$$

**Final Result:** Archimedes rigorously proved using the method of exhaustion that **the area of a parabolic segment is $\frac{4}{3}$ that of its largest inscribed triangle**.

## Cantor's Revolution: The Birth and Impact of Set Theory

### The Challenge of 'Actual Infinity' and Early Controversies

**Breaking a Millennial Taboo:** In the late 19th century, the German mathematician Georg Cantor directly challenged the philosophical ban — established by Aristotle and deeply rooted in Western mathematics — that only "potential infinity" was acceptable while "actual infinity" was rejected. He proposed treating infinite wholes (such as the set of all natural numbers $\mathbb{N}$) as explicit, studyable mathematical objects, namely "sets."

**Astonishing Discoveries:** Through the simple principle of "one-to-one correspondence" to compare the sizes of infinite sets, Cantor arrived at a series of counterintuitive conclusions: the infinities of natural numbers, integers, and rational numbers are all the same size ("countable infinity," denoted $\aleph_0$); while the infinity of real numbers is a larger infinity ("uncountable infinity"). This proved that infinity itself has a hierarchical structure.

**Fierce Opposition:** Cantor's theory faced fierce opposition from constructivists and finitists, led by his former mentor Leopold Kronecker. Kronecker believed that only objects constructible in finitely many steps from integers were legitimate subjects of mathematics, and he publicly criticized Cantor's theory as "mathematical mysticism." This opposition severely affected Cantor's career and mental health.

### The Paradox Crisis and the Axiomatic Movement

**Liberation of Thought:** After Kronecker's death in 1891, a new generation of mathematicians, led by David Hilbert at Göttingen, publicly supported Cantor's theory. Hilbert's famous quote — "No one shall expel us from the paradise that Cantor has created" — represented this new mathematical philosophy that valued logical consistency above all.

**The Paradox Crisis:** However, just as set theory began to be widely accepted as the new foundation of mathematics, deep internal problems emerged. At the turn of the century, a series of paradoxes were discovered within Cantor's naive set theory, most famously Russell's paradox (1901): consider "the set of all sets that do not contain themselves." These paradoxes directly shook the foundations of mathematics, triggering the "third mathematical crisis."

**The Axiomatic Response:** To resolve the crisis, mathematicians launched the axiomatic movement. Ernst Zermelo proposed the first axiomatic system for set theory in 1908, later refined by Abraham Fraenkel and others, ultimately forming the ZFC axiomatic system widely accepted today. ZFC precisely defines which objects can be called "sets" and how new sets can be legitimately constructed, successfully avoiding known paradoxes.

### The Continuum Hypothesis and Its Independence

**A Central Question:** Cantor posed a question: is there an infinite set whose size lies between that of the natural numbers ($\aleph_0$) and the real numbers? This is the famous "Continuum Hypothesis" (CH). Hilbert listed it as the first of his 23 century problems in 1900.

**The Surprising Final Answer:** Gödel (1940) proved that CH cannot be disproved in ZFC; Cohen (1963) proved that it cannot be proved either. This means the Continuum Hypothesis is independent of the ZFC axiomatic system.

## Questions for Exploration

1. Choose another of Zeno's paradoxes (like "Achilles and the Tortoise"), restate its argument in your own words. Where do you think the logical "trap" lies?

2. What are the similarities in the core ideas of Eudoxus's theory of proportions and Dedekind's construction of real numbers? What is the nature and significance of the shift from "geometric magnitudes" to "sets of numbers"?

3. Euclid's *Elements* (Book XII) contains a proof that "the volume of any pyramid is one third the volume of the prism with the same base and equal height." Research and outline this proof.

4. How did Archimedes use the geometric properties of the parabola to prove that the sum of the areas of the new generation of triangles is $\frac{1}{4}$ that of the previous generation?

5. Cantor's set theory transformed 'actual infinity' from a philosophical taboo into a mathematical object, triggering the 'third mathematical crisis.' Reflect on this: What kind of paradigm shift does this represent? After accepting 'infinities of infinities,' is mathematics still merely a tool for describing the 'truth' of our intuitive world? What is its essence?
