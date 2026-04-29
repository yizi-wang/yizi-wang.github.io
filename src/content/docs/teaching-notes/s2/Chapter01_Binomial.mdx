---
title: "S2 Chapter 1: The Binomial Distribution"



# S2 Statistics: Chapter 1 — The Binomial Distribution

## Preface: Journey to 1654 France

Welcome, fellow mathematical detectives! Today, we embark on a journey back to 1654 France, where we'll step into the shoes of mathematicians to solve a puzzle that baffled the brightest minds of the era. This challenge not only gave birth to an entirely new branch of mathematics but directly leads us to our chapter's central topic: **The Binomial Distribution**.

The story unfolds with two equally skilled knights engaged in a contest that was abruptly interrupted, creating a problem that would revolutionize mathematical thinking forever.

## Act I: The Interrupted Game — A Historical Dilemma

### Setting the Stage: The Problem of Points

Picture this: Two equally skilled knights, **Antoine** and **Blaise**, are engaged in a dice-throwing competition in the royal court of France. The rules are elegantly simple:

- The first knight to win **3 rounds** claims the entire prize of **64 gold coins**
- Each round has an equal probability of being won by either knight
- The rounds are independent of each other

**Current situation:** Antoine leads with a score of **2:1**.

Suddenly, a royal summons arrives! The King requires their immediate presence, and the game must be terminated at once. This creates our central dilemma:

:::caution [The Central Question]
**How should the 64 gold coins be fairly distributed between Antoine and Blaise?**
:::

### Student Voting: Intuitive Approaches

Before we dive into the mathematical solution, let's consider some intuitive approaches:

:::note [Voting Exercise: Which approach seems most fair?]
- **(A)** Proportional to current wins: Antoine receives $\frac{2}{3}$ (42 coins), Blaise receives $\frac{1}{3}$ (22 coins)
- **(B)** Winner takes all: Since Antoine is leading, he should receive all 64 coins
- **(C)** Equal split: Since the game wasn't completed, split equally (32 coins each)
- **(D)** None of the above: There must be a more mathematically rigorous approach...
:::

## Act II: The Genius Solution — Letters Between Mathematical Giants

### The Revolutionary Insight

The knight Blaise (who happened to be the mathematician Blaise Pascal) wrote to his friend Pierre de Fermat seeking a solution. Their correspondence revealed a revolutionary insight:

:::tip [Key Insight]
**Don't focus on the past (what has already happened), but on the future (all possible outcomes that could occur)!**

A fair distribution should be based on each knight's **probability of ultimately winning** the complete game.
:::

### Reframing the Problem

To apply this insight, we need to determine what each knight needs to win:

- Antoine needs to win **1 more round** to reach 3 total wins
- Blaise needs to win **2 more rounds** to reach 3 total wins

Since each knight has equal skill ($p = 0.5$ for each round), and rounds are independent, we can reframe our question:

:::tip [Reframed Question]
In at most 2 additional rounds, what is the probability that:

- Antoine wins at least 1 round?
- Blaise wins both rounds?
:::

## The Mathematical Solution

### Exhaustive Case Analysis

The game will end within 2 rounds maximum. Let's enumerate all possible sequences:

**Tree Diagram (textual representation):**

```
        Start
       /     \
   0.5 /       \ 0.5
     /         \
    A           B         ← Round 1
(Antoine    (Blaise
  wins        wins)
  game)       /    \
          0.5 /      \ 0.5
             /        \
            A          B     ← Round 2
      (Antoine    (Blaise
        wins)       wins
                    game)
```

**Sequence Analysis:**

- **A:** Antoine wins in round 1 → Game over, Antoine wins ($P = 0.5$)
- **BA:** Blaise wins round 1, Antoine wins round 2 → Antoine wins ($P = 0.5 \times 0.5 = 0.25$)
- **BB:** Blaise wins both rounds → Blaise wins ($P = 0.5 \times 0.5 = 0.25$)

### Probability Calculations

$$P(\text{Antoine wins ultimately}) = P(A) + P(BA) = 0.5 + (0.5 \times 0.5) = 0.75$$

$$P(\text{Blaise wins ultimately}) = P(BB) = 0.5 \times 0.5 = 0.25$$

**Fair Distribution:** The 64 coins should be divided in the ratio $0.75 : 0.25 = 3:1$

- Antoine receives: $64 \times 0.75 = 48$ coins
- Blaise receives: $64 \times 0.25 = 16$ coins

## Deep Dive: Uncovering the Binomial Pattern

### Guided Discovery Questions

:::note [Critical Thinking Exercise]
1. **What fundamental assumptions did our calculation rely upon?**
   - Fixed probability: $p = 0.5$ for each round
   - Independence: Each round's outcome doesn't affect others
   - These are the foundational conditions for what we call **Bernoulli trials**!

