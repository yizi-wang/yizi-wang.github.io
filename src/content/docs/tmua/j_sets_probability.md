---
title: "J Sets and Probability"
---

## Module J: Sets and Probability

> **Corresponding Syllabus Section**: MM1.7, M7.1-M7.7
> **Corresponding Paper**: P1 Basics (Probability calculations), P2 Advanced (Logical reasoning + Combinatorics)
> **Suggested Duration**: 1 lesson | **Target Number of Questions**: 8 questions

---

## 📋 Module Overview

| Section | Content | Corresponding Syllabus | Past Paper Frequency | Duration |
|------|------|---------|-------------|------|
| J1 | Basic Set Concepts | MM1.7 | Low (1 question) | 0.25 |
| J2 | Fundamentals of Probability | M7.1-M7.4 | Medium (2 questions) | 0.25 |
| J3 | Conditional Probability & Tree Diagrams | M7.5-M7.7 | High (P2 Combinatorics) | 0.25 |
| J4 | Combinatorial Counting Techniques | M7.5 | P2 Core (4 questions) | 0.25 |

---

## J1 Basic Set Concepts [MM1.7]

### 1.1 Representing Sets

A **set** is a collection of distinct objects. The TMUA does not require mastery of formal set notation, but understanding the fundamental ideas of sets is necessary.

Common representation methods:
- **List Method**: $\{1, 2, 3, 4\}$, explicitly listing all elements
- **Set-builder Notation**: $\{x : x \text{ is a positive even number}\}$, describing the characteristic properties of elements using conditions

**⚠️ Exam Tip**: Simple set terminology (like "belongs to", "subset") might appear in TMUA questions, but you **do not** need to master symbols such as $\in$, $\subset$, $\cup$, and $\cap$.

### 1.2 Set Operations and Venn Diagrams

Although formal set notation is not examined, **Venn diagrams** are a core tool for understanding probability and classification problems.

**Core Uses of Venn Diagrams**:
- Intuitively visualizing categorical relationships (e.g., "females", "play cricket", "play tennis")
- Calculating the number of people in intersections and unions
- Verifying the results of probability calculations

**Key Formula** (expressed in counts rather than symbols):

$$\text{Number in Union} = \text{Number in Category A} + \text{Number in Category B} - \text{Number in Both Categories}$$

This formula corresponds to the addition rule in probability.

---

## J2 Fundamentals of Probability [M7.1-M7.4]

### 2.1 Basic Definition of Probability

**Probability** describes the likelihood of a random event occurring. Probability values range from $0$ to $1$:

$$P(\text{Impossible Event}) = 0, \quad P(\text{Certain Event}) = 1$$

**Frequentist Interpretation**: If an event has a probability $p$, the frequency of the event occurring will approach $p$ after a large number of repeated trials.

### 2.2 Equally Likely Outcomes Model

If all possible outcomes are equally likely to occur, then:

$$P(\text{Event}) = \frac{\text{Number of Favourable Outcomes}}{\text{Total Number of Possible Outcomes}}$$

**Classic Examples**:
- Flipping a coin: $P(\text{Heads}) = \frac{1}{2}$
- Rolling a die: $P(\text{Even number}) = \frac{3}{6} = \frac{1}{2}$
- Drawing a card: $P(\text{Hearts}) = \frac{13}{52} = \frac{1}{4}$

### 2.3 Addition Rule for Probability

**Mutually Exclusive Events**: If two events cannot happen at the same time, then:

$$P(A \text{ or } B) = P(A) + P(B)$$

**General Case**: If events can occur simultaneously, you must subtract the overlapping part:

$$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$$

**⚡ Quick Tip**: If keywords like "either", "or", or "at least one" appear in the question, consider using the addition rule.

### 2.4 Multiplication Rule for Probability

**Independent Events**: If the occurrence of one event does not affect the occurrence of the other, then:

$$P(A \text{ and } B) = P(A) \times P(B)$$

**⚡ Quick Tip**: If keywords like "and", "both", or "all" appear in the question, consider using the multiplication rule.

---

## J3 Conditional Probability & Tree Diagrams [M7.5-M7.7]

### 3.1 Meaning of Conditional Probability

**Conditional probability** describes the probability of an event occurring given that another event has already occurred:

$$P(B \mid A) = \frac{P(A \text{ and } B)}{P(A)}$$

