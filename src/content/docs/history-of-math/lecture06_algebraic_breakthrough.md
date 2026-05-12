---
title: "Lecture 6: The Algebraic Breakthrough—Solving the Cubic and Quartic"
---

## Lecture 6: The Algebraic Breakthrough—Solving the Cubic and Quartic

## Review and Introduction

- Algebra, whose word origin comes from Arabic "al-jabr" meaning "restoration" and "simplification," has solving equations as its core task. Since ancient times, solving equations has been a central problem in mathematics. Linear and quadratic equations were known in many ancient civilizations. However, the cubic equation became a formidable barrier that puzzled mathematicians for centuries. Until the Renaissance in 16th century Italy, an intellectual contest surrounding honor, secrets, and betrayal finally pried open this door. This breakthrough was not only a victory of computational technique, but greatly enhanced human confidence, opening a new era in mathematical development.

## Foundation Review: Linear and Quadratic Equations

### Linear Equations and the "Fangcheng" Method from The Nine Chapters

- Solving systems of linear equations is routine for us today. However, its systematic method dates back nearly two thousand years to China's Han dynasty. In the mathematical masterpiece *The Nine Chapters on the Mathematical Art*, Volume 8 "Fangcheng" (Equations), a famous problem is recorded with a general solution called "Fangcheng shu" (equation method), whose essential idea is nearly identical to today's "Gaussian elimination."

- The original problem from *The Nine Chapters*:

  > "Now there are 3 bundles of superior grain, 2 bundles of medium grain, 1 bundle of inferior grain, yielding 39 dou; 2 bundles of superior grain, 3 bundles of medium grain, 1 bundle of inferior grain, yielding 34 dou; 1 bundle of superior grain, 2 bundles of medium grain, 3 bundles of inferior grain, yielding 26 dou. Ask: how much does one bundle of superior, medium, and inferior grain yield?"

  If we let $x, y, z$ represent the grain yield per bundle of superior, medium, and inferior grain, this becomes:

  $$\begin{aligned} 3x + 2y + z &= 39 \\ 2x + 3y + z &= 34 \\ x + 2y + 3z &= 26 \end{aligned}$$

- The "Fangcheng method" uses counting rods on a calculation board, arranging coefficients and constants into a matrix. This is identical to our modern **augmented matrix** (just transposed):

  $$\left[\begin{array}{ccc|c} 3 & 2 & 1 & 39 \\ 2 & 3 & 1 & 34 \\ 1 & 2 & 3 & 26 \end{array}\right]$$

- The subsequent steps—"multiply the middle row by the upper grain on the right row and directly subtract..."—are a series of **elimination** operations. The goal is to use the first row to eliminate the first coefficient of the second and third rows. The matrix eventually becomes an **upper triangular form**:

  $$\left[\begin{array}{ccc|c} 3 & 2 & 1 & 39 \\ 0 & 5 & 1 & 24 \\ 0 & 0 & 36 & 99 \end{array}\right]$$

  This process is called **Gaussian elimination**. The final matrix corresponds to:

  $$\begin{aligned} 3x + 2y + z &= 39 \\ 5y + z &= 24 \\ 36z &= 99 \end{aligned}$$

  *The Nine Chapters* then describes **back substitution** to solve for $z, y, x$ in sequence. This algorithm, clearly explained nearly two thousand years ago, demonstrates the high maturity and algorithmic thinking of ancient Chinese mathematics in handling multivariate linear problems—a remarkable achievement.

### Quadratic Equations and Completing the Square

- Quadratic equations were studied in ancient Babylon, India, and Greece. The most启发性的 is 9th-century Arab mathematician al-Khwārizmī's geometric method in his book *Algebra*. He visually derived the quadratic formula through "completing the square" with geometric figures. This method not only gives the answer but explains its origin—a model of combining number and shape.

## The Century's Breakthrough: The Legendary Solution of the Cubic

16th century Italy was the stage for the cubic solution legend. This history is filled with flashes of genius, personal grudges, and dramatic conflict.