2. **Extension Challenge:** What if the game required 5 wins, and the score was 4-3 when interrupted?

   Listing all possible sequences becomes incredibly complex. Is there a more elegant approach?
:::

## The Binomial Distribution: Formal Framework

### Historical Context

Jacob Bernoulli generalized this "fixed number of independent trials with constant success probability" model, creating what we now call the **Binomial Distribution**. Carl Friedrich Gauss later discovered that the probability sequence corresponds exactly to the terms in the binomial expansion $(p + q)^n$ where $q = 1-p$, hence the name.

**Definition: Binomial Distribution**

A random variable $X$ follows a binomial distribution, denoted $X \sim B(n,p)$, if it satisfies the **BINS** conditions:

1. **B**inary outcomes: Each trial has exactly two possible outcomes (success/failure)
2. **I**ndependence: Trials are mutually independent
3. **N**umber fixed: The number of trials $n$ is predetermined
4. **S**ame probability: The probability of success $p$ remains constant across trials

Where:

- $n$ = number of trials
- $p$ = probability of success on each trial
- $X$ = number of successes in $n$ trials

**Theorem: Binomial Probability Mass Function**

For $X \sim B(n,p)$, the probability of exactly $r$ successes is:

$$P(X = r) = \binom{n}{r}p^r(1-p)^{n-r}$$

where $r = 0, 1, 2, \ldots, n$ and $\binom{n}{r} = \frac{n!}{r!(n-r)!}$.

**Theorem: Expectation and Variance**

For $X \sim B(n,p)$:

- Expected value: $E(X) = np$
- Variance: $\text{Var}(X) = np(1-p)$

### The Emergence of the Binomial Formula

**Pattern Recognition:** In our opening problem, Antoine winning is equivalent to him winning **at least 1 round** out of the next 2 possible rounds.

If we let $X$ = number of rounds Antoine wins in the next 2 rounds, then $X \sim B(2, 0.5)$.

Using the binomial probability formula:

$$
\begin{aligned}
P(X \geq 1) &= P(X=1) + P(X=2) \\
P(X=1) &= \binom{2}{1}(0.5)^1(0.5)^1 = 2 \times 0.25 = 0.5 \\
P(X=2) &= \binom{2}{2}(0.5)^2(0.5)^0 = 1 \times 0.25 = 0.25 \\
P(X \geq 1) &= 0.5 + 0.25 = 0.75 \quad \checkmark
\end{aligned}
$$

This matches our exhaustive calculation and naturally leads us to the binomial distribution!

## Guided Practice: Building Understanding

:::note [Exercise 1: Identifying Binomial Distributions]
For each scenario, determine whether it follows a binomial distribution. If yes, identify $n$ and $p$. If no, explain which BINS condition is violated.

1. The number of aces in a hand of 5 cards drawn from a standard deck without replacement
2. The number of 6s in 20 rolls of a fair die
3. The number of customers arriving at a store in one hour, given that the average arrival rate is 10 customers per hour

**Solutions:** *(space for student work)*
:::

### Binomial Cumulative Distribution Table (Extract)

**The tabulated value is $P(X \leq x)$, where $X$ has a binomial distribution with index $n$ and parameter $p$.**

| **p =** | **0.05** | **0.10** | **0.15** | **0.20** | **0.25** | **0.30** | **0.35** | **0.40** | **0.45** | **0.50** |
|---------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| **n=8, x=0** | 0.6634 | 0.4305 | 0.2725 | 0.1678 | 0.1001 | 0.0576 | 0.0319 | 0.0168 | 0.0084 | 0.0039 |
| **x=1** | 0.9428 | 0.8131 | 0.6572 | 0.5033 | 0.3671 | 0.2553 | 0.1691 | 0.1064 | 0.0632 | 0.0352 |
| **x=2** | 0.9942 | 0.9619 | 0.8948 | 0.7969 | 0.6785 | 0.5518 | 0.4278 | 0.3154 | 0.2201 | 0.1445 |
| **x=3** | 0.9996 | 0.9950 | 0.9786 | 0.9437 | 0.8862 | 0.8059 | 0.7064 | 0.5941 | 0.4770 | 0.3633 |
| **x=4** | 1.0000 | 0.9996 | 0.9971 | 0.9896 | 0.9727 | 0.9420 | 0.8939 | 0.8263 | 0.7396 | 0.6367 |
| **x=5** | 1.0000 | 1.0000 | 0.9998 | 0.9988 | 0.9958 | 0.9887 | 0.9747 | 0.9502 | 0.9115 | 0.8555 |
| **x=6** | 1.0000 | 1.0000 | 1.0000 | 0.9999 | 0.9996 | 0.9987 | 0.9964 | 0.9915 | 0.9819 | 0.9648 |
| **x=7** | 1.0000 | 1.0000 | 1.0000 | 1.0000 | 1.0000 | 0.9999 | 0.9998 | 0.9993 | 0.9983 | 0.9961 |

:::note [Exercise 2: Mastering the Binomial Cumulative Distribution Table]
The binomial cumulative distribution table gives values of $P(X \leq x)$ where $X \sim B(n,p)$. Let's practice using it effectively.

**Scenario:** A quality control inspector tests 8 components, where each component has a 0.15 probability of being defective. Let $X$ be the number of defective components found.

1. What is $P(X \leq 2)$? *(Read directly from the table)*
2. Find $P(X > 2)$. **Hint:** Use $P(X > 2) = 1 - P(X \leq 2)$
3. Find $P(X \geq 3)$. How is this related to $P(X > 2)$?
4. Find $P(X = 2)$. **Hint:** $P(X = 2) = P(X \leq 2) - P(X \leq 1)$
5. Find $P(1 \leq X \leq 3)$. **Strategy:** $P(1 \leq X \leq 3) = P(X \leq 3) - P(X \leq 0)$
6. Find $P(2 < X < 5)$. Be careful with the inequalities!

**Solutions:** *(space for student work)*

**Key Formulas:**

- $P(X = r) = P(X \leq r) - P(X \leq r-1)$
- $P(X > r) = 1 - P(X \leq r)$
- $P(X \geq r) = 1 - P(X \leq r-1)$
- $P(a \leq X \leq b) = P(X \leq b) - P(X \leq a-1)$
:::

:::note [Exercise 3: Back to the Knights]
Suppose the interrupted game had different scores. Calculate the fair distribution for each scenario:

1. Score: 2-0 (Antoine leads), first to 3 wins
2. Score: 2-1 (Antoine leads), first to 4 wins

**Solutions:** *(space for student work)*
:::

## Applications

**Example: CATL Battery Production**

**Background:** CATL produces lithium-ion batteries for electric vehicles. Based on historical data, their production process has a 95% success rate, meaning each battery independently has a 95% probability of meeting quality standards.

**Scenario:** A batch of 50 batteries has just been produced.

**Part A: Basic Probability Questions**

1. What's the probability of exactly 48 working batteries?
2. What's the expected number of defective batteries in this batch?
3. What's the standard deviation of the number of defective batteries?

**Part B: Quality Control Decisions**

1. The company's policy is to reject a batch if it contains 4 or more defective components. What's the probability that this batch will be rejected?
2. If the batch is accepted, what's the probability that it contains at most 1 defective component?

**Part C: Cost Analysis**

1. Each defective component costs \$20 to replace under warranty. What's the expected warranty cost for this batch?
2. If the company wants to be 90% confident that warranty costs won't exceed \$100 for this batch, is the current quality level sufficient?

## Past Paper Questions

**Example (June 05 Q1):**

It is estimated that $4\%$ of people have green eyes. In a random sample of size $n$, the expected number of people with green eyes is $5$.

1. Calculate the value of $n$.

The expected number of people with green eyes in a second random sample is 3.

1. Find the standard deviation of the number of people with green eyes in this second sample.

**Example (WST02/01/Jan17/1):**

The random variable $X$ has the binomial distribution $B(20, 0.45)$.

1. Find $P(X= 8)$.
2. Find the probability that $X$ lies within one standard deviation of its mean.

**Example: Chikungunya Fever Testing**

The AL High school of Guangdong Country Garden School decides to implement a Chikungunya fever testing for all 1000 students. At the time of testing, the prevalence of Chikungunya fever is 0.5% (i.e., 0.005).

**Test Characteristics:**

- **Sensitivity:** 95% — If a student has Chikungunya fever, the test correctly identifies them 95% of the time
- **Specificity:** 98% — If a student doesn't have Chikungunya fever, the test correctly identifies them as negative 98% of the time

1. Let $X$ be the number of students who actually have Chikungunya fever. What distribution does $X$ follow? Calculate the expected number of infected students.

Given that the number of infected students is 6:

1. Among the infected students, let $Y$ be the number who test positive (true positives). What distribution does $Y$ follow? Calculate $P(Y \geq 5)$.
2. Among the non-infected students, let $Z$ be the number who test positive (false positives). What distribution does $Z$ follow? Calculate the expected number of false positives.
3. **The Paradox:** If a randomly selected student tests positive, what is the probability they actually have Chikungunya fever? Use your previous results to explain why such seemingly surprising results can occur.
4. The school decides to retest all positive cases with a second, independent test (same sensitivity and specificity). If a student tests positive on both tests, what is the probability they actually have Chikungunya fever?

