---
title: "S3 Chapter 5: Correlation and Rank"
---

## Introduction: Does Screen Time Ruin Your Sleep?

:::note[Example: Screen Time vs. Sleep Quality]
We often hear that using your phone before bed is bad for your sleep. To test this, suppose we survey 10 students and record:

- $x$: Number of hours spent on phone before sleep
- $y$: Sleep quality score (0-100)

We might see a pattern where higher $x$ generally corresponds to lower $y$.
But is this just a coincidence in our small sample of 10 students?
Or does it provide **statistical evidence** of a real relationship in the entire student population?

In S1, we learned how to *measure* correlation. In S3, we learn how to *test* it.
:::

## Review of Product Moment Correlation (PMCC)

### Measuring Linear Association

Recall from S1 that to measure the strength of a **linear** relationship between two variables $x$ and $y$, we use the **Product Moment Correlation Coefficient (PMCC)**, denoted by $r$.

**Definition: Pearson's Correlation Coefficient**
The sample correlation coefficient is calculated as:
$$
r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}
$$
where:

- $S_{xy} = \sum(x_i - \bar{x})(y_i - \bar{y}) = \sum xy - \frac{(\sum x)(\sum y)}{n}$
- $S_{xx} = \sum(x_i - \bar{x})^2$
- $S_{yy} = \sum(y_i - \bar{y})^2$

:::note[Interpreting $r$]

- $r$ is always between $-1$ and $+1$.
- $r = +1$: Perfect positive linear correlation.
- $r = -1$: Perfect negative linear correlation.
- $r = 0$: No **linear** correlation (could still be related in a non-linear way!).
:::

:::note[Example: Hands-on — Calculating PMCC]
Let's practice calculating PMCC from scratch. Suppose we have $n=5$ students, and we record their study hours ($x$) and test scores ($y$):

| Student | 1 | 2 | 3 | 4 | 5 |
|---------|---|---|---|---|---|
| Study Hours ($x$) | 2 | 3 | 5 | 6 | 9 |
| Test Score ($y$) | 50 | 60 | 70 | 80 | 90 |

**Task:** Calculate the Product Moment Correlation Coefficient (PMCC) for this data. (Try to do this yourself first before looking at the solution in the Appendix!)
:::

### The Critical Question

Suppose we calculate $r = -0.4$ for our screen time study ($n=10$).
This suggests a moderate negative relationship.

**But wait!** Even if there is *zero* relationship in reality, random sampling might just happen to give us 10 students where the ones who used their phones more slept worse.

**Question:** How strong does $r$ need to be before we can confidently say it's not just luck?

## Hypothesis Testing for Correlation

### Population vs. Sample

Just like $\bar{X}$ estimates $\mu$, the sample correlation $r$ estimates the true population correlation coefficient, which we denote by the Greek letter $\rho$ (rho).

- $\rho$: The true correlation for *all* students (unknown parameter).
- $r$: The correlation for our sample of 10 students (calculated statistic).

### The Hypothesis Test

To test for evidence of correlation, we set up hypotheses about $\rho$:

| | |
|---|---|
| **Null Hypothesis ($H_0$):** | $\rho = 0$ (No correlation in the population) |
| **Alternative Hypothesis ($H_1$):** | $\rho \neq 0$ (Correlation exists — two-tailed) |
| | $\rho > 0$ (Positive correlation — one-tailed) |
| | $\rho < 0$ (Negative correlation — one-tailed) |

### Using Critical Values

We don't calculate a $Z$ or $t$ score manually. Instead, we compare our calculated sample $|r|$ to a **Critical Value** from statistical tables.

:::note[Decision Rule]
1. Look up the critical value for sample size $n$ and significance level $\alpha$ in the "Product Moment Correlation Coefficient" table.
2. If $|r| > \text{Critical Value}$, reject $H_0$. There is evidence of correlation.
3. If $|r| < \text{Critical Value}$, do not reject $H_0$. Insufficient evidence.
:::

