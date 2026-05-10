---
title: "S3 Chapter 1: Sampling Methods"
---

## From Guesswork to Science: How We Study Populations

Imagine you're the manager of a popular bubble tea shop near your school, "HelloTea." You want to know what students think about your store so you can make it even better.

:::tip[The Central Challenge]
**Your Goal:** Understand student satisfaction with HelloTea to improve service

**The Population:** All 3,000 students at your school

**The Challenge:** Surveying everyone would take too long and cost too much

**Your Decision:** Survey 200 students instead

**The Question:** How do you choose which 200 students to survey?
:::

## Starting Simple: Your First Instinct

### The Most Natural Approach

Let's begin with the most intuitive idea: what if we could give every student an equal chance of being selected, with no favoritism or bias? This is the foundation of scientific sampling.

**Definition: Simple Random Sampling**
**Simple random sampling** is a method where every member of the population has an equal and independent chance of being selected. Every possible sample of size $n$ has the same probability of being chosen.

**The Core Principle:** Complete randomness eliminates human bias. You're not choosing students based on convenience, appearance, friendliness, or any other factor that might skew results.

#### How to Execute Simple Random Sampling

**Step 1: Create a Sampling Frame**

First, you need a complete list of all students. Let's say you obtain the school's student database and assign each student a unique number from 0001 to 3000.

:::tip[Key Concept: Sampling Frame]
A **sampling frame** is the actual list from which you draw your sample. Ideally, it matches the population perfectly, but in practice:
- Some students might have graduated (list too large)
- New students might not be in the database yet (list too small)
- Some contact information might be outdated

The quality of your sampling frame directly affects the quality of your results!
:::

**Step 2: Use a Random Number Table**

To ensure true randomness, we use a **random number table** - a pre-generated table of digits arranged with no predictable pattern.

<table>
<tr><td>86</td><td>13</td><td>84</td><td>10</td><td>07</td><td>30</td><td>39</td><td>05</td><td>97</td><td>96</td><td>88</td><td>07</td><td>37</td><td>26</td><td>04</td><td>89</td><td>13</td><td>48</td><td>19</td><td>20</td></tr>
<tr><td>60</td><td>78</td><td>48</td><td>12</td><td>99</td><td>47</td><td>09</td><td>46</td><td>91</td><td>33</td><td>17</td><td>21</td><td>03</td><td>94</td><td>79</td><td>00</td><td>08</td><td>50</td><td>40</td><td>16</td></tr>
<tr><td>78</td><td>48</td><td>06</td><td>37</td><td>82</td><td>26</td><td>01</td><td>06</td><td>64</td><td>65</td><td>94</td><td>41</td><td>17</td><td>26</td><td>74</td><td>66</td><td>61</td><td>93</td><td>24</td><td>97</td></tr>
<tr><td>80</td><td>56</td><td>90</td><td>79</td><td>66</td><td>94</td><td>18</td><td>40</td><td>97</td><td>79</td><td>93</td><td>20</td><td>41</td><td>51</td><td>25</td><td>04</td><td>20</td><td>71</td><td>76</td><td>04</td></tr>
<tr><td>99</td><td>09</td><td>39</td><td>25</td><td>66</td><td>31</td><td>70</td><td>56</td><td>30</td><td>15</td><td>52</td><td>17</td><td>87</td><td>55</td><td>31</td><td>11</td><td>10</td><td>68</td><td>98</td><td>23</td></tr>
<tr><td>56</td><td>32</td><td>32</td><td>72</td><td>91</td><td>65</td><td>97</td><td>36</td><td>56</td><td>61</td><td>12</td><td>79</td><td>95</td><td>17</td><td>57</td><td>16</td><td>53</td><td>58</td><td>96</td><td>36</td></tr>
<tr><td>66</td><td>02</td><td>49</td><td>93</td><td>97</td><td>44</td><td>99</td><td>15</td><td>56</td><td>86</td><td>80</td><td>57</td><td>11</td><td>78</td><td>40</td><td>23</td><td>58</td><td>40</td><td>86</td><td>14</td></tr>
<tr><td>31</td><td>77</td><td>53</td><td>94</td><td>05</td><td>93</td><td>56</td><td>14</td><td>71</td><td>23</td><td>60</td><td>46</td><td>05</td><td>33</td><td>23</td><td>72</td><td>93</td><td>10</td><td>81</td><td>23</td></tr>
<tr><td>98</td><td>79</td><td>72</td><td>43</td><td>14</td><td>76</td><td>54</td><td>77</td><td>66</td><td>29</td><td>84</td><td>09</td><td>88</td><td>56</td><td>75</td><td>86</td><td>41</td><td>67</td><td>04</td><td>42</td></tr>
<tr><td>50</td><td>97</td><td>92</td><td>15</td><td>10</td><td>01</td><td>57</td><td>01</td><td>87</td><td>33</td><td>73</td><td>17</td><td>70</td><td>18</td><td>40</td><td>21</td><td>24</td><td>20</td><td>66</td><td>62</td></tr>
<tr><td>90</td><td>51</td><td>94</td><td>50</td><td>12</td><td>48</td><td>88</td><td>95</td><td>09</td><td>34</td><td>09</td><td>30</td><td>22</td><td>27</td><td>25</td><td>56</td><td>40</td><td>76</td><td>01</td><td>59</td></tr>
<tr><td>31</td><td>99</td><td>52</td><td>24</td><td>13</td><td>43</td><td>27</td><td>88</td><td>11</td><td>39</td><td>41</td><td>65</td><td>00</td><td>84</td><td>13</td><td>06</td><td>31</td><td>79</td><td>74</td><td>97</td></tr>
<tr><td>22</td><td>96</td><td>23</td><td>34</td><td>46</td><td>12</td><td>67</td><td>11</td><td>48</td><td>06</td><td>99</td><td>24</td><td>14</td><td>83</td><td>78</td><td>37</td><td>65</td><td>73</td><td>39</td><td>47</td></tr>
<tr><td>06</td><td>84</td><td>55</td><td>41</td><td>27</td><td>06</td><td>74</td><td>59</td><td>14</td><td>29</td><td>20</td><td>14</td><td>45</td><td>75</td><td>31</td><td>16</td><td>05</td><td>41</td><td>22</td><td>96</td></tr>
<tr><td>08</td><td>64</td><td>89</td><td>30</td><td>25</td><td>25</td><td>71</td><td>35</td><td>33</td><td>31</td><td>04</td><td>56</td><td>12</td><td>67</td><td>03</td><td>74</td><td>07</td><td>16</td><td>49</td><td>32</td></tr>
<tr><td>86</td><td>87</td><td>62</td><td>43</td><td>15</td><td>11</td><td>76</td><td>49</td><td>79</td><td>13</td><td>78</td><td>80</td><td>93</td><td>89</td><td>09</td><td>57</td><td>07</td><td>14</td><td>40</td><td>74</td></tr>
<tr><td>94</td><td>44</td><td>97</td><td>13</td><td>77</td><td>04</td><td>35</td><td>02</td><td>12</td><td>76</td><td>60</td><td>91</td><td>93</td><td>40</td><td>81</td><td>06</td><td>85</td><td>85</td><td>72</td><td>84</td></tr>
<tr><td>63</td><td>25</td><td>55</td><td>14</td><td>66</td><td>47</td><td>99</td><td>90</td><td>02</td><td>90</td><td>83</td><td>43</td><td>16</td><td>01</td><td>19</td><td>69</td><td>11</td><td>78</td><td>87</td><td>16</td></tr>
<tr><td>11</td><td>22</td><td>83</td><td>98</td><td>15</td><td>21</td><td>18</td><td>57</td><td>53</td><td>42</td><td>91</td><td>91</td><td>26</td><td>52</td><td>89</td><td>13</td><td>86</td><td>00</td><td>47</td><td>61</td></tr>
<tr><td>01</td><td>70</td><td>10</td><td>83</td><td>94</td><td>71</td><td>13</td><td>67</td><td>11</td><td>12</td><td>36</td><td>54</td><td>53</td><td>32</td><td>90</td><td>43</td><td>79</td><td>01</td><td>95</td><td>15</td></tr>
</table>

**Step 3: Select Your Sample**

Let's walk through the process together:

1. **Choose a starting point randomly:** Close your eyes and point to any position in the table. Let's say you land on Row 3, Column 2.

2. **Decide on a reading pattern:** Since our student IDs are 4-digit numbers (0001-3000), we'll read 4 digits at a time. We'll read across rows from left to right.

3. **Extract numbers systematically:**
   - Starting at Row 3, Column 2: We see "48". Continue reading: "48", "06", "37"
   - Combine into 4-digit groups: 4806, 3782, 2601, 0664, 6594, 4117, 2674...
   - Wait! 4806 is larger than 3000 - we skip it!
   - Continue: 3782 - skip (too large), 2601 - **Select student #2601!**

4. **Continue until you have 200 unique numbers:**
   - Skip any number that appears twice or any invalid numbers, such as numbers larger than 3000 or smaller than 0001.

### Discovering Problems: When Simple Random Sampling Falls Short

After implementing your simple random sampling survey, you encounter some real-world challenges:

:::caution[Reality Check: Problems Encountered]
**Efficiency Concerns:**
- You spend a lot of time and effort generating the random number table and selecting the sample.

**Representation Concerns:**
- By pure chance, your sample includes only a few students who visit HelloTea daily (heavy users)
- The feedback heavily reflects opinions of non-customers rather than actual customers
:::

**The Key Realization:** While simple random sampling is unbiased and theoretically perfect, it can be **inefficient** and might miss important subgroups **by chance**.

:::tip[Thinking Question]
Before reading further: How might you modify your sampling approach to address these issues?
:::

## Making It Easier: Systematic Sampling

### A More Efficient Approach

Let's tackle the first problem: the efficiency concern. What if there was a way to maintain randomness while making the process more organized?

**The New Plan:** Instead of selecting completely random students, you'll use the student database ordered alphabetically by name. You'll select every $k$-th student from the list.

**Definition: Systematic Sampling**
**Systematic sampling** is a method where you select every $k$-th member from an ordered sampling frame, starting from a randomly chosen position between 1 and $k$.

The **sampling interval** $k$ is calculated as:
$$k = \frac{\text{Population size}}{\text{Sample size}}$$

### How to Execute Systematic Sampling

**Step 1: Calculate the Sampling Interval**

$$k = \frac{3000 \text{ students}}{200 \text{ sample size}} = 15$$

This means you'll select every 15th student from your list.

**Step 2: Choose a Random Starting Point**

Use your random number table to select a number between 1 and 15. Let's say you get 12.

**Step 3: Select Students Systematically**

Starting with student #12, select every 15th student:
- Student #12 (starting point), Student #27 ($12 + 15$)
- Student #42 ($27 + 15$), Student #57 ($42 + 15$)
- ... continue until you reach student #2997 ($12 + 199 \times 15$)

You'll automatically get exactly 200 students!

### Advantages and Disadvantage of Systematic Sampling

:::tip[Benefits Over Simple Random Sampling]
1. **Much easier to execute:** No need to read through hundreds of random numbers
2. **Ensures spread:** Students are distributed evenly through the list
:::

However, systematic sampling has a critical weakness: **periodicity**.

**Example: The Apartment Building Survey**

**Scenario:** A researcher wants to survey residents in a 20-floor apartment building. Each floor has 15 apartments numbered 01-15. The building database lists apartments in order: 101, 102, ..., 115, 201, 202, ..., 215, ... 2001, ..., 2015.

There are 300 total apartments. The researcher wants a sample of 20 apartments.

(a) Calculate the sampling interval $k$: __________

(b) If you randomly start with student #7, list the first 5 students you would survey:

(c) List the last 2 students in your sample:

(d) What is the potential problem with this sampling method?

:::caution[Warning: Check for Periodicity!]
Before using systematic sampling, always check if your sampling frame has any periodic patterns that might align with your sampling interval. If so, either:
- Use simple random sampling instead, or
- Reorder your sampling frame randomly first, then apply systematic sampling
:::

## Ensuring Representation: Stratified Sampling

### The Representation Challenge Revisited

Remember our second problem? By chance, simple random sampling might give us too few heavy customers or miss important subgroups entirely. This is especially problematic when:

- Different subgroups might have very different opinions
- Some subgroups are small but critically important
- You want to compare across subgroups

**The Key Insight:** What if we could **guarantee** representation from each important subgroup?

**Example: HelloTea: Understanding Your Customer Base**

Through preliminary research, you discover students fall into four distinct groups based on tea consumption:

| Customer Type | Definition | Count |
|---|---|---|
| Heavy Users | $\geq$ 3 visits/week | 300 students (10%) |
| Regular Users | 1-2 visits/week | 1,200 students (40%) |
| Light Users | 1-3 visits/month | 900 students (30%) |
| Rare/Non-users | $<$ 1 visit/month | 600 students (20%) |
| **Total** | | **3,000 students (100%)** |

**The Business Question:** Heavy users contribute the most revenue - their opinions are crucial! How can you ensure they're adequately represented in your sample of 200?

**Definition: Stratified Random Sampling**
**Stratified random sampling** divides the population into non-overlapping groups called **strata** (plural of stratum) based on specific characteristics. Then, simple random sampling is performed **independently within each stratum**.

### How to Execute Stratified Sampling

**Step 1: Identify Your Strata**

Choose characteristics that are:
- Relevant to your research question
- Known before sampling (you must be able to classify population members)
- Creating groups that are internally similar but different from each other

For HelloTea: The four user types (Heavy, Regular, Light, Rare)

**Step 2: Determine Sample Sizes for Each Stratum**

**Option A - Proportional Allocation:** Match population proportions

| Stratum | Population | Proportion | Sample Size |
|---|---|---|---|
| Heavy Users | 300 | 10% | $200 \times 0.10 = 20$ |
| Regular Users | 1,200 | 40% | $200 \times 0.40 = 80$ |
| Light Users | 900 | 30% | $200 \times 0.30 = 60$ |
| Rare/Non-users | 600 | 20% | $200 \times 0.20 = 40$ |
| **Total** | **3,000** | **100%** | **200** |

**Step 3: Randomly Sample Within Each Stratum**

:::tip[Advantages of Stratified Sampling]
1. **Guaranteed representation:** Every important subgroup is definitely included
2. **More precise estimates:** Usually smaller sampling error than simple random sampling
3. **Enables subgroup analysis:** You can compare heavy users vs. light users
4. **Flexible:** You can oversample small but important groups
5. **Efficient:** Often need smaller total sample size for same precision
:::

## When You Don't Have a List: Quota Sampling

### The Practical Constraint

Imagine you're conducting market research for HelloTea, but you encounter a new problem:

:::caution[Real-World Barrier]
The school won't give you the complete student database due to privacy concerns. You also don't know which students are heavy vs. light tea consumers beforehand.

But you still want representation from different user types. What can you do?
:::

### The Practical Alternative: Quota Sampling

**Definition: Quota Sampling**
**Quota sampling** is a method where you divide the population into groups (like in stratified sampling) and set target numbers (**quotas**) for each group. However, instead of random selection, you use **convenience sampling** within each group until quotas are filled.

Key difference from stratified sampling: Selection within groups is **non-random**.

### How to Execute Quota Sampling

**Step 1: Define Your Quotas**

Based on your knowledge of the customer base, you set the same targets as stratified sampling:

| Customer Type | Quota |
|---|---|
| Heavy Users ($\geq 3$ visits/week) | 20 |
| Regular Users (1-2 visits/week) | 80 |
| Light Users (1-3 visits/month) | 60 |
| Rare/Non-users ($<$ 1 visit/month) | 40 |
| **Total** | **200** |

**Step 2: Convenience Sampling Until Quotas Are Met**

You station your survey team near HelloTea and the school cafeteria. They approach students and:

1. Ask a screening question: "How often do you visit HelloTea?"
2. Based on the answer, classify the student into a group
3. If that group's quota isn't full, conduct the survey
4. If the quota is full, politely decline and move to the next student
5. Stop when all quotas are filled

**Example conversation:**
- *Surveyor:* "Excuse me, how often do you visit HelloTea?"
- *Student:* "About twice a week."
- *Surveyor checks:* Regular Users quota: 65/80 filled $\checkmark$
- *Surveyor:* "Great! Would you mind answering a few questions about your experience?"

### Advantages and Disadvantages of Quota Sampling

:::tip[Why Quota Sampling is Popular]
1. **No sampling frame needed:** You don't need a complete population list
2. **Flexible:** Easy to implement in dynamic settings (shopping malls, streets, events)
3. **Still ensures diversity:** Quotas guarantee representation of different groups
:::

:::caution[Critical Limitation]
**The Fundamental Problem:** Because quota sampling doesn't use random selection, we **cannot** calculate sampling error or confidence intervals. We have no mathematical way to quantify how well our sample represents the population.

This makes quota sampling suitable for **exploratory research** but problematic for **formal statistical inference**.
:::

## Putting It All Together: Choosing the Right Method

Now that we've explored all four methods through the journey of solving real problems, let's synthesize what we've learned.

| Method | Random Selection? | Main Advantage | Main Disadvantage |
|---|---|---|---|
| **Simple** | Yes - completely random | Unbiased, theoretically perfect | Can be expensive; might miss subgroups by chance |
| **Systematic** | Partially - random start, then systematic | Easy to execute; ensures spread | Vulnerable to periodicity; less random than SRS |
| **Stratified** | Yes - within stratum | Guarantees subgroup representation; more precise | Requires knowing strata beforehand; more complex |
| **Quota** | No - convenience within quotas | Fast, cheap, no list needed | Non-probability; cannot calculate sampling error |

## Exercises

:::note[Exercise: WST03/01/May15/1]
The names of the 720 members of a swimming club are listed alphabetically in the club's membership book. The chairman of the swimming club wishes to select a systematic sample of 40 names. The names are numbered from 001 to 720 and a number between 001 and $w$ is selected at random. The corresponding name and every $x$th name thereafter are included in the sample.

(a) Find the value of $w$. (1)

(b) Find the value of $x$. (1)

(c) Write down the probability that the sample includes both the first name and the second name in the club's membership book. (1)

(d) State one advantage and one disadvantage of systematic sampling in this case. (2)
:::

:::note[Exercise: Practice with Random Number Table]
Using the random number table above, practice selecting a sample:

**Scenario:** Your school library has 1,500 books, numbered 0001 to 1500. You want to randomly select 10 books for a condition inspection.

(a) Choose your starting point: Row _____, Column _____

(b) Record the first 10 valid book numbers you find:

(c) How many numbers did you need to read before finding 10 valid ones? __________
:::

## Past Paper Questions

:::note[Exercise: 6691/01R/June13/1]
A gym club has 400 members of which 300 are males.

Explain clearly how a stratified sample of size 60 could be taken. (3)
:::

:::note[Exercise: 6691/01/June13/3]
A college manager wants to survey students' opinions of enrichment activities. She decides to survey the students on the courses summarised in the table below.

| Course | Number of students enrolled |
|---|---|
| Leisure and Sport | 420 |
| Information Technology | 337 |
| Health and Social Care | 200 |
| Media Studies | 43 |

Each student takes only one course.

The manager has access to the college's information system that holds full details of each of the enrolled students including name, address, telephone number and their course of study. She wants to compare the opinions of students on each course and has a generous budget to pay for the cost of the survey.

(a) Give one advantage and one disadvantage of carrying out this survey using
(i) quota sampling,
(ii) stratified sampling. (2)

The manager decides to take a stratified sample of 100 students.

(b) Calculate the number of students to be sampled from each course. (3)

(c) Describe how to choose students for the stratified sample. (2)
:::

:::note[Exercise: 6691/01/May16/1]
(a) State two reasons why stratified sampling might be a more suitable sampling method than simple random sampling. (2)

(b) State two reasons why stratified sampling might be a more suitable sampling method than quota sampling. (2)
:::

:::note[Exercise: WST03/01/June16/3]
A company wants to survey its employees' attitudes to work. The company's workforce is located at three offices. The number of employees at each location is summarised in the table below.

| Office location | Number of employees |
|---|---|
| Bristol | 856 |
| Dudley | 429 |
| Glasgow | 1215 |

Each employee is located at only one office.

A personnel assistant plans to survey the first 50 employees who arrive for work at the Bristol office on a Monday morning.

(a) Give two reasons why this survey is likely to lead to a biased response. (2)

A personnel manager has access to the company's information system that holds details of each employee including their place of work.

The manager decides to take a stratified sample of 150 employees.

(b) Describe how to choose employees for this stratified sample. (3)

(c) Explain an advantage of using a stratified sample rather than a quota sample. (1)
:::

## Reflection and Key Takeaways

### The Deeper Lesson

:::tip[Statistical Wisdom]
**There is no universally "best" sampling method.**

The optimal choice depends on:
- Your research goals
- Available resources (time, money, information)
- Required precision
- Population characteristics
- Ethical and practical constraints

**Good statisticians:**
- Understand the trade-offs between different methods
- Match the method to the context
- Acknowledge limitations and potential biases
- Communicate uncertainty honestly
:::

### Ethical Considerations

Sampling isn't just technical - it's ethical:

- **Representation:** Do our sampling methods give everyone a fair voice?
- **Bias:** Are we systematically excluding certain groups?
- **Transparency:** Are we honest about our methods and limitations?
- **Misuse:** Could our results be misinterpreted or misused?

**Example:** If an election poll only surveys voters in a certain district, they'll miss all the voters in other districts - their rights will not be properly represented.

### Connection to Broader Statistics

The sampling methods you've learned are foundational to:
- **Statistical inference:** Drawing conclusions about populations from samples
- **Confidence intervals:** Quantifying uncertainty in estimates
- **Goodness of fit tests:** Testing how well a model fits the data
- **Rank correlation tests:** Testing whether two variables are related in a monotonic way

**Looking ahead:** In future chapters, you'll learn how to analyze the data collected through these sampling methods, test hypotheses, and draw rigorous conclusions with quantified uncertainty.