- **A buried secret**: The story begins with Scipione del Ferro, professor at the University of Bologna. Before his death in 1526, he first discovered the solution to a special cubic equation $x^3 + px = q$, but chose to keep it secret, passing it only to his student Antonio Fior.

- **The "Stammerer's" challenge**: Another self-taught mathematical genius, "the Stammerer" Niccolò Tartaglia, after years of research, independently discovered the solution to the same type of equation. Upon learning this, Fior challenged Tartaglia to a public mathematical contest. Tartaglia won decisively, solving all of Fior's problems, gaining fame.

- **Cardano's vow and *Ars Magna***: Milan scholar Girolamo Cardano heard of this and developed intense interest in Tartaglia's method. He pleaded repeatedly, and according to Tartaglia, swore an oath of secrecy, finally receiving the solution encrypted in poetic form.

- **Breakthrough and publication**: Cardano, with his student Lodovico Ferrari, not only proved the method but extended it to all types of cubic equations. More importantly, they discovered del Ferro was the earlier discoverer. Cardano reasoned that since del Ferro was first, his vow was no longer binding. In 1545, he published the cubic and quartic solutions (discovered by Ferrari) in his masterpiece *Ars Magna*, clearly acknowledging del Ferro and Tartaglia's contributions. This triggered a lifelong feud between him and Tartaglia.

### Core Idea of the Solution (Cardano's Method)

1. **Reducing degree**: First, through substitution $x = y - a/3$, transform the general cubic $x^3 + ax^2 + bx + c = 0$ into a "depressed cubic" without the quadratic term: $y^3 + py + q = 0$.

2. **Brilliant substitution**: Let $y = u + v$. Substituting into the equation and rearranging gives: $(u^3 + v^3) + (3uv + p)(u + v) + q = 0$.

3. **Constructing a system**: If we make $3uv + p = 0$, the equation simplifies to $u^3 + v^3 + q = 0$. Thus we have a system:

   $$\begin{aligned} uv &= -p/3 \\ u^3 + v^3 &= -q \end{aligned}$$

4. **Converting to quadratic**: Cubing the first equation gives $u^3v^3 = (-p/3)^3$. Now knowing the sum and product of $u^3$ and $v^3$, by Vieta's formulas, they are roots of a quadratic equation.

5. **Taking roots**: Taking cube roots of $u^3$ and $v^3$, we get $u$ and $v$, their sum gives $y$, and finally $x$.

### The Casus Irreducibilis and the Birth of Imaginary Numbers

- Cardano's formula was a great achievement, but soon brought a profound puzzle. When applying it to cubic equations known to have three different real roots, the formula's radical always contained a **negative number**. This is called "casus irrereducibilis."

- For example, equation $x^3 - 15x - 4 = 0$. By simple verification, $x=4$ is a solution. But applying Cardano's formula gives:

  $$x = \sqrt[3]{2 + \sqrt{-121}} + \sqrt[3]{2 - \sqrt{-121}}$$

- In that era, square roots of negative numbers were unimaginable, considered "imaginary," "nonexistent." Why must the general formula for an equation with definite real solutions pass through "impossible" calculations? This seemed an unexplainable paradox. Many mathematicians, including Cardano, were confused and uneasy.

- **Bombelli's vision**: The real breakthrough came from Italian engineer and mathematician Rafael Bombelli. In his 1572 book *Algebra*, he proposed a revolutionary idea: temporarily ignore the "reality" of these numbers, treat them as ordinary numbers, and define operation rules for them. He boldly assumed a symbol $i$ satisfying $i^2 = -1$.

- Bombelli showed amazing computational skill. He guessed $\sqrt[3]{2 + \sqrt{-121}}$ (i.e., $\sqrt[3]{2 + 11i}$) might be a complex number $a+bi$. Through trial, he found:

  $$\begin{aligned} (2+i)^3 &= 8 + 12i - 6 - i = 2 + 11i \\ (2-i)^3 &= 2 - 11i \end{aligned}$$

- Thus, the original solution becomes:

  $$x = (2+i) + (2-i) = 4$$

  The imaginary parts cancel perfectly, yielding the known real solution!

