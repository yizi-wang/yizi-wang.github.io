---
title: Why matrix multiplication is not entrywise
---

# Why matrix multiplication is not entrywise

When I taught matrix multiplication for the first time, the question that stumped me the most wasn't about calculations.

Students can calculate rows multiplied by columns, but they would stare at the formula and ask: for two matrices of the same size, why can't we multiply corresponding entries? Why do we specifically take a row on the left to bump into a column on the right? Why are  $AB$  and  $BA$  even different?

If matrices are just tables of numbers, these questions are hard to answer. The easiest explanation is "that's just the definition". This sentence is effective in the short term, but the future trouble is obvious: students will treat matrix multiplication as an artificially designed weird rule.

I later preferred to ask another question first: after doing a matrix transformation once and then needing to do it again, can we combine these two steps into one? Once this question is laid out, row times column has a place to land.

## Don't view matrices as just number tables first

In A-Level Further Maths classrooms, students have already seen matrices representing 2D geometric transformations. For example,

 $$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix}
$$ 

represents a horizontal shear:

 $$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}x+y\\y\end{pmatrix}.
$$ 

Another example,

 $$
B=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
$$ 

represents a  $90^\circ$  counter-clockwise rotation around the origin:

 $$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x\end{pmatrix}.
$$ 

At this point, don't rush to say "matrix multiplication". A matrix is temporarily just an action: a vector goes in, its position changes, and it comes out.

Doing an action just once is fine. Trouble arises when doing it twice in a row: shear then rotate, versus rotate then shear, seems like just swapping the order, but the object actually being dealt with is no longer the same vector.

## Trace one vector first

Take the vector

 $$
v=\begin{pmatrix}1\\2\end{pmatrix}.
$$ 

First do  $A$ , which is horizontal shear:

 $$
Av=
\begin{pmatrix}1&1\\0&1\end{pmatrix}
\begin{pmatrix}1\\2\end{pmatrix}
=
\begin{pmatrix}3\\2\end{pmatrix}.
$$ 

Then do  $B$ , which is rotation by  $90^\circ$ :

 $$
B(Av)=
\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}3\\2\end{pmatrix}
=
\begin{pmatrix}-2\\3\end{pmatrix}.
$$ 

So "first  $A$  then  $B$ " sends

 $$
\begin{pmatrix}1\\2\end{pmatrix}
$$ 

to

 $$
\begin{pmatrix}-2\\3\end{pmatrix}.
$$ 

What if we reverse it? First rotate:

 $$
Bv=
\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}1\\2\end{pmatrix}
=
\begin{pmatrix}-2\\1\end{pmatrix}.
$$ 

Then shear:

 $$
A(Bv)=
\begin{pmatrix}1&1\\0&1\end{pmatrix}
\begin{pmatrix}-2\\1\end{pmatrix}
=
\begin{pmatrix}-1\\1\end{pmatrix}.
$$ 

The same vector, the same two actions, just a swapped order, and the results are already different.

This is more useful than directly telling students " $AB\ne BA$ ". Because they can see: shear alters the horizontal displacement relative to the height, while rotation swaps the horizontal and vertical directions into new positions. With a different order, the second transformation faces an object that is no longer in the same geometric state.

## Only now is matrix multiplication needed

There is no mystery in the above calculation. It's just tracing a vector step by step.

But if every vector is traced like this, it quickly becomes tedious. So the question arises: can we find a new matrix that directly represents this entire action of "first  $A$  then  $B$ "?

That is, we want to find a matrix  $C$  such that for any vector  $v$ ,

 $$
Cv=B(Av).
$$ 

This  $C$  should be  $BA$ . Note that the order here easily confuses students:  $BA$  means doing  $A$  first, then  $B$ , because the vector is written on the far right and meets the matrix on the right first.

Let's calculate the effect of this composite transformation on a general vector.

First do  $A$ :

 $$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}x+y\\y\end{pmatrix}.
$$ 

Then do  $B$ :

 $$
\begin{pmatrix}x+y\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x+y\end{pmatrix}.
$$ 

So the composite transformation is

 $$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x+y\end{pmatrix}.
$$ 

Write the right side in matrix form:

 $$
\begin{pmatrix}-y\\x+y\end{pmatrix}
=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}.
$$ 

Therefore,

 $$
BA=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}.
$$ 

Now try acting on the vector from earlier:

 $$
\begin{pmatrix}0&-1\\1&1\end{pmatrix}
\begin{pmatrix}1\\2\end{pmatrix}
=
\begin{pmatrix}-2\\3\end{pmatrix}.
$$ 

It completely matches the step-by-step tracing.

Introducing  $BA$  at this point is easier for students to accept. It just records what was already done: do  $A$  first, then  $B$ , combined into a new matrix.

## Where does row times column come from?

Now we can return to row times column.

Directly calculate

 $$
BA=
\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}1&1\\0&1\end{pmatrix}.
$$ 

Following row times column:

 $$
BA=
\begin{pmatrix}
0\cdot1+(-1)\cdot0 & 0\cdot1+(-1)\cdot1\\
1\cdot1+0\cdot0 & 1\cdot1+0\cdot1
\end{pmatrix}
=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}.
$$ 