## Challenge Tasks: Probability Generating Function

Just as Pascal and Fermat used exhaustive enumeration, and Bernoulli provided us with a powerful formula, we now seek the most elegant and unified expression: the **Probability Generating Function (PGF)**. This remarkable tool can 'generate' all probabilities, expectations, and variances from a single function, like Gauss discovered with the binomial expansion.

:::note [Introduction to PGFs]
**Motivation:** Imagine having one function that contains all the information about a probability distribution — every probability, the mean, the variance, and more. That's exactly what a Probability Generating Function provides!

For any discrete random variable $X$ taking values $0, 1, 2, \ldots$, its PGF is defined as:

$$G_X(t) = E(t^X) = \sum_{k=0}^{\infty} t^k P(X = k)$$

This might seem abstract, but the power becomes clear through our challenges below.
:::

:::note [Challenge 1: Derive the PGF]
For $X \sim B(n, p)$, prove that $G_X(t) = (q + pt)^n$ where $q = 1-p$.

**Method:** Start from the definition $G_X(t) = E(t^X) = \sum_{r=0}^n t^r P(X = r)$

**Steps to complete:**

1. Substitute the binomial probability formula: $P(X = r) = \binom{n}{r}p^r(1-p)^{n-r}$
2. Recognize this as the binomial expansion of $(q + pt)^n$
3. Use the binomial theorem: $(a + b)^n = \sum_{r=0}^n \binom{n}{r}a^{n-r}b^r$

**Your work:** *(space for student work)*
:::

:::note [Challenge 2: Discovering the Moment Formulas]
The PGF $G_X(t) = E(t^X) = \sum_{k=0}^{\infty} t^k P(X = k)$ contains all the information about our distribution. Your mission: discover how to extract the expectation and variance!

**Part A: Finding the Expectation**

1. **Task 1:** Differentiate $G_X(t)$ with respect to $t$. What do you get?
2. **Task 2:** Evaluate your result at $t = 1$.
3. **Task 3:** Look at the sum you obtained. What statistical quantity does $\sum_{k=0}^{\infty} k P(X = k)$ represent?
4. **Conclusion:** Complete this formula: $E(X) = G'_X( ? )$

**Part B: Finding the Variance**

Recall that $\text{Var}(X) = E(X^2) - [E(X)]^2$. We need to find $E(X^2)$.

1. **Task 4:** Take the second derivative $G''_X(t)$ and evaluate at $t = 1$.
2. **Task 5:** You should get $G''_X(1) = \sum_{k=0}^{\infty} k(k-1) P(X = k)$. Expand $k(k-1)$ and rewrite this sum in terms of $E(X^2)$ and $E(X)$.
3. **Task 6:** Use your results to express $E(X^2)$ in terms of $G'_X(1)$ and $G''_X(1)$.
4. **Final Task:** Derive the variance formula using $\text{Var}(X) = E(X^2) - [E(X)]^2$.
:::

:::note [Challenge 3: Applying the Moment Formulas]
The **magical formulas** for extracting moments from PGFs are:

- $E(X) = G'_X(1)$ (first derivative at $t = 1$)
- $\text{Var}(X) = G''_X(1) + G'_X(1) - [G'_X(1)]^2$

Using $G_X(t) = (q + pt)^n$:

1. Calculate $G'_X(t)$ and evaluate at $t = 1$ to find $E(X)$
2. Calculate $G''_X(t)$ and use the variance formula to find $\text{Var}(X)$
3. Verify your results match $E(X) = np$ and $\text{Var}(X) = npq$

**Your calculations:** *(space for student work)*
:::

:::note [Challenge 4: The Ultimate Application]
**Key Property:** If $X$ and $Y$ are independent random variables, then:

$$G_{X+Y}(t) = G_X(t) \cdot G_Y(t)$$

**Application:** Let $X \sim B(n_1, p)$ and $Y \sim B(n_2, p)$ be independent. Find the distribution of $Z = X + Y$.

1. Write down $G_X(t)$ and $G_Y(t)$
2. Calculate $G_Z(t) = G_X(t) \cdot G_Y(t)$
3. From the form of $G_Z(t)$, what distribution does $Z$ follow?

**Your solution:** *(space for student work)*

**Real-world application:** This result means that if we have multiple independent binomial processes with the same success probability, their sum is also binomial. This is crucial for modeling scenarios like:

- Combining success rates from different teams
- Aggregating results from multiple experiments
- Scaling up the original knights' problem to tournaments
:::

:::note [Final Challenge: The Tournament Problem]
Consider a tournament where three equally skilled players compete. The first to win 5 games wins the tournament. If the scores are currently 4-3-2 when interrupted, how should the prize be distributed?

**Solution:** *(space for student work)*
:::