- **Historical significance**: Bombelli's calculation is a milestone. Before this, encountering square roots of negatives, mathematicians would simply declare "no solution" as with quadratic equations. But the cubic's "casus irreducibilis" showed that **the process of finding real solutions must pass through the imaginary domain**. Imaginary numbers could no longer be avoided as monsters, but became a necessary bridge to the real world. This "forced" appearance compelled mathematicians to take imaginary numbers seriously, paving the way for complex number theory (completed by Gauss, Cauchy, etc.).

## A Step Further: The Solution of the Quartic

- With Cardano's encouragement, his student Ferrari pressed forward, finding the general solution for quartic equations based on the cubic-solving ideas. His method is more complex, with the core being clever algebraic manipulation and introducing an auxiliary variable to transform quartic solving into solving a cubic (the "resolvent cubic") and two quadratics. This achievement was also published in Cardano's *Ars Magna*.

## The Limit of Exploration? The Challenge of the Quintic

- The success with cubic and quartic equations greatly encouraged mathematicians. Most believed solving quintic and higher equations with the same "radicals" (addition, subtraction, multiplication, division, and roots) was just a matter of time. However, two and a half centuries of effort failed.

- **From "solving" to "understanding structure"**: Finally, in the late 18th to early 19th century, Paolo Ruffini and Niels Henrik Abel proved a stunning conclusion: **general quintic equations have no radical solution**. This "impossibility" proof marked the end of classical algebra—"the theory of solving equations." It forced mathematicians to shift from thinking "how to solve equations" to "why equations can (or cannot) be solved."

### Galois's Revolutionary Idea: Symmetry and Groups

- Young French genius Évariste Galois proposed a groundbreaking perspective, shifting focus from "finding solutions" entirely to "understanding solution structure."

- **Root symmetry**: Galois didn't care about the specific roots, but how roots can be **permuted** without destroying all algebraic relations they satisfy. For example, equation $x^2 - 2 = 0$ has roots $\sqrt{2}$ and $-\sqrt{2}$. We can swap these two roots, and the equation's form remains unchanged. These "permissible" permutations reflect the root's intrinsic symmetry.

- **Galois group**: All these "permissible" permutation operations form a mathematical structure—the **group**. This group, later called the equation's **Galois group**, precisely characterizes all symmetry of the equation's roots.

- **"Solvability" criterion**: Galois genius proved:

  > A polynomial equation can be solved by radicals (i.e., only through addition, subtraction, multiplication, division, and roots) **if and only if** its Galois group is **solvable**.

  A "solvable group" means the group can be decomposed into simpler groups, like breaking a complex molecule into atoms. Quadratic, cubic, quartic equations' Galois groups all satisfy this "solvable" condition.

- **The quintic's fate**: However, the general quintic's Galois group is the "symmetric group of degree 5" $S_5$. Galois proved $S_5$ is an **unsolvable group**—a solid, indivisible whole. This group's "unsolvability" directly corresponds to the quintic's "radical unsolvability." The centuries-old problem was fundamentally answered. This insight directly spawned one of modern mathematics' most important foundations—**group theory**.

### The Tragedy of a Genius: The Life of Galois

- Galois (1811-1832) lived like a brilliant but short-lived meteor. At 16, he showed unparalleled mathematical talent, reading masters like Lagrange and Legendre.

- **Misunderstood genius**: His talent transcended his era and exceeded the understanding of the examination system. He twice failed to enter the prestigious École Polytechnique. Legend says during oral exams, unable to bear the examiner's mundane questions, he threw a blackboard eraser at him.

- **Lost masterpieces**: He submitted his revolutionary papers on equation theory to the French Academy three times. First, Cauchy lost the manuscript; second, Fourier died before review, the manuscript lost again; third, Poisson rejected it as "incomprehensible."

- **Political passion and life's end**: Academically frustrated, Galois poured passion into radical republican politics, imprisoned twice. On May 30, 1832, the 20-year-old Galois was gravely wounded in a duel (reasons still mysterious—possibly love or political conspiracy), dying the next day.