This is identical to the matrix we derived earlier from the composite transformation.

Why does this happen? It can be explained very cleanly using basis vectors.

A 2D linear transformation is fully known as long as we know where it sends

 $$
e_1=\begin{pmatrix}1\\0\end{pmatrix},\quad
e_2=\begin{pmatrix}0\\1\end{pmatrix}.
$$ 

The two columns of the matrix are exactly recording the destinations of  $e_1$  and  $e_2$ .

For  $A$ ,

 $$
Ae_1=\begin{pmatrix}1\\0\end{pmatrix},\quad
Ae_2=\begin{pmatrix}1\\1\end{pmatrix}.
$$ 

So the first and second columns of  $A$  are exactly these two results.

Now do  $B$ . The first column of the composite transformation  $BA$  should be  $B(Ae_1)$ ; the second column should be  $B(Ae_2)$ .

Look at the first column first:

 $$
B(Ae_1)=B\begin{pmatrix}1\\0\end{pmatrix}
=
\begin{pmatrix}0\\1\end{pmatrix}.
$$ 

Then look at the second column:

 $$
B(Ae_2)=B\begin{pmatrix}1\\1\end{pmatrix}
=
\begin{pmatrix}-1\\1\end{pmatrix}.
$$ 

Thus the two columns of the composite matrix are

 $$
\begin{pmatrix}0\\1\end{pmatrix},
\quad
\begin{pmatrix}-1\\1\end{pmatrix},
$$ 

which put together is still

 $$
BA=
\begin{pmatrix}0&-1\\1&1\end{pmatrix}.
$$ 

Row times column is doing the exact same thing, just written shorter.

A column of the matrix on the right first tells us where a basis vector went after the first step. A row of the matrix on the left then picks out a new coordinate from this result. When the two meet, what is calculated is a certain coordinate of the final landing point of a basis vector in the composite transformation.

This sentence doesn't need to be thrown at students all at once. Let them calculate two columns first, then ask: why does the first column come from  $B(Ae_1)$ , and the second column from  $B(Ae_2)$ ? Once they accept that "columns record the destinations of basis vectors", row times column no longer looks like magic.

## Why is it not entrywise multiplication?

Entrywise multiplication can of course be defined, and it has a name elsewhere. But this lesson has to handle a different problem.

The problem matrix multiplication aims to solve is: how to represent the composition of two linear transformations?

If we use entrywise multiplication, the information chain breaks. For example, the second column of  $A$  tells us that  $e_2$  became  $(1,1)^T$  after  $A$ . Next, when  $B$  acts on this vector, it needs to simultaneously look at how  $B$  handles the horizontal and vertical directions, because  $(1,1)^T$  is intrinsically a composition of the two directions.

This is the flavor of linear combinations. The previous step turns the basis vector into a combination of several directions, and the next step has to send these directions away separately, then add them up. Row times column is exactly calculating this process of "unpacking, sending off, then recombining".

Entrywise multiplication cannot see this layer. It merely pairs up identical positions in two number tables, without tracing where the basis vectors go after two layers of transformation.

## If actually putting this in a lesson, I'd go slower

I wouldn't write five or six lines of row times column right off the bat. First let students determine what  $A$  and  $B$  are doing respectively, then run  $(1,2)^T$  through both orders. Once they see with their own eyes that the results are different, ask: if we have to trace every vector like this from now on, isn't it too troublesome?

It is at this moment that a composite matrix is necessary to appear.

Deriving it once with a general vector  $(x,y)^T$  is enough. Hold off on the mnemonic, just write

 $$
\begin{pmatrix}x\\y\end{pmatrix}
\mapsto
\begin{pmatrix}x+y\\y\end{pmatrix}
\mapsto
\begin{pmatrix}-y\\x+y\end{pmatrix}
$$ 

Write it out, then read off the composite matrix. The mnemonic can come a bit later. It just compresses the tracing from earlier; it is not the starting point of this lesson.

I would also say "the row of the first matrix times the column of the second matrix" less. This sentence helps students solve problems, but it doesn't answer their confusion: why take a row horizontally and a column vertically? Why isn't it entrywise? Why does order affect the result?

Without the composition of transformations leading the way, any later explanation will feel like a patch.

## Letting AI audit the accounts during lesson prep

This lesson is not suitable for letting AI directly generate an entire set of handouts. It is better suited for two types of checks.

First, checking the calculations. For example, having it confirm that  $A$ ,  $B$ ,  $BA$ ,  $AB$ , and the vector examples are clean enough so that students won't get dragged down by arithmetic.

Second, checking the follow-up questions. You can feed it your draft and ask: which parts once again threw "row times column" at the students as a definition? Which question can more clearly distinguish between "first  $A$  then  $B$ " and "first  $B$  then  $A$ "?

As for pauses in the classroom, the rhythm of blackboard writing, and those couple of supplementary sentences when students get stuck, you still have to think of those yourself. AI can help audit the accounts, but it can't judge where this class of students is standing at this moment.