:::note[Exercise: WST03/01/Jan22/3]
A medical research team carried out an investigation into the metabolic rate, MR, of men aged between 30 years and 60 years.
A random sample of 10 men was taken from this age group.
The table below shows for each man his MR and his body mass index, BMI.

| Man | A | B | C | D | E | F | G | H | I | J |
|-----|---|---|---|---|---|---|---|---|---|---|
| MR ($x$) | 6.24 | 5.94 | 6.83 | 6.53 | 6.31 | 7.44 | 7.32 | 8.70 | 7.88 | 7.78 |
| BMI ($y$) | 19.6 | 19.2 | 23.6 | 21.4 | 20.2 | 20.8 | 22.9 | 25.5 | 23.3 | 25.1 |

[You may use $S_{xy} = 15.1608$, $S_{xx} = 6.90181$, $S_{yy} = 45.304$]

(a) Calculate the value of the product moment correlation coefficient between MR and BMI for these 10 men.
(b) Use your value of the product moment correlation coefficient to test, at the 5% significance level, whether or not there is evidence of a positive correlation between MR and BMI. State your hypotheses clearly.
(c) State an assumption that must be made to carry out the test in part (b).
:::

## When Linearity Fails: Rank Correlation

### The Limitations of PMCC

PMCC ($r$) is powerful, but it has two major weaknesses. Let's explore them with hands-on examples.

:::note[Example: The "Zero PMCC" Trap — Perfect Non-linear Relationship]
Suppose we record a company's price deviation from optimal ($x$) and its resulting profit loss ($y$):

| Deviation ($x$) | -2 | -1 | 0 | 1 | 2 |
|------------------|----|----|---|---|---|
| Loss ($y$) | 4 | 1 | 0 | 1 | 4 |

![Perfect non-linear relationship: y = x² with r = 0](/images/tikz/s3-correlation-nonlinear.svg)

Clearly, $y = x^2$. There is a **perfect** deterministic relationship.

**Task:** Calculate the PMCC for this data. What do you get? Why? (Try it yourself, then check the Appendix!)
:::

:::note[Example: The "Outlier" Illusion]
Suppose we have 4 students whose hours ($x$) and scores ($y$) are:
$$(1, 10), (1, 12), (2, 10), (2, 12)$$
These points form a small square. There is **no correlation** ($r=0$).

Now, we add just **one extreme outlier** student who studied 20 hours and scored 90:
$$(20, 90)$$

![Outlier illusion: single extreme point inflates r](/images/tikz/s3-correlation-outlier.svg)

**Task:** Calculate the PMCC for these 5 points. How much does the single outlier affect $r$? (Check the Appendix for the result).
:::

:::caution[When should we NOT use Pearson's $r$?]
If the data is:

- **Non-linear** (e.g., curves, exponential growth, but still strictly increasing/decreasing), OR
- **Not normal / Has Outliers** (highly sensitive to extremes), OR
- **Ordinal** (rankings like 1st, 2nd, 3rd, instead of measurements like height or weight),

then Pearson's $r$ is not appropriate.

**Solution:** We use **Ranks** instead of raw values!
:::

## Spearman's Rank Correlation Coefficient

### Definition

Spearman's Rank Correlation Coefficient (denoted $r_s$) is simply the PMCC calculated on the **ranks** of the data rather than the data itself.

1. Rank the $x$ values from 1 to $n$ (e.g., $1=$ smallest, $n=$ largest).
2. Rank the $y$ values from 1 to $n$.
3. Calculate Pearson's $r$ using these ranks.

### The Shortcut Formula

If there are no tied ranks (no two values are the same), algebra gives us a much simpler formula:

:::note[Spearman's Rank Formula]
$$
r_s = 1 - \frac{6 \sum d^2}{n(n^2 - 1)}
$$
where $d = \text{Rank}(x) - \text{Rank}(y)$ is the difference between the ranks for each pair.
:::

:::note[Challenge Exercise: Derivation]
**Challenge:** Can you prove this formula?
*Hint:*

- The ranks are the integers $1, 2, \ldots, n$.
- The mean of the ranks is $\frac{n+1}{2}$.
- The variance of the integers $1 \ldots n$ is $\frac{n^2-1}{12}$.
- Start with the definition of PMCC and substitute these values!
:::

### Handling Tied Ranks

If two or more values are identical (e.g., two students both score 85), we give them the **average** of the ranks they would have occupied.

- Example: If the 3rd and 4th best scores are tied, both get rank $\frac{3+4}{2} = 3.5$. The next best score gets rank 5.

:::caution[CRITICAL WARNING: Tied Ranks and the Formula]
The shortcut formula $r_s = 1 - \frac{6 \sum d^2}{n(n^2 - 1)}$ was derived under the strict assumption that the ranks are exactly the integers $1, 2, \ldots, n$.

When you have tied ranks (like $3.5$), this assumption is broken.

- **Do NOT use the shortcut formula** if there are tied ranks!
- **Correct Method:** You **must** use the original PMCC formula $r = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}$ on the ranked values.
:::

## Hypothesis Testing for Spearman's Rank

We can test for association using ranks too.

- **Null Hypothesis ($H_0$):** $\rho_s = 0$ (No association).
- **Alternative Hypothesis ($H_1$):** $\rho_s \neq 0$ (Association exists).

**Method:**
Look up the critical value in the **Spearman's Rank Correlation Coefficient** table.

:::note[Exercise: 6691/01/May16/3]
(a) Describe when you would use Spearman's rank correlation coefficient rather than the product moment correlation coefficient to measure the strength of the relationship between two variables.

A shop sells sunglasses and ice cream. For one week in the summer the shopkeeper ranked the daily sales of ice cream and sunglasses. The ranks are shown in the table below.

| | Sun | Mon | Tues | Weds | Thurs | Fri | Sat |
|------|-----|-----|------|------|-------|-----|-----|
| Ice cream | 6 | 4 | 7 | 5 | 3 | 2 | 1 |
| Sunglasses | 6 | 5 | 7 | 2 | 3 | 4 | 1 |

(b) Calculate Spearman's rank correlation coefficient for these data.
(c) Test, at the 5% level of significance, whether or not there is a positive correlation between sales of ice cream and sales of sunglasses. State your hypotheses clearly.
(d) The shopkeeper calculates the product moment correlation coefficient from his raw data and finds $r = 0.65$. Using this new coefficient, test, at the 5% level of significance, whether or not there is a positive correlation between sales of ice cream and sales of sunglasses.
(e) Using your answers to part (c) and part (d), comment on the nature of the relationship between sales of sunglasses and sales of ice cream.
:::

## Homework Exercises

:::note[Exercise: WST03/01/May15/2]
Nine dancers, Adilzhan (A), Bianca (B), Chantelle (C), Lee (L), Nikki (N), Ranjit (R), Sergei (S), Thuy (T) and Yana (Y), perform in a dancing competition.
Two judges rank each dancer according to how well they perform. The table below shows the rankings of each judge starting from the dancer with the strongest performance.

| Rank | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|------|---|---|---|---|---|---|---|---|---|
| Judge 1 | S | N | B | C | T | A | Y | R | L |
| Judge 2 | S | T | N | B | C | Y | L | A | R |

(a) Calculate Spearman's rank correlation coefficient for these data. (5)
(b) Stating your hypotheses clearly, test at the 1% level of significance, whether or not the two judges are generally in agreement. (4)
:::

:::note[Exercise: 6691/01R/May14/1]
A journalist is investigating factors which influence people when they buy a new car. One possible factor is fuel efficiency. The journalist randomly selects 8 car models. Each model's annual sales and fuel efficiency, in km/litre, are shown in the table below.

| Car model | A | B | C | D | E | F | G | H |
|-----------|---|---|---|---|---|---|---|---|
| Annual sales | 1800 | 5400 | 18100 | 7100 | 9300 | 4800 | 12200 | 10700 |
| Fuel efficiency | 5.2 | 18.6 | 14.8 | 13.2 | 18.3 | 11.9 | 16.5 | 17.7 |

(a) Calculate Spearman's rank correlation coefficient for these data.
(b) The journalist believes that car models with higher fuel efficiency will achieve higher sales. Stating your hypotheses clearly, test whether or not the data support the journalist's belief. Use a 5% level of significance.
(c) State the assumption necessary for a product moment correlation coefficient to be valid in this case.
(d) The mean and median fuel efficiencies of the car models in the random sample are 14.5 km/litre and 15.65 km/litre respectively. Considering these statistics, as well as the distribution of the fuel efficiency data, state whether or not the data suggest that the assumption in part (c) might be true in this case. Give a reason for your answer. (No further calculations are required.)
:::

:::note[Exercise: WST03/01/June22/1]
The table below shows the number of televised tournaments won and the total number of tournaments won by the top 10 ranked darts players in 2020.

| Player's rank | Televised tournaments won | Total tournaments won |
|---------------|---------------------------|----------------------|
| 1 | 55 | 135 |
| 2 | 7 | 33 |
| 3 | 5 | 17 |
| 4 | 2 | 14 |
| 5 | 4 | 9 |
| 6 | 2 | 5 |
| 7 | 9 | 36 |
| 8 | 0 | 15 |
| 9 | 3 | 3 |
| 10 | 0 | 13 |

Michael did not want to calculate Spearman's rank correlation coefficient between player's rank and the rank in televised tournaments won because there would be tied ranks.

(a) Explain how Michael could have dealt with these tied ranks.
(b) Given that the largest number of total tournaments won is ranked number 1, calculate the value of Spearman's rank correlation coefficient between player's rank and the rank in total tournaments won.
(c) Stating your hypotheses and critical value clearly, test at the 5% level of significance, whether or not there is evidence of a positive correlation between player's rank and the rank in total tournaments won for these darts players.
(d) Michael does not believe that there is a positive correlation between player's rank and the rank in total number of tournaments won. Find the largest level of significance, that is given in the tables provided, which could be used to support Michael's claim. You must state your critical value.
:::

## Appendix: Solutions to Hands-on Examples

**Solution to PMCC Calculation:**

| $x$ | $y$ | $x^2$ | $y^2$ | $xy$ |
|-----|-----|-------|-------|------|
| 2 | 50 | 4 | 2500 | 100 |
| 3 | 60 | 9 | 3600 | 180 |
| 5 | 70 | 25 | 4900 | 350 |
| 6 | 80 | 36 | 6400 | 480 |
| 9 | 90 | 81 | 8100 | 810 |
| $\sum x = 25$ | $\sum y = 350$ | $\sum x^2 = 155$ | $\sum y^2 = 25500$ | $\sum xy = 1920$ |

$$S_{xx} = 155 - \frac{25^2}{5} = 30$$
$$S_{yy} = 25500 - \frac{350^2}{5} = 1000$$
$$S_{xy} = 1920 - \frac{25 \times 350}{5} = 170$$
$$r = \frac{170}{\sqrt{30 \times 1000}} \approx 0.981$$

**Solution to The "Zero PMCC" Trap:**

- $\sum x = 0$, $\sum y = 10$, $\sum xy = 0$

Since $S_{xy} = 0 - \frac{0 \times 10}{5} = 0$, we get $r = 0$.

**Solution to The "Outlier" Illusion:**

- $\sum x = 26$, $\sum y = 134$, $\sum xy = 1844$
- $\sum x^2 = 406$, $\sum y^2 = 8588$

$$S_{xx} = 406 - \frac{26^2}{5} = 270.8$$
$$S_{yy} = 8588 - \frac{134^2}{5} = 4995.2$$
$$S_{xy} = 1844 - \frac{26 \times 134}{5} = 1147.2$$
$$r = \frac{1147.2}{\sqrt{270.8 \times 4995.2}} \approx 0.986$$