- **The final night**: Before the duel, sensing death, Galois raced against time all night, writing his thoughts on group theory and equations in a letter to a friend, repeatedly writing in margins "I have no time."

- **Delayed recognition**: This letter and his manuscripts were only organized, published, and explained by Joseph Liouville in 1846, 14 years after his death. The world finally recognized the astonishing heights this young man achieved. Galois theory became a core pillar of modern algebra and mathematical physics.

## Epilogue: Two Fun Facts about Polynomials

- **Polynomials are everywhere (Polynomial Interpolation)**: Given any $n$ points on a plane (as long as their $x$ coordinates differ), you can always find a polynomial of degree at most $n-1$ whose graph perfectly passes through all points. This is like an ultimate "connect the dots" game. This powerful property (polynomial interpolation, like Lagrange interpolation) underlies many data fitting, computer graphics, and engineering calculation methods.

- **Polynomials can mimic everything (Weierstrass Approximation Theorem)**: Imagine any smooth continuous curve on a closed interval (no breaks or jumps). Weierstrass's theorem tells us a stunning fact: you can always find a polynomial whose graph approximates your imagined curve to any degree, visually indistinguishable. This means any continuous physical process or signal model can be high-precision simulated by a (possibly high-degree) polynomial. This reveals polynomials' deep status as functions' "basic building blocks."

## Deeper Dive: The Power and Pitfalls of Polynomial Interpolation

### The Construction and Proof of Lagrange Interpolation

For given $n$ points $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ (all $x_i$ distinct), how to construct polynomial $P(x)$ of degree at most $n-1$ passing through all points?

1. **Construct basic modules**: First construct $n$ "basic polynomials" $L_j(x)$, each degree $n-1$. Each $L_j(x)$ has special requirements: value 1 at $x_j$, value 0 at all other $x_i$ ($i \neq j$):

   $$L_j(x_i) = \begin{cases} 1 & \text{if } i=j \\ 0 & \text{if } i \neq j \end{cases}$$

2. **Implement basic modules**: To make $L_j(x)$ zero at $x_i$ ($i \neq j$), include product term $(x-x_1)(x-x_2)\dots$ (excluding $(x-x_j)$). To make it 1 at $x_j$, normalize by dividing by the product's value at $x_j$. Thus we get **Lagrange basis polynomial**:

   $$L_j(x) = \prod_{i=1, i \neq j}^{n} \frac{x-x_i}{x_j-x_i}$$

3. **Combine modules for final solution**: With these basic modules, build the final polynomial $P(x)$:

   $$P(x) = \sum_{j=1}^{n} y_j L_j(x) = y_1 L_1(x) + y_2 L_2(x) + \dots + y_n L_n(x)$$

**Proof**:

- **Existence**: The construction proves existence. When calculating $P(x_k)$:

  $$P(x_k) = \sum_{j=1}^{n} y_j L_j(x_k)$$

  By $L_j(x)$'s definition, when $j \neq k$, $L_j(x_k)=0$, only $L_k(x_k)=1$. So only the $k$-th term remains: $P(x_k) = y_k \cdot 1 = y_k$. This proves the polynomial satisfies all interpolation conditions. Since each $L_j(x)$ is degree $n-1$, their linear combination $P(x)$ has degree at most $n-1$.

- **Uniqueness**: Assume another polynomial $Q(x)$ of degree at most $n-1$ satisfies the same conditions. Let $D(x) = P(x) - Q(x)$. $D(x)$ has degree at most $n-1$, but has zeros at $n$ distinct points $x_1, x_2, \dots, x_n$. A nonzero $k$-degree polynomial has at most $k$ roots. Since $D(x)$ has $n$ roots with degree at most $n-1$, it must be the zero polynomial. So $D(x) \equiv 0$, i.e., $P(x) \equiv Q(x)$. Uniqueness proved.

### The Pitfall of High-Degree Polynomials: Runge's Phenomenon

- Lagrange interpolation is theoretically perfect, but in practice, especially when $n$ is large, encounters a serious problem—**Runge's Phenomenon**.