**Intuitive Understanding**: Conditional probability is equivalent to "reducing the sample space." Knowing that $A$ has occurred, the sample space shrinks from all possible outcomes to "outcomes where $A$ occurs", and the probability of $B$ is calculated within this reduced space.

### 3.2 Tree Diagrams — Solving Multi-step Probability Problems

A **Tree Diagram** is a powerful tool for solving multi-stage probability problems, especially suited for:
- Two-stage or three-stage random experiments
- Different probabilities for outcomes at each stage
- Calculating the probability of a "final outcome"

**Steps to use a Tree Diagram**:
1. First-level branches: All possible outcomes of the first stage, labeled with probabilities.
2. Second-level branches: For each first-level outcome, draw all possible outcomes for the second stage, labeled with **conditional probabilities**.
3. Calculate path probability: Path probability from root to leaf = product of probabilities along the branches.
4. Find the final result: Sum the probabilities of all paths that satisfy the conditions.

**⚡ Note**: The sum of branch probabilities from the same node must be $1$.

### 3.3 Two-Way Tables (Contingency Tables)

When a problem involves two categorical dimensions, using a **two-way table** (contingency table) is more intuitive than a tree diagram:

| | Tennis | Cricket | Total |
|---|---|---|---|
| Female | ? | ? | 60% |
| Male | ? | ? | 40% |
| Total | ? | ? | 100% |

Gradually fill the table using the given conditions, and calculate the target probability at the end.

---

## J4 Combinatorial Counting Techniques [M7.5]

### 4.1 Permutations and Combinations

Although the TMUA does not examine complex permutation and combination formulas, fundamental counting concepts are crucial.

**Permutation**: Order matters. Choosing $r$ elements from $n$ distinct elements and arranging them in a row, the number of arrangements is:

$$P(n, r) = n \times (n-1) \times \cdots \times (n-r+1)$$

**Combination**: Order does not matter. Choosing $r$ elements from $n$ distinct elements to form a group, the number of groups is:

$$C(n, r) = \frac{n \times (n-1) \times \cdots \times (n-r+1)}{r!}$$

**⚡ Memory Hook**: Permutation is like "assigning seats"—the first seat has $n$ choices, the second has $n-1$, and so on. Combination is like "selecting people"—divide the number of permutations by the internal arrangements $r!$.

### 4.2 Pigeonhole Principle

**Pigeonhole Principle**: If $n+1$ pigeons fly into $n$ pigeonholes, then at least one pigeonhole must contain $2$ or more pigeons.

**TMUA Application**: When finding the minimal condition to "guarantee an event happens", construct the worst-case scenario.

**Classic Question Type** (2019 P2 Q9): For a circular table with $40$ seats, what is the minimum number of people already seated to guarantee that the next person to arrive will definitely sit next to someone?

Solution Approach: Maximize the gaps between seated people ($2$ empty seats). Seat one person every $3$ seats, which requires $14$ people in total.

### 4.3 Valid Encoding Problems

Some TMUA questions assess determining the "validity of an encoding", such as Dyck paths (mountain profile diagrams).

**Characteristics of Valid Encodings**:
- The first character must be "up" (otherwise it violates the rules immediately).
- The last character must be "down" (otherwise it cannot return to the starting point).
- The path must never drop below the baseline throughout the process.

To determine if a transformed path is still valid, you simply need to check the first and last characters and the height changes of the path.

---

## ⚡ Quick Solving Tips Summary

| Scenario | Tip |
|------|------|
| Categorical Probability | Assume a specific number of people (e.g., $100$ or $300$), and fill in a contingency table to avoid fraction arithmetic. |
| Geometric Probability | Calculate "favourable region area" ÷ "total area", paying attention to boundary conditions. |
| Conditional Probability | Understand it as "reducing the sample space", and use a tree diagram or table for assistance. |
| Pigeonhole Principle | Construct the "worst-case scenario", distributing unfavourable conditions as evenly as possible. |
| Encoding Validity | Check whether the first character is correct and whether the entire path is legitimate. |

## ⚠️ Common Pitfalls

- ❌ Conditional probability $P(B \mid A)$ is NOT $P(A \text{ and } B)$ — the former means "$A$ is known to have occurred", while the latter means "both $A$ and $B$ occur".
- ❌ The sum of branch probabilities from the same node in a tree diagram **must be $1$**. Focus on verifying this when checking your work.
- ❌ In geometric probability, the "intersecting" and "non-intersecting" regions must be accurately defined — distance between centres conditions must consider the radii.
- ❌ In Pigeonhole Principle problems, "guaranteed to happen" and "could happen" are different requirements — the former necessitates a worst-case scenario analysis.

---

## 📝 Selected Example Questions

### Example 1 (2016 P1 Q7 · Categorical Probability)

**Question**: In a sports club, $60\%$ of the members are female, and the rest are male. $\frac{2}{5}$ of the males play cricket; $\frac{2}{3}$ of the cricket members are female. Find the probability that a randomly chosen member is a "female who plays tennis".

【Question Analysis】
Given the female proportion, the male cricket proportion, and the female proportion among cricketers, find the probability of a female tennis member. Step-by-step fill in a contingency table.

【Solving Steps】
Step 1: Assume a total of $300$ people (convenient for fraction calculation)
- Females: $180$ people, Males: $120$ people

Step 2: Number of males playing cricket
$$120 \times \frac{2}{5} = 48 \text{ people}$$
Males playing tennis $= 120 - 48 = 72$ people

Step 3: Total number playing cricket
Males playing cricket account for $\frac{1}{3}$ (females account for $\frac{2}{3}$), so the total number of cricket players is:
$$C = 48 \times 3 = 144 \text{ people}$$

Step 4: Number of females playing cricket
$$144 \times \frac{2}{3} = 96 \text{ people}$$
Females playing tennis $= 180 - 96 = 84$ people

Step 5: Calculate probability
$$P(\text{Female tennis}) = \frac{84}{300} = \frac{7}{25}$$

【Contingency Table Verification】

| | Tennis | Cricket | Total |
|---|---|---|---|
| Female | 84 | 96 | 180 |
| Male | 72 | 48 | 120 |
| Total | 156 | 144 | 300 |

Proportion of female tennis players $= \frac{84}{300} = \frac{7}{25}$, verified correct.

【Shortcut Approach】
When assuming the number of people, choose the least common multiple of the denominators. This question involves $\frac{2}{5}$ and $\frac{2}{3}$, so choose $300$ (a multiple of $5 \times 3$ that also perfectly accommodates $60\%$).

【Correct Answer】B ($\frac{7}{25}$)

【Knowledge Points】Probability | **Syllabus**: M7.1, M7.5

---

### Example 2 (2022 P1 Q19 · Geometric Probability)

**Question**: Circle $C_1: x^2 + y^2 = 25$ (radius $5$), Circle $C_2$ has radius $4$, and its centre $(a, b)$ is uniformly distributed randomly within $-2 \le a \le 2$, $-3 \le b \le 3$. Find the probability that the two circles intersect.

【Question Analysis】
The centre $(a, b)$ is randomly distributed within a rectangular region; calculate the proportion of area corresponding to the "intersection" condition.

【Solving Steps】
Step 1: Determine if the region for the centre of $C_2$ is inside $C_1$

The distance from the corners of the rectangle to the origin:
$$\sqrt{2^2 + 3^2} = \sqrt{13} < 5$$

Therefore, the entire rectangular region lies inside $C_1$.

Step 2: Determine intersection conditions

When the centre of $C_2$ is inside $C_1$, the condition for the two circles to intersect is that the distance between their centres $d \ge 5 - 4 = 1$.

(If $d < 1$, then $C_2$ is completely contained within $C_1$ and they do not intersect)

Step 3: Calculate probability

Sample space area $= 4 \times 6 = 24$

Non-intersecting region: A circle centred at the origin with radius $1$, area $= \pi$

Intersecting region area $= 24 - \pi$

Probability:
$$P(\text{Intersection}) = \frac{24 - \pi}{24}$$

【Geometric Illustration】

$\begin{array}{c}
\text{Rectangular region: width 4, height 6} \\
\text{Region with centre distance less than 1: circle of radius 1} \\
\text{Intersecting region: rectangle minus small circle}
\end{array}$

【Shortcut Approach】
Geometric probability = Favourable region area ÷ Total area. First determine the regional boundaries (distance between centres condition), then calculate areas.

【Correct Answer】F ($\frac{24 - \pi}{24}$)

【Knowledge Points】Probability | **Syllabus**: M7.6, MM3.2

---

### Example 3 (2019 P2 Q9 · Pigeonhole Principle)

**Question**: For a circular table with $40$ seats, what is the minimum number of people already seated to guarantee that the next person to arrive will definitely sit next to someone?

【Question Analysis】
A pigeonhole principle problem in a circular arrangement. Core idea: Control the maximum gap between people.

【Solving Steps】
Step 1: Understand "sitting next to someone"

If the newcomer can avoid sitting next to anyone, it means there are at least $3$ consecutive empty seats—sitting in the middle avoids neighbours.

Conversely, to guarantee sitting next to someone, there must be a maximum of $2$ empty seats between any two adjacent seated people.

Step 2: Construct the "worst-case scenario"

Distribute the seated people as far apart as possible: Seat one person every $3$ seats.

Seat sequence: $1, 4, 7, 10, \ldots, 37, 40$

This is an arithmetic progression with first term $1$ and common difference $3$. The last term satisfies $40 = 1 + 3(k-1)$, which gives $k = 14$.

Step 3: Verification

After $14$ people are seated:
- $13$ intervals each have $2$ empty seats (total $26$ empty)
- The last interval is from seat $40$ to seat $1$, which are adjacent ($0$ empty)
- Total: $14 + 26 = 40$, which perfectly fills the table.

If there were only $13$ people, the total number of empty seats would be $40 - 13 = 27$. On average, each interval would have $\frac{27}{13} > 2$ empty seats, so there must be an interval with $3$ or more empty seats, meaning an un-neighbourly seat exists.

【Shortcut Approach】
Pigeonhole Principle: To find the minimum condition for a "guarantee", construct the "most unfavourable distribution" by spreading out the unfavourable conditions as much as possible without exceeding the critical threshold.

【Correct Answer】D ($14$)

【Knowledge Points】Combinatorics | **Syllabus**: M7.5, M2.5

---

## 🏋️ After-Class Exercises (Time limit: 12 minutes)

| # | Question Number | Topic | Corresponding Syllabus | Difficulty |
|---|------|------|---------|------|
| 1 | 2016 P1 Q7 | Categorical Probability | M7.1, M7.5 | ⭐⭐⭐ |
| 2 | 2022 P1 Q19 | Geometric Probability | M7.6, MM3.2 | ⭐⭐⭐⭐ |
| 3 | 2019 P2 Q9 | Pigeonhole Principle | M7.5, M2.5 | ⭐⭐⭐ |
| 4 | 2017 P2 Q20 | Combinatorial Reasoning | M7.5 | ⭐⭐⭐⭐ |
| 5 | 2018 P2 Q8 | Encoding Validity | M7.5 | ⭐⭐⭐ |
| 6 | 2022 P2 Q8 | Matching Problems | M7.5 | ⭐⭐⭐ |

---

*Full solutions can be found in the question bank database, each containing 【Solving Steps】 and 【Shortcut Approach】.*

---

## 📚 Knowledge Expansion

### Applications of Venn Diagrams in Probability

Venn diagrams are used not only for sets but are also visual tools for probability problems:

$\begin{array}{c}
\text{Universal Set} \\
\hline
\text{Category A: Circle 1} \\
\text{Category B: Circle 2} \\
\text{Intersection: A and B} \\
\text{Outside: Not A and Not B}
\end{array}$

**Exam Tip**: The TMUA does not ask you to draw Venn diagrams, but you can draw rough sketches on scratch paper to aid comprehension when solving problems.

### Intuitive Pitfalls of Conditional Probability

Many students mistakenly believe that the conditional probability $P(B \mid A)$ is equal to $P(A \mid B)$. This is a common intuitive error.

**Correct Understanding**:
- $P(\text{Cricket member} \mid \text{Female})$: The proportion of cricket players among females
- $P(\text{Female} \mid \text{Cricket member})$: The proportion of females among cricket members

These two values are usually **different**. The phrase "$\frac{2}{3}$ of the cricket members are female" in the question refers to the latter, not the former.

---

## 🎯 Companion Practice

Finished this chapter? [→ Go to Sets practice questions](/practice/tmua/?topic=Sets)

Finished this chapter? [→ Go to Probability practice questions](/practice/tmua/?topic=Probability)

---

*Module J is complete. Next module: Module K (Exponentials and Logarithms).*
