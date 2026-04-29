---
title: "Lecture 1: The Pythagorean Theorem"
---

# Lecture 1: The Pythagorean Theorem and Its Historical Context

## What is the Pythagorean Theorem?

Imagine, thousands of years ago, without precise measuring instruments, how did ancient craftsmen ensure that palace corners were perfect right angles? How did farmers accurately calculate the area of a field with an oblique side? Behind these seemingly simple practical needs lies a profound theorem that spans thousands of years of mathematical history, connects arithmetic and geometry, and even once triggered a mathematical crisis.

**Statement:**

$$
a^2 + b^2 = c^2
$$

where $a$ and $b$ are the legs, and $c$ is the hypotenuse.

**Geometric meaning:** This formula represents the relationship between the areas of three squares.

**Early applications:** Ancient people might have recognized this theorem through simple practical activities, such as constructing a (3, 4, 5) right triangle using a rope with 12 equally spaced knots to determine right angles.

**Bridge between Arithmetic and Geometry:** The beauty of the Pythagorean Theorem lies in its bridging of arithmetic and geometry. Through the correspondence between simple algebraic relations (like $3^2 + 4^2 = 5^2$) and intuitive geometric figures (the side length relationships of right triangles), it reveals the profound internal connection between numbers and shapes.

## Ancient Origins

### Babylonian Contributions

**Plimpton 322 tablet (c. 1800 BCE):** This Babylonian tablet from around 1800 BCE systematically recorded multiple pairs of integers $(a, c)$ such that there exists another integer $b$ satisfying $a^2 + b^2 = c^2$. These integer triples $(a, b, c)$ are called "Pythagorean triples" (like the familiar (3,4,5), (5,12,13), etc.).

### Chinese Achievements

**Zhou Bi Suan Jing (周髀算经):** This mathematical-astronomical work, completed around the 1st century BCE (with some content possibly earlier), is one of China's earliest surviving documents systematically expounding the Pythagorean Theorem. It records a dialogue between Shang Gao and the Duke of Zhou, explicitly presenting the special case of "3-4-5" and discussing its application in ancient measurements.

**Zhao Shuang's String Diagram (赵爽弦图):** In the 3rd century CE, during the Three Kingdoms period, mathematician Zhao Shuang created the famous "String Diagram" while annotating the Zhou Bi Suan Jing. Through the ingenious arrangement of four congruent right triangles and a small central square, forming a large square, he provided a clear and intuitive geometric proof of the Pythagorean Theorem (i.e., $a^2+b^2=c^2$).

**Liu Hui's Proof (刘徽的"青朱出入图"):** Another great mathematician of the same era, Liu Hui, provided a rigorous proof of the Pythagorean Theorem in his commentary on the Nine Chapters on the Mathematical Art. Using the principle of "complementary areas," he proved the theorem through cutting and rearranging shapes (later described as the "Blue-Red In-Out Diagram," using differently colored geometric blocks for transformation), demonstrating the theorem through the concept of dynamic transformation.

## Pythagorean Triples

### Definition and Properties

**Definition:** Positive integer triples $(a, b, c)$ satisfying $a^2 + b^2 = c^2$.

**Systematic Generation:** Ancient Greek mathematicians, especially Euclid (c. 300 BCE) in Book X of his *Elements*, provided a formula for generating all primitive Pythagorean triples (where $a, b, c$ have no common factors).

**Euclid's formula:**

$$
a = p^2 - q^2, \quad b = 2pq, \quad c = p^2 + q^2
$$

where $p, q$ are coprime integers, one odd and one even, $p > q$.

**Rational Points on the Unit Circle:** If $(a, b, c)$ is a Pythagorean triple, then $(a/c, b/c)$ is a rational point on the unit circle $x^2 + y^2 = 1$ (where both $x$ and $y$ coordinates are rational numbers).

## Proofs of the Pythagorean Theorem

### Geometric Proof

The earliest proof was likely obtained through the division and rearrangement of shapes (a form of "area induction"). By constructing two large squares, each containing four identical right triangles, the remaining areas represent both the sum of squares of the legs and the square of the hypotenuse.

### Euclid's Proof

Euclid provided a classic proof based on areas in Proposition 47 of Book I of his *Elements*. In Proposition 31 of Book VI, he gave another more concise proof using the properties of similar triangles.

## Mathematical Crisis

### Discovery of Irrational Numbers

**Discovery of $\sqrt{2}$:** When considering a square with side length 1, according to the Pythagorean Theorem, its diagonal length $d$ satisfies $d^2 = 1^2 + 1^2 = 2$, i.e., $d = \sqrt{2}$.

**Incommensurability:** A member of the Pythagorean school (traditionally said to be Hippasus) proved that $\sqrt{2}$ cannot be expressed as a ratio of two integers, making it an irrational number. This means the side length and diagonal of a square are "incommensurable" — there exists no common unit length that can measure both.

**Philosophical and Mathematical Impact:** This discovery dealt a devastating blow to the Pythagorean school. Their core doctrine "All is number" was based on the foundation that "number" meant integers or ratios of integers (rational numbers). The existence of $\sqrt{2}$ proved that there were quantities in the universe that could not be precisely measured using their understanding of "number."

## Modern Impact

### Unity of Geometry and Algebra

**Distance formula:**

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

**Geometric axiomatization:** From the modern perspective of mathematicians like Hilbert, this distance formula can be seen as one of the axiomatic foundations of plane geometry. Many geometric facts can be derived from algebraic and numerical properties, in a sense "bridging" the ancient Greek separation of number and form.

## Questions for Exploration

1. How was Plimpton 322 interpreted? What methods might the Babylonians have used to systematically find Pythagorean triples?

2. How did Euclid derive his formula for generating all (primitive) Pythagorean triples? Can you try using this formula to generate several sets of Pythagorean triples?

3. How to understand the statement "Pythagorean triples correspond to rational points on the unit circle"? How did Diophantus use the intersection of lines and circles to find rational point coordinates?

4. What specific impact did the discovery of irrational numbers (like $\sqrt{2}$) have on the philosophical thought of the Pythagorean school? How did they try to deal with this "logical scandal"? How did this discovery change the direction of Greek mathematics?

5. What records exist of the Pythagorean Theorem in ancient China? Did the dialogue between Shang Gao and the Duke of Zhou in the Zhou Bi Suan Jing prove the Pythagorean Theorem?