- This phenomenon: when using high-degree polynomials to interpolate a set of data points (especially equally spaced), the polynomial passes through every point precisely, but in **middle regions**, especially at interval **ends**, exhibits violent, uncontrollable **oscillation**. More points, higher degree, worse oscillation.

- A classic example is Runge function $f(x) = \frac{1}{1+25x^2}$. If we take more equally spaced points on $[-1, 1]$ and fit with higher-degree interpolation polynomials, the polynomial wildly oscillates near -1 and 1, far from the original function's smooth curve.

- This reveals a profound truth: a complex model (high-degree polynomial) passing through all data points isn't necessarily a good model. It may overly "accommodate" data, causing "overfitting."

### The Solution: Piecewise and Smooth—Spline Interpolation

- How to avoid Runge's phenomenon? A successful method: abandon **single** high-degree polynomial, use **piecewise** low-degree polynomials to connect points—**Spline Interpolation**.

- The name comes from a drawing tool engineers used—a flexible thin wood or plastic strip (spline), bent to pass through specific points on drawings, drawing smooth curves.

- **Cubic spline** is most common:
  1. Between each pair of adjacent points $(x_i, y_i)$ and $(x_{i+1}, y_{i+1})$, connect with a **cubic polynomial** (not a seventeenth-degree or higher).
  2. To make the pieced curve look like "one whole" smooth curve, at each connection point ("knot"), force adjacent cubic polynomials to have **equal first derivatives** (ensuring tangent slope continuity, no sharp corners) and **equal second derivatives** (ensuring curvature continuity, no sudden bending changes).

- Through this, spline interpolation constructs a curve passing through all data points, pieced from many low-degree polynomials "smoothly." Because it avoids any high-degree polynomial, it fundamentally prevents Runge's phenomenon. The resulting curve is flexible and stable—one of the most widely used, reliable methods in data interpolation and computer graphics.

## Questions for Exploration

1. **Ancient algorithmic thought**:
   - Based on the "Fangcheng method" from *The Nine Chapters*, explain the meaning of the original text and the process of solving linear systems.

2. **Solution of cubic equations**:
   - Apply Cardano's method to solve $x^3 - 15x - 4 = 0$. You'll encounter square roots of negatives (imaginary numbers)—the first historical scene forcing imaginary numbers onto the mathematical stage. Don't fear; boldly calculate to see if you reach a real solution (hint: one solution is 4).

3. **Intersection of algebra and geometry**:
   - French mathematician Viète discovered solving depressed cubic $y^3 - py = q$ is essentially equivalent to **trisecting an arbitrary angle**. Why are these seemingly unrelated problems connected? (Reference textbook 6.6).

4. **Paradigm shift and ignored proofs**:
   - In 19th century, mathematicians proved two long-standing problems "impossible": Abel proved general quintics have no radical solution; Pierre Wantzel in 1837 proved trisecting arbitrary angles and doubling cubes with ruler and compass alone are impossible. Both proofs mark a profound shift in mathematical thought: from "how to find solutions" to "proving solutions don't exist." Yet Wantzel's proof was almost completely ignored, rediscovered decades later. Science philosopher Thomas Kuhn calls this difficulty of "paradigm shift." Think: Why was a correct, revolutionary proof (like Wantzel's) ignored by mainstream mathematics? What does this reveal about mathematical knowledge's evolution and propagation?

5. **Weierstrass's "oracle" vs "blueprint"**:
   - Weierstrass's theorem guarantees any continuous function *can* be approximated by a polynomial to any degree. After viewing relevant videos, think: Is this theorem more like an "oracle" (guaranteeing "existence") or a "blueprint" (providing construction methods)? In practice, if we want high-precision polynomial simulation of a complex function (like weather models), does this theorem directly help find that polynomial? Is its main value theoretical or practical?

6. **"Global" vs "local" tradeoff**:
   - After viewing spline function videos, compare Lagrange interpolation and spline interpolation. Lagrange uses a "global," single high-degree polynomial through all data points; spline uses "local," piecewise low-degree polynomials pieced together. What tradeoff do these methods reflect in thought? To gain stability, what characteristics does spline interpolation sacrifice?