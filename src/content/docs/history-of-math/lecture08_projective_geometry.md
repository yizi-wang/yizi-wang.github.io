---
title: "Lecture 8: Projective Geometry—Perspective, Invariants, and Points at Infinity"
---

## Lecture 8: Projective Geometry—Perspective, Invariants, and Points at Infinity

## Lecture Line

This lecture begins with a practical problem: how can a three-dimensional scene be represented on a plane so that it looks correct from a fixed viewpoint?

Perspective changes lengths, angles, and parallelism. Square floor tiles no longer look square, and parallel rails may meet at a vanishing point. The mathematical question is therefore: if ordinary measurement is unstable, what can geometry still study?

Projective geometry studies what survives projection. The first surviving structure is incidence: points lying on lines, lines passing through points, collinearity, and concurrence. A deeper invariant of four collinear points is the cross-ratio. With homogeneous coordinates, points at infinity can also be written into equations, changing how conics and cubics are classified.

The route follows Stillwell Chapter 8: perspective, anamorphosis, Desargues, cross-ratio, conics at infinity, projective plane, homogeneous coordinates, Pascal and Pappus.

## Entry Problem: Why Do Tiles Shrink in a Perspective Drawing?

Draw a horizon line and choose a vanishing point $V$. Draw a baseline below it, mark equally spaced points, and connect them to $V$. These lines represent tile edges going away from the viewer.

Now ask: how should the horizontal tile lines be drawn so that the drawing represents equal square tiles on the actual floor?

If we space the horizontal lines equally on the page, the drawing is wrong. Alberti's construction first fixes one tile, then uses a diagonal to transmit the grid positions. The diagonal is a straight line on the real floor, and projection sends straight lines to straight lines.

The lesson is immediate:

- page lengths are not reliable;
- page angles are not reliable;
- incidence is reliable.

Geometry has shifted from measuring to tracking relations.

## 1. Perspective as a Mathematical Transformation

Alberti's veil can be modeled as follows: the eye is fixed at a point $O$, the canvas is a plane, and each point $P$ in space is sent to the intersection of the line $OP$ with the canvas.

Two facts follow:

1. A straight line projects to a straight line.
2. A family of parallel lines may meet at a common vanishing point.

These facts are enough to construct a tiled floor without measuring equal distances on the page. Equality on the floor is represented by a projective construction, not by equal page lengths.

Class pause: decide which properties survive perspective.

- $A,B,C$ are collinear.
- Two lines are parallel.
- Two lines are perpendicular.
- A quadrilateral is a square.
- Three lines pass through one point.

The point is to distinguish incidence from metric properties.

## 2. Anamorphosis: A Projection of a Projection

Anamorphosis is a deliberately distorted image that looks correct only from a special viewpoint. Holbein's skull in *The Ambassadors* is the standard example.

Mathematically, it shows that a perspective view of a perspective view is not usually an ordinary perspective view. Iterated projections produce a larger class of transformations: projectivities.

So projective geometry is not merely a theory of realistic painting. It studies the properties that remain unchanged under projective transformations.

## 3. Desargues: Understanding a Plane Figure Through Space

Suppose two triangles $A_1B_1C_1$ and $A_2B_2C_2$ satisfy

$$
A_1A_2,\quad B_1B_2,\quad C_1C_2
$$

all passing through one point $O$. The triangles are in perspective from $O$.

Desargues's theorem states: the intersections of corresponding sides are collinear. If

$$
X=A_1B_1\cap A_2B_2,
$$

$$
Y=B_1C_1\cap B_2C_2,
$$

$$
Z=C_1A_1\cap C_2A_2,
$$

then $X,Y,Z$ lie on one line.

If the triangles actually lie in two planes in space, the result is natural: those points lie on the intersection line of the two planes. The subtle part is proving the planar theorem by interpreting the configuration spatially.

This is a characteristic move in projective geometry: a plane theorem may become intelligible when lifted into space.

## 4. Points at Infinity

In Euclidean geometry, parallel lines do not meet. In perspective, they may meet at a vanishing point. Desargues and Kepler handled this by adding a point at infinity for each family of parallel lines.

Then any two distinct lines meet exactly once:

- ordinary intersecting lines meet at a finite point;
- parallel lines meet at their point at infinity.

This does not add a curiosity for its own sake. It removes exceptions and lets theorems be stated uniformly.

## 5. Cross-Ratio: A Projective Ruler

Projection does not preserve length or ratios of lengths. Three points on a line still give no numerical invariant, because a projectivity can send any three collinear points to any other three.

Four points are different. For four points $A,B,C,D$ on a number line, define

$$
(A,B;C,D)=\frac{(C-A)(D-B)}{(C-B)(D-A)}.
$$

Conventions vary, but the central fact is stable: cross-ratio is preserved by projective transformations.

Example:

$$
A=1,\quad B=2,\quad C=3,\quad D=5.
$$

Then

$$
(A,B;C,D)=\frac{(3-1)(5-2)}{(3-2)(5-1)}=\frac32.
$$

Students can check that the transformation $x\mapsto 1/x$ changes all ordinary distances but preserves the cross-ratio.

The invariance is not magic. On a projective line, a basic projective transformation has the form

$$
f(x)=\frac{ax+b}{cx+d},\quad ad-bc\ne 0.
$$

A direct subtraction gives

$$
f(u)-f(v)=\frac{(ad-bc)(u-v)}{(cu+d)(cv+d)}.
$$

When this expression is substituted into the cross-ratio, all factors from $ad-bc$ and all denominator factors cancel. The original cross-ratio remains. This small calculation is worth doing: it shows that a projective invariant is forced by the algebraic form of projection.

## 6. Conics at Infinity

Greek geometry views ellipses, parabolas, and hyperbolas as sections of a cone. Analytic geometry unifies them by quadratic equations. Projective geometry compares them by how they meet the line at infinity.

Use homogeneous coordinates $[X:Y:Z]$. The ordinary plane is $Z\ne 0$, often normalized by $Z=1$. The line at infinity is $Z=0$.

Consider three projective conics.

1. Circle/ellipse type:

$$
X^2+Y^2=Z^2.
$$

At infinity, $Z=0$, so

$$
X^2+Y^2=0.
$$

There is no nonzero real solution. No real points at infinity.

2. Parabola type:

$$
X^2=YZ.
$$

At infinity, $Z=0$, so $X=0$. There is one point at infinity:

$$
[0:1:0].
$$

3. Hyperbola type:

$$
XY=Z^2.
$$

At infinity, $Z=0$, so $XY=0$. There are two points at infinity:

$$
[1:0:0],\quad [0:1:0].
$$

This classifies conics by their behavior at infinity rather than by their visible shape.

## 7. Homogeneous Coordinates

The rule for homogeneous coordinates is

$$
[X:Y:Z]=[\lambda X:\lambda Y:\lambda Z],\quad \lambda\ne 0.
$$

A projective point is not a single triple, but a whole line through the origin in three-dimensional coordinate space.

Ordinary points $(x,y)$ correspond to

$$
[x:y:1].
$$

Points at infinity have $Z=0$.

For example, the affine parabola $y=x^2$ becomes

$$
X^2=YZ.
$$

When $Z=1$, this is $y=x^2$. When $Z=0$, it contains its point at infinity. This is why projective language is useful in Bezout-type counting: intersections at infinity must be included.

Homogeneous coordinates also give a uniform form for projective transformations. A plane projective transformation can be represented by an invertible $3\times 3$ matrix:

$$
\begin{bmatrix}
X'\\Y'\\Z'
\end{bmatrix}
=
H
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}.
$$

Since $[X:Y:Z]$ is defined only up to scale, the matrix $H$ is also determined only up to a nonzero scalar. In a nondegenerate situation, four point correspondences determine a plane homography. This is the mathematics behind document rectification: the software recovers a projective relation on a plane, not all real lengths and angles automatically.

## 8. Pascal, Pappus, and Brianchon

Pascal's theorem says that if a hexagon is inscribed in a conic, then the three intersections of opposite sides are collinear. Pappus's theorem is the special case in which the conic degenerates into two lines.

Projective geometry also has a higher-level structure: the principle of duality. Roughly, if points and lines are interchanged, many true statements become new true statements. The dual of Pascal's theorem is Brianchon's theorem:

- Pascal: a hexagon inscribed in a conic gives three collinear intersection points of opposite sides;
- Brianchon: a hexagon circumscribed about a conic gives three concurrent lines joining opposite vertices.

These results close the lecture because they bring the themes together:

- conics are projective objects;
- collinearity and concurrence are incidence statements;
- duality shows structural relations among theorems;
- later, Bezout's theorem gives an algebraic explanation of Pascal's theorem.

For class, Pappus's theorem is more drawable and should be used before any attempt at Pascal's theorem. Then students can discuss why collinearity and concurrence naturally appear as a pair.

## Classroom Activities

### Activity A: Find the Horizon Line in a Perspective Image

Give students a photograph of a hallway, tiled floor, or building facade. A teacher-made perspective sketch also works.

Students should:

1. Identify two families of lines that should be parallel in real space.
2. Extend each family in the picture and locate its vanishing point.
3. Join the two vanishing points to obtain the horizon line.

Then answer:

- Why should lines in the same real direction share one vanishing point?
- If two vanishing points lie on one line, what does that line represent in projective geometry?
- Is this activity using length, angle, or incidence?

The goal is not a polished drawing. It is to make "parallel lines meet at infinity" into an observable mathematical statement.

### Activity B: Check That Cross-Ratio Is Not an Ordinary Length Ratio

On the number line, take

$$
A=1,\quad B=2,\quad C=3,\quad D=5.
$$

Compute

$$
(A,B;C,D)=\frac{(C-A)(D-B)}{(C-B)(D-A)}.
$$

Now apply the projective transformation

$$
f(x)=\frac{x}{x+1}.
$$

The four points become

$$
f(A)=\frac12,\quad f(B)=\frac23,\quad f(C)=\frac34,\quad f(D)=\frac56.
$$

Compute

$$
(f(A),f(B);f(C),f(D)).
$$

Students should find that ordinary distances have changed, but the cross-ratio has not. Then ask: why are three collinear points not enough to produce such an invariant?

### Activity C: Use the Line at Infinity to Classify Conics

Set $Z=0$ in

$$
X^2+Y^2=Z^2,
$$

$$
X^2=YZ,
$$

$$
XY=Z^2.
$$

Students should write the full reasoning:

1. What equation remains after setting $Z=0$?
2. How many nonzero real projective solutions are there?
3. Why do the answers correspond to ellipse, parabola, and hyperbola?

Extension: if a different ordinary line is chosen as the new line at infinity, how might the same projective conic appear as a different affine conic?

### Activity D: Why Four Corners Can Rectify a Document

Treat a skew photograph of a sheet of paper as a quadrilateral in the image plane. Software can rectify it into a rectangle.

Students should explain:

1. Why does a projective transformation from one plane to another send lines to lines?
2. Why are four corner correspondences enough to determine a plane projective transformation?
3. After rectification, are all real lengths and angles recovered? If not, what has been recovered?

This connects homogeneous coordinates with computer vision, but the mathematics is still the chapter's core: incidence and projective transformation.

## Discussion Questions

1. In recovering information from an image, which questions require only projective data, and which require metric data?
2. Is a point at infinity merely convenient language, or a necessary object in the projective plane? Use the statement "any two lines meet exactly once" in your answer.
3. Cross-ratio survives projection, but length does not. What does this say about measurement in projective geometry?
4. Desargues's theorem interprets a plane configuration through space. How is this different from analytic geometry's use of coordinates?
5. Ellipses, parabolas, and hyperbolas can be transformed into one another projectively. Why do we still distinguish them in ordinary analytic geometry?
6. Pascal's and Pappus's theorems both conclude collinearity. Why is collinearity such a natural conclusion in projective geometry?
7. Pascal's and Brianchon's theorems are dual. When points and lines are interchanged, which parts of the language are interchanged as well? Why is this more than a word game?

## Further Directions

- Renaissance perspective: Brunelleschi, Alberti, and Durer.
- Anamorphosis: Holbein and Niceron.
- Projective transformations and linear fractional maps on $\mathbb{RP}^1$.
- Homogeneous polynomials, the line at infinity, and Bezout's theorem.
- Pascal, Pappus, and Brianchon: drawing, duality, and algebraic proof.
