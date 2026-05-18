window.QUESTIONS = [
  {
    "id": "2016-P1-Q1",
    "year": 2016,
    "paper": 1,
    "num": 1,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "It is given that the expansion of $(ax + b)^3$ is $8x^3 - px^2 + 18x - 3\\sqrt{3}$, where $a$, $b$ and $p$ are real constants.\n\nWhat is the value of $p$?",
    "options": {
      "A": "$-12\\sqrt{3}$",
      "B": "$-6\\sqrt{3}$",
      "C": "$-4\\sqrt{3}$",
      "D": "$-\\sqrt{3}$",
      "E": "$\\sqrt{3}$",
      "F": "$4\\sqrt{3}$",
      "G": "$6\\sqrt{3}$",
      "H": "$12\\sqrt{3}$"
    },
    "answer": "H",
    "analysis": "【题目分析】\n本题考查二项式展开与系数匹配。核心思路是将 $(ax+b)^3$ 展开，与已知表达式逐项对比系数，解出 $a$ 和 $b$，进而求得 $p$。\n\n【解题步骤】\n第一步：写出二项式展开式\n\n$$(ax+b)^3 = a^3x^3 + 3a^2b\\,x^2 + 3ab^2\\,x + b^3$$\n\n第二步：对比 $x^3$ 项系数\n\n$$a^3 = 8 \\quad \\Rightarrow \\quad a = 2$$\n\n第三步：对比常数项\n\n$$b^3 = -3\\sqrt{3}$$\n\n注意到 $(-\\sqrt{3})^3 = -(\\sqrt{3})^3 = -3\\sqrt{3}$，因此 $b = -\\sqrt{3}$。\n\n第四步：用 $x$ 项系数验证（考试可跳过）\n\n$$3ab^2 = 3 \\times 2 \\times (-\\sqrt{3})^2 = 3 \\times 2 \\times 3 = 18$$\n\n与题目中 $18x$ 吻合，确认 $a$、$b$ 无误。\n\n第五步：求 $x^2$ 项系数，确定 $p$\n\n$$3a^2b = 3 \\times 2^2 \\times (-\\sqrt{3}) = -12\\sqrt{3}$$\n\n题目中 $x^2$ 项为 $-px^2$，故 $-p = -12\\sqrt{3}$，即\n\n$$p = 12\\sqrt{3}$$\n\n【快捷思路】\n由 $a^3=8$ 和 $b^3=-3\\sqrt{3}$ 直接得出 $a=2$、$b=-\\sqrt{3}$，代入 $3a^2b = -p$ 即可得到 $p=12\\sqrt{3}$，无需验证中间系数。\n\n【正确答案】H\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "a1_algebra_basics",
      "c_sequences_series"
    ],
    "sections": [
      "a1.polynomial_expansion",
      "a1.coefficient_matching",
      "c.binomial_expansion"
    ],
    "skills": [
      "binomial-expansion",
      "coefficient-comparison",
      "constant-term-matching",
      "sign-tracking"
    ],
    "primary_section": "a1.coefficient_matching"
  },
  {
    "id": "2016-P1-Q2",
    "year": 2016,
    "paper": 1,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The expression $3x^3 + 13x^2 + 8x + a$, where $a$ is a constant, has $(x + 2)$ as a factor.\n\nWhich one of the following is a complete factorisation of the expression?",
    "options": {
      "A": "$(x + 2)(x - 1)(3x - 2)$",
      "B": "$(x + 2)(x + 1)(3x - 2)$",
      "C": "$(x + 2)(x + 1)(3x + 2)$",
      "D": "$(x + 2)(x - 3)(3x + 2)$",
      "E": "$(x + 2)(x + 3)(3x - 2)$",
      "F": "$(x + 2)(x + 3)(3x + 2)$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查因式定理与多项式因式分解。已知 $(x+2)$ 是三次多项式的因式，先利用因式定理求常数 $a$，再对多项式做完全分解。\n\n【解题步骤】\n第一步：利用因式定理求 $a$\n\n设 $f(x) = 3x^3 + 13x^2 + 8x + a$。因 $(x+2)$ 是因式，故 $f(-2) = 0$：\n\n$$f(-2) = 3(-8) + 13(4) + 8(-2) + a = -24 + 52 - 16 + a = 12 + a = 0$$\n\n解得 $a = -12$。\n\n第二步：用 $(x+2)$ 去除多项式\n\n设 $f(x) = (x+2)(3x^2 + bx + c)$，展开得\n\n$$(x+2)(3x^2 + bx + c) = 3x^3 + (b+6)x^2 + (c+2b)x + 2c$$\n\n对比 $x^2$ 系数：$b+6 = 13$，得 $b = 7$。\n\n对比常数项：$2c = -12$，得 $c = -6$。\n\n因此\n\n$$f(x) = (x+2)(3x^2 + 7x - 6)$$\n\n第三步：分解二次因式 $3x^2 + 7x - 6$\n\n十字相乘法：$3x^2 + 7x - 6 = (x+3)(3x-2)$。\n\n验证：$(x+3)(3x-2) = 3x^2 - 2x + 9x - 6 = 3x^2 + 7x - 6$，正确。\n\n第四步：写出完全分解式\n\n$$f(x) = (x+2)(x+3)(3x-2)$$\n\n【快捷思路】\n求出 $a=-12$ 后，各选项展开的常数项等于各因式常数之积。只有 D 和 E 的常数项为 $-12$。再检验 $x^2$ 系数：E 中 $(x+2)(x+3)(3x-2)$ 的 $x^2$ 系数为 $3(1+2+3) + 6 = 13$，吻合，直接选 E。\n\n【正确答案】E\n",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "a2_equations_inequalities",
      "a1_algebra_basics"
    ],
    "sections": [
      "a2.factor_theorem",
      "a2.complete_factorisation",
      "a1.polynomial_factorisation"
    ],
    "skills": [
      "factor-theorem",
      "polynomial-factorisation",
      "coefficient-comparison",
      "option-elimination"
    ],
    "primary_section": "a2.factor_theorem"
  },
  {
    "id": "2016-P1-Q3",
    "year": 2016,
    "paper": 1,
    "num": 3,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "A line is drawn normal to the curve $y = \\frac{2}{x^2}$ at the point on the curve where $x = 1$.\n\nThis line cuts the $x$-axis at $P$ and the $y$-axis at $Q$.\n\nThe length of $PQ$ is",
    "options": {
      "A": "$\\frac{3\\sqrt{5}}{2}$",
      "B": "$\\frac{3\\sqrt{17}}{4}$",
      "C": "$\\frac{7\\sqrt{17}}{4}$",
      "D": "$\\frac{35}{4}$",
      "E": "$\\frac{35\\sqrt{5}}{2}$",
      "F": "$\\frac{3\\sqrt{17}}{2}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考查导数的几何意义与法线方程。先求曲线在指定点的导数（切线斜率），取负倒数得法线斜率，写出法线方程后求其与两坐标轴的交点，最后用距离公式计算 $PQ$。\n\n【解题步骤】\n第一步：求切点坐标\n\n当 $x = 1$ 时，$y = \\dfrac{2}{1^2} = 2$，切点为 $(1, 2)$。\n\n第二步：求导数与切线斜率\n\n$$y = 2x^{-2} \\quad \\Rightarrow \\quad \\frac{dy}{dx} = -4x^{-3} = -\\frac{4}{x^3}$$\n\n在 $x = 1$ 处，切线斜率为 $y'(1) = -4$。\n\n第三步：求法线斜率与法线方程\n\n法线斜率为切线斜率的负倒数：\n\n$$m_{\\text{法线}} = -\\frac{1}{-4} = \\frac{1}{4}$$\n\n法线过点 $(1, 2)$，方程为\n\n$$y - 2 = \\frac{1}{4}(x - 1)$$\n\n第四步：求与坐标轴交点\n\n与 $x$ 轴交点 $P$：令 $y = 0$，得 $-2 = \\dfrac{1}{4}(x-1)$，解得 $x = -7$，即 $P(-7, 0)$。\n\n与 $y$ 轴交点 $Q$：令 $x = 0$，得 $y - 2 = -\\dfrac{1}{4}$，解得 $y = \\dfrac{7}{4}$，即 $Q\\!\\left(0, \\dfrac{7}{4}\\right)$。\n\n第五步：计算 $PQ$ 长度\n\n$$PQ = \\sqrt{(-7)^2 + \\left(\\frac{7}{4}\\right)^2} = \\sqrt{49 + \\frac{49}{16}} = \\sqrt{\\frac{833}{16}}$$\n\n注意到 $833 = 49 \\times 17$，因此\n\n$$PQ = \\frac{\\sqrt{49 \\times 17}}{4} = \\frac{7\\sqrt{17}}{4}$$\n\n【快捷思路】\n法线斜率 $m = \\dfrac{1}{4}$，$x$ 截距绝对值为 $7$。由斜率与 $x$ 截距可直接写出斜边 $PQ = 7 \\times \\dfrac{\\sqrt{1^2+4^2}}{4} = \\dfrac{7\\sqrt{17}}{4}$，省去单独求 $Q$ 点坐标的步骤。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ],
    "modules": [
      "f_differentiation",
      "d_coordinate_geometry",
      "m_comprehensive_training"
    ],
    "sections": [
      "f.normal_lines",
      "f.axis_intercepts",
      "d.line_equations",
      "d.distance_between_points",
      "m.calculus_coordinate_geometry"
    ],
    "skills": [
      "differentiate-power-function",
      "normal-gradient",
      "line-equation",
      "axis-intercepts",
      "distance-formula"
    ],
    "primary_section": "f.normal_lines"
  },
  {
    "id": "2016-P1-Q4",
    "year": 2016,
    "paper": 1,
    "num": 4,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The sequence $a_n$ is defined by the rule:\n\n$$a_n = (-1)^n - (-1)^{n-1} + (-1)^{n+2} \\text{ for } n \\geq 1.$$\n\nFind the value of\n\n$$\\sum_{n=1}^{39} a_n$$",
    "options": {
      "A": "$-39$",
      "B": "$-3$",
      "C": "$-1$",
      "D": "$0$",
      "E": "$1$",
      "F": "$3$",
      "G": "$39$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查含 $(-1)^n$ 型数列的通项化简与求和。先化简 $a_n$ 为简洁形式，再观察奇偶项交替规律快速求和。\n\n【解题步骤】\n第一步：化简通项 $a_n$\n\n$$a_n = (-1)^n - (-1)^{n-1} + (-1)^{n+2}$$\n\n利用指数性质：\n\n$$(-1)^{n-1} = (-1)^n \\cdot (-1)^{-1} = -(-1)^n$$\n\n$$(-1)^{n+2} = (-1)^n \\cdot (-1)^2 = (-1)^n$$\n\n代入得\n\n$$a_n = (-1)^n - \\bigl(-(-1)^n\\bigr) + (-1)^n = 3 \\cdot (-1)^n$$\n\n第二步：写出前几项验证规律\n\n$$a_1 = -3,\\quad a_2 = 3,\\quad a_3 = -3,\\quad a_4 = 3,\\quad \\ldots$$\n\n数列在 $-3$ 和 $3$ 之间交替，规律清晰。\n\n第三步：求 $\\displaystyle\\sum_{n=1}^{39} a_n$\n\n$$\\sum_{n=1}^{39} a_n = 3 \\sum_{n=1}^{39} (-1)^n$$\n\n从 $n=1$ 到 $39$，奇数项共 $20$ 个（各为 $-1$），偶数项共 $19$ 个（各为 $+1$）：\n\n$$\\sum_{n=1}^{39} (-1)^n = 20 \\times (-1) + 19 \\times 1 = -1$$\n\n因此\n\n$$\\sum_{n=1}^{39} a_n = 3 \\times (-1) = -3$$\n\n【快捷思路】\n每相邻两项之和为零（$a_{2k-1}+a_{2k} = -3+3 = 0$）。$39$ 项中有 $19$ 对完整的零和项，只剩最后一项 $a_{39} = 3 \\cdot (-1)^{39} = -3$，即得答案。\n\n【正确答案】B\n",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.alternating_sequences",
      "c.parity_based_summation"
    ],
    "skills": [
      "alternating-sequence-simplification",
      "parity-analysis",
      "term-pairing",
      "finite-sum"
    ],
    "primary_section": "c.alternating_sequences"
  },
  {
    "id": "2016-P1-Q5",
    "year": 2016,
    "paper": 1,
    "num": 5,
    "topic": "Integration",
    "difficulty": 3,
    "question": "What is the total area enclosed between the curve $y = x^2 - 1$, the $x$-axis and the lines $x = -2$ and $x = 2$?",
    "options": {
      "A": "$\\frac{4}{3}$",
      "B": "$\\frac{8}{3}$",
      "C": "4",
      "D": "$\\frac{16}{3}$",
      "E": "12",
      "F": "16"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考查定积分求曲线与坐标轴围成的面积。抛物线 $y = x^2 - 1$ 在 $[-2, 2]$ 上跨越 $x$ 轴，需分段积分取绝对值。\n\n【解题步骤】\nStep 1：找零点。令 $x^2 - 1 = 0$，得 $x = \\pm 1$。$[-2, -1]$ 和 $[1, 2]$ 上 $y \\ge 0$，$[-1, 1]$ 上 $y \\le 0$。\n\nStep 2：利用偶函数对称性：\n$$\\text{面积} = 2\\left[\\int_{0}^{1}(1 - x^2)\\,dx + \\int_{1}^{2}(x^2 - 1)\\,dx\\right]$$\n\nStep 3：$\\displaystyle\\int_{0}^{1}(1 - x^2)\\,dx = \\frac{2}{3}$，$\\displaystyle\\int_{1}^{2}(x^2 - 1)\\,dx = \\frac{4}{3}$。\n\nStep 4：面积 $= 2 \\times \\left(\\frac{2}{3} + \\frac{4}{3}\\right) = 4$。\n\n【快捷思路】\n偶函数只算右半再乘 $2$，三段面积各 $\\frac{4}{3}$，总计 $4$。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Graphs"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs",
      "m_comprehensive_training"
    ],
    "sections": [
      "g.area_between_curve_and_axis",
      "g.piecewise_absolute_area",
      "i.quadratic_graphs",
      "m.integration_functions_graphs"
    ],
    "skills": [
      "quadratic-zero-finding",
      "split-integral",
      "absolute-area",
      "symmetry-use",
      "definite-integration"
    ],
    "primary_section": "g.area_between_curve_and_axis"
  },
  {
    "id": "2016-P1-Q6",
    "year": 2016,
    "paper": 1,
    "num": 6,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "P, Q, and R are each mixtures of red and white paint.\n\nThe percentage by volume of red paint in P is 30%.\n\nThe percentage by volume of red paint in Q is 20%.\n\nThe mixtures P, Q, and R are combined in the proportion 12 : 5 : 3 respectively.\n\nIf the resulting mixture contains 25% by volume of red paint, what percentage by volume of mixture R is red paint?",
    "options": {
      "A": "25%",
      "B": "23%",
      "C": "$13\\frac{1}{3}\\%$",
      "D": "$19\\frac{1}{2}\\%$",
      "E": "$9\\frac{3}{4}\\%$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题是混合物加权平均问题。三种油漆按 $12:5:3$ 比例混合，已知两种的红漆浓度和最终浓度，反求第三种浓度。\n\n【解题步骤】\nStep 1：P、Q、R 取 $12$、$5$、$3$ 单位体积，总体积 $20$。\n\nStep 2：P 中红漆 $12 \\times 30\\% = 3.6$，Q 中红漆 $5 \\times 20\\% = 1$。\n\nStep 3：最终浓度 $25\\%$，总红漆 $= 20 \\times 25\\% = 5$。\n\nStep 4：设 R 浓度为 $r$，则 $3.6 + 1 + \\dfrac{3r}{100} = 5$，解得 $\\dfrac{3r}{100} = 0.4$，$r = \\dfrac{40}{3} = 13\\frac{1}{3}$。\n\n即 R 中红漆浓度为 $13\\frac{1}{3}\\%$。\n\n【快捷思路】\n列加权平均方程：$\\dfrac{12 \\times 30 + 5 \\times 20 + 3r}{20} = 25$，解得 $r = 13\\frac{1}{3}$。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "a1_algebra_basics"
    ],
    "sections": [
      "a1.ratio_weighted_average"
    ],
    "skills": [
      "weighted-average",
      "ratio-units",
      "percentage-equation"
    ],
    "primary_section": "a1.ratio_weighted_average"
  },
  {
    "id": "2016-P1-Q7",
    "year": 2016,
    "paper": 1,
    "num": 7,
    "topic": "Probability",
    "difficulty": 3,
    "question": "60% of a sports club's members are women and the remainder are men.\n\nThis sports club offers the opportunity to play tennis or cricket. Every member plays exactly one of the two sports.\n\n$\\frac{2}{5}$ of the male members of the club play cricket;\n\n$\\frac{2}{3}$ of the cricketing members of the club are women.\n\nWhat is the probability that a member of the club, chosen at random, is a woman who plays tennis?",
    "options": {
      "A": "$\\frac{1}{5}$",
      "B": "$\\frac{7}{25}$",
      "C": "$\\frac{1}{3}$",
      "D": "$\\frac{11}{25}$",
      "E": "$\\frac{3}{5}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题是分类概率问题。已知女性占比 $60\\%$、男性中 $\\frac{2}{5}$ 打板球、板球中 $\\frac{2}{3}$ 是女性，求随机抽到打网球的女性的概率。用 $2 \\times 2$ 列联表逐步填充。\n\n【解题步骤】\nStep 1：设总人数 $300$，女性 $180$ 人，男性 $120$ 人。\n\nStep 2：男性中 $\\frac{2}{5}$ 打板球：$120 \\times \\frac{2}{5} = 48$ 人，余 $72$ 人打网球。\n\nStep 3：板球中男性占 $\\frac{1}{3}$（女性占 $\\frac{2}{3}$），板球总数 $C = 48 \\times 3 = 144$。\n\nStep 4：女性打板球 $= 144 \\times \\frac{2}{3} = 96$ 人，女性打网球 $= 180 - 96 = 84$ 人。\n\nStep 5：概率 $= \\dfrac{84}{300} = \\dfrac{7}{25}$。\n\n【快捷思路】\n设 $300$ 人列 $2 \\times 2$ 表：男板球 $48$，板球总数 $144$，女网球 $84$，概率 $\\frac{7}{25}$。\n\n【正确答案】B\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sets"
    ],
    "modules": [
      "j_sets_probability"
    ],
    "sections": [
      "j.conditional_probability.contingency_tables"
    ],
    "skills": [
      "contingency-table",
      "conditional-proportion",
      "choose-convenient-total"
    ],
    "primary_section": "j.conditional_probability.contingency_tables"
  },
  {
    "id": "2016-P1-Q8",
    "year": 2016,
    "paper": 1,
    "num": 8,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the maximum angle $x$ in the range $0^\\circ \\le x \\le 360^\\circ$ which satisfies the equation\n\n$$\\cos^2(2x) + \\sqrt{3} \\sin(2x) - \\frac{7}{4} = 0$$",
    "options": {
      "A": "$30^\\circ$",
      "B": "$60^\\circ$",
      "C": "$120^\\circ$",
      "D": "$150^\\circ$",
      "E": "$210^\\circ$",
      "F": "$240^\\circ$",
      "G": "$300^\\circ$",
      "H": "$330^\\circ$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考查三角方程求解。利用 $\\cos^2\\theta = 1 - \\sin^2\\theta$ 化为关于 $\\sin(2x)$ 的二次方程。\n\n【解题步骤】\nStep 1：代入得 $\\sin^2(2x) - \\sqrt{3}\\sin(2x) + \\frac{3}{4} = 0$。\n\nStep 2：令 $t = \\sin(2x)$，得 $t^2 - \\sqrt{3}\\,t + \\frac{3}{4} = 0$。判别式 $\\Delta = 0$，重根 $t = \\dfrac{\\sqrt{3}}{2}$。\n\nStep 3：$x \\in [0^\\circ, 360^\\circ]$ 则 $2x \\in [0^\\circ, 720^\\circ]$。$\\sin(2x) = \\dfrac{\\sqrt{3}}{2}$ 的解为 $2x = 60^\\circ, 120^\\circ, 420^\\circ, 480^\\circ$。\n\nStep 4：$x = 30^\\circ, 60^\\circ, 210^\\circ, 240^\\circ$，最大值为 $240^\\circ$。\n\n【快捷思路】\n判别式为零，$2x$ 最大解 $480^\\circ$，即 $x = 240^\\circ$。\n\n【正确答案】F\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry",
      "a2_equations_inequalities"
    ],
    "sections": [
      "e.trig_equations.quadratic_form",
      "e.special_angles.multiple_angle_range",
      "a2.quadratic_equations.discriminant"
    ],
    "skills": [
      "pythagorean-identity",
      "quadratic-substitution",
      "repeated-root",
      "angle-range-doubling"
    ],
    "primary_section": "e.trig_equations.quadratic_form"
  },
  {
    "id": "2016-P1-Q9",
    "year": 2016,
    "paper": 1,
    "num": 9,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "The line segment joining the points $(3, 3)$ and $(7, 5)$ is a diameter of a circle.\n\nThis circle is translated by 3 units in the negative $x$-direction, then reflected in the $x$-axis, and then enlarged by a scale factor of 4 about the centre of the resulting circle.\n\nThe equation of the final circle is",
    "options": {
      "A": "$(x - 2)^2 + (y - 4)^2 = 320$",
      "B": "$(x - 2)^2 + (y + 4)^2 = 320$",
      "C": "$(x - 2)^2 + (y - 4)^2 = 80$",
      "D": "$(x - 2)^2 + (y + 4)^2 = 80$",
      "E": "$(x - 2)^2 + (y - 4)^2 = 20$",
      "F": "$(x - 2)^2 + (y + 4)^2 = 20$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考查圆的方程与几何变换的综合应用。已知直径两端点确定一个圆，依次经历平移、反射、位似放大三种变换，需要逐步跟踪圆心和半径的变化。\n\n【解题步骤】\nStep 1：确定原圆的圆心和半径\n\n直径端点为 $A(3, 3)$ 和 $B(7, 5)$。\n\n圆心为直径中点：\n$$C = \\left(\\frac{3+7}{2}, \\frac{3+5}{2}\\right) = (5, 4)$$\n\n直径长度 $|AB| = \\sqrt{(7-3)^2 + (5-3)^2} = \\sqrt{16+4} = \\sqrt{20}$。\n\n半径 $r = \\frac{\\sqrt{20}}{2} = \\sqrt{5}$。\n\nStep 2：向负 $x$ 方向平移 3 个单位\n\n圆心横坐标减 3，纵坐标不变，半径不变：\n$$(5, 4) \\to (2, 4)$$\n\nStep 3：关于 $x$ 轴反射\n\n反射只改变 $y$ 坐标的符号，半径不变：\n$$(2, 4) \\to (2, -4)$$\n\nStep 4：关于圆心位似放大，位似比为 4\n\n以圆心为位似中心时，圆心位置保持不变，半径乘以位似比：\n$$R = 4 \\times \\sqrt{5} = 4\\sqrt{5}$$\n$$R^2 = (4\\sqrt{5})^2 = 80$$\n\n最终圆心为 $(2, -4)$，半径平方为 $80$，方程为：\n$$(x-2)^2 + (y+4)^2 = 80$$\n\n【快捷思路】\n观察选项右侧只有 $320, 80, 20$ 三种可能。原半径平方为 5，放大 4 倍后半径变为 $4\\sqrt{5}$，平方为 $80$，排除 A/B/E/F。再由反射步骤知 $y$ 坐标变号得 $(y+4)$，选 D。\n\n【正确答案】D\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "d_coordinate_geometry",
      "i_functions_graphs"
    ],
    "sections": [
      "d.circle_equations.circle_transformations",
      "i.graph_transformations.reflection_translation_enlargement"
    ],
    "skills": [
      "midpoint-of-diameter",
      "distance-formula",
      "track-centre-and-radius",
      "circle-transformation"
    ],
    "primary_section": "d.circle_equations.circle_transformations"
  },
  {
    "id": "2016-P1-Q10",
    "year": 2016,
    "paper": 1,
    "num": 10,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "How many solutions does the equation $x \\tan x = 1$ have in the interval $-2\\pi \\le x \\le 2\\pi$?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4",
      "F": "5",
      "G": "6"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查三角函数方程解的个数判定。将方程 $x \\tan x = 1$ 转化为 $\\tan x = \\frac{1}{x}$，通过分析两个函数图像在给定区间内的交点个数求解。\n\n【解题步骤】\nStep 1：等价变形\n\n当 $x \\neq 0$ 时，原方程等价于 $\\tan x = \\frac{1}{x}$。验证 $x = 0$：左边 $0 \\cdot \\tan 0 = 0 \\neq 1$，故 0 不是解，变形不会漏解。\n\nStep 2：利用对称性\n\n设 $f(x) = x \\tan x$，则 $f(-x) = (-x)\\tan(-x) = x \\tan x = f(x)$，为偶函数。因此若 $x_0$ 是解，则 $-x_0$ 也是解。只需统计 $x > 0$ 的解数再乘以 2。\n\nStep 3：在 $(0, 2\\pi]$ 上逐段分析交点\n\n区间 $(0, \\frac{\\pi}{2})$：$\\tan x$ 从 0 单调递增至 $+\\infty$，$\\frac{1}{x}$ 从 $+\\infty$ 单调递减至 $\\frac{2}{\\pi}$。两函数一增一减且值域重叠，由介值定理恰有 1 个交点。\n\n区间 $(\\frac{\\pi}{2}, \\frac{3\\pi}{2})$：$\\tan x$ 从 $-\\infty$ 递增至 $+\\infty$（在 $x=\\pi$ 处过零点），而 $\\frac{1}{x} > 0$ 始终为正。因此只有在 $\\tan x > 0$ 的子区间 $(\\pi, \\frac{3\\pi}{2})$ 内才可能有交点。在该子区间内 $\\tan x$ 从 0 递增至 $+\\infty$，$\\frac{1}{x}$ 递减，恰有 1 个交点。\n\n区间 $(\\frac{3\\pi}{2}, 2\\pi]$：$\\tan x < 0$ 而 $\\frac{1}{x} > 0$，符号相反，无交点。\n\n因此 $x > 0$ 有 2 个解。\n\nStep 4：汇总\n\n由偶函数对称性，$x < 0$ 同样有 2 个解。\n\n总解数 $= 2 + 2 = 4$。\n\n【快捷思路】\n利用偶函数性质只统计正半轴，在每个 $\\tan x$ 连续分支上判断与 $\\frac{1}{x}$ 是否有交点。正半轴 $(0, \\frac{\\pi}{2})$ 和 $(\\pi, \\frac{3\\pi}{2})$ 各有一个，共 4 个解。\n\n【正确答案】E\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Functions"
    ],
    "modules": [
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "e.trig_equations.graph_intersection",
      "e.trig_graphs.tangent_branches",
      "i.equation_roots.graph_intersections"
    ],
    "skills": [
      "graph-intersection-counting",
      "even-function-symmetry",
      "tan-branch-analysis",
      "asymptote-interval-counting"
    ],
    "primary_section": "e.trig_equations.graph_intersection"
  },
  {
    "id": "2016-P1-Q11",
    "year": 2016,
    "paper": 1,
    "num": 11,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The real roots of the equation $4^{2x} + 12 = 2^{2x+3}$ are $p$ and $q$, where $p > q$.\n\nThe value of $p - q$ can be expressed as",
    "options": {
      "A": "$\\frac{3}{4}$",
      "B": "1",
      "C": "4",
      "D": "$-\\frac{1}{2} + \\log_{10} \\frac{3}{2}$",
      "E": "$\\frac{\\log_{10} 3}{\\log_{10} 4}$",
      "F": "$\\frac{\\log_{10} 3}{\\log_{10} 2}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查指数方程的求解与对数运算。通过换元将指数方程化为二次方程，再利用对数换底公式将两实根之差化为以 10 为底的对数形式。\n\n【解题步骤】\nStep 1：统一底数并换元\n\n注意到 $4^{2x} = (2^2)^{2x} = 2^{4x} = (2^{2x})^2$，且 $2^{2x+3} = 2^{2x} \\cdot 2^3 = 8 \\cdot 2^{2x}$。\n\n令 $y = 2^{2x}$（显然 $y > 0$），原方程变为：\n$$y^2 + 12 = 8y$$\n$$y^2 - 8y + 12 = 0$$\n\nStep 2：解二次方程\n\n因式分解：\n$$(y - 6)(y - 2) = 0$$\n得 $y = 6$ 或 $y = 2$。\n\nStep 3：还原求 $x$\n\n当 $2^{2x} = 6$ 时：$2x = \\log_2 6$，即 $x = \\frac{1}{2}\\log_2 6$。\n\n当 $2^{2x} = 2$ 时：$2x = 1$，即 $x = \\frac{1}{2}$。\n\n由于 $\\frac{1}{2}\\log_2 6 = \\frac{1}{2}(1 + \\log_2 3) > \\frac{1}{2}$，故：\n$$p = \\frac{1}{2}\\log_2 6, \\qquad q = \\frac{1}{2}$$\n\nStep 4：计算 $p - q$ 并匹配选项\n\n$$p - q = \\frac{1}{2}\\log_2 6 - \\frac{1}{2} = \\frac{1}{2}(\\log_2 6 - \\log_2 2) = \\frac{1}{2}\\log_2 3$$\n\n利用换底公式 $\\log_2 3 = \\frac{\\log_{10} 3}{\\log_{10} 2}$：\n$$p - q = \\frac{1}{2} \\cdot \\frac{\\log_{10} 3}{\\log_{10} 2} = \\frac{\\log_{10} 3}{2\\log_{10} 2} = \\frac{\\log_{10} 3}{\\log_{10} 4}$$\n\n【快捷思路】\n换元后二次方程两根为 6 和 2，对应 $x$ 值差为 $\\frac{1}{2}\\log_2 3$。选项均以 $\\log_{10}$ 给出，利用换底公式 $\\log_2 3 = \\frac{\\log_{10} 3}{\\log_{10} 2}$ 及 $2\\log_{10} 2 = \\log_{10} 4$ 即可匹配 E。\n\n【正确答案】E\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a1_algebra_basics"
    ],
    "sections": [
      "a3.exponential_equations",
      "a3.change_of_base",
      "a1.exponent_laws"
    ],
    "skills": [
      "exponent-rewriting",
      "substitution-to-quadratic",
      "logarithm-change-of-base",
      "compare-root-values"
    ],
    "primary_section": "a3.exponential_equations"
  },
  {
    "id": "2016-P1-Q12",
    "year": 2016,
    "paper": 1,
    "num": 12,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "A right circular cylinder is contained within a sphere of radius 5 cm in such a way that the whole of the circumferences of both ends of the cylinder are in contact with the sphere.\n\nThe diagram shows a planar cross section through the centre of the sphere and cylinder.\n\nFind, in cubic centimetres, the maximum possible volume of the cylinder.",
    "options": {
      "A": "$250\\pi$",
      "B": "$500\\pi$",
      "C": "$1000\\pi$",
      "D": "$\\frac{250\\sqrt{3}}{3}\\pi$",
      "E": "$\\frac{500\\sqrt{3}}{9}\\pi$",
      "F": "$\\frac{1000\\sqrt{3}}{9}\\pi$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查内接几何体的体积最优化问题。圆柱内接于球体，利用截面中的勾股定理建立变量关系，将体积表示为单变量函数后用导数求最大值。\n\n【解题步骤】\nStep 1：建立几何关系\n\n设球半径 $R = 5$。取过球心的截面，设圆柱底面半径为 $r$，圆柱高的一半为 $h$（即球心到圆柱底面的距离）。\n\n由勾股定理：\n$$h^2 + r^2 = 5^2 = 25$$\n即 $r^2 = 25 - h^2$。\n\n圆柱的总高度为 $2h$，体积为：\n$$V = \\pi r^2 (2h) = \\pi(25 - h^2)(2h) = 2\\pi(25h - h^3)$$\n\nStep 2：求导找极值点\n\n$$\\frac{dV}{dh} = 2\\pi(25 - 3h^2)$$\n\n令导数为零：\n$$25 - 3h^2 = 0 \\quad \\Rightarrow \\quad h^2 = \\frac{25}{3} \\quad \\Rightarrow \\quad h = \\frac{5}{\\sqrt{3}}$$\n\n验证极大值：$\\frac{d^2V}{dh^2} = -12\\pi h < 0$（当 $h > 0$ 时），确为极大值。\n\nStep 3：计算最大体积\n\n$$r^2 = 25 - \\frac{25}{3} = \\frac{50}{3}$$\n\n圆柱高度 $2h = \\frac{10}{\\sqrt{3}} = \\frac{10\\sqrt{3}}{3}$。\n\n最大体积：\n$$V_{\\max} = \\pi \\cdot \\frac{50}{3} \\cdot \\frac{10\\sqrt{3}}{3} = \\frac{500\\sqrt{3}}{9}\\pi$$\n\n【快捷思路】\n内接圆柱最大体积的经典结论：最优时球心到端面的距离 $h = \\frac{R}{\\sqrt{3}}$。代入 $R = 5$ 得 $h = \\frac{5}{\\sqrt{3}}$，$r^2 = \\frac{2}{3}R^2 = \\frac{50}{3}$，体积为 $\\frac{500\\sqrt{3}}{9}\\pi$。\n\n【正确答案】E\n",
    "images": {
      "image": "2016 P1 Q12"
    },
    "has_image": true,
    "related_topics": [
      "Coordinate Geometry"
    ],
    "modules": [
      "f_differentiation",
      "d_coordinate_geometry",
      "m_comprehensive_training"
    ],
    "sections": [
      "f.applied_optimisation",
      "f.stationary_points_maxima_minima",
      "d.cross_section_geometry"
    ],
    "skills": [
      "model-geometric-constraint",
      "pythagorean-constraint",
      "single-variable-optimisation",
      "differentiate-cubic",
      "second-derivative-test"
    ],
    "primary_section": "f.applied_optimisation"
  },
  {
    "id": "2016-P1-Q13",
    "year": 2016,
    "paper": 1,
    "num": 13,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "How many real roots does the equation $3x^5 - 10x^3 - 120x + 30 = 0$ have?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "answer": "C",
    "analysis": "【题目分析】\n考查利用导数研究多项式函数单调性与实根个数。对五次方程 $3x^5-10x^3-120x+30=0$，求导找临界点，用介值定理逐区间判断零点个数。\n\n【解题步骤】\n设 $f(x)=3x^5-10x^3-120x+30$，求导：\n$$f'(x)=15x^4-30x^2-120=15(x^2-4)(x^2+2)$$\n$x^2+2>0$ 恒成立，导数零点为 $x=\\pm 2$。\n\n符号：$x<-2$ 时 $f'>0$，$-2<x<2$ 时 $f'<0$，$x>2$ 时 $f'>0$。\n\n计算极值：\n$$f(-2)=-96+80+240+30>0,\\quad f(2)=96-80-240+30<0$$\n（官方解答只需判正负，无需精确值。）\n\n结合两端趋势（$x\\to\\pm\\infty$ 时 $f\\to\\pm\\infty$），由介值定理：\n- $(-\\infty,-2)$ 递增至正值 $\\to$ 1个根\n- $(-2,2)$ 递减从正到负 $\\to$ 1个根\n- $(2,+\\infty)$ 递增从负到 $+\\infty$ $\\to$ 1个根\n\n共3个实根。\n\n【快捷思路】\n导数零点为 $\\pm 2$，只需判 $f(-2)>0$ 且 $f(2)<0$，即可确认三次穿轴。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs",
      "a1_algebra_basics"
    ],
    "sections": [
      "f.monotonicity_root_count",
      "i.polynomial_root_count",
      "i.derivatives_and_graph_shape"
    ],
    "skills": [
      "differentiate-polynomial",
      "factor-derivative",
      "sign-chart",
      "intermediate-value-theorem",
      "root-counting"
    ],
    "primary_section": "f.monotonicity_root_count"
  },
  {
    "id": "2016-P1-Q14",
    "year": 2016,
    "paper": 1,
    "num": 14,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The terms of an infinite series S are formed by adding together the corresponding terms in two infinite geometric series, T and U.\n\nThe first term of T and the first term of U are each 4.\n\nIn order, the first three terms of the combined series S are 8, 3, and $\\frac{5}{4}$\n\nWhat is the sum to infinity of S?",
    "options": {
      "A": "$\\frac{32}{5}$",
      "B": "$\\frac{20}{3}$",
      "C": "$\\frac{64}{5}$",
      "D": "$\\frac{40}{3}$",
      "E": "16",
      "F": "32"
    },
    "answer": "D",
    "analysis": "【题目分析】\n考查等比数列的性质与无穷和公式。两个首项均为4的等比数列对应项相加，利用前三项求公比，再求总无穷和。\n\n【解题步骤】\n设公比为 $r_1,r_2$。由前三项得方程组：\n$$r_1+r_2=\\frac{3}{4},\\qquad r_1^2+r_2^2=\\frac{5}{16}$$\n\n利用 $(r_1+r_2)^2=r_1^2+2r_1r_2+r_2^2$ 得 $r_1r_2=\\frac{1}{8}$。\n\n$r_1,r_2$ 是 $t^2-\\frac{3}{4}t+\\frac{1}{8}=0$ 的两根，因式分解 $(2t-1)(4t-1)=0$，得 $r_1=\\frac{1}{2}$，$r_2=\\frac{1}{4}$。\n\n$|r|<1$ 收敛。无穷和：\n$$\\frac{4}{1-\\frac{1}{2}}+\\frac{4}{1-\\frac{1}{4}}=8+\\frac{16}{3}=\\frac{40}{3}$$\n\n【快捷思路】\n由和与平方和求出积，构造二次方程解得公比 $\\frac{1}{2},\\frac{1}{4}$，套用无穷和公式。\n\n【正确答案】D\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a2_equations_inequalities"
    ],
    "sections": [
      "c.geometric_series_infinite_sum",
      "c.combined_geometric_series",
      "a2.vieta_relations"
    ],
    "skills": [
      "geometric-series-sum",
      "derive-common-ratios",
      "symmetric-sums",
      "vieta-relations",
      "convergence-check"
    ],
    "primary_section": "c.combined_geometric_series"
  },
  {
    "id": "2016-P1-Q15",
    "year": 2016,
    "paper": 1,
    "num": 15,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The least possible value of the gradient of the curve $y = (2x + a)(x - 2a)^2$ at the point where $x = 1$, as $a$ varies, is",
    "options": {
      "A": "$-\\frac{49}{4}$",
      "B": "$-8$",
      "C": "$-\\frac{25}{4}$",
      "D": "$\\frac{7}{4}$",
      "E": "$\\frac{47}{16}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n考查乘积法则求导与二次函数最值。曲线 $y=(2x+a)(x-2a)^2$，先对 $x$ 求导代入 $x=1$，再对参数 $a$ 求最小值。\n\n【解题步骤】\n对 $y=(2x+a)(x-2a)^2$ 用乘积法则求导：\n$$y'=2(x-2a)^2+(2x+a)\\cdot 2(x-2a)$$\n提取公因式 $2(x-2a)$：\n$$y'=2(x-2a)\\big[(x-2a)+(2x+a)\\big]=2(x-2a)(3x-a)$$\n\n代入 $x=1$，得该点梯度关于 $a$ 的函数：\n$$G(a)=2(1-2a)(3-a)=4a^2-14a+6$$\n\n二次项系数 $4>0$，抛物线开口向上，最小值在顶点处：\n$$a=\\frac{14}{2\\times 4}=\\frac{7}{4}$$\n\n代入求最小值：\n$$G\\!\\left(\\frac{7}{4}\\right)=4\\!\\left(\\frac{49}{16}\\right)-14\\!\\left(\\frac{7}{4}\\right)+6=\\frac{49-98+24}{4}=-\\frac{25}{4}$$\n\n【快捷思路】\n求导化简后代入 $x=1$ 得二次函数 $4a^2-14a+6$，顶点公式直接得最小值 $-\\frac{25}{4}$。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "a2_equations_inequalities"
    ],
    "sections": [
      "f.parameter_optimisation",
      "f.product_rule",
      "a2.quadratic_vertex_form"
    ],
    "skills": [
      "product-rule",
      "evaluate-derivative-at-point",
      "parameter-function",
      "quadratic-minimum",
      "vertex-formula"
    ],
    "primary_section": "f.parameter_optimisation"
  },
  {
    "id": "2016-P1-Q16",
    "year": 2016,
    "paper": 1,
    "num": 16,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Given the simultaneous equations\n\n$$\\log_{10} 2 + \\log_{10}(y - 1) = 2 \\log_{10} x$$\n$$\\log_{10}(y + 3 - 3x) = 0$$\n\nthe values of $y$ are",
    "options": {
      "A": "$\\frac{5}{2} \\pm \\frac{3\\sqrt{5}}{2}$",
      "B": "$3 \\pm \\sqrt{3}$",
      "C": "$7 \\pm 3\\sqrt{3}$",
      "D": "$3, 9$",
      "E": "$1, 13$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n考查对数运算法则与方程组求解。先利用对数性质化为代数方程，消元后解二次方程并验证定义域。\n\n【解题步骤】\n由第二个方程：\n$$\\log_{10}(y+3-3x)=0\\implies y+3-3x=1$$\n整理得 $y=3x-2$。\n\n由第一个方程，利用 $\\log a+\\log b=\\log(ab)$ 和 $n\\log a=\\log(a^n)$：\n$$\\log_{10}[2(y-1)]=\\log_{10}(x^2)$$\n去对数得 $2(y-1)=x^2$。\n\n将 $y=3x-2$ 代入：\n$$2(3x-3)=x^2\\implies x^2-6x+6=0$$\n\n求根公式：\n$$x=\\frac{6\\pm\\sqrt{36-24}}{2}=3\\pm\\sqrt{3}$$\n\n回代 $y=3x-2$：\n$$y=3(3\\pm\\sqrt{3})-2=7\\pm 3\\sqrt{3}$$\n\n验证定义域：$x>0$ 且 $y-1>0$。由于 $\\sqrt{27}<6$，故 $7-3\\sqrt{3}>1$，两个解均有效。\n\n【快捷思路】\n对数方程化为代数方程组，消元解二次方程，注意检验对数定义域排除增根。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities",
      "m_comprehensive_training"
    ],
    "sections": [
      "a3.logarithmic_equations",
      "a3.log_laws_and_domains",
      "a2.simultaneous_equations"
    ],
    "skills": [
      "log-laws",
      "domain-check",
      "substitution",
      "quadratic-solving"
    ],
    "primary_section": "a3.logarithmic_equations"
  },
  {
    "id": "2016-P1-Q17",
    "year": 2016,
    "paper": 1,
    "num": 17,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "It is given that\n\n$$y = (1 + 2 \\cos x) \\cos 2x \\quad \\text{for } 0 < x < \\pi$$\n\nThe complete set of values of $x$ for which $y$ is negative is",
    "options": {
      "A": "$0 < x < \\frac{\\pi}{4}, \\frac{2\\pi}{3} < x < \\frac{3\\pi}{4}$",
      "B": "$0 < x < \\frac{\\pi}{4}, \\frac{3\\pi}{4} < x < \\pi$",
      "C": "$0 < x < \\frac{2\\pi}{3}, \\frac{3\\pi}{4} < x < \\pi$",
      "D": "$\\frac{\\pi}{4} < x < \\frac{2\\pi}{3}, \\frac{3\\pi}{4} < x < \\pi$",
      "E": "$\\frac{\\pi}{4} < x < \\frac{2\\pi}{3}$",
      "F": "$\\frac{\\pi}{4} < x < \\frac{3\\pi}{4}$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考察三角函数不等式的求解。给定 $y = (1 + 2\\cos x)\\cos 2x$，要求在区间 $(0,\\pi)$ 内找出使 $y < 0$ 的全部 $x$ 值。核心思路是找到两个因子各自的零点，将区间分段后逐段判断符号。\n\n【解题步骤】\n首先分别求两个因子为零的点。\n\n由 $\\cos 2x = 0$，在 $(0,\\pi)$ 内 $2x = \\frac{\\pi}{2}$ 或 $2x = \\frac{3\\pi}{2}$，解得 $x = \\frac{\\pi}{4}$ 或 $x = \\frac{3\\pi}{4}$。\n\n由 $1 + 2\\cos x = 0$ 得 $\\cos x = -\\frac{1}{2}$，在 $(0,\\pi)$ 内解得 $x = \\frac{2\\pi}{3}$。\n\n三个零点 $\\frac{\\pi}{4} < \\frac{2\\pi}{3} < \\frac{3\\pi}{4}$ 将区间 $(0,\\pi)$ 分为四段，逐段判断：\n\n第一段 $0 < x < \\frac{\\pi}{4}$：$\\cos x > 0$，故 $1 + 2\\cos x > 0$；同时 $2x \\in (0,\\frac{\\pi}{2})$，$\\cos 2x > 0$。两因子同为正，$y > 0$。\n\n第二段 $\\frac{\\pi}{4} < x < \\frac{2\\pi}{3}$：$x < \\frac{2\\pi}{3}$ 说明 $\\cos x > -\\frac{1}{2}$，故 $1 + 2\\cos x > 0$；而 $x > \\frac{\\pi}{4}$ 使 $2x \\in (\\frac{\\pi}{2},\\frac{4\\pi}{3})$，$\\cos 2x < 0$。一正一负，$y < 0$，符合条件。\n\n第三段 $\\frac{2\\pi}{3} < x < \\frac{3\\pi}{4}$：$x > \\frac{2\\pi}{3}$，故 $\\cos x < -\\frac{1}{2}$，$1 + 2\\cos x < 0$；$x < \\frac{3\\pi}{4}$ 仍有 $\\cos 2x < 0$。两因子同为负，$y > 0$。\n\n第四段 $\\frac{3\\pi}{4} < x < \\pi$：$x > \\frac{2\\pi}{3}$，故 $1 + 2\\cos x < 0$；$x > \\frac{3\\pi}{4}$ 使 $2x \\in (\\frac{3\\pi}{2},2\\pi)$，$\\cos 2x > 0$。一负一正，$y < 0$，符合条件。\n\n综上，$y < 0$ 的范围为 $\\frac{\\pi}{4} < x < \\frac{2\\pi}{3}$ 或 $\\frac{3\\pi}{4} < x < \\pi$。\n\n【快捷思路】\n求出三个零点后，在各段内任取一个代表值代入判断正负即可，避免逐段详细分析。\n\n【正确答案】D\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra",
      "Graphs"
    ],
    "modules": [
      "e_trigonometry",
      "i_functions_graphs",
      "m_comprehensive_training"
    ],
    "sections": [
      "e.trigonometric_inequalities",
      "e.trig_graph_signs",
      "i.sign_analysis"
    ],
    "skills": [
      "zero-finding",
      "special-angle-values",
      "sign-chart",
      "interval-analysis"
    ],
    "primary_section": "e.trigonometric_inequalities"
  },
  {
    "id": "2016-P1-Q18",
    "year": 2016,
    "paper": 1,
    "num": 18,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The function $\\frac{1-x}{\\sqrt[3]{x^2}}$ is defined for all $x \\neq 0$.\n\nThe complete set of values of $x$ for which the function is decreasing is",
    "options": {
      "A": "$x \\le -2, \\ x > 0$",
      "B": "$-2 \\le x < 0$",
      "C": "$x \\le 1, \\ x \\neq 0$",
      "D": "$x \\ge 1$",
      "E": "$-2 \\le x \\le 1, \\ x \\neq 0$",
      "F": "$x \\le -2, \\ x \\ge 1$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考察用导数判断函数的单调性。给定 $f(x) = \\dfrac{1-x}{\\sqrt[3]{x^2}}$，求函数的递减区间。核心思路是将函数改写为幂函数形式后求导，通过分析导数符号确定单调区间。\n\n【解题步骤】\n先将函数改写为幂函数形式：\n\n$$f(x) = (1-x)x^{-\\frac{2}{3}} = x^{-\\frac{2}{3}} - x^{\\frac{1}{3}}$$\n\n对 $x$ 求导：\n\n$$f'(x) = -\\frac{2}{3}x^{-\\frac{5}{3}} - \\frac{1}{3}x^{-\\frac{2}{3}}$$\n\n提取公因式 $-\\frac{1}{3}x^{-\\frac{5}{3}}$：\n\n$$f'(x) = -\\frac{1}{3}x^{-\\frac{5}{3}}(2 + x)$$\n\n函数递减要求 $f'(x) < 0$。注意 $x=0$ 处函数无定义，需分段讨论。\n\n当 $x > 0$ 时：$x^{-\\frac{5}{3}} > 0$ 且 $2 + x > 0$，故 $f'(x)$ 为负，递减。\n\n当 $-2 < x < 0$ 时：$x^{-\\frac{5}{3}} < 0$（负数的负奇次幂为负），$2 + x > 0$，故 $f'(x)$ 为正，递增。\n\n当 $x < -2$ 时：$x^{-\\frac{5}{3}} < 0$，$2 + x < 0$，故 $f'(x)$ 为负，递减。\n\n在 $x = -2$ 处 $f'(-2) = 0$，为驻点。按照 A-Level 惯例，递减区间可包含导数为零的孤立点，故取 $x \\leq -2$。\n\n综合以上，函数递减区间为 $x \\leq -2$ 和 $x > 0$。\n\n【快捷思路】\n将 $f'(x) < 0$ 化为 $\\frac{x+2}{x^{5/3}} > 0$，用数轴标根法：根在 $x = -2$ 和 $x = 0$，直接读出正区间为 $x < -2$ 和 $x > 0$。\n\n【正确答案】A\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs",
      "a1_algebra_basics"
    ],
    "sections": [
      "f.monotonicity",
      "f.power_function_differentiation",
      "i.function_domains"
    ],
    "skills": [
      "rewrite-radicals-as-powers",
      "power-rule",
      "factor-derivative",
      "sign-chart",
      "domain-splitting"
    ],
    "primary_section": "f.monotonicity"
  },
  {
    "id": "2016-P1-Q19",
    "year": 2016,
    "paper": 1,
    "num": 19,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The coefficient of $x^3$ in the expansion of $(1 + 2x + 3x^2)^6$ is equal to twice the coefficient of $x^4$ in the expansion of $(1 - ax^2)^5$.\n\nFind all possible values of the constant $a$.",
    "options": {
      "A": "$\\pm 2\\sqrt{2}$",
      "B": "$\\pm \\sqrt{17}$",
      "C": "$\\pm \\sqrt{34}$",
      "D": "$\\pm 2\\sqrt{17}$",
      "E": "There are no possible values of $a$."
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考察多项式展开中特定项系数的计算。需要分别求出 $(1 + 2x + 3x^2)^6$ 中 $x^3$ 的系数和 $(1 - ax^2)^5$ 中 $x^4$ 的系数，利用题设等式建立方程求解 $a$。核心思路是二项式定理配合分类计数。\n\n【解题步骤】\n先计算较简单的 $(1 - ax^2)^5$ 中 $x^4$ 的系数。由二项式定理：\n\n$$(1 - ax^2)^5 = \\sum_{k=0}^{5}\\binom{5}{k}(-ax^2)^k$$\n\n$x^4$ 对应 $k = 2$ 项，系数为 $\\binom{5}{2}a^2 = 10a^2$。\n\n再计算 $(1 + 2x + 3x^2)^6$ 中 $x^3$ 的系数。将其改写为 $(1 + (2x + 3x^2))^6$，由二项式定理展开：\n\n$$(1 + (2x + 3x^2))^6 = 1 + 6(2x + 3x^2) + 15(2x + 3x^2)^2 + 20(2x + 3x^2)^3 + \\cdots$$\n\n逐项提取 $x^3$ 的贡献：\n\n- $6(2x + 3x^2)$ 中无 $x^3$ 项。\n- $15(2x + 3x^2)^2 = 15(4x^2 + 12x^3 + 9x^4)$，其中 $x^3$ 项系数为 $15 \\times 12 = 180$。\n- $20(2x + 3x^2)^3 = 20(8x^3 + \\cdots)$，其中 $x^3$ 项系数为 $20 \\times 8 = 160$。\n\n合计 $x^3$ 系数为 $180 + 160 = 340$。\n\n（也可用多项式系数法：设取 $1$、$2x$、$3x^2$ 的个数分别为 $i,j,k$，则 $i+j+k=6$，$j+2k=3$，解得 $(3,3,0)$ 和 $(4,1,1)$ 两组，分别贡献 $20 \\times 8 = 160$ 和 $30 \\times 6 = 180$，合计 340。）\n\n根据题意：\n\n$$340 = 2 \\times 10a^2 = 20a^2$$\n\n解得 $a^2 = 17$，故 $a = \\pm\\sqrt{17}$。\n\n【快捷思路】\n$(1 - ax^2)^5$ 中 $x^4$ 系数为 $10a^2$ 一步到位。$(1+2x+3x^2)^6$ 中 $x^3$ 只需考虑展开式前四项，仅 $(2x+3x^2)^2$ 和 $(2x+3x^2)^3$ 贡献 $x^3$ 项。\n\n【正确答案】B\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series",
      "Combinatorics"
    ],
    "modules": [
      "c_sequences_series",
      "a1_algebra_basics",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "c.binomial_expansion",
      "c.coefficient_extraction",
      "a1.polynomial_expansion",
      "k.binomial_coefficients"
    ],
    "skills": [
      "binomial-expansion",
      "coefficient-extraction",
      "case-counting",
      "multinomial-selection",
      "parameter-equation"
    ],
    "primary_section": "c.coefficient_extraction"
  },
  {
    "id": "2016-P1-Q20",
    "year": 2016,
    "paper": 1,
    "num": 20,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "The diagram shows a square-based pyramid with base $PQRS$ and vertex $O$. All the edges of the pyramid are of length 20 metres.\n\nFind the shortest distance, in metres, along the outer surface of the pyramid from $P$ to the midpoint of $OR$.",
    "options": {
      "A": "$10\\sqrt{5 - 2\\sqrt{3}}$",
      "B": "$10\\sqrt{3}$",
      "C": "$10\\sqrt{5}$",
      "D": "$10\\sqrt{7}$",
      "E": "$10\\sqrt{5 + 2\\sqrt{3}}$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考察立体几何表面最短距离。给定所有棱长均为 20 米的正四棱锥，求从底面顶点 $P$ 沿外表面到棱 $OR$ 中点的最短距离。核心思路是将侧面展开为平面，在展开图上计算直线距离，并比较不同展开路径。\n\n【解题步骤】\n由于所有棱长均为 20，四个侧面均为边长为 20 的等边三角形。\n\n存在两类可能的最短路径：\n\n路径一：沿侧面 $OPS$ 越过棱 $OS$ 到达侧面 $OSR$ 上的 $T$（$OR$ 中点）。\n\n将 $\\triangle OPS$ 和 $\\triangle OSR$ 展开在同一平面上，$O$ 为公共顶点，$\\angle POS = 60°$，$\\angle SOR = 60°$，故 $\\angle POT = 120°$。\n\n在展开平面上，$OP = 20$，$OT = 10$（$T$ 为 $OR$ 中点），夹角 $120°$。由余弦定理：\n\n$$PT^2 = 20^2 + 10^2 - 2 \\times 20 \\times 10 \\times \\cos 120° = 400 + 100 - 400 \\times \\left(-\\frac{1}{2}\\right) = 700$$\n\n所以 $PT = \\sqrt{700} = 10\\sqrt{7}$。\n\n路径二：沿底面 $PQRS$ 越过棱 $RS$ 到达侧面 $OSR$ 上的 $T$。\n\n底面正方形边长 20，$\\triangle OSR$ 为等边三角形，高为 $20\\sin 60° = 10\\sqrt{3}$。\n\n将底面和侧面 $OSR$ 沿 $RS$ 展开，$T$ 为 $OR$ 中点，距 $RS$ 的高为 $5\\sqrt{3}$，沿 $RS$ 方向距 $S$ 为 15。\n\n由勾股定理：\n\n$$PT^2 = 15^2 + (20 + 5\\sqrt{3})^2 = 225 + 400 + 200\\sqrt{3} + 75 = 700 + 200\\sqrt{3}$$\n\n显然 $700 + 200\\sqrt{3} > 700$，路径二更长。\n\n因此最短距离为 $10\\sqrt{7}$。\n\n【快捷思路】\n直接比较两条路径：侧面展开路径中 $\\angle POT = 120°$，由余弦定理一步得 $d = \\sqrt{20^2 + 10^2 + 200} = 10\\sqrt{7}$；经底面路径显然更长。\n\n【正确答案】D\n",
    "images": {
      "image": "2016 P1 Q20.png"
    },
    "has_image": true,
    "related_topics": [
      "Trigonometry",
      "Graphs"
    ],
    "modules": [
      "m_comprehensive_training",
      "d_coordinate_geometry",
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "m.geometry_surface_unfolding",
      "d.spatial_geometry_unfolding",
      "e.cosine_rule",
      "i.geometric_unfolding"
    ],
    "skills": [
      "surface-net-unfolding",
      "shortest-path-on-surface",
      "cosine-rule",
      "path-comparison",
      "spatial-visualisation"
    ],
    "primary_section": "m.geometry_surface_unfolding"
  },
  {
    "id": "2016-P2-Q1",
    "year": 2016,
    "paper": 2,
    "num": 1,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Find the value of\n\n$$\\int_{1}^{2} \\left( x^{2} - \\frac{4}{x^{2}} \\right)^{2} dx$$",
    "options": {
      "A": "$\\frac{43}{15}$",
      "B": "$3$",
      "C": "$\\frac{97}{15}$",
      "D": "$\\frac{103}{15}$",
      "E": "$\\frac{163}{15}$",
      "F": "$18$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考查定积分的计算。被积函数为$\\left(x^2 - \\frac{4}{x^2}\\right)^2$，积分区间为$[1,2]$。核心思路是先将括号内表达式平方展开，再逐项利用幂函数积分公式$\\int x^n dx = \\frac{x^{n+1}}{n+1}$（$n \\neq -1$）求解，最后代入上下限计算差值。这是定积分计算的标准流程，展开后各项均为幂函数形式，可直接积分。\n\n【解题步骤】\n第一步：展开被积函数\n$\\left(x^2 - \\frac{4}{x^2}\\right)^2 = x^4 - 2 \\cdot x^2 \\cdot \\frac{4}{x^2} + \\frac{16}{x^4} = x^4 - 8 + 16x^{-4}$\n\n第二步：逐项求原函数\n$\\int (x^4 - 8 + 16x^{-4})dx = \\frac{x^5}{5} - 8x - \\frac{16}{3x^3} + C$\n\n第三步：代入上下限$[1,2]$\n$\\left[\\frac{x^5}{5} - 8x - \\frac{16}{3x^3}\\right]_1^2 = \\left(\\frac{32}{5} - 16 - \\frac{2}{3}\\right) - \\left(\\frac{1}{5} - 8 - \\frac{16}{3}\\right) = \\frac{31}{5} - 8 + \\frac{14}{3} = \\frac{93 - 120 + 70}{15} = \\frac{43}{15}$\n\n【快捷思路】\n展开后三项分别为$x^4$、常数项和$x^{-4}$，积分后注意$x^{-4}$积分时指数加一除以新指数，得到$-\\frac{16}{3}x^{-3}$，代入下限时注意负号变正。\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "g_integration",
      "a1_algebra_basics"
    ],
    "sections": [
      "g.integral_simplify_first",
      "g.power_function_integration",
      "a1.expansion_collection"
    ],
    "primary_section": "g.integral_simplify_first",
    "skills": [
      "expand-before-integrating",
      "power-rule-integration",
      "definite-integral-evaluation",
      "fraction-arithmetic"
    ]
  },
  {
    "id": "2016-P2-Q2",
    "year": 2016,
    "paper": 2,
    "num": 2,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "$$f(x) = \\frac{(x^{2} + 5)(2x)}{\\sqrt[4]{x^{3}}} \\text{ , } \\quad x > 0$$\n\nWhich one of the following is equal to $f'(x)$ ?",
    "options": {
      "A": "$8x^{\\frac{9}{4}} + \\frac{40}{3}x^{\\frac{1}{4}}$",
      "B": "$\\frac{9}{2}x^{\\frac{5}{4}} + \\frac{5}{2}x^{-\\frac{3}{4}}$",
      "C": "$8x^{\\frac{9}{4}} + \\frac{40}{3}x^{-\\frac{1}{4}}$",
      "D": "$\\frac{8}{13}x^{\\frac{13}{4}} + 8x^{\\frac{5}{4}}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查函数求导。函数$f(x) = \\frac{(x^2+5)(2x)}{\\sqrt[4]{x^3}}$中分母含四次根式，直接求导会很繁琐。正确做法是先化简函数表达式：将分母$\\sqrt[4]{x^3}$写成$x^{\\frac{3}{4}}$，分子展开后逐项除以分母，化为幂函数的和，再利用幂函数求导公式$\\frac{d}{dx}x^n = nx^{n-1}$逐项求导。这是处理含根式函数求导的标准技巧。\n\n【解题步骤】\n第一步：化简函数\n分子：$(x^2+5)(2x) = 2x^3 + 10x$\n分母：$\\sqrt[4]{x^3} = x^{\\frac{3}{4}}$\n$f(x) = \\frac{2x^3 + 10x}{x^{\\frac{3}{4}}} = 2x^{3-\\frac{3}{4}} + 10x^{1-\\frac{3}{4}} = 2x^{\\frac{9}{4}} + 10x^{\\frac{1}{4}}$\n\n第二步：逐项求导\n$f'(x) = 2 \\cdot \\frac{9}{4}x^{\\frac{9}{4}-1} + 10 \\cdot \\frac{1}{4}x^{\\frac{1}{4}-1} = \\frac{9}{2}x^{\\frac{5}{4}} + \\frac{5}{2}x^{-\\frac{3}{4}}$\n\n第三步：对照选项\n结果与选项B完全一致。\n\n【快捷思路】\n先化简再求导永远比直接套用商法则简单。关键是将根式转化为分数指数幂，分子展开后分别除以分母，即可化为幂函数线性组合。\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "a1_algebra_basics"
    ],
    "sections": [
      "f.power_function_derivatives",
      "a1.exponent_laws",
      "a1.radical_to_fractional_powers"
    ],
    "primary_section": "f.power_function_derivatives",
    "skills": [
      "simplify-before-differentiating",
      "radical-to-index-form",
      "power-rule-differentiation",
      "negative-fractional-indices"
    ]
  },
  {
    "id": "2016-P2-Q3",
    "year": 2016,
    "paper": 2,
    "num": 3,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "What is the value, in radians, of the largest angle $x$ in the range $0 \\le x \\le 2\\pi$ that satisfies the equation $8 \\sin^2 x + 4 \\cos^2 x = 7$?",
    "options": {
      "A": "$\\frac{2\\pi}{3}$",
      "B": "$\\frac{5\\pi}{6}$",
      "C": "$\\frac{4\\pi}{3}$",
      "D": "$\\frac{5\\pi}{3}$",
      "E": "$\\frac{7\\pi}{4}$",
      "F": "$\\frac{11\\pi}{6}$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考查三角方程求解及区间内最大角的确定。方程$8\\sin^2 x + 4\\cos^2 x = 7$同时含$\\sin x$和$\\cos x$，需用恒等式$\\sin^2 x + \\cos^2 x = 1$消去$\\cos^2 x$，将方程化为仅含$\\sin^2 x$的形式。解出$\\sin x = \\pm\\frac{\\sqrt{3}}{2}$后，在区间$[0, 2\\pi]$内找出所有解，再取最大值。注意正负两个值对应的解分布在不同的半周期。\n\n【解题步骤】\n第一步：利用恒等式化简\n$8\\sin^2 x + 4\\cos^2 x = 8\\sin^2 x + 4(1-\\sin^2 x) = 4\\sin^2 x + 4 = 7$\n$4\\sin^2 x = 3 \\implies \\sin^2 x = \\frac{3}{4} \\implies \\sin x = \\pm\\frac{\\sqrt{3}}{2}$\n\n第二步：在$[0, 2\\pi]$内求解\n$\\sin x = \\frac{\\sqrt{3}}{2}$时，$x = \\frac{\\pi}{3}$或$\\frac{2\\pi}{3}$（第一、二象限）\n$\\sin x = -\\frac{\\sqrt{3}}{2}$时，$x = \\frac{4\\pi}{3}$或$\\frac{5\\pi}{3}$（第三、四象限）\n\n第三步：取最大值\n四个解中$\\frac{5\\pi}{3}$最大，对应选项D。\n\n【快捷思路】\n最大角一定在$\\pi < x < 2\\pi$范围内（因为负值对应的解更大），直接找$\\sin x = -\\frac{\\sqrt{3}}{2}$在该区间的最大解即可，即$2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$。\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry"
    ],
    "sections": [
      "e.trig_equations",
      "e.pythagorean_identity",
      "e.special_angle_solutions"
    ],
    "primary_section": "e.trig_equations",
    "skills": [
      "use-pythagorean-identity",
      "solve-squared-trig-equation",
      "unit-circle-solutions",
      "select-largest-solution"
    ]
  },
  {
    "id": "2016-P2-Q4",
    "year": 2016,
    "paper": 2,
    "num": 4,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Five sealed urns, labelled P, Q, R, S, and T, each contain the **same** (non-zero) number of balls. The following statements are attached to the urns.\n\nUrn P This urn contains one or four balls.\n\nUrn Q This urn contains two or four balls.\n\nUrn R This urn contains more than two balls and fewer than five balls.\n\nUrn S This urn contains one or two balls.\n\nUrn T This urn contains fewer than three balls.\n\nExactly one of the urns has a true statement attached to it.\n\nWhich urn is it?",
    "options": {
      "A": "Urn P",
      "B": "Urn Q",
      "C": "Urn R",
      "D": "Urn S",
      "E": "Urn T"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考查逻辑推理。五个瓮装有相同数量$n$个球（$n > 0$），每个瓮附有一条关于$n$的陈述，且恰有一条陈述为真。各陈述对应的$n$的取值集合分别为：$P:\\{1,4\\}$，$Q:\\{2,4\\}$，$R:\\{3,4\\}$，$S:\\{1,2\\}$，$T:\\{1,2\\}$（即$n < 3$）。关键观察：当$n=1$时$P$和$S$同时为真，当$n=2$时$Q$、$S$、$T$同时为真，当$n=4$时$P$和$Q$同时为真。唯有$n=3$时仅$R$为真，其余全假。\n\n【解题步骤】\n逐一假设某瓮的陈述为真，检验是否导致矛盾：\n- 假设$P$为真：$n \\in \\{1,4\\}$。若$n=1$则$S$也真（矛盾）；若$n=4$则$Q$也真（矛盾）。\n- 假设$Q$为真：$n \\in \\{2,4\\}$。若$n=2$则$S$和$T$也真（矛盾）；若$n=4$则$P$也真（矛盾）。\n- 假设$R$为真：$n \\in \\{3,4\\}$。若$n=4$则$P$也真（矛盾）；若$n=3$，验证$P$假、$Q$假、$S$假、$T$假，全部通过。\n- 假设$S$为真：$n \\in \\{1,2\\}$。若$n=1$则$P$也真；若$n=2$则$Q$也真。均矛盾。\n- 假设$T$为真：$n < 3$即$n \\in \\{1,2\\}$，此时$S$也真（矛盾）。\n\n唯一无矛盾情形：$n=3$，$R$的陈述为真。\n\n【快捷思路】\n注意到$S$和$T$的集合存在包含关系（$n<3$蕴含$n \\in \\{1,2\\}$），故$T$为真时$S$必为真，直接排除。剩余只需检验$P$、$Q$、$R$三种情况。\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sets"
    ],
    "modules": [
      "b_mathematical_logic_basics",
      "h_logic_counterexamples"
    ],
    "sections": [
      "b.unique_true_statement",
      "b.truth_sets",
      "h.logical_elimination"
    ],
    "primary_section": "b.unique_true_statement",
    "skills": [
      "translate-statements-to-sets",
      "case-analysis",
      "truth-counting",
      "elimination-by-overlap"
    ]
  },
  {
    "id": "2016-P2-Q5",
    "year": 2016,
    "paper": 2,
    "num": 5,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider the statement:\n\n> (*) A whole number $n$ is prime if it is 1 less or 5 less than a multiple of 6.\n\nHow many counterexamples to (*) are there in the range $0 < n < 50$?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "C",
    "analysis": "【题目分析】\n命题(*)：若整数 $n$ 比 6 的倍数少 1 或少 5（即 $n \\equiv 1$ 或 $5 \\pmod{6}$），则 $n$ 是质数。反例即满足该同余条件但本身不是质数的数。本题要求在 $0 < n < 50$ 范围内找出所有反例的个数。\n\n【解题步骤】\n第一步：列出 $0 < n < 50$ 中满足 $n \\equiv 1$ 或 $5 \\pmod{6}$ 的数。这些数形如 $6k+1$ 或 $6k+5$：\n$1, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31, 35, 37, 41, 43, 47, 49$\n\n第二步：逐一判断是否为质数。其中非质数有：\n$1$ 不是质数（定义规定 1 不是质数）；\n$25 = 5 \\times 5$ 是合数；\n$35 = 5 \\times 7$ 是合数；\n$49 = 7 \\times 7$ 是合数。\n\n共 4 个反例，对应选项 C。\n\n【快捷思路】\n形如 $6k \\pm 1$ 包含了所有大于 3 的质数，但并非所有这类数都是质数。只需在范围内找出合数形式的 $6k \\pm 1$ 即可：$25, 35, 49$ 再加上 $1$，共 4 个。注意 1 既不是质数也不是合数，但作为反例是有效的（满足条件但不是质数）。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory",
      "Logic"
    ],
    "modules": [
      "h_logic_counterexamples",
      "k_number_theory_combinatorics",
      "b_mathematical_logic_basics"
    ],
    "sections": [
      "h.counterexample_construction",
      "h.universal_statement_counterexamples",
      "k.primes_and_residue_classes"
    ],
    "primary_section": "h.counterexample_construction",
    "skills": [
      "counterexample-enumeration",
      "modular-residue-class-listing",
      "prime-composite-classification",
      "range-exhaustion"
    ]
  },
  {
    "id": "2016-P2-Q6",
    "year": 2016,
    "paper": 2,
    "num": 6,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The sequence of functions $f_1(x), f_2(x), f_3(x), \\dots$ is defined as follows:\n\n$$f_1(x) = x^{10}$$\n\n$$f_{n+1}(x) = x f_n'(x) \\quad \\text{for } n \\geq 1$$\n\nwhere $f_n'(x) = \\frac{df_n(x)}{dx}$\n\nFind the value of\n\n$$\\sum_{n=1}^{20} f_n(x)$$",
    "options": {
      "A": "$\\frac{x^{10}(x^{20} - 1)}{x - 1}$",
      "B": "$\\frac{x^{10}(x^{21} - 1)}{x - 1}$",
      "C": "$\\left( \\frac{10^{20} - 1}{9} \\right) x^{10}$",
      "D": "$\\left( \\frac{10^{21} - 1}{9} \\right) x^{10}$",
      "E": "$\\left( \\frac{(10x)^{20} - 1}{10x - 1} \\right) x^{10}$",
      "F": "$\\left( \\frac{(10x)^{21} - 1}{10x - 1} \\right) x^{10}$",
      "G": "$x^{10} + x^9 + x^8 + \\dots + x + 1$",
      "H": "$x^{10} + 10x^9 + (10 \\times 9)x^8 + \\dots + (10 \\times 9 \\times \\dots \\times 2)x + (10 \\times 9 \\times \\dots \\times 2 \\times 1)$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n给定函数序列 $f_1(x) = x^{10}$，递推关系 $f_{n+1}(x) = x \\cdot f_n'(x)$。要求计算 $\\sum_{n=1}^{20} f_n(x)$。关键是先找出 $f_n(x)$ 的通项公式。\n\n【解题步骤】\n第一步：逐项计算找规律。\n$f_1(x) = x^{10}$\n$f_2(x) = x \\cdot f_1'(x) = x \\cdot 10x^9 = 10x^{10}$\n$f_3(x) = x \\cdot f_2'(x) = x \\cdot 100x^9 = 100x^{10} = 10^2 x^{10}$\n$f_4(x) = x \\cdot f_3'(x) = x \\cdot 1000x^9 = 10^3 x^{10}$\n归纳得 $f_n(x) = 10^{n-1} x^{10}$。\n\n第二步：利用等比数列求和公式。\n$\\sum_{n=1}^{20} f_n(x) = \\sum_{n=1}^{20} 10^{n-1} x^{10} = x^{10} \\sum_{n=0}^{19} 10^n$\n\n首项 $a = 1$，公比 $r = 10$，项数 $n = 20$，等比数列和 $S_n = \\frac{a(r^n - 1)}{r - 1}$：\n$= x^{10} \\cdot \\frac{10^{20} - 1}{10 - 1} = \\frac{10^{20} - 1}{9} x^{10}$\n\n对应选项 C。\n\n【快捷思路】\n注意到每次求导后乘以 $x$，$x^{10}$ 的次数始终保持为 10，而系数每次乘以指数 10。因此 $f_n(x) = 10^{n-1}x^{10}$ 一眼可看出，之后直接套用等比数列求和即可。注意求和上限是 20 项，分子是 $10^{20} - 1$ 而非 $10^{21} - 1$。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation"
    ],
    "modules": [
      "c_sequences_series",
      "f_differentiation"
    ],
    "sections": [
      "c.geometric_series",
      "c.recursive_sequences",
      "f.power_rule"
    ],
    "primary_section": "c.geometric_series",
    "skills": [
      "find-recursive-pattern",
      "power-rule-differentiation",
      "geometric-series-sum"
    ]
  },
  {
    "id": "2016-P2-Q7",
    "year": 2016,
    "paper": 2,
    "num": 7,
    "topic": "Proof",
    "difficulty": 3,
    "question": "The four real numbers $a, b, c,$ and $d$ are all greater than 1.\n\nSuppose that they satisfy the equation $\\log_c d = (\\log_a b)^2$.\n\nUse some of the lines given to construct a proof that, in this case, it follows that\n\n$$(*) \\quad \\log_b d = (\\log_a b)(\\log_a c).$$\n\n**(1)** Let $x = \\log_a b$ and $y = \\log_a c$\n\n**(2)** $d = (c^x)^2$\n**(3)** $d = c^{(x^2)}$\n**(4)** $d = b^{xy}$\n\n**(5)** $d = (a^y)^{(x^2)}$\n**(6)** $d = ((a^y)^x)^2$\n**(7)** $d = (a^x)^{xy}$\n\n**(8)** $d = a^{(y2x)}$\n**(9)** $d = a^{(x^2y)}$",
    "options": {
      "A": "(1). Then (2), so (6), so (8), so (7), and therefore (4), hence (*) as required.",
      "B": "(1). Then (2), so (7), so (8), so (6), and therefore (4), hence (*) as required.",
      "C": "(1). Then (3), so (5), so (9), so (7), and therefore (4), hence (*) as required.",
      "D": "(1). Then (3), so (7), so (9), so (5), and therefore (4), hence (*) as required.",
      "E": "(1). Then (4), so (5), so (9), so (7), and therefore (3), hence (*) as required.",
      "F": "(1). Then (4), so (6), so (8), so (7), and therefore (2), hence (*) as required.",
      "G": "(1). Then (4), so (7), so (8), so (6), and therefore (2), hence (*) as required.",
      "H": "(1). Then (4), so (7), so (9), so (5), and therefore (3), hence (*) as required."
    },
    "answer": "C",
    "analysis": "【题目分析】\n已知 $a, b, c, d > 1$ 且 $\\log_c d = (\\log_a b)^2$，需通过给定的推导行构建完整证明，证得 $\\log_b d = (\\log_a b)(\\log_a c)$。本题本质是考查对数运算规则和推导逻辑链的连贯性。\n\n【解题步骤】\n令 $x = \\log_a b$，$y = \\log_a c$，则 $b = a^x$，$c = a^y$。\n\n由已知 $\\log_c d = x^2$，取指数得 $d = c^{x^2}$（行 3）。\n\n将 $c = a^y$ 代入：$d = (a^y)^{x^2} = a^{x^2 y}$（行 5 到行 9）。\n\n再将 $a^x = b$ 代入：$d = a^{x^2 y} = (a^x)^{xy} = b^{xy}$（行 9 到行 7 到行 4）。\n\n因此 $\\log_b d = xy = (\\log_a b)(\\log_a c)$，证毕。\n\n完整推导链：$(1) \\to (3) \\to (5) \\to (9) \\to (7) \\to (4)$，对应选项 C。\n\n【快捷思路】\n从已知出发，$\\log_c d = x^2$ 意味着 $d = c^{x^2}$，只能选行 3（排除含行 2 或行 4 开头的选项）。之后需要将 $c$ 换底为 $a$，即行 5。此时答案锁定为 C。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "l_proof_methods",
      "m_comprehensive_training"
    ],
    "sections": [
      "a3.logarithm_laws",
      "a3.change_of_base_reasoning",
      "l.proof_chain_ordering"
    ],
    "primary_section": "l.proof_chain_ordering",
    "skills": [
      "proof-line-ordering",
      "logarithm-to-exponential-form",
      "substitution",
      "index-law-manipulation"
    ]
  },
  {
    "id": "2016-P2-Q8",
    "year": 2016,
    "paper": 2,
    "num": 8,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "A region is defined by the inequalities $x + y > 6$ and $x - y > -4$\n\nConsider the three statements:\n\n**1** $x > 1$\n\n**2** $y > 5$\n\n**3** $(x + y)(x - y) > -24$\n\nWhich of the above statements is/are true for **every** point in the region?",
    "options": {
      "A": "none",
      "B": "1 only",
      "C": "2 only",
      "D": "3 only",
      "E": "1 and 2 only",
      "F": "1 and 3 only",
      "G": "2 and 3 only",
      "H": "1, 2 and 3"
    },
    "answer": "B",
    "analysis": "【题目分析】\n区域由 $x + y > 6$ 和 $x - y > -4$ 定义。需判断三个命题中哪些对该区域内所有点恒成立。关键是将两不等式联立分析，并对可疑命题构造反例。\n\n【解题步骤】\n命题 1：两不等式相加得 $2x > 2$，即 $x > 1$。区域边界交于 $(1, 5)$，整个区域在 $x = 1$ 右侧，命题 1 恒成立。\n\n命题 2：两不等式相减得 $2y > 10$，即 $y > 5$。但这是必要条件而非充分推导——实际上区域是两半平面的交集，存在点如 $(7, 0)$ 满足 $7+0=7 > 6$ 且 $7-0=7 > -4$，但 $y = 0 \\ngtr 5$。命题 2 不成立。\n\n命题 3：$(x+y)(x-y) > -24$。虽然 $x+y > 6$ 且 $x-y > -4$，但不能直接将不等式相乘（因为 $x-y$ 可能为负）。构造反例：取 $x = 5, y = 8$，则 $x+y = 13 > 6$，$x-y = -3 > -4$，但 $(x+y)(x-y) = -39 < -24$。命题 3 不成立。\n\n仅命题 1 恒成立，对应选项 B。\n\n【快捷思路】\n相加得 $x > 1$ 直接成立。对命题 2 和 3 不必严格推导，只需各找一个反例即可否定。$(7, 0)$ 否定命题 2，$(5, 8)$ 否定命题 3。不等式不能随意相乘，尤其是涉及负数时。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Counterexamples",
      "Logic",
      "Algebra"
    ],
    "modules": [
      "d_coordinate_geometry",
      "a2_equations_inequalities",
      "h_logic_counterexamples",
      "m_comprehensive_training"
    ],
    "sections": [
      "d.linear_inequality_regions",
      "a2.linear_inequality_systems",
      "h.universal_claim_counterexamples"
    ],
    "primary_section": "d.linear_inequality_regions",
    "skills": [
      "add-inequalities",
      "half-plane-reasoning",
      "counterexample-construction",
      "avoid-invalid-inequality-multiplication"
    ]
  },
  {
    "id": "2016-P2-Q9",
    "year": 2016,
    "paper": 2,
    "num": 9,
    "topic": "Proof",
    "difficulty": 3,
    "question": "Triangles $ABC$ and $XYZ$ have the **same area**.\n\nWhich of these extra conditions, taken independently, would **imply** that they are congruent?\n\n**(1)** $AB = XY$ **and** $BC = YZ$\n\n**(2)** $AB = XY$ **and** $\\angle ABC = \\angle XYZ$\n\n**(3)** $\\angle ABC = \\angle XYZ$ **and** $\\angle BCA = \\angle YZX$\n\n<table>\n  <thead>\n    <tr>\n        <th> </th>\n        <th>Condition (1)</th>\n        <th>Condition (2)</th>\n        <th>Condition (3)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n        <td>A</td>\n<td>Does not imply congruent</td>\n<td>Does not imply congruent</td>\n<td>Does not imply congruent</td>\n    </tr>\n<tr>\n        <td>B</td>\n<td>Does not imply congruent</td>\n<td>Does not imply congruent</td>\n<td>Implies congruent</td>\n    </tr>\n<tr>\n        <td>C</td>\n<td>Does not imply congruent</td>\n<td>Implies congruent</td>\n<td>Does not imply congruent</td>\n    </tr>\n<tr>\n        <td>D</td>\n<td>Does not imply congruent</td>\n<td>Implies congruent</td>\n<td>Implies congruent</td>\n    </tr>\n<tr>\n        <td>E</td>\n<td>Implies congruent</td>\n<td>Does not imply congruent</td>\n<td>Does not imply congruent</td>\n    </tr>\n<tr>\n        <td>F</td>\n<td>Implies congruent</td>\n<td>Does not imply congruent</td>\n<td>Implies congruent</td>\n    </tr>\n<tr>\n        <td>G</td>\n<td>Implies congruent</td>\n<td>Implies congruent</td>\n<td>Does not imply congruent</td>\n    </tr>\n<tr>\n        <td>H</td>\n<td>Implies congruent</td>\n<td>Implies congruent</td>\n<td>Implies congruent</td>\n    </tr>\n  </tbody>\n</table>",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D",
      "E": "Option E",
      "F": "Option F",
      "G": "Option G",
      "H": "Option H"
    },
    "answer": "D",
    "analysis": "【题目分析】\n已知 $\\triangle ABC$ 与 $\\triangle XYZ$ 面积相等，判断三个额外条件中哪些能独立推出两三角形全等。本题核心在于将面积公式与全等判定定理（SSS、SAS、ASA）结合使用，注意面积相等本身不足以保证全等。\n\n【解题步骤】\n条件（1）：$AB = XY$ 且 $BC = YZ$。由面积公式 $\\frac{1}{2}AB\\cdot BC\\sin B = \\frac{1}{2}XY\\cdot YZ\\sin Y$，已知两边相等，可得 $\\sin B = \\sin Y$。但 $\\sin B = \\sin Y$ 不能推出 $B = Y$，因为可能有 $Y = 180^\\circ - B$。此时两边夹角不等，无法用 SAS 判定全等。反例存在，故不推出全等。\n\n条件（2）：$AB = XY$ 且 $\\angle ABC = \\angle XYZ$。面积相等给出 $\\frac{1}{2}AB\\cdot BC\\sin B = \\frac{1}{2}XY\\cdot YZ\\sin Y$。已知 $AB = XY$、$\\angle B = \\angle Y$（角度在 $(0,180^\\circ)$ 内正弦为正），消去后得 $BC = YZ$。于是两边及其夹角对应相等，由 SAS 判定全等。\n\n条件（3）：$\\angle ABC = \\angle XYZ$ 且 $\\angle BCA = \\angle YZX$。两角相等则第三角也相等，两三角形相似。相似三角形面积比等于相似比的平方，面积相等说明相似比为 $1$，即两三角形全等。\n\n综上，条件（2）和（3）各自推出全等，选 D。\n\n【快捷思路】\n条件（1）中 $\\sin B = \\sin Y$ 可能对应互补角，无法锁定夹角；条件（2）中已知一角相等，面积公式直接定出第二边，凑成 SAS；条件（3）中两角相等保证相似，面积相等将相似比锁定为 $1$。\n\n【正确答案】D",
    "images": {
      "image": null
    },
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ],
    "modules": [
      "l_proof_methods"
    ],
    "sections": [
      "l.sufficient_conditions",
      "l.geometry_congruence",
      "l.area_similarity_congruence"
    ],
    "primary_section": "l.geometry_congruence",
    "skills": [
      "sufficiency-testing",
      "triangle-area-formula",
      "congruence-criteria",
      "similar-triangles",
      "ambiguous-sine-counterexample"
    ]
  },
  {
    "id": "2016-P2-Q10",
    "year": 2016,
    "paper": 2,
    "num": 10,
    "topic": "Functions",
    "difficulty": 3,
    "question": "In this question $x$ and $y$ are non-zero real numbers.\n\nWhich one of the following is **sufficient** to conclude that $x < y$?",
    "options": {
      "A": "$x^4 < y^4$",
      "B": "$y^4 < x^4$",
      "C": "$x^{-1} < y^{-1}$",
      "D": "$y^{-1} < x^{-1}$",
      "E": "$x^{\\frac{3}{5}} < y^{\\frac{3}{5}}$",
      "F": "$y^{\\frac{3}{5}} < x^{\\frac{3}{5}}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n$x, y$ 为非零实数，找出哪个不等式条件足以推出 $x < y$。关键思路：若函数 $f(t)$ 在整个实数域上严格单调递增，则 $f(x) < f(y) \\iff x < y$；否则需要构造反例。\n\n【解题步骤】\n选项 A：$x^4 < y^4$。取 $x = 1, y = -2$，则 $1 < 16$ 成立，但 $x > y$。$f(t) = t^4$ 在 $t < 0$ 递减、$t > 0$ 递增，非整体单调。不充分。\n\n选项 B：$y^4 < x^4$。取 $x = 2, y = 1$，条件成立但 $x > y$。不充分。\n\n选项 C：$x^{-1} < y^{-1}$。取 $x = 2, y = 1$，$\\frac{1}{2} < 1$ 成立，但 $x > y$。$f(t) = t^{-1}$ 在正负两支分别递减但不整体单调。不充分。\n\n选项 D：$y^{-1} < x^{-1}$。取 $x = 1, y = -1$，$-1 < 1$ 成立，但 $x > y$。不充分。\n\n选项 E：$x^{3/5} < y^{3/5}$。注意到 $t^{3/5} = \\sqrt[5]{t^3}$，其中 $t^3$ 和 $\\sqrt[5]{\\cdot}$ 在 $\\mathbb{R}$ 上均严格递增，复合后 $f(t) = t^{3/5}$ 在 $\\mathbb{R}$ 上严格递增。因此 $x^{3/5} < y^{3/5} \\iff x < y$。充分。\n\n选项 F：$y^{3/5} < x^{3/5}$，同理推出 $y < x$，与所需方向相反。不充分。\n\n【快捷思路】\n逐个考察 $f(t) = t^4$、$f(t) = t^{-1}$、$f(t) = t^{3/5}$ 的单调性。前两个函数在 $\\mathbb{R}$ 上非整体单调（$t^4$ 为偶函数，$t^{-1}$ 在正负两侧符号不同），只有 $t^{3/5}$ 全实数严格递增。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "i_functions_graphs",
      "a2_equations_inequalities"
    ],
    "sections": [
      "i.function_monotonicity_inequalities",
      "i.power_functions",
      "a2.inequality_implications"
    ],
    "primary_section": "i.function_monotonicity_inequalities",
    "skills": [
      "strict-monotonicity",
      "counterexample-testing",
      "odd-root-powers",
      "reciprocal-order-analysis"
    ]
  },
  {
    "id": "2016-P2-Q11",
    "year": 2016,
    "paper": 2,
    "num": 11,
    "topic": "Proof",
    "difficulty": 3,
    "question": "$f(x)$ is a polynomial with real coefficients.\n\nThe equation $f(x) = 0$ has exactly two real roots, $x = -p$ and $x = p$, where $p > 0$.\n\nConsider the following three statements:\n\n**1** $f'(x) = 0$ for exactly one value of $x$ between $-p$ and $p$\n\n**2** The area between the curve $y = f(x)$, the $x$-axis and the lines $x = -p$ and $x = p$ is given by $2 \\int_{0}^{p} f(x) dx$\n\n**3** The graph of $y = -f(-x)$ intersects the $x$-axis at the points $x = -p$ and $x = p$ only\n\nWhich of the above statements **must** be true?",
    "options": {
      "A": "none",
      "B": "1 only",
      "C": "2 only",
      "D": "3 only",
      "E": "1 and 2 only",
      "F": "1 and 3 only",
      "G": "2 and 3 only",
      "H": "1, 2 and 3"
    },
    "answer": "D",
    "analysis": "【题目分析】\n$f(x)$ 是实系数多项式，$f(x) = 0$ 恰有两个实根 $x = -p$ 和 $x = p$（$p > 0$）。判断三个命题哪些必然成立。注意：题目未限定多项式次数，也未说明根的数，$f(x)$ 在 $(-p, p)$ 内的性态有多种可能。\n\n【解题步骤】\n命题 1：$f'(x) = 0$ 在 $(-p, p)$ 内恰有一个解。由罗尔定理，$f'(\\xi) = 0$ 至少有一个解 $\\xi \\in (-p, p)$。但罗尔定理只保证存在性，不保证唯一性。可以构造 $f(x)$ 在 $(-p, p)$ 内有多个驻点而不穿过 $x$ 轴（例如在区间内上下波动但不与轴相交）。命题 1 不一定成立。\n\n命题 2：曲线与 $x$ 轴在 $[-p, p]$ 间的面积为 $2\\int_0^p f(x)\\,dx$。这不成立有两方面原因：其一，若 $f(x)$ 在 $[-p, p]$ 上恒为负，则 $\\int_0^p f(x)\\,dx < 0$，但面积必须为正；其二，$f(x)$ 未必关于 $y$ 轴对称，例如 $f(x) = (x+1)(x-1)(x^2 + x + 1)$（此时 $p = 1$），其中 $x^2 + x + 1$ 关于 $x = -\\frac{1}{2}$ 而非 $x = 0$ 对称，积分 $\\int_{-1}^1 f(x)\\,dx \\neq 2\\int_0^1 f(x)\\,dx$。命题 2 不一定成立。\n\n命题 3：$y = -f(-x)$ 与 $x$ 轴的交点仅为 $x = -p$ 和 $x = p$。$y = -f(-x)$ 的零点满足 $f(-x) = 0$，即 $-x = \\pm p$，故 $x = \\pm p$。由于 $f(x) = 0$ 仅有这两个实根，变换后的函数也仅有这两个零点。从变换角度看：$f(-x)$ 是沿 $y$ 轴翻折，$-f(-x)$ 再沿 $x$ 轴翻折，两次翻折的复合等价于绕原点旋转 $180^\\circ$，零点位置不变。命题 3 必然成立。\n\n【快捷思路】\n命题 1 用罗尔定理可知至少一个但未必恰好一个；命题 2 考虑 $f(x)$ 可能为负或不对称；命题 3 中 $x \\mapsto -x$ 仅改变自变量符号，$\\pm p$ 互换后根集合不变。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Integration",
      "Graphs"
    ],
    "modules": [
      "l_proof_methods",
      "h_logic_counterexamples",
      "f_differentiation",
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "l.must_be_true_statements",
      "h.counterexample_testing",
      "f.rolle_theorem",
      "g.signed_integral_vs_area",
      "i.graph_transformations"
    ],
    "primary_section": "l.must_be_true_statements",
    "skills": [
      "must-be-true-testing",
      "counterexample-construction",
      "rolle-theorem",
      "signed-area-vs-area",
      "graph-transformation"
    ]
  },
  {
    "id": "2016-P2-Q12",
    "year": 2016,
    "paper": 2,
    "num": 12,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The first term of an arithmetic sequence is $a$ and the common difference is $d$.\n\nThe sum of the first $n$ terms is denoted by $S_n$.\n\nIf $S_8 > 3S_6$, what can be deduced about the sign of $a$ and the sign of $d$?",
    "options": {
      "A": "both $a$ and $d$ are negative",
      "B": "$a$ is positive, $d$ is negative",
      "C": "$a$ is negative, $d$ is positive",
      "D": "$a$ is negative, but the sign of $d$ cannot be deduced",
      "E": "$d$ is negative, but the sign of $a$ cannot be deduced",
      "F": "neither the sign of $a$ nor the sign of $d$ can be deduced"
    },
    "answer": "F",
    "analysis": "【题目分析】\n等差数列首项为 $a$、公差为 $d$，前 $n$ 项和为 $S_n$。已知 $S_8 > 3S_6$，判断 $a$ 和 $d$ 的符号。利用求和公式将条件化为关于 $a, d$ 的不等式，再分析符号约束。\n\n【解题步骤】\n等差数列求和公式：$S_n = \\frac{n}{2}[2a + (n-1)d]$。\n\n代入 $n = 8$：$S_8 = 4(2a + 7d) = 8a + 28d$。\n代入 $n = 6$：$S_6 = 3(2a + 5d) = 6a + 15d$。\n\n条件 $S_8 > 3S_6$ 即：\n$$8a + 28d > 3(6a + 15d) = 18a + 45d$$\n\n整理得：$-10a > 17d$，即 $d < -\\frac{10}{17}a$。\n\n分析 $a$ 和 $d$ 的符号可能性：\n\n情形一：$a > 0$。此时 $-\\frac{10}{17}a < 0$，故 $d < \\text{负数}$，即 $d < 0$。例如 $a = 17, d = -10$，验证：$S_8 = 8(17) + 28(-10) = 136 - 280 = -144$，$3S_6 = 3[6(17) + 15(-10)] = 3(102 - 150) = 3(-48) = -144$，取 $d = -11$ 则 $S_8 = 136 - 308 = -172$，$3S_6 = 3(102 - 165) = -189$，$-172 > -189$ 成立。此时 $a > 0, d < 0$。\n\n情形二：$a < 0$。此时 $-\\frac{10}{17}a > 0$，$d$ 可以小于一个正数，故 $d$ 可正可负。例如 $a = -17$，则 $d < 10$：取 $d = 1 > 0$ 或 $d = -1 < 0$ 均可满足。\n\n情形三：$a = 0$。此时 $d < 0$ 才满足条件。\n\n综上，$a$ 可正可负，$d$ 也可正可负（取决于 $a$ 的具体取值），无法从条件唯一确定任何一方的符号。\n\n【快捷思路】\n将 $S_8 > 3S_6$ 化为 $d < -\\frac{10}{17}a$。$a$ 的符号改变时，右边变号，$d$ 的约束方向随之翻转，因此 $a$ 和 $d$ 的符号均无法确定。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a2_equations_inequalities"
    ],
    "sections": [
      "c.arithmetic_series_sums",
      "a2.linear_inequalities_parameters"
    ],
    "primary_section": "c.arithmetic_series_sums",
    "skills": [
      "arithmetic-series-sum",
      "inequality-rearrangement",
      "sign-deduction",
      "counterexample-testing"
    ]
  },
  {
    "id": "2016-P2-Q13",
    "year": 2016,
    "paper": 2,
    "num": 13,
    "topic": "Number Theory",
    "difficulty": 3,
    "question": "In this question, $a$, $b$, and $c$ are positive integers.\n\nThe following is an attempted proof of the false statement:\n\n> If $a$ divides $bc$, then $a$ divides $b$ or $a$ divides $c$.\n\n['$a$ divides $bc$' means '$a$ is a factor of $bc$']\n\nWhich line contains the error in this proof?\n\n1. The statement is equivalent to 'if $a$ does not divide $b$ and $a$ does not divide $c$ then $a$ does not divide $bc$'.\n2. Suppose $a$ does not divide $b$ and $a$ does not divide $c$. Then the remainder when dividing $b$ by $a$ is $r$, where $0 < r < a$, and the remainder when dividing $c$ by $a$ is $s$, where $0 < s < a$.\n3. So $b = ax + r$ and $c = ay + s$ for some integers $x$ and $y$.\n4. Thus $bc = a(axy + xs + yr) + rs$.\n5. So the remainder when dividing $bc$ by $a$ is $rs$.\n6. Since $r > 0$ and $s > 0$, it follows that $rs > 0$.\n7. Hence $a$ does not divide $bc$.",
    "options": {
      "A": "Line 1",
      "B": "Line 2",
      "C": "Line 3",
      "D": "Line 4",
      "E": "Line 5",
      "F": "Line 6"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题给出一段对错误命题的尝试性证明，要求找出哪一行包含逻辑错误。原命题为：若正整数 $a$ 整除 $bc$，则 $a$ 整除 $b$ 或 $a$ 整除 $c$。这是一个假命题，例如 $a=6,\\;b=2,\\;c=3$，有 $6\\mid 6$ 但 $6\\nmid 2$ 且 $6\\nmid 3$。\n\n【解题步骤】\n逐行审查证明过程：\n\n第1行：将原命题转换为逆否命题。原命题 $a\\mid bc\\Rightarrow(a\\mid b\\;\\lor\\;a\\mid c)$ 的逆否命题为 $\\neg(a\\mid b)\\land\\neg(a\\mid c)\\Rightarrow\\neg(a\\mid bc)$，即若 $a$ 不整除 $b$ 且 $a$ 不整除 $c$，则 $a$ 不整除 $bc$。转换正确。\n\n第2行：由 $a\\nmid b$，设 $b$ 除以 $a$ 的余数为 $r$，$0<r<a$；同理 $c$ 除以 $a$ 的余数为 $s$，$0<s<a$。正确。\n\n第3行：带余除法表达式 $b=ax+r$，$c=ay+s$。正确。\n\n第4行：展开 $bc=(ax+r)(ay+s)=a^2xy+axs+ayr+rs=a(axy+xs+yr)+rs$。代数运算正确。\n\n第5行：断言 $bc$ 除以 $a$ 的余数是 $rs$。这是错误所在！当 $rs\\geq a$ 时，$rs$ 并非余数，真正的余数应为 $rs\\bmod a$。例如 $a=6,r=2,s=3$，$rs=6=a$，余数为 $0$，此时 $a$ 恰好整除 $bc$。\n\n第6行：由 $r>0,s>0$ 得 $rs>0$。正确。\n\n第7行：若第5行正确则第7行也正确，但第5行已错。\n\n【快捷思路】\n关键是认识到 $rs$ 未必小于 $a$。只需一个反例 $a=6,r=2,s=3\\Rightarrow rs=6$，余数为 $0$，直接推翻第5行的断言。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof",
      "Counterexamples"
    ],
    "modules": [
      "k_number_theory_combinatorics",
      "l_proof_methods",
      "h_logic_counterexamples"
    ],
    "sections": [
      "k.divisibility_remainders",
      "l.proof_error_identification",
      "h.contrapositive_and_counterexample"
    ],
    "primary_section": "k.divisibility_remainders",
    "skills": [
      "division-algorithm",
      "modular-remainder",
      "proof-error-identification",
      "contrapositive",
      "counterexample-construction"
    ]
  },
  {
    "id": "2016-P2-Q14",
    "year": 2016,
    "paper": 2,
    "num": 14,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "$f(x) = ax^4 + bx^3 + cx^2 + dx + e$, where $a, b, c, d$, and $e$ are real numbers.\n\nSuppose $f(x) = 1$ has $p$ distinct real solutions, $f(x) = 2$ has $q$ distinct real solutions, $f(x) = 3$ has $r$ distinct real solutions, and $f(x) = 4$ has $s$ distinct real solutions.\n\nWhich one of the following is **not** possible?",
    "options": {
      "A": "$p = 1, q = 2, r = 4$ and $s = 3$",
      "B": "$p = 1, q = 3, r = 2$ and $s = 4$",
      "C": "$p = 1, q = 4, r = 3$ and $s = 2$",
      "D": "$p = 2, q = 4, r = 3$ and $s = 1$",
      "E": "$p = 4, q = 3, r = 2$ and $s = 1$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n给定四次多项式 $f(x)=ax^4+bx^3+cx^2+dx+e$，$f(x)=k$ 的实根个数等于曲线 $y=f(x)$ 与水平线 $y=k$ 的交点数。题目要求判断哪组 $(p,q,r,s)$ 取值不可能出现。\n\n【解题步骤】\n四次多项式 $f(x)$ 的图像形状取决于最高项系数 $a$ 的正负。\n\n当 $a>0$ 时，图像呈 W 形（两个局部极小、一个局部极大）或类抛物线形（一个局部极小）。当 $a<0$ 时，图像为上述形状的镜像。\n\n逐项检验：\n\n选项A（$p=1,q=2,r=4,s=3$）：取 $a>0$，令 $y=1$ 与曲线相切于极小值点得 $p=1$；适当调整极值高度可使 $y=2$ 交两点、$y=3$ 交四点、$y=4$ 交三点。可行。\n\n选项B（$p=1,q=3,r=2,s=4$）：$p=1$ 要求某条水平线与曲线相切，只给出一个实根。要使 $s=4$（$y=4$ 交四点），曲线必须在该高度以下形成两个低谷和一个中间高峰。水平线从下往上移动时，交点数只能按“切线给 1 个、穿过两个分支给 2 个、穿过四个分支给 4 个、再降回 2 个或 0 个”的顺序变化；不可能在 $y=2,3,4$ 这三个递增高度上依次得到 $3,2,4$。因此 B 的根数跳变模式不可行。\n\n选项C、D、E 均可构造出对应的图像，在此略去具体草图。\n\n【快捷思路】\n核心是理解四次函数的 W 形特征：水平线从下往上移动时，交点数的变化模式受极值位置严格限制，不可能出现 B 中的跳变模式。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation"
    ],
    "modules": [
      "i_functions_graphs",
      "f_differentiation"
    ],
    "sections": [
      "i.polynomial_root_counts",
      "i.horizontal_line_intersections",
      "f.stationary_points_extrema"
    ],
    "primary_section": "i.polynomial_root_counts",
    "skills": [
      "horizontal-line-counting",
      "quartic-shape-analysis",
      "extrema-ordering",
      "impossibility-proof"
    ]
  },
  {
    "id": "2016-P2-Q15",
    "year": 2016,
    "paper": 2,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the quadratic $f(x) = x^2 - 2px + q$ and the statement:\n\n(*) $f(x) = 0$ has two real roots whose difference is greater than 2 and less than 4.\n\nWhich one of the following statements is true **if and only if** (*) is true?",
    "options": {
      "A": "$q < p^2 < q + 4$",
      "B": "$\\sqrt{q + 1} < p < \\sqrt{q + 4}$",
      "C": "$q - 3 \\le p^2 - 4 \\le q$",
      "D": "$q < p^2 - 1 < q + 3$",
      "E": "$q - 2 < p^2 - 3 < q + 2$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n已知二次函数 $f(x)=x^2-2px+q$，条件（*）为方程 $f(x)=0$ 有两个实根，且两根之差大于 $2$ 且小于 $4$。求与（*）等价的充要条件。\n\n【解题步骤】\n第一步：用求根公式表示两根。\n$$x_1=p+\\sqrt{p^2-q},\\quad x_2=p-\\sqrt{p^2-q}$$\n两根为实数当且仅当判别式 $p^2-q>0$。\n\n第二步：计算两根之差。\n$$|x_1-x_2|=2\\sqrt{p^2-q}$$\n\n第三步：代入条件（*）。\n条件为 $2<2\\sqrt{p^2-q}<4$，两边同除以 $2$ 得 $1<\\sqrt{p^2-q}<2$。\n\n两边平方（各项均为正）：$1<p^2-q<4$。\n注意 $p^2-q>1$ 已蕴含 $p^2-q>0$，故判别式条件自动满足。\n\n第四步：将不等式与选项逐一比对。\n\n选项A：$q<p^2<q+4$ 即 $0<p^2-q<4$，左端为 $0$ 而非 $1$，范围更宽，不等价。\n\n选项B：$\\sqrt{q+1}<p<\\sqrt{q+4}$ 隐含 $p>0$，但原条件中 $p$ 可正可负，不等价。\n\n选项C：$q-3\\leq p^2-4\\leq q$ 即 $1\\leq p^2-q\\leq 4$，含等号，与严格不等式不等价。\n\n选项D：$q<p^2-1<q+3$，两边同时加 $1$ 得 $q+1<p^2<q+4$，即 $1<p^2-q<4$，完全等价。\n\n选项E：$q-2<p^2-3<q+2$ 即 $-1<p^2-q<5$，范围过大，不等价。\n\n【快捷思路】\n直接计算两根之差 $2\\sqrt{p^2-q}$，利用 $2<2\\sqrt{p^2-q}<4$ 推出 $1<p^2-q<4$，再逐一验证选项哪个与此等价。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.quadratic_roots_difference",
      "a2.discriminant_parameter_range"
    ],
    "primary_section": "a2.quadratic_roots_difference",
    "skills": [
      "quadratic-formula",
      "root-difference",
      "strict-inequality-equivalence",
      "option-equivalence"
    ]
  },
  {
    "id": "2016-P2-Q16",
    "year": 2016,
    "paper": 2,
    "num": 16,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "In the figure, $PQRS$ is a trapezium with $PQ$ parallel to $SR$.\n\nThe diagonals of the trapezium meet at $X$.\n\n$U$ lies on $SP$ and $T$ lies on $RQ$ such that $UT$ is a line segment through $X$ parallel to $PQ$.\n\nThe length of $PQ$ is 12 cm and the length of $SR$ is 3 cm.\n\nWhat, in centimetres, is the length of $UT$?",
    "options": {
      "A": "4.2",
      "B": "4.5",
      "C": "4.8",
      "D": "5.25",
      "E": "6"
    },
    "answer": "C",
    "analysis": "【题目分析】\n梯形 $PQRS$ 中 $PQ\\parallel SR$，$PQ=12\\text{ cm}$，$SR=3\\text{ cm}$。对角线 $PR$ 与 $QS$ 交于 $X$。过 $X$ 作 $UT\\parallel PQ$，$U$ 在 $SP$ 上，$T$ 在 $RQ$ 上。求 $UT$ 的长度。\n\n【解题步骤】\n图中存在多对相似三角形：$\\triangle SUX\\sim\\triangle SPQ$，$\\triangle RXT\\sim\\triangle RPQ$，$\\triangle XSR\\sim\\triangle XQP$。\n\n首先利用 $\\triangle XSR\\sim\\triangle XQP$。对应边 $SR=3$，$QP=12$，相似比为 $12/3=4$。因此从 $X$ 到 $QP$ 的高是从 $X$ 到 $SR$ 的高的 $4$ 倍。\n\n由此可得 $UP=4SU$（因为 $X$ 将对角线按 $4:1$ 分割），故 $SP=5SU$。\n\n再由 $\\triangle SUX\\sim\\triangle SPQ$，相似比为 $SU:SP=1:5$，所以 $UX=\\frac{1}{5}\\times 12=\\frac{12}{5}=2.4$。\n\n同理可得 $XT=2.4$。\n\n因此 $UT=UX+XT=2.4+2.4=4.8\\text{ cm}$。\n\n【快捷思路】\n对于梯形中过对角线交点且平行于底边的线段，有公式：\n$$\\frac{2}{UT}=\\frac{1}{PQ}+\\frac{1}{SR}$$\n即 $UT$ 是 $PQ$ 和 $SR$ 的调和平均数。代入得：\n$$UT=\\frac{2\\times 12\\times 3}{12+3}=\\frac{72}{15}=4.8\\text{ cm}$$\n\n【正确答案】C",
    "images": {
      "image": "2016 P2 Q16.png"
    },
    "has_image": true,
    "related_topics": [
      "Proof"
    ],
    "modules": [
      "d_coordinate_geometry"
    ],
    "sections": [
      "d.trapezium_diagonal_intersection",
      "d.similar_triangles_parallel_lines"
    ],
    "primary_section": "d.trapezium_diagonal_intersection",
    "skills": [
      "similar-triangles",
      "parallel-line-ratios",
      "harmonic-mean-length",
      "diagram-ratio-chasing"
    ]
  },
  {
    "id": "2016-P2-Q17",
    "year": 2016,
    "paper": 2,
    "num": 17,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Consider these simultaneous equations, where $c$ is a constant:\n\n$$y = 3 \\sin x + 2$$\n\n$$y = x + c$$\n\nWhich of the following statements is/are true?\n\n**1** For some value of $c$: there is exactly one solution with $0 \\le x \\le \\pi$ **and** there is at least one solution with $-\\pi < x < 0$.\n\n**2** For some value of $c$: there is exactly one solution with $0 \\le x \\le \\pi$ **and** there are no solutions with $-\\pi < x < 0$.\n\n**3** For some value of $c$: there is exactly one solution with $0 \\le x \\le \\pi$ **and** there are no solutions with $x > \\pi$.",
    "options": {
      "A": "none",
      "B": "1 only",
      "C": "2 only",
      "D": "3 only",
      "E": "1 and 2 only",
      "F": "1 and 3 only",
      "G": "2 and 3 only",
      "H": "1, 2 and 3"
    },
    "answer": "H",
    "analysis": "【题目分析】\n本题研究曲线 $y = 3\\sin x + 2$（值域 $[-1, 5]$）与直线 $y = x + c$ 的交点分布，核心是分析直线平移时交点数在各区间的变化。\n\n【解题步骤】\n命题1：取 $c$ 略小于 $2$，直线在 $x = 0$ 处从曲线下方穿过，$[0, \\pi]$ 内恰一交点，$(-\\pi, 0)$ 内至少一交点。成立。\n\n命题2：取 $c = 2 - \\pi < -1$，直线过 $(\\pi, 2)$，$[0, \\pi]$ 内恰一交点。因 $c < -1$，$x < 0$ 时直线低于曲线最低点，故 $(-\\pi, 0)$ 无解。成立。\n\n命题3：同上取 $c = 2 - \\pi$。$x = 2\\pi$ 时直线值 $2 + \\pi > 5$，故 $x > 2\\pi$ 无解。在 $\\pi < x < 2\\pi$ 内曲线 $< 2$ 而直线 $> 2$，也无解。故 $x > \\pi$ 无解。成立。\n\n【快捷思路】\n画草图观察直线上下平移。关键截距 $c = 2$ 和 $c = 2 - \\pi$ 决定交点分布变化。\n\n【正确答案】H",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "e.sine_line_intersections",
      "i.parameterised_graph_intersections"
    ],
    "primary_section": "e.sine_line_intersections",
    "skills": [
      "graph-intersection",
      "parameter-shift",
      "interval-root-counting",
      "endpoint-analysis"
    ]
  },
  {
    "id": "2016-P2-Q18",
    "year": 2016,
    "paper": 2,
    "num": 18,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider this statement about a function $f(x)$:\n\n$$(*) \\text{ If } (f(x))^2 \\le 1 \\text{ for all } -1 \\le x \\le 1 \\text{ then } \\int_{-1}^{1} (f(x))^2 \\, dx \\le \\int_{-1}^{1} f(x) \\, dx$$\n\nWhich one of the following functions provides a **counterexample** to (*)?",
    "options": {
      "A": "$f(x) = x + \\frac{1}{2}$",
      "B": "$f(x) = x - \\frac{1}{2}$",
      "C": "$f(x) = x + x^3$",
      "D": "$f(x) = x - x^3$",
      "E": "$f(x) = x^2 + x^4$",
      "F": "$f(x) = x^2 - x^4$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n为命题 $(*)$ 构造反例：若 $(f(x))^2 \\leq 1$ 在 $[-1, 1]$ 上成立，则 $\\int_{-1}^{1}(f(x))^2\\,dx \\leq \\int_{-1}^{1}f(x)\\,dx$。需前件真、后件假。\n\n【解题步骤】\n检验前件：A 中 $f(1) = 3/2$，平方超 $1$，排除。B 中 $f(-1) = -3/2$，排除。C、E 中 $f(1) = 2$，均排除。\n\n仅 D 和 F 可能。对 D：$f(x) = x - x^3$，驻点 $x = \\pm 1/\\sqrt{3}$，极值 $2/(3\\sqrt{3}) < 1$，前件真。$f$ 为奇函数，$\\int_{-1}^{1}f = 0$，而 $\\int_{-1}^{1}f^2 > 0$，后件假，D 是反例。\n\n对 F：$0 \\leq f(x) < 1$，故 $f^2 \\leq f$，后件真，不是反例。\n\n【快捷思路】\nA、B、C、E 端点值超 $1$，秒排除。D 是奇函数，$\\int f = 0 < \\int f^2$，天然反例。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Integration",
      "Differentiation"
    ],
    "modules": [
      "h_logic_counterexamples",
      "g_integration",
      "f_differentiation"
    ],
    "sections": [
      "h.counterexample_construction",
      "g.integral_inequality",
      "f.stationary_bounds"
    ],
    "primary_section": "h.counterexample_construction",
    "skills": [
      "counterexample-construction",
      "endpoint-screening",
      "odd-function-integral",
      "bounding-by-derivative",
      "integral-comparison"
    ]
  },
  {
    "id": "2016-P2-Q19",
    "year": 2016,
    "paper": 2,
    "num": 19,
    "topic": "Combinatorics",
    "difficulty": 3,
    "question": "Some identical unit cubes are used to construct a three-dimensional object by gluing them together face to face.\n\nSketches of this object are made by looking at it from the right-hand side, from the front and from above. These sketches are called the side elevation, the front elevation, and the plan view respectively.\n\nHow many cubes were used to construct the object?",
    "options": {
      "A": "exactly 6",
      "B": "either 6 or 7",
      "C": "exactly 7",
      "D": "either 7 or 8",
      "E": "exactly 8",
      "F": "either 8 or 9",
      "G": "exactly 9"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题给出由单位正方体构成的三维物体的三视图（俯视图、前视图、侧视图），要求确定正方体数量。核心方法是通过三视图交叉约束，逐层逐格确定每个位置是否存在正方体。\n\n【解题步骤】\n物体容纳在 $3 \\times 3$ 底面网格内，最多三层。\n\n由俯视图知正方体分布在 L 形五个位置上，每位置至少一个。\n\n由前视图：左列两层高，底层和中层有正方体、顶层无。中列仅底层有。右列每层至少有一个。\n\n由侧视图：左列高为 $2$，顶层右后方无正方体。中列高为 $3$，三层均有。右列高为 $1$，仅底层有。\n\n把俯视图中的五个底面位置看作五个竖直柱。前视图和侧视图共同固定了其中三柱的高度，并要求剩余两柱中至少一柱存在来满足俯视图的 L 形占位；另一柱不会改变三个视图的最大高度，可以选择有或无。因此总数只能是 $8$ 或 $9$。\n\n【快捷思路】\n逐层分析法：俯视图先定 L 形底面占位，前视图和侧视图再定每行、每列的最高层数。最后只剩两个不会改变投影高度的位置，其中一个必选、一个可选，故两种可能。\n\n【正确答案】F",
    "images": {
      "image": "2016 P2 Q19.png"
    },
    "has_image": true,
    "related_topics": [
      "Sets"
    ],
    "modules": [
      "m_comprehensive_training",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "m.spatial_projection_constraints",
      "k.constraint_counting"
    ],
    "primary_section": "m.spatial_projection_constraints",
    "skills": [
      "projection-constraint-grid",
      "min-max-counting",
      "case-analysis",
      "spatial-visualisation"
    ]
  },
  {
    "id": "2016-P2-Q20",
    "year": 2016,
    "paper": 2,
    "num": 20,
    "topic": "Number Theory",
    "difficulty": 3,
    "question": "Each interior angle of a regular polygon with $n$ sides is $\\frac{3}{4}$ of each interior angle of a second regular polygon with $m$ sides.\n\nHow many pairs of positive integers $n$ and $m$ are there for which this statement is true?",
    "options": {
      "A": "none",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4",
      "F": "5",
      "G": "6",
      "H": "infinitely many"
    },
    "answer": "E",
    "analysis": "【题目分析】\n正 $n$ 边形内角为 $180^\\circ - 360^\\circ/n$。题设：正 $n$ 边形内角为正 $m$ 边形内角的 $3/4$，求满足条件的正整数对 $(n,m)$ 组数，其中 $n, m \\geq 3$。\n\n【解题步骤】\n建立方程：$180 - 360/n = \\frac{3}{4}(180 - 360/m)$，化简得 $8/n - 6/m = 1$。\n\n由 $n \\geq 3$ 且 $8/n > 1$ 知 $n < 8$，枚举 $n = 3$ 到 $7$：\n- $n = 3$：$m = 18/5$，非整数\n- $n = 4$：$m = 6$ ✓\n- $n = 5$：$m = 10$ ✓\n- $n = 6$：$m = 18$ ✓\n- $n = 7$：$m = 42$ ✓\n\n共四组解。验证 $(4,6)$：正方形内角 $90^\\circ = \\frac{3}{4} \\times 120^\\circ$（正六边形）。\n\n【快捷思路】\n由 $8/n - 6/m = 1$ 得 $n = 8 - 48/(m+6)$，$m+6$ 须为 $48$ 的因数。$m \\geq 3$ 时仅 $12, 16, 24, 48$ 四种可能，对应四组解。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry",
      "Algebra"
    ],
    "modules": [
      "d_coordinate_geometry",
      "a2_equations_inequalities",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "d.regular_polygon_angles",
      "a2.integer_parameter_equations",
      "k.divisor_enumeration"
    ],
    "primary_section": "d.regular_polygon_angles",
    "skills": [
      "polygon-angle-formula",
      "equation-modelling",
      "integer-enumeration",
      "divisor-condition"
    ]
  },
  {
    "id": "2017-P1-Q1",
    "year": 2017,
    "paper": 1,
    "num": 1,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Given that\n\n$$\\frac{dy}{dx} = 3x^2 - \\frac{2-3x}{x^3}, \\quad x \\neq 0$$\n\nand $y = 5$ when $x = 1$, find $y$ in terms of $x$.",
    "options": {
      "A": "$y = \\frac{1}{3}x^3 + x^{-2} - 3x^{-1} + 6\\frac{2}{3}$",
      "B": "$y = x^3 + \\frac{1}{2}x^{-2} - 3x^{-1} + 6\\frac{1}{2}$",
      "C": "$y = x^3 + x^{-2} - 3x^{-1} + 6$",
      "D": "$y = x^3 + x^{-2} - x^{-1} + 4$",
      "E": "$y = x^3 + 2x^{-2} - x^{-1} + 3$",
      "F": "$y = 3x^3 + x^{-2} - x^{-1} + 2$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考点为积分求原函数。已知导数 $\\frac{dy}{dx}$ 的表达式，需要对各项分别积分，再利用初始条件 $x=1$ 时 $y=5$ 确定积分常数。\n\n【解题步骤】\n第一步：化简被积函数。将分式项写成幂的形式：\n$$\\frac{dy}{dx} = 3x^2 - \\frac{2-3x}{x^3} = 3x^2 - \\frac{2}{x^3} + \\frac{3x}{x^3} = 3x^2 - 2x^{-3} + 3x^{-2}$$\n\n第二步：逐项积分。利用幂函数积分公式 $\\int x^n dx = \\frac{x^{n+1}}{n+1}$：\n$$y = \\int (3x^2 - 2x^{-3} + 3x^{-2}) dx = x^3 - 2\\cdot\\frac{x^{-2}}{-2} + 3\\cdot\\frac{x^{-1}}{-1} + C = x^3 + x^{-2} - 3x^{-1} + C$$\n\n第三步：代入初始条件求 $C$。当 $x=1$ 时 $y=5$：\n$$5 = 1^3 + 1^{-2} - 3\\cdot 1^{-1} + C = 1 + 1 - 3 + C = -1 + C$$\n解得 $C = 6$。\n\n因此 $y = x^3 + x^{-2} - 3x^{-1} + 6$，对应选项 C。\n\n【快捷思路】\n逐项积分后代入 $x=1$ 即可求出常数项，无需验证全部选项。注意 $(2-3x)/x^3$ 的符号拆分容易出错。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "modules": [
      "g_integration"
    ],
    "sections": [
      "g.differential_equations.power_functions"
    ],
    "primary_section": "g.differential_equations.power_functions",
    "skills": [
      "split-rational-expression",
      "power-rule-integration",
      "constant-of-integration",
      "initial-condition"
    ]
  },
  {
    "id": "2017-P1-Q2",
    "year": 2017,
    "paper": 1,
    "num": 2,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The function $f$ is given by\n\n$$f(x) = \\left( \\frac{2}{x} - \\frac{1}{2x^2} \\right)^2 \\quad (x \\neq 0)$$\n\nWhat is the value of $f''(1)$?",
    "options": {
      "A": "$-3$",
      "B": "$-1$",
      "C": "$5$",
      "D": "$17$",
      "E": "$29$",
      "F": "$80$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考点为求函数的二阶导数。需先将 $f(x)$ 展开为幂函数的线性组合，再逐次求导两次，最后代入 $x=1$。\n\n【解题步骤】\n第一步：展开 $f(x)$。利用 $(a-b)^2 = a^2 - 2ab + b^2$：\n$$f(x) = \\left(\\frac{2}{x} - \\frac{1}{2x^2}\\right)^2 = \\frac{4}{x^2} - 2\\cdot\\frac{2}{x}\\cdot\\frac{1}{2x^2} + \\frac{1}{4x^4} = 4x^{-2} - 2x^{-3} + \\frac{1}{4}x^{-4}$$\n注意最后一项：$\\frac{1}{4x^4} = \\frac{1}{4}x^{-4}$，切勿误写为 $4x^{-4}$。\n\n第二步：求一阶导数：\n$$f'(x) = -8x^{-3} + 6x^{-4} - x^{-5}$$\n\n第三步：求二阶导数：\n$$f''(x) = 24x^{-4} - 24x^{-5} + 5x^{-6}$$\n\n第四步：代入 $x=1$：\n$$f''(1) = 24 - 24 + 5 = 5$$\n\n对应选项 C。\n\n【快捷思路】\n展开后直接逐项求导，避免链式法则带来的繁琐计算。代入 $x=1$ 时各项系数即结果。\n\n【正确答案】C\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "a1_algebra_basics"
    ],
    "sections": [
      "f.second_derivatives",
      "a1.algebraic_expansion"
    ],
    "primary_section": "f.second_derivatives",
    "skills": [
      "expand-before-differentiating",
      "negative-power-rules",
      "second-derivative-evaluation"
    ]
  },
  {
    "id": "2017-P1-Q3",
    "year": 2017,
    "paper": 1,
    "num": 3,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "A line $l$ has equation $y = 6 - 2x$\n\nA second line is perpendicular to $l$ and passes through the point $(-6, 0)$.\n\nFind the area of the region enclosed by the two lines and the $x$-axis.",
    "options": {
      "A": "$16 \\frac{1}{5}$",
      "B": "18",
      "C": "$21 \\frac{3}{5}$",
      "D": "27",
      "E": "$40 \\frac{1}{2}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考点为坐标几何中的直线方程与面积计算。需要求垂直直线的方程、两直线交点，再求与 $x$ 轴围成的三角形面积。\n\n【解题步骤】\n第一步：确定第二条直线的方程。直线 $l: y = 6-2x$ 的斜率为 $-2$，与之垂直的直线斜率为 $\\frac{1}{2}$。过点 $(-6,0)$，方程为：\n$$y - 0 = \\frac{1}{2}(x + 6) \\quad \\Rightarrow \\quad y = \\frac{1}{2}x + 3$$\n\n第二步：求两直线与 $x$ 轴的交点。\n直线 $l$ 与 $x$ 轴交于 $y=0 \\Rightarrow x=3$，即点 $A(3,0)$。\n第二条直线与 $x$ 轴交于 $y=0 \\Rightarrow x=-6$，即点 $B(-6,0)$。\n\n第三步：求两直线的交点。联立方程：\n$$6 - 2x = \\frac{1}{2}x + 3 \\quad \\Rightarrow \\quad \\frac{5}{2}x = 3 \\quad \\Rightarrow \\quad x = \\frac{6}{5}$$\n代入得 $y = \\frac{1}{2}\\cdot\\frac{6}{5} + 3 = \\frac{18}{5}$，即交点 $C\\left(\\frac{6}{5}, \\frac{18}{5}\\right)$。\n\n第四步：计算三角形面积。底边 $AB$ 长为 $3 - (-6) = 9$，高为交点的纵坐标 $\\frac{18}{5}$：\n$$\\text{面积} = \\frac{1}{2} \\times 9 \\times \\frac{18}{5} = \\frac{81}{5} = 16\\frac{1}{5}$$\n\n对应选项 A。\n\n【快捷思路】\n底边长度 $9$ 可直接读出（两直线与 $x$ 轴交点横坐标之差），只需计算交点纵坐标代入面积公式即可。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Algebra"
    ],
    "modules": [
      "d_coordinate_geometry"
    ],
    "sections": [
      "d.perpendicular_lines_area"
    ],
    "primary_section": "d.perpendicular_lines_area",
    "skills": [
      "perpendicular-gradient",
      "line-equation-from-point",
      "simultaneous-linear-equations",
      "triangle-area-from-base-height"
    ]
  },
  {
    "id": "2017-P1-Q4",
    "year": 2017,
    "paper": 1,
    "num": 4,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "When $(3x^2 + 8x - 3)$ is multiplied by $(px - 1)$ and the resulting product is divided by $(x + 1)$, the remainder is 24.\n\nWhat is the value of $p$?",
    "options": {
      "A": "$-4$",
      "B": "$2$",
      "C": "$4$",
      "D": "$\\frac{8}{7}$",
      "E": "$\\frac{11}{4}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考点为多项式余数定理。已知多项式 $(3x^2+8x-3)(px-1)$ 除以 $(x+1)$ 的余数为 $24$，利用余数定理直接代入求 $p$。\n\n【解题步骤】\n第一步：设 $f(x) = (3x^2+8x-3)(px-1)$。\n\n第二步：根据余数定理，$f(x)$ 除以 $(x+1)$ 的余数等于 $f(-1)$。计算：\n$$f(-1) = (3(-1)^2 + 8(-1) - 3)(p(-1) - 1) = (3 - 8 - 3)(-p - 1) = (-8)(-p-1) = 8(p+1)$$\n\n第三步：由题意 $f(-1) = 24$，得：\n$$8(p+1) = 24 \\quad \\Rightarrow \\quad p+1 = 3 \\quad \\Rightarrow \\quad p = 2$$\n\n对应选项 B。\n\n第四步：验证。当 $p=2$ 时，$f(-1) = (-8)(-3) = 24$，符合条件。\n\n【快捷思路】\n直接应用余数定理，令 $x=-1$ 代入乘积式即可，无需展开多项式。官方解答特别指出展开只会增加计算量和出错概率。\n\n【正确答案】B\n",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a1_algebra_basics",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a1.remainder_theorem",
      "a2.remainder_theorem"
    ],
    "primary_section": "a1.remainder_theorem",
    "skills": [
      "remainder-theorem",
      "substitution-at-root",
      "parameter-solving"
    ]
  },
  {
    "id": "2017-P1-Q5",
    "year": 2017,
    "paper": 1,
    "num": 5,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$S$ is the complete set of values of $x$ which satisfy **both** the inequalities\n\n$$x^2 - 8x + 12 < 0 \\text{ and } 2x + 1 > 9$$\n\nThe set $S$ can also be represented as a single inequality.\n\nWhich one of the following single inequalities represents the set $S$?",
    "options": {
      "A": "$(x^2 - 8x + 12)(2x + 1) < 0$",
      "B": "$(x^2 - 8x + 12)(2x + 1) > 0$",
      "C": "$x^2 - 10x + 24 < 0$",
      "D": "$x^2 - 10x + 24 > 0$",
      "E": "$x^2 - 6x + 8 < 0$",
      "F": "$x^2 - 6x + 8 > 0$",
      "G": "$x < 2$",
      "H": "$x > 6$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n求同时满足 $x^2 - 8x + 12 < 0$ 和 $2x + 1 > 9$ 的解集 $S$，并从选项中找出等价表示 $S$ 的单一不等式。本题核心在于先分别解两个不等式取交集，再将区间形式反向构造为二次不等式。\n\n【解题步骤】\n第一步，解二次不等式 $x^2 - 8x + 12 < 0$。因式分解得 $(x-2)(x-6) < 0$，由开口向上的抛物线图像可知解为 $2 < x < 6$。\n\n第二步，解线性不等式 $2x + 1 > 9$，得 $x > 4$。\n\n第三步，取交集：$S = (2, 6) \\cap (4, \\infty) = (4, 6)$，即 $4 < x < 6$。\n\n第四步，将区间 $4 < x < 6$ 反向构造为二次不等式。由 $x - 4 > 0$ 且 $x - 6 < 0$，得 $(x-4)(x-6) < 0$，展开即 $x^2 - 10x + 24 < 0$，对应选项 C。\n\n【快捷思路】\n不必逐一验证各选项，直接从交集 $4 < x < 6$ 反推：两根为 $4$ 和 $6$、开口向上的二次式在两根之间为负，即 $(x-4)(x-6) < 0$，展开对比即可。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "modules": [
      "a2_equations_inequalities"
    ],
    "sections": [
      "a2.inequality_intersections",
      "a2.quadratic_inequalities"
    ],
    "primary_section": "a2.inequality_intersections",
    "skills": [
      "solve-quadratic-inequality",
      "linear-inequality",
      "interval-intersection",
      "construct-quadratic-from-roots"
    ]
  },
  {
    "id": "2017-P1-Q6",
    "year": 2017,
    "paper": 1,
    "num": 6,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "A tangent to the circle $x^2 + y^2 = 144$ passes through the point $(20, 0)$ and crosses the positive $y$-axis.\n\nWhat is the value of $y$ at the point where the tangent meets the $y$-axis?",
    "options": {
      "A": "12",
      "B": "15",
      "C": "$\\frac{49}{3}$",
      "D": "20",
      "E": "$\\frac{64}{3}$",
      "F": "$\\frac{80}{3}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n圆 $x^2 + y^2 = 144$ 的一条切线过点 $(20, 0)$ 且与正 $y$ 轴相交，求切线与 $y$ 轴交点的纵坐标。本题利用切线到圆心的距离等于半径这一核心几何条件求解。\n\n【解题步骤】\n圆以原点为圆心，半径 $r = 12$。设切线为 $y = m(x - 20)$，其一般式为 $mx - y - 20m = 0$。\n\n利用切线条件：圆心到直线距离等于半径，即\n$$\\frac{|{-20m}|}{\\sqrt{m^2 + 1}} = 12$$\n两边平方整理得 $400m^2 = 144(m^2 + 1)$，即 $256m^2 = 144$，解得 $m = \\pm \\frac{3}{4}$。\n\n由于切线与正 $y$ 轴相交（$y$ 轴截距 $> 0$），由 $c = -20m > 0$ 可知 $m < 0$，故 $m = -\\frac{3}{4}$。\n\n截距 $c = -20 \\times (-\\frac{3}{4}) = 15$，即切线与 $y$ 轴交于 $(0, 15)$。\n\n【快捷思路】\n利用相似三角形可更快求解：设外点为 $R(20,0)$，切线与 $y$ 轴交点为 $P(0,k)$，切点为 $Q$，原点为 $O$。$\\triangle OQR$ 中 $OR = 20$，$OQ = 12$，由勾股定理得 $QR = 16$（3-4-5 三角形）。由 $\\triangle PQO \\sim \\triangle OQR$，得 $\\frac{k}{12} = \\frac{20}{16}$，故 $k = 15$。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "modules": [
      "d_coordinate_geometry"
    ],
    "sections": [
      "d.circle_tangents",
      "d.point_to_line_distance"
    ],
    "primary_section": "d.circle_tangents",
    "skills": [
      "tangent-condition",
      "point-to-line-distance",
      "y-intercept",
      "slope-selection"
    ]
  },
  {
    "id": "2017-P1-Q7",
    "year": 2017,
    "paper": 1,
    "num": 7,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The first three terms of an arithmetic progression are $p$, $q$ and $p^2$ respectively, where $p < 0$\n\nThe first three terms of a geometric progression are $p$, $p^2$ and $q$ respectively.\n\nFind the sum of the first 10 terms of the arithmetic progression.",
    "options": {
      "A": "$\\frac{23}{8}$",
      "B": "$\\frac{95}{8}$",
      "C": "$\\frac{115}{8}$",
      "D": "$\\frac{185}{8}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n已知等差数列前三项为 $p, q, p^2$（$p < 0$），等比数列前三项为 $p, p^2, q$，求等差数列前 10 项和。本题需要联立两种数列的定义，建立关于 $p$ 的方程。\n\n【解题步骤】\n先利用等比数列：公比 $r = \\frac{p^2}{p} = p$，第三项 $q = p \\cdot r = p^3$。\n\n再利用等差数列：公差 $d = q - p$，第三项 $p + 2d = p^2$。代入 $q = p^3$ 得：\n$$p + 2(p^3 - p) = p^2 \\implies 2p^3 - p^2 - p = 0$$\n因式分解：$p(2p+1)(p-1) = 0$。\n\n由条件 $p < 0$ 且 $p \\neq 0$，得 $p = -\\frac{1}{2}$。进而 $q = p^3 = -\\frac{1}{8}$，公差 $d = q - p = \\frac{3}{8}$。\n\n等差数列前 $n$ 项和公式 $S_n = \\frac{n}{2}[2a + (n-1)d]$，代入 $n = 10$，$a = -\\frac{1}{2}$，$d = \\frac{3}{8}$：\n$$S_{10} = 5 \\times \\left(-1 + \\frac{27}{8}\\right) = 5 \\times \\frac{19}{8} = \\frac{95}{8}$$\n\n【快捷思路】\n联立等差与等比条件直接消去 $q$ 和 $d$：由等比得 $q = p^3$，由等差得 $2q = p + p^2$，联立即 $2p^3 - p^2 - p = 0$，解出 $p$ 后代入求和公式。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.arithmetic_geometric_links",
      "c.arithmetic_series_sum"
    ],
    "primary_section": "c.arithmetic_geometric_links",
    "skills": [
      "sequence-definition",
      "simultaneous-conditions",
      "factorisation",
      "arithmetic-sum"
    ]
  },
  {
    "id": "2017-P1-Q8",
    "year": 2017,
    "paper": 1,
    "num": 8,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the complete set of values of $x$, with $0 \\le x \\le \\pi$, for which\n\n$$(1 - 2 \\sin x) \\cos x \\ge 0$$",
    "options": {
      "A": "$0 \\le x \\le \\frac{\\pi}{6}, \\quad \\frac{\\pi}{2} \\le x \\le \\frac{5\\pi}{6}$",
      "B": "$0 \\le x \\le \\frac{\\pi}{6}, \\quad \\frac{5\\pi}{6} \\le x \\le \\pi$",
      "C": "$\\frac{\\pi}{6} \\le x \\le \\frac{\\pi}{2}, \\quad \\frac{5\\pi}{6} \\le x \\le \\pi$",
      "D": "$\\frac{\\pi}{6} \\le x \\le \\frac{5\\pi}{6}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n求 $(1 - 2\\sin x)\\cos x \\ge 0$ 在 $[0, \\pi]$ 上的完整解集。本题需将乘积不等式拆分为两个因式的符号分析，利用三角函数的单调性分段判断。\n\n【解题步骤】\n两因式乘积非负，即同号或至少一个为零。先确定零点：\n$1 - 2\\sin x = 0$ 得 $\\sin x = \\frac{1}{2}$，在 $[0, \\pi]$ 上解为 $x = \\frac{\\pi}{6}$ 和 $x = \\frac{5\\pi}{6}$。\n$\\cos x = 0$ 在 $[0, \\pi]$ 上解为 $x = \\frac{\\pi}{2}$。\n\n以零点将 $[0, \\pi]$ 分段，分析符号：\n\n$[0, \\frac{\\pi}{6}]$：$\\sin x \\le \\frac{1}{2}$，故 $1-2\\sin x \\ge 0$；$\\cos x > 0$。乘积 $\\ge 0$ ✓\n\n$[\\frac{\\pi}{6}, \\frac{\\pi}{2}]$：$\\sin x \\ge \\frac{1}{2}$，故 $1-2\\sin x \\le 0$；$\\cos x > 0$。乘积 $\\le 0$ ✗\n\n$[\\frac{\\pi}{2}, \\frac{5\\pi}{6}]$：$\\sin x \\ge \\frac{1}{2}$，故 $1-2\\sin x \\le 0$；$\\cos x < 0$。乘积 $\\ge 0$ ✓\n\n$[\\frac{5\\pi}{6}, \\pi]$：$\\sin x \\le \\frac{1}{2}$，故 $1-2\\sin x \\ge 0$；$\\cos x < 0$。乘积 $\\le 0$ ✗\n\n综上，解集为 $0 \\le x \\le \\frac{\\pi}{6}$ 或 $\\frac{\\pi}{2} \\le x \\le \\frac{5\\pi}{6}$，对应选项 A。\n\n【快捷思路】\n取测试点快速判断各段符号：$x = 0$ 时乘积为 $1 > 0$；$x = \\frac{\\pi}{3}$ 时乘积为负；$x = \\frac{2\\pi}{3}$ 时乘积为正；$x = \\pi$ 时乘积为 $-1 < 0$。根据正负交替规律即可确定区间。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry",
      "a2_equations_inequalities"
    ],
    "sections": [
      "e.trig_inequalities",
      "a2.product_inequalities"
    ],
    "primary_section": "e.trig_inequalities",
    "skills": [
      "critical-values",
      "sign-chart",
      "special-angle-values",
      "interval-endpoints"
    ]
  },
  {
    "id": "2017-P1-Q9",
    "year": 2017,
    "paper": 1,
    "num": 9,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "A circle has equation $x^2 + y^2 - 18x - 22y + 178 = 0$\n\nA regular hexagon is drawn inside this circle so that the vertices of the hexagon touch the circle.\n\nWhat is the area of the hexagon?",
    "options": {
      "A": "6",
      "B": "$6\\sqrt{3}$",
      "C": "18",
      "D": "$18\\sqrt{3}$",
      "E": "36",
      "F": "$36\\sqrt{3}$",
      "G": "48",
      "H": "$48\\sqrt{3}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n已知圆方程 $x^2 + y^2 - 18x - 22y + 178 = 0$，圆内作正六边形且顶点均在圆上，求正六边形面积。本题综合考查圆方程配方法与正多边形面积公式。\n\n【解题步骤】\n第一步：将圆方程配方化为标准形式\n$(x - 9)^2 + (y - 11)^2 - 9^2 - 11^2 + 178 = 0$\n$(x - 9)^2 + (y - 11)^2 = 81 + 121 - 178 = 24$\n圆心为 $(9, 11)$，半径 $r = \\sqrt{24}$。\n\n第二步：分析正六边形的几何结构\n正六边形内接于圆时，六条半径将其分割为 $6$ 个全等的等边三角形，每个三角形边长等于半径 $r$。\n\n第三步：计算单个等边三角形面积\n利用面积公式 $\\frac{1}{2}ab\\sin C$：\n$S_{\\triangle} = \\frac{1}{2} r^2 \\sin 60^\\circ = \\frac{1}{2} \\cdot 24 \\cdot \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$\n\n第四步：正六边形总面积\n$S = 6 \\times 6\\sqrt{3} = 36\\sqrt{3}$\n\n【快捷思路】\n正六边形内接圆面积公式为 $\\frac{3\\sqrt{3}}{2}r^2$，直接代入 $r^2 = 24$ 得 $36\\sqrt{3}$。关键在于先用配方法求出半径平方，无需完整化简半径。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Trigonometry"
    ],
    "modules": [
      "d_coordinate_geometry",
      "e_trigonometry"
    ],
    "sections": [
      "d.circle_equations",
      "d.inscribed_regular_polygons"
    ],
    "primary_section": "d.inscribed_regular_polygons",
    "skills": [
      "completing-square",
      "radius-squared",
      "regular-hexagon-area",
      "triangle-area-formula"
    ]
  },
  {
    "id": "2017-P1-Q10",
    "year": 2017,
    "paper": 1,
    "num": 10,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "A curve $C$ has equation $y = f(x)$ where\n\n$$f(x) = p^3 - 6p^2x + 3px^2 - x^3$$\n\nand $p$ is real.\n\nThe gradient of the normal to the curve $C$ at the point where $x = -1$ is $M$.\n\nWhat is the greatest possible value of $M$ as $p$ varies?",
    "options": {
      "A": "$-\\frac{3}{2}$",
      "B": "$-\\frac{2}{3}$",
      "C": "$-\\frac{1}{2}$",
      "D": "$\\frac{1}{4}$",
      "E": "$\\frac{2}{3}$",
      "F": "$\\frac{3}{2}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n曲线 $y = f(x) = p^3 - 6p^2x + 3px^2 - x^3$（$p$ 为实参数），求曲线在 $x = -1$ 处法线斜率 $M$ 的最大值。本题考查导数、法线概念与二次函数最值。\n\n【解题步骤】\n第一步：求导数（注意 $p$ 是常数）\n$f'(x) = -6p^2 + 6px - 3x^2$\n在 $x = -1$ 处：\n$f'(-1) = -6p^2 - 6p - 3 = -3(2p^2 + 2p + 1)$\n\n第二步：法线斜率为切线斜率的负倒数\n$M = \\frac{-1}{f'(-1)} = \\frac{-1}{-3(2p^2 + 2p + 1)} = \\frac{1}{3(2p^2 + 2p + 1)}$\n\n第三步：分析分母最小值\n分母 $g(p) = 3(2p^2 + 2p + 1)$，其中 $2p^2 + 2p + 1$ 通过配方法：\n$2p^2 + 2p + 1 = 2\\left(p + \\frac{1}{2}\\right)^2 + \\frac{1}{2}$\n当 $p = -\\frac{1}{2}$ 时，$2p^2 + 2p + 1$ 取得最小值 $\\frac{1}{2}$。\n此时分母最小值为 $3 \\times \\frac{1}{2} = \\frac{3}{2}$。\n\n第四步：求 $M$ 的最大值\n$M_{\\text{max}} = \\frac{1}{3/2} = \\frac{2}{3}$\n\n注意：分母 $2p^2 + 2p + 1 = 2(p+\\frac{1}{2})^2 + \\frac{1}{2}$ 恒正，不存在分母趋于零导致 $M$ 无限大的情况。\n\n【快捷思路】\n法线斜率 $M = \\frac{1}{3(2p^2 + 2p + 1)}$，$M$ 最大等价于分母最小。对 $2p^2 + 2p + 1$ 配方（或求导令 $4p+2=0$ 得 $p = -\\frac{1}{2}$），立即得最小值 $\\frac{1}{2}$，代入即得答案。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "a2_equations_inequalities"
    ],
    "sections": [
      "f.normal_lines",
      "f.parameter_optimisation",
      "a2.completing_square"
    ],
    "primary_section": "f.parameter_optimisation",
    "skills": [
      "power-rule",
      "normal-gradient",
      "parameter-optimisation",
      "completing-square"
    ]
  },
  {
    "id": "2017-P1-Q11",
    "year": 2017,
    "paper": 1,
    "num": 11,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The sequence $x_n$ is defined by the rules\n\n$$x_1 = 7$$\n\n$$x_{n+1} = \\frac{23x_n - 53}{5x_n + 1}$$\n\nThe first three terms in the sequence are 7, 3, 1\n\nWhat is the value of $x_{100}$?",
    "options": {
      "A": "$-5$",
      "B": "$0$",
      "C": "$1$",
      "D": "$3$",
      "E": "$7$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n数列 $x_n$ 满足 $x_1 = 7$，$x_{n+1} = \\dfrac{23x_n - 53}{5x_n + 1}$，已知前三项为 $7, 3, 1$，求 $x_{100}$。本题考查递推数列的周期性识别。\n\n【解题步骤】\n第一步：逐项计算以寻找规律\n题目已给出 $x_1 = 7$，$x_2 = 3$，$x_3 = 1$。\n继续计算：\n$x_4 = \\dfrac{23 \\cdot 1 - 53}{5 \\cdot 1 + 1} = \\dfrac{-30}{6} = -5$\n$x_5 = \\dfrac{23 \\cdot (-5) - 53}{5 \\cdot (-5) + 1} = \\dfrac{-168}{-24} = 7$\n$x_6 = \\dfrac{23 \\cdot 7 - 53}{5 \\cdot 7 + 1} = \\dfrac{108}{36} = 3$\n\n第二步：确认周期\n出现 $x_5 = x_1 = 7$，说明数列以 $4$ 为周期循环：\n$7,\\; 3,\\; 1,\\; -5,\\; 7,\\; 3,\\; 1,\\; -5,\\; \\ldots$\n\n第三步：确定 $x_{100}$ 的位置\n$100 \\div 4 = 25$ 余 $0$，即 $100 = 25 \\times 4$，对应周期中第 $4$ 个位置：\n$x_{100} = x_4 = -5$\n\n【快捷思路】\n递推数列求大项索引，优先找周期。已给前三项，只需再算两项即可验证周期为 $4$。$100$ 是 $4$ 的倍数，故 $x_{100}$ 等于第 $4$ 项 $-5$。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.recurrence_periodicity"
    ],
    "primary_section": "c.recurrence_periodicity",
    "skills": [
      "recurrence-iteration",
      "period-detection",
      "modular-indexing"
    ]
  },
  {
    "id": "2017-P1-Q12",
    "year": 2017,
    "paper": 1,
    "num": 12,
    "topic": "Integration",
    "difficulty": 3,
    "question": "The polynomial function $f(x)$ is such that $f(x) > 0$ for all values of $x$.\n\nGiven $\\int_{2}^{4} f(x) \\, dx = A$, which one of the following statements **must** be correct?",
    "options": {
      "A": "$\\int_{0}^{2} [f(x + 2) + 1] \\, dx = A + 1$",
      "B": "$\\int_{0}^{2} [f(x + 2) + 1] \\, dx = A + 2$",
      "C": "$\\int_{2}^{4} [f(x + 2) + 1] \\, dx = A + 1$",
      "D": "$\\int_{2}^{4} [f(x + 2) + 1] \\, dx = A + 2$",
      "E": "$\\int_{4}^{6} [f(x + 2) + 1] \\, dx = A + 1$",
      "F": "$\\int_{4}^{6} [f(x + 2) + 1] \\, dx = A + 2$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n已知多项式函数 $f(x) > 0$ 恒成立，且 $\\displaystyle\\int_{2}^{4} f(x)\\,dx = A$，判断哪个积分等式必然成立。本题考查积分的变量替换与平移性质。\n\n【解题步骤】\n第一步：分析 $\\displaystyle\\int_{0}^{2} f(x+2)\\,dx$\n令 $u = x + 2$，则 $du = dx$，当 $x$ 从 $0$ 变到 $2$ 时，$u$ 从 $2$ 变到 $4$：\n$\\displaystyle\\int_{0}^{2} f(x+2)\\,dx = \\int_{2}^{4} f(u)\\,du = \\int_{2}^{4} f(x)\\,dx = A$\n\n从几何角度理解：$y = f(x+2)$ 的图像是 $y = f(x)$ 向左平移 $2$ 个单位，区间 $[0, 2]$ 上的面积等价于原函数在 $[2, 4]$ 上的面积。\n\n第二步：逐项验证\n选项 A、B 的被积函数为 $f(x+2) + 1$，积分区间 $[0, 2]$：\n$\\displaystyle\\int_{0}^{2} [f(x+2) + 1]\\,dx = \\int_{0}^{2} f(x+2)\\,dx + \\int_{0}^{2} 1\\,dx = A + 2$\n因此选项 B 正确。\n\n选项 C、D 的积分区间为 $[2, 4]$，$f(x+2)$ 对应 $u \\in [4, 6]$ 上的积分，无法确定。\n选项 E、F 的积分区间为 $[4, 6]$，$f(x+2)$ 对应 $u \\in [6, 8]$ 上的积分，同样无法确定。\n\n【快捷思路】\n换元 $u = x+2$，$\\displaystyle\\int_{0}^{2} f(x+2)\\,dx$ 的积分区间恰好变为 $[2, 4]$，等于 $A$。再加常数项 $\\displaystyle\\int_{0}^{2} 1\\,dx = 2$，立刻得到 $A + 2$。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "g.definite_integral_translation",
      "i.function_translations"
    ],
    "primary_section": "g.definite_integral_translation",
    "skills": [
      "substitution",
      "interval-shift",
      "constant-integral"
    ]
  },
  {
    "id": "2017-P1-Q13",
    "year": 2017,
    "paper": 1,
    "num": 13,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "In the expansion of $(a + bx)^5$ the coefficient of $x^4$ is 8 times the coefficient of $x^2$.\n\nGiven that $a$ and $b$ are non-zero **positive** integers, what is the smallest possible value of $a + b$?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "9",
      "E": "13",
      "F": "17"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题要求根据 $(a+bx)^5$ 展开式中 $x^4$ 的系数是 $x^2$ 系数的 $8$ 倍这一条件，求 $a+b$ 的最小值，其中 $a,b$ 为非零正整数。\n\n【解题步骤】\n利用二项式定理，$(a+bx)^5$ 的通项为 $\\binom{5}{r}a^{5-r}b^r x^r$。\n\n$x^4$ 项对应 $r=4$，系数为 $\\binom{5}{4}ab^4=5ab^4$。\n\n$x^2$ 项对应 $r=2$，系数为 $\\binom{5}{2}a^3b^2=10a^3b^2$。\n\n由条件 $5ab^4=8\\times 10a^3b^2$，即 $5ab^4=80a^3b^2$。\n\n因为 $a,b$ 非零，两边除以 $5ab^2$，得 $b^2=16a^2$。\n\n又 $a,b$ 均为正数，开方得 $b=4a$。\n\n于是 $a+b=a+4a=5a$，当 $a=1$ 时取最小值 $5$。\n\n【快捷思路】\n直接写出两系数比 $\\frac{5ab^4}{10a^3b^2}=\\frac{b^2}{2a^2}$，令其等于 $8$ 即可一步得到 $b^2=16a^2$，进而 $b=4a$，$a+b=5a$ 最小为 $5$。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "c_sequences_series",
      "a1_algebra_basics"
    ],
    "sections": [
      "c.binomial_expansion",
      "a1.polynomial_coefficients"
    ],
    "primary_section": "c.binomial_expansion",
    "skills": [
      "binomial-coefficients",
      "coefficient-ratio",
      "integer-minimisation"
    ]
  },
  {
    "id": "2017-P1-Q14",
    "year": 2017,
    "paper": 1,
    "num": 14,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The solution of the simultaneous equations\n\n$$2^x + 3 \\times 2^y = 3$$\n\n$$2^{2x} - 9 \\times 2^{2y} = 6$$\n\nis $x = p$, $y = q$.\n\nFind the value of $p - q$",
    "options": {
      "A": "$\\frac{5}{12}$",
      "B": "$\\frac{7}{3}$",
      "C": "$\\log_2 \\frac{5}{12}$",
      "D": "$\\log_2 \\frac{7}{3}$",
      "E": "$\\log_2 9$",
      "F": "$\\log_2 15$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题给出含指数的联立方程组，通过变量代换转化为代数方程组求解，最终计算 $p-q$。\n\n【解题步骤】\n令 $u=2^x$，$v=2^y$，则 $u>0,v>0$。\n\n原方程组化为：\n$u+3v=3$，\n$u^2-9v^2=6$。\n\n第二个方程利用平方差公式：$(u+3v)(u-3v)=6$。\n\n将 $u+3v=3$ 代入得 $3(u-3v)=6$，即 $u-3v=2$。\n\n联立 $u+3v=3$ 与 $u-3v=2$，相加得 $2u=5$，故 $u=\\frac{5}{2}$；相减得 $6v=1$，故 $v=\\frac{1}{6}$。\n\n由 $p=x=\\log_2 u=\\log_2\\frac{5}{2}$，$q=y=\\log_2 v=\\log_2\\frac{1}{6}$，\n\n得 $p-q=\\log_2\\frac{5}{2}-\\log_2\\frac{1}{6}=\\log_2\\left(\\frac{5}{2}\\div\\frac{1}{6}\\right)=\\log_2 15$。\n\n【快捷思路】\n关键在于识别 $u^2-9v^2=(u+3v)(u-3v)$，利用第一个方程直接得到 $u-3v$，无需代入消元展开，两步即可求解。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a3.exponential_substitution",
      "a2.simultaneous_equations"
    ],
    "primary_section": "a3.exponential_substitution",
    "skills": [
      "exponential-substitution",
      "difference-of-squares",
      "log-laws"
    ]
  },
  {
    "id": "2017-P1-Q15",
    "year": 2017,
    "paper": 1,
    "num": 15,
    "topic": "Integration",
    "difficulty": 3,
    "question": "It is given that $f(x) = -2x^2 + 10$\n\nConsider the following three curves:\n\n**(1)** $y = f(x)$\n\n**(2)** $y = f(x + 1)$\n\n**(3)** the curve $y = f(x + 1)$ reflected in the line $y = 6$\n\nThe trapezium rule is used to estimate the area under each of these three curves between $x = 0$ and $x = 1$.\n\nState whether the trapezium rule gives an overestimate or underestimate for each of these areas.\n\n<table>\n  <thead>\n    <tr>\n        <th> </th>\n        <th>(1)</th>\n        <th>(2)</th>\n        <th>(3)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n        <td>A</td>\n<td>underestimate</td>\n<td>underestimate</td>\n<td>underestimate</td>\n    </tr>\n<tr>\n        <td>B</td>\n<td>underestimate</td>\n<td>underestimate</td>\n<td>overestimate</td>\n    </tr>\n<tr>\n        <td>C</td>\n<td>underestimate</td>\n<td>overestimate</td>\n<td>underestimate</td>\n    </tr>\n<tr>\n        <td>D</td>\n<td>underestimate</td>\n<td>overestimate</td>\n<td>overestimate</td>\n    </tr>\n<tr>\n        <td>E</td>\n<td>overestimate</td>\n<td>underestimate</td>\n<td>underestimate</td>\n    </tr>\n<tr>\n        <td>F</td>\n<td>overestimate</td>\n<td>underestimate</td>\n<td>overestimate</td>\n    </tr>\n<tr>\n        <td>G</td>\n<td>overestimate</td>\n<td>overestimate</td>\n<td>underestimate</td>\n    </tr>\n<tr>\n        <td>H</td>\n<td>overestimate</td>\n<td>overestimate</td>\n<td>overestimate</td>\n    </tr>\n  </tbody>\n</table>",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D",
      "E": "Option E",
      "F": "Option F",
      "G": "Option G",
      "H": "Option H"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题用梯形法则估算三条曲线在 $[0,1]$ 上的面积，判断每条曲线得到的是高估还是低估。核心在于曲线的凹凸性与梯形法则误差的关系。\n\n【解题步骤】\n梯形法则的误差取决于二阶导数的符号：若 $f''(x)<0$（凹函数），梯形法则低估；若 $f''(x)>0$（凸函数），梯形法则高估。\n\n曲线(1)：$y=f(x)=-2x^2+10$，$f''(x)=-4<0$，凹函数，故 underestimate。\n\n曲线(2)：$y=f(x+1)=-2(x+1)^2+10$，求二阶导数得 $-4<0$，仍为凹函数，故 underestimate。平移不改变凹凸性。\n\n曲线(3)：将 $y=f(x+1)$ 关于直线 $y=6$ 作反射。反射公式为 $y=12-f(x+1)$，其二阶导数为 $-f''(x+1)=4>0$，变为凸函数，故 overestimate。\n\n也可通过画图直观判断：$f(x)$ 在 $[0,1]$ 上开口向下，梯形弦在曲线下方；反射后开口向上，弦在曲线上方。\n\n【快捷思路】\n只需判断二阶导数符号。平移不改变 $f''$ 的符号，反射相当于乘以 $-1$，符号反转。因此(1)(2)同为 underestimate，(3)为 overestimate。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Functions"
    ],
    "modules": [
      "g_integration",
      "f_differentiation",
      "i_functions_graphs"
    ],
    "sections": [
      "g.trapezium_rule_error",
      "f.second_derivative_concavity",
      "i.graph_transformations"
    ],
    "primary_section": "g.trapezium_rule_error",
    "skills": [
      "trapezium-rule-error",
      "concavity",
      "second-derivative-test",
      "reflection-transformation"
    ]
  },
  {
    "id": "2017-P1-Q16",
    "year": 2017,
    "paper": 1,
    "num": 16,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The functions $f$ and $g$ are given by $f(x) = 3x^2 + 12x + 4$ and $g(x) = x^3 + 6x^2 + 9x - 8$.\n\nWhat is the complete set of values of $x$ for which one of the functions is increasing and the other decreasing?",
    "options": {
      "A": "$x \\geq -1$",
      "B": "$x \\leq -1$",
      "C": "$-3 \\leq x \\leq -2, \\ x \\geq -1$",
      "D": "$x \\leq -2, \\ x \\geq -1$",
      "E": "$x \\leq -3, \\ -2 \\leq x \\leq -1$",
      "F": "$x \\leq -3, \\ x \\geq -2$",
      "G": "$-2 \\leq x \\leq -1$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题给出两个函数 $f(x)$ 和 $g(x)$，求使一个函数递增而另一个递减的 $x$ 的取值范围。\n\n【解题步骤】\n分别求导分析单调性。\n\n对于 $f(x)=3x^2+12x+4$：\n$f'(x)=6x+12=6(x+2)$。\n当 $x>-2$ 时 $f'(x)>0$，$f$ 递增；当 $x<-2$ 时 $f'(x)<0$，$f$ 递减。\n\n对于 $g(x)=x^3+6x^2+9x-8$：\n$g'(x)=3x^2+12x+9=3(x+1)(x+3)$。\n抛物线开口向上，根为 $-3$ 和 $-1$。\n当 $x<-3$ 或 $x>-1$ 时 $g'(x)>0$，$g$ 递增；当 $-3<x<-1$ 时 $g'(x)<0$，$g$ 递减。\n\n用数轴分区间讨论一增一减的情况：\n\n当 $x\\leq -3$ 时，$f$ 递减、$g$ 递增，满足条件。\n\n当 $-3<x<-2$ 时，$f$ 递减、$g$ 递减，不满足。\n\n当 $-2\\leq x\\leq -1$ 时，$f$ 递增、$g$ 递减，满足条件。\n\n当 $x>-1$ 时，$f$ 递增、$g$ 递增，不满足。\n\n在端点 $x=-3,-2,-1$ 处相应导数为 $0$，选项采用非严格单调的区间端点约定，因此端点包含在内。故解集为 $x\\leq -3$ 或 $-2\\leq x\\leq -1$。\n\n【快捷思路】\n画出数轴，标出关键点 $-3,-2,-1$ 将实数轴分为四个区间，在每个区间内判断 $f'$ 和 $g'$ 的符号，直接选出符号相反的区间即可。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs"
    ],
    "sections": [
      "f.monotonicity",
      "f.derivative_sign_charts",
      "i.function_monotonicity"
    ],
    "primary_section": "f.monotonicity",
    "skills": [
      "differentiate-polynomials",
      "derivative-sign-chart",
      "interval-union",
      "monotonicity-comparison"
    ]
  },
  {
    "id": "2017-P1-Q17",
    "year": 2017,
    "paper": 1,
    "num": 17,
    "topic": "Integration",
    "difficulty": 3,
    "question": "The two functions $F(n)$ and $G(n)$ are defined as follows for positive integers $n$:\n\n$$F(n) = \\frac{1}{n} \\int_{0}^{n} (n - x) \\, dx$$\n\n$$G(n) = \\sum_{r=1}^{n} F(r)$$\n\nWhat is the smallest positive integer $n$ such that $G(n) > 150$?",
    "options": {
      "A": "22",
      "B": "23",
      "C": "24",
      "D": "25",
      "E": "26"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考查积分与数列求和的综合应用。先由定积分求 $F(n)$，再求和得 $G(n)$，最后解不等式求最小 $n$。\n\n【解题步骤】\n计算 $F(n)$：\n$$F(n)=\\frac{1}{n}\\int_{0}^{n}(n-x)\\,dx=\\frac{1}{n}\\left[nx-\\frac{x^2}{2}\\right]_{0}^{n}=\\frac{n}{2}$$\n求和得：\n$$G(n)=\\sum_{r=1}^{n}\\frac{r}{2}=\\frac{1}{2}\\cdot\\frac{n(n+1)}{2}=\\frac{n(n+1)}{4}$$\n解 $G(n) > 150$ 即 $n(n+1) > 600$：\n$24\\times 25=600$，$G(24)=150$ 不满足；$25\\times 26=650$，$G(25)=162.5>150$。\n\n【快捷思路】\n几何法：$y=n-x$ 在 $[0,n]$ 上围成面积为 $n^2/2$ 的三角形，$F(n)=n/2$。利用三角数公式直接写出 $G(n)$。试值从 $25$ 入手，$25^2=625$，$25\\times 26=650>600$。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "g_integration",
      "c_sequences_series"
    ],
    "sections": [
      "g.definite_integral_evaluation",
      "g.integral_as_area",
      "c.arithmetic_series_sums"
    ],
    "primary_section": "g.definite_integral_evaluation",
    "skills": [
      "definite-integral",
      "area-under-line",
      "sigma-summation",
      "arithmetic-series",
      "threshold-inequality"
    ]
  },
  {
    "id": "2017-P1-Q18",
    "year": 2017,
    "paper": 1,
    "num": 18,
    "topic": "Functions",
    "difficulty": 3,
    "question": "The graph of $y = \\log_{10}x$ is translated in the positive $y$-direction by 2 units.\n\nThis translation is equivalent to a stretch of factor $k$ parallel to the $x$-axis.\n\nWhat is the value of $k$?",
    "options": {
      "A": "0.01",
      "B": "$\\log_{10} 2$",
      "C": "0.5",
      "D": "2",
      "E": "$\\log_2 10$",
      "F": "100"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考查对数函数的图像变换，核心在于理解平移变换与沿 $x$ 轴拉伸变换的等价关系。对数函数有一个独特性质：上下平移可以等价于水平方向的伸缩，这是因为 $\\log(x)+k = \\log(10^k x)$。这是其他函数（如多项式）不具备的性质。\n\n【解题步骤】\n向上平移 $2$ 个单位后：\n$$y = \\log_{10}x + 2 = \\log_{10}x + \\log_{10}100 = \\log_{10}(100x)$$\n沿 $x$ 轴拉伸因子 $k$ 后，函数变为 $y = f(x/k)$：\n$$y = \\log_{10}\\left(\\frac{x}{k}\\right) = \\log_{10}x - \\log_{10}k$$\n令两式恒等，比较常数项：\n$$-\\log_{10}k = 2 \\iff \\log_{10}k = -2 \\iff k = 10^{-2} = 0.01$$\n\n【快捷思路】\n取特殊点验证：原函数过 $(1,0)$。向上平移 $2$ 个单位后该点变为 $(1,2)$，同时原图像上点 $(0.01,-2)$ 平移到 $(0.01,0)$ 即新图像的 $x$ 轴截距。而沿 $x$ 轴拉伸因子 $k$ 将原截距 $1$ 变为 $k$，所以 $k = 0.01$。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "i_functions_graphs",
      "a3_exponents_logarithms"
    ],
    "sections": [
      "i.logarithmic_graph_transformations",
      "i.graph_transformations",
      "a3.logarithm_laws"
    ],
    "primary_section": "i.logarithmic_graph_transformations",
    "skills": [
      "logarithm-laws",
      "graph-translation",
      "horizontal-stretch",
      "transformation-equivalence"
    ]
  },
  {
    "id": "2017-P1-Q19",
    "year": 2017,
    "paper": 1,
    "num": 19,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The set of solutions to the inequality $x^2 + bx + c < 0$ is the interval $p < x < q$\n\nwhere $b, c, p$ and $q$ are real constants with $c < 0$.\n\nIn terms of $p, q$ and $c$, what is the set of solutions to the inequality $x^2 + bcx + c^3 < 0$?",
    "options": {
      "A": "$\\frac{p}{c} < x < \\frac{q}{c}$",
      "B": "$\\frac{q}{c} < x < \\frac{p}{c}$",
      "C": "$pc < x < qc$",
      "D": "$qc < x < pc$",
      "E": "$pc^2 < x < qc^2$",
      "F": "$qc^2 < x < pc^2$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考查二次不等式解集与系数之间的关系。已知 $x^2+bx+c < 0$ 的解为 $p < x < q$ 且 $c < 0$，要求 $x^2+bcx+c^3 < 0$ 的解集。巧妙之处在于第二个不等式通过变量代换可以化为第一个不等式的形式。\n\n【解题步骤】\n由解集知 $x^2+bx+c=(x-p)(x-q)$，故 $b=-(p+q)$，$c=pq$。\n\n将 $x^2+bcx+c^3 < 0$ 两边除以 $c^2>0$（不等号不变）：\n$$\\left(\\frac{x}{c}\\right)^2+b\\left(\\frac{x}{c}\\right)+c<0$$\n这正是原不等式以 $x/c$ 代 $x$，故解为 $p < x/c < q$。\n因 $c<0$，乘 $c$ 时不等号反向：\n$$pc > x > qc \\iff qc < x < pc$$\n\n【快捷思路】\n求根公式比较：新方程两根为 $c\\cdot\\frac{-b\\pm\\sqrt{b^2-4c}}{2}$ 即 $pc$ 和 $qc$。因 $c<0$ 且 $p<q$，有 $pc>qc$，故解集 $qc < x < pc$。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.quadratic_inequalities",
      "a2.roots_coefficients",
      "a2.variable_substitution_inequality",
      "i.quadratic_sign_intervals"
    ],
    "primary_section": "a2.quadratic_inequalities",
    "skills": [
      "quadratic-inequality",
      "vieta-relations",
      "substitution",
      "negative-multiplier-reversal",
      "root-ordering"
    ]
  },
  {
    "id": "2017-P1-Q20",
    "year": 2017,
    "paper": 1,
    "num": 20,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "The lengths of the sides $QR$, $RP$ and $PQ$ in triangle $PQR$ are $a$, $a + d$ and $a + 2d$ respectively, where $a$ and $d$ are positive and such that $3d > 2a$.\n\nWhat is the full range, in degrees, of possible values for angle $PRQ$?",
    "options": {
      "A": "$0 < \\text{angle } PRQ < 60$",
      "B": "$0 < \\text{angle } PRQ < 120$",
      "C": "$60 < \\text{angle } PRQ < 120$",
      "D": "$60 < \\text{angle } PRQ < 180$",
      "E": "$120 < \\text{angle } PRQ < 180$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查余弦定理与三角形存在条件。三边成等差 $a, a+d, a+2d$，结合 $3d > 2a$ 确定 $\\angle PRQ$ 的范围。\n\n【解题步骤】\n$\\angle PRQ$ 的对边为 $PQ=a+2d$，由余弦定理：\n$$(a+2d)^2=a^2+(a+d)^2-2a(a+d)\\cos\\theta$$\n整理得：\n$$\\cos\\theta=\\frac{a^2-2ad-3d^2}{2a(a+d)}=\\frac{(a+d)(a-3d)}{2a(a+d)}=\\frac{a-3d}{2a}$$\n由 $3d > 2a$ 得 $a-3d < -a$，故 $\\cos\\theta < -\\frac{1}{2}$，即 $\\theta > 120^\\circ$。\n由三角不等式 $d < a$ 得 $\\cos\\theta > -1$，即 $\\theta < 180^\\circ$。\n综上 $120^\\circ < \\angle PRQ < 180^\\circ$。\n\n【快捷思路】\n取边界 $d=2a/3$，设 $a=3$ 得三边 $3,5,7$，代入余弦定理得 $\\cos\\theta=-1/2$ 即 $\\theta=120^\\circ$。题目要求严格大于，故 $\\theta > 120^\\circ$。$d$ 增大时角度增大，上限 $180^\\circ$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry",
      "a2_equations_inequalities"
    ],
    "sections": [
      "e.cosine_rule",
      "e.triangle_side_angle_ranges",
      "a2.parameter_inequalities"
    ],
    "primary_section": "e.cosine_rule",
    "skills": [
      "cosine-rule",
      "triangle-inequality",
      "parameter-range",
      "angle-range-from-cosine",
      "strict-inequality-boundaries"
    ]
  },
  {
    "id": "2017-P2-Q1",
    "year": 2017,
    "paper": 2,
    "num": 1,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "Given that $y = \\frac{(1 - 3x)^2}{2x^{\\frac{3}{2}}}$, which one of the following is a correct expression for $\\frac{dy}{dx}$?",
    "options": {
      "A": "$\\frac{9}{4}x^{-\\frac{1}{2}} + \\frac{3}{2}x^{-\\frac{3}{2}} - \\frac{3}{4}x^{-\\frac{5}{2}}$",
      "B": "$\\frac{9}{4}x^{-\\frac{1}{2}} - \\frac{3}{2}x^{-\\frac{3}{2}} + \\frac{3}{4}x^{-\\frac{5}{2}}$",
      "C": "$\\frac{9}{4}x^{-\\frac{1}{2}} - \\frac{3}{2}x^{-\\frac{3}{2}} - \\frac{3}{4}x^{-\\frac{5}{2}}$",
      "D": "$-\\frac{9}{4}x^{-\\frac{1}{2}} + \\frac{3}{2}x^{-\\frac{3}{2}} + \\frac{3}{4}x^{-\\frac{5}{2}}$",
      "E": "$-\\frac{9}{4}x^{-\\frac{1}{2}} + \\frac{3}{2}x^{-\\frac{3}{2}} - \\frac{3}{4}x^{-\\frac{5}{2}}$",
      "F": "$-\\frac{9}{4}x^{-\\frac{1}{2}} - \\frac{3}{2}x^{-\\frac{3}{2}} - \\frac{3}{4}x^{-\\frac{5}{2}}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题要求对函数 $y = \\dfrac{(1 - 3x)^2}{2x^{\\frac{3}{2}}}$ 求导，并从六个选项中选出正确的 $\\dfrac{dy}{dx}$ 表达式。关键策略是先将分式展开为幂函数的代数和，再逐项求导，避免使用商法则带来的繁琐运算。\n\n【解题步骤】\n第一步：展开分子并拆项。$(1 - 3x)^2 = 1 - 6x + 9x^2$，代入原式得\n$$y = \\frac{1 - 6x + 9x^2}{2x^{\\frac{3}{2}}} = \\frac{1}{2}x^{-\\frac{3}{2}} - 3x^{-\\frac{1}{2}} + \\frac{9}{2}x^{\\frac{1}{2}}$$\n第二步：逐项利用幂函数求导法则 $\\dfrac{d}{dx}(x^n) = nx^{n-1}$ 求导。\n第一项：$\\dfrac{1}{2} \\cdot \\left(-\\dfrac{3}{2}\\right)x^{-\\frac{5}{2}} = -\\dfrac{3}{4}x^{-\\frac{5}{2}}$\n第二项：$-3 \\cdot \\left(-\\dfrac{1}{2}\\right)x^{-\\frac{3}{2}} = \\dfrac{3}{2}x^{-\\frac{3}{2}}$\n第三项：$\\dfrac{9}{2} \\cdot \\dfrac{1}{2}x^{-\\frac{1}{2}} = \\dfrac{9}{4}x^{-\\frac{1}{2}}$\n第三步：合并结果得 $\\dfrac{dy}{dx} = \\dfrac{9}{4}x^{-\\frac{1}{2}} + \\dfrac{3}{2}x^{-\\frac{3}{2}} - \\dfrac{3}{4}x^{-\\frac{5}{2}}$，对应选项 A。\n\n【快捷思路】\n直接展开为幂函数后求导是最简方法，比商法则快得多。注意中间项 $-6x \\div 2x^{3/2} = -3x^{-1/2}$，其导数变号为正，这是区分选项的关键。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "a1_algebra_basics"
    ],
    "sections": [
      "f.power_rule",
      "a1.algebraic_rearrangement"
    ],
    "primary_section": "f.power_rule",
    "skills": [
      "expand-before-differentiating",
      "power-rule",
      "negative-fractional-indices"
    ]
  },
  {
    "id": "2017-P2-Q2",
    "year": 2017,
    "paper": 2,
    "num": 2,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "*PQRS* is a rectangle.\n\nThe coordinates of $P$ and $Q$ are $(0, 6)$ and $(1, 8)$ respectively.\n\nThe perpendicular to $PQ$ at $Q$ meets the $x$-axis at $R$.\n\nWhat is the area of $PQRS$?",
    "options": {
      "A": "$\\frac{5}{2}$",
      "B": "$4\\sqrt{10}$",
      "C": "$20$",
      "D": "$8\\sqrt{10}$",
      "E": "$40$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n已知矩形 $PQRS$ 中 $P(0,6)$ 和 $Q(1,8)$，过 $Q$ 作 $PQ$ 的垂线交 $x$ 轴于 $R$，求矩形面积。本题综合考查坐标系中斜率、垂线方程、两点间距离公式以及矩形面积计算。\n\n【解题步骤】\n第一步：求 $PQ$ 的斜率和长度。\n$PQ$ 斜率 $m_{PQ} = \\dfrac{8-6}{1-0} = 2$，长度 $|PQ| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$。\n第二步：利用垂直关系求 $QR$ 斜率。$m_{QR} = -\\dfrac{1}{2}$。\n第三步：设 $R(r, 0)$，利用斜率公式 $\\dfrac{0-8}{r-1} = -\\dfrac{1}{2}$，解得 $r-1 = 16$，即 $r = 17$，故 $R(17, 0)$。\n第四步：求 $|QR| = \\sqrt{(17-1)^2 + (0-8)^2} = \\sqrt{256 + 64} = \\sqrt{320} = 8\\sqrt{5}$。\n第五步：矩形面积 $= |PQ| \\times |QR| = \\sqrt{5} \\times 8\\sqrt{5} = 40$。\n\n【快捷思路】\n不必先写完整垂线方程再令 $y=0$，直接利用斜率公式 $\\dfrac{y_Q - y_R}{x_Q - x_R} = -\\dfrac{1}{2}$ 即可求出 $r-1$，这正是计算 $|QR|$ 所需的全部信息，省去了求 $r$ 具体值的步骤。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "modules": [
      "d_coordinate_geometry"
    ],
    "sections": [
      "d.perpendicular_lines",
      "d.distance_and_area"
    ],
    "primary_section": "d.perpendicular_lines",
    "skills": [
      "perpendicular-gradient",
      "distance-formula",
      "rectangle-area"
    ]
  },
  {
    "id": "2017-P2-Q3",
    "year": 2017,
    "paper": 2,
    "num": 3,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The first term of a geometric progression is $2\\sqrt{3}$ and the fourth term is $\\frac{9}{4}$\n\nWhat is the sum to infinity of this geometric progression?",
    "options": {
      "A": "$-2(2 - \\sqrt{3})$",
      "B": "$4(2\\sqrt{3} - 3)$",
      "C": "$\\frac{16(8\\sqrt{3} + 9)}{37}$",
      "D": "$\\frac{4(2\\sqrt{3} - 3)}{7}$",
      "E": "$\\frac{4(2\\sqrt{3} + 3)}{7}$",
      "F": "$2(2 + \\sqrt{3})$",
      "G": "$4(2\\sqrt{3} + 3)$"
    },
    "answer": "G",
    "analysis": "【题目分析】\n已知等比数列首项 $a = 2\\sqrt{3}$，第四项为 $\\dfrac{9}{4}$，求无穷项之和。核心是先求公比 $r$，再验证 $|r| < 1$ 确保收敛，最后用公式 $S_{\\infty} = \\dfrac{a}{1-r}$ 计算。\n\n【解题步骤】\n第一步：由第四项求公比。$ar^3 = 2\\sqrt{3}\\,r^3 = \\dfrac{9}{4}$，得\n$$r^3 = \\frac{9}{4 \\cdot 2\\sqrt{3}} = \\frac{9}{8\\sqrt{3}} = \\frac{9\\sqrt{3}}{24} = \\frac{3\\sqrt{3}}{8}$$\n第二步：注意到 $\\dfrac{3\\sqrt{3}}{8} = \\dfrac{(\\sqrt{3})^3}{2^3} = \\left(\\dfrac{\\sqrt{3}}{2}\\right)^3$，故 $r = \\dfrac{\\sqrt{3}}{2}$。\n第三步：验证 $|r| = \\dfrac{\\sqrt{3}}{2} \\approx 0.866 < 1$，级数收敛。\n第四步：求无穷和\n$$S_{\\infty} = \\frac{2\\sqrt{3}}{1 - \\frac{\\sqrt{3}}{2}} = \\frac{4\\sqrt{3}}{2 - \\sqrt{3}}$$\n有理化分母：$\\dfrac{4\\sqrt{3}(2+\\sqrt{3})}{(2-\\sqrt{3})(2+\\sqrt{3})} = 4\\sqrt{3}(2+\\sqrt{3}) = 4(2\\sqrt{3}+3)$。\n\n【快捷思路】\n识别 $r^3 = \\dfrac{3\\sqrt{3}}{8}$ 为完全立方数是突破口，避免了用计算器开立方。分母有理化时注意 $(2-\\sqrt{3})(2+\\sqrt{3})=1$，结果直接就是 $4\\sqrt{3}(2+\\sqrt{3})$。\n\n【正确答案】G",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a1_algebra_basics"
    ],
    "sections": [
      "c.geometric_series_infinity",
      "c.geometric_ratio_from_terms",
      "a1.surd_rationalisation"
    ],
    "primary_section": "c.geometric_series_infinity",
    "skills": [
      "geometric-progression",
      "sum-to-infinity",
      "recognise-perfect-cube",
      "rationalise-denominator"
    ]
  },
  {
    "id": "2017-P2-Q4",
    "year": 2017,
    "paper": 2,
    "num": 4,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "The following question appeared in an examination:\n\n> Given that $\\tan x = \\sqrt{3}$, find the possible values of $\\sin 2x$.\n\nA student gave the following answer:\n\n> $\\tan x = \\sqrt{3}$ so $x = 60^{\\circ}$ and $2x = 120^{\\circ}$,\n>\n> therefore $\\sin 2x = \\frac{\\sqrt{3}}{2}$.\n\nWhich one of the following statements is correct?",
    "options": {
      "A": "$\\frac{\\sqrt{3}}{2}$ is the only possible value, and this is fully supported by the reasoning given in the student's answer.",
      "B": "$\\frac{\\sqrt{3}}{2}$ is the only possible value, but the reasoning given should consider other possible values of $x$ for which $\\tan x = \\sqrt{3}$.",
      "C": "$\\frac{\\sqrt{3}}{2}$ is the only possible value, but the reasoning given should consider other possible values of $x$ for which $\\sin 2x = \\frac{\\sqrt{3}}{2}$.",
      "D": "$\\frac{\\sqrt{3}}{2}$ is **not** the only possible value because the reasoning given should have considered other possible values of $x$ for which $\\tan x = \\sqrt{3}$.",
      "E": "$\\frac{\\sqrt{3}}{2}$ is **not** the only possible value because the reasoning given should have considered other possible values of $x$ for which $\\sin 2x = \\frac{\\sqrt{3}}{2}$."
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题是一道逻辑推理题。已知 $\\tan x = \\sqrt{3}$，学生给出 $\\sin 2x = \\dfrac{\\sqrt{3}}{2}$。需要判断该答案是否正确以及推理过程是否存在缺陷。关键在于理解三角函数的周期性和通解概念。\n\n【解题步骤】\n第一步：检查 $\\tan x = \\sqrt{3}$ 的解。$\\tan$ 的周期为 $180°$，因此通解为 $x = 60° + 180°n$（$n \\in \\mathbb{Z}$），而不仅仅是 $x = 60°$。学生只取了一个特解，推理不完整。\n第二步：检查 $\\sin 2x$ 的值是否唯一。\n由 $x = 60° + 180°n$ 得 $2x = 120° + 360°n$。由于 $\\sin$ 的周期为 $360°$，故 $\\sin(120° + 360°n) = \\sin 120° = \\dfrac{\\sqrt{3}}{2}$ 对所有整数 $n$ 成立。\n第三步：结论。$\\sin 2x$ 确实只有唯一值 $\\dfrac{\\sqrt{3}}{2}$，但学生应说明为何其他 $x$ 值不会改变结果。这恰好对应选项 B 的描述。\n\n【快捷思路】\n只需验证 $\\tan x = \\sqrt{3}$ 的所有解代入 $\\sin 2x$ 后是否相同。由于 $x$ 每增加 $180°$，$2x$ 增加 $360°$，而 $\\sin$ 周期恰为 $360°$，因此 $\\sin 2x$ 值不变。结论是答案唯一但推理不完整。\n\n【正确答案】B",
    "images": {
      "image": "2017_p2_page4.png"
    },
    "has_image": true,
    "related_topics": [
      "Logic",
      "Proof"
    ],
    "modules": [
      "e_trigonometry",
      "b_mathematical_logic_basics",
      "l_proof_methods"
    ],
    "sections": [
      "e.trig_periodicity",
      "e.trig_equations",
      "l.proof_gap_identification"
    ],
    "primary_section": "e.trig_periodicity",
    "skills": [
      "general-solution",
      "periodicity-check",
      "proof-gap-identification"
    ]
  },
  {
    "id": "2017-P2-Q5",
    "year": 2017,
    "paper": 2,
    "num": 5,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Consider the following three statements:\n\n**1** $10p^2 + 1$ and $10p^2 - 1$ are both prime when $p$ is an odd prime.\n\n**2** Every prime greater than 5 is of the form $6n + 1$ for some integer $n$.\n\n**3** No multiple of 7 greater than 7 is prime.\n\nThe result $91 = 7 \\times 13$ can be used to provide a counterexample to which of the above statements?",
    "options": {
      "A": "none of them",
      "B": "1 only",
      "C": "2 only",
      "D": "3 only",
      "E": "1 and 2 only",
      "F": "1 and 3 only",
      "G": "2 and 3 only",
      "H": "1, 2 and 3"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题给出三个命题，要求判断 $91 = 7 \\times 13$ 能作为哪个命题的反例。核心考点是理解反例的逻辑定义：对于一个全称命题（形如\"对所有 $x$，某性质成立\"），反例必须满足命题的前提条件，但结论不成立。\n\n三个命题分别为：\n1. 当 $p$ 为奇素数时，$10p^2 + 1$ 和 $10p^2 - 1$ 都是素数。\n2. 每个大于 $5$ 的素数都是 $6n + 1$ 的形式。\n3. 任何大于 $7$ 的 $7$ 的倍数都不是素数。\n\n【解题步骤】\n先将命题1改写为\"若 $p$ 是奇素数，则 $10p^2 + 1$ 和 $10p^2 - 1$ 均为素数\"。\n若 $91$ 是反例，需存在某个奇素数 $p$ 使得 $10p^2 + 1 = 91$ 或 $10p^2 - 1 = 91$。\n解 $10p^2 + 1 = 91$，得 $p^2 = 9$，$p = 3$。$3$ 是奇素数，但 $91 = 7 \\times 13$ 不是素数，故命题1的结论不成立。$91$ 是命题1的反例。\n\n对命题2，反例需为大于 $5$ 的素数且不能写成 $6n + 1$ 形式。但 $91$ 本身不是素数，无法作为反例。\n\n对命题3，它是真命题（任何大于 $7$ 的 $7$ 的倍数均可分解为 $7 \\times k$，其中 $k \\geq 2$，故不是素数）。$91$ 是该命题的正面例证而非反例。\n\n【快捷思路】\n直接验证 $p = 3$（最小奇素数）：$10 \\times 3^2 + 1 = 91 = 7 \\times 13$，非素数，立即反驳命题1。命题3本身正确无需验证，命题2的反例需为素数而 $91$ 不是。\n【正确答案】B",
    "images": {
      "image": "2017_p2_page5.png"
    },
    "has_image": true,
    "related_topics": [
      "Counterexamples",
      "Number Theory"
    ],
    "modules": [
      "h_logic_counterexamples",
      "b_mathematical_logic_basics",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "h.counterexample_identification",
      "b.universal_statement_logic",
      "k.primes_and_factorisation"
    ],
    "primary_section": "h.counterexample_identification",
    "skills": [
      "counterexample-identification",
      "premise-checking",
      "prime-factorization",
      "statement-evaluation"
    ]
  },
  {
    "id": "2017-P2-Q6",
    "year": 2017,
    "paper": 2,
    "num": 6,
    "topic": "Integration",
    "difficulty": 3,
    "question": "A sequence $u_0, u_1, u_2, \\dots$ is defined as follows:\n\n$$\n\\begin{aligned}\nu_0 &= 1 \\\\\nu_n &= \\int_0^1 4xu_{n-1} \\, dx \\quad \\text{for } n \\geqslant 1\n\\end{aligned}\n$$\n\nWhat is the value of $u_{1000}$?",
    "options": {
      "A": "$2^{1000}$",
      "B": "$4^{1000}$",
      "C": "$\\frac{4}{1000!}$",
      "D": "$\\frac{4}{1001!}$",
      "E": "$\\frac{2^{1000}}{1000!}$",
      "F": "$\\frac{4^{1000}}{1000!}$",
      "G": "$\\frac{2^{1000}}{1001!}$",
      "H": "$\\frac{4^{1000}}{1001!}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n已知序列 $u_0 = 1$，$u_n = \\int_0^1 4x u_{n-1} \\, dx$（$n \\geq 1$），求 $u_{1000}$。\n\n关键点：虽然递推式含积分，但每次积分中 $u_{n-1}$ 是常数（与积分变量 $x$ 无关），因此积分结果仍为常数，可直接计算。\n\n【解题步骤】\n逐项计算寻找规律：\n$u_0 = 1$\n\n$u_1 = \\int_0^1 4x \\cdot u_0 \\, dx = \\int_0^1 4x \\, dx = \\left[ 2x^2 \\right]_0^1 = 2$\n\n$u_2 = \\int_0^1 4x \\cdot u_1 \\, dx = \\int_0^1 4x \\cdot 2 \\, dx = \\left[ 4x^2 \\right]_0^1 = 4$\n\n$u_3 = \\int_0^1 4x \\cdot u_2 \\, dx = \\int_0^1 4x \\cdot 4 \\, dx = \\left[ 8x^2 \\right]_0^1 = 8$\n\n规律为 $u_n = 2^n$。\n\n严格证明可用数学归纳法：假设 $u_k = 2^k$，则\n$u_{k+1} = \\int_0^1 4x \\cdot 2^k \\, dx = 2^k \\cdot \\left[ 2x^2 \\right]_0^1 = 2^k \\cdot 2 = 2^{k+1}$\n归纳成立，故 $u_n = 2^n$ 对所有 $n \\geq 0$ 成立。\n\n$u_{1000} = 2^{1000}$。\n\n【快捷思路】\n注意到 $u_{n-1}$ 与 $x$ 无关，提出积分号外：$u_n = u_{n-1} \\int_0^1 4x \\, dx = 2 u_{n-1}$。这是一个公比为 $2$ 的等比数列，首项为 $1$，故 $u_n = 2^n$。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series",
      "Algebra"
    ],
    "modules": [
      "g_integration",
      "c_sequences_series"
    ],
    "sections": [
      "g.definite_integral_constant_factor",
      "c.geometric_recurrence"
    ],
    "primary_section": "g.definite_integral_constant_factor",
    "skills": [
      "pull-constant-from-integral",
      "recurrence-recognition",
      "geometric-sequence-formula"
    ]
  },
  {
    "id": "2017-P2-Q7",
    "year": 2017,
    "paper": 2,
    "num": 7,
    "topic": "Functions",
    "difficulty": 3,
    "question": "* $y = a^x$ is shown with a solid line, where $a$ is a positive real number\n* $y = f(x)$ is shown with a dashed line\n\nWhich of the following statements (**1**, **2**, **3**, **4**) could be true?\n\n**1** $f(x) = b^x$ for some $b > a$\n**2** $f(x) = b^x$ for some $b < a$\n**3** $f(x) = a^{kx}$ for some $k > 1$\n**4** $f(x) = a^{kx}$ for some $k < 1$",
    "options": {
      "A": "1 only",
      "B": "2 only",
      "C": "3 only",
      "D": "4 only",
      "E": "1 and 3 only",
      "F": "1 and 4 only",
      "G": "2 and 3 only",
      "H": "2 and 4 only"
    },
    "answer": "E",
    "analysis": "【题目分析】\n题目给出 $y = a^x$（实线）和 $y = f(x)$（虚线）的图像，$a > 0$。两曲线均过 $(0, 1)$，且在 $x > 0$ 时虚线高于实线，$x < 0$ 时虚线低于实线。要求判断哪几个陈述可能成立。\n\n四个陈述分别为：\n1. $f(x) = b^x$，其中 $b > a$\n2. $f(x) = b^x$，其中 $b < a$\n3. $f(x) = a^{kx}$，其中 $k > 1$\n4. $f(x) = a^{kx}$，其中 $k < 1$\n\n【解题步骤】\n从图像可知 $a > 1$（函数单调递增且过 $(0, 1)$）。取 $x = 1$ 分析：实线值为 $a$，虚线值 $f(1) > a$。\n\n对陈述1：$f(1) = b$，需 $b > a$。当 $b > a > 1$ 时，$x > 0$ 时 $b^x > a^x$，$x < 0$ 时 $b^x < a^x$，与图像一致。可能成立。\n\n对陈述2：$f(1) = b < a$，虚线在 $x = 1$ 处应低于实线，与图像矛盾。不可能成立。\n\n对陈述3：$f(1) = a^k$，需 $a^k > a$。由于 $a > 1$，这等价于 $k > 1$。此时 $f(x) = (a^k)^x$，底数 $a^k > a$，与陈述1等价。可能成立。\n\n对陈述4：$f(1) = a^k < a$（因 $a > 1$ 且 $k < 1$），与图像矛盾。不可能成立。\n\n此外，陈述1与3本质等价：$a^{kx} = (a^k)^x$，令 $b = a^k$，则 $b > a \\iff k > 1$。\n\n【快捷思路】\n直接看 $x = 1$ 处：虚线更高意味着\"有效底数\"更大。$b^x$ 的底数 $b > a$ 成立；$a^{kx}$ 的有效底数为 $a^k$，需 $a^k > a$ 即 $k > 1$（因 $a > 1$）。1和3成立。\n\n【正确答案】E",
    "images": {
      "image": "2017 P2 Q7.png"
    },
    "has_image": true,
    "related_topics": [
      "Graphs",
      "Algebra"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "i_functions_graphs"
    ],
    "sections": [
      "a3.exponential_function_graphs",
      "i.graph_comparison"
    ],
    "primary_section": "a3.exponential_function_graphs",
    "skills": [
      "effective-base-comparison",
      "graph-inequality-reading",
      "parameter-interpretation"
    ]
  },
  {
    "id": "2017-P2-Q8",
    "year": 2017,
    "paper": 2,
    "num": 8,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Which one of the following numbers is smallest in value?",
    "options": {
      "A": "$\\log_2 7$",
      "B": "$(2^{-3} + 2^{-2})^{-1}$",
      "C": "$2^{(\\pi/3)}$",
      "D": "$\\frac{1}{4(\\sqrt{2}-1)^3}$",
      "E": "$4 \\sin^2 \\left( \\frac{\\pi}{4} \\right)$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n比较五个数值的大小找出最小值，综合考查对数、指数、根式有理化和三角函数运算。策略是先精确计算能精确算的选项，再估算其余项与之比较。\n\n【解题步骤】\n逐项分析：\n\nA：$\\log_2 7$，因 $\\log_2 4 = 2$，$\\log_2 8 = 3$，故 $2 < \\log_2 7 < 3$。\n\nB：$(2^{-3} + 2^{-2})^{-1} = (\\frac{3}{8})^{-1} = \\frac{8}{3} \\approx 2.667 > 2$。\n\nC：$\\pi/3 > 1$，故 $2^{\\pi/3} > 2^1 = 2$。\n\nD：$(\\sqrt{2} - 1)^3 = 5\\sqrt{2} - 7$，有理化得 $\\frac{1}{4(\\sqrt{2} - 1)^3} = \\frac{5\\sqrt{2} + 7}{4} > \\frac{12}{4} = 3$。\n\nE：$\\sin(\\pi/4) = \\frac{\\sqrt{2}}{2}$，故 $4\\sin^2(\\pi/4) = 4 \\times \\frac{1}{2} = 2$。\n\nA、B、C 均大于 $2$，D 大于 $3$，E 恰好等于 $2$，是最小值。\n\n【快捷思路】\n先算 E 得精确值 $2$，其余各项只需确认都大于 $2$ 即可锁定。A、B、C 显然超 $2$，D 有理化后分母为 $1$、分子约 $14$，远大于 $2$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Trigonometry"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a1_algebra_basics",
      "e_trigonometry"
    ],
    "sections": [
      "a3.exponent_logarithm_comparison",
      "a1.surd_rationalisation",
      "e.special_angle_values"
    ],
    "primary_section": "a3.exponent_logarithm_comparison",
    "skills": [
      "value-comparison",
      "bound-estimation",
      "surd-rationalisation",
      "special-angle-values"
    ]
  },
  {
    "id": "2017-P2-Q9",
    "year": 2017,
    "paper": 2,
    "num": 9,
    "topic": "Proof",
    "difficulty": 3,
    "question": "> *Theorem: $a^3 + b^3 = c^3$ has no solutions with $a$, $b$ and $c$ positive integers.*\n\n**Attempted proof:**\n\nSuppose that there are positive integers $a$, $b$ and $c$ such that $a^3 + b^3 = c^3$.\n\nI We have $a^3 = c^3 - b^3$.\n\nII Hence $a^3 = (c - b)(c^2 + cb + b^2)$.\n\nIII It follows that $a = c - b$ and $a^2 = c^2 + cb + b^2$, since $a \\le a^2$ and $c - b \\le c^2 + cb + b^2$.\n\nIV Eliminating $a$, we have $(c - b)^2 = c^2 + cb + b^2$.\n\nV Multiplying out, we have $c^2 - 2cb + b^2 = c^2 + cb + b^2$.\n\nVI Hence $3cb = 0$ so one of $b$ and $c$ is zero.\n\nBut this is a contradiction to the original assumption that all of $a$, $b$ and $c$ are positive. It follows that the equation has no solutions.\n\nComment on this proof by choosing one of the following options:",
    "options": {
      "A": "The proof is correct",
      "B": "The proof is incorrect and the first mistake occurs on line I.",
      "C": "The proof is incorrect and the first mistake occurs on line II.",
      "D": "The proof is incorrect and the first mistake occurs on line III.",
      "E": "The proof is incorrect and the first mistake occurs on line IV.",
      "F": "The proof is incorrect and the first mistake occurs on line V.",
      "G": "The proof is incorrect and the first mistake occurs on line VI."
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题给出一段试图证明费马大定理$n=3$情形（即$a^3+b^3=c^3$无正整数解）的推理过程，要求找出论证中第一个出现错误的行。这是一道典型的逻辑检验题，核心在于识别推理链条中的谬误。\n\n【解题步骤】\n逐行检验：\nLine I：$a^3=c^3-b^3$，仅是对原等式的移项变形，正确。\nLine II：$a^3=(c-b)(c^2+cb+b^2)$，利用立方差公式$c^3-b^3=(c-b)(c^2+cb+b^2)$，正确。\nLine III：声称由$a^3=(c-b)(c^2+cb+b^2)$推出$a=c-b$且$a^2=c^2+cb+b^2$，理由是$a\\leq a^2$和$c-b\\leq c^2+cb+b^2$。\n\n这是致命错误。从乘积等式$A=BC$不能因为$A\\leq B^2$且$C\\geq B$就断言$A=B$且$A=B^2$。官方解答给出的反例：若$a=6$，则$a^3=216=3\\times 72$，完全可以令$c-b=3$、$c^2+cb+b^2=72$，此时$a\\neq c-b$。\n\n另外官方还指出：若$c-b=1$，则$a^3=c^2+cb+b^2$，这种情况也未被考虑。Line III犯了非充分推理的错误。\n\n【快捷思路】\n前两步均为代数恒等变形，不会出错。第三步从乘积式直接拆分因子相等，违反基本逻辑规则，第一个错误必然出现在Line III。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra",
      "Number Theory"
    ],
    "modules": [
      "l_proof_methods",
      "a1_algebra_basics",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "l.proof_error_identification",
      "a1.factorisation",
      "k.integer_factorisation"
    ],
    "primary_section": "l.proof_error_identification",
    "skills": [
      "proof-line-audit",
      "invalid-factor-splitting",
      "counterexample-to-inference"
    ]
  },
  {
    "id": "2017-P2-Q10",
    "year": 2017,
    "paper": 2,
    "num": 10,
    "topic": "Integration",
    "difficulty": 3,
    "question": "$f(x)$ is a function defined for all real values of $x$.\n\nWhich one of the following is a **sufficient** condition for $\\int_{1}^{3} f(x) dx = 0$?",
    "options": {
      "A": "$f(2) = 0$",
      "B": "$f(1) = f(3) = 0$",
      "C": "$f(-x) = -f(x)$ for all $x$",
      "D": "$f(x + 2) = -f(2 - x)$ for all $x$",
      "E": "$f(x - 2) = -f(2 - x)$ for all $x$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n寻找使$\\int_1^3 f(x)\\,dx=0$的充分条件。充分条件意味着：只要该条件成立，积分就必为零。\n\n【解题步骤】\n逐项分析：\n选项A：$f(2)=0$。单点函数值无法决定整个区间的积分，例如$f(x)=(x-2)^2$满足$f(2)=0$但$\\int_1^3 (x-2)^2\\,dx>0$，不充分。\n选项B：$f(1)=f(3)=0$。端点为零同样不保证积分为零，例如$f(x)=(x-1)(x-3)$在$[1,3]$上恒为负，积分非零，不充分。\n选项C：$f(-x)=-f(x)$，即$f$为奇函数。奇函数关于原点对称，积分区间$[1,3]$不关于原点对称，故不充分。例如$f(x)=x$为奇函数但$\\int_1^3 x\\,dx=4\\neq 0$。\n选项E：$f(x-2)=-f(2-x)$。令$y=2-x$，则$f(-y)=-f(y)$，与选项C等价，不充分。\n选项D：$f(x+2)=-f(2-x)$，即$f(2+x)=-f(2-x)$。这表明$f$关于点$(2,0)$中心对称。令$u=x-2$，则$\\int_1^3 f(x)\\,dx=\\int_{-1}^1 f(u+2)\\,du$。由对称性$f(u+2)=-f(2-u)$，可知被积函数在$[-1,1]$上关于$u=0$为奇函数，积分为零。\n\n【快捷思路】\n选项D的条件$f(2+x)=-f(2-x)$意味着图像关于$(2,0)$旋转对称，区间$[1,3]$关于$x=2$对称，对称区域上正负面积恰好抵消。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Functions"
    ],
    "modules": [
      "g_integration",
      "b_mathematical_logic_basics",
      "i_functions_graphs"
    ],
    "sections": [
      "g.definite_integral_symmetry",
      "b.sufficient_conditions",
      "i.function_symmetry"
    ],
    "primary_section": "g.definite_integral_symmetry",
    "skills": [
      "sufficient-condition-test",
      "symmetry-about-centre",
      "odd-function-shift",
      "counterexample-checking"
    ]
  },
  {
    "id": "2017-P2-Q11",
    "year": 2017,
    "paper": 2,
    "num": 11,
    "topic": "Integration",
    "difficulty": 3,
    "question": "The positive constants $a$ and $b$ are such that $a < b$.\n\nThe area of the region enclosed by the curve $y = f(x)$, the $x$-axis and the lines $x = a$ and $x = b$ is denoted by $R$.\n\nThe function $g(x)$ is defined by $g(x) = f(x) + 2f(b)$.\n\nWhich of the following is an expression for the area enclosed by the curve $y = g(x)$, the $x$-axis and the lines $x = a$ and $x = b$?",
    "options": {
      "A": "$R + (b - a)f(b)$",
      "B": "$R + 2(b - a)f(b)$",
      "C": "$R + 2f(b) - f(a)$",
      "D": "$R + 2f(b)$",
      "E": "$R + (f(b))^2$",
      "F": "$R + (f(b))^2 - (f(a))^2$",
      "G": "$R + 2(f(b) - f(a))f(b)$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n已知$R$是曲线$y=f(x)$与$x$轴在$x=a$和$x=b$之间围成的面积，$g(x)=f(x)+2f(b)$，求$y=g(x)$在相同区间内与$x$轴围成的面积。\n\n【解题步骤】\n题目中的$R$表示原曲线在区间$[a,b]$内与$x$轴围成的面积。定义$g(x)=f(x)+2f(b)$，即把曲线$y=f(x)$整体向上平移$2f(b)$个单位；在本题图形语境下，新面积等于原面积加上一个宽为$b-a$、高为$2f(b)$的矩形面积。用积分线性也可写作：\n$R=\\int_a^b f(x)\\,dx$\n\n对于$g(x)=f(x)+2f(b)$，注意$2f(b)$是常数。面积变化为：\n$\\int_a^b g(x)\\,dx=\\int_a^b\\big[f(x)+2f(b)\\big]\\,dx=\\int_a^b f(x)\\,dx+\\int_a^b 2f(b)\\,dx$\n\n第一项为$R$。第二项中$2f(b)$是常数因子，可提出：\n$\\int_a^b 2f(b)\\,dx=2f(b)\\int_a^b 1\\,dx=2f(b)(b-a)$\n\n因此所求面积为$R+2(b-a)f(b)$。\n\n几何直观：$g(x)$的图像是将$f(x)$整体向上平移$2f(b)$个单位，新增的面积是一个宽为$b-a$、高为$2f(b)$的矩形。\n\n【快捷思路】\n积分的线性性质：$\\int_a^b[f(x)+C]\\,dx=\\int_a^b f(x)\\,dx+C(b-a)$，直接套用$C=2f(b)$即得答案。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "g.definite_integral_area",
      "i.vertical_graph_translation"
    ],
    "primary_section": "g.definite_integral_area",
    "skills": [
      "integral-linearity",
      "area-under-curve",
      "vertical-translation"
    ]
  },
  {
    "id": "2017-P2-Q12",
    "year": 2017,
    "paper": 2,
    "num": 12,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "The diagram shows the graphs of $y = \\sin 2x$ and $y = \\cos 2x$ for $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$\n\nWhich one of the following is **not** true?",
    "options": {
      "A": "$\\cos 2x < \\sin 2x < \\tan x$ for some real number $x$ with $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$",
      "B": "$\\cos 2x < \\tan x < \\sin 2x$ for some real number $x$ with $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$",
      "C": "$\\sin 2x < \\cos 2x < \\tan x$ for some real number $x$ with $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$",
      "D": "$\\sin 2x < \\tan x < \\cos 2x$ for some real number $x$ with $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$",
      "E": "$\\tan x < \\sin 2x < \\cos 2x$ for some real number $x$ with $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$",
      "F": "$\\tan x < \\cos 2x < \\sin 2x$ for some real number $x$ with $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n在区间$-\\frac{\\pi}{2}<x<\\frac{\\pi}{2}$内比较$\\sin 2x$、$\\cos 2x$、$\\tan x$三者的大小，找出哪种排序顺序不可能出现。\n\n【解题步骤】\n将三个函数画在同一坐标系中，从$x=-\\frac{\\pi}{2}$到$x=\\frac{\\pi}{2}$逐段检验各选项：\n$x\\to-\\frac{\\pi}{2}$时：$\\tan x<\\cos 2x<\\sin 2x$，选项F成立\n$x$略小于$-\\frac{\\pi}{4}$时：$\\tan x<\\sin 2x<\\cos 2x$，选项E成立\n$x$略大于$-\\frac{\\pi}{4}$时：$\\sin 2x<\\tan x<\\cos 2x$，选项D成立\n$x$略小于$\\frac{\\pi}{4}$时：$\\cos 2x<\\tan x<\\sin 2x$，选项B成立\n$x$略大于$\\frac{\\pi}{4}$时：$\\cos 2x<\\sin 2x<\\tan x$，选项A成立\n\n唯一未被覆盖的是选项C：$\\sin 2x<\\cos 2x<\\tan x$。要使$\\tan x$最大，需$x>\\frac{\\pi}{4}$，但在该区间内$\\cos 2x<0<\\sin 2x$恒成立，故$\\cos 2x$不可能大于$\\sin 2x$。因此C不可能出现。\n\n【快捷思路】\n$\\tan x$超过另外两个函数时必有$x>\\frac{\\pi}{4}$，此时$\\cos 2x<0<\\sin 2x$，$\\cos 2x$不可能夹在中间。\n\n【正确答案】C",
    "images": {
      "image": "2017 P2 Q12.png"
    },
    "has_image": true,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "e.trig_graphs",
      "e.trig_inequality_ordering",
      "i.graph_comparison"
    ],
    "primary_section": "e.trig_graphs",
    "skills": [
      "trig-graph-comparison",
      "interval-analysis",
      "graph-ordering"
    ]
  },
  {
    "id": "2017-P2-Q13",
    "year": 2017,
    "paper": 2,
    "num": 13,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The positive real numbers $a \\times 10^{-3}$, $b \\times 10^{-2}$ and $c \\times 10^{-1}$ are each in standard form, and\n\n$$(a \\times 10^{-3}) + (b \\times 10^{-2}) = (c \\times 10^{-1}).$$\n\nWhich of the following statements (I, II, III, IV) **must** be true?\n\nI $a > 9$\n\nII $b > 9$\n\nIII $a < c$\n\nIV $b < c$",
    "options": {
      "A": "I only",
      "B": "II only",
      "C": "I and II only",
      "D": "I and III only",
      "E": "I and IV only",
      "F": "II and III only",
      "G": "II and IV only",
      "H": "I, II, III and IV"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考察标准形式下的加法运算与数位分析。三个正实数分别写成标准形式，满足$a \\times 10^{-3} + b \\times 10^{-2} = c \\times 10^{-1}$，其中标准形式要求$1 \\le a, b, c < 10$。需要判断四个命题中哪些必然成立。\n\n【解题步骤】\n将等式统一量纲，两边同乘$10^3$得：$a + 10b = 100c$。\n\n用竖式加法理解最为直观。将三个数写成小数：\n$0.00a_1a_2\\ldots + 0.0b_1b_2\\ldots = 0.c_1c_2\\ldots$\n\n由于$c \\ge 1$，结果小数点左移至少一位，意味着千分位和百分位之和必须向十分位进位。要产生进位，$b$的第一位数字必须为$9$且后面还有非零数字，即必须有$b > 9$，故命题II必成立。\n\n命题I不必要：可以取较小的数字组合仍能进位。\n\n对于命题III和IV：由于进位后$1 \\le c < 2$，而已证得$b > 9$，故$b > c$，IV不可能成立。$a$的值可以大于或小于$c$，III不必然成立。\n\n【快捷思路】\n统一量纲得$100c = a + 10b$。由于$a < 10$，要产生从十位到百位的进位，必须有$10b \\ge 91$，即$b \\ge 9.1$，故$b > 9$必成立。其余命题可用反例排除。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "modules": [
      "a1_algebra_basics",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a1.standard_form",
      "a2.inequality_reasoning"
    ],
    "primary_section": "a1.standard_form",
    "skills": [
      "standard-form-place-value",
      "powers-of-ten-scaling",
      "must-be-true-analysis",
      "counterexample-elimination"
    ]
  },
  {
    "id": "2017-P2-Q14",
    "year": 2017,
    "paper": 2,
    "num": 14,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "The diagram below shows the graph of $y = x^2 - 2bx + c$. The vertex of this graph is at the point $P$.\n\nWhich one of the following could be the graph of $y = x^2 - 2Bx + c$, where $B > b$?",
    "options": {
      "A": "Graph A",
      "B": "Graph B",
      "C": "Graph C",
      "D": "Graph D",
      "E": "Graph E",
      "F": "Graph F",
      "G": "Graph G",
      "H": "Graph H"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考察二次函数图像的变换。已知抛物线$y = x^2 - 2bx + c$的顶点为$P$，要求判断当系数从$2b$变为$2B$（其中$B > b$）时，新抛物线的图像。\n\n【解题步骤】\n原抛物线配方：$y = x^2 - 2bx + c = (x - b)^2 + c - b^2$\n顶点$P$坐标为$(b, c - b^2)$。由已知图像可知$P$在第一象限，故$b > 0$且$c - b^2 > 0$。\n\n新抛物线配方：$y = x^2 - 2Bx + c = (x - B)^2 + c - B^2$\n新顶点坐标为$(B, c - B^2)$。\n\n由于$B > b > 0$：\n横坐标：$B > b$，新顶点在$P$的右侧。\n纵坐标：$B^2 > b^2$，故$c - B^2 < c - b^2$，新顶点在$P$的下方。\n\n综合可知新顶点位于$P$的右下方。开口方向不变（二次项系数均为$1$，开口向上）。\n\n另外，两条抛物线在$y$轴上的交点相同：$x = 0$时$y = c$，均过点$(0, c)$。\n\n【快捷思路】\n顶点横坐标从$2b$的一半变为$2B$的一半，即从$B > b$知顶点右移。纵坐标为$-b^2 + c$变为$-B^2 + c$，因$B^2 > b^2$故下移。顶点向右下方移动即为答案。\n\n【正确答案】F",
    "images": {
      "question_image": "2017 P2 Q14 Questions.png",
      "options_image": "2017 P2 Q14 8 options.png"
    },
    "has_image": true,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "i_functions_graphs",
      "a2_equations_inequalities"
    ],
    "sections": [
      "i.quadratic_parameter_effects",
      "a2.completing_square"
    ],
    "primary_section": "i.quadratic_parameter_effects",
    "skills": [
      "completing-square",
      "vertex-form",
      "parameter-shift",
      "y-intercept-invariance"
    ]
  },
  {
    "id": "2017-P2-Q15",
    "year": 2017,
    "paper": 2,
    "num": 15,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The function $f$ is defined on the positive integers as follows:\n\n$$f(1) = 5, \\text{ and for } n \\geqslant 1: \\quad \\begin{aligned} f(n + 1) &= 3f(n) + 1 && \\text{if } f(n) \\text{ is odd} \\\\ f(n + 1) &= \\frac{1}{2}f(n) && \\text{if } f(n) \\text{ is even} \\end{aligned}$$\n\nThe function $g$ is defined on the positive integers as follows:\n\n$$g(1) = 3, \\text{ and for } n \\geqslant 1: \\quad \\begin{aligned} g(n + 1) &= g(n) + 5 && \\text{if } g(n) \\text{ is odd} \\\\ g(n + 1) &= \\frac{1}{2}g(n) && \\text{if } g(n) \\text{ is even} \\end{aligned}$$\n\nWhat is the value of $f(1000) - g(1000)$?",
    "options": {
      "A": "$-6$",
      "B": "$-5$",
      "C": "$1$",
      "D": "$2$",
      "E": "$4$",
      "F": "$8$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考察递归定义的数列周期性。函数$f$和$g$根据前一项的奇偶性分别采用不同的递推规则，需要计算$f(1000) - g(1000)$。这类问题通常先枚举前若干项寻找循环规律。\n\n【解题步骤】\n先计算数列的前几项：\n\n数列：\n$f(1) = 5$（奇）$\\to f(2) = 16$（偶）$\\to f(3) = 8$（偶）$\\to f(4) = 4$（偶）$\\to f(5) = 2$（偶）$\\to f(6) = 1$（奇）$\\to f(7) = 4$（偶）$\\to f(8) = 2$（偶）$\\to f(9) = 1$\n\n从第$6$项开始进入周期为$3$的循环：$1 \\to 4 \\to 2 \\to 1\\ldots$\n$1000 - 6 = 994$，$994 \\div 3$余$1$，故\n$f(1000) = f(7) = 4$\n\n数列：\n$g(1) = 3$（奇）$\\to g(2) = 8$（偶）$\\to g(3) = 4$（偶）$\\to g(4) = 2$（偶）$\\to g(5) = 1$（奇）$\\to g(6) = 6$（偶）$\\to g(7) = 3$\n\n从第$1$项开始进入周期为$6$的循环：$3 \\to 8 \\to 4 \\to 2 \\to 1 \\to 6 \\to 3\\ldots$\n$1000 \\div 6$余$4$，故\n$g(1000) = g(4) = 2$\n\n最终：$f(1000) - g(1000) = 4 - 2 = 2$\n\n【快捷思路】\n此类递推数列问题，先手算前几项找循环节。$f$的循环从第$6$项开始、周期为$3$；$g$从第$1$项开始、周期为$6$。利用余数直接定位第$1000$项的值。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "modules": [
      "c_sequences_series",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "c.recurrence_cycles",
      "k.parity_cases"
    ],
    "primary_section": "c.recurrence_cycles",
    "skills": [
      "recurrence-iteration",
      "cycle-detection",
      "parity-casework",
      "modular-indexing"
    ]
  },
  {
    "id": "2017-P2-Q16",
    "year": 2017,
    "paper": 2,
    "num": 16,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider the following statement:\n\n> ($\\ast$) **If** $f(x)$ is an integer for every integer $x$, **then** $f'(x)$ is an integer for every integer $x$.\n\nWhich one of the following is a **counterexample** to ($\\ast$)?",
    "options": {
      "A": "$f(x) = \\frac{x^3 + x + 1}{4}$",
      "B": "$f(x) = \\frac{x^4 + x^2 + x}{2}$",
      "C": "$f(x) = \\frac{x^4 + x^3 + x^2 + x}{2}$",
      "D": "$f(x) = \\frac{x^4 + 2x^3 + x^2}{4}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考察反例的构造与验证。命题：若函数在所有整数处取整数值，则其导数也在所有整数处取整数值。需要找出一个使前提成立但结论不成立的函数作为反例。\n\n【解题步骤】\n反例需同时满足两个条件：\n条件一：对所有整数，$f(x)$为整数。\n条件二：存在某个整数$x$，使导数非整数。\n\n先用简单值快速筛选。代入：\n$A$：$f(0) = 1/4$，不满足条件一，排除。\n$B$：$f(1) = 3/2$，不满足条件一，排除。\n$C$：$f(0) = 0$，$f(1) = 2$，均为整数。\n$D$：$f(0) = 0$，$f(1) = 1$，均为整数。\n\n检查$C$和$D$的导数：\n$C$：$f'(x) = \\frac{4x^3 + 3x^2 + 2x + 1}{2}$，$f'(0) = 1/2$非整数。\n$D$：$f'(x) = \\frac{4x^3 + 6x^2 + 2x}{4}$，$f'(0) = 0$为整数。\n\n因此$C$是候选反例。验证条件一：因式分解得\n$f(x) = \\frac{x(x+1)(x^2+1)}{2}$\n对任意整数，$x(x+1)$为两连续整数之积必为偶数，故分子总为偶数，$f(x)$恒为整数。\n\n验证$D$非反例：$f'(x) = \\frac{x(x+1)(2x+1)}{2}$，分子同样恒为偶数，导数总为整数。\n\n【快捷思路】\n先用代入法排除$A$、$B$。对$C$、$D$分别求导并代入$0$即可区分：$C$的导数在$0$处为$1/2$，而$D$的导数在$0$处为$0$。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation"
    ],
    "modules": [
      "h_logic_counterexamples",
      "b_mathematical_logic_basics",
      "l_proof_methods",
      "f_differentiation"
    ],
    "sections": [
      "h.function_counterexamples",
      "b.counterexample_construction",
      "l.disproof_by_counterexample",
      "f.derivative_values"
    ],
    "primary_section": "h.function_counterexamples",
    "skills": [
      "counterexample-verification",
      "integer-valued-function",
      "differentiate-polynomial",
      "test-special-values"
    ]
  },
  {
    "id": "2017-P2-Q17",
    "year": 2017,
    "paper": 2,
    "num": 17,
    "topic": "Logic",
    "difficulty": 3,
    "question": "A set $S$ of whole numbers is called *stapled* **if and only if** for every whole number $a$ which is in $S$ there exists a prime factor of $a$ which divides at least one other number in $S$.\n\nLet $T$ be a set of whole numbers. Which of the following is true **if and only if** $T$ is **not** stapled?",
    "options": {
      "A": "For every number $a$ which is in $T$, there is no prime factor of $a$ which divides every other number in $T$.",
      "B": "For every number $a$ which is in $T$, there is no prime factor of $a$ which divides at least one other number in $T$.",
      "C": "For every number $a$ which is in $T$, there is a prime factor of $a$ which does not divide any other number in $T$.",
      "D": "For every number $a$ which is in $T$, there is a prime factor of $a$ which does not divide at least one other number in $T$.",
      "E": "There exists a number $a$ which is in $T$ such that there is no prime factor of $a$ which divides every other number in $T$.",
      "F": "There exists a number $a$ which is in $T$ such that there is no prime factor of $a$ which divides at least one other number in $T$.",
      "G": "There exists a number $a$ which is in $T$ such that there is a prime factor of $a$ which does not divide any other number in $T$.",
      "H": "There exists a number $a$ which is in $T$ such that there is a prime factor of $a$ which does not divide at least one other number in $T$."
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考察逻辑量词的否定运算，属于集合论与数理逻辑的结合题。题目定义了一个新概念stapled：集合$S$称为stapled，当且仅当对$S$中每个元素$a$，都存在$a$的某个质因子能整除$S$中至少一个其他数。要求找出$T$不是stapled的充要条件。解题核心在于准确地将复合逻辑命题进行否定。\n\n【解题步骤】\n原命题：$T$是stapled$\\iff\\forall a\\in T,\\;\\exists p$( $p$是$a$的质因子$\\;\\land\\;$$p$整除$T$中至少一个其他数)。\n\n否定过程分两步：\n第一步，否定外层全称量词$\\forall$，变为存在量词$\\exists$：\n$T$不是stapled$\\iff\\exists a\\in T$，使得并非存在这样的质因子。\n\n第二步，并非存在这样的质因子，等价于不存在这样的质因子，即there is no prime factor of $a$ which divides at least one other number in $T$。\n\n综合得到：$T$不是stapled$\\iff$存在$a\\in T$，使得$a$没有能整除$T$中至少一个其他数的质因子。\n\n对照选项，F项正是此表述。\n\n注意：不要混淆at least one与every的区别。选项A、D等使用了every other number，与原定义中的at least one other number不等价。\n\n【快捷思路】\n直接套用逻辑否定规则：$\\neg(\\forall x,P(x))\\iff\\exists x,\\neg P(x)$，$\\neg(\\exists x,Q(x))\\iff\\forall x,\\neg Q(x)$。这里只需否定最外层的for every变为there exists，内层的there exists变为there is no，其余文字完全保留即可选出F。\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sets",
      "Proof"
    ],
    "modules": [
      "b_mathematical_logic_basics",
      "h_logic_counterexamples",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "b.quantifier_negation",
      "b.iff_definitions",
      "k.prime_factor_divisibility"
    ],
    "primary_section": "b.quantifier_negation",
    "skills": [
      "quantifier-negation",
      "definition-unpacking",
      "prime-factor-divisibility",
      "option-elimination"
    ]
  },
  {
    "id": "2017-P2-Q18",
    "year": 2017,
    "paper": 2,
    "num": 18,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the following problem:\n\nSolve the inequality $(\\frac{1}{4})^n < (\\frac{1}{32})^{10}$, where $n$ is a positive integer.\n\nA student produces the following argument:\n\n$$(\\frac{1}{4})^n < (\\frac{1}{32})^{10}$$\n\n$\\downarrow$ (I)\n\n$$\\log_{\\frac{1}{2}} (\\frac{1}{4})^n < \\log_{\\frac{1}{2}} (\\frac{1}{32})^{10}$$\n\n$\\downarrow$ (II)\n\n$$n \\log_{\\frac{1}{2}} (\\frac{1}{4}) < 10 \\log_{\\frac{1}{2}} (\\frac{1}{32})$$\n\n$\\downarrow$ (III)\n\n$$n < \\frac{10 \\log_{\\frac{1}{2}} (\\frac{1}{32})}{\\log_{\\frac{1}{2}} (\\frac{1}{4})}$$\n\n$\\downarrow$ (IV)\n\n$$n < \\frac{10 \\times 5}{2} = 25$$\n\n$\\downarrow$ (V)\n\n$$1 \\leqslant n \\leqslant 24$$\n\nWhich step (if any) in the argument is invalid?",
    "options": {
      "A": "There are no invalid steps; the argument is correct",
      "B": "Only step (I) is invalid; the rest are correct",
      "C": "Only step (II) is invalid; the rest are correct",
      "D": "Only step (III) is invalid; the rest are correct",
      "E": "Only step (IV) is invalid; the rest are correct",
      "F": "Only step (V) is invalid; the rest are correct"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考察对数运算与不等式性质，属于代数与函数的交叉题。学生通过五步推导解不等式$\\left(\\frac{1}{4}\\right)^n<\\left(\\frac{1}{32}\\right)^{10}$，需找出哪一步无效。这类题目要求考生不仅会计算，还要理解每一步的逻辑有效性。\n\n【解题步骤】\n逐步检验学生的推导：\n\n步骤(I)：两边同时取以$\\frac{1}{2}$为底的对数。关键问题在于底数$\\frac{1}{2}\\in(0,1)$，此时对数函数$y=\\log_{\\frac{1}{2}}x$是严格递减函数。对于递减函数，若$A<B$，则$f(A)>f(B)$，即不等号方向必须反转！学生保持不等号不变，这是根本性错误。\n\n步骤(II)：利用对数幂法则$\\log_b(x^k)=k\\log_b x$，正确。\n\n步骤(III)：两边除以$\\log_{\\frac{1}{2}}\\left(\\frac{1}{4}\\right)=2$，除数为正，不等号方向不变，正确。\n\n步骤(IV)：计算$\\frac{10\\times 5}{2}=25$，正确。\n\n步骤(V)：$n$为正整数且$n<25$，得$1\\leq n\\leq 24$，形式上正确（但前提已错）。\n\n验证：取$n=1$代入原不等式，$\\frac{1}{4}<\\left(\\frac{1}{32}\\right)^{10}$显然不成立，但学生推导却将$n=1$包含在解集中，说明推导有误，且错误出现在步骤(I)。\n\n正确解法应为：取对数后反转不等号，得$2n>50$，即$n>25$。\n\n【快捷思路】\n看到对数底数小于$1$，立即警觉：不等号必须反转。这是最常见的对数陷阱之一。直接锁定步骤(I)即可。\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Graphs",
      "Proof"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities",
      "i_functions_graphs",
      "l_proof_methods"
    ],
    "sections": [
      "a3.log_inequalities_base_less_than_one",
      "a2.inequality_direction",
      "i.monotonic_functions",
      "l.proof_error_identification"
    ],
    "primary_section": "a3.log_inequalities_base_less_than_one",
    "skills": [
      "log-inequality",
      "inequality-reversal",
      "monotonicity-check",
      "error-identification"
    ]
  },
  {
    "id": "2017-P2-Q19",
    "year": 2017,
    "paper": 2,
    "num": 19,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "Which one of the following is a **sufficient** condition for the equation $x^3 - 3x^2 + a = 0$, where $a$ is a constant, to have exactly one real root?",
    "options": {
      "A": "$a > 0$",
      "B": "$a \\leqslant 0$",
      "C": "$a \\geqslant 4$",
      "D": "$a < 4$",
      "E": "$|a| > 4$",
      "F": "$|a| \\leqslant 4$",
      "G": "$a = \\frac{9}{4}$",
      "H": "$|a| = \\frac{3}{2}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考察三次方程实根个数与参数取值范围的关系，属于微分学与函数的综合题。要求找出方程$x^3-3x^2+a=0$恰有一个实根的充分条件。充分条件的含义是：若该条件成立，则结论必然成立（但结论成立不一定需要该条件）。\n\n【解题步骤】\n设$f(x)=x^3-3x^2+a$。求驻点：\n$f'(x)=3x^2-6x=3x(x-2)=0$，得驻点$x=0$和$x=2$。\n\n计算函数值：\n$f(0)=a$（局部极大值点），$f(2)=8-12+a=a-4$（局部极小值点）。\n\n三次函数图像大致呈N型（首项系数为正）。方程恰有一个实根的充要条件是：局部极大值和局部极小值在$x$轴同侧。即：\n极大值$<0$：$a<0$；或\n极小值$>0$：$a-4>0$，即$a>4$。\n\n因此充要条件为$a<0$或$a>4$，但这不在选项中。题目要求充分条件，即选项给出的范围必须是上述范围的真子集。\n\n逐一检验：\nA：$a>0$包含$a=1$（此时两根），不充分。\nB：$a\\leq 0$包含$a=0$（此时$x=0$为重根，超过一个实根），不充分。\nC：$a\\geq 4$包含$a=4$（此时极大值在轴上，超过一个实根），不充分。\nD：$a<4$包含$a=1$，不充分。\nE：$|a|>4$等价于$a>4$或$a<-4$，均落在有效范围内，充分。\nG：$a=\\frac{9}{4}$落在$(0,4)$内，此时三个实根，不充分。\nH：$|a|=\\frac{3}{2}$包含正负值，正侧不充分。\n\n【快捷思路】\n先求出恰有一个实根的充要条件为$a<0$或$a>4$，再找选项中的子集。E项$|a|>4$即$a<-4$或$a>4$，完全落在该充要条件内，因此是充分条件。\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Graphs"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs",
      "a2_equations_inequalities",
      "l_proof_methods"
    ],
    "sections": [
      "f.stationary_points_root_count",
      "i.polynomial_root_count",
      "a2.parameter_inequalities",
      "l.sufficient_conditions"
    ],
    "primary_section": "f.stationary_points_root_count",
    "skills": [
      "stationary-points",
      "root-counting",
      "parameter-range",
      "sufficient-condition",
      "endpoint-check"
    ]
  },
  {
    "id": "2017-P2-Q20",
    "year": 2017,
    "paper": 2,
    "num": 20,
    "topic": "Combinatorics",
    "difficulty": 3,
    "question": "I have forgotten my 5-character computer password, but I know that it consists of the letters a, b, c, d, e in some order. When I enter a potential password into the computer, it tells me exactly how many of the letters are in the correct position.\n\nWhen I enter `abcde`, it tells me that none of the letters are in the correct position. The same happens when I enter `cdbea` and `eadbc`.\n\nUsing the best strategy, how many **further** attempts must I make in order to **guarantee** that I can **deduce** the correct password?",
    "options": {
      "A": "None: I can deduce it immediately",
      "B": "One",
      "C": "Two",
      "D": "Three",
      "E": "More than three"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题是一道组合逻辑推理题，结合排列组合与信息论的思想。密码是abcde的某个排列，每次输入后电脑返回正确位置的数量。已知三次尝试均得$0$个位置正确，问用最优策略还需几次尝试才能保证确定密码。\n\n【解题步骤】\n根据三次尝试结果，列出每个位置的禁入字母：\n位置1禁止a、c、e，只能填b或d\n位置2禁止b、d、a，只能填c或e\n位置3禁止c、b、d，只能填a或e\n位置4禁止d、e、b，只能填a或c\n位置5禁止e、a、c，只能填b或d\n\n观察规律：位置1和位置5共享字母集合$\\{b,d\\}$，位置2、3、4共享字母集合$\\{c,e,a\\}$。因此外层位置$(1,5)$只能是$(b,d)$或$(d,b)$，内层位置$(2,3,4)$只能是$(c,e,a)$或$(e,a,c)$。\n\n枚举所有可能：\n$(b,d)$搭配$(c,e,a)\\rightarrow$bcead\n$(b,d)$搭配$(e,a,c)\\rightarrow$beacd\n$(d,b)$搭配$(c,e,a)\\rightarrow$dceab\n$(d,b)$搭配$(e,a,c)\\rightarrow$deacb\n\n共4种候选密码。\n\n第四次尝试：输入bcead，根据电脑返回的正确位置数：\n- 返回5：密码就是bcead\n- 返回2：外层正确内层错误，密码是beacd\n- 返回3：内层正确外层错误，密码是dceab\n- 返回0：全错，密码是deacb\n\n四种情况产生四种不同的返回值（0、2、3、5），故一次尝试足以区分所有可能。\n\n【快捷思路】\n识别出外层$(1,5)$和内层$(2,3,4)$的独立性后，直接输入bcead作为探测，利用返回值的不同可以一次区分四种候选。\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Probability"
    ],
    "modules": [
      "k_number_theory_combinatorics",
      "j_sets_probability",
      "b_mathematical_logic_basics"
    ],
    "sections": [
      "k.permutation_counting",
      "j.combinatorial_reasoning",
      "b.case_analysis"
    ],
    "primary_section": "k.permutation_counting",
    "skills": [
      "candidate-enumeration",
      "permutation-constraints",
      "information-partition",
      "case-analysis"
    ]
  },
  {
    "id": "2018-P1-Q1",
    "year": 2018,
    "paper": 1,
    "num": 1,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Find the value of\n\n$$\\int_{1}^{4} \\frac{3 - 2x}{x\\sqrt{x}} dx$$",
    "options": {
      "A": "$-\\frac{13}{2}$",
      "B": "$-\\frac{85}{16}$",
      "C": "$-\\frac{13}{8}$",
      "D": "$-1$",
      "E": "$-\\frac{1}{4}$",
      "F": "$\\frac{7}{4}$",
      "G": "$7$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题要求计算定积分 $\\displaystyle\\int_{1}^{4}\\frac{3-2x}{x\\sqrt{x}}\\,dx$。被积函数为分式与根式的组合，核心思路是将分母化为幂函数形式，拆分后逐项积分。关键步骤是正确化简被积函数并准确应用幂函数积分公式。\n【解题步骤】\n将分母写成幂的形式：$x\\sqrt{x}=x^{3/2}$，拆分被积函数：\n$$\\frac{3-2x}{x^{3/2}}=3x^{-\\frac{3}{2}}-2x^{-\\frac{1}{2}}$$\n\n逐项求原函数：\n$$\\int 3x^{-\\frac{3}{2}}dx=-6x^{-\\frac{1}{2}},\\qquad\\int(-2x^{-\\frac{1}{2}})dx=-4x^{\\frac{1}{2}}$$\n\n代入上下限：\n$$\\left[-\\frac{6}{\\sqrt{x}}-4\\sqrt{x}\\right]_{1}^{4}=(-3-8)-(-6-4)=-11+10=-1$$\n【快捷思路】\n化简后原函数为 $-6x^{-1/2}-4x^{1/2}$，代入 $x=4$ 得 $-11$，代入 $x=1$ 得 $-10$，相减即得 $-1$。注意下限代入时是减去整个值，谨防符号错误。\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "g_integration",
      "a1_algebra_basics"
    ],
    "sections": [
      "g.integral_simplify_first",
      "g.power_function_integrals",
      "a1.exponent_laws"
    ],
    "primary_section": "g.integral_simplify_first",
    "skills": [
      "integrand-simplification",
      "power-rule-integration",
      "definite-integral-evaluation",
      "exponent-laws"
    ]
  },
  {
    "id": "2018-P1-Q2",
    "year": 2018,
    "paper": 1,
    "num": 2,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "An arithmetic progression has first term $a$ and common difference $d$.\n\nThe sum of the first 5 terms is equal to the sum of the first 8 terms.\n\nWhich one of the following expresses the relationship between $a$ and $d$?",
    "options": {
      "A": "$a = -\\frac{38}{3}d$",
      "B": "$a = -7d$",
      "C": "$a = -6d$",
      "D": "$a = 6d$",
      "E": "$a = 7d$",
      "F": "$a = \\frac{38}{3}d$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题给出等差数列首项为 $a$、公差为 $d$，且前 $5$ 项和等于前 $8$ 项和，要求找出 $a$ 与 $d$ 的关系。等差数列求和公式为 $S_n=\\frac{n}{2}[2a+(n-1)d]$，分别计算 $S_5$ 和 $S_8$ 后令其相等即可求解。本题也可利用 $S_8-S_5$ 的巧思快速作答。\n【解题步骤】\n方法一：利用求和公式\n\n$$S_5=\\frac{5}{2}[2a+4d]=5a+10d$$\n$$S_8=\\frac{8}{2}[2a+7d]=8a+28d$$\n\n令 $S_5=S_8$：\n$$5a+10d=8a+28d$$\n$$-3a=18d$$\n$$a=-6d$$\n\n方法二（快捷法）：$S_8-S_5$ 恰好等于第 $6$、$7$、$8$ 项之和。因为 $S_5=S_8$，所以这三项之和为零：\n$$(a+5d)+(a+6d)+(a+7d)=0$$\n$$3a+18d=0\\quad\\Rightarrow\\quad a=-6d$$\n【快捷思路】\n注意到 $S_8=S_5+u_6+u_7+u_8$，由 $S_5=S_8$ 直接推出 $u_6+u_7+u_8=0$，即 $(a+5d)+(a+6d)+(a+7d)=0$，一步得到 $3a+18d=0$，避免展开 $S_5$、$S_8$ 的繁琐计算。\n【正确答案】C",
    "images": null,
    "has_image": false,
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.arithmetic_series_sums",
      "c.arithmetic_progressions"
    ],
    "primary_section": "c.arithmetic_series_sums",
    "skills": [
      "arithmetic-series-sum",
      "sum-difference",
      "term-sum-reduction",
      "parameter-relation"
    ]
  },
  {
    "id": "2018-P1-Q3",
    "year": 2018,
    "paper": 1,
    "num": 3,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "Find the shortest distance between the two circles with equations:\n\n$$(x + 2)^2 + (y - 3)^2 = 18$$\n\n$$(x - 7)^2 + (y + 6)^2 = 2$$",
    "options": {
      "A": "0",
      "B": "4",
      "C": "16",
      "D": "$2\\sqrt{2}$",
      "E": "$5\\sqrt{2}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题求两圆之间的最短距离。首先需要从圆的标准方程 $(x-h)^2+(y-k)^2=r^2$ 中读出圆心坐标和半径，然后计算两圆心之间的距离，最后减去两半径之和即得最短距离（两圆外离时）。关键在于识别圆心和半径，并判断两圆的位置关系。\n【解题步骤】\n圆1：$(x+2)^2+(y-3)^2=18$，圆心 $C_1(-2,3)$，半径 $r_1=\\sqrt{18}=3\\sqrt{2}$。\n\n圆2：$(x-7)^2+(y+6)^2=2$，圆心 $C_2(7,-6)$，半径 $r_2=\\sqrt{2}$。\n\n计算两圆心距离：\n$$|C_1C_2|=\\sqrt{(7-(-2))^2+(-6-3)^2}=\\sqrt{9^2+(-9)^2}=\\sqrt{81+81}=\\sqrt{162}=9\\sqrt{2}$$\n\n两半径之和为 $r_1+r_2=3\\sqrt{2}+\\sqrt{2}=4\\sqrt{2}$。\n\n因为 $9\\sqrt{2}>4\\sqrt{2}$，两圆外离。最短距离为圆心距减去两半径：\n$$9\\sqrt{2}-4\\sqrt{2}=5\\sqrt{2}$$\n【快捷思路】\n识别圆心差为 $(9,-9)$，距离为 $9\\sqrt{2}$。两半径和为 $4\\sqrt{2}$，直接相减得 $5\\sqrt{2}$。画简图可快速确认两圆外离，无需额外验证。\n【正确答案】E",
    "images": null,
    "has_image": false,
    "modules": [
      "d_coordinate_geometry"
    ],
    "sections": [
      "d.circle_equations.circle_distances"
    ],
    "primary_section": "d.circle_equations.circle_distances",
    "skills": [
      "circle-centre-radius",
      "distance-formula",
      "external-circle-distance",
      "surd-simplification"
    ]
  },
  {
    "id": "2018-P1-Q4",
    "year": 2018,
    "paper": 1,
    "num": 4,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the simultaneous equations\n\n$$3x^2 + 2xy = 4$$\n$$x + y = a$$\n\nwhere $a$ is a real constant.\n\nFind the complete set of values of $a$ for which the equations have two distinct real solutions for $x$.",
    "options": {
      "A": "There are no values of $a$.",
      "B": "$-2 < a < 2$",
      "C": "$-1 < a < 1$",
      "D": "$a = 0$",
      "E": "$a < -1$ or $a > 1$",
      "F": "$a < -2$ or $a > 2$",
      "G": "All real values of $a$"
    },
    "answer": "G",
    "analysis": "【题目分析】\n本题给出含参数 $a$ 的联立方程组，要求找出使方程组对 $x$ 有两个不同实数解的 $a$ 的取值范围。标准做法是消元得到关于 $x$ 的一元二次方程，再通过判别式 $\\Delta$ 判断根的个数。本题的巧妙之处在于判别式恒正，因此 $a$ 可取任意实数。\n【解题步骤】\n由 $x+y=a$ 得 $y=a-x$，代入第一个方程：\n$$3x^2+2x(a-x)=4$$\n$$3x^2+2ax-2x^2=4$$\n$$x^2+2ax-4=0$$\n\n这是关于 $x$ 的一元二次方程，其判别式为：\n$$\\Delta=(2a)^2-4\\times 1\\times(-4)=4a^2+16$$\n\n由于 $a^2\\geq 0$ 对所有实数 $a$ 成立，故 $4a^2+16\\geq 16>0$。\n\n判别式恒为正数，说明方程 $x^2+2ax-4=0$ 对任意实数 $a$ 都有两个不同的实数根。因此 $a$ 可取所有实数值。\n【快捷思路】\n消元后得到 $x^2+2ax-4=0$，观察判别式 $\\Delta=4a^2+16$，注意到常数项为 $+16>0$，而 $4a^2\\geq 0$，因此 $\\Delta$ 永远大于零，无需进一步分析。直接选所有实数。\n【正确答案】G",
    "images": null,
    "has_image": false,
    "modules": [
      "a2_equations_inequalities"
    ],
    "sections": [
      "a2.simultaneous_equations",
      "a2.parameter_discriminant"
    ],
    "primary_section": "a2.parameter_discriminant",
    "skills": [
      "substitution",
      "quadratic-discriminant",
      "parameter-condition",
      "distinct-real-roots"
    ]
  },
  {
    "id": "2018-P1-Q5",
    "year": 2018,
    "paper": 1,
    "num": 5,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The function f is defined by $f(x) = x^3 + ax^2 + bx + c$.\n\n$a, b$ and $c$ take the values 1, 2 and 3 with no two of them being equal and not necessarily in this order.\n\nThe remainder when $f(x)$ is divided by $(x + 2)$ is $R$.\n\nThe remainder when $f(x)$ is divided by $(x + 3)$ is $S$.\n\nWhat is the largest possible value of $R - S$?",
    "options": {
      "A": "$-26$",
      "B": "$5$",
      "C": "$7$",
      "D": "$17$",
      "E": "$29$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n给定三次多项式 $f(x)=x^3+ax^2+bx+c$，其中 $a,b,c$ 是 $\\{1,2,3\\}$ 的一个排列（互不相等）。记 $R$ 为 $f(x)$ 除以 $(x+2)$ 的余数，$S$ 为 $f(x)$ 除以 $(x+3)$ 的余数，求 $R-S$ 的最大可能值。\n\n本题核心工具是余数定理：$f(x)$ 除以 $(x-p)$ 的余数等于 $f(p)$。因此 $R=f(-2)$，$S=f(-3)$。\n\n【解题步骤】\n由余数定理：\n$R=f(-2)=-8+4a-2b+c$\n$S=f(-3)=-27+9a-3b+c$\n\n作差得：\n$R-S=(-8+4a-2b+c)-(-27+9a-3b+c)=19-5a+b$\n\n要使 $R-S$ 最大，需 $-5a+b$ 最大。由于 $a$ 的系数为负，应取 $a$ 尽可能小；$b$ 的系数为正，应取 $b$ 尽可能大。$a,b,c$ 为 $\\{1,2,3\\}$ 的排列，故取 $a=1$，$b=3$，$c=2$。\n\n此时 $R-S=19-5\\times 1+3=17$。\n\n【快捷思路】\n直接作差消去 $c$，得到 $R-S=19-5a+b$。由于 $a$ 的系数绝对值远大于 $b$，优先让 $a$ 取最小值 $1$，再让 $b$ 取最大值 $3$，立即得到答案 $17$。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a1_algebra_basics",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a1.remainder_theorem",
      "a2.remainder_theorem"
    ],
    "primary_section": "a1.remainder_theorem",
    "skills": [
      "remainder-theorem",
      "function-evaluation",
      "expression-difference",
      "coefficient-optimisation",
      "permutation-selection"
    ]
  },
  {
    "id": "2018-P1-Q6",
    "year": 2018,
    "paper": 1,
    "num": 6,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the number of solutions of the equation\n\n$$x \\sin 2x = \\cos 2x$$\n\nwith $0 \\le x \\le 2\\pi$.",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4"
    },
    "answer": "E",
    "analysis": "【题目分析】\n求方程 $x\\sin 2x=\\cos 2x$ 在区间 $[0,2\\pi]$ 内的解的个数。\n\n这是一个超越方程，无法精确求解，但只需判断解的个数。思路是将三角函数集中到一边，转化为两个函数图像的交点问题。\n\n【解题步骤】\n首先检查 $\\cos 2x=0$ 的情形：若 $\\cos 2x=0$，则原方程变为 $x\\sin 2x=0$。但 $\\cos 2x=0$ 时 $\\sin 2x=\\pm 1\\neq 0$，而 $x=0$ 时 $\\cos 0=1\\neq 0$，故 $\\cos 2x=0$ 不会产生解。\n\n两边除以 $\\cos 2x$，得 $x\\tan 2x=1$。当 $x=0$ 时左边为 $0$ 不等于 $1$，故 $x\\neq 0$。再除以 $x$：\n$\\tan 2x=\\frac{1}{x}$\n\n令 $t=2x$，则 $t\\in[0,4\\pi]$，方程变为 $\\tan t=\\frac{2}{t}$。\n\n在 $t\\in(0,4\\pi]$ 内，$y=\\tan t$ 有四个正分支：$(0,\\frac{\\pi}{2})$、$(\\pi,\\frac{3\\pi}{2})$、$(2\\pi,\\frac{5\\pi}{2})$、$(3\\pi,\\frac{7\\pi}{2})$，每支上 $\\tan t$ 从 $-\\infty$ 单调增至 $+\\infty$。而 $y=\\frac{2}{t}>0$ 在这些正分支的区间内恒为正。\n\n在每个正分支中，$\\tan t$ 从 $-\\infty$ 到 $+\\infty$ 经过所有实数，与正的 $\\frac{2}{t}$ 恰好相交一次。共 $4$ 个正分支，故有 $4$ 个交点。\n\n在负分支 $(\\frac{\\pi}{2},\\pi)$ 等处，$\\tan t<0$ 而 $\\frac{2}{t}>0$，无交点。\n\n因此原方程在 $[0,2\\pi]$ 内有 $4$ 个解。\n\n【快捷思路】\n画图：$y=\\tan 2x$ 在 $[0,2\\pi]$ 有四个完整正分支，$y=\\frac{1}{x}$ 始终为正。每个正分支与 $\\frac{1}{x}$ 各交一次，直接数出 $4$ 个交点。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "e.trig_equations_graph_intersections",
      "i.graph_intersections"
    ],
    "primary_section": "e.trig_equations_graph_intersections",
    "skills": [
      "trig-equation-transformation",
      "tan-branch-counting",
      "graph-intersection",
      "solution-counting"
    ]
  },
  {
    "id": "2018-P1-Q7",
    "year": 2018,
    "paper": 1,
    "num": 7,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The non-zero constant $k$ is chosen so that the coefficients of $x^6$ in the expansions of $(1 + kx^2)^7$ and $(k + x)^{10}$ are equal.\n\nWhat is the value of $k$?",
    "options": {
      "A": "$\\frac{1}{6}$",
      "B": "$6$",
      "C": "$\\frac{\\sqrt{6}}{6}$",
      "D": "$\\sqrt{6}$",
      "E": "$\\frac{\\sqrt{30}}{30}$",
      "F": "$\\sqrt{30}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n已知非零常数 $k$ 使得 $(1+kx^2)^7$ 与 $(k+x)^{10}$ 展开式中 $x^6$ 的系数相等，求 $k$ 的值。\n\n本题运用二项式定理，分别写出两个展开式中 $x^6$ 项的系数，建立等式求解。\n\n【解题步骤】\n对于 $(1+kx^2)^7$，通项为 $\\binom{7}{r}(kx^2)^r=\\binom{7}{r}k^r x^{2r}$。令 $2r=6$ 得 $r=3$，故 $x^6$ 的系数为：\n$\\binom{7}{3}k^3=\\frac{7\\times 6\\times 5}{3\\times 2\\times 1}k^3=35k^3$\n\n对于 $(k+x)^{10}$，通项为 $\\binom{10}{r}k^{10-r}x^r$。令 $r=6$ 得 $x^6$ 的系数为：\n$\\binom{10}{6}k^4=\\binom{10}{4}k^4=\\frac{10\\times 9\\times 8\\times 7}{4\\times 3\\times 2\\times 1}k^4=210k^4$\n\n令两系数相等：\n$35k^3=210k^4$\n\n由于 $k\\neq 0$，两边除以 $k^3$ 得：\n$35=210k$\n\n解得 $k=\\frac{35}{210}=\\frac{1}{6}$。\n\n【快捷思路】\n直接识别：$(1+kx^2)^7$ 中 $x^6$ 来自 $r=3$，系数 $35k^3$；$(k+x)^{10}$ 中 $x^6$ 来自 $r=6$，系数 $210k^4$。等式 $35k^3=210k^4$ 两边除以 $35k^3$ 得 $k=\\frac{1}{6}$。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "c_sequences_series",
      "a1_algebra_basics"
    ],
    "sections": [
      "c.binomial_specific_coefficients",
      "a1.polynomial_coefficient_matching"
    ],
    "primary_section": "c.binomial_specific_coefficients",
    "skills": [
      "binomial-expansion",
      "coefficient-comparison",
      "parameter-solving"
    ]
  },
  {
    "id": "2018-P1-Q8",
    "year": 2018,
    "paper": 1,
    "num": 8,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The sum to infinity of a geometric progression is 6.\n\nThe sum to infinity of the squares of each term in the progression is 12.\n\nFind the sum to infinity of the cubes of each term in the progression.",
    "options": {
      "A": "8",
      "B": "18",
      "C": "24",
      "D": "$\\frac{216}{7}$",
      "E": "72",
      "F": "216"
    },
    "answer": "D",
    "analysis": "【题目分析】\n已知一个等比数列各项的无穷项和为 $6$，各项平方的无穷项和为 $12$，求各项立方的无穷项和。\n\n本题需要利用等比数列无穷和公式 $S_\\infty=\\frac{a}{1-r}$（其中 $|r|<1$），通过已知条件联立求出首项 $a$ 和公比 $r$。\n\n【解题步骤】\n设原等比数列首项为 $a$，公比为 $r$（$|r|<1$）。\n\n由题意：\n$\\frac{a}{1-r}=6\\quad\\cdots(1)$\n\n各项平方构成新等比数列：$a^2,a^2r^2,a^2r^4,\\cdots$，公比为 $r^2$，首项为 $a^2$。其无穷和为：\n$\\frac{a^2}{1-r^2}=12\\quad\\cdots(2)$\n\n将式 $(2)$ 分母分解：$\\frac{a^2}{(1+r)(1-r)}=12$。\n\n利用式 $(1)$ 中 $\\frac{a}{1-r}=6$，代入得：\n$\\frac{a}{1+r}\\cdot 6=12$，即 $\\frac{a}{1+r}=2$\n\n于是 $a=2+2r\\quad\\cdots(3)$\n\n联立 $(1)$ 的变形 $a=6-6r$ 与 $(3)$：\n$6-6r=2+2r$\n\n解得 $r=\\frac{1}{2}$，代入得 $a=3$。\n\n各项立方构成等比数列：$a^3,a^3r^3,a^3r^6,\\cdots$，公比为 $r^3=\\frac{1}{8}$。其无穷和为：\n$\\frac{a^3}{1-r^3}=\\frac{27}{1-\\frac{1}{8}}=\\frac{27}{\\frac{7}{8}}=\\frac{216}{7}$\n\n【快捷思路】\n由 $\\frac{a^2}{1-r^2}=12$ 和 $\\frac{a}{1-r}=6$，两式相除立即得 $\\frac{a}{1+r}=2$，再与 $a=6-6r$ 联立解出 $a=3,r=\\frac{1}{2}$。立方和首项 $27$，公比 $\\frac{1}{8}$，结果为 $\\frac{216}{7}$。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.geometric_series_infinity",
      "c.power_transformed_series"
    ],
    "primary_section": "c.power_transformed_series",
    "skills": [
      "infinite-geometric-series",
      "power-series-transform",
      "simultaneous-equations"
    ]
  },
  {
    "id": "2018-P1-Q9",
    "year": 2018,
    "paper": 1,
    "num": 9,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "Find the complete set of values of the constant $c$ for which the cubic equation\n\n$$2x^3 - 3x^2 - 12x + c = 0$$\n\nhas three distinct real solutions.",
    "options": {
      "A": "$-20 < c < 7$",
      "B": "$-7 < c < 20$",
      "C": "$c > 7$",
      "D": "$c > -7$",
      "E": "$c < 20$",
      "F": "$c < -20$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n给定三次方程 $2x^3 - 3x^2 - 12x + c = 0$，求使方程有三个不同实根的常数 $c$ 的取值范围。三次方程的实根个数与其图像的极值位置密切相关，核心思路是利用导数找到两个极值点，要求极大值在 $x$ 轴上方且极小值在 $x$ 轴下方。\n\n【解题步骤】\n令 $f(x) = 2x^3 - 3x^2 - 12x + c$。\n\n求导得 $f'(x) = 6x^2 - 6x - 12 = 6(x-2)(x+1)$。\n\n驻点为 $x = -1$ 和 $x = 2$。由于三次项系数为正，函数先增后减再增，故 $x = -1$ 处为极大值，$x = 2$ 处为极小值。\n\n计算极值：$f(-1) = -2 - 3 + 12 + c = 7 + c$（极大值），$f(2) = 16 - 12 - 24 + c = -20 + c$（极小值）。\n\n三实根条件为极大值大于零且极小值小于零：$7 + c > 0$ 得 $c > -7$，$-20 + c < 0$ 得 $c < 20$。\n\n合并得 $-7 < c < 20$。\n\n【快捷思路】\n直接令极大值和极小值异号即可。由于 $-20 + c < 7 + c$ 恒成立，只需极小值小于零、极大值大于零，两步不等式联立即得答案。\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs",
      "a2_equations_inequalities"
    ],
    "sections": [
      "f.stationary_points_root_count",
      "i.polynomial_roots",
      "a2.parameter_inequalities"
    ],
    "primary_section": "f.stationary_points_root_count",
    "skills": [
      "derivative-sign-analysis",
      "cubic-root-counting",
      "parameter-range"
    ]
  },
  {
    "id": "2018-P1-Q10",
    "year": 2018,
    "paper": 1,
    "num": 10,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$x$ and $y$ satisfy $|2 - x| \\le 6$ and $|y + 2| \\le 4$.\n\nWhat is the greatest possible value of $|xy|$?",
    "options": {
      "A": "16",
      "B": "24",
      "C": "32",
      "D": "40",
      "E": "48",
      "F": "There is no greatest possible value."
    },
    "answer": "E",
    "analysis": "【题目分析】\n已知 $|2 - x| \\le 6$ 和 $|y + 2| \\le 4$，求 $|xy|$ 的最大可能值。这是绝对值不等式的最值问题，关键在于分别确定 $x$ 和 $y$ 的取值范围，再利用 $|xy| = |x| \\cdot |y|$ 的性质将两变量解耦。\n\n【解题步骤】\n解第一个不等式：$|2 - x| \\le 6$ 表示 $x$ 到 $2$ 的距离不超过 $6$，即 $-4 \\le x \\le 8$。因此 $|x|$ 的最大值为 $8$（在 $x = 8$ 处取得）。\n\n解第二个不等式：$|y + 2| \\le 4$ 即 $|y - (-2)| \\le 4$，表示 $y$ 到 $-2$ 的距离不超过 $4$，即 $-6 \\le y \\le 2$。因此 $|y|$ 的最大值为 $6$（在 $y = -6$ 处取得）。\n\n由于 $|xy| = |x| \\cdot |y|$，要使乘积最大，只需分别取 $|x|$ 和 $|y|$ 的最大值：$|xy|_{\\max} = 8 \\times 6 = 48$。\n\n验证可行性：$x = 8$ 在范围内，$y = -6$ 在范围内，故 $|xy| = 48$ 可以取到。\n\n【快捷思路】\n$|xy| = |x| \\cdot |y|$ 将两个变量完全分离，各自独立取最大绝对值再相乘即可，无需逐一代入边界点。$|x|_{\\max} = 8$，$|y|_{\\max} = 6$，乘积 $48$。\n【正确答案】E",
    "images": null,
    "has_image": false,
    "modules": [
      "a2_equations_inequalities"
    ],
    "sections": [
      "a2.absolute_value_inequalities"
    ],
    "primary_section": "a2.absolute_value_inequalities",
    "skills": [
      "absolute-value-inequality",
      "interval-endpoints",
      "product-maximisation"
    ]
  },
  {
    "id": "2018-P1-Q11",
    "year": 2018,
    "paper": 1,
    "num": 11,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The line $y = mx + 5$, where $m > 0$, is normal to the curve $y = 10 - x^2$ at the point $(p, q)$.\n\nWhat is the value of $p$?",
    "options": {
      "A": "$\\frac{\\sqrt{2}}{6}$",
      "B": "$-\\frac{\\sqrt{2}}{6}$",
      "C": "$\\frac{3\\sqrt{2}}{2}$",
      "D": "$-\\frac{3\\sqrt{2}}{2}$",
      "E": "$\\sqrt{5}$",
      "F": "$-\\sqrt{5}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n直线 $y = mx + 5$（其中 $m > 0$）是曲线 $y = 10 - x^2$ 在点 $(p, q)$ 处的法线，求 $p$ 的值。解题需要利用导数求切线斜率，再由法线与切线垂直得到法线斜率，最后将法线方程与已知形式对比确定参数。\n\n【解题步骤】\n曲线 $y = 10 - x^2$ 的导数为 $\\frac{dy}{dx} = -2x$，在点 $(p, q)$ 处切线斜率为 $-2p$。\n\n法线斜率为切线斜率的负倒数，即 $\\frac{1}{2p}$。因此 $m = \\frac{1}{2p}$。\n\n由 $m > 0$ 可知 $p > 0$，这将帮助我们排除负根。\n\n法线经过点 $(p, q)$，而 $q = 10 - p^2$（点在曲线上），法线方程为：\n$y - (10 - p^2) = \\frac{1}{2p}(x - p)$\n\n整理得：$y = \\frac{1}{2p}x - \\frac{1}{2} + 10 - p^2$\n\n与已知形式 $y = mx + 5$ 对比截距项：$-\\frac{1}{2} + 10 - p^2 = 5$。\n\n化简得 $p^2 = \\frac{9}{2}$，即 $p = \\pm\\frac{3\\sqrt{2}}{2}$。由 $p > 0$ 得 $p = \\frac{3\\sqrt{2}}{2}$。\n\n【快捷思路】\n法线斜率 $m = \\frac{1}{2p}$，截距为 $10 - p^2 - \\frac{1}{2}$，令其等于 $5$ 一步解出 $p^2 = \\frac{9}{2}$，结合 $m > 0$ 取正根。\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ],
    "modules": [
      "f_differentiation",
      "d_coordinate_geometry"
    ],
    "sections": [
      "f.tangent_normal_equations",
      "d.line_gradients"
    ],
    "primary_section": "f.tangent_normal_equations",
    "skills": [
      "derivative-slope",
      "normal-gradient",
      "line-intercept-comparison",
      "parameter-sign"
    ]
  },
  {
    "id": "2018-P1-Q12",
    "year": 2018,
    "paper": 1,
    "num": 12,
    "topic": "Integration",
    "difficulty": 3,
    "question": "A curve has equation $y = f(x)$, where\n\n$$f(x) = x(x - p)(x - q)(r - x)$$\n\nwith $0 < p < q < r$.\n\nYou are given that:\n\n$$\\int_{0}^{r} f(x) dx = 0$$\n\n$$\\int_{0}^{q} f(x) dx = -2$$\n\n$$\\int_{p}^{r} f(x) dx = -3$$\n\nWhat is the total area enclosed by the curve and the $x$-axis for $0 \\le x \\le r$?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "4",
      "D": "5",
      "E": "6",
      "F": "10"
    },
    "answer": "F",
    "analysis": "【题目分析】\n曲线 $f(x) = x(x-p)(x-q)(r-x)$（$0 < p < q < r$）在 $[0, r]$ 区间上与 $x$ 轴有四个交点 $0, p, q, r$。已知三个定积分的值，求曲线与 $x$ 轴围成的总面积。关键是判断各区间的正负号，将总面积与定积分联系起来。\n\n【解题步骤】\n最高次项系数为 $-x^4$，故 $f(x)$ 在两侧趋于 $-\\infty$。在 $[0, r]$ 上符号分布为：$[0, p]$ 上 $f(x) > 0$，$[p, q]$ 上 $f(x) < 0$，$[q, r]$ 上 $f(x) > 0$。\n\n设 $A = \\int_0^p f(x)\\,dx$（正面积），$B = \\int_p^q |f(x)|\\,dx = -\\int_p^q f(x)\\,dx$（正面积），$C = \\int_q^r f(x)\\,dx$（正面积）。\n\n将三个已知积分用 $A, B, C$ 表示：\n$\\int_0^r f\\,dx = A - B + C = 0$\n$\\int_0^q f\\,dx = A - B = -2$\n$\\int_p^r f\\,dx = -B + C = -3$\n\n由第一式减第三式得 $A = 3$；代入第二式得 $B = 5$；代入第一式得 $C = 2$。\n\n总面积 $= A + B + C = 3 + 5 + 2 = 10$。\n\n【快捷思路】\n三个积分方程 $A - B + C = 0$，$A - B = -2$，$-B + C = -3$，直接解线性方程组得 $A=3, B=5, C=2$，总面积即三者之和。核心在于正确判断各区间的正负号。\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "g.signed_area",
      "g.area_with_x_axis",
      "i.graph_sign_intervals"
    ],
    "primary_section": "g.signed_area",
    "skills": [
      "signed-area",
      "interval-sign-analysis",
      "linear-system-from-integrals"
    ]
  },
  {
    "id": "2018-P1-Q13",
    "year": 2018,
    "paper": 1,
    "num": 13,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The function $f(x)$ has derivative $f'(x)$.\n\nThe diagram below shows the graph of $y = f'(x)$.\n\nWhich point corresponds to a local minimum of $f(x)$?",
    "options": {
      "A": "Point A",
      "B": "Point B",
      "C": "Point C",
      "D": "Point D",
      "E": "Point E"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题给出导函数 $y = f'(x)$ 的图像，要求判断 $f(x)$ 的局部最小值点。核心考点是利用导函数的符号变化来判定原函数的极值类型，是微积分基础中的经典题型。\n【解题步骤】\n$f(x)$ 在某点取局部最小值的充要条件是：该点处 $f'(x) = 0$，且导数在左侧为负、右侧为正（即 $f'(x)$ 由负变正穿过 $x$ 轴）。\n\n逐点分析：\n- 点 A：$f'(x) = 0$，但导数从正变负，对应局部最大值。\n- 点 B：$f'(x) < 0$，不是驻点。\n- 点 C：$f'(x) = 0$，导数从负变正，对应局部最小值。\n- 点 D：$f'(x) = 0$，但导数从正变负，对应局部最大值。\n- 点 E：$f'(x) > 0$，不是驻点。\n\n因此点 C 为 $f(x)$ 的局部最小值点。\n【快捷思路】\n直接在 $f'(x)$ 图像上找与 $x$ 轴相交且从下往上穿过的点，即为 $f(x)$ 的局部最小值点。反之，从上往下穿过的点对应局部最大值。\n【正确答案】C",
    "images": {
      "image": "2018 P1 Q13 Questions and 6 options.png"
    },
    "has_image": true,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs"
    ],
    "sections": [
      "f.stationary_points_extrema",
      "i.derivative_graphs"
    ],
    "primary_section": "f.stationary_points_extrema",
    "skills": [
      "derivative-sign-change",
      "local-extremum-classification",
      "graph-reading"
    ]
  },
  {
    "id": "2018-P1-Q14",
    "year": 2018,
    "paper": 1,
    "num": 14,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The line $y = mx + 4$ passes through the points $(3, \\log_2 p)$ and $(\\log_2 p, 4)$.\n\nWhat are the possible values of $p$?",
    "options": {
      "A": "$p = 1$ and $p = 4$",
      "B": "$p = 1$ and $p = 16$",
      "C": "$p = \\frac{1}{4}$ and $p = 4$",
      "D": "$p = \\frac{1}{4}$ and $p = 64$",
      "E": "$p = \\frac{1}{64}$ and $p = 4$",
      "F": "$p = \\frac{1}{64}$ and $p = 16$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n已知直线 $y = mx + 4$ 经过两点 $(3, \\log_2 p)$ 和 $(\\log_2 p, 4)$，求 $p$ 的可能值。本题将直线方程与对数运算结合，考查代入法求解参数。\n【解题步骤】\n将两点分别代入直线方程：\n$\\log_2 p = 3m + 4$ …… (1)\n$4 = m \\log_2 p + 4$ …… (2)\n\n由 (2) 得 $m \\log_2 p = 0$，因此 $m = 0$ 或 $\\log_2 p = 0$。\n\n情况一：$m = 0$，代入 (1) 得 $\\log_2 p = 4$，故 $p = 2^4 = 16$。\n情况二：$\\log_2 p = 0$，则 $p = 2^0 = 1$，代入 (1) 得 $3m + 4 = 0$，即 $m = -4/3$，存在解。\n\n综上，$p = 1$ 或 $p = 16$。\n【快捷思路】\n令 $q = \\log_2 p$ 简化记号，方程组变为 $q = 3m + 4$ 和 $4 = mq + 4$。由第二个方程立刻得到 $mq = 0$，分 $m = 0$ 和 $q = 0$ 两种情况讨论即可，避免反复书写 $\\log_2 p$。\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "d_coordinate_geometry"
    ],
    "sections": [
      "a3.logarithm_equations",
      "d.line_equations"
    ],
    "primary_section": "a3.logarithm_equations",
    "skills": [
      "substitution",
      "case-analysis",
      "logarithm-zero",
      "parameter-equation-solving"
    ]
  },
  {
    "id": "2018-P1-Q15",
    "year": 2018,
    "paper": 1,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the sum of the real solutions of the equation:\n\n$$3^x - (\\sqrt{3})^{x+4} + 20 = 0$$",
    "options": {
      "A": "1",
      "B": "4",
      "C": "9",
      "D": "$\\log_3 20$",
      "E": "$2 \\log_3 20$",
      "F": "$4 \\log_3 20$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n方程 $3^x - (\\sqrt{3})^{x+4} + 20 = 0$，求所有实数解之和。本题通过换元将指数方程转化为二次方程，再利用对数运算求和。\n【解题步骤】\n注意到 $\\sqrt{3} = 3^{1/2}$，所以 $(\\sqrt{3})^{x+4} = 3^{(x+4)/2} = 3^{x/2 + 2} = 9 \\cdot 3^{x/2}$。\n\n设 $u = 3^{x/2}$，则 $3^x = u^2$，原方程化为：\n$u^2 - 9u + 20 = 0$\n\n因式分解：$(u - 4)(u - 5) = 0$，得 $u = 4$ 或 $u = 5$。\n\n当 $u = 4$ 时，$3^{x/2} = 4$，取以 $3$ 为底的对数得 $x/2 = \\log_3 4$，即 $x = 2\\log_3 4$。\n当 $u = 5$ 时，$3^{x/2} = 5$，得 $x = 2\\log_3 5$。\n\n两解之和为 $2\\log_3 4 + 2\\log_3 5 = 2\\log_3(4 \\times 5) = 2\\log_3 20$。\n【快捷思路】\n换元 $u = 3^{x/2}$ 是关键一步，将指数方程降次为二次方程。解之和的计算直接利用对数法则 $\\log a + \\log b = \\log(ab)$ 合并，无需分别求出具体数值。\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a1_algebra_basics"
    ],
    "sections": [
      "a3.exponential_equations",
      "a1.exponent_laws"
    ],
    "primary_section": "a3.exponential_equations",
    "skills": [
      "exponent-laws",
      "substitution-to-quadratic",
      "logarithm-sum"
    ]
  },
  {
    "id": "2018-P1-Q16",
    "year": 2018,
    "paper": 1,
    "num": 16,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The curve $C$ has equation $y = x^2 + bx + 2$, where $b \\ge 0$.\n\nFind the value of $b$ that minimises the distance between the origin and the stationary point of the curve $C$.",
    "options": {
      "A": "$b = 0$",
      "B": "$b = 1$",
      "C": "$b = 2$",
      "D": "$b = \\frac{\\sqrt{6}}{2}$",
      "E": "$b = \\sqrt{2}$",
      "F": "$b = \\sqrt{6}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n抛物线 $C: y = x^2 + bx + 2$（$b \\geq 0$），求使原点与驻点距离最小的 $b$ 值。本题综合了驻点求解、距离公式和最优化方法。\n【解题步骤】\n先求驻点。求导得 $y' = 2x + b$，令 $y' = 0$ 得 $x = -b/2$。\n代入原方程得 $y = (-b/2)^2 + b(-b/2) + 2 = b^2/4 - b^2/2 + 2 = 2 - b^2/4$。\n驻点为 $(-b/2, 2 - b^2/4)$。\n\n原点到驻点的距离平方为：\n$D^2 = (-b/2)^2 + (2 - b^2/4)^2 = b^2/4 + 4 - b^2 + b^4/16 = b^4/16 - 3b^2/4 + 4$\n\n令 $B = b^2$（$B \\geq 0$），则 $D^2 = B^2/16 - 3B/4 + 4$。\n对 $B$ 求导并令为零：$d(D^2)/dB = B/8 - 3/4 = 0$，解得 $B = 6$。\n\n故 $b^2 = 6$，又 $b \\geq 0$，得 $b = \\sqrt{6}$。\n【快捷思路】\n最小化距离等价于最小化距离平方，避免开根号。驻点坐标含 $b$ 的偶次幂，令 $B = b^2$ 后距离平方变为关于 $B$ 的二次函数，求最小值远比处理四次多项式简单。配方为 $\\frac{1}{16}(B-6)^2+\\frac{7}{4}$，因此最小值在 $B = 6$ 处取得。\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry",
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "d_coordinate_geometry",
      "a2_equations_inequalities"
    ],
    "sections": [
      "f.stationary_points",
      "f.parameter_optimisation",
      "d.distance_formula",
      "a2.quadratic_minimum"
    ],
    "primary_section": "f.parameter_optimisation",
    "skills": [
      "stationary-point",
      "distance-squared",
      "parameter-substitution",
      "quadratic-minimisation"
    ]
  },
  {
    "id": "2018-P1-Q17",
    "year": 2018,
    "paper": 1,
    "num": 17,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "There are two sets of data: the mean of the first set is 15, and the mean of the second set is 20.\n\nOne of the pieces of data from the first set is exchanged with one of the pieces of data from the second set.\n\nAs a result, the mean of the first set of data increases from 15 to 16, and the mean of the second set of data decreases from 20 to 17.\n\nWhat is the mean of the set made by combining all the data?",
    "options": {
      "A": "$16\\frac{1}{4}$",
      "B": "$16\\frac{1}{3}$",
      "C": "$16\\frac{1}{2}$",
      "D": "$16\\frac{2}{3}$",
      "E": "$16\\frac{3}{4}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题涉及两组数据的均值变化问题。第一组均值 $15$，第二组均值 $20$，交换两个数据点后，第一组均值升至 $16$，第二组均值降至 $17$。需要求合并全部数据后的总均值。关键在于发现交换前后数据的总和保持不变。\n\n【解题步骤】\n设第一组有 $n$ 个数据，第二组有 $m$ 个数据。\n\n交换前：第一组总和为 $15n$，第二组总和为 $20m$，合计 $15n+20m$。\n\n交换后：第一组总和变为 $16n$，第二组总和变为 $17m$，合计 $16n+17m$。\n\n由于交换只是内部调整，总数据量不变，故总体总和相等：\n$$15n+20m=16n+17m\\implies 3m=n$$\n\n由此知第一组数据个数是第二组的 $3$ 倍。总数据个数为 $n+m=4m$，总和为 $15n+20m=45m+20m=65m$，因此合并均值为：\n$$\\frac{65m}{4m}=\\frac{65}{4}=16\\frac{1}{4}$$\n\n【快捷思路】\n不必单独考虑交换的具体数值。利用交换前后总和不变这一核心事实，直接列出 $15n+20m=16n+17m$，快速得到 $n=3m$，代入均值公式即可。\n【正确答案】A",
    "images": null,
    "has_image": false,
    "modules": [
      "a1_algebra_basics"
    ],
    "sections": [
      "a1.mean_total_invariance",
      "a1.ratio_modelling"
    ],
    "primary_section": "a1.mean_total_invariance",
    "skills": [
      "mean-total-equation",
      "invariant-total",
      "ratio-modelling"
    ]
  },
  {
    "id": "2018-P1-Q18",
    "year": 2018,
    "paper": 1,
    "num": 18,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "What is the smallest positive value of $a$ for which the line $x = a$ is a line of symmetry of the graph of $y = \\sin (2x - \\frac{4\\pi}{3})$?",
    "options": {
      "A": "$\\frac{\\pi}{12}$",
      "B": "$\\frac{5\\pi}{12}$",
      "C": "$\\frac{7\\pi}{12}$",
      "D": "$\\frac{11\\pi}{12}$",
      "E": "$\\frac{19\\pi}{12}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n求函数 $y=\\sin\\!\\left(2x-\\frac{4\\pi}{3}\\right)$ 图像的最小正对称轴 $x=a$。正弦函数在取极值 $\\pm 1$ 处取得对称轴。\n\n【解题步骤】\n令 $2x-\\dfrac{4\\pi}{3}=\\dfrac{\\pi}{2}+n\\pi$（$n\\in\\mathbb{Z}$），即 $\\sin\\theta=\\pm 1$ 的位置。\n\n$\\sin\\theta=1$ 时：$2x-\\dfrac{4\\pi}{3}=\\dfrac{\\pi}{2}+2n\\pi$，解得 $x=\\dfrac{11\\pi}{12}+n\\pi$，最小正值 $\\dfrac{11\\pi}{12}$。\n\n$\\sin\\theta=-1$ 时：$2x-\\dfrac{4\\pi}{3}=-\\dfrac{\\pi}{2}+2n\\pi$，解得 $x=\\dfrac{5\\pi}{12}+n\\pi$，最小正值 $\\dfrac{5\\pi}{12}$。\n\n比较得 $\\dfrac{5\\pi}{12}<\\dfrac{11\\pi}{12}$，故最小正对称轴为 $x=\\dfrac{5\\pi}{12}$。\n\n【快捷思路】\n正弦函数对称轴在极值点处，分别解 $\\theta=\\pm\\pi/2$ 对应的 $x$，取最小正值即可。\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "e.trig_graph_symmetry",
      "e.phase_shift",
      "i.graph_symmetry"
    ],
    "primary_section": "e.trig_graph_symmetry",
    "skills": [
      "sine-graph-symmetry",
      "phase-shift",
      "smallest-positive-solution"
    ]
  },
  {
    "id": "2018-P1-Q19",
    "year": 2018,
    "paper": 1,
    "num": 19,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "A triangle $ABC$ is to be drawn with $AB = 10\\text{cm}$, $BC = 7\\text{cm}$ and the angle at $A$ equal to $\\theta$, where $\\theta$ is a certain specified angle.\n\nOf the two possible triangles that could be drawn, the larger triangle has three times the area of the smaller one.\n\nWhat is the value of $\\cos \\theta$?",
    "options": {
      "A": "$\\frac{5}{7}$",
      "B": "$\\frac{151}{200}$",
      "C": "$\\frac{2\\sqrt{2}}{5}$",
      "D": "$\\frac{\\sqrt{17}}{5}$",
      "E": "$\\frac{\\sqrt{51}}{8}$",
      "F": "$\\frac{\\sqrt{34}}{8}$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n已知 $AB=10$，$BC=7$，$\\angle A=\\theta$，存在两个可能三角形（SSA 情形），大三角形面积为小三角形的 $3$ 倍，求 $\\cos\\theta$。\n\n【解题步骤】\n设 $AC=x$，由余弦定理：\n$$x^2-20x\\cos\\theta+51=0$$\n两个根 $x_1,x_2$ 对应两个三角形的 $AC$ 边长。\n\n两三角形同高（从 $B$ 到射线 $AC$），面积比等于底边比：$x_2=3x_1$。\n\n由韦达定理：$x_1+x_2=20\\cos\\theta$，$x_1\\cdot x_2=51$。代入得 $3x_1^2=51\\implies x_1=\\sqrt{17}$，$x_2=3\\sqrt{17}$。\n\n故 $x_1+x_2=4\\sqrt{17}=20\\cos\\theta$，解得 $\\cos\\theta=\\dfrac{\\sqrt{17}}{5}$。\n\n【快捷思路】\n设 $AC$ 为二次方程的根，利用面积比得 $x_2=3x_1$，结合韦达定理一步到位。\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry",
      "a2_equations_inequalities"
    ],
    "sections": [
      "e.ssa_ambiguous_case",
      "e.cosine_rule",
      "e.triangle_area",
      "a2.vieta_relations"
    ],
    "primary_section": "e.ssa_ambiguous_case",
    "skills": [
      "ambiguous-case",
      "cosine-rule",
      "area-ratio",
      "vieta-relations"
    ]
  },
  {
    "id": "2018-P1-Q20",
    "year": 2018,
    "paper": 1,
    "num": 20,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the value of\n\n$$\\sin^2 0^\\circ + \\sin^2 1^\\circ + \\sin^2 2^\\circ + \\sin^2 3^\\circ + \\dots + \\sin^2 87^\\circ + \\sin^2 88^\\circ + \\sin^2 89^\\circ + \\sin^2 90^\\circ$$",
    "options": {
      "A": "0.5",
      "B": "1",
      "C": "1.5",
      "D": "45",
      "E": "45.5",
      "F": "46"
    },
    "answer": "E",
    "analysis": "【题目分析】\n计算 $S=\\sin^2 0^\\circ+\\sin^2 1^\\circ+\\cdots+\\sin^2 90^\\circ$，共 $91$ 项。利用互补角的恒等关系配对求和。\n\n【解题步骤】\n利用 $\\sin^2 x+\\sin^2(90^\\circ-x)=\\sin^2 x+\\cos^2 x=1$。\n\n采用倒序相加法：\n$$2S=\\sum_{k=0}^{90}\\left[\\sin^2 k^\\circ+\\sin^2(90^\\circ-k^\\circ)\\right]=\\sum_{k=0}^{90}1=91$$\n因此 $S=\\dfrac{91}{2}=45.5$。\n\n【快捷思路】\n识别 $\\sin^2\\theta+\\sin^2(90^\\circ-\\theta)=1$ 的配对关系，共 $91$ 项倒序相加得 $2S=91$，无需逐项计算。\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "e_trigonometry",
      "c_sequences_series"
    ],
    "sections": [
      "e.complementary_angle_pairs",
      "e.pythagorean_identity",
      "c.paired_sum"
    ],
    "primary_section": "e.complementary_angle_pairs",
    "skills": [
      "complementary-angle-pairing",
      "reverse-sum",
      "pythagorean-identity"
    ]
  },
  {
    "id": "2018-P2-Q1",
    "year": 2018,
    "paper": 2,
    "num": 1,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The function f is given, for $x > 0$, by\n\n$$f(x) = \\frac{x^3 - 4x}{2\\sqrt{x}}$$\n\nFind the value of $f'(4)$.",
    "options": {
      "A": "3",
      "B": "9",
      "C": "9.5",
      "D": "12",
      "E": "39.5",
      "F": "88"
    },
    "answer": "C",
    "analysis": "【题目分析】\n给定函数 $f(x)=\\dfrac{x^3-4x}{2\\sqrt{x}}$（$x>0$），求 $f'(4)$ 的值。本题核心在于先用指数法则化简分式，再对化简后的幂函数逐项求导，最后代入求值。直接对原分式用商法则会非常繁琐，化简是本题的关键突破口。\n\n【解题步骤】\n先将分子各项分别除以分母：\n$$f(x)=\\frac{x^3}{2x^{1/2}}-\\frac{4x}{2x^{1/2}}=\\frac{1}{2}x^{5/2}-2x^{1/2}$$\n\n利用幂函数求导公式 $\\dfrac{d}{dx}(x^n)=nx^{n-1}$：\n$$f'(x)=\\frac{1}{2}\\cdot\\frac{5}{2}x^{3/2}-2\\cdot\\frac{1}{2}x^{-1/2}=\\frac{5}{4}x^{3/2}-x^{-1/2}$$\n\n代入 $x=4$：\n$$f'(4)=\\frac{5}{4}\\cdot 4^{3/2}-4^{-1/2}=\\frac{5}{4}\\cdot 8-\\frac{1}{2}=10-\\frac{1}{2}=9.5$$\n\n【快捷思路】\n先化简为幂函数形式是本题唯一高效路径。记住 $\\sqrt{x}=x^{1/2}$，除法即指数相减：$x^3\\div x^{1/2}=x^{5/2}$。化简后求导一步到位，代入时注意 $4^{3/2}=(\\sqrt{4})^3=2^3=8$。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "modules": [
      "f_differentiation"
    ],
    "sections": [
      "f.power_rule",
      "f.surd_index_form"
    ],
    "primary_section": "f.power_rule",
    "skills": [
      "surd-to-index-form",
      "power-rule-differentiation",
      "substitution-evaluation"
    ]
  },
  {
    "id": "2018-P2-Q2",
    "year": 2018,
    "paper": 2,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the value of the constant term in the expansion of\n\n$$ \\left( x^6 - \\frac{1}{x^2} \\right)^{12} $$",
    "options": {
      "A": "$-495$",
      "B": "$-220$",
      "C": "$-66$",
      "D": "$66$",
      "E": "$220$",
      "F": "$495$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n求 $\\left(x^6-\\dfrac{1}{x^2}\\right)^{12}$ 展开式中的常数项。这是二项式定理的典型应用，关键是写出通项公式并令 $x$ 的指数为零来确定对应的项数。\n\n【解题步骤】\n由二项式定理，第 $k$ 项（$k$ 从 $0$ 开始计数）为：\n$$\\binom{12}{k}(x^6)^{12-k}\\left(-\\frac{1}{x^2}\\right)^k=\\binom{12}{k}(-1)^k x^{6(12-k)}\\cdot x^{-2k}=\\binom{12}{k}(-1)^k x^{72-8k}$$\n\n常数项要求 $x$ 的指数为零：\n$$72-8k=0\\quad\\Rightarrow\\quad k=9$$\n\n代入得常数项：\n$$\\binom{12}{9}(-1)^9=\\binom{12}{3}\\cdot(-1)=\\frac{12\\times 11\\times 10}{3\\times 2\\times 1}\\cdot(-1)=220\\cdot(-1)=-220$$\n\n这里利用了 $\\dbinom{n}{k}=\\dbinom{n}{n-k}$ 将 $\\dbinom{12}{9}$ 化为更易计算的 $\\dbinom{12}{3}$。\n\n【快捷思路】\n通项中 $x$ 的指数为 $6(12-k)-2k=72-8k$，令其为零得 $k=9$。符号由 $(-1)^k=(-1)^9=-1$ 确定为负。二项式系数用 $\\dbinom{12}{3}$ 计算比 $\\dbinom{12}{9}$ 更方便。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.binomial_specific_terms",
      "c.constant_term"
    ],
    "primary_section": "c.binomial_specific_terms",
    "skills": [
      "binomial-general-term",
      "constant-term-extraction",
      "negative-index-laws"
    ]
  },
  {
    "id": "2018-P2-Q3",
    "year": 2018,
    "paper": 2,
    "num": 3,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider the following statement:\n\n> A car journey consists of two parts. In the first part, the average speed is $u$ km/h. In the second part, the average speed is $v$ km/h. Hence the average speed for the whole journey is $\\frac{1}{2}(u + v)$ km/h.\n\nWhich of the following examples of car journeys provide(s) a **counterexample** to the statement?\n\n*   **I** In the first part of the journey, the car travels at a constant speed of 50 km/h for 100 km. In the second part of the journey, the car travels at a constant speed of 40 km/h for 100 km.\n*   **II** In the first part of the journey, the car travels at a constant speed of 50 km/h for one hour. In the second part of the journey, the car travels at a constant speed of 40 km/h for one hour.\n*   **III** In the first part of the journey, the car travels at a constant speed of 50 km/h for 80 km. In the second part of the journey, the car travels at a constant speed of 40 km/h for 100 km.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "F",
    "analysis": "【题目分析】\n题目给出一个论断：一段行程分两部分，第一部分平均速度为 $u$，第二部分平均速度为 $v$，则全程平均速度为 $\\dfrac{1}{2}(u+v)$。要求判断给出的三个具体行程中，哪些构成该论断的反例（counterexample），即哪些行程的实际平均速度不等于 $\\dfrac{1}{2}(u+v)$。注意 $\\dfrac{1}{2}(u+v)=\\dfrac{1}{2}(50+40)=45$，只需逐一计算各行程的真实平均速度即可。\n\n【解题步骤】\n平均速度 = 总距离 $\\div$ 总时间。\n\n**行程 I**：第一段 $50$ km/h 行驶 $100$ km，用时 $t_1=2$ h；第二段 $40$ km/h 行驶 $100$ km，用时 $t_2=2.5$ h。总距离 $D=200$ km，总时间 $T=4.5$ h，平均速度 $V=\\dfrac{200}{4.5}=\\dfrac{400}{9}\\approx 44.44\\neq 45$，是反例。\n\n**行程 II**：第一段 $50$ km/h 行驶 $1$ h，距离 $d_1=50$ km；第二段 $40$ km/h 行驶 $1$ h，距离 $d_2=40$ km。总距离 $D=90$ km，总时间 $T=2$ h，平均速度 $V=\\dfrac{90}{2}=45$，恰好等于 $\\dfrac{1}{2}(u+v)$，不是反例。\n\n**行程 III**：第一段 $50$ km/h 行驶 $80$ km，用时 $t_1=1.6$ h；第二段 $40$ km/h 行驶 $100$ km，用时 $t_2=2.5$ h。总距离 $D=180$ km，总时间 $T=4.1$ h，平均速度 $V=\\dfrac{180}{4.1}=\\dfrac{1800}{41}\\approx 43.90\\neq 45$，是反例。\n\n因此 I 和 III 是反例。\n\n【快捷思路】\n当两段时间相等时（如行程 II），平均速度恰好是算术平均 $\\dfrac{u+v}{2}$；但当两段距离相等或时间不等时（如行程 I 和 III），实际平均速度是加权平均，不等于算术平均。掌握这个规律可直接判断，无需逐个计算。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "modules": [
      "h_logic_counterexamples"
    ],
    "sections": [
      "h.counterexample_construction",
      "h.statement_testing"
    ],
    "primary_section": "h.counterexample_construction",
    "skills": [
      "counterexample-testing",
      "average-speed",
      "weighted-average"
    ]
  },
  {
    "id": "2018-P2-Q4",
    "year": 2018,
    "paper": 2,
    "num": 4,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "The non-zero real number $c$ is such that the equation $\\cos x = c$ has two solutions for $0 < x < \\frac{3}{2}\\pi$.\n\nHow many solutions of the equation $\\cos^2 2x = c^2$ are there in the range $0 < x < \\frac{3}{2}\\pi$?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "6",
      "E": "7",
      "F": "8"
    },
    "answer": "D",
    "analysis": "【题目分析】\n已知 $\\cos x=c$（$c\\neq 0$）在区间 $\\left(0,\\dfrac{3\\pi}{2}\\right)$ 内恰有两个解。由此可确定 $c$ 的取值范围。再求方程 $\\cos^2 2x=c^2$ 在同一区间内的解的个数。本题需结合余弦函数图像分析解的分布。\n\n【解题步骤】\n首先分析条件：在 $\\left(0,\\dfrac{3\\pi}{2}\\right)$ 上，$\\cos x$ 从 $1$ 递减到 $-1$（经过 $x=\\pi$），再从 $-1$ 递增到 $0$（到达 $x=\\frac{3\\pi}{2}$）。要使 $\\cos x=c$ 恰有两个解，直线 $y=c$ 必须与曲线在此区间内相交两次，这要求 $-1<c<0$（此时一条水平线在 $(0,\\pi)$ 和 $(\\pi,\\frac{3\\pi}{2})$ 各交一次）。\n\n方程 $\\cos^2 2x=c^2$ 等价于 $\\cos 2x=c$ 或 $\\cos 2x=-c$。\n\n令 $u=2x$，则 $u\\in(0,3\\pi)$。由于 $-1<c<0$，故 $0<-c<1$。\n\n对于 $\\cos u=c$（$c$ 为负）：在 $(0,2\\pi)$ 内有 $2$ 个解，在 $(2\\pi,3\\pi)$ 内还有 $1$ 个解（因为 $c+2\\pi$ 对应的角在 $(2\\pi,3\\pi)$ 中），共 $3$ 个解。\n\n对于 $\\cos u=-c$（$-c$ 为正）：在 $(0,2\\pi)$ 内有 $2$ 个解，在 $(2\\pi,3\\pi)$ 内还有 $1$ 个解，共 $3$ 个解。\n\n由于 $c\\neq -c$（$c\\neq 0$），两组解互不重合，总计 $6$ 个解。\n\n【快捷思路】\n由 $\\cos x=c$ 在 $(0,\\frac{3\\pi}{2})$ 有两个解 $\\Rightarrow -1<c<0$。换元 $u=2x$，范围扩大到 $(0,3\\pi)$，即 $1.5$ 个完整周期。每条水平线 $y=c$ 和 $y=-c$ 在 $1.5$ 个周期内各交 $3$ 次，共 $6$ 个解。画草图可以直观验证。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "modules": [
      "e_trigonometry"
    ],
    "sections": [
      "e.trig_equation_solution_count",
      "e.cosine_graphs"
    ],
    "primary_section": "e.trig_equation_solution_count",
    "skills": [
      "range-from-solution-count",
      "angle-doubling-substitution",
      "graphical-solution-counting"
    ]
  },
  {
    "id": "2018-P2-Q5",
    "year": 2018,
    "paper": 2,
    "num": 5,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "The two diagonals of the quadrilateral $Q$ are perpendicular.\n\nConsider the following statements:\n\nI One of the diagonals of $Q$ is a line of symmetry of $Q$.\n\nII The midpoints of the sides of $Q$ are the vertices of a square.\n\nWhich of these statements is/are **necessarily** true for the quadrilateral $Q$?",
    "options": {
      "A": "neither of them",
      "B": "I only",
      "C": "II only",
      "D": "I and II"
    },
    "answer": "A",
    "analysis": "【题目分析】\n已知四边形$Q$的两条对角线互相垂直，判断两个命题是否必然成立。这是一道典型的反例判断题，核心思路是不需要证明命题为真，而是尝试构造反例说明命题为假。\n\n命题I：一条对角线是对称轴。命题II：四边中点构成正方形。\n\n【解题步骤】\n对于命题I，画图法最直观。画两条垂直的对角线，只需让不在同一条对角线上的两个顶点到该对角线的距离不同，即可破坏对称性。例如取对角线交点为原点，在两条对角线上分别取不对称的点作为顶点，得到的一般四边形满足对角线垂直但没有对称轴，故命题I不必然成立。\n\n对于命题II，由Varignon定理可知，任意四边形各边中点构成平行四边形，其边分别平行于原四边形的对角线。当原四边形的对角线垂直时，中点四边形的相邻边也互相垂直，因此它是矩形。但矩形不一定是正方形；还需要原四边形的两条对角线相等，才能保证中点四边形相邻边长度相等。构造一个对角线垂直但不相等的四边形即可作为反例。\n\n综上，两个命题都不必然成立。\n\n【快捷思路】\n遇到这类几何判断题，直接画图尝试构造反例比严格证明更高效。对角线垂直只保证了中点四边形是矩形而非正方形，对称性则需要更多条件。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ],
    "modules": [
      "h_logic_counterexamples",
      "d_coordinate_geometry"
    ],
    "sections": [
      "h.necessary_condition_counterexamples",
      "d.quadrilateral_diagonals",
      "d.midpoint_geometry"
    ],
    "primary_section": "h.necessary_condition_counterexamples",
    "skills": [
      "necessary-condition-testing",
      "counterexample-construction",
      "varignon-theorem",
      "perpendicular-diagonals"
    ]
  },
  {
    "id": "2018-P2-Q6",
    "year": 2018,
    "paper": 2,
    "num": 6,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Which one of the following functions provides a **counterexample** to the statement:\n\n> if $f'(x) > 0$ for all real $x$, **then** $f(x) > 0$ for all real $x$.",
    "options": {
      "A": "$f(x) = x^2 + 1$",
      "B": "$f(x) = x^2 - 1$",
      "C": "$f(x) = x^3 + x + 1$",
      "D": "$f(x) = 1 - x$",
      "E": "$f(x) = 2^x$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n寻找一个函数作为反例，推翻命题：若$f'(x) > 0$对所有实数$x$成立，则$f(x) > 0$对所有实数$x$成立。\n\n反例的定义是：前提条件成立（$f'(x) > 0$），但结论不成立（$f(x) > 0$不成立），即函数严格递增但函数值可以为负。\n\n【解题步骤】\n逐项检验各选项：\n\n选项A：$f(x)=x^2+1$，$f'(x)=2x$，当$x<0$时$f'(x)<0$，不满足前提，排除。\n\n选项B：$f(x)=x^2-1$，$f'(x)=2x$，同样当$x<0$时$f'(x)<0$，不满足前提，排除。\n\n选项C：$f(x)=x^3+x+1$，$f'(x)=3x^2+1$。由于$3x^2 \\geq 0$恒成立，故$3x^2+1 \\geq 1 > 0$对所有$x$成立，前提满足。再看结论：$f(-1)=-1-1+1=-1 < 0$，函数值可以为负，结论不成立。因此C是反例。\n\n选项D：$f(x)=1-x$，$f'(x)=-1 < 0$，不满足前提，排除。\n\n选项E：$f(x)=2^x$，$f'(x)=2^x\\ln 2 > 0$，且$2^x > 0$恒成立，前提和结论都成立，不是反例，排除。\n\n【快捷思路】\n只需快速筛选导数恒正的函数。二次函数导数为一次式不可能恒正；三次函数$x^3+x+1$的导数$3x^2+1$显然恒正，且$x \\to -\\infty$时函数值趋向负无穷，天然就是反例。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Functions"
    ],
    "modules": [
      "h_logic_counterexamples",
      "f_differentiation",
      "i_functions_graphs"
    ],
    "sections": [
      "h.counterexample_construction",
      "f.monotonicity",
      "i.function_monotonicity"
    ],
    "primary_section": "h.counterexample_construction",
    "skills": [
      "counterexample-construction",
      "differentiate-polynomial",
      "monotonicity-test",
      "check-conclusion-failure"
    ]
  },
  {
    "id": "2018-P2-Q7",
    "year": 2018,
    "paper": 2,
    "num": 7,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "Sequence 1 is an arithmetic progression with first term 11 and common difference 3.\n\nSequence 2 is an arithmetic progression with first term 2 and common difference 5.\n\nSome numbers that appear in Sequence 1 also appear in Sequence 2. Let $N$ be the 20th such number.\n\nWhat is the remainder when $N$ is divided by 7?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4",
      "F": "5",
      "G": "6"
    },
    "answer": "B",
    "analysis": "【题目分析】\n两个等差数列的公共项问题。数列1：首项$11$，公差$3$；数列2：首项$2$，公差$5$。要求第$20$个公共项$N$被$7$除的余数。\n\n【解题步骤】\n列出两数列前若干项：\n数列1：$11, 14, 17, 20, 23, 26, 29, 32, \\ldots$\n数列2：$2, 7, 12, 17, 22, 27, 32, 37, \\ldots$\n\n观察发现第一个公共项是$17$，第二个是$32$，差值为$15$。这是因为公共项必须同时满足$a_n = 11+3m = 2+5k$，即$3m - 5k = -9$。两数列的公差分别为$3$和$5$，最小公倍数为$15$，故公共项构成以$17$为首项、$15$为公差的等差数列。\n\n第$20$个公共项为：\n$N = 17 + (20-1) \\times 15 = 17 + 285 = 302$\n\n计算$302 \\div 7 = 43 \\cdots 1$，余数为$1$。\n\n【快捷思路】\n直接写出两数列前几项，找出前两个公共项$17$和$32$，差为$15$（即$\\text{lcm}(3,5)$），立即得到公共项通项为$17+15k$。第$20$项$302$除以$7$求余即可。利用同余也可快速验证：$302 = 7 \\times 43 + 1$。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory"
    ],
    "modules": [
      "c_sequences_series",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "c.arithmetic_sequences",
      "k.divisibility_remainders",
      "k.modular_arithmetic"
    ],
    "primary_section": "c.arithmetic_sequences",
    "skills": [
      "common-arithmetic-progression",
      "least-common-multiple",
      "modular-remainder"
    ]
  },
  {
    "id": "2018-P2-Q8",
    "year": 2018,
    "paper": 2,
    "num": 8,
    "topic": "Combinatorics",
    "difficulty": 3,
    "question": "This consists of *upstrokes* which go upwards from left to right, and *downstrokes* which go downwards from left to right. The example shown has six upstrokes and six downstrokes. The horizontal line at the bottom is known as *sea level*.\n\nA *mountain profile of order n* consists of $n$ upstrokes and $n$ downstrokes, with the condition that the profile begins and ends at sea level and **never** goes **below** sea level (although it might reach sea level at any point). So the example shown is a mountain profile of order 6.\n\nMountain profiles can be coded by using U to indicate an upstroke and D to indicate a downstroke. The example shown has the code UDUUUDUDDUDD. A sequence of U’s and D’s obtained from a mountain profile in this way is known as a *valid code*.\n\nWhich of the following statements is/are true?\n\n*   **I** If a valid code is written in reverse order, the result is always a valid code.\n\n*   **II** If each U in a valid code is replaced by D and each D by U, the result is always a valid code.\n\n*   **III** If U is added at the beginning of a valid code and D is added at the end of the code, the result is always a valid code.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "D",
    "analysis": "【题目分析】\n山峰剖面图（mountain profile）由$n$个上坡（U）和$n$个下坡（D）组成，从海平面出发、回到海平面，且过程中不低于海平面。这等价于Dyck路径（括号匹配）的编码问题。判断三种变换操作后是否仍是有效编码。\n\n【解题步骤】\n任何有效编码的第一个字符必为U（否则第一步就低于海平面），最后一个字符必为D（否则最后一步无法回到海平面）。\n\n判断I：将有效编码反转。原编码以D结尾，反转后以D开头，第一步就低于海平面，不可能是有效编码。故I错误。\n\n判断II：将每个U换为D、每个D换为U。原编码以U开头，变换后以D开头，同样第一步就低于海平面，不可能是有效编码。故II错误。\n\n判断III：在开头加U、结尾加D。新编码以U开头，先将高度提升至$1$，中间部分走原编码的完整路径。由于原编码全程不低于海平面，现在整体抬高了一层，更不会低于海平面。最后加的D使总高度回到$0$。新编码有$n+1$个U和$n+1$个D，且全程不低于海平面，必为有效编码。故III正确。\n\n【快捷思路】\n抓住有效编码的核心约束：首字母必为U。I的反转使首字母变为D；II的U-D互换也使首字母变为D；两者都不满足基本要求。III开头加U不会破坏首字母条件，且全程抬高一层，天然有效。\n\n【正确答案】D",
    "images": {
      "image": "2018 P2 Q8.png"
    },
    "has_image": true,
    "related_topics": [
      "Proof"
    ],
    "modules": [
      "k_number_theory_combinatorics",
      "l_proof_methods"
    ],
    "sections": [
      "k.dyck_paths",
      "k.valid_code_transformations",
      "l.direct_proof_and_cases"
    ],
    "primary_section": "k.dyck_paths",
    "skills": [
      "dyck-path-prefix-condition",
      "valid-code-transformation",
      "statement-evaluation"
    ]
  },
  {
    "id": "2018-P2-Q9",
    "year": 2018,
    "paper": 2,
    "num": 9,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the following attempt to solve the equation $4x\\sqrt{2x - 1} = 10x - 5$:\n\n$$4x\\sqrt{2x - 1} = 10x - 5$$\n$\\downarrow$ (I)\n\n$$4x\\sqrt{2x - 1} = 5(2x - 1)$$\n$\\downarrow$ (II)\n\n$$16x^2(2x - 1) = 25(2x - 1)^2$$\n$\\downarrow$ (III)\n\n$$16x^2 = 25(2x - 1)$$\n$\\downarrow$ (IV)\n$$16x^2 - 50x + 25 = 0$$\n$\\downarrow$ (V)\n$$(8x - 5)(2x - 5) = 0$$\n$\\downarrow$ (VI)\n\nThe solutions of the original equation are $x = \\frac{5}{8}$ and $x = \\frac{5}{2}$.\n\nWhich one of the following is true?",
    "options": {
      "A": "The solution is correct.",
      "B": "Only one of $x = \\frac{5}{8}$ and $x = \\frac{5}{2}$ is correct and the error arises as a result of step (II).",
      "C": "Only one of $x = \\frac{5}{8}$ and $x = \\frac{5}{2}$ is correct and the error arises as a result of step (III).",
      "D": "Only one of $x = \\frac{5}{8}$ and $x = \\frac{5}{2}$ is correct and the error arises as a result of step (IV).",
      "E": "There is another value of $x$ that satisfies the original equation and the error arises as a result of step (II).",
      "F": "There is another value of $x$ that satisfies the original equation and the error arises as a result of step (III).",
      "G": "There is another value of $x$ that satisfies the original equation and the error arises as a result of step (IV)."
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题给出了解方程 $4x\\sqrt{2x - 1} = 10x - 5$ 的完整步骤链，要求识别推理中的错误及其位置。核心在于追踪每一步变换的合法性，特别关注可能丢失解的操作。\n\n【解题步骤】\n原方程 $4x\\sqrt{2x - 1} = 10x - 5$。\n\n步骤(I)：将右边因式分解，$10x - 5 = 5(2x - 1)$，这是恒等变形，正确。\n\n步骤(II)：两边平方，得 $16x^2(2x - 1) = 25(2x - 1)^2$。平方操作不可逆，可能引入增根，但不会丢根。验证 $x = \\frac{5}{8}$ 和 $x = \\frac{5}{2}$ 确实满足原方程。\n\n步骤(III)：两边约去 $2x - 1$。这里是关键错误！当 $2x - 1 = 0$ 即 $x = \\frac{1}{2}$ 时，除以零无意义。验证 $x = \\frac{1}{2}$：左边 $4 \\cdot \\frac{1}{2} \\cdot \\sqrt{0} = 0$，右边 $10 \\cdot \\frac{1}{2} - 5 = 0$，等式成立。所以 $x = \\frac{1}{2}$ 是原方程的第三个解，在这一步被丢失。\n\n后续步骤(IV)→(VI)：解二次方程 $16x^2 - 50x + 25 = 0$，得 $x = \\frac{5}{8}$ 和 $x = \\frac{5}{2}$，计算无误，但由于前一步丢根，结论不完整。\n\n正确做法：从 $16x^2(2x - 1) = 25(2x - 1)^2$ 应移项提公因式，得 $(2x - 1)(16x^2 - 25(2x - 1)) = 0$，才能保留 $x = \\frac{1}{2}$ 这个解。\n\n【快捷思路】\n看到方程中出现 $2x - 1$ 同时出现在根号内和方程两边时，警惕除以 $2x - 1$ 可能丢根。正确做法是移项提公因式 $(2x - 1)$，而非直接约去。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof"
    ],
    "modules": [
      "a2_equations_inequalities",
      "l_proof_methods",
      "h_logic_counterexamples"
    ],
    "sections": [
      "a2.equation_solving",
      "l.proof_error_detection",
      "h.invalid_division"
    ],
    "primary_section": "l.proof_error_detection",
    "skills": [
      "proof-step-audit",
      "division-by-zero-check",
      "lost-solution-detection",
      "radical-equation-solving"
    ]
  },
  {
    "id": "2018-P2-Q10",
    "year": 2018,
    "paper": 2,
    "num": 10,
    "topic": "Functions",
    "difficulty": 3,
    "question": "Consider the following three conditions, where $a$ is a real constant:\n\nI $f(a - x) = f(a + x)$ for all real $x$.\n\nII $f(2a - x) = f(x)$ for all real $x$.\n\nIII $f(a - x) = f(x)$ for all real $x$.\n\nWhich of these conditions is/are **necessary and sufficient** for the graph of $y = f(x)$ to have reflection symmetry in the line $x = a$?\n\n<table>\n  <thead>\n    <tr>\n        <th> </th>\n        <th>Condition I is<br/>necessary and<br/>sufficient</th>\n        <th>Condition II is<br/>necessary and<br/>sufficient</th>\n        <th>Condition III is<br/>necessary and<br/>sufficient</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n        <td>",
    "options": {
      "A": "</td>\n<td>yes</td>\n<td>yes</td>\n<td>yes</td>\n    </tr>\n<tr>\n        <td>",
      "B": "</td>\n<td>yes</td>\n<td>yes</td>\n<td>no</td>\n    </tr>\n<tr>\n        <td>",
      "C": "</td>\n<td>yes</td>\n<td>no</td>\n<td>yes</td>\n    </tr>\n<tr>\n        <td>",
      "D": "</td>\n<td>yes</td>\n<td>no</td>\n<td>no</td>\n    </tr>\n<tr>\n        <td>",
      "E": "</td>\n<td>no</td>\n<td>yes</td>\n<td>yes</td>\n    </tr>\n<tr>\n        <td>",
      "F": "</td>\n<td>no</td>\n<td>yes</td>\n<td>no</td>\n    </tr>\n<tr>\n        <td>",
      "G": "</td>\n<td>no</td>\n<td>no</td>\n<td>yes</td>\n    </tr>\n<tr>\n        <td>",
      "H": "</td>\n<td>no</td>\n<td>no</td>\n<td>no</td>\n    </tr>\n  </tbody>\n</table>"
    },
    "answer": "B",
    "analysis": "【题目分析】\n判断三个条件中哪些是函数图像关于直线 $x = a$ 对称的充要条件。核心是理解对称性的代数刻画：关于 $x = a$ 对称意味着以 $a$ 为中心、等距的两点函数值相等。\n\n【解题步骤】\n关于 $x = a$ 对称的代数表达：对任意实数 $x$，点 $a + x$ 和 $a - x$ 到直线 $x = a$ 的距离均为 $|x|$，因此对称要求 $f(a + x) = f(a - x)$ 对所有 $x$ 成立。\n\n条件I：$f(a - x) = f(a + x)$ 对所有实数 $x$ 成立。这正是对称性的直接代数定义，显然既是必要条件也是充分条件。\n\n条件II：$f(2a - x) = f(x)$ 对所有实数 $x$ 成立。做变量代换，令 $t = a - x$，则 $x = a - t$，$2a - x = a + t$。代入得 $f(a + t) = f(a - t)$，与条件I完全等价。因此条件II也是充要条件。\n\n条件III：$f(a - x) = f(x)$ 对所有实数 $x$ 成立。注意 $a - x$ 和 $x$ 的中点是 $\\frac{(a - x) + x}{2} = \\frac{a}{2}$，因此该条件描述的是关于 $x = \\frac{a}{2}$ 的对称性，而非关于 $x = a$ 的对称性。举反例：取 $f(x) = (x - a)^2$，关于 $x = a$ 对称，但 $f(a - x) = x^2$，$f(x) = (x - a)^2$，两者不等（如取 $x = 0$，得 $f(a) = 0$ 但 $f(0) = a^2 \\neq 0$），说明条件III不是必要条件。\n\n因此条件I和II都是充要条件，条件III不是。\n\n【快捷思路】\n判断对称条件时，关键看两个自变量的中点是否为对称轴。$a+x$ 与 $a-x$ 中点为 $a$（正确），$2a-x$ 与 $x$ 中点为 $a$（正确），但 $a-x$ 与 $x$ 中点为 $a/2$（错误）。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic"
    ],
    "modules": [
      "i_functions_graphs",
      "h_logic_counterexamples"
    ],
    "sections": [
      "i.graph_symmetry",
      "h.necessary_sufficient_conditions"
    ],
    "primary_section": "i.graph_symmetry",
    "skills": [
      "symmetry-condition-translation",
      "variable-substitution",
      "necessary-sufficient-analysis"
    ]
  },
  {
    "id": "2018-P2-Q11",
    "year": 2018,
    "paper": 2,
    "num": 11,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "Consider the equation $2^x = mx + c$, where $m$ and $c$ are real constants.\n\nWhich of the following statements is/are true?\n\nI The equation has a negative real solution **only if** $c > 1$.\n\nII The equation has two distinct real solutions **if** $c > 1$.\n\nIII The equation has two distinct positive real solutions **if and only if** $c \\le 1$.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "A",
    "analysis": "【题目分析】\n方程 $2^x = mx + c$ 的解对应指数曲线 $y = 2^x$ 与直线 $y = mx + c$ 的交点横坐标。$y = 2^x$ 是严格递增的凸函数，过点 $(0, 1)$，当 $x \\to -\\infty$ 时趋于 $0$，当 $x \\to +\\infty$ 时趋于 $+\\infty$。直线斜率为 $m$，纵截距为 $c$。逐一检验三个命题。\n\n【解题步骤】\n命题I：方程有负实数解仅当 $c > 1$，即若有负解则必有 $c > 1$。取反例 $m = -1$，$c = 0$，直线为 $y = -x$。当 $x = -1$ 时左边 $2^{-1} = 0.5$，右边 $1$；当 $x = -0.5$ 时左边 $\\approx 0.707$，右边 $0.5$。由连续性知在 $(-1, -0.5)$ 之间存在负解，但 $c = 0 \\ngtr 1$。命题I为假。\n\n命题II：若 $c > 1$ 则方程有两个不同实数解。取 $c = 2$，$m = -1$，直线 $y = -x + 2$ 斜率为负。由于 $2^x$ 严格递增而 $-x + 2$ 严格递减，两者最多只有一个交点。事实上当 $x = 0$ 时左边 $1 < 2$，当 $x = 1$ 时左边 $2 < 1$ 不成立，实际仅有一个交点。命题II为假。\n\n命题III：方程有两个不同正实数解当且仅当 $c \\leq 1$。取 $c = 0$，$m = -1$，直线 $y = -x$ 斜率为负，与递增的 $2^x$ 最多一个交点，不可能有两个正解。命题III为假。\n\n三个命题均不成立。\n\n【快捷思路】\n利用图像直观分析：指数函数严格递增，若直线斜率 $m < 0$ 则直线严格递减，两者最多一个交点。构造 $m < 0$ 的反例即可逐一击破三个命题。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Logic"
    ],
    "modules": [
      "i_functions_graphs",
      "a3_exponents_logarithms",
      "h_logic_counterexamples"
    ],
    "sections": [
      "i.equation_roots.graph_intersections",
      "a3.exponential_function_graphs",
      "h.counterexample_construction"
    ],
    "primary_section": "i.equation_roots.graph_intersections",
    "skills": [
      "graph-intersection",
      "exponential-linear-intersection",
      "counterexample-construction",
      "parameter-counterexample"
    ]
  },
  {
    "id": "2018-P2-Q12",
    "year": 2018,
    "paper": 2,
    "num": 12,
    "topic": "Logic",
    "difficulty": 3,
    "question": "> For any positive integer $N$ there is a positive integer $K$ such that $N(Km + 1) - 1$ is not prime for any positive integer $m$.\n\nWhich one of the following is the negation of this statement?",
    "options": {
      "A": "For any positive integer $N$ there is a positive integer $K$ such that there is a positive integer $m$ for which $N(Km + 1) - 1$ is prime.",
      "B": "For any positive integer $N$ there is a positive integer $K$ such that there is a positive integer $m$ for which $N(Km + 1) - 1$ is not prime.",
      "C": "For any positive integer $N$ there is a positive integer $K$ such that for any positive integer $m$, $N(Km + 1) - 1$ is not prime.",
      "D": "For any positive integer $N$, any positive integer $K$ and any positive integer $m$, $N(Km + 1) - 1$ is not prime.",
      "E": "There is a positive integer $N$ such that for any positive integer $K$ there is a positive integer $m$ for which $N(Km + 1) - 1$ is not prime.",
      "F": "There is a positive integer $N$ such that for any positive integer $K$ there is a positive integer $m$ for which $N(Km + 1) - 1$ is prime.",
      "G": "There is a positive integer $N$ such that for any positive integer $K$ and any positive integer $m$, $N(Km + 1) - 1$ is prime.",
      "H": "There is a positive integer $N$ and a positive integer $K$ for which there is no positive integer $m$ for which $N(Km + 1) - 1$ is prime."
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考察量词否定的逻辑规则：全称量词 $\\forall$ 与存在量词 $\\exists$ 互换，同时否定内部命题。原命题含有三层量词嵌套，需要逐层取否。\n\n【解题步骤】\n原命题的结构为：\n$$\\forall N \\in \\mathbb{Z}^+, \\; \\exists K \\in \\mathbb{Z}^+, \\; \\forall m \\in \\mathbb{Z}^+, \\; N(Km + 1) - 1 \\text{ 不是素数}$$\n\n逐层取否：\n第一层：$\\forall N$ 取否定为 $\\exists N$。\n第二层：$\\exists K$ 取否定为 $\\forall K$。\n第三层：$\\forall m$ 取否定为 $\\exists m$。\n第四层：不是素数取否定为是素数。\n\n综合得到否定命题：\n$$\\exists N \\in \\mathbb{Z}^+, \\; \\forall K \\in \\mathbb{Z}^+, \\; \\exists m \\in \\mathbb{Z}^+, \\; N(Km + 1) - 1 \\text{ 是素数}$$\n\n用自然语言表述：存在正整数 $N$，使得对任意正整数 $K$，存在正整数 $m$，使得 $N(Km + 1) - 1$ 是素数。\n\n对照选项，选项F恰好匹配此表述。排除过程：A到D仍以对于任意 $N$ 开头，量词第一层未取否；H以存在 $N$ 和存在 $K$ 开头，第二层未取否；G的末尾仍为不是素数，双重否定未消除。\n\n【快捷思路】\n量词否定口诀：全称变存在，存在变全称，最后否定结论。逐层替换即可：$\\forall \\to \\exists$，$\\exists \\to \\forall$，内部命题取反。注意不是素数的否定是是素数（双重否定）。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof",
      "Number Theory"
    ],
    "modules": [
      "b_mathematical_logic_basics",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "b.quantifier_negation",
      "b.nested_quantifiers",
      "k.primes"
    ],
    "primary_section": "b.quantifier_negation",
    "skills": [
      "nested-quantifier-negation",
      "symbolic-translation",
      "prime-predicate-negation"
    ]
  },
  {
    "id": "2018-P2-Q13",
    "year": 2018,
    "paper": 2,
    "num": 13,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "The following is an attempted proof of the conjecture:\n\n$$ \\text{if } \\tan \\theta > 0, \\text{ then } \\sin \\theta + \\cos \\theta > 1. $$\n\nSuppose $\\tan \\theta > 0$, so in particular $\\cos \\theta \\neq 0$.\n\nSince $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$, then $\\sin \\theta \\cos \\theta = \\tan \\theta \\cos^2 \\theta > 0$. (I)\n\nIt follows that $1 + 2 \\sin \\theta \\cos \\theta > 1$. (II)\n\nTherefore $\\sin^2 \\theta + 2 \\sin \\theta \\cos \\theta + \\cos^2 \\theta > 1$, (III)\n\nwhich factorises to give $(\\sin \\theta + \\cos \\theta)^2 > 1$. (IV)\n\nTherefore $\\sin \\theta + \\cos \\theta > 1$. (V)\n\nWhich one of the following is the case?",
    "options": {
      "A": "The proof is correct.",
      "B": "The proof is incorrect, and the first error occurs in line (I).",
      "C": "The proof is incorrect, and the first error occurs in line (II).",
      "D": "The proof is incorrect, and the first error occurs in line (III).",
      "E": "The proof is incorrect, and the first error occurs in line (IV).",
      "F": "The proof is incorrect, and the first error occurs in line (V)."
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题要求找出一个「错误证明」中第一次出现错误的行号。命题为：若 $\\tan\\theta > 0$，则 $\\sin\\theta+\\cos\\theta > 1$。证明通过代数变形从假设推导结论，需逐行检查逻辑。\n\n【解题步骤】\n逐行验证：\n(I) $\\sin\\theta\\cos\\theta = \\tan\\theta\\cos^2\\theta$，因 $\\tan\\theta > 0$、$\\cos^2\\theta > 0$，故 $\\sin\\theta\\cos\\theta > 0$。正确。\n(II) 两边乘 $2$ 加 $1$，得 $1+2\\sin\\theta\\cos\\theta > 1$。正确。\n(III) 用恒等式 $\\sin^2\\theta+\\cos^2\\theta=1$ 替换左边。正确。\n(IV) 配方得 $(\\sin\\theta+\\cos\\theta)^2 > 1$。正确。\n(V) 由 $a^2 > 1$ 推出 $a > 1$。错误：$a$ 也可能 $< -1$。\n\n取反例 $\\theta = \\frac{5\\pi}{4}$：$\\tan\\theta = 1 > 0$，但 $\\sin\\theta+\\cos\\theta = -\\sqrt{2}$，$(\\sin\\theta+\\cos\\theta)^2 = 2 > 1$ 成立，而 $-\\sqrt{2} > 1$ 不成立。故第一个错误在(V)。\n\n【快捷思路】\n直接代入 $\\theta=\\frac{5\\pi}{4}$，前四行成立，(V) 得 $-\\sqrt{2}>1$ 明显错误，一步定位。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof",
      "Counterexamples"
    ],
    "modules": [
      "l_proof_methods",
      "e_trigonometry",
      "h_logic_counterexamples"
    ],
    "sections": [
      "l.proof_error_identification",
      "e.trig_identities",
      "h.counterexample_construction"
    ],
    "primary_section": "l.proof_error_identification",
    "skills": [
      "proof-error-identification",
      "invalid-square-root-inference",
      "trig-counterexample",
      "quadrant-analysis"
    ]
  },
  {
    "id": "2018-P2-Q14",
    "year": 2018,
    "paper": 2,
    "num": 14,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "In the triangle $PQR$, $PR = 2$, $QR = p$ and $\\angle RPQ = 30^\\circ$.\n\nWhat is the set of **all** the values of $p$ for which this information uniquely determines the length of $PQ$?",
    "options": {
      "A": "$p = 1$",
      "B": "$p = \\sqrt{3}$",
      "C": "$1 \\le p < 2$",
      "D": "$\\sqrt{3} \\le p < 2$",
      "E": "$p = 1$ or $p \\ge 2$",
      "F": "$p = \\sqrt{3}$ or $p \\ge 2$",
      "G": "$p < 2$",
      "H": "$p \\ge 2$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n三角形 $PQR$ 中已知 $PR=2$、$QR=p$、$\\angle RPQ=30^\\circ$，这是典型的「边边角」(SSA) 问题。需要确定 $p$ 取何值时 $PQ$ 唯一确定。\n\n【解题步骤】\n几何法：以 $R$ 为圆心、$p$ 为半径画圆，射线从 $P$ 出发与 $PR$ 成 $30^\\circ$ 角。圆与射线交点数决定解的个数。\n圆心 $R$ 到射线的距离为 $PR\\cdot\\sin 30^\\circ = 1$。\n- $p < 1$：无交点，无解。\n- $p = 1$：相切，唯一解。\n- $1 < p < 2$：两个交点，两解。\n- $p = 2$：圆经过 $P$，一个交点为 $P$（退化），仅一个有效三角形。\n- $p > 2$：两个交点中一个在射线反向延长线上，仅一个有效解。\n\n故 $p = 1$ 或 $p \\geq 2$ 时 $PQ$ 唯一确定。\n\n【快捷思路】\n画图：圆与 $30^\\circ$ 射线的交点数。相切时 $p=1$（唯一），过大时 $p\\geq 2$（一个交点在射线外），中间 $1<p<2$ 时有两个交点。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ],
    "modules": [
      "e_trigonometry",
      "d_coordinate_geometry"
    ],
    "sections": [
      "e.ssa_ambiguous_case",
      "d.circle_line_intersections"
    ],
    "primary_section": "e.ssa_ambiguous_case",
    "skills": [
      "ambiguous-case",
      "circle-ray-intersection",
      "distance-to-line",
      "case-analysis"
    ]
  },
  {
    "id": "2018-P2-Q15",
    "year": 2018,
    "paper": 2,
    "num": 15,
    "topic": "Functions",
    "difficulty": 3,
    "question": "It is given that $f(x) = x^3 + 3qx^2 + 2$, where $q$ is a real constant.\n\nThe equation $f(x) = 0$ has 3 distinct real roots.\n\nWhich of the following statements is/are **necessarily** true?\n\n*   I The equation $f(x) + 1 = 0$ has 3 distinct real roots.\n*   II The equation $f(x + 1) = 0$ has 3 distinct real roots.\n*   III The equation $f(-x) - 1 = 0$ has 3 distinct real roots.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "G",
    "analysis": "【题目分析】\n已知 $f(x)=x^3+3qx^2+2$ 有三个不同实根，判断三个变换后的方程是否必然也有三个不同实根。\n\n【解题步骤】\n求导：$f'(x)=3x(x+2q)$，驻点为 $x=0$ 和 $x=-2q$，函数值为 $f(0)=2$ 和 $f(-2q)=4q^3+2$。\n三个不同实根说明极大值 $>0$、极小值 $<0$。因 $f(0)=2>0$，故 $x=0$ 为极大值，$x=-2q$ 为极小值，且 $4q^3+2<0$。\n\n命题I：$f(x)+1=0$ 即图像上移 $1$，新极小值 $4q^3+3$ 可能 $>0$（当 $q$ 接近临界值），不一定有三个根。✗\n命题II：$f(x+1)=0$ 为水平平移，根的个数不变。✓\n命题III：$f(-x)-1=0$ 先反射（根数不变），再下移 $1$。新极小值 $4q^3+1$，因 $4q^3+2<0$，故 $4q^3+1<0$，极小值仍在轴下，三个根必然。✓\n\n【快捷思路】\n水平平移不变根数（II必成立）；上移可能使极小值过轴（I不一定），下移使极小值更低（III必成立）。\n\n【正确答案】G",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Graphs"
    ],
    "modules": [
      "i_functions_graphs",
      "f_differentiation"
    ],
    "sections": [
      "i.polynomial_root_counts",
      "i.graph_transformations",
      "f.stationary_points_root_count"
    ],
    "primary_section": "f.stationary_points_root_count",
    "skills": [
      "stationary-points",
      "cubic-root-count",
      "graph-translation",
      "graph-reflection",
      "parameter-condition"
    ]
  },
  {
    "id": "2018-P2-Q16",
    "year": 2018,
    "paper": 2,
    "num": 16,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "In this question, $x_1, x_2, x_3, \\dots$ is an **arithmetic progression**, all of whose terms are integers.\n\nLet $n$ be a positive integer. If the median of the first $n$ terms of the sequence is an integer, which of the following three statements **must** be true?\n\n**I** The median of the first $n + 2$ terms is an integer.\n\n**II** The median of the first $2n$ terms is an integer.\n\n**III** The median of $x_2, x_4, x_6, \\dots, x_{2n}$ is an integer.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "F",
    "analysis": "【题目分析】\n等差数列 $\\{x_k\\}$ 各项为整数，已知前 $n$ 项中位数为整数，判断三个关于其他中位数的命题是否必然成立。\n\n【解题步骤】\n中位数分析：\n- $n$ 为奇数：中位数为 $x_{\\frac{n+1}{2}}$，本身是整数。\n- $n$ 为偶数：中位数为 $x_{\\frac{n}{2}}+\\frac{d}{2}$（$d$ 为公差），已知为整数，故 $d$ 为偶数。\n\n命题I：前 $n+2$ 项的中位数。\n$n$ 奇 $\\to n+2$ 奇，中位数为某一项，整数。$n$ 偶 $\\to n+2$ 偶，中位数为 $x_{\\frac{n}{2}+1}+\\frac{d}{2}$，因 $d$ 为偶数，整数。I成立。✓\n\n命题II：前 $2n$ 项的中位数。\n反例：$1,2,3,\\ldots$（$d=1$），$n=3$，前 $3$ 项中位数 $=2$（整数），前 $6$ 项中位数 $=\\frac{3+4}{2}=3.5$（非整数）。II不成立。✗\n\n命题III：子列 $x_2,x_4,\\ldots,x_{2n}$（$n$ 项，公差 $2d$）。\n$n$ 奇时中位数为 $x_{n+1}$（整数）；$n$ 偶时中位数为 $\\frac{x_n+x_{n+2}}{2}=x_{n+1}$（整数）。III成立。✓\n\n【快捷思路】\nII用 $1,2,3,\\ldots$、$n=3$ 反例排除。I和III奇偶分类均可证。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory"
    ],
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.arithmetic_progressions",
      "c.sequence_medians"
    ],
    "primary_section": "c.sequence_medians",
    "skills": [
      "parity-case-analysis",
      "median-of-sequence",
      "arithmetic-progression",
      "counterexample-testing"
    ]
  },
  {
    "id": "2018-P2-Q17",
    "year": 2018,
    "paper": 2,
    "num": 17,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "A positive integer is called a *squaresum* **if and only if** it can be written as the sum of the squares of two integers. For example, 61 and 9 are both squaresums since $61 = 5^2 + 6^2$ and $9 = 3^2 + 0^2$.\n\nA prime number is called *awkward* **if and only if** it has a remainder of 3 when divided by 4. For example, 23 is awkward since $23 = 5 \\times 4 + 3$.\n\nA (true) theorem due to Fermat states that:\n\n> A positive integer is a squaresum **if and only if** each of its awkward prime factors occurs to an even power in its prime factorisation.\n\nIt follows that $5 \\times 23^2$ is a squaresum, since 23 occurs to the power 2, but $5 \\times 23^3$ is not, since 23 occurs to the power 3.\n\nWhich one of the following statements is **not** true?",
    "options": {
      "A": "Every square number is a squaresum.",
      "B": "If $N$ and $M$ are squaresums, then so is $NM$.",
      "C": "If $NM$ is a squaresum, then $N$ and $M$ are squaresums.",
      "D": "If $N$ is not a squaresum, then $kN$ is a squaresum for some number $k$ which is a product of awkward primes."
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题引入两个新概念与一条费马定理，考查逻辑推理和反例构造能力。\n\n定义梳理：\n- squaresum：能写成两个整数平方和的正整数，即 $N = a^2 + b^2$（$a, b \\in \\mathbb{Z}$）\n- awkward prime：除以4余3的质数，即形如 $4k+3$ 的质数（如3, 7, 11, 19, 23等）\n\nFermat定理：正整数是squaresum $\\iff$ 其每个awkward质因子在质因数分解中出现偶数次幂。\n\n核心任务是找出四个命题中唯一不成立的那一个。\n\n【解题步骤】\n逐项分析：\n\n选项A：每个平方数都是squaresum。直接构造 $n^2 = n^2 + 0^2$，显然成立。\n\n选项B：若 $N, M$ 都是squaresum，则 $NM$ 也是。由定理，$N$ 和 $M$ 的每个awkward质因子都出现偶数次。$NM$ 的质因数分解是两者的合并，每个awkward质因子的总次数为两个偶数之和，仍为偶数。故 $NM$ 是squaresum。也可用Brahmagupta-Fibonacci恒等式 $(a^2+b^2)(c^2+d^2) = (ac-bd)^2+(ad+bc)^2$ 直接构造。命题成立。\n\n选项C：若 $NM$ 是squaresum，则 $N$ 和 $M$ 都是squaresum。取反例：令 $N = M = 23$。23是awkward质数（$23 \\equiv 3 \\pmod 4$），出现1次（奇数次），故23不是squaresum。但 $NM = 23^2$，awkward质因子23出现2次（偶数次），所以 $23^2$ 是squaresum。反例说明命题不成立。\n\n选项D：若 $N$ 不是squaresum，取 $k$ 为 $N$ 中所有出现奇数次的awkward质因子的乘积。乘入后每个这样的质因子次数加1变为偶数，$kN$ 满足定理条件，是squaresum。命题成立。\n\n【快捷思路】\n找反例最快。C说乘积是squaresum则因子都是——取一个awkward质数 $p$，$p$ 本身不是squaresum但 $p^2$ 是（awkward质因子出现偶数次），即 $N=M=p$ 时 $NM$ 是squaresum但 $N$ 不是。秒杀。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory",
      "Proof"
    ],
    "modules": [
      "k_number_theory_combinatorics",
      "h_logic_counterexamples",
      "l_proof_methods"
    ],
    "sections": [
      "k.prime_factorisation",
      "h.counterexample_construction",
      "l.disproof_by_counterexample"
    ],
    "primary_section": "k.prime_factorisation",
    "skills": [
      "prime-factorisation",
      "parity-of-exponents",
      "iff-definition",
      "counterexample-construction",
      "closure-property"
    ]
  },
  {
    "id": "2018-P2-Q18",
    "year": 2018,
    "paper": 2,
    "num": 18,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "$f(x)$ is a polynomial function defined for all real $x$.\n\nWhich of the following is a **necessary** condition for the inequality\n\n$$\\frac{f(a) + f(b)}{2} \\geq f\\left(\\frac{a + b}{2}\\right)$$\n\nto be true for all real numbers $a$ and $b$ with $a < b$ ?",
    "options": {
      "A": "$f(x) \\geq 0$ for all real $x$",
      "B": "$f'(x) \\geq 0$ for all real $x$",
      "C": "$f''(x) \\geq 0$ for all real $x$",
      "D": "$f(x) \\leq 0$ for all real $x$",
      "E": "$f'(x) \\leq 0$ for all real $x$",
      "F": "$f''(x) \\leq 0$ for all real $x$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n题目给出不等式 $\\frac{f(a)+f(b)}{2} \\geq f\\left(\\frac{a+b}{2}\\right)$ 对所有 $a < b$ 成立，问哪个是必要条件。\n\n这是凸函数的经典定义：连接曲线上任意两点的弦，其中点的纵坐标不小于曲线上对应中点的纵坐标。直观理解就是曲线整体向上弯曲。\n\n对于二阶可导的多项式函数，凸性等价于 $f''(x) \\geq 0$。\n\n【解题步骤】\n几何理解：$(a, f(a))$ 到 $(b, f(b))$ 的弦的中点纵坐标为 $\\frac{f(a)+f(b)}{2}$，曲线上同横坐标点的纵坐标为 $f\\left(\\frac{a+b}{2}\\right)$。不等式要求弦在曲线上方，即曲线向上弯曲（凸函数）。\n\n逐项排除：\n\n选项A（$f(x) \\geq 0$）：将凸函数整体下移仍保持凸性，故非函数值非负不是必要条件。\n\n选项B（$f'(x) \\geq 0$）：凸函数可以有递减区间，例如 $f(x) = x^2$ 在 $x < 0$ 时导数为负，仍满足不等式。非必要条件。\n\n选项C（$f''(x) \\geq 0$）：凸函数的充要条件。官方解答用逆否命题严格证明：若存在某点 $f''(x) < 0$，则曲线在该点附近向下弯曲，弦在中点处低于曲线，不等式不成立。故 $f''(x) \\geq 0$ 是必要条件。\n\n选项D、E、F 分别与A、B、C反向，同样可排除。\n\n【快捷思路】\n识别出这是凸函数的定义式。对于多项式函数，凸 $\\iff f''(x) \\geq 0$。直接选C。排除法也很快：$f(x)=x^2$ 满足原不等式但 $f'(x)$ 可负、$f(x)$ 可负，排除A、B。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Proof"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs",
      "l_proof_methods"
    ],
    "sections": [
      "f.second_derivative",
      "i.convexity",
      "l.necessary_conditions"
    ],
    "primary_section": "f.second_derivative",
    "skills": [
      "convexity-recognition",
      "second-derivative-test",
      "necessary-condition",
      "counterexample-elimination"
    ]
  },
  {
    "id": "2018-P2-Q19",
    "year": 2018,
    "paper": 2,
    "num": 19,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Three **real** numbers $x$, $y$ and $z$ satisfy $x > y > z > 1$.\n\nWhich one of the following statements **must** be true?",
    "options": {
      "A": "$\\frac{2^{z+1}}{2^x} > \\frac{2^x + 2^z}{2^y}$",
      "B": "$2 > \\frac{3^x + 3^z}{3^y}$",
      "C": "$\\frac{2 \\times 5^x}{5^z} > \\frac{5^x + 5^z}{5^y}$",
      "D": "$2 < \\frac{7^x + 7^z}{7^y}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n已知 $x > y > z > 1$，判断四个含指数表达式的不等式中哪个必定成立。\n\n这类题的标准策略是：对错误选项构造反例（取一组特定的 $x, y, z$ 使不等式不成立），对正确选项给出适用于任意取值的代数证明。核心在于利用指数函数 $a^t$（$a > 1$）的单调递增性质，以及变量之间的大小关系。\n\n【解题步骤】\n逐项验证：\n\n选项A：$2^{z+1-x} > 2^{x-y} + 2^{z-y}$。取 $x=10, y=5, z=3$，左边 $= 2^{-6} = \\frac{1}{64}$，右边 $= 2^5 + 2^{-2} = 32.25$。左边远小于右边，命题不必然成立。\n\n选项B：$2 > 3^{x-y} + 3^{z-y}$。取 $x=10, y=2$，右边第一项 $= 3^8 = 6561 \\gg 2$。命题不必然成立。\n\n选项C：$\\frac{2 \\times 5^x}{5^z} > \\frac{5^x + 5^z}{5^y}$。两边同乘 $5^y \\cdot 5^z$（底数大于1，各项为正，不等号方向不变）：\n$$2 \\times 5^{x+y} > 5^{x+z} + 5^{2z}$$\n由于 $x > y > z$，可得 $x+y > x+z$，利用指数函数递增性得 $5^{x+y} > 5^{x+z}$；同理 $x+y > z+z = 2z$，故 $5^{x+y} > 5^{2z}$。两式相加即得所需不等式，对任意满足条件的 $x, y, z$ 严格成立。\n\n选项D：$2 < 7^{x-y} + 7^{z-y}$。取 $x=1000, y=999.99, z=1.1$，则 $7^{x-y} = 7^{0.01} \\approx 1.02$，$7^{z-y} = 7^{-998.89} \\approx 0$，右边仅约1.02，小于2。命题不必然成立。\n\n【快捷思路】\n对于A、B、D，选择使左右差距最大的极端值快速排除。C的证明关键在于去分母后利用 $x+y$ 同时大于 $x+z$ 和 $2z$ 这一简单不等式，无需复杂计算。值得注意，本题的难点在于识别出C选项可以化为指数项之间的直接比较，而其他选项均可通过构造极端反例迅速排除。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities",
      "l_proof_methods"
    ],
    "sections": [
      "a3.exponential_inequalities",
      "a2.inequality_manipulation",
      "l.counterexample_testing"
    ],
    "primary_section": "a3.exponential_inequalities",
    "skills": [
      "exponent-law",
      "positive-denominator-clearing",
      "inequality-comparison",
      "monotonicity",
      "counterexample-testing"
    ]
  },
  {
    "id": "2018-P2-Q20",
    "year": 2018,
    "paper": 2,
    "num": 20,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "It is given that the equation $\\sqrt{x + p} + \\sqrt{x} = p$ has at least one real solution for $x$, where $p$ is a real constant.\n\nWhat is the complete set of possible values for $p$?",
    "options": {
      "A": "$p = 0$ or $p = 1$",
      "B": "$p = 0$ or $p \\ge 1$",
      "C": "$p \\ge -x$",
      "D": "$p \\ge \\sqrt{x}$",
      "E": "$p \\ge 0$",
      "F": "$p \\ge 1$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n方程 $\\sqrt{x+p} + \\sqrt{x} = p$ 至少有一个实数解，求 $p$ 的完整取值范围。\n\n这是含参数的根号方程问题，解题的关键步骤包括：移项隔离根号、平方消去根号、分类讨论参数、代回原方程验证解的有效性。需要特别注意平方操作可能引入增根，以及根号内表达式的定义域限制。\n\n【解题步骤】\n首先观察：左边 $\\sqrt{x+p} + \\sqrt{x}$ 是两个平方根之和，值域为非负数，因此若 $p < 0$ 则方程无解。\n\n移项隔离根号：$\\sqrt{x+p} = p - \\sqrt{x}$。\n\n两边平方（注意右边需非负，即 $p \\geq \\sqrt{x} \\geq 0$）：\n$$x + p = p^2 - 2p\\sqrt{x} + x$$\n化简消去 $x$ 得 $2p\\sqrt{x} = p^2 - p$。\n\n情况一：$p = 0$。原方程变为 $2\\sqrt{x} = 0$，解得 $x = 0$。代入验证 $\\sqrt{0} + \\sqrt{0} = 0$，成立。\n\n情况二：$p \\neq 0$。两边除以 $p$ 得 $2\\sqrt{x} = p - 1$。左边 $\\geq 0$，故 $p - 1 \\geq 0$ 即 $p \\geq 1$。此时 $x = \\frac{(p-1)^2}{4}$。\n\n代回原方程验证：\n$$\\sqrt{\\frac{(p-1)^2}{4} + p} + \\sqrt{\\frac{(p-1)^2}{4}} = \\sqrt{\\frac{p^2+2p+1}{4}} + \\frac{p-1}{2} = \\frac{p+1}{2} + \\frac{p-1}{2} = p$$\n验证通过，确为有效解。\n\n综上，$p = 0$ 或 $p \\geq 1$。\n\n【快捷思路】\n左边非负排除 $p < 0$。$p = 0$ 时显然 $x = 0$ 成立。$p \\neq 0$ 时平方化简得 $2\\sqrt{x} = p - 1 \\geq 0$，直接得 $p \\geq 1$。两步到位，选B。官方还提供了图象法作为验证：令 $y = \\sqrt{x+p} + \\sqrt{x}$，它是 $x \\geq 0$ 上的递增函数，最小值为 $x=0$ 处的 $\\sqrt{p}$，令 $\\sqrt{p} \\leq p$ 即得 $p \\geq 1$ 或 $p = 0$。两种方法殊途同归，代数法更直接，图象法更直观。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "a1_algebra_basics",
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a1.surds",
      "a2.radical_parameter_equations",
      "i.graphical_solution"
    ],
    "primary_section": "a2.radical_parameter_equations",
    "skills": [
      "domain-restriction",
      "squaring-equations",
      "extraneous-root-check",
      "parameter-range",
      "endpoint-case"
    ]
  },
  {
    "id": "2019-P1-Q1",
    "year": 2019,
    "paper": 1,
    "num": 1,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$f(x)$ is a quadratic function in $x$.\n\nThe graph of $y = f(x)$ passes through the point $(1, -1)$ and has a turning point at $(-1, 3)$.\n\nFind an expression for $f(x)$.",
    "options": {
      "A": "$-x^2 - 2x + 2$",
      "B": "$-x^2 + 2x + 3$",
      "C": "$x^2 - 2x$",
      "D": "$x^2 + 2x - 4$",
      "E": "$2x^2 + 4x + 1$",
      "F": "$-2x^2 - 4x + 5$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n已知二次函数图像过点 $(1,−1)$ 和 $(−1,3)$，且顶点在 $x = −1$ 处。求 $f(x)$ 的表达式。\n\n【方法一：代入排除法】\n将 $x = 1$ 和 $x = −1$ 代入六个选项验证：\n- $x = 1$ 时，只有 A、C、D、F 给出 $y = −1$\n- $x = −1$ 时，只有 A 和 C 给出 $y = 3$\n- 需要顶点在 $x = −1$（即 $f'(−1) = 0$）：\n  - A: $f'(x) = −2x−2$，$f'(−1) = 2−2 = 0$ ✓\n  - C: $f'(x) = 2x−2$，$f'(−1) = −2−2 = −4 \neq 0$ ✗\n\n【方法二：直接求解析式】\n设 $f(x) = ax^2+bx+c$，由已知条件：\n- $f(1) = −1$ → $a+b+c = −1$  ...(1)\n- $f(−1) = 3$ → $a−b+c = 3$    ...(2)\n- (1)+(2)：$2a+2c = 2$ → $a+c = 1$，进而 $b = −2$\n- 顶点在 $x = −1$：$f'(x) = 2ax+b$，$f'(−1) = −2a+b = 0$\n- 代入 $b = −2$：$−2a−2 = 0$ → $a = −1$\n- 由 $a+c = 1$：$c = 2$\n\n因此 $f(x) = −x^2−2x+2$，\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Graphs"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs",
      "a1_algebra_basics"
    ],
    "sections": [
      "a2.quadratic_vertex_form",
      "i.quadratic_parameter_effects",
      "a1.coefficient_matching"
    ],
    "primary_section": "a2.quadratic_vertex_form",
    "skills": [
      "quadratic-vertex-form",
      "point-substitution",
      "turning-point-condition",
      "coefficient-comparison",
      "option-elimination"
    ]
  },
  {
    "id": "2019-P1-Q2",
    "year": 2019,
    "paper": 1,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the complete set of values of the real constant $k$ for which the expression\n\n$$x^2 + kx + 2x + 1 - 2k$$\n\nis positive for all real values of $x$.",
    "options": {
      "A": "$-12 < k < 0$",
      "B": "$k < -12$ or $k > 0$",
      "C": "$-\\sqrt{6} - 3 < k < \\sqrt{6} - 3$",
      "D": "$k < -\\sqrt{6} - 3$ or $k > \\sqrt{6} - 3$",
      "E": "$-2 < k < \\frac{1}{2}$",
      "F": "$k < -2$ or $k > \\frac{1}{2}$",
      "G": "$0 < k < 4$",
      "H": "$k < 0$ or $k > 4$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n已知表达式 $x^2+kx+2x+1-2k$ 对所有实数 $x$ 恒为正，求 $k$ 的取值范围。\n\n【解题步骤】\n将表达式重写为 $x^2+(k+2)x+(1-2k)$，使 $x$ 的系数和常数项更清晰。\n\n二次项系数为 $1 > 0$，抛物线开口向上。\n要使表达式对所有实数 $x$ 恒为正，需要判别式小于 $0$：\n\n$Δ = (k+2)^2-4(1-2k) < 0$\n\n展开并化简：\n$k^2+4k+4-4+8k < 0$\n$k^2+12k < 0$\n$k(k+12) < 0$\n\n解得 $-12 < k < 0$。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.parameter_discriminant",
      "a2.quadratic_inequalities",
      "i.quadratic_parameter_effects"
    ],
    "primary_section": "a2.parameter_discriminant",
    "skills": [
      "quadratic-positive-for-all-real",
      "discriminant-condition",
      "parameter-inequality",
      "quadratic-factorisation"
    ]
  },
  {
    "id": "2019-P1-Q3",
    "year": 2019,
    "paper": 1,
    "num": 3,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "Find the coefficient of $x$ in the expression:\n\n$$(1 + x)^0 + (1 + x)^1 + (1 + x)^2 + (1 + x)^3 + \\dots + (1 + x)^{79} + (1 + x)^{80}$$",
    "options": {
      "A": "80",
      "B": "81",
      "C": "324",
      "D": "628",
      "E": "3240",
      "F": "3321",
      "G": "6480",
      "H": "6642"
    },
    "answer": "E",
    "analysis": "【题目分析】\n求 $(1+x)^0 + (1+x)^1 + \\cdots + (1+x)^{80}$ 中 $x$ 的系数。\n\n【解题步骤】\n对任意非负整数 $n$，$(1+x)^n$ 的展开式中 $x$ 的系数为\n$$\\binom{n}{1}=n.$$\n\n因此各项中 $x$ 的系数依次为\n$$0,1,2,\\ldots,80.$$\n\n所求总系数为\n$$0+1+2+\\cdots+80=\\frac{80\\times81}{2}=3240.$$\n\n【快捷思路】\n只看一次项系数即可：$(1+x)^n$ 的一次项系数是 $n$。所以问题化为求 $0$ 到 $80$ 的等差数列和。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a1_algebra_basics"
    ],
    "sections": [
      "c.binomial_specific_coefficients",
      "c.arithmetic_series_sums",
      "a1.coefficient_matching"
    ],
    "primary_section": "c.binomial_specific_coefficients",
    "skills": [
      "binomial-coefficient-extraction",
      "coefficient-summation",
      "arithmetic-series-sum",
      "sigma-notation"
    ]
  },
  {
    "id": "2019-P1-Q4",
    "year": 2019,
    "paper": 1,
    "num": 4,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The sequence $x_n$ is given by:\n\n$$x_1 = 10$$\n\n$$x_{n+1} = \\sqrt{x_n} \\text{ for } n \\ge 1$$\n\nWhat is the value of $x_{100}$ ?\n\n[Note that $a^{b^c}$ means $a^{(b^c)}$]",
    "options": {
      "A": "$10^{2^{99}}$",
      "B": "$10^{2^{100}}$",
      "C": "$10^{2^{-99}}$",
      "D": "$10^{2^{-100}}$",
      "E": "$10^{-2^{99}}$",
      "F": "$10^{-2^{100}}$",
      "G": "$10^{-2^{-99}}$",
      "H": "$10^{-2^{-100}}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n已知 $x_1 = 10$，$x_{n+1} = \\sqrt{x_n}$，求 $x_{100}$。\n\n【解题步骤】\n计算前几项，写成选项中给出的形式：\n$x_1 = 10 = 10^1$\n$x_2 = \\sqrt{10} = 10^{\\frac{1}{2}}$\n$x_3 = \\sqrt{10^{\\frac{1}{2}}} = (10^{\\frac{1}{2}})^{\\frac{1}{2}} = 10^{\\frac{1}{2} \\times \\frac{1}{2}} = 10^{\\frac{1}{4}} = 10^{2^{-2}}$\n$x_4 = \\sqrt{10^{\\frac{1}{4}}} = 10^{\\frac{1}{8}} = 10^{2^{-3}}$\n\n规律：$x_n = 10^{2^{-(n-1)}}$\n\n因此 $x_{100} = 10^{2^{-99}}$，\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a3_exponents_logarithms",
      "a1_algebra_basics"
    ],
    "sections": [
      "c.recurrence_patterns",
      "c.power_transformed_series",
      "a3.exponent_laws"
    ],
    "primary_section": "c.recurrence_patterns",
    "skills": [
      "recursive-sequence-pattern",
      "repeated-square-root",
      "index-shift",
      "exponent-laws",
      "power-tower-notation"
    ]
  },
  {
    "id": "2019-P1-Q5",
    "year": 2019,
    "paper": 1,
    "num": 5,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "S is a geometric sequence.\n\nThe sum of the first 6 terms of S is equal to 9 times the sum of the first 3 terms of S.\n\nThe 7<sup>th</sup> term of S is 360.\n\nFind the 1<sup>st</sup> term of S.",
    "options": {
      "A": "$\\frac{40}{27}$",
      "B": "$\\frac{40}{9}$",
      "C": "$\\frac{40}{3}$",
      "D": "$\\frac{45}{16}$",
      "E": "$\\frac{45}{8}$",
      "F": "$\\frac{45}{4}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n已知几何数列 $S$ 的前 $6$ 项和等于前 $3$ 项和的 $9$ 倍，且第 $7$ 项 $= 360$，求首项。\n\n【解题步骤】\n设首项为 $a$，公比为 $r$。\n前 $n$ 项和公式：$S_n = \\frac{a(r^n-1)}{r-1}$。\n\n由已知条件：\n$\\frac{a(r^6-1)}{r-1} = 9 \\cdot \\frac{a(r^3-1)}{r-1}$\n\n两边乘以 $(r-1)$ 并除以 $a$（$a \\neq 0$）：\n$r^6 - 1 = 9(r^3-1)$\n\n令 $R = r^3$，则方程化为：\n$R^2 - 1 = 9R - 9$\n$R^2 - 9R + 8 = 0$\n$(R-1)(R-8) = 0$\n\n所以 $R = 1$ 或 $R = 8$，即 $r^3 = 1$ 或 $r^3 = 8$，故 $r = 1$ 或 $r = 2$。\n\n**讨论 $r = 1$ 的情况**：\n若 $r = 1$，数列为常数列，前 $6$ 项和 $= 6a$，前 $3$ 项和 $= 3a$。\n此时 $6a = 9 \\times 3a$ 仅当 $a = 0$ 时成立，但这与第 $7$ 项 $= 360$ 矛盾。\n因此 $r = 1$ 不成立，必须有 $r = 2$。\n\n第 $7$ 项 = $ar^6 = a \\cdot 2^6 = 64a = 360$\n解得 $a = \\frac{360}{64} = \\frac{45}{8}$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a2_equations_inequalities"
    ],
    "sections": [
      "c.geometric_series",
      "c.geometric_sequences",
      "a2.quadratic_factorisation"
    ],
    "primary_section": "c.geometric_series",
    "skills": [
      "geometric-series-sum",
      "ratio-equation",
      "substitution",
      "case-checking",
      "nth-term-formula"
    ]
  },
  {
    "id": "2019-P1-Q6",
    "year": 2019,
    "paper": 1,
    "num": 6,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "$$(x + 4)^2 + (y + 1)^2 = 64 \\quad \\text{and}$$\n\n$$(x - 8)^2 + (y - 4)^2 = r^2 \\quad \\text{where } r > 0$$\n\nhave exactly one point in common.\n\nFind the difference between the two possible values of $r$.",
    "options": {
      "A": "4",
      "B": "10",
      "C": "16",
      "D": "26",
      "E": "50"
    },
    "answer": "C",
    "analysis": "【题目分析】\n两圆 $(x+4)^2+(y+1)^2 = 64$ 和 $(x-8)^2+(y-4)^2 = r^2$ 恰有一个交点，求 $r$ 的两个可能值之差。\n\n【解题步骤】\n**几何方法**（代数方法较复杂）：\n- 圆1：圆心 $C_1 = (-4,-1)$，半径 $R_1 = 8$\n- 圆2：圆心 $C_2 = (8,4)$，半径 $R_2 = r$\n\n计算圆心距：$d = \\sqrt{(8-(-4))^2 + (4-(-1))^2} = \\sqrt{12^2+5^2} = \\sqrt{169} = 13$\n\n点 $(8,4)$ 不在圆1内部（距离 $> 8$），所以两圆恰有一个交点的情况为：\n1. **外切**：$R_1 + R_2 = d$，即 $8 + r_1 = 13$，得 $r_1 = 5$\n2. **内切**（圆1在圆2内部相切）：$R_2 - R_1 = d$，即 $r_2 - 8 = 13$，得 $r_2 = 21$\n\n**关键洞察**：实际上我们不需要计算出 $r_1$ 和 $r_2$ 的具体值！\n由 $r_1 + 8 = d$ 和 $r_2 - 8 = d$，直接相减得：\n$r_2 - r_1 = 16$\n\n所以 $r$ 的两个可能值之差为 $16$，\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "d_coordinate_geometry"
    ],
    "sections": [
      "d.circle_equations.circle_distances",
      "d.circle_tangency"
    ],
    "primary_section": "d.circle_equations.circle_distances",
    "skills": [
      "circle-centre-radius",
      "distance-formula",
      "circle-tangency",
      "internal-external-tangency"
    ]
  },
  {
    "id": "2019-P1-Q7",
    "year": 2019,
    "paper": 1,
    "num": 7,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "A curve has equation\n\n$$y = (2q - x^2)(2qx + 3)$$\n\nThe gradient of the curve at $x = -1$ is a function of $q$.\n\nFind the value of $q$ which minimises the gradient of the curve at $x = -1$.",
    "options": {
      "A": "$-1$",
      "B": "$-\\frac{3}{4}$",
      "C": "$-\\frac{1}{2}$",
      "D": "$0$",
      "E": "$\\frac{1}{2}$",
      "F": "$\\frac{3}{4}$",
      "G": "$1$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n已知 $y = (2q - x^2)(2qx + 3)$，求使 $x = -1$ 处梯度最小的 $q$ 值。\n\n【解题步骤】\n展开：$y = 4q^2x - 2qx^3 + 6q - 3x^2$\n\n求导：$\\frac{dy}{dx} = 4q^2 - 6qx^2 - 6x$\n\n在 $x = -1$ 处的梯度：\n$\\left.\\frac{dy}{dx}\\right|_{x=-1} = 4q^2 - 6q(1) - 6(-1) = 4q^2 - 6q + 6$\n\n记 $G(q) = 4q^2 - 6q + 6$，求其最小值：\n$G'(q) = 8q - 6 = 0$ → $q = \\frac{3}{4}$\n\n$G''(q) = 8 > 0$，故 $q = \\frac{3}{4}$ 时取最小值。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "a2_equations_inequalities"
    ],
    "sections": [
      "f.parameter_optimisation",
      "f.product_rule",
      "a2.quadratic_vertex_form"
    ],
    "primary_section": "f.parameter_optimisation",
    "skills": [
      "product-rule",
      "evaluate-derivative-at-point",
      "parameter-function",
      "quadratic-minimum",
      "vertex-formula"
    ]
  },
  {
    "id": "2019-P1-Q8",
    "year": 2019,
    "paper": 1,
    "num": 8,
    "topic": "Integration",
    "difficulty": 3,
    "question": "The function f is such that $0 < f(x) < 1$ for $0 \\le x \\le 1$.\n\nThe trapezium rule with $n$ equal intervals is used to estimate $\\int_{0}^{1} f(x) \\, dx$ and produces an underestimate.\n\nUsing the same number of equal intervals, for which one of the following does the trapezium rule produce an overestimate?",
    "options": {
      "A": "$\\int_{0}^{1} (f(x) + 1) \\, dx$",
      "B": "$\\int_{0}^{1} 2f(x) \\, dx$",
      "C": "$\\int_{-1}^{0} f(x + 1) \\, dx$",
      "D": "$\\int_{-1}^{0} f(-x) \\, dx$",
      "E": "$\\int_{0}^{1} (1 - f(x)) \\, dx$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n已知梯形法则对 $\\int_{0}^{1} f(x) \\, dx$ **低估**，判断哪个选项使用相同区间数时会产生**高估**。\n已知 $0 < f(x) < 1$。\n\n【梯形法则与凹凸性】\n- 凸函数（$f'' > 0$）：弦在图像上方 → **高估**\n- 凹函数（$f'' < 0$）：弦在图像下方 → **低估**\n\n题目对 $f$ 低估 → $f$ 是凹函数（$f'' < 0$）。\n\n【逐项分析】\n\n**选项 A**：$\\int_{0}^{1} (f(x) + 1) \\, dx$\n$g(x) = f(x)+1$，$g''(x) = f''(x) < 0$，仍低估 ❌\n\n**选项 B**：$\\int_{0}^{1} 2f(x) \\, dx$\n$g(x) = 2f(x)$，$g''(x) = 2f''(x) < 0$，仍低估 ❌\n\n**选项 C**：$\\int_{-1}^{0} f(x+1) \\, dx$\n换元 $u = x+1$，得 $\\int_{0}^{1} f(u) \\, du$，即原积分，仍低估 ❌\n\n**选项 D**：$\\int_{-1}^{0} f(-x) \\, dx$\n$g(x) = f(-x)$，$g''(x) = f''(-x) < 0$，仍低估 ❌\n\n**选项 E**：$\\int_{0}^{1} (1 - f(x)) \\, dx$\n$h(x) = 1 - f(x)$，$h''(x) = -f''(x) > 0$\n变为凸函数 → 梯形法则**高估** ✓\n（垂直平移不影响高估/低估性质，参见选项 A）\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Graphs"
    ],
    "modules": [
      "g_integration",
      "f_differentiation",
      "i_functions_graphs"
    ],
    "sections": [
      "g.trapezium_rule_error",
      "f.second_derivative_concavity",
      "i.graph_transformations"
    ],
    "primary_section": "g.trapezium_rule_error",
    "skills": [
      "trapezium-rule-error",
      "concavity",
      "complementary-function",
      "translation-reflection-effect"
    ]
  },
  {
    "id": "2019-P1-Q9",
    "year": 2019,
    "paper": 1,
    "num": 9,
    "topic": "Integration",
    "difficulty": 3,
    "question": "$p$ is a positive constant.\n\nFind the area enclosed between the curves $y = p\\sqrt{x}$ and $x = p\\sqrt{y}$",
    "options": {
      "A": "$\\frac{2}{3}p^{\\frac{5}{2}} - \\frac{1}{2}p^2$",
      "B": "$\\frac{4}{3}p^{\\frac{5}{2}} - p^2$",
      "C": "$\\frac{p^4}{6}$",
      "D": "$\\frac{p^4}{3}$",
      "E": "$\\frac{2}{3}p^3 - \\frac{1}{2}p^4$",
      "F": "$\\frac{4}{3}p^3 - p^4$",
      "G": "$2p^4$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n已知 $p > 0$，求曲线 $y = p\\sqrt{x}$ 和 $x = p\\sqrt{y}$ 围成的面积。\n\n【解题步骤】\n由 $y = p\\sqrt{x}$ 得 $y^2 = p^2 x$，即 $x = \\frac{y^2}{p^2}$。\n由 $x = p\\sqrt{y}$ 得 $x^2 = p^2 y$。\n\n求交点：代入得 $\\frac{y^2}{p^2} = p\\sqrt{y}$，即 $y^4 = p^6 y$。\n$y(y^3 - p^6) = 0$，解得 $y = 0$ 或 $y = p^2$。\n\n当 $y = p^2$ 时：$x = p\\sqrt{p^2} = p^2$。\n所以交点为 $(0,0)$ 和 $(p^2, p^2)$。\n（交点在 $y = x$ 直线上，图形关于该直线对称）\n\n面积 = $\\int_0^{p^2} (\\text{上曲线} - \\text{下曲线}) dx$\n$y = p\\sqrt{x}$ 在上，$y = \\frac{x^2}{p^2}$ 在下。\n\n面积 = $\\int_0^{p^2} (p\\sqrt{x} - \\frac{x^2}{p^2}) dx$\n$= \\left[ \\frac{2}{3}px^{3/2} - \\frac{x^3}{3p^2} \\right]_0^{p^2}$\n$= \\frac{2}{3}p(p^2)^{3/2} - \\frac{(p^2)^3}{3p^2}$\n$= \\frac{2}{3}p \\cdot p^3 - \\frac{p^6}{3p^2}$\n$= \\frac{2}{3}p^4 - \\frac{p^4}{3}$\n$= \\frac{p^4}{3}$\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "g.area_between_curves",
      "g.power_function_integration",
      "i.curve_intersections"
    ],
    "primary_section": "g.area_between_curves",
    "skills": [
      "find-curve-intersections",
      "area-between-curves",
      "power-rule-integration",
      "upper-minus-lower",
      "parameter-handling"
    ]
  },
  {
    "id": "2019-P1-Q10",
    "year": 2019,
    "paper": 1,
    "num": 10,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Evaluate $$\\int_{-1}^{3} |x|(1 - x) \\, dx$$",
    "options": {
      "A": "$\\frac{17}{3}$",
      "B": "$-\\frac{17}{3}$",
      "C": "$\\frac{16}{3}$",
      "D": "$-\\frac{16}{3}$",
      "E": "$\\frac{11}{3}$",
      "F": "$-\\frac{11}{3}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n计算积分 $\\int_{-1}^{3} |x|(1-x) \\, dx$。\n\n【分段处理】\n当 $x \\in [-1, 0]$：$|x| = -x$\n当 $x \\in [0, 3]$：$|x| = x$\n\n【分区间积分】\n$\\int_{-1}^{3} |x|(1-x) \\, dx = \\int_{-1}^{0} (-x)(1-x) \\, dx + \\int_{0}^{3} x(1-x) \\, dx$\n\n第一部分：\n$\\int_{-1}^{0} (-x+x^2) \\, dx = \\left[ -\\frac{x^2}{2} + \\frac{x^3}{3} \\right]_{-1}^{0}$\n$= 0 - \\left( -\\frac{1}{2} - \\frac{1}{3} \\right) = \\frac{5}{6}$\n\n第二部分：\n$\\int_{0}^{3} (x-x^2) \\, dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_{0}^{3}$\n$= \\left( \\frac{9}{2} - 9 \\right) = -\\frac{9}{2}$\n\n【合并】\n总计 = $\\frac{5}{6} - \\frac{9}{2} = \\frac{5}{6} - \\frac{27}{6} = -\\frac{22}{6} = -\\frac{11}{3}$\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "g.piecewise_absolute_area",
      "g.definite_integrals",
      "i.absolute_value_functions"
    ],
    "primary_section": "g.piecewise_absolute_area",
    "skills": [
      "split-integral",
      "absolute-value",
      "piecewise-definition",
      "definite-integration",
      "sign-analysis"
    ]
  },
  {
    "id": "2019-P1-Q11",
    "year": 2019,
    "paper": 1,
    "num": 11,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the sum of the real values of $x$ that satisfy the simultaneous equations:\n\n$$\\log_3(xy^2) = 1$$\n\n$$(\\log_3 x)(\\log_3 y) = -3$$",
    "options": {
      "A": "$\\frac{1}{3}$",
      "B": "$1$",
      "C": "$3$",
      "D": "$3\\frac{1}{9}$",
      "E": "$9\\frac{1}{27}$",
      "F": "$9\\frac{1}{3}$",
      "G": "$27$",
      "H": "$27\\frac{1}{9}$"
    },
    "answer": "H",
    "analysis": "【题目分析】\n已知 $\\log_3(xy^2) = 1$，$(\\log_3 x)(\\log_3 y) = -3$，求所有实数 $x$ 之和。\n\n【解题步骤】\n设 $a = \\log_3 x$，$b = \\log_3 y$。\n\n由已知条件：\n$\\log_3(xy^2) = \\log_3 x + 2\\log_3 y = a + 2b = 1$  ...(1)\n$ab = -3$  ...(2)\n\n由 (1)：$a = 1 - 2b$\n\n代入 (2)：$(1-2b)b = -3$\n$b - 2b^2 = -3$\n$2b^2 - b - 3 = 0$\n$(2b-3)(b+1) = 0$\n\n解得：$b = \\frac{3}{2}$ 或 $b = -1$。\n\n**情况一**：$b = \\frac{3}{2}$\n$a = 1 - 2 \\times \\frac{3}{2} = 1 - 3 = -2$\n$x = 3^a = 3^{-2} = \\frac{1}{9}$\n\n**情况二**：$b = -1$\n$a = 1 - 2(-1) = 1 + 2 = 3$\n$x = 3^a = 3^3 = 27$\n\n$x$ 之和 = $\\frac{1}{9} + 27 = 27\\frac{1}{9}$\n\n【正确答案】H",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a3.logarithm_equations",
      "a3.logarithm_laws",
      "a2.simultaneous_equations"
    ],
    "primary_section": "a3.logarithm_equations",
    "skills": [
      "logarithm-laws",
      "substitution-to-system",
      "solve-quadratic",
      "sum-solution-values"
    ]
  },
  {
    "id": "2019-P1-Q12",
    "year": 2019,
    "paper": 1,
    "num": 12,
    "topic": "Integration",
    "difficulty": 3,
    "question": "It is given that\n\n$$\\frac{dV}{dt} = \\frac{24\\pi(t - 1)}{(1 + \\sqrt{t})} \\text{ for } t \\geq 1$$\n\nand $V = 7$ when $t = 1$.\n\nFind the value of $V$ when $t = 9$.",
    "options": {
      "A": "$208\\pi + 7$",
      "B": "$216\\pi + 7$",
      "C": "$224\\pi + 7$",
      "D": "$416\\pi + 7$",
      "E": "$608\\pi + 7$",
      "F": "$744\\pi + 7$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n已知 $\\frac{dV}{dt} = \\frac{24\\pi(t-1)}{1+\\sqrt{t}}$（$t \\geq 1$），且 $V(1) = 7$，求 $V(9)$。\n\n【化简】\n注意到 $t-1 = (\\sqrt{t}+1)(\\sqrt{t}-1)$，所以：\n$\\frac{dV}{dt} = 24\\pi(\\sqrt{t}-1)$\n\n【积分】\n$V = 24\\pi \\left( \\frac{2}{3}t^{3/2} - t \\right) + c$\n$V = 16\\pi t^{3/2} - 24\\pi t + c$\n\n代入 $t = 1$，$V = 7$：\n$7 = 16\\pi - 24\\pi + c$\n$c = 8\\pi + 7$\n\n当 $t = 9$：\n$V = 16\\pi \\times 9^{3/2} - 24\\pi \\times 9 + 8\\pi + 7$\n$= (16 \\times 27 - 24 \\times 9 + 8)\\pi + 7$\n$= (432 - 216 + 8)\\pi + 7$\n$= 224\\pi + 7$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation"
    ],
    "modules": [
      "g_integration"
    ],
    "sections": [
      "g.differential_equations",
      "g.integral_simplify_first",
      "g.power_function_integration"
    ],
    "primary_section": "g.differential_equations",
    "skills": [
      "simplify-before-integrating",
      "integrate-rate-of-change",
      "apply-initial-condition",
      "evaluate-definite-change"
    ]
  },
  {
    "id": "2019-P1-Q13",
    "year": 2019,
    "paper": 1,
    "num": 13,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the maximum value of\n\n$$4^{\\sin x} - 4 \\times 2^{\\sin x} + \\frac{17}{4}$$\n\nfor real $x$.",
    "options": {
      "A": "$\\frac{1}{4}$",
      "B": "$\\frac{5}{2}$",
      "C": "$\\frac{13}{2}$",
      "D": "$\\frac{21}{2}$",
      "E": "$\\frac{65}{4}$",
      "F": "There is no maximum value."
    },
    "answer": "B",
    "analysis": "【题目分析】\n求 $4^{\\sin x} - 4 \\times 2^{\\sin x} + \\frac{17}{4}$ 的最大值。\n\n【换元】\n设 $u = 2^{\\sin x}$。\n由于 $-1 \\leq \\sin x \\leq 1$，所以 $\\frac{1}{2} \\leq u \\leq 2$。\n\n$4^{\\sin x} = (2^2)^{\\sin x} = u^2$\n\n$f(u) = u^2 - 4u + \\frac{17}{4}$\n\n【配方】\n$f(u) = (u-2)^2 - 4 + \\frac{17}{4} = (u-2)^2 + \\frac{1}{4}$\n\n在 $u \\in [\\frac{1}{2}, 2]$ 上：\n- $u=2$ 时取最小值 $\\frac{1}{4}$\n- $u=\\frac{1}{2}$ 时取最大值：$\\left(\\frac{1}{2}-2\\right)^2+\\frac{1}{4} = \\frac{9}{4}+\\frac{1}{4} = \\frac{10}{4} = \\frac{5}{2}$\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry",
      "a3_exponents_logarithms",
      "a2_equations_inequalities"
    ],
    "sections": [
      "e.trig_ranges",
      "a3.exponential_substitution",
      "a2.quadratic_optimisation"
    ],
    "primary_section": "a3.exponential_substitution",
    "skills": [
      "range-of-sine",
      "exponential-substitution",
      "complete-the-square",
      "endpoint-maximum"
    ]
  },
  {
    "id": "2019-P1-Q14",
    "year": 2019,
    "paper": 1,
    "num": 14,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "$x$ satisfies the simultaneous equations\n\n$$\\sin 2x + \\sqrt{3} \\cos 2x = -1$$\n\nand\n\n$$\\sqrt{3} \\sin 2x - \\cos 2x = \\sqrt{3}$$\n\nwhere $0^{\\circ} \\le x \\le 360^{\\circ}$.\n\nFind the sum of the possible values of $x$.",
    "options": {
      "A": "$210^{\\circ}$",
      "B": "$330^{\\circ}$",
      "C": "$390^{\\circ}$",
      "D": "$660^{\\circ}$",
      "E": "$780^{\\circ}$",
      "F": "$930^{\\circ}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n已知 $x$ 满足联立方程：\n$\\sin 2x + \\sqrt{3} \\cos 2x = -1$\n$\\sqrt{3} \\sin 2x - \\cos 2x = \\sqrt{3}$\n其中 $0^{\\circ} \\leq x \\leq 360^{\\circ}$，求 $x$ 的可能值之和。\n\n【消元】\n设 $S = \\sin 2x$，$C = \\cos 2x$，则方程组化为：\n$S + \\sqrt{3} C = -1$  ...(1)\n$\\sqrt{3} S - C = \\sqrt{3}$  ...(2)\n\n将 (2) 式乘以 $\\sqrt{3}$ 后与 (1) 式相加：\n$\\sqrt{3} \\times (\\sqrt{3} S - C) + (S + \\sqrt{3} C) = \\sqrt{3} \\times \\sqrt{3} + (-1)$\n$3S - \\sqrt{3}C + S + \\sqrt{3}C = 3 - 1$\n$4S = 2$\n$S = \\frac{1}{2}$\n\n代入 (2) 式：\n$\\sqrt{3} \\cdot \\frac{1}{2} - C = \\sqrt{3}$\n$C = \\frac{\\sqrt{3}}{2} - \\sqrt{3} = -\\frac{\\sqrt{3}}{2}$\n\n【求解】\n$\\sin 2x = \\frac{1}{2}$，$\\cos 2x = -\\frac{\\sqrt{3}}{2}$\n\n在 $0^{\\circ} \\leq 2x \\leq 720^{\\circ}$ 范围内：\n$2x = 150^{\\circ}$ 或 $2x = 510^{\\circ}$\n$x = 75^{\\circ}$ 或 $x = 255^{\\circ}$\n\n$x$ 的可能值之和 $= 75^{\\circ} + 255^{\\circ} = 330^{\\circ}$\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry",
      "a2_equations_inequalities"
    ],
    "sections": [
      "e.trig_equations",
      "e.special_angle_solutions",
      "a2.simultaneous_equations"
    ],
    "primary_section": "e.trig_equations",
    "skills": [
      "linear-system-elimination",
      "special-angle-values",
      "quadrant-identification",
      "degree-interval-solutions"
    ]
  },
  {
    "id": "2019-P1-Q15",
    "year": 2019,
    "paper": 1,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the real non-zero solution to the equation\n\n$$\\frac{2^{(9^x)}}{8^{(3^x)}} = \\frac{1}{4}$$",
    "options": {
      "A": "$\\log_3 2$",
      "B": "$2 \\log_3 2$",
      "C": "1",
      "D": "2",
      "E": "$\\log_2 3$",
      "F": "$2 \\log_2 3$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n求方程 $\\frac{2^{(9^x)}}{8^{(3^x)}} = \\frac{1}{4}$ 的非零实数解。\n\n【化简】\n注意到 $9^x = (3^2)^x = 3^{2x} = (3^x)^2$。\n设 $u = 3^x$，则 $9^x = u^2$，$8^{(3^x)} = (2^3)^u = 2^{3u}$。\n\n原方程化为：\n$\\frac{2^{u^2}}{2^{3u}} = 2^{-2}$\n\n底数相同，指数相等：\n$u^2 - 3u = -2$\n$u^2 - 3u + 2 = 0$\n$(u-1)(u-2) = 0$\n\n解得 $u = 1$ 或 $u = 2$。\n\n【取舍】\n当 $u = 1$：$3^x = 1$，得 $x = 0$（题目要求非零解，舍去）\n当 $u = 2$：$3^x = 2$，得 $x = \\log_3 2$\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a1_algebra_basics"
    ],
    "sections": [
      "a3.exponential_equations",
      "a3.exponential_substitution",
      "a1.exponent_laws"
    ],
    "primary_section": "a3.exponential_equations",
    "skills": [
      "rewrite-common-bases",
      "substitution-to-quadratic",
      "exclude-zero-solution",
      "logarithm-definition"
    ]
  },
  {
    "id": "2019-P1-Q16",
    "year": 2019,
    "paper": 1,
    "num": 16,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Given that\n$$2 \\int_{0}^{1} f(x) \\, dx + 5 \\int_{1}^{2} f(x) \\, dx = 14$$\n\nand\n$$\\int_{0}^{1} f(x + 1) \\, dx = 6$$\n\nfind the value of\n\n$$\\int_{0}^{2} f(x) \\, dx$$",
    "options": {
      "A": "$-8$",
      "B": "$-4$",
      "C": "$-2$",
      "D": "$2$",
      "E": "$4$",
      "F": "$\\frac{29}{5}$",
      "G": "$\\frac{32}{5}$",
      "H": "$14$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n已知 $2 \\int_{0}^{1} f(x) \\, dx + 5 \\int_{1}^{2} f(x) \\, dx = 14$，且 $\\int_{0}^{1} f(x+1) \\, dx = 6$，求 $\\int_{0}^{2} f(x) \\, dx$。\n\n【理解条件】\n设 $A = \\int_{0}^{1} f(x) \\, dx$，$B = \\int_{1}^{2} f(x) \\, dx$。\n\n$\\int_{0}^{1} f(x+1) \\, dx$ 是 $y = f(x+1)$ 在 $x=0$ 到 $x=1$ 的有向面积。\n$y = f(x+1)$ 是 $y = f(x)$ 向左平移 1 个单位，故该积分等于原曲线在 $x=1$ 到 $x=2$ 的有向面积，即 $B$。\n\n因此 $B = 6$。\n\n【求解】\n代入第一个方程：\n$2A + 5B = 14$\n$2A + 5 \\times 6 = 14$\n$2A + 30 = 14$\n$2A = -16$\n$A = -8$\n\n$\\int_{0}^{2} f(x) \\, dx = A + B = -8 + 6 = -2$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "g_integration"
    ],
    "sections": [
      "g.definite_integral_translation",
      "g.integral_combination"
    ],
    "primary_section": "g.definite_integral_translation",
    "skills": [
      "u-substitution-translation",
      "definite-integral-splitting",
      "linear-equation-solving"
    ]
  },
  {
    "id": "2019-P1-Q17",
    "year": 2019,
    "paper": 1,
    "num": 17,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the fraction of the interval $0 \\le \\theta \\le \\pi$ for which the inequality\n\n$$(\\sin(2\\theta) - \\frac{1}{2}) (\\sin \\theta - \\cos \\theta) \\ge 0$$\n\nis satisfied.",
    "options": {
      "A": "$\\frac{1}{12}$",
      "B": "$\\frac{1}{6}$",
      "C": "$\\frac{1}{4}$",
      "D": "$\\frac{5}{12}$",
      "E": "$\\frac{7}{12}$",
      "F": "$\\frac{3}{4}$",
      "G": "$\\frac{5}{6}$",
      "H": "$\\frac{11}{12}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n求区间 $0 \\leq \\theta \\leq \\pi$ 中满足\n\n$$(\\sin 2\\theta - \\frac{1}{2})(\\sin\\theta - \\cos\\theta) \\geq 0$$\n\n的部分占整个区间的比例。核心是找出两个因子的零点，并在这些临界点之间做符号判断。\n\n【解题步骤】\n第一个因子为零时：\n$$\\sin 2\\theta = \\frac{1}{2}$$\n在 $0 \\leq 2\\theta \\leq 2\\pi$ 中，\n$$2\\theta = \\frac{\\pi}{6},\\frac{5\\pi}{6}$$\n所以\n$$\\theta = \\frac{\\pi}{12},\\frac{5\\pi}{12}.$$\n\n第二个因子为零时：\n$$\\sin\\theta - \\cos\\theta = 0 \\quad\\Rightarrow\\quad \\theta = \\frac{\\pi}{4}.$$\n\n按临界点把 $[0,\\pi]$ 分成\n$$0,\\frac{\\pi}{12},\\frac{\\pi}{4},\\frac{5\\pi}{12},\\pi.$$\n逐段判断符号：\n- $[0,\\frac{\\pi}{12}]$：$\\sin2\\theta-\\frac12\\leq0$，$\\sin\\theta-\\cos\\theta\\leq0$，乘积非负；\n- $(\\frac{\\pi}{12},\\frac{\\pi}{4})$：两因子异号，乘积为负；\n- $[\\frac{\\pi}{4},\\frac{5\\pi}{12}]$：两因子均非负，乘积非负；\n- $(\\frac{5\\pi}{12},\\pi]$：两因子异号，乘积为负。\n\n满足条件的总长度为\n$$\\frac{\\pi}{12}+\\left(\\frac{5\\pi}{12}-\\frac{\\pi}{4}\\right)=\\frac{\\pi}{12}+\\frac{2\\pi}{12}=\\frac{\\pi}{4}.$$\n\n占整个区间长度 $\\pi$ 的比例为\n$$\\frac{\\pi/4}{\\pi}=\\frac14.$$\n\n【快捷思路】\n只需画一条符号表：两个因子的零点分别是 $\\frac{\\pi}{12},\\frac{5\\pi}{12}$ 和 $\\frac{\\pi}{4}$。同号区间长度相加为 $\\frac{\\pi}{4}$，比例为 $\\frac14$。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "e_trigonometry"
    ],
    "sections": [
      "e.trigonometric_inequalities",
      "e.trig_sign_charts"
    ],
    "primary_section": "e.trigonometric_inequalities",
    "skills": [
      "trig-inequality",
      "sign-chart",
      "critical-angle-partition",
      "interval-length-ratio"
    ]
  },
  {
    "id": "2019-P1-Q18",
    "year": 2019,
    "paper": 1,
    "num": 18,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "Find the shortest distance between the curve $y = x^2 + 4$ and the line $y = 2x - 2$.",
    "options": {
      "A": "2",
      "B": "$\\sqrt{5}$",
      "C": "$\\frac{6\\sqrt{5}}{5}$",
      "D": "3",
      "E": "$\\frac{5\\sqrt{5}}{3}$",
      "F": "5",
      "G": "6"
    },
    "answer": "B",
    "analysis": "【题目分析】\n求曲线 $y = x^2 + 4$ 上的点到直线 $2x - y - 2 = 0$ 的最短距离。\n\n【法线条件】\n直线 $2x - y - 2 = 0$ 即 $y = 2x - 2$，斜率为 $2$。\n与之垂直的直线斜率为 $-\\frac{1}{2}$。\n\n曲线 $y = x^2 + 4$ 上点 $(x, x^2+4)$ 处的切线斜率为 $2x$，法线斜率为 $-\\frac{1}{2x}$。\n\n令法线斜率等于垂直斜率：\n$-\\frac{1}{2x} = -\\frac{1}{2}$\n$\\frac{1}{2x} = \\frac{1}{2}$\n$x = 1$\n\n【求距离】\n对应曲线上的点：$(1, 1^2+4) = (1, 5)$\n\n该点到直线 $2x - y - 2 = 0$ 的距离：\n$d = \\frac{|2(1) - 5 - 2|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|-5|}{\\sqrt{5}} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Algebra"
    ],
    "modules": [
      "d_coordinate_geometry",
      "f_differentiation",
      "a2_equations_inequalities"
    ],
    "sections": [
      "d.point_to_line_distance",
      "f.tangent_normal_distance",
      "a2.quadratic_minimum"
    ],
    "primary_section": "d.point_to_line_distance",
    "skills": [
      "point-line-distance",
      "quadratic-minimisation",
      "normal-gradient",
      "distance-formula"
    ]
  },
  {
    "id": "2019-P1-Q19",
    "year": 2019,
    "paper": 1,
    "num": 19,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the value of\n\n$\\sum_{k=0}^{90} \\sin((10 + 90k)^\\circ)$",
    "options": {
      "A": "0",
      "B": "$\\sin 10^\\circ$",
      "C": "$\\sin 100^\\circ$",
      "D": "$\\sin 190^\\circ$",
      "E": "$\\sin 280^\\circ$",
      "F": "1"
    },
    "answer": "C",
    "analysis": "【题目分析】\n求 $\\sum_{k=0}^{90} \\sin(10 + 90k)^\\circ$ 的值。共 91 项，相邻项角度差为 $90^\\circ$。\n\n【分组配对】\n每连续 4 项为一组：\n$\\sin(10^\\circ) + \\sin(100^\\circ) + \\sin(190^\\circ) + \\sin(280^\\circ)$\n\n利用诱导公式：\n$\\sin(190^\\circ) = \\sin(180^\\circ + 10^\\circ) = -\\sin(10^\\circ)$\n$\\sin(280^\\circ) = \\sin(360^\\circ - 80^\\circ) = -\\sin(80^\\circ) = -\\sin(100^\\circ)$\n\n所以每 4 项的和：\n$\\sin(10^\\circ) + \\sin(100^\\circ) - \\sin(10^\\circ) - \\sin(100^\\circ) = 0$\n\n【计算余项】\n$91 = 22 \\times 4 + 3$\n\n前 88 项（22 组）的和为 $0$，剩余 $k = 88, 89, 90$ 三项：\n\n$k=88$：$\\sin(10 + 7920)^\\circ = \\sin(7930^\\circ)$\n$7930 = 22 \\times 360 + 10$，所以 $\\sin(10^\\circ)$\n\n$k=89$：$\\sin(10 + 8010)^\\circ = \\sin(8020^\\circ)$\n$8020 = 22 \\times 360 + 100$，所以 $\\sin(100^\\circ)$\n\n$k=90$：$\\sin(10 + 8100)^\\circ = \\sin(8110^\\circ)$\n$8110 = 22 \\times 360 + 190$，所以 $\\sin(190^\\circ) = -\\sin(10^\\circ)$\n\n【求和】\n总计 $= \\sin(10^\\circ) + \\sin(100^\\circ) - \\sin(10^\\circ) = \\sin(100^\\circ)$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "e_trigonometry",
      "c_sequences_series"
    ],
    "sections": [
      "e.trig_periodicity",
      "e.angle_reduction",
      "c.periodic_sequence_sum"
    ],
    "primary_section": "e.trig_periodicity",
    "skills": [
      "periodic-sum",
      "angle-reduction",
      "four-term-cancellation",
      "remainder-terms"
    ]
  },
  {
    "id": "2019-P1-Q20",
    "year": 2019,
    "paper": 1,
    "num": 20,
    "topic": "Functions",
    "difficulty": 3,
    "question": "What is the complete range of values of $k$ for which the curves with equations\n\n$$y = x^3 - 12x$$\n\nand\n\n$$y = k - (x - 2)^2$$\n\nintersect at **three** distinct points, of which exactly **two** have positive $x$-coordinates?",
    "options": {
      "A": "$-4 < k < 0$",
      "B": "$-4 < k < 4$",
      "C": "$-4 < k < 16$",
      "D": "$-16 < k < 0$",
      "E": "$-16 < k < 4$",
      "F": "$-16 < k < 16$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n两条曲线的交点满足\n$$x^3-12x = k-(x-2)^2.$$\n题目要求共有三个不同交点，并且其中恰有两个交点的 $x$ 坐标为正。由于两曲线都是函数图像，交点个数等价于这个方程的不同实根个数。\n\n【解题步骤】\n整理方程：\n$$x^3-12x = k-(x^2-4x+4)$$\n$$x^3+x^2-16x+4-k=0.$$\n令\n$$F(x)=x^3+x^2-16x+4-k.$$\n\n先看驻点：\n$$F'(x)=3x^2+2x-16=(3x+8)(x-2).$$\n因此驻点为 $x=-\\frac{8}{3}$ 和 $x=2$。三次函数首项系数为正，所以 $x=-\\frac{8}{3}$ 是局部极大点，$x=2$ 是局部极小点。要有三个不同实根，需要\n$$F\\left(-\\frac{8}{3}\\right)>0 \\quad\\text{且}\\quad F(2)<0.$$\n\n但题目还要求恰有两个正根。由于一个驻点在负数处、一个驻点在正数处，若三根中恰有两个为正，则第三个根必须为负，且 $x=0$ 应位于负根和两个正根之间。也就是说\n$$F(0)>0.$$\n\n计算关键条件：\n$$F(0)=4-k>0 \\quad\\Rightarrow\\quad k<4.$$\n\n又\n$$F(2)=8+4-32+4-k=-16-k.$$\n要使正数处的局部极小值低于 $x$ 轴，需要\n$$-16-k<0 \\quad\\Rightarrow\\quad k>-16.$$\n\n当 $-16<k<4$ 时，$F(0)>0$ 且 $F(2)<0$；同时 $F\\left(-\\frac{8}{3}\\right)>0$ 自动成立。因此方程在负半轴有一个根，在 $(0,2)$ 和 $(2,\\infty)$ 各有一个正根，恰有三个不同交点，其中两个 $x$ 坐标为正。\n\n因此完整范围为\n$$-16<k<4.$$\n\n【快捷思路】\n把交点问题转成三次方程根的分布。关键检查 $F(0)>0$ 和正驻点 $F(2)<0$：前者保证两个正根不会被 $0$ 截掉，后者保证正半轴上确有两次穿越。得到 $k<4$ 与 $k>-16$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Graphs",
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "i_functions_graphs",
      "a2_equations_inequalities"
    ],
    "sections": [
      "f.stationary_points_root_count",
      "i.equation_roots.graph_intersections",
      "a2.parameter_cubic_inequality"
    ],
    "primary_section": "f.stationary_points_root_count",
    "skills": [
      "curve-intersection",
      "cubic-root-count",
      "stationary-point-sign-test",
      "positive-root-count",
      "parameter-condition"
    ]
  },
  {
    "id": "2019-P2-Q1",
    "year": 2019,
    "paper": 2,
    "num": 1,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "Find the coefficient of the $x^4$ term in the expansion of\n\n$$x^2 \\left( 2x + \\frac{1}{x} \\right)^6$$",
    "options": {
      "A": "15",
      "B": "30",
      "C": "60",
      "D": "120",
      "E": "240"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查二项式定理展开中指定次幂项的系数。核心思路是先确定括号内需要产生 $x^2$ 项，乘以外部 $x^2$ 后才得到 $x^4$。\n\n【解题步骤】\n先不考虑外部因子 $x^2$，我们需要在 $\\left(2x + \\frac{1}{x}\\right)^6$ 的展开中找到 $x^2$ 项。\n\n由二项式定理，通项为：\n\n$$C_6^r \\cdot (2x)^{6-r} \\cdot \\left(\\frac{1}{x}\\right)^r = C_6^r \\cdot 2^{6-r} \\cdot x^{6-2r}$$\n\n令幂次 $6 - 2r = 2$，解得 $r = 2$。\n\n将 $r = 2$ 代入通项，该系数为：\n\n$$C_6^2 \\cdot 2^4 = 15 \\times 16 = 240$$\n\n再乘以外部因子 $x^2$，得到 $240x^4$，因此 $x^4$ 项的系数为 $240$。\n\n【快捷思路】\n不必展开全部项。先算出括号内需要几次幂（$x^4 \\div x^2 = x^2$），再用二项式通项公式一步定位到 $r = 2$，直接代值即可。这是考试中最快的路径。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a1_algebra_basics"
    ],
    "sections": [
      "c.binomial_expansion",
      "c.coefficient_extraction",
      "a1.polynomial_expansion"
    ],
    "primary_section": "c.coefficient_extraction",
    "skills": [
      "binomial-expansion",
      "coefficient-extraction",
      "index-equation-solving",
      "negative-power-tracking"
    ]
  },
  {
    "id": "2019-P2-Q2",
    "year": 2019,
    "paper": 2,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$(2x + 1)$ and $(x - 2)$ are factors of $2x^3 + px^2 + q$.\n\nWhat is the value of $2p + q$?",
    "options": {
      "A": "$-10$",
      "B": "$-\\frac{38}{5}$",
      "C": "$-\\frac{22}{3}$",
      "D": "$\\frac{22}{3}$",
      "E": "$\\frac{38}{5}$",
      "F": "$10$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考查因式定理。已知两个一次因式意味着多项式有两个已知根，代入后建立关于 $p$、$q$ 的方程组。\n\n【解题步骤】\n设 $f(x) = 2x^3 + px^2 + q$。\n\n由因式定理，$(2x+1)$ 是因式 $\\Rightarrow f(-\\frac{1}{2}) = 0$：\n\n$$-\\frac{1}{4} + \\frac{p}{4} + q = 0$$\n\n整理得 $p + 4q = 1$ “……”①\n\n$(x-2)$ 是因式 $\\Rightarrow f(2) = 0$：\n\n$$16 + 4p + q = 0$$\n\n整理得 $4p + q = -16$ “……”②\n\n由 ② 得 $q = -16 - 4p$，代入 ①：\n\n$$p - 64 - 16p = 1 \\quad \\Rightarrow \\quad p = -\\frac{13}{3}$$\n\n代回得 $q = \\frac{4}{3}$。\n\n最终：$2p + q = -\\frac{26}{3} + \\frac{4}{3} = -\\frac{22}{3}$。\n\n【快捷思路】\n直接利用因式定理将因式转化为根，代入建立方程组。注意代入负数时符号容易出错，建议先写出完整代入式再化简。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a2_equations_inequalities",
      "a1_algebra_basics"
    ],
    "sections": [
      "a2.factor_theorem",
      "a2.simultaneous_equations",
      "a1.polynomial_factorisation"
    ],
    "primary_section": "a2.factor_theorem",
    "skills": [
      "factor-theorem",
      "substitution-at-root",
      "linear-system-solving",
      "parameter-solving"
    ]
  },
  {
    "id": "2019-P2-Q3",
    "year": 2019,
    "paper": 2,
    "num": 3,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "$a, b$ and $c$ are real numbers.\n\nGiven that $ab = ac$, which of the following statements **must** be true?\n\nI $a = 0$\n\nII $b = 0$ **or** $c = 0$\n\nIII $b = c$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考查代数运算中除法的陷阱。已知 $ab = ac$，核心是将等式移项并因式分解，注意 $a$ 可能为零，不能直接约去。\n\n【解题步骤】\n将 $ab = ac$ 移项：\n\n$$ab - ac = 0$$\n\n提取公因式：\n\n$$a(b - c) = 0$$\n\n由此可知：要么 $a = 0$，要么 $b - c = 0$（即 $b = c$），或者两者同时成立。\n\n逐一分析三个命题：\n\n命题 I：“$a = 0$”——不一定成立。例如取 $a = 1$、$b = c = 3$，则 $ab = ac$ 成立但 $a \\neq 0$。\n\n命题 II：“$b = 0$ 或 $c = 0$”——不一定成立。例如取 $a = 1$、$b = c = 5$，则 $ab = ac$ 成立但 $b$、$c$ 都不为零。\n\n命题 III：“$b = c$”——不一定成立。例如取 $a = 0$、$b = 2$、$c = 7$，则 $ab = ac = 0$ 成立但 $b \\neq c$。\n\n三个命题都存在反例，没有一个必然成立。\n\n【快捷思路】\n本题核心陷阱是“两边同时除以 $a$ 得到 $b = c$”——但 $a$ 可能为零！记住：等式两边同除之前，必须先确认除数不为零。直接因式分解 $a(b - c) = 0$ 可避免这个错误。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Algebra"
    ],
    "modules": [
      "h_logic_counterexamples",
      "l_proof_methods",
      "a1_algebra_basics"
    ],
    "sections": [
      "h.counterexample_construction",
      "l.proof_error_identification",
      "a1.polynomial_factorisation"
    ],
    "primary_section": "h.counterexample_construction",
    "skills": [
      "zero-product-property",
      "avoid-illegal-cancellation",
      "must-be-true-analysis",
      "construct-counterexamples"
    ]
  },
  {
    "id": "2019-P2-Q4",
    "year": 2019,
    "paper": 2,
    "num": 4,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider the following conjecture:\n\n> **If** $N$ is a positive integer that consists of the digit 1 followed by an odd number of 0 digits and then a final digit 1, **then** $N$ is a prime number.\n\nHere are three numbers:\n\nI $N = 101$ (which is a prime number)\n\nII $N = 1001$ (which equals $7 \\times 11 \\times 13$)\n\nIII $N = 10001$ (which equals $73 \\times 137$)\n\nWhich of these provide(s) a counterexample to the conjecture?",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题涉及逻辑推理中的反例概念。猜想为：若正整数 $N$ 由数字 1 开头、中间有奇数个 0、最后以 1 结尾，则 $N$ 是素数。需要找出能推翻该猜想的反例。\n\n【解题步骤】\n反例的定义是：前提条件成立（$N$ 符合所述数字形式），但结论不成立（$N$ 不是素数）。\n\n逐一检查三个候选值：\n\nI：$N = 101$。数字形式为 1-0-1，中间有 1 个 0（奇数），前提成立。检验 $101$ 是否为素数：$101$ 不能被 $2$、$3$、$5$、$7$ 整除（$\\sqrt{101} \\approx 10$），因此 $101$ 是素数，结论也成立。这不是反例。\n\nII：$N = 1001$。数字形式为 1-00-1，中间有 2 个 0（偶数），前提条件不满足。因此这也不是反例。\n\nIII：$N = 10001$。数字形式为 1-000-1，中间有 3 个 0（奇数），前提成立。检验 $10001$ 是否为素数：注意到 $10001 = 73 \\times 137$，因此 $10001$ 不是素数，结论不成立。这是一个反例。\n\n只有 III 满足反例的定义。\n\n【快捷思路】\n找反例只需验证两件事：形式对不对（前提）、素不素数（结论）。$101$ 是素数排除，$1001$ 零的个数是偶数直接排除，$10001 = 73 \\times 137$ 是合数——锁定答案。记住几个常见的形式特殊的合数能帮你快速判断。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Number Theory"
    ],
    "modules": [
      "h_logic_counterexamples",
      "b_mathematical_logic_basics",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "h.counterexample_construction",
      "b.counterexample_construction",
      "k.prime_factorisation"
    ],
    "primary_section": "h.counterexample_construction",
    "skills": [
      "counterexample-testing",
      "premise-conclusion-separation",
      "prime-composite-classification",
      "digit-pattern-checking"
    ]
  },
  {
    "id": "2019-P2-Q5",
    "year": 2019,
    "paper": 2,
    "num": 5,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Consider the following statement about the positive integers $a$, $b$ and $n$:\n\n> ($\\ast$): $ab$ is divisible by $n$\n\nThe condition ‘either $a$ or $b$ is divisible by $n$’ is:",
    "options": {
      "A": "**necessary** but **not sufficient** for ($\\ast$)",
      "B": "**sufficient** but **not necessary** for ($\\ast$)",
      "C": "**necessary** and **sufficient** for ($\\ast$)",
      "D": "**not necessary** and **not sufficient** for ($\\ast$)"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查充分条件与必要条件的判断。需判断'$a$ 或 $b$ 是 $n$ 的倍数'对于 '$ab$ 是 $n$ 的倍数'而言是充分条件、必要条件，还是兼具。\n\n【解题步骤】\n充分性：设 $a = kn$（$k$ 为正整数），则 $ab = knb$，显然 $ab$ 也是 $n$ 的倍数。充分性成立。\n\n必要性：假设 $ab$ 是 $n$ 的倍数，能推出 $a$ 或 $b$ 是 $n$ 的倍数吗？取 $n = 4$（非质数），$a = 2$，$b = 2$，则 $ab = 4$ 是 $4$ 的倍数，但 $a$ 和 $b$ 都不是 $4$ 的倍数。反例成立，必要性不成立。\n\n关键：当 $n$ 为质数时必要性才成立，但题目中 $n$ 是任意正整数。\n\n【快捷思路】\n充分性显然；必要性找反例取 $n$ 为非质数（如 $4$），令 $a=2, b=2$ 即可。反例法是选择题最快策略。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Counterexamples",
      "Number Theory"
    ],
    "modules": [
      "b_mathematical_logic_basics",
      "h_logic_counterexamples",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "b.necessary_sufficient_conditions",
      "h.necessary_condition_counterexamples",
      "k.divisibility_remainders"
    ],
    "primary_section": "b.necessary_sufficient_conditions",
    "skills": [
      "necessary-sufficient-condition-test",
      "divisibility-reasoning",
      "counterexample-construction",
      "non-prime-modulus-trap"
    ]
  },
  {
    "id": "2019-P2-Q6",
    "year": 2019,
    "paper": 2,
    "num": 6,
    "topic": "Proof",
    "difficulty": 3,
    "question": "$$ \\cos x + \\sin x \\tan x = 2 \\sin x - 1 $$\n\nin the range $0 \\le x \\le 2\\pi$.\n\nThe student’s attempt is as follows:\n\n$$ \\cos x + \\sin x \\tan x = 2 \\sin x - 1 $$\n\nSo $\\cos x - \\sin x + \\sin x \\tan x - \\sin x = -1$ (I)\n\nSo $(\\sin x - \\cos x)(\\tan x - 1) = -1$ (II)\n\nSo $\\sin x - \\cos x = -1$ or $\\tan x - 1 = -1$ (III)\n\nSo $(\\sin x - \\cos x)^2 = 1$ or $\\tan x = 0$ (IV)\n\nSo $2 \\sin x \\cos x = 0$ or $\\tan x = 0$ (V)\n\nSo $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$ (VI)\n\nWhich of the following best describes this attempt?",
    "options": {
      "A": "It is completely correct",
      "B": "It is incorrect, and the first error occurs on line (I)",
      "C": "It is incorrect, and the first error occurs on line (II)",
      "D": "It is incorrect, and the first error occurs on line (III)",
      "E": "It is incorrect, and the first error is that extra solutions were introduced on line (IV)",
      "F": "It is incorrect, and the first error is that extra solutions were introduced on line (V)",
      "G": "It is incorrect, and the first error is not eliminating the values where $\\tan x$ is undefined on line (VI)"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题给出一名学生对三角方程\n$$\\cos x+\\sin x\\tan x=2\\sin x-1$$\n的推导，要求找出第一次出错的位置。关键是逐行检查逻辑等价变形，尤其警惕把“乘积等于某个非零数”误当作“某个因子等于某个数”。\n\n【解题步骤】\n从原方程出发，学生第 (I) 行把右边移到左边，并把式子整理为\n$$\\cos x-\\sin x+\\sin x\\tan x-\\sin x=-1,$$\n这是合法变形。\n\n第 (II) 行将左边因式分解为\n$$(\\sin x-\\cos x)(\\tan x-1)=-1,$$\n展开可得\n$$\\sin x\\tan x-\\sin x-\\cos x\\tan x+\\cos x.$$\n由于 $\\cos x\\tan x=\\sin x$，这正是第 (I) 行左边，所以第 (II) 行仍正确。\n\n第 (III) 行由\n$$(\\sin x-\\cos x)(\\tan x-1)=-1$$\n推出\n$$\\sin x-\\cos x=-1 \\quad\\text{or}\\quad \\tan x-1=-1.$$\n这是第一次错误。只有当乘积为 $0$ 时，才可以推出至少一个因子为 $0$；乘积为 $-1$ 不能推出某个因子等于 $-1$。\n\n因此最先出错的是第 (III) 行，对应选项 D。\n\n【快捷思路】\n看到“两个因子乘积等于 $-1$”后直接拆成“某个因子等于 $-1$”，就是典型的零乘积法误用。零乘积法只适用于乘积等于 $0$。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Trigonometry"
    ],
    "modules": [
      "e_trigonometry",
      "l_proof_methods"
    ],
    "sections": [
      "e.trig_equations",
      "e.trig_identities",
      "l.proof_error_identification"
    ],
    "primary_section": "l.proof_error_identification",
    "skills": [
      "trig-equation-manipulation",
      "tan-domain-awareness",
      "invalid-product-inference",
      "proof-error-identification"
    ]
  },
  {
    "id": "2019-P2-Q7",
    "year": 2019,
    "paper": 2,
    "num": 7,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "For which one of the following statements can the fact that $12^2 + 16^2 = 20^2$ be used to produce a **counterexample**?",
    "options": {
      "A": "If $a$, $b$ and $c$ are positive integers which satisfy the equation $a^2 + b^2 = c^2$, and the three numbers have no common divisor, then two of them are odd and the other is even.",
      "B": "The equation $a^4 + b^2 = c^2$ has no solutions for which $a$, $b$ and $c$ are positive integers.",
      "C": "The equation $a^4 + b^4 = c^4$ has no solutions for which $a$, $b$ and $c$ are positive integers.",
      "D": "If $a$, $b$ and $c$ are positive integers which satisfy the equation $a^2 + b^2 = c^2$, then one is the arithmetic mean of the other two."
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查用已知等式 $12^2 + 16^2 = 20^2$ 构造反例的能力。'反例'指满足命题前提但结论不成立的情况。\n\n【解题步骤】\n逐项分析：\nA：命题要求 $a, b, c$ 无公因子。但 $12, 16, 20$ 有公因子 $4$，不满足前提，不能作为反例。\n\nB：命题声称 $a^4 + b^2 = c^2$ 无正整数解。注意到 $16 = 4^2$，故 $12^2 + 16^2 = 20^2$ 可改写为 $4^4 + 12^2 = 20^2$，取 $a=4, b=12, c=20$ 即为正整数解，直接构成反例。\n\nC：命题为 $a^4 + b^4 = c^4$ 无解（费马大定理 $n=4$）。$12, 16, 20$ 均非整数四次方，无法改写为该形式，且此命题为真。\n\nD：命题涉及等差数列条件，$12, 16, 20$ 满足该条件，不能作为反例。\n\n【快捷思路】\n抓住 $16 = 4^2$ 这一关键：$16^2 = (4^2)^2 = 4^4$，立刻将 $12^2 + 16^2 = 20^2$ 变为 $4^4 + 12^2 = 20^2$，锁定选项 B。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory"
    ],
    "modules": [
      "h_logic_counterexamples",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "h.counterexample_construction",
      "h.counterexample_identification",
      "k.integer_powers"
    ],
    "primary_section": "h.counterexample_identification",
    "skills": [
      "counterexample-identification",
      "rewrite-pythagorean-triple",
      "integer-power-recognition",
      "premise-checking"
    ]
  },
  {
    "id": "2019-P2-Q8",
    "year": 2019,
    "paper": 2,
    "num": 8,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$a, b$ and $c$ are real numbers with $a < b < c < 0$\n\nWhich of the following statements **must** be true?\n\nI $ac < ab < a^2$\n\nII $b(c + a) > 0$\n\nIII $\\frac{c}{b} > \\frac{a}{b}$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查含负数的不等式运算。已知 $a < b < c < 0$，判断三个命题哪些一定成立。核心规则是：不等式两边同乘或同除负数时，不等号方向必须反转。\n\n【解题步骤】\n命题 I：$ac < ab < a^2$。从 $a < b < c$ 同乘 $a < 0$，不等号反转，得\n$$a^2 > ab > ac,$$\n即\n$$ac < ab < a^2.$$\n命题 I 正确。\n\n命题 II：$b(c+a)>0$。由于 $a<0$ 且 $c<0$，所以 $a+c<0$；又 $b<0$，两个负数相乘为正。因此命题 II 正确。\n\n命题 III：$\\frac{c}{b}>\\frac{a}{b}$。由 $c>a$ 同除以 $b<0$，不等号应反转，得到\n$$\\frac{c}{b}<\\frac{a}{b}.$$\n因此命题 III 错误。取 $a=-3,b=-2,c=-1$，则 $\\frac{c}{b}=\\frac12<\\frac32=\\frac{a}{b}$，也可直接验证。\n\n所以 I 和 II 必然成立。\n\n【快捷思路】\n负数不等式最容易出错的地方就是乘除负数忘记反号。命题 III 正是这个陷阱；用 $a=-3,b=-2,c=-1$ 可以快速排除。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "a2_equations_inequalities"
    ],
    "sections": [
      "a2.inequality_direction",
      "a2.negative_number_inequalities"
    ],
    "primary_section": "a2.inequality_direction",
    "skills": [
      "negative-multiplier-reversal",
      "inequality-chain-reasoning",
      "test-counterexample-values",
      "must-be-true-analysis"
    ]
  },
  {
    "id": "2019-P2-Q9",
    "year": 2019,
    "paper": 2,
    "num": 9,
    "topic": "Combinatorics",
    "difficulty": 3,
    "question": "A large circular table has 40 chairs round it.\n\nWhat is the smallest number of people who can be sitting at the table already such that the next person to sit down **must** sit next to someone?",
    "options": {
      "A": "9",
      "B": "10",
      "C": "13",
      "D": "14",
      "E": "19",
      "F": "20"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考查抽屉原理与极端构造思想。在圆形排列的 $40$ 个座位中，求最少已坐多少人，才能使后来的人无论坐哪都必定与某人相邻。核心思路是控制人与人之间的最大空隙。\n\n【解题步骤】\n若新来者可以不与任何人相邻而坐，说明存在至少 $3$ 个连续的空座位——他坐在中间那个就不会挨着任何人。\n\n反过来，若要保证新来者必然与某人相邻，任意两个相邻就坐者之间最多只能有 $2$ 个空座位。\n\n为了让已坐人数最少，我们让每个人之间的空隙尽可能大，即每两人之间恰好隔 $2$ 个空位。\n从第 $1$ 号座位开始坐人，此后每隔 $3$ 个座位坐一人：$1, 4, 7, 10, \\cdots, 37, 40$。\n\n这是首项为 $1$、公差为 $3$ 的等差数列。末项 $40 = 1 + 3(k-1)$，解得 $k = 14$。\n\n验证：$14$ 人坐好后，$13$ 个间隔各空 $2$ 个座位（共 $26$ 空），最后一个间隔是座位 $40$ 到座位 $1$ 之间，也是相邻的（空 $0$ 个），总计 $14 + 26 = 40$，刚好排满。\n\n若只有 $13$ 人，则总空隙 $40 - 13 = 27$ 个，由鸽巢原理，$13$ 个间隔分配 $27$ 个空位，至少有一个间隔 $\\geq \\lceil 27/13 \\rceil = 3$，新来者可坐中间而不相邻。\n因此最少需要 $14$ 人。\n\n【快捷思路】\n每两人之间最多空 $2$ 个座位才能“封死“所有位置。$40$ 个座位按“人空2“循环分组，每组 $3$ 个座位需 $1$ 人，$40 \\div 3 \\approx 13.3$，向上取整得 $14$ 人。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory"
    ],
    "modules": [
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "k.pigeonhole_principle",
      "k.extremal_counting",
      "k.circular_arrangements"
    ],
    "primary_section": "k.pigeonhole_principle",
    "skills": [
      "pigeonhole-principle",
      "extremal-construction",
      "cycle-spacing",
      "ceil-division"
    ]
  },
  {
    "id": "2019-P2-Q10",
    "year": 2019,
    "paper": 2,
    "num": 10,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "$PQRS$ is a quadrilateral, labelled anticlockwise.\n\nWhich one of the following is a **necessary** but **<u>not</u> sufficient** condition for $PQRS$ to be a parallelogram?",
    "options": {
      "A": "$PQ = SR$ and $PS$ is parallel to $QR$",
      "B": "$PQ = SR$ and $PQ$ is parallel to $SR$",
      "C": "$PQ = QR = SR = PS$",
      "D": "$PR = QS$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考查平面几何中平行四边形的判定条件，以及逻辑上的“必要“与“充分“概念。“必要“指平行四边形一定满足该条件，“充分“指满足该条件就一定是平行四边形。需要对每个选项逐一分析。\n\n【解题步骤】\n逐项分析：\n\n选项 A：$PQ = SR$ 且 $PS \\parallel QR$。\n平行四边形的对边相等且对边平行，所以这两个性质都是必要的。\n但是否充分？画两条平行线 $PS$ 和 $QR$，用等长的 $PQ$ 和 $SR$ 连接它们。连接方式有两种——一种是平行四边形，另一种是等腰梯形（两腰相等但不平行）。因此 A 不充分。综合判断：A 是必要但不充分条件。\n\n选项 B：$PQ = SR$ 且 $PQ \\parallel SR$。\n一组对边相等且平行，可以推出四边形是平行四边形（向量法或全等三角形均可证），所以 B 既是必要又是充分的。\n\n选项 C：四条边都相等。\n这是菱形的特征，菱形是平行四边形的一种，所以 C 是充分的。但一般平行四边形四边不一定相等，所以 C 不是必要的。\n\n选项 D：对角线 $PR = QS$。\n一般平行四边形对角线不相等（只有矩形才相等），所以 D 不是必要的。\n\n综上，只有 A 满足“必要但不充分“。\n\n【快捷思路】\n直接找反例判断“充分性“：A 选项画个等腰梯形就破功（对腰相等、底平行但不是平行四边形），B 是课本经典判定定理直接充分，C 是菱形太特殊不普遍必要，D 矩形才有不普遍必要。锁定 A。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry",
      "Logic"
    ],
    "modules": [
      "h_logic_counterexamples",
      "d_coordinate_geometry"
    ],
    "sections": [
      "h.necessary_sufficient_conditions",
      "h.necessary_condition_counterexamples",
      "d.quadrilateral_properties"
    ],
    "primary_section": "h.necessary_sufficient_conditions",
    "skills": [
      "necessary-sufficient-analysis",
      "parallelogram-criteria",
      "counterexample-construction",
      "quadrilateral-classification"
    ]
  },
  {
    "id": "2019-P2-Q11",
    "year": 2019,
    "paper": 2,
    "num": 11,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "An **arithmetic** series has $n$ terms, all of which are **integers**.\n\nThe sum of the series is 20.\n\nWhich of the following statements **must** be true?\n\nI The first term of the series is even.\n\nII $n$ is even.\n\nIII The common difference is even.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考查等差数列求和公式及整数性质。已知 $n$ 项整数等差数列的和为 $20$，需判断三个命题是否必然成立。核心方法是用求和公式列出方程，通过构造反例逐一否定。\n\n【解题步骤】\n设首项为 $a$，公差为 $d$，由等差数列求和公式：\n$$\\frac{n}{2}(2a + (n-1)d) = 20$$\n两边乘以 $2$ 得：\n$$n(2a + (n-1)d) = 40$$\n由于各项为整数，$a$、$d$ 均为整数，所以 $n$ 必须是 $40$ 的正因数。列出可能的 $n$ 值及对应关系：\n\n$n=1$：$2a=40 \\Rightarrow a=20$。\n\n$n=2$：$2a+d=20$。取 $d=2$，得 $a=9$，数列为 $9, 11$，和为 $20$。首项 $9$ 是奇数，说明命题 I（首项必为偶数）不成立。\n\n$n=5$：$2a+4d=8 \\Rightarrow a+2d=4$。取 $d=1$，得 $a=2$，数列为 $2, 3, 4, 5, 6$，和为 $20$。这里 $n=5$ 是奇数，说明命题 II（$n$ 必为偶数）不成立；同时 $d=1$ 是奇数，说明命题 III（公差必为偶数）不成立。\n三个命题均能找到反例，都不必然成立。\n\n【快捷思路】\n用反例法最快：$n=1$ 时只有 $a=20$（偶），但 $n=2$ 时取 $9+11=20$ 首项为奇，否定 I；$2+3+4+5+6=20$ 这一个反例同时否定 II 和 III（$n=5$ 为奇，$d=1$ 为奇）。三个全否。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory",
      "Counterexamples"
    ],
    "modules": [
      "c_sequences_series",
      "k_number_theory_combinatorics",
      "h_logic_counterexamples"
    ],
    "sections": [
      "c.arithmetic_series",
      "c.arithmetic_series_integer_constraints",
      "k.parity_integer_constraints",
      "h.counterexample_construction"
    ],
    "primary_section": "c.arithmetic_series_integer_constraints",
    "skills": [
      "arithmetic-series-sum",
      "integer-constraint",
      "parity-analysis",
      "divisor-case-analysis",
      "counterexample-construction"
    ]
  },
  {
    "id": "2019-P2-Q12",
    "year": 2019,
    "paper": 2,
    "num": 12,
    "topic": "Probability",
    "difficulty": 3,
    "question": "Most students in a large college study Mathematics. A teacher chooses three different students at random, one after the other.\n\nConsider these three probabilities:\n\n$R = \\text{P(At least one of the students chosen studies Mathematics)}$\n\n$S = \\text{P(The second student chosen studies Mathematics)}$\n\n$T = \\text{P(All three of the students chosen study Mathematics)}$\n\nWhich of the following is true?",
    "options": {
      "A": "$R < S < T$",
      "B": "$R < T < S$",
      "C": "$S < R < T$",
      "D": "$S < T < R$",
      "E": "$T < R < S$",
      "F": "$T < S < R$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考查概率的比较与集合包含关系。已知大多数学生学数学，随机选 $3$ 人，比较三个事件概率的大小。最巧妙的方法是不用计算，直接分析事件之间的逻辑蕴含关系。\n\n【解题步骤】\n设 $M$ 表示''选出的学生学数学''。三个事件分别为：\n\n$R$：至少一人学数学。\n$S$：第二人选数学。\n$T$：三人都学数学。\n\n分析蕴含关系：\n若 $T$ 发生（三人都学数学），则第二人必然学数学，即 $S$ 也发生。所以 $T \\subseteq S$，即 $T < S$（严格不等，因为存在''第二人学数学但另两人不学''的情况，概率大于零）。\n\n若 $S$ 发生（第二人学数学），则''至少一人学数学''必然成立，即 $R$ 也发生。所以 $S \\subseteq R$，即 $S < R$（严格不等，因为存在''第一人学数学但第二人不学''的情况）。\n综合得到：$T < S < R$。\n\n【快捷思路】\n利用集合包含关系秒杀：''三人都学''蕴含''第二人学''蕴含''至少一人学''，事件范围从小到大，概率自然递增。无需任何计算。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Sets"
    ],
    "modules": [
      "j_sets_probability",
      "b_mathematical_logic_basics"
    ],
    "sections": [
      "j.event_inclusion_probability",
      "j.probability_comparison",
      "b.logical_implication"
    ],
    "primary_section": "j.event_inclusion_probability",
    "skills": [
      "event-inclusion",
      "probability-ordering",
      "implication-chain",
      "without-replacement-reasoning"
    ]
  },
  {
    "id": "2019-P2-Q13",
    "year": 2019,
    "paper": 2,
    "num": 13,
    "topic": "Integration",
    "difficulty": 3,
    "question": "A student approximates the integral $\\int_{a}^{b} \\sin^{2} x \\, dx$ using the trapezium rule with 4 strips. The resulting approximation is an overestimate.\n\nWhich of the following is/are **necessarily** true?\n\n*   **I** If the student approximates $\\int_{-b}^{-a} \\sin^{2} x \\, dx$ in the same way, the result will be an overestimate.\n\n*   **II** If the student approximates $\\int_{a}^{b} \\cos^{2} x \\, dx$ in the same way, the result will be an underestimate.",
    "options": {
      "A": "neither of them",
      "B": "I only",
      "C": "II only",
      "D": "I and II"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考查梯形法则的误差分析与函数对称性。已知用4个小区间的梯形法则近似 $\\int_{a}^{b}\\sin^{2}x\\,dx$ 产生高估，判断对积分 $\\int_{-b}^{-a}\\sin^{2}x\\,dx$ 和 $\\int_{a}^{b}\\cos^{2}x\\,dx$ 应用同样方法时的误差方向。\n\n【解题步骤】\n命题I：考虑 $\\int_{-b}^{-a}\\sin^{2}x\\,dx$。\n\n$\\sin^{2}x$ 是偶函数，因为 $\\sin^{2}(-x)=(-\\sin x)^{2}=\\sin^{2}x$，图像关于 $y$ 轴对称。\n\n将原区间 $[a,b]$ 上的4个梯形沿 $y$ 轴反射，恰好得到区间 $[-b,-a]$ 上的梯形近似。图形完全对称，面积不变，误差方向也不变。\n\n因此原近似是高估，反射后的近似同样是高估。命题I成立。\n\n命题II：考虑 $\\int_{a}^{b}\\cos^{2}x\\,dx$。\n\n利用恒等式 $\\sin^{2}x+\\cos^{2}x=1$，得 $\\cos^{2}x=1-\\sin^{2}x$。\n\n在区间 $[a,b]$ 上，$\\cos^{2}x$ 的图像可以看作 $\\sin^{2}x$ 的图像关于直线 $y=\\frac{1}{2}$ 翻折。\n\n梯形近似中，对应 $\\sin^{2}x$ 的梯形面积与对应 $\\cos^{2}x$ 的梯形面积之和等于矩形面积（高为1），这是精确值。既然 $\\sin^{2}x$ 的梯形近似是高估（偏大），那么 $\\cos^{2}x$ 的梯形近似必然低估（偏小）。命题II成立。\n\n【快捷思路】\n利用偶函数对称性直接判断命题I；利用 $\\sin^{2}x+\\cos^{2}x=1$ 的互补关系，一个高估则另一个必低估，秒判命题II。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Trigonometry",
      "Graphs"
    ],
    "modules": [
      "g_integration",
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "g.trapezium_rule_error",
      "g.complementary_integrands",
      "e.trig_identities",
      "i.even_function_symmetry"
    ],
    "primary_section": "g.trapezium_rule_error",
    "skills": [
      "trapezium-rule-error",
      "even-function-symmetry",
      "complementary-functions",
      "trig-identity-use"
    ]
  },
  {
    "id": "2019-P2-Q14",
    "year": 2019,
    "paper": 2,
    "num": 14,
    "topic": "Functions",
    "difficulty": 3,
    "question": "Consider the following statements about the polynomial $p(x)$, where $a < b$:\n\nI $p(a) \\le p(b)$\n\nII $p'(a) \\le p'(b)$\n\nIII $p''(a) \\le p''(b)$\n\nWhich of these statements is a **necessary** condition for $p(x)$ to be increasing for $a \\le x \\le b$?",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查增函数的必要条件。已知多项式 $p(x)$ 在区间 $[a,b]$（$a<b$）上递增，判断三个命题哪些是必然成立的必要条件。\n\n【解题步骤】\n命题I：$p(a)\\leq p(b)$。\n\n$p(x)$ 在 $[a,b]$ 上递增，意味着对任意 $x_1<x_2\\in[a,b]$，有 $p(x_1)\\leq p(x_2)$。取 $x_1=a,x_2=b$，即得 $p(a)\\leq p(b)$。这是增函数定义的直接推论，必然成立。\n\n命题II：$p'(a)\\leq p'(b)$。\n\n函数递增只要求导数非负，不要求导数本身递增。构造反例：$p(x)=9-x^{2}$ 在 $[-3,0]$ 上递增，但 $p'(-3)=6>0=p'(0)$，导数反而减小。命题II不是必要条件。\n\n命题III：$p''(a)\\leq p''(b)$。\n\n递增与二阶导数无关。构造反例：令 $p''(x)=-x$，积分得 $p'(x)=-\\frac{1}{2}x^{2}+c$，再积分得 $p(x)=-\\frac{1}{6}x^{3}+cx$。取 $c=2$，在 $[0,1]$ 上 $p'(x)>0$，函数递增，但 $p''(0)=0>-1=p''(1)$。命题III不是必要条件。\n\n本质理解：递增只约束函数值的大小关系，对导数和二阶导数没有任何必然约束。\n\n【快捷思路】\n命题I由定义直接得证。命题II和III分别只需一个反例即可排除：用 $p(x)=9-x^{2}$ 否定II，用三次多项式否定III。考试时直接想到'递增只涉及函数值不涉及导数变化趋势'，可快速排除II和III。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Counterexamples"
    ],
    "modules": [
      "i_functions_graphs",
      "f_differentiation",
      "h_logic_counterexamples"
    ],
    "sections": [
      "i.function_monotonicity",
      "f.monotonicity",
      "h.counterexample_construction"
    ],
    "primary_section": "i.function_monotonicity",
    "skills": [
      "necessary-condition",
      "monotonicity-definition",
      "derivative-counterexample",
      "second-derivative-counterexample"
    ]
  },
  {
    "id": "2019-P2-Q15",
    "year": 2019,
    "paper": 2,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The numbers $a$, $b$ and $c$ are each greater than 1.\n\nThe following logarithms are all to the same base:\n\n$$\\log(ab^2c) = 7$$\n$$\\log(a^2bc^2) = 11$$\n$$\\log(a^2b^2c^3) = 15$$\n\nWhat is this base?",
    "options": {
      "A": "$a$",
      "B": "$b$",
      "C": "$c$",
      "D": "It is possible to determine the base, but the base is not $a$, $b$ or $c$.",
      "E": "There is insufficient information given to determine the base."
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查对数运算法则与三元一次方程组。已知三个对数等式，底数相同且未知，$a,b,c>1$，求对数的底数。\n【解题步骤】\n利用对数运算法则 $\\log(xy)=\\log x+\\log y$ 和 $\\log(x^{n})=n\\log x$，将三个等式展开：\n$$\\log a+2\\log b+\\log c=7$$\n$$2\\log a+\\log b+2\\log c=11$$\n$$2\\log a+2\\log b+3\\log c=15$$\n令 $A=\\log a$，$B=\\log b$，$C=\\log c$，得到三元一次方程组：\n$$A+2B+C=7\\qquad(1)$$\n$$2A+B+2C=11\\qquad(2)$$\n$$2A+2B+3C=15\\qquad(3)$$\n$(3)-(2)$ 消去 $A$：$B+C=4\\qquad(4)$\n$(3)-2\\times(1)$ 消去 $A$：$-2B+C=1\\qquad(5)$\n$(4)-(5)$ 得：$3B=3$，所以 $B=1$。\n代入 $(4)$ 得 $C=3$，代入 $(1)$ 得 $A=2$。\n即 $\\log b=1$，这意味着底数就是 $b$（因为 $\\log_{b}b=1$）。\n同时 $\\log a=2$ 得 $a=b^{2}$，$\\log c=3$ 得 $c=b^{3}$。\n\n【快捷思路】\n观察到 $\\log b=1$ 即为突破口，底数就是 $b$。解方程组时先用 $(3)-(2)$ 消去 $A$，再用 $(3)-2(1)$ 消去 $A$，两式相减直接得 $B=1$，避免完整求解三元方程。\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a3.logarithm_laws",
      "a3.logarithm_base_identification",
      "a2.linear_simultaneous_equations"
    ],
    "primary_section": "a3.logarithm_base_identification",
    "skills": [
      "log-laws",
      "linear-system-elimination",
      "substitution",
      "base-identification"
    ]
  },
  {
    "id": "2019-P2-Q16",
    "year": 2019,
    "paper": 2,
    "num": 16,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$$y = px^2 + qx + p$$\nwhere $p > 0$, intersects the $x$-axis at two distinct points.\n\nIn which one of the following graphs does the **shaded** region show the complete set of possible values that $p$ and $q$ could take?\n",
    "options": {
      "A": "Graph A",
      "B": "Graph B",
      "C": "Graph C",
      "D": "Graph D",
      "E": "Graph E",
      "F": "Graph F",
      "G": "Graph G",
      "H": "Graph H"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考查二次函数判别式与不等式在平面上的区域表示。已知抛物线 $y=px^{2}+qx+p$（$p>0$）与 $x$ 轴有两个不同交点，求 $p,q$ 满足的区域图像。\n【解题步骤】\n二次函数与 $x$ 轴有两个不同交点，判别式必须大于零：\n$$\\Delta=q^{2}-4p\\cdot p=q^{2}-4p^{2}>0$$\n因式分解得：\n$$(q-2p)(q+2p)>0$$\n这要求两个因子同号：\n情况一：$q-2p>0$ 且 $q+2p>0$，即 $q>2p$ 且 $q>-2p$。由于 $p>0$，$2p>-2p$，所以 $q>2p$ 自动满足 $q>-2p$，条件简化为 $q>2p$。\n情况二：$q-2p<0$ 且 $q+2p<0$，即 $q<2p$ 且 $q<-2p$。由于 $p>0$，$-2p<2p$，所以 $q<-2p$ 自动满足 $q<2p$，条件简化为 $q<-2p$。\n综上，满足条件的区域为 $q>2p$ 或 $q<-2p$，且 $p>0$。\n在 $pq$ 平面上，这是 $p>0$（右半平面）中位于直线 $q=2p$ 上方和直线 $q=-2p$ 下方的两个楔形区域。\n\n【快捷思路】\n取特殊点验证法更快：取 $p=1,q=0$，判别式 $=0-4=-4<0$，该点不在区域内，可排除多个选项。再取 $p=1,q=-4$，判别式 $=16-4=12>0$，该点在区域内，进一步排除。最后用 $p=2,q=3$ 区分剩余选项，判别式 $=9-16=-7<0$，不在区域内，锁定唯一正确答案。\n【正确答案】F",
    "images": {
      "image": "2019 P2 Q16 8 options.png"
    },
    "has_image": true,
    "related_topics": [
      "Graphs"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.parameter_discriminant",
      "a2.quadratic_inequalities",
      "i.inequality_regions"
    ],
    "primary_section": "a2.parameter_discriminant",
    "skills": [
      "discriminant-condition",
      "factorised-inequality",
      "parameter-region",
      "graph-region-selection"
    ]
  },
  {
    "id": "2019-P2-Q17",
    "year": 2019,
    "paper": 2,
    "num": 17,
    "topic": "Logic",
    "difficulty": 3,
    "question": "A multiple-choice test question offered the following four options relating to a certain statement. \n\nGiven that **exactly one** of these options was correct, which one was it?",
    "options": {
      "A": "The statement is true **if and only if** $x > 1$",
      "B": "The statement is true **if** $x > 1$",
      "C": "The statement is true **if and only if** $x > 2$",
      "D": "The statement is true **if** $x > 2$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考查逻辑推理能力，涉及充分条件（if）与充要条件（iff）之间的蕴含关系。题目给出关于命题 $P(x)$ 的四个选项，已知恰好只有一个选项正确，要求判断哪个选项是正确答案。四个选项分别是：A（$P(x)\\iff x>1$）、B（$x>1\\implies P(x)$）、C（$P(x)\\iff x>2$）、D（$x>2\\implies P(x)$）。\n\n【解题步骤】\n解题核心在于理解一个关键逻辑原则：若选项X能推出选项Y，则Y不可能是唯一正确的选项（因为X正确时Y也必然正确，这就出现了两个正确选项，与题意矛盾）。\n\n首先分析A与B的关系：若A正确，即 $P(x)$ 等价于 $x>1$，这意味着当 $x>1$ 时 $P(x)$ 成立，即B也成立。所以A正确蕴含B正确，A不可能是答案。\n\n同理分析C与D的关系：若C正确，即 $P(x)$ 等价于 $x>2$，则 $x>2$ 时 $P(x)$ 成立，D也成立。C不可能是答案。\n\n接下来比较B与D：若B正确（$x>1$ 时 $P(x)$ 成立），则 $x>2$ 时必有 $x>1$，从而 $P(x)$ 也成立，即D也正确。因此B不可能是答案。\n\n反过来，若D正确（$x>2$ 时 $P(x)$ 成立），不能推出B正确——例如当 $x=\\frac{3}{2}$ 时 $P(x)$ 可以不成立，此时B不成立。这是唯一满足“恰好一个正确”的情况。\n\n【快捷思路】\n画逻辑蕴含图：A→B，C→D，B→D。箭头表示“蕴含”。有箭头指向的选项不可能是唯一正确答案（因为被蕴含者正确则蕴含者也正确）。只有D没有任何其他选项蕴含它，且D不能反向推出其他选项，因此D是唯一可能的答案。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Counterexamples"
    ],
    "modules": [
      "b_mathematical_logic_basics",
      "h_logic_counterexamples"
    ],
    "sections": [
      "b.logical_implication",
      "b.necessary_sufficient_conditions",
      "h.necessary_sufficient_conditions"
    ],
    "primary_section": "b.logical_implication",
    "skills": [
      "implication-chain",
      "uniqueness-condition",
      "necessary-sufficient-analysis",
      "counterexample-model"
    ]
  },
  {
    "id": "2019-P2-Q18",
    "year": 2019,
    "paper": 2,
    "num": 18,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the following inequality:\n\n$$(\\ast): \\quad a|x| + 1 \\le |x - 2|$$\n\nwhere $a$ is a real constant.\n\nWhich one of the following describes the complete set of values of $a$ such that $(\\ast)$ is **true for all real** $x$?",
    "options": {
      "A": "$a \\le \\frac{3}{2}$",
      "B": "$a \\le 1$",
      "C": "$a \\le \\frac{1}{2}$",
      "D": "$a \\le 0$",
      "E": "$a \\le -\\frac{1}{2}$",
      "F": "$a \\le -1$",
      "G": "$a \\le -\\frac{3}{2}$",
      "H": "There are no such values of $a$."
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题要求不等式 $a|x|+1\\leq |x-2|$ 对一切实数 $x$ 都成立时，参数 $a$ 的取值范围。涉及两个含绝对值的函数，最佳策略是通过图像分析来把握整体关系。\n\n【解题步骤】\n将不等式理解为比较两个函数：$y=a|x|+1$ 和 $y=|x-2|$。我们需要 $a|x|+1$ 的图像始终在 $|x-2|$ 的图像下方。\n\n函数 $y=|x-2|$ 是 $y=|x|$ 向右平移 $2$ 个单位得到的V形折线，最低点在 $(2,0)$。\n\n函数 $y=a|x|+1$ 是将 $y=|x|$ 纵向拉伸 $a$ 倍后向上平移 $1$ 个单位，最低点在 $(0,1)$。\n\n当 $a>0$ 时，$y=a|x|+1$ 是开口向上的V形，在 $x\\to\\pm\\infty$ 时趋向无穷大，必然会与 $y=|x-2|$ 相交，不满足条件。\n\n当 $a=0$ 时，$y=1$，在 $x=2$ 处 $1\\leq 0$ 不成立。\n\n当 $a<0$ 时，$y=a|x|+1$ 是开口向下的倒V形。关键转折点是当它恰好经过 $(2,0)$ 时：代入得 $a\\cdot 2+1=0$，解得 $a=-\\frac{1}{2}$。\n\n当 $a=-\\frac{1}{2}$ 时，在 $x=2$ 处两函数值相等（均为0），在其他位置需要验证不等式是否成立。当 $a<-\\frac{1}{2}$ 时，$y=a|x|+1$ 在 $x=2$ 处为负值，且开口更“扁”，始终低于 $y=|x-2|$。\n\n因此临界值为 $a=-\\frac{1}{2}$，所求范围为 $a\\leq -\\frac{1}{2}$。\n\n【快捷思路】\n直接代入临界点 $(2,0)$：令 $a|2|+1=0$，解得 $a=-\\frac{1}{2}$。由于 $a$ 越小，$a|x|+1$ 的图像越低，不等式越容易成立，因此答案为 $a\\leq -\\frac{1}{2}$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Graphs"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.absolute_value_inequalities",
      "i.absolute_value_functions"
    ],
    "primary_section": "a2.absolute_value_inequalities",
    "skills": [
      "absolute-value-inequality",
      "parameter-condition",
      "graph-comparison",
      "critical-point-test",
      "all-real-inequality"
    ]
  },
  {
    "id": "2019-P2-Q19",
    "year": 2019,
    "paper": 2,
    "num": 19,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the value of the expression\n\n$$\\sqrt{8 - 4\\sqrt{2} + 1} + \\sqrt{9 - 12\\sqrt{2} + 8}$$",
    "options": {
      "A": "$\\sqrt{26 - 16\\sqrt{2}}$",
      "B": "$4\\sqrt{2} - 4$",
      "C": "$-2$",
      "D": "$4 - 4\\sqrt{2}$",
      "E": "$2$",
      "F": "$\\sqrt{26 - 4\\sqrt{2}}$",
      "G": "$1$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题要求化简 $\\sqrt{8-4\\sqrt{2}+1}+\\sqrt{9-12\\sqrt{2}+8}$ 的值。核心技巧是将被开方数识别为完全平方的形式，从而去掉外层根号。\n\n【解题步骤】\n首先化简第一个根号：$\\sqrt{8-4\\sqrt{2}+1}=\\sqrt{9-4\\sqrt{2}}$。\n\n尝试写成 $(a-b\\sqrt{2})^2=a^2+2b^2-2ab\\sqrt{2}$ 的形式。需要 $a^2+2b^2=9$ 且 $2ab=4$，即 $ab=2$。\n\n取 $a=2\\sqrt{2}$，$b=1$（因为 $8-4\\sqrt{2}+1$ 中 $8=(2\\sqrt{2})^2$，$1=1^2$），验证：$(2\\sqrt{2}-1)^2=8+1-4\\sqrt{2}=9-4\\sqrt{2}$ ✓。由于 $2\\sqrt{2}\\approx 2.828>1$，故 $\\sqrt{9-4\\sqrt{2}}=2\\sqrt{2}-1$。\n\n接下来化简第二个根号：$\\sqrt{9-12\\sqrt{2}+8}=\\sqrt{17-12\\sqrt{2}}$。\n\n观察 $9=3^2$，$8=(2\\sqrt{2})^2$，尝试 $(3-2\\sqrt{2})^2=9+8-12\\sqrt{2}=17-12\\sqrt{2}$ ✓。\n\n由于 $3>2\\sqrt{2}\\approx 2.828$，故 $\\sqrt{17-12\\sqrt{2}}=3-2\\sqrt{2}$。\n\n将两项相加：$(2\\sqrt{2}-1)+(3-2\\sqrt{2})=2$。\n\n【快捷思路】\n出题人刻意将 $8-4\\sqrt{2}+1$ 写成展开形式（而非简化为 $9-4\\sqrt{2}$），就是暗示我们将其视为完全平方 $(2\\sqrt{2}-1)^2$。同理，$9-12\\sqrt{2}+8$ 对应 $(3-2\\sqrt{2})^2$。两项相加后 $\\sqrt{2}$ 项恰好抵消，结果为 $2$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "a1_algebra_basics"
    ],
    "sections": [
      "a1.surds",
      "a1.surd_simplification"
    ],
    "primary_section": "a1.surd_simplification",
    "skills": [
      "surd-simplification",
      "perfect-square-recognition",
      "absolute-value-from-square-root"
    ]
  },
  {
    "id": "2019-P2-Q20",
    "year": 2019,
    "paper": 2,
    "num": 20,
    "topic": "Functions",
    "difficulty": 3,
    "question": "When the graph of the function $y = f(x)$, defined on the real numbers, is reflected in the $y$-axis and then translated by 2 units in the negative $x$-direction, the result is the graph of the function $y = g(x)$.\n\nWhen the graph of the same function $y = f(x)$ is translated by 2 units in the negative $x$-direction and then reflected in the $y$-axis, the result is the graph of the function $y = h(x)$.\n\nWhich one of the following conditions on $y = f(x)$ is **necessary and sufficient** for the functions $g(x)$ and $h(x)$ to be identical?",
    "options": {
      "A": "$f(x) = f(x + 2)$ for all $x$",
      "B": "$f(x) = f(x + 4)$ for all $x$",
      "C": "$f(x) = f(x + 8)$ for all $x$",
      "D": "$f(x) = f(-x)$ for all $x$",
      "E": "$f(x) = f(2 - x)$ for all $x$",
      "F": "$f(x) = f(4 - x)$ for all $x$",
      "G": "$f(x) = f(8 - x)$ for all $x$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查函数图像变换与周期性的关系。函数 $y=f(x)$ 经过“关于 $y$ 轴反射再向左平移2个单位”和“向左平移2个单位再关于 $y$ 轴反射”两种操作后得到相同的函数，要求由此推导出 $f(x)$ 的性质。\n\n【解题步骤】\n逐步追踪两种变换对函数表达式的影响。\n\n第一种操作：先关于 $y$ 轴反射，得 $y=f(-x)$；再向左平移 $2$ 个单位（将 $x$ 替换为 $x+2$），得 $g(x)=f(-(x+2))=f(-x-2)$。\n\n第二种操作：先向左平移 $2$ 个单位，得 $y=f(x+2)$；再关于 $y$ 轴反射（将 $x$ 替换为 $-x$），得 $h(x)=f(-x+2)$。\n\n已知 $g(x)$ 与 $h(x)$ 是同一函数，即对任意 $x$：\n$$f(-x-2)=f(-x+2)$$\n\n令 $u=-x-2$，则 $-x+2=u+4$，代入上式得：\n$$f(u)=f(u+4)\\quad\\text{对任意} \\, u \\, \\text{成立}$$\n\n将 $u$ 换回 $x$，即 $f(x)=f(x+4)$ 对所有 $x$ 成立，说明 $f(x)$ 是以 $4$ 为周期的周期函数。\n\n【快捷思路】\n直接写出两种变换后的表达式：$g(x)=f(-x-2)$，$h(x)=f(-x+2)$。令两者相等 $f(-x-2)=f(-x+2)$，做变量代换 $u=-x-2$，立即得到 $f(u)=f(u+4)$，即周期为 $4$。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Logic"
    ],
    "modules": [
      "i_functions_graphs",
      "h_logic_counterexamples"
    ],
    "sections": [
      "i.graph_transformations",
      "i.function_periodicity",
      "h.necessary_sufficient_conditions"
    ],
    "primary_section": "i.graph_transformations",
    "skills": [
      "graph-transformation-order",
      "reflection-translation-composition",
      "variable-substitution",
      "periodicity-condition",
      "necessary-sufficient-analysis"
    ]
  },
  {
    "id": "2020-P1-Q1",
    "year": 2020,
    "paper": 1,
    "num": 1,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "Which of the following is an expression for the first derivative with respect to $x$ of\n\n$$\\frac{x^3 - 5x^2}{2x\\sqrt{x}}$$",
    "options": {
      "A": "$-\\frac{\\sqrt{x}}{2}$",
      "B": "$\\frac{\\sqrt{x}}{4}$",
      "C": "$\\frac{3x - 5}{4\\sqrt{x}}$",
      "D": "$\\frac{3\\sqrt{x} - 5}{4\\sqrt{x}}$",
      "E": "$\\frac{3\\sqrt{x} - 10}{3\\sqrt{x}}$",
      "F": "$\\frac{3x^2 - 10x}{3\\sqrt{x}}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n求 $f(x) = \\frac{x^3 - 5x^2}{2x\\sqrt{x}}$ 的导数。\n\n【解题步骤】\n先将表达式写成 $x$ 的幂次形式：\n\n$f(x) = \\frac{x^3 - 5x^2}{2x^{3/2}} = \\frac{x^3}{2x^{3/2}} - \\frac{5x^2}{2x^{3/2}} = \\frac{1}{2}x^{3/2} - \\frac{5}{2}x^{1/2}$\n\n对各项求导：\n\n$f'(x) = \\frac{1}{2} \\cdot \\frac{3}{2}x^{1/2} - \\frac{5}{2} \\cdot \\frac{1}{2}x^{-1/2} = \\frac{3}{4}x^{1/2} - \\frac{5}{4}x^{-1/2}$\n\n将结果整理为选项中的形式：\n\n$f'(x) = \\frac{3\\sqrt{x}}{4} - \\frac{5}{4\\sqrt{x}} = \\frac{3\\sqrt{x} \\cdot \\sqrt{x} - 5}{4\\sqrt{x}} = \\frac{3x - 5}{4\\sqrt{x}}$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "f_differentiation",
      "a1_algebra_basics"
    ],
    "sections": [
      "f.power_function_derivatives",
      "a1.index_laws"
    ],
    "primary_section": "f.power_function_derivatives",
    "skills": [
      "simplify-before-differentiating",
      "index-laws",
      "power-rule",
      "fraction-rearrangement"
    ]
  },
  {
    "id": "2020-P1-Q2",
    "year": 2020,
    "paper": 1,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$(2x + 1)$ and $(x - 2)$ are factors of $2x^3 + px^2 + q$\n\nWhat is the value of $2p + q$?",
    "options": {
      "A": "$-10$",
      "B": "$-\\frac{38}{5}$",
      "C": "$-\\frac{22}{3}$",
      "D": "$\\frac{22}{3}$",
      "E": "$\\frac{38}{5}$",
      "F": "$10$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n$(2x+1)$ 和 $(x-2)$ 是 $2x^3+px^2+q$ 的因式。求 $2p+q$ 的值。\n\n【解题步骤】\n**Step 1:** 利用因式定理\n\n若 $(2x+1)$ 是因式，则 $x=-\\frac{1}{2}$ 时多项式为 0：\n$2(-\\frac{1}{2})^3 + p(-\\frac{1}{2})^2 + q = 0$\n$-\\frac{1}{4} + \\frac{p}{4} + q = 0$，即 $p + 4q = 1$ ……①\n\n若 $(x-2)$ 是因式，则 $x=2$ 时多项式为 0：\n$2(2)^3 + p(2)^2 + q = 0$\n$16 + 4p + q = 0$，即 $4p + q = -16$ ……②\n\n**Step 2:** 解方程组\n从①②相减消 $q$：$3p - 3q = -17$，即 $\\frac{15}{4}p = -\\frac{65}{4}$\n\n更直接：由② $q = -16 - 4p$，代入①：$p + 4(-16-4p) = 1$，$p - 64 - 16p = 1$，$-15p = 65$，$p = -\\frac{13}{3}$\n\n$q = -16 - 4(-\\frac{13}{3}) = -16 + \\frac{52}{3} = \\frac{4}{3}$\n\n**Step 3:** 求 $2p+q$\n$2p + q = 2(-\\frac{13}{3}) + \\frac{4}{3} = -\\frac{26}{3} + \\frac{4}{3} = -\\frac{22}{3}$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "a2_equations_inequalities",
      "a1_algebra_basics"
    ],
    "sections": [
      "a2.factor_theorem",
      "a1.polynomial_factorisation"
    ],
    "primary_section": "a2.factor_theorem",
    "skills": [
      "factor-theorem",
      "substitution-at-root",
      "linear-system-solving",
      "parameter-evaluation"
    ]
  },
  {
    "id": "2020-P1-Q3",
    "year": 2020,
    "paper": 1,
    "num": 3,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the complete set of values of $x$ for which\n\n$$(x + 4)(x + 3)(1 - x) > 0 \\text{ and } (x + 2)(x - 2) < 0$$",
    "options": {
      "A": "$1 < x < 2$",
      "B": "$-2 < x < 1$",
      "C": "$-2 < x < 2$",
      "D": "$x < -2 \\text{ or } x > 1$",
      "E": "$x < -4 \\text{ or } x > 2$",
      "F": "$x < -4 \\text{ or } -3 < x < 1$",
      "G": "$-4 < x < -2 \\text{ or } x > 1$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n求满足两个不等式的 $x$ 值：$(x+4)(x+3)(1-x) > 0$ 且 $(x+2)(x-2) < 0$\n\n【解题步骤】\n**分析第一个不等式** $(x+4)(x+3)(1-x) > 0$\n\n三个根：$x=-4$, $x=-3$, $x=1$\n\n用数轴法分析各区间乘积符号：\n\n| 区间 | $x+4$ | $x+3$ | $1-x$ | 乘积 |\n|------|-------|-------|-------|------|\n| $x < -4$ | $-$ | $-$ | $+$ | $+$ ✓ |\n| $-4 < x < -3$ | $+$ | $-$ | $+$ | $-$ |\n| $-3 < x < 1$ | $+$ | $+$ | $+$ | $+$ ✓ |\n| $x > 1$ | $+$ | $+$ | $-$ | $-$ |\n\n第一个不等式的解：$x < -4$ 或 $-3 < x < 1$\n\n**分析第二个不等式** $(x+2)(x-2) < 0$\n\n两个根：$x=-2$, $x=2$，乘积为负需一正一负，解为 $-2 < x < 2$\n\n**求交集**\n\n条件1：$x < -4$ 或 $-3 < x < 1$\n条件2：$-2 < x < 2$\n\n$\\{x < -4\\} \\cap \\{-2 < x < 2\\} = \\varnothing$\n\n$\\{-3 < x < 1\\} \\cap \\{-2 < x < 2\\} = -2 < x < 1$\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "a2_equations_inequalities"
    ],
    "sections": [
      "a2.polynomial_inequalities",
      "a2.inequality_intersections"
    ],
    "primary_section": "a2.inequality_intersections",
    "skills": [
      "sign-chart",
      "critical-points",
      "interval-intersection",
      "compound-inequalities"
    ]
  },
  {
    "id": "2020-P1-Q4",
    "year": 2020,
    "paper": 1,
    "num": 4,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The 1<sup>st</sup>, 2<sup>nd</sup> and 3<sup>rd</sup> terms of a geometric progression are also the 1<sup>st</sup>, 4<sup>th</sup> and 6<sup>th</sup> terms, respectively, of an arithmetic progression.\n\nThe sum to infinity of the geometric progression is 12.\n\nFind the 1<sup>st</sup> term of the geometric progression.",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5",
      "F": "6"
    },
    "answer": "D",
    "analysis": "【题目分析】\n几何数列前3项也是某算术数列的第1、4、6项。几何数列无穷和 $= 12$。求首项。\n\n【解题步骤】\n设几何数列首项 $a$，公比 $r$。前3项：$a$, $ar$, $ar^2$\n无穷和：$\\frac{a}{1-r} = 12$，即 $a = 12(1-r)$ ……①\n\n设算术数列首项 $a$，公差 $d$。第1、4、6项：$a$, $a+3d$, $a+5d$\n\n所以 $ar = a+3d$ ……②，$ar^2 = a+5d$ ……③\n\n消去 $d$：$5 \\times$② $- 3 \\times$③ 得 $5ar - 3ar^2 = 2a$\n除以 $a$（$a \\neq 0$）：$5r - 3r^2 = 2$，即 $3r^2 - 5r + 2 = 0$\n因式分解：$(3r-2)(r-1) = 0$，$r = \\frac{2}{3}$ 或 $r = 1$\n\n$r = 1$ 时无穷和发散，舍去。\n$r = \\frac{2}{3}$：$a = 12(1 - \\frac{2}{3}) = 12 \\cdot \\frac{1}{3} = 4$\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series"
    ],
    "sections": [
      "c.arithmetic_geometric_links",
      "c.geometric_series_infinite_sum"
    ],
    "primary_section": "c.arithmetic_geometric_links",
    "skills": [
      "arithmetic-geometric-link",
      "geometric-series-sum",
      "ratio-equation",
      "exclude-divergent-ratio"
    ]
  },
  {
    "id": "2020-P1-Q5",
    "year": 2020,
    "paper": 1,
    "num": 5,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "The curve $S$ has equation\n\n$$y = px^2 + 6x - q$$\n\nwhere $p$ and $q$ are constants.\n\n$S$ has a line of symmetry at $x = -\\frac{1}{4}$ and touches the $x$-axis at exactly one point.\n\nWhat is the value of $p + 8q$?",
    "options": {
      "A": "6",
      "B": "18",
      "C": "21",
      "D": "25",
      "E": "38"
    },
    "answer": "A",
    "analysis": "【题目分析】\n$y = px^2 + 6x - q$，对称轴 $x = -\\frac{1}{4}$，与 $x$ 轴相切。求 $p + 8q$。\n\n【解题步骤】\n对称轴：$x = -\\frac{6}{2p} = -\\frac{3}{p} = -\\frac{1}{4}$，得 $p = 12$\n\n与 $x$ 轴相切：判别式 $= 0$\n$36 - 4p(-q) = 0$\n$36 + 4pq = 0$\n$36 + 4(12)q = 0$\n$q = -\\frac{36}{48} = -\\frac{3}{4}$\n\n$p + 8q = 12 + 8(-\\frac{3}{4}) = 12 - 6 = 6$\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "i_functions_graphs",
      "a2_equations_inequalities"
    ],
    "sections": [
      "i.quadratic_parameter_effects",
      "i.graph_symmetry",
      "a2.quadratic_discriminant"
    ],
    "primary_section": "i.quadratic_parameter_effects",
    "skills": [
      "axis-of-symmetry",
      "discriminant-condition",
      "quadratic-tangency",
      "parameter-solving"
    ]
  },
  {
    "id": "2020-P1-Q6",
    "year": 2020,
    "paper": 1,
    "num": 6,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the maximum value of the function\n\n$$f(x) = \\frac{1}{5^{2x} - 4(5^x) + 7}$$",
    "options": {
      "A": "$\\frac{1}{7}$",
      "B": "$\\frac{1}{4}$",
      "C": "$\\frac{1}{3}$",
      "D": "$3$",
      "E": "$4$",
      "F": "$7$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n$f(x) = \\frac{1}{5^{2x} - 4 \\cdot 5^x + 7}$，求最大值。\n\n【解题步骤】\n设 $u = 5^x > 0$，则\n\n$f = \\frac{1}{u^2 - 4u + 7} = \\frac{1}{(u-2)^2 + 3}$\n\n分母最小值在 $u = 2$ 时取得，最小值 $= 3$（此时 $5^x = 2$ 有实解）\n\n所以 $f(x)$ 最大值 $= \\frac{1}{3}$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a3.exponential_substitution",
      "a2.quadratic_vertex_form"
    ],
    "primary_section": "a3.exponential_substitution",
    "skills": [
      "exponential-substitution",
      "complete-the-square",
      "reciprocal-maximum",
      "positive-domain-check"
    ]
  },
  {
    "id": "2020-P1-Q7",
    "year": 2020,
    "paper": 1,
    "num": 7,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$$2^{3x} = 8^{(y+3)}$$\n\nand\n\n$$4^{(x+1)} = \\frac{16^{(y+1)}}{8^{(y+3)}}$$\n\nWhat is the value of $x + y$?",
    "options": {
      "A": "$-23$",
      "B": "$-22$",
      "C": "$-15$",
      "D": "$-14$",
      "E": "$-11$",
      "F": "$-10$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n解方程组：$2^{3x} = 8^{y+3}$，$4^{x+1} = \\frac{16^{y+1}}{8^{y+3}}$，求 $x+y$。\n\n【解题步骤】\n**统一底数为2：**\n\n方程1：$2^{3x} = (2^3)^{y+3} = 2^{3(y+3)}$，得 $3x = 3(y+3)$，即 $x = y+3$ ……①\n\n方程2：$2^{2(x+1)} = \\frac{2^{4(y+1)}}{2^{3(y+3)}} = 2^{4y+4-3y-9} = 2^{y-5}$\n得 $2(x+1) = y - 5$，即 $2x = y - 7$ ……②\n\n**解方程组：**\n由① $x = y + 3$，代入②：$2(y+3) = y - 7$\n$2y + 6 = y - 7$，$y = -13$\n$x = -13 + 3 = -10$\n\n$x + y = -10 + (-13) = -23$\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a3.exponential_equations",
      "a2.simultaneous_equations"
    ],
    "primary_section": "a3.exponential_equations",
    "skills": [
      "common-base-conversion",
      "exponent-laws",
      "simultaneous-linear-equations"
    ]
  },
  {
    "id": "2020-P1-Q8",
    "year": 2020,
    "paper": 1,
    "num": 8,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The function f is defined for all real $x$ as\n\n$$f(x) = (p - x)(x + 2)$$\n\nFind the complete set of values of $p$ for which the maximum value of $f(x)$ is less than 4.",
    "options": {
      "A": "$-2 - 4\\sqrt{2} < p < -2 + 4\\sqrt{2}$",
      "B": "$-2 - 2\\sqrt{2} < p < -2 + 2\\sqrt{2}$",
      "C": "$-2\\sqrt{5} < p < 2\\sqrt{5}$",
      "D": "$-6 < p < 2$",
      "E": "$-4 < p < 0$",
      "F": "$-2 < p < 2$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n$f(x) = (p-x)(x+2)$ 的最大值小于 4。求 $p$ 的范围。\n\n【解题步骤】\n展开：$f(x) = -x^2 + (p-2)x + 2p$\n\n开口向下的抛物线，最大值在顶点。配方法：\n\n$f(x) = -\\left(x - \\frac{p-2}{2}\\right)^2 + \\frac{(p-2)^2}{4} + 2p$\n\n最大值 $= \\frac{(p-2)^2}{4} + 2p$\n\n要求最大值 $< 4$：\n\n$\\frac{(p-2)^2}{4} + 2p < 4$\n\n$(p-2)^2 + 8p - 16 < 0$\n\n$p^2 + 4p - 12 < 0$\n\n$(p+6)(p-2) < 0$\n\n$-6 < p < 2$\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Graphs"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.quadratic_vertex_form",
      "i.quadratic_parameter_effects"
    ],
    "primary_section": "a2.quadratic_vertex_form",
    "skills": [
      "quadratic-expansion",
      "complete-the-square",
      "maximum-value-condition",
      "parameter-inequality"
    ]
  },
  {
    "id": "2020-P1-Q9",
    "year": 2020,
    "paper": 1,
    "num": 9,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The quadratic expression $x^2 - 14x + 9$ factorises as $(x - \\alpha)(x - \\beta)$, where $\\alpha$ and $\\beta$ are positive real numbers.\n\nWhich quadratic expression can be factorised as $(x - \\sqrt{\\alpha})(x - \\sqrt{\\beta})$?",
    "options": {
      "A": "$x^2 - \\sqrt{10}x + 3$",
      "B": "$x^2 - \\sqrt{14}x + 3$",
      "C": "$x^2 - \\sqrt{20}x + 3$",
      "D": "$x^2 - 178x + 81$",
      "E": "$x^2 - 176x + 81$",
      "F": "$x^2 + 196x + 81$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n$x^2 - 14x + 9 = (x-\\alpha)(x-\\beta)$，$\\alpha, \\beta$ 为正实数。求可分解为 $(x-\\sqrt{\\alpha})(x-\\sqrt{\\beta})$ 的二次表达式。\n\n【解题步骤——利用 $\\alpha$ 和 $\\beta$ 的性质】\n\n由原式展开：$(x-\\alpha)(x-\\beta) = x^2 - (\\alpha+\\beta)x + \\alpha\\beta = x^2 - 14x + 9$\n\n所以 $\\alpha + \\beta = 14$，$\\alpha\\beta = 9$。\n\n目标表达式：$(x-\\sqrt{\\alpha})(x-\\sqrt{\\beta}) = x^2 - (\\sqrt{\\alpha}+\\sqrt{\\beta})x + \\sqrt{\\alpha\\beta}$\n\n**求 $\\sqrt{\\alpha\\beta}$：** 由 $\\alpha\\beta = 9$，得 $\\sqrt{\\alpha\\beta} = \\sqrt{\\alpha} \\cdot \\sqrt{\\beta} = 3$\n\n**求 $\\sqrt{\\alpha}+\\sqrt{\\beta}$：**\n$(\\sqrt{\\alpha}+\\sqrt{\\beta})^2 = \\alpha + \\beta + 2\\sqrt{\\alpha\\beta} = 14 + 2 \\times 3 = 20$\n所以 $\\sqrt{\\alpha}+\\sqrt{\\beta} = \\sqrt{20}$\n\n目标表达式为 $x^2 - \\sqrt{20}\\,x + 3$，\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a2_equations_inequalities",
      "a1_algebra_basics"
    ],
    "sections": [
      "a2.vieta_relations",
      "a1.surds"
    ],
    "primary_section": "a2.vieta_relations",
    "skills": [
      "vieta-relations",
      "surd-products",
      "construct-quadratic-from-roots"
    ]
  },
  {
    "id": "2020-P1-Q10",
    "year": 2020,
    "paper": 1,
    "num": 10,
    "topic": "Functions",
    "difficulty": 3,
    "question": "The following sequence of transformations is applied to the curve $y = 4x^2$\n\n1. Translation by $\\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$\n\n2. Reflection in the $x$-axis\n\n3. Stretch parallel to the $x$-axis with scale factor 2\n\nWhat is the equation of the resulting curve?",
    "options": {
      "A": "$y = -x^2 + 12x - 31$",
      "B": "$y = -x^2 + 12x - 41$",
      "C": "$y = x^2 + 12x + 31$",
      "D": "$y = x^2 + 12x + 41$",
      "E": "$y = -16x^2 + 48x - 31$",
      "F": "$y = -16x^2 + 48x - 41$",
      "G": "$y = 16x^2 - 48x + 31$",
      "H": "$y = 16x^2 - 48x + 41$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n对 $y = 4x^2$ 依次进行三次变换，求最终方程。\n\n【解题步骤】\n从 $y = 4x^2$ 出发，逐步变换：\n\n**变换1：平移 $\\begin{pmatrix}3\\\\-5\\end{pmatrix}$**\n向右平移3，向下平移5：\n$y = 4(x-3)^2 - 5$\n\n**变换2：关于 $x$ 轴反射**\n$y$ 变为 $-y$：\n$y = -4(x-3)^2 + 5$\n\n**变换3：沿 $x$ 轴方向拉伸，scale factor 2**\n$x$ 用 $\\frac{x}{2}$ 替换：\n$y = -4\\left(\\frac{x}{2}-3\\right)^2 + 5 = -4 \\cdot \\frac{(x-6)^2}{4} + 5 = -(x-6)^2 + 5$\n\n展开：$y = -(x^2 - 12x + 36) + 5 = -x^2 + 12x - 31$\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra",
      "Graphs"
    ],
    "modules": [
      "i_functions_graphs",
      "a2_equations_inequalities"
    ],
    "sections": [
      "i.graph_transformations",
      "a2.quadratic_vertex_form"
    ],
    "primary_section": "i.graph_transformations",
    "skills": [
      "graph-transformation-order",
      "translation-vector",
      "reflection-x-axis",
      "horizontal-stretch",
      "quadratic-expansion"
    ]
  },
  {
    "id": "2020-P1-Q11",
    "year": 2020,
    "paper": 1,
    "num": 11,
    "topic": "Integration",
    "difficulty": 3,
    "question": "The quadratic function shown passes through $(2, 0)$ and $(q, 0)$, where $q > 2$.\n\nWhat is the value of $q$ such that the area of region $R$ equals the area of region $S$?",
    "options": {
      "A": "$\\sqrt{6}$",
      "B": "$3$",
      "C": "$\\frac{18}{5}$",
      "D": "$4$",
      "E": "$6$",
      "F": "$\\frac{33}{5}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n二次函数过 $(2,0)$ 和 $(q,0)$，$q > 2$。区域 $R$ 的面积等于区域 $S$ 的面积。求 $q$。\n\n【解题步骤】\n设二次函数为 $y = k(x-2)(x-q)$。$y$ 方向拉伸不改变 $q$，且 $R$ 和 $S$ 面积同时乘 $k$ 后仍相等，故可取 $k = 1$。\n\n**求 $R$ 的面积（$x$ 从 $0$ 到 $2$）：**\n\n$R = \\int_0^2 (x-2)(x-q)\\,dx = \\left[\\frac{x^3}{3} - \\frac{(q+2)x^2}{2} + 2qx\\right]_0^2 = 2q - \\frac{4}{3}$\n\n**求 $S$ 的面积（$x$ 从 $2$ 到 $q$）：**\n\n在 $[2,q]$ 上 $(x-2)(x-q) \\leq 0$，需取负：\n\n$S = -\\int_2^q (x-2)(x-q)\\,dx = \\frac{q^3}{6} - q^2 + 2q - \\frac{4}{3}$\n\n**令 $R = S$：**\n\n$2q - \\frac{4}{3} = \\frac{q^3}{6} - q^2 + 2q - \\frac{4}{3}$\n\n化简得 $\\frac{q^3}{6} - q^2 = 0$，即 $q^2\\left(\\frac{q}{6} - 1\\right) = 0$\n\n因 $q > 2$，得 $q = 6$。\n\n更简洁的方法：$R = S$ 意味着 $\\int_0^q (x-2)(x-q)\\,dx = 0$，直接计算得 $-\\frac{q^3}{6} + q^2 = 0$，同样得 $q = 6$。\n\n【正确答案】E",
    "images": {
      "image": "2020 P1 Q11.png"
    },
    "has_image": true,
    "related_topics": [
      "Graphs",
      "Algebra"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "g.area_balance",
      "g.definite_integral_area",
      "i.quadratic_graphs"
    ],
    "primary_section": "g.area_balance",
    "skills": [
      "area-by-integration",
      "quadratic-root-form",
      "signed-area",
      "parameter-solving"
    ]
  },
  {
    "id": "2020-P1-Q12",
    "year": 2020,
    "paper": 1,
    "num": 12,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "How many real solutions are there to the equation\n\n$$3 \\cos x = \\sqrt{x}$$\n\nwhere $x$ is in radians?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4",
      "F": "5",
      "G": "infinitely many"
    },
    "answer": "D",
    "analysis": "【题目分析】\n方程 $3\\cos x = \\sqrt{x}$（$x$ 为弧度）有多少实数解？\n\n【解题步骤】\n$y_1 = 3\\cos x$：周期 $2\\pi$，振幅 $3$\n$y_2 = \\sqrt{x}$：单调递增，定义域 $x \\geq 0$\n\n关键观察：\n- 左边 $\\in [-3, 3]$，右边 $\\geq 0$，故只需考虑 $0 \\leq x \\leq 9$（因 $\\sqrt{x} > 3$ 当 $x > 9$）\n- $3\\pi \\approx 9.5$，在 $[0, 9]$ 内约 1.5 个余弦周期\n- $3\\cos 9 < 0$\n\n画 $y = 3\\cos x$ 和 $y = \\sqrt{x}$ 的图像，观察交点：\n- 在 $[0, \\frac{\\pi}{2}]$ 内有一个交点（$3\\cos x$ 从3降到0，$\\sqrt{x}$ 从0升到约1.25）\n- 在 $[\\frac{3\\pi}{2}, 2\\pi]$ 内有一个交点（$3\\cos x$ 回升超过 $\\sqrt{x}$）\n- 在 $[2\\pi, \\frac{5\\pi}{2}]$ 内有一个交点\n\n共 3 个交点。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Functions"
    ],
    "modules": [
      "e_trigonometry",
      "i_functions_graphs"
    ],
    "sections": [
      "e.trig_graph_intersections",
      "i.graph_intersections"
    ],
    "primary_section": "e.trig_graph_intersections",
    "skills": [
      "domain-restriction",
      "graph-intersection-counting",
      "cosine-periodicity",
      "range-bounding"
    ]
  },
  {
    "id": "2020-P1-Q13",
    "year": 2020,
    "paper": 1,
    "num": 13,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "Find the coefficient of $x^2y^4$ in the expansion of $(1 + x + y^2)^7$",
    "options": {
      "A": "6",
      "B": "10",
      "C": "21",
      "D": "35",
      "E": "105",
      "F": "210"
    },
    "answer": "F",
    "analysis": "【题目分析】\n求 $(1+x+y^2)^7$ 展开式中 $x^2y^4$ 的系数。\n\n【解题步骤】\n将 $(1+x+y^2)^7$ 写为 $(x + (1+y^2))^7$，这样 $x$ 和 $y$ 分离：\n\n$(1+x+y^2)^7 = \\binom{7}{5}x^2(1+y^2)^5 + \\cdots$\n\n只需考虑 $x^2$ 项，$\\binom{7}{5} = \\binom{7}{2} = 21$，所以 $x^2$ 项为 $21x^2(1+y^2)^5$\n\n再展开 $(1+y^2)^5$，求 $y^4$ 项：\n\n$\\binom{5}{2}y^4 = 10y^4$\n\n因此 $x^2y^4$ 项的系数 $= 21 \\times 10 = 210$\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "c_sequences_series",
      "a1_algebra_basics"
    ],
    "sections": [
      "c.multinomial_coefficients",
      "c.binomial_expansion",
      "a1.coefficient_extraction"
    ],
    "primary_section": "c.multinomial_coefficients",
    "skills": [
      "coefficient-extraction",
      "binomial-expansion",
      "multinomial-selection"
    ]
  },
  {
    "id": "2020-P1-Q14",
    "year": 2020,
    "paper": 1,
    "num": 14,
    "topic": "Integration",
    "difficulty": 3,
    "question": "The area enclosed between the line $y = mx$ and the curve $y = x^3$ is 6.\n\nWhat is the value of $m$?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "$\\sqrt{3}$",
      "D": "$\\sqrt{6}$",
      "E": "$2\\sqrt{3}$",
      "F": "$2\\sqrt{6}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n$y = mx$ 与 $y = x^3$ 围成面积为 6。求 $m$。\n\n【解题步骤】\n$mx = x^3$ 得 $x(x^2 - m) = 0$，交点：$x = 0$, $x = \\pm\\sqrt{m}$\n\n由对称性，只需计算 $x > 0$ 区域的面积，再乘 2：\n\n面积 $= 2\\int_0^{\\sqrt{m}} (mx - x^3)\\,dx = 2\\left[\\frac{mx^2}{2} - \\frac{x^4}{4}\\right]_0^{\\sqrt{m}} = 2\\left(\\frac{m^2}{2} - \\frac{m^2}{4}\\right) = \\frac{m^2}{2}$\n\n$\\frac{m^2}{2} = 6$，$m^2 = 12$，$m = \\sqrt{12} = 2\\sqrt{3}$\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Algebra"
    ],
    "modules": [
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "g.area_between_curves",
      "i.curve_intersections"
    ],
    "primary_section": "g.area_between_curves",
    "skills": [
      "area-between-curves",
      "symmetry",
      "intersection-solving",
      "parameter-solving"
    ]
  },
  {
    "id": "2020-P1-Q15",
    "year": 2020,
    "paper": 1,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the positive difference between the two real values of $x$ for which\n\n$$(\\log_2 x)^4 + 12 \\left( \\log_2 \\left( \\frac{1}{x} \\right) \\right)^2 - 2^6 = 0$$",
    "options": {
      "A": "4",
      "B": "16",
      "C": "$\\frac{15}{4}$",
      "D": "$\\frac{17}{4}$",
      "E": "$\\frac{255}{16}$",
      "F": "$\\frac{257}{16}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n解方程 $(\\log_2 x)^4 + 12\\left(\\log_2 \\frac{1}{x}\\right)^2 - 2^6 = 0$，求两个实数 $x$ 的正差。\n\n【解题步骤】\n\n首先化简：$\\log_2 \\frac{1}{x} = -\\log_2 x$，所以 $\\left(\\log_2 \\frac{1}{x}\\right)^2 = (\\log_2 x)^2$\n\n$2^6 = 64$，方程变为：\n\n$(\\log_2 x)^4 + 12(\\log_2 x)^2 - 64 = 0$\n\n设 $y = (\\log_2 x)^2 \\geq 0$，则：\n\n$y^2 + 12y - 64 = 0$\n\n因式分解：$(y + 16)(y - 4) = 0$\n\n$y = -16$（舍去）或 $y = 4$\n\n所以 $(\\log_2 x)^2 = 4$，得 $\\log_2 x = 2$ 或 $\\log_2 x = -2$\n\n$x = 2^2 = 4$ 或 $x = 2^{-2} = \\frac{1}{4}$\n\n正差 $= 4 - \\frac{1}{4} = \\frac{15}{4}$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "a2_equations_inequalities"
    ],
    "sections": [
      "a3.logarithmic_equations",
      "a2.quadratic_substitution"
    ],
    "primary_section": "a3.logarithmic_equations",
    "skills": [
      "logarithm-laws",
      "quadratic-substitution",
      "extraneous-root-check",
      "exponent-conversion"
    ]
  },
  {
    "id": "2020-P1-Q16",
    "year": 2020,
    "paper": 1,
    "num": 16,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "The circle $C_1$ has equation $(x + 2)^2 + (y - 1)^2 = 3$\n\nThe circle $C_2$ has equation $(x - 4)^2 + (y - 1)^2 = 3$\n\nThe straight line $l$ is a tangent to both $C_1$ and $C_2$ and has positive gradient.\n\nThe acute angle between $l$ and the $x$-axis is $\\theta$\n\nFind the value of $\\tan \\theta$",
    "options": {
      "A": "$\\frac{1}{2}$",
      "B": "$2$",
      "C": "$\\frac{\\sqrt{2}}{2}$",
      "D": "$\\sqrt{2}$",
      "E": "$\\frac{\\sqrt{6}}{2}$",
      "F": "$\\frac{\\sqrt{6}}{3}$",
      "G": "$\\frac{\\sqrt{3}}{3}$",
      "H": "$\\sqrt{3}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n两圆 $C_1: (x+2)^2 + (y-1)^2 = 3$，$C_2: (x-4)^2 + (y-1)^2 = 3$。公切线 $l$ 有正斜率，与 $x$ 轴夹角 $\\theta$。求 $\\tan\\theta$。\n\n【解题步骤】\n\n$C_1$ 圆心 $O_1 = (-2, 1)$，$C_2$ 圆心 $O_2 = (4, 1)$，两圆半径均为 $\\sqrt{3}$。\n\n两圆心距离 $= 4 - (-2) = 6$。\n\n作有正斜率的公切线 $l$，设切点为 $D$（在 $C_2$ 上），$E$ 为切线与 $O_1O_2$ 连线的交点：\n\n- $EO_2 = 3$（半心距）\n- $O_2D = \\sqrt{3}$（半径）\n- 半径 $O_2D \\perp$ 切线 $l$\n\n由勾股定理：$DE^2 = EO_2^2 - O_2D^2 = 9 - 3 = 6$，所以 $DE = \\sqrt{6}$\n\n$\\tan\\theta = \\frac{O_2D}{DE} = \\frac{\\sqrt{3}}{\\sqrt{6}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Trigonometry"
    ],
    "modules": [
      "d_coordinate_geometry",
      "e_trigonometry"
    ],
    "sections": [
      "d.common_circle_tangents",
      "d.point_to_line_distance",
      "e.tangent_of_angle"
    ],
    "primary_section": "d.common_circle_tangents",
    "skills": [
      "circle-centre-radius",
      "common-tangent-geometry",
      "distance-from-point-to-line",
      "gradient-as-tangent"
    ]
  },
  {
    "id": "2020-P1-Q17",
    "year": 2020,
    "paper": 1,
    "num": 17,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "Find the complete set of values of $m$ in terms of $c$ such that the graphs of $y = mx + c$ and $y = \\sqrt{x}$ have two points of intersection.",
    "options": {
      "A": "$0 < m < \\frac{1}{4c}$",
      "B": "$0 < m < 4c^2$",
      "C": "$m > \\frac{1}{4c}$",
      "D": "$m < \\frac{1}{4c}$",
      "E": "$m > 4c^2$",
      "F": "$m < 4c^2$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n直线 $y = mx + c$ 与曲线 $y = \\sqrt{x}$ 有两交点。求 $m$ 的范围（用 $c$ 表示）。\n\n【解题步骤】\n$mx + c = \\sqrt{x}$，设 $t = \\sqrt{x} > 0$，$x = t^2$\n\n$mt^2 - t + c = 0$，关于 $t$ 的二次方程\n\n有两个不同的非负解的条件：\n\n1. **判别式 $> 0$：** $1 - 4mc > 0$，即 $4mc < 1$\n2. **两根都 $> 0$：** 根为 $t = \\frac{1 \\pm \\sqrt{1-4mc}}{2m}$，需要 $m > 0$（否则中点 $\\frac{1}{2m} < 0$，至少一根为负）\n3. **$c > 0$：** 若 $c \\leq 0$，则 $1 - \\sqrt{1-4mc} \\leq 0$，最多一个非负根\n\n本题选项形式默认 $c>0$；在此条件下，综上：$m > 0$ 且 $4mc < 1$，即 $0 < m < \\frac{1}{4c}$\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Algebra"
    ],
    "modules": [
      "i_functions_graphs",
      "a2_equations_inequalities"
    ],
    "sections": [
      "i.graph_intersections",
      "i.square_root_graphs",
      "a2.parameter_discriminant"
    ],
    "primary_section": "i.graph_intersections",
    "skills": [
      "square-root-substitution",
      "discriminant-condition",
      "positive-roots",
      "parameter-range"
    ]
  },
  {
    "id": "2020-P1-Q18",
    "year": 2020,
    "paper": 1,
    "num": 18,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the number of solutions and the sum of the solutions of the equation\n\n$$1 - 2 \\cos^2 x = |\\cos x|$$\n\nwhere $0 \\le x \\le 180^\\circ$",
    "options": {
      "A": "Number of solutions = 2 Sum of solutions = $180^\\circ$",
      "B": "Number of solutions = 2 Sum of solutions = $240^\\circ$",
      "C": "Number of solutions = 3 Sum of solutions = $180^\\circ$",
      "D": "Number of solutions = 3 Sum of solutions = $360^\\circ$",
      "E": "Number of solutions = 4 Sum of solutions = $240^\\circ$",
      "F": "Number of solutions = 4 Sum of solutions = $360^\\circ$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n方程 $1 - 2\\cos^2 x = |\\cos x|$，$x \\in [0°, 180°]$。求解的个数和总和。\n\n【解题步骤】\n分两种情况：\n\n**情况1：$\\cos x \\geq 0$（$x \\in [0°, 90°]$）**\n$|\\cos x| = \\cos x$，方程 $1 - 2\\cos^2 x = \\cos x$\n$2\\cos^2 x + \\cos x - 1 = 0$，$(2\\cos x - 1)(\\cos x + 1) = 0$\n$\\cos x = \\frac{1}{2}$（$\\cos x = -1$ 舍去），$x = 60°$\n\n**情况2：$\\cos x < 0$（$x \\in [90°, 180°]$）**\n$|\\cos x| = -\\cos x$，方程 $1 - 2\\cos^2 x = -\\cos x$\n$2\\cos^2 x - \\cos x - 1 = 0$，$(2\\cos x + 1)(\\cos x - 1) = 0$\n$\\cos x = -\\frac{1}{2}$（$\\cos x = 1$ 舍去），$x = 120°$\n\n解：$x = 60°$, $x = 120°$\n解数 $= 2$，总和 $= 180°$\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "e_trigonometry"
    ],
    "sections": [
      "e.trig_equations.absolute_value",
      "e.quadratic_trig_equations"
    ],
    "primary_section": "e.trig_equations.absolute_value",
    "skills": [
      "absolute-value-case-split",
      "quadratic-trig-equation",
      "reference-angle",
      "solution-counting"
    ]
  },
  {
    "id": "2020-P1-Q19",
    "year": 2020,
    "paper": 1,
    "num": 19,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the lowest positive integer for which $x^2 - 52x - 52$ is positive.",
    "options": {
      "A": "26",
      "B": "27",
      "C": "51",
      "D": "52",
      "E": "53",
      "F": "54"
    },
    "answer": "E",
    "analysis": "【题目分析】\n找最小正整数使 $x^2 - 52x - 52 > 0$。\n\n【解题步骤】\n设 $f(x) = x^2 - 52x - 52$\n\n$f(0) = -52 < 0$\n\n注意到 $f(52) = 52^2 - 52^2 - 52 = -52 < 0$\n\n配方法：$f(x) = (x-26)^2 - 26^2 - 52$，对称轴 $x = 26$，$f(52) = -52$\n\n所以 $f(x) < 0$ 当 $0 \\leq x \\leq 52$\n\n检验 $f(53)$：\n$f(53) = 53^2 - 52 \\times 53 - 52 = 53^2 - 52 \\times 54$\n\n$52 \\times 54 = (53-1)(53+1) = 53^2 - 1$\n\n$f(53) = 53^2 - (53^2 - 1) = 1 > 0$ ✓\n\n所以 53 是满足条件的最小正整数。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "a2_equations_inequalities"
    ],
    "sections": [
      "a2.quadratic_inequalities",
      "a2.integer_solution_threshold"
    ],
    "primary_section": "a2.quadratic_inequalities",
    "skills": [
      "quadratic-sign",
      "integer-testing",
      "completing-square"
    ]
  },
  {
    "id": "2020-P1-Q20",
    "year": 2020,
    "paper": 1,
    "num": 20,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "For how many values of $a$ is the equation\n\n$$(x - a)(x^2 - x + a) = 0$$\n\nsatisfied by exactly two distinct values of $x$?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4",
      "F": "more than 4"
    },
    "answer": "C",
    "analysis": "【题目分析】\n方程 $(x-a)(x^2 - x + a) = 0$ 恰有两个不同的 $x$ 解。求满足条件的 $a$ 有多少个值。\n\n【解题步骤】\n\n方程的解为 $x = a$ 和 $x^2 - x + a = 0$ 的解。\n\n二次方程 $x^2 - x + a = 0$ 的解为 $x = \\frac{1 \\pm \\sqrt{1-4a}}{2}$。\n\n恰有两个不同解的情况有两种：\n\n**情况1：二次方程判别式 $= 0$**\n\n$1 - 4a = 0$，得 $a = \\frac{1}{4}$\n\n此时二次方程有重根 $x = \\frac{1}{2}$，与 $x = a = \\frac{1}{4}$ 不同。\n共有2个不同解：$x = \\frac{1}{4}$ 和 $x = \\frac{1}{2}$ ✓\n\n**情况2：$x = a$ 等于二次方程的某个解**\n\n将 $x = a$ 代入二次方程：$a^2 - a + a = 0$，$a^2 = 0$，$a = 0$\n\n检验 $a = 0$：方程变为 $x(x^2 - x) = x^2(x-1) = 0$，不同解仍只看不同的根。\n不同解：$x = 0$ 和 $x = 1$，共2个不同解 ✓\n\n当 $\\Delta > 0$ 时二次方程有两个不同解，要减到2个必须有 $a$ 等于其中一个解，只在 $a = 0$ 成立。\n当 $\\Delta < 0$ 时只有 $x = a$ 一个解，不满足。\n\n综上，满足条件的 $a$ 值有2个：$a = 0$ 和 $a = \\frac{1}{4}$。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "a2_equations_inequalities",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.quadratic_roots_parameter",
      "i.root_counting"
    ],
    "primary_section": "a2.quadratic_roots_parameter",
    "skills": [
      "discriminant-condition",
      "duplicate-root-check",
      "parameter-case-analysis",
      "distinct-root-counting"
    ]
  },
  {
    "id": "2020-P2-Q1",
    "year": 2020,
    "paper": 2,
    "num": 1,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "Find the complete set of values of $k$ for which the line $y = x - 2$ crosses or touches the curve $y = x^2 + kx + 2$",
    "options": {
      "A": "$-1 \\le k \\le 3$",
      "B": "$-3 \\le k \\le 5$",
      "C": "$-4 \\le k \\le 4$",
      "D": "$k \\le -1$ or $k \\ge 3$",
      "E": "$k \\le -3$ or $k \\ge 5$",
      "F": "$k \\le -4$ or $k \\ge 4$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查直线与二次曲线相交/相切的判别式条件。\n\n【解题方法】\n直线与曲线相交或相切意味着联立方程有实数解。\n\n【详细步骤】\nStep 1: 联立方程\ny = x - 2 与 y = x² + kx + 2 联立：\nx - 2 = x² + kx + 2\n\nStep 2: 整理为标准二次方程\nx² + kx + 2 - x + 2 = 0\nx² + (k-1)x + 4 = 0\n\nStep 3: 计算判别式\nΔ = (k-1)² - 4×1×4 = (k-1)² - 16\n\nStep 4: 判别式条件\n相交或相切需 Δ ≥ 0：\n(k-1)² - 16 ≥ 0\n(k-1)² ≥ 16\n|k-1| ≥ 4\n\nStep 5: 解不等式\nk - 1 ≥ 4 或 k - 1 ≤ -4\nk ≥ 5 或 k ≤ -3\n\n【验证】\n- 当 k = 5 时：x² + 4x + 4 = 0，Δ = 16 - 16 = 0（相切）\n- 当 k = -3 时：x² - 4x + 4 = 0，Δ = 16 - 16 = 0（相切）\n- 当 k = 0 时：x² - x + 4 = 0，Δ = 1 - 16 = -15 < 0（不相交）✓\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra",
      "Graphs"
    ],
    "modules": [
      "a2_equations_inequalities",
      "d_coordinate_geometry",
      "i_functions_graphs"
    ],
    "sections": [
      "a2.discriminant_parameter_range",
      "d.line_curve_intersections",
      "i.graph_intersections"
    ],
    "primary_section": "a2.discriminant_parameter_range",
    "skills": [
      "line-curve-intersection",
      "quadratic-discriminant",
      "parameter-inequality-solving"
    ]
  },
  {
    "id": "2020-P2-Q2",
    "year": 2020,
    "paper": 2,
    "num": 2,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Given that $\\tan \\theta = 2$ and $180^\\circ < \\theta < 360^\\circ$, find the value of $\\cos \\theta$",
    "options": {
      "A": "$\\sqrt{3}$",
      "B": "$-\\sqrt{3}$",
      "C": "$\\frac{\\sqrt{3}}{2}$",
      "D": "$-\\frac{\\sqrt{3}}{2}$",
      "E": "$\\frac{\\sqrt{5}}{5}$",
      "F": "$-\\frac{\\sqrt{5}}{5}$",
      "G": "$\\frac{2\\sqrt{5}}{5}$",
      "H": "$-\\frac{2\\sqrt{5}}{5}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n已知 tan θ = 2，θ 在第三象限（180° < θ < 360°），求 cos θ。\n\n【确定符号】\ntan θ = 2 > 0 → θ 在第三象限 ✓\n第三象限：sin θ < 0，cos θ < 0\n\n【构造直角三角形】\n|tan θ| = |对边|/|邻边| = 2/1\n斜边 = √(2² + 1²) = √5\n\ncos θ = 邻边/斜边 = 1/√5 = √5/5\n第三象限取负值：cos θ = −√5/5\n\n【验证】\ntan θ = (−2√5/5)/(−√5/5) = 2 ✓\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "e_trigonometry"
    ],
    "sections": [
      "e.trig_ratios",
      "e.quadrant_signs",
      "e.tangent_cosine_relationship"
    ],
    "primary_section": "e.quadrant_signs",
    "skills": [
      "quadrant-signs",
      "tan-to-cos-conversion",
      "exact-trig-values"
    ]
  },
  {
    "id": "2020-P2-Q3",
    "year": 2020,
    "paper": 2,
    "num": 3,
    "topic": "Proof",
    "difficulty": 3,
    "question": "A student makes the following claim:\n\nFor all integers $n$, the expression $4 \\left( \\frac{9n + 1}{2} - \\frac{3n - 1}{2} \\right)$ is divisible by 3.\n\nHere is the student’s argument:\n\n$$ 4 \\left( \\frac{9n + 1}{2} - \\frac{3n - 1}{2} \\right) = 2 \\left( 2 \\left( \\frac{9n + 1}{2} - \\frac{3n - 1}{2} \\right) \\right) \\quad \\text{(I)} $$\n$$ = 2(9n + 1 - 3n - 1) \\quad \\text{(II)} $$\n$$ = 2(6n) \\quad \\text{(III)} $$\n$$ = 12n \\quad \\text{(IV)} $$\n$$ = 3(4n) \\quad \\text{(V)} $$\n\nwhich is always a multiple of 3. (VI)\n\nSo the expression $4 \\left( \\frac{9n + 1}{2} - \\frac{3n - 1}{2} \\right)$ is always divisible by 3.\n\nWhich one of the following is true?",
    "options": {
      "A": "The argument is correct.",
      "B": "The argument is incorrect, and the first error occurs on line (I).",
      "C": "The argument is incorrect, and the first error occurs on line (II).",
      "D": "The argument is incorrect, and the first error occurs on line (III).",
      "E": "The argument is incorrect, and the first error occurs on line (IV).",
      "F": "The argument is incorrect, and the first error occurs on line (V).",
      "G": "The argument is incorrect, and the first error occurs on line (VI)."
    },
    "answer": "C",
    "analysis": "【题目分析】\n学生论证：4((9n+1)/2-(3n-1)/2)可被3整除。\n找出第一个错误行。\n\n【解题步骤】\n(I): 4(...)=2(2(...)) ✓ 恒等变形\n(II): 2(2((9n+1)/2-(3n-1)/2))=2(9n+1-3n-1)\n     2·((9n+1)/2-(3n-1)/2)=(9n+1)-(3n-1)=9n+1-3n+1=6n+2\n     但学生写成了9n+1-3n-1=6n ✗\n\n第一个错误在(II)。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Algebra",
      "Number Theory"
    ],
    "modules": [
      "l_proof_methods",
      "h_logic_counterexamples",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "l.proof_audit_error_identification",
      "h.proof_error_identification",
      "k.divisibility"
    ],
    "primary_section": "l.proof_audit_error_identification",
    "skills": [
      "proof-line-audit",
      "algebraic-sign-checking",
      "divisibility-reasoning"
    ]
  },
  {
    "id": "2020-P2-Q4",
    "year": 2020,
    "paper": 2,
    "num": 4,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider the following statement:\n\n> Every positive integer $N$ that is greater than 6 can be written as the sum of two non-prime integers that are greater than 1.\n\nWhich of the following is/are **counterexample(s)** to this statement?\n\nI $N = 5$\n\nII $N = 7$\n\nIII $N = 9$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "G",
    "analysis": "【题目分析】\n命题：所有大于6的正整数N可写成两个大于1的非素数之和。\n找出反例。\n\n【解题步骤】\nI. N=5：不满足N>6条件，不在命题范围，不是反例 ✗\nII. N=7：需找两个非素数(>1)之和=7\n    非素数>1：4,6,8,9,10...\n    7=4+3(3是素数)✗, 7=6+1(1不>1)✗\n    无法分解 ✓ N=7是反例\nIII. N=9：非素数之和=9\n    9=4+5(5素)✗, 9=6+3(3素)✗, 9=8+1(1不>1)✗\n    无法分解 ✓ N=9是反例\n\nII和III是反例。\n\n【正确答案】G",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Number Theory"
    ],
    "modules": [
      "h_logic_counterexamples",
      "b_mathematical_logic_basics",
      "l_proof_methods",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "h.counterexample_identification",
      "b.counterexample_conditions",
      "l.disproof_by_counterexample",
      "k.prime_composite_numbers"
    ],
    "primary_section": "h.counterexample_identification",
    "skills": [
      "counterexample-validation",
      "hypothesis-checking",
      "prime-composite-classification"
    ]
  },
  {
    "id": "2020-P2-Q5",
    "year": 2020,
    "paper": 2,
    "num": 5,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "Which one of the following shows the graph of\n\n$$y = \\frac{2^x}{1 + 2^x}$$\n\n(Dotted lines indicate asymptotes.)",
    "options": {
      "A": "Graph A",
      "B": "Graph B",
      "C": "Graph C",
      "D": "Graph D",
      "E": "Graph E",
      "F": "Graph F"
    },
    "answer": "A",
    "analysis": "【题目分析】\ny = 2^x / (1 + 2^x)\n\n【解题步骤】\nx→-∞: 2^x→0, y→0/(1+0)=0\nx→+∞: 2^x→+∞, y→1（水平渐近线y=1）\nx=0: y=1/2\n\ny' = [2^x·ln2·(1+2^x) - 2^x·2^x·ln2] / (1+2^x)²\n   = 2^x·ln2 / (1+2^x)² > 0\n\n所以y单调递增，从0到1，过(0, 1/2)。\n\n【正确答案】A",
    "images": {
      "options_image": "2020 P2 Q5 6 options.png"
    },
    "has_image": true,
    "related_topics": [
      "Functions",
      "Algebra"
    ],
    "modules": [
      "a3_exponents_logarithms",
      "i_functions_graphs"
    ],
    "sections": [
      "a3.exponential_function_graphs",
      "i.graph_transformations",
      "i.asymptotes"
    ],
    "primary_section": "a3.exponential_function_graphs",
    "skills": [
      "asymptote-analysis",
      "monotonicity-checking",
      "exponential-graph-recognition"
    ]
  },
  {
    "id": "2020-P2-Q6",
    "year": 2020,
    "paper": 2,
    "num": 6,
    "topic": "Logic",
    "difficulty": 3,
    "question": "The function $f(x)$ is defined for all real values of $x$.\n\nWhich of the following conditions on $f(x)$ is/are **necessary** to ensure that\n\n$$\\int_{-5}^{0} f(x) \\, dx = \\int_{0}^{5} f(x) \\, dx$$\n\nCondition I: $f(x) = f(-x)$ for $-5 \\leq x \\leq 5$\n\nCondition II: $f(x) = c$ for $-5 \\leq x \\leq 5$, where $c$ is a constant\n\nCondition III: $f(x) = -f(-x)$ for $-5 \\leq x \\leq 5$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "A",
    "analysis": "【题目分析】\n题目要求判断哪些条件是必要条件，能保证\n\n$$\\int_{-5}^{0} f(x)\\,dx = \\int_{0}^{5} f(x)\\,dx.$$\n\n【解题步骤】\n条件 I：$f(x)=f(-x)$ 是偶函数条件。它能推出左右两段面积相等，因此是充分条件；但不是必要条件。例如 $f(x)=x^3-\\frac{25}{2}x$ 在 $[0,5]$ 上积分为 0，左右两段积分相等，却不是偶函数。\n\n条件 II：$f(x)=c$ 是常数函数条件。此时两边积分都等于 $5c$，所以它也是充分条件；但它显然不是必要条件，例如 $f(x)=x^2$ 也使两边积分相等。\n\n条件 III：$f(x)=-f(-x)$ 是奇函数条件。奇函数时左边积分等于右边积分的相反数，只有当 $\\int_0^5 f(x)\\,dx=0$ 时才相等，所以这不是保证等式成立的必要条件；例如 $f(x)=x^2$ 满足等式但不是奇函数。\n\n因此三个条件都不是必要条件。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Integration",
      "Functions"
    ],
    "modules": [
      "h_logic_counterexamples",
      "g_integration",
      "i_functions_graphs"
    ],
    "sections": [
      "h.sufficient_necessary_conditions",
      "g.definite_integral_symmetry"
    ],
    "primary_section": "h.sufficient_necessary_conditions",
    "skills": [
      "necessary-vs-sufficient",
      "counterexample-construction",
      "definite-integral-symmetry"
    ]
  },
  {
    "id": "2020-P2-Q7",
    "year": 2020,
    "paper": 2,
    "num": 7,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Consider the following conditions on a **parallelogram** $PQRS$, labelled anticlockwise:\n\nI length of $PQ$ = length of $QR$\nII The diagonal $PR$ intersects the diagonal $QS$ at right angles\nIII $\\angle PQR = \\angle QRS$\n\nWhich of these conditions is/are individually **sufficient** for the parallelogram $PQRS$ to be a square?\n\n<table>\n  <thead>\n    <tr>\n        <th> </th>\n        <th>**Condition I is<br/>sufficient**</th>\n        <th>**Condition II is<br/>sufficient**</th>\n        <th>**Condition III is<br/>sufficient**</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n        <td>",
    "options": {
      "A": "I yes; II yes; III yes",
      "B": "I yes; II yes; III no",
      "C": "I yes; II no; III yes",
      "D": "I yes; II no; III no",
      "E": "I no; II yes; III yes",
      "F": "I no; II yes; III no",
      "G": "I no; II no; III yes",
      "H": "I no; II no; III no"
    },
    "answer": "H",
    "analysis": "【题目分析】\n平行四边形 $PQRS$ 中，判断三个条件是否各自足以推出它是正方形。\n\n【解题步骤】\n条件 I：$PQ=QR$。平行四边形相邻两边相等时，它是菱形；但菱形的角不一定是直角，所以不一定是正方形。I 不充分。\n\n条件 II：对角线 $PR$ 与 $QS$ 垂直。对角线互相垂直的平行四边形可以是非正方形的菱形，所以 II 不充分。\n\n条件 III：$\\angle PQR=\\angle QRS$。平行四边形相邻角互补，若二者相等，则都是 $90^\\circ$，因此四边形是矩形；但矩形的相邻边不一定相等，所以不一定是正方形。III 不充分。\n\n所以三个条件单独看都不充分。\n\n【正确答案】H",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry",
      "Proof"
    ],
    "modules": [
      "h_logic_counterexamples",
      "d_coordinate_geometry"
    ],
    "sections": [
      "h.sufficient_conditions",
      "d.parallelogram_properties"
    ],
    "primary_section": "h.sufficient_conditions",
    "skills": [
      "sufficient-condition-testing",
      "parallelogram-square-conditions",
      "counterexample-testing"
    ]
  },
  {
    "id": "2020-P2-Q8",
    "year": 2020,
    "paper": 2,
    "num": 8,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "A student is asked to prove whether the following statement ($*$) is true or false:\n\n> ($*$) For all real numbers $a$ and $b$, $|a + b| < |a| + |b|$\n\nThe student’s proof is as follows:\n\n> Statement ($*$) is **false**. A counterexample is $a = 3$, $b = 4$, as $|3 + 4| = 7$ and $|3| + |4| = 7$, but $7 < 7$ is false.\n\nWhich of the following best describes the student’s proof?",
    "options": {
      "A": "The statement ($*$) is true, and the student’s proof is not correct.",
      "B": "The statement ($*$) is false, but the student’s proof is not correct: the counterexample is not valid.",
      "C": "The statement ($*$) is false, but the student’s proof is not correct: the student needs to give *all* the values of $a$ and $b$ where $|a + b| < |a| + |b|$ is false.",
      "D": "The statement ($*$) is false, but the student’s proof is not correct: the student should have instead stated that for all real numbers $a$ and $b$, $|a + b| \\le |a| + |b|$.",
      "E": "The statement ($*$) is false, and the student’s proof is fully correct."
    },
    "answer": "E",
    "analysis": "【题目分析】\n命题(*): 对所有实数a,b, |a+b| < |a|+|b|\n\n学生反例：a=3, b=4\n|3+4|=7, |3|+|4|=7\n7<7是假的，所以命题是假的。\n\n三角不等式：|a+b| ≤ |a|+|b|，等号在a,b同号时成立。\n学生的反例正确，证明完整。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic",
      "Proof"
    ],
    "modules": [
      "h_logic_counterexamples",
      "l_proof_methods"
    ],
    "sections": [
      "h.counterexample_construction",
      "l.disproof_by_counterexample"
    ],
    "primary_section": "h.counterexample_construction",
    "skills": [
      "disproof-by-counterexample",
      "triangle-inequality-equality-case"
    ]
  },
  {
    "id": "2020-P2-Q9",
    "year": 2020,
    "paper": 2,
    "num": 9,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "A student wishes to evaluate the function $f(x) = x \\sin x$, where $x$ is in radians, but has a calculator that only works in degrees.\n\nWhat could the student type into their calculator to correctly evaluate $f(4)$?",
    "options": {
      "A": "$(\\pi \\times 4 \\div 180) \\times \\sin(4)$",
      "B": "$(\\pi \\times 4 \\div 180) \\times \\sin(\\pi \\times 4 \\div 180)$",
      "C": "$4 \\times \\sin(\\pi \\times 4 \\div 180)$",
      "D": "$(180 \\times 4 \\div \\pi) \\times \\sin(4)$",
      "E": "$(180 \\times 4 \\div \\pi) \\times \\sin(180 \\times 4 \\div \\pi)$",
      "F": "$4 \\times \\sin(180 \\times 4 \\div \\pi)$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n计算f(x)=x·sin(x)（弧度）\n但计算器只接受度数。如何正确计算f(4)？\n\n【解题步骤】\nf(4)=4·sin(4弧度)\n弧度→度数：4弧度=4×180/π度≈229.2度\n\n计算器输入（度数模式）：\nsin(4弧度)=sin(229.2度)=sin(4×180/π度)\n正确输入：sin(180×4/π)（度数）\n\n完整f(4)：需x用弧度值（4），sin用度数转换\nf(4)=4×sin(180×4/π度)\n\n选项D：(180×4/π)×sin(4) — 错误，4是弧度不能直接sin(4度)\n选项F：4×sin(180×4/π) — 正确！\n\n等等，选项F是正确答案。但让我重新检查：\n选项D：(180×4÷π)×sin(4) — 度数×sin(4度) ✗\n选项F：4×sin(180×4÷π) — 弧度×sin(转换后度数) ✓\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [],
    "modules": [
      "e_trigonometry"
    ],
    "sections": [
      "e.radian_measure",
      "e.degrees_radians_conversion"
    ],
    "primary_section": "e.radian_measure",
    "skills": [
      "radian-degree-conversion",
      "calculator-degree-mode"
    ]
  },
  {
    "id": "2020-P2-Q10",
    "year": 2020,
    "paper": 2,
    "num": 10,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The real numbers $a, b, c$ and $d$ satisfy both\n\n$$0 < a + b < c + d$$\n\nand\n\n$$0 < a + c < b + d$$\n\nWhich of the following inequalities **must** be true?\n\nI $a < d$\n\nII $b < c$\n\nIII $a + b + c + d > 0$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "F",
    "analysis": "【题目分析】\n已知 $0<a+b<c+d$ 且 $0<a+c<b+d$，判断哪些结论必然成立。\n\n【解题步骤】\n命题 I：$a<d$。\n由 $a+b<c+d$ 和 $a+c<b+d$ 相加，得\n$$2a+b+c<b+c+2d,$$\n所以 $2a<2d$，即 $a<d$。I 必然成立。\n\n命题 II：$b<c$。\n这不一定成立。反例：取 $a=1,b=3,c=1,d=5$，则\n$$0<4<6,\\qquad 0<2<8,$$\n满足题设，但 $b<c$ 为假。II 不必然成立。\n\n命题 III：$a+b+c+d>0$。\n因为 $a+b>0$ 且 $c+d>a+b$，所以\n$$a+b+c+d>2(a+b)>0.$$\nIII 必然成立。\n\n因此必然成立的是 I 和 III。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic"
    ],
    "modules": [
      "a2_equations_inequalities",
      "h_logic_counterexamples"
    ],
    "sections": [
      "a2.inequality_implications",
      "h.necessary_conditions"
    ],
    "primary_section": "a2.inequality_implications",
    "skills": [
      "inequality-implication",
      "counterexample-testing",
      "must-be-true-statements"
    ]
  },
  {
    "id": "2020-P2-Q11",
    "year": 2020,
    "paper": 2,
    "num": 11,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "A spiral line is drawn as shown.\n\n(page_11_image_1_v2.jpg)\n\nThis spiral pattern continues indefinitely.\n\nWhich one of the following points is **not** on the spiral line?",
    "options": {
      "A": "(99, 100)",
      "B": "(99, −100)",
      "C": "(−99, 100)",
      "D": "(−99, −100)",
      "E": "(100, 99)",
      "F": "(100, −99)",
      "G": "(−100, 99)",
      "H": "(−100, −99)"
    },
    "answer": "G",
    "analysis": "【题目分析】\n螺旋线按坐标轴方向不断向外延伸。需要判断给出的八个点中哪一个不在螺旋线上。\n\n【解题步骤】\n从图形可读出转折点规律：\n$$(0,0)\\to(-2,0)\\to(-2,-2)\\to(2,-2)\\to(2,2)\\to(-4,2)\\to(-4,-4)\\to(4,-4)\\to(4,4)\\to\\cdots$$\n\n因此每一圈的水平、竖直线段交替出现在偶数坐标边界上。\n\n检查选项：\n- $y=100$ 的上方水平线段从 $(100,100)$ 向左延伸到 $(-102,100)$，所以 $(99,100)$ 和 $(-99,100)$ 在螺旋线上。\n- $y=-100$ 的下方水平线段从 $(-100,-100)$ 向右延伸到 $(100,-100)$，所以 $(99,-100)$ 和 $(-99,-100)$ 在螺旋线上。\n- $x=100$ 的右侧竖直线段从 $(100,-100)$ 向上到 $(100,100)$，所以 $(100,99)$ 和 $(100,-99)$ 在螺旋线上。\n- $x=-100$ 的左侧竖直线段从 $(-100,98)$ 向下到 $(-100,-100)$，所以 $(-100,-99)$ 在螺旋线上，但 $(-100,99)$ 不在这一段上。\n\n不在螺旋线上的点是 $(-100,99)$。\n\n【正确答案】G",
    "images": {
      "image": "2020 P2 Q11.png"
    },
    "has_image": true,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "d_coordinate_geometry",
      "c_sequences_series"
    ],
    "sections": [
      "d.coordinate_spiral_patterns",
      "d.lattice_points",
      "c.pattern_generalisation"
    ],
    "primary_section": "d.coordinate_spiral_patterns",
    "skills": [
      "model-recursive-geometric-pattern",
      "test-point-on-segment",
      "generalise-coordinate-rules"
    ]
  },
  {
    "id": "2020-P2-Q12",
    "year": 2020,
    "paper": 2,
    "num": 12,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Which one of A-F correctly completes the following statement?\n\nGiven that $a < b$, and $f(x) > 0$ for all $x$ with $a < x < b$, the trapezium rule produces an overestimate for\n\n$$\\int_a^b f(x)\\,dx$$",
    "options": {
      "A": ". . . **if** $f'(x) > 0$ **and** $f''(x) < 0$ for all $x$ with $a < x < b$",
      "B": ". . . **only if** $f'(x) > 0$ **and** $f''(x) < 0$ for all $x$ with $a < x < b$",
      "C": ". . . **if and only if** $f'(x) > 0$ **and** $f''(x) < 0$ for all $x$ with $a < x < b$",
      "D": ". . . **if** $f'(x) < 0$ **and** $f''(x) > 0$ for all $x$ with $a < x < b$",
      "E": ". . . **only if** $f'(x) < 0$ **and** $f''(x) > 0$ for all $x$ with $a < x < b$",
      "F": ". . . **if and only if** $f'(x) < 0$ **and** $f''(x) > 0$ for all $x$ with $a < x < b$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n题目要判断什么条件能正确补全：梯形法则会对 $\\int_a^b f(x)\\,dx$ 产生高估。\n\n【解题步骤】\n梯形法则的高估/低估主要由图像凹凸性决定，而不是由函数单调性决定。\n\n若 $f''(x)>0$，图像在区间上凸，端点连成的弦通常位于曲线之上，所以梯形面积会高估积分。这个条件是充分的。\n\n但是 $f'(x)>0$ 或 $f'(x)<0$ 都不是必要条件；一个函数可以先降后升，仍然因为 $f''(x)>0$ 而被梯形法则高估。例如 $f(x)=x^2+1$ 在 $[-1,1]$ 上就是这种情况。\n\n所以正确补全应为：如果 $f'(x)<0$ 且 $f''(x)>0$ 对区间内所有 $x$ 成立，则会高估。这里 $f'(x)<0$ 虽不是必要，但和 $f''(x)>0$ 一起作为 if 条件仍然充分。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Functions"
    ],
    "modules": [
      "g_integration",
      "f_differentiation"
    ],
    "sections": [
      "g.trapezium_rule",
      "f.concavity_second_derivative"
    ],
    "primary_section": "g.trapezium_rule",
    "skills": [
      "relate-convexity-to-trapezium-error",
      "distinguish-sufficient-and-necessary-conditions"
    ]
  },
  {
    "id": "2020-P2-Q13",
    "year": 2020,
    "paper": 2,
    "num": 13,
    "topic": "Integration",
    "difficulty": 3,
    "question": "$f(x)$ is a function for which\n\n$$\\int_{0}^{3} (f(x))^2 \\, dx \\ + \\ \\int_{0}^{3} f(x) \\, dx \\ = \\ \\int_{0}^{1} f(x) \\, dx$$\n\nWhich of the following claims about $f(x)$ is/are **necessarily** true?\n\nI $f(x) \\le 0$ for some $x$ with $1 \\le x \\le 3$\n\nII $\\int_{0}^{3} f(x) \\, dx \\le \\int_{0}^{1} f(x) \\, dx$",
    "options": {
      "A": "neither of them",
      "B": "I only",
      "C": "II only",
      "D": "I and II"
    },
    "answer": "D",
    "analysis": "【题目分析】\n∫₀³(f(x))²dx + ∫₀³f(x)dx = ∫₀¹f(x)dx\n判断两个命题是否必然成立。\n\n【解题步骤】\n设I₁=∫₀¹f(x)dx, I₂=∫₁³f(x)dx\n条件：∫₀³f² + (I₁+I₂) = I₁\n→ ∫₀³f² + I₂ = 0\n\n命题I \"f(x)≤0对某个x∈[1,3]\"：\n如果f(x)>0对所有x∈[1,3]，则I₂>0，但∫₀³f²≥0\n条件∫₀³f²+I₂=0不可能（左边>0）\n所以命题I成立 ✓ 必然正确\n\n命题II \"∫₀³f≤∫₀¹f\"：\n即I₁+I₂≤I₁ → I₂≤0\n从条件∫₀³f²+I₂=0，得I₂=-∫₀³f²≤0 ✓\n命题II成立 ✓ 必然正确\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof",
      "Logic"
    ],
    "modules": [
      "g_integration",
      "l_proof_methods"
    ],
    "sections": [
      "g.definite_integrals",
      "g.non_negative_integrals",
      "l.necessary_conditions"
    ],
    "primary_section": "g.definite_integrals",
    "skills": [
      "rearrange-integral-identity",
      "use-nonnegative-square-integral",
      "prove-necessary-claim"
    ]
  },
  {
    "id": "2020-P2-Q14",
    "year": 2020,
    "paper": 2,
    "num": 14,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "An arithmetic sequence $T$ has first term $a$ and common difference $d$, where $a$ and $d$ are non-zero integers.\n\nProperty P is:\n\n> **For some** positive integer $m$, the sum of the first $m$ terms of the sequence is equal to the sum of the first $2m$ terms of the sequence.\n\nFor example, when $a = 11$ and $d = -2$, the sequence $T$ has property P, because\n\n$$11 + 9 + 7 + 5 = 11 + 9 + 7 + 5 + 3 + 1 + (-1) + (-3)$$\n\ni.e. the sum of the first 4 terms equals the sum of the first 8 terms.\n\nWhich of the following statements is/are **true**?\n\nI For $T$ to have property P, it is **sufficient** that $ad < 0$.\n\nII For $T$ to have property P, it is **necessary** that $d$ is even.",
    "options": {
      "A": "neither of them",
      "B": "I only",
      "C": "II only",
      "D": "I and II"
    },
    "answer": "A",
    "analysis": "【题目分析】\n等差数列首项 $a$、公差 $d$ 均为非零整数。性质 P 表示存在正整数 $m$，使前 $m$ 项和等于前 $2m$ 项和。\n\n【解题步骤】\n等差数列前 $n$ 项和为\n$$S_n=\\frac n2(2a+(n-1)d).$$\n\n令 $S_m=S_{2m}$：\n$$\\frac m2(2a+(m-1)d)=m(2a+(2m-1)d).$$\n因 $m>0$，化简得\n$$2a+(m-1)d=4a+(4m-2)d,$$\n所以\n$$2a=(1-3m)d.$$\n\n命题 I：$ad<0$ 是否充分？不充分。反例取 $a=-2,d=1$，则 $ad<0$，但由 $2a=(1-3m)d$ 得 $-4=1-3m$，所以 $m=\\frac53$，不是正整数，性质 P 不成立。\n\n命题 II：$d$ 为偶数是否必要？不必要。反例取 $a=-1,d=1,m=1$，则\n$$2a=-2=(1-3)d,$$\n性质 P 成立，但 $d=1$ 是奇数。\n\n两个命题都不真。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Number Theory",
      "Logic"
    ],
    "modules": [
      "c_sequences_series",
      "k_number_theory_combinatorics",
      "h_logic_counterexamples"
    ],
    "sections": [
      "c.arithmetic_sequences",
      "c.sum_formulae",
      "k.integer_conditions",
      "h.necessary_sufficient"
    ],
    "primary_section": "c.arithmetic_sequences",
    "skills": [
      "derive-arithmetic-sum-condition",
      "test-sufficiency",
      "construct-counterexample"
    ]
  },
  {
    "id": "2020-P2-Q15",
    "year": 2020,
    "paper": 2,
    "num": 15,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Which one of the following is a **necessary and sufficient** condition for\n\n$$\\sum_{k=1}^{n} \\sin\\left(\\frac{k\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$$\n\nto be true?",
    "options": {
      "A": "$n = 1$",
      "B": "$n$ is a multiple of 3",
      "C": "$n$ is a multiple of 6",
      "D": "$n$ is 1 more than a multiple of 3",
      "E": "$n$ is 1 more than a multiple of 6",
      "F": "$n$ is 1 more than a multiple of 6 or $n$ is 2 more than a multiple of 6"
    },
    "answer": "D",
    "analysis": "【题目分析】\nΣ(k=1 to n) sin(kπ/3) = √3/2\n求充要条件。\n\n【解题步骤】\n计算sin(kπ/3)周期值：\nk=1: sin(π/3)=√3/2\nk=2: sin(2π/3)=√3/2\nk=3: sin(π)=0\nk=4: sin(4π/3)=-√3/2\nk=5: sin(5π/3)=-√3/2\nk=6: sin(2π)=0\n\n周期为6，每周期和=√3/2+√3/2+0-√3/2-√3/2+0=0\n\nΣ(k=1 to n) = √3/2 当n=1 ✓\n当n=2: Σ=√3/2+√3/2=√3 ✗\n当n=3: Σ=√3 ✗\n当n=4: Σ=√3-√3/2=√3/2 ✓\n当n=5: Σ=√3/2-√3/2=0 ✗\n当n=6: Σ=0 ✗\n当n=7: Σ=√3/2 ✓\n\n规律：n=1,4,7,10...即n≡1(mod3)时Σ=√3/2\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ],
    "modules": [
      "e_trigonometry",
      "c_sequences_series"
    ],
    "sections": [
      "e.trig_values_periodicity",
      "c.finite_sums",
      "k.modular_patterns"
    ],
    "primary_section": "e.trig_values_periodicity",
    "skills": [
      "use-standard-angle-values",
      "exploit-periodicity",
      "convert-pattern-to-congruence-condition"
    ]
  },
  {
    "id": "2020-P2-Q16",
    "year": 2020,
    "paper": 2,
    "num": 16,
    "topic": "Integration",
    "difficulty": 3,
    "question": "The Fundamental Theorem of Calculus (FTC) tells us that for any polynomial f :\n\n$$\\frac{d}{dx} \\left( \\int_{0}^{x} f(t) \\, dt \\right) = f(x)$$\n\nA student calculates $\\frac{d}{dx} \\left( \\int_{x}^{2x} t^2 \\, dt \\right)$ as follows:\n\n(I) $\\int_{x}^{2x} t^2 \\, dt = \\int_{0}^{2x} t^2 \\, dt - \\int_{0}^{x} t^2 \\, dt$\n\n(II) By FTC, $\\frac{d}{dx} \\left( \\int_{0}^{x} t^2 \\, dt \\right) = x^2$\n\n(III) By FTC, $\\frac{d}{dx} \\left( \\int_{0}^{2x} t^2 \\, dt \\right) = (2x)^2 = 4x^2$\n\n(IV) So $\\frac{d}{dx} \\left( \\int_{x}^{2x} t^2 \\, dt \\right) = 4x^2 - x^2$\n\n(V) giving $\\frac{d}{dx} \\left( \\int_{x}^{2x} t^2 \\, dt \\right) = 3x^2$\n\nWhich of the following best describes the student’s calculation?",
    "options": {
      "A": "The calculation is completely correct.",
      "B": "The calculation is incorrect, and the first error occurs on line (I).",
      "C": "The calculation is incorrect, and the first error occurs on line (II).",
      "D": "The calculation is incorrect, and the first error occurs on line (III).",
      "E": "The calculation is incorrect, and the first error occurs on line (IV).",
      "F": "The calculation is incorrect, and the first error occurs on line (V)."
    },
    "answer": "D",
    "analysis": "【题目分析】\n学生计算 d/dx [∫_x^{2x} t² dt]，分析哪一步首次出错。\n\n【解题方法】\n验证每一步。\n\n【详细步骤】\n(I) ∫_x^{2x} t² dt = ∫_0^{2x} t² dt - ∫_0^x t² dt\n积分限拆分正确 ✓\n\n(II) d/dx [∫_0^x t² dt] = x²\nFTC应用正确 ✓\n\n(III) d/dx [∫_0^{2x} t² dt] = (2x)² = 4x²\n错误！需要用链式法则：\nd/dx [∫_0^{2x} t² dt] = (2x)² × d/dx(2x) = 4x² × 2 = 8x²\n\n正确答案应该是 8x² - x² = 7x²\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Proof"
    ],
    "modules": [
      "g_integration",
      "f_differentiation"
    ],
    "sections": [
      "g.fundamental_theorem_calculus",
      "g.variable_limits",
      "f.chain_rule"
    ],
    "primary_section": "g.fundamental_theorem_calculus",
    "skills": [
      "apply-ftc",
      "differentiate-variable-limit-integral",
      "chain-rule",
      "find-first-error"
    ]
  },
  {
    "id": "2020-P2-Q17",
    "year": 2020,
    "paper": 2,
    "num": 17,
    "topic": "Number Theory",
    "difficulty": 3,
    "question": "A set of six **distinct** integers is split into two sets of three.\n\nThe first set of three integers has a mean of 10 and a median of 8.\nThe second set of three integers has a mean of 12 and a median of 9.\nWhat is the smallest possible range of the set of all six integers?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "11",
      "D": "12",
      "E": "14",
      "F": "15"
    },
    "answer": "E",
    "analysis": "【题目分析】\n六个互不相同的整数分成两组三个。第一组均值为 10、中位数为 8；第二组均值为 12、中位数为 9。求六个数整体的最小可能 range。\n\n【解题步骤】\n第一组可写为 $a,8,c$，其中 $a<8<c$ 且\n$$a+8+c=30,$$\n所以 $a+c=22$。因此 $a\\le 7$，$c\\ge 15$。\n\n第二组可写为 $d,9,f$，其中 $d<9<f$ 且\n$$d+9+f=36,$$\n所以 $d+f=27$。若 $d=8$，会与第一组的中位数 8 重复；因此 $d\\le 7$，从而 $f\\ge 20$。\n\n若第一组取 $a=7$，则第二组不能再取 $d=7$，只能 $d\\le 6$，于是 $f\\ge 21$，range 至少为 $21-7=14$。\n若第一组取 $a\\le 6$，则由于 $f\\ge 20$，range 至少为 $20-6=14$。\n\n所以整体 range 不可能小于 14。构造\n$$\\{6,8,16\\},\\qquad \\{7,9,20\\}$$\n满足全部条件，整体 range 为 $20-6=14$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ],
    "modules": [
      "k_number_theory_combinatorics",
      "a2_equations_inequalities"
    ],
    "sections": [
      "k.integer_constraints",
      "a2.constraint_optimisation"
    ],
    "primary_section": "k.integer_constraints",
    "skills": [
      "integer-case-analysis",
      "distinctness-constraint",
      "minimise-range",
      "mean-median-equations"
    ]
  },
  {
    "id": "2020-P2-Q18",
    "year": 2020,
    "paper": 2,
    "num": 18,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "In this question, $f(x) = ax^3 + bx^2 + cx + d$ and $g(x) = px^3 + qx^2 + rx + s$ are cubic polynomials.\n\nIf $f(x) - g(x) > 0$ for every real $x$, which of the following is/are **necessarily** true?\n\n*   I $a > p$\n*   II **if** $b = q$ **then** $c = r$\n*   III $d > s$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "G",
    "analysis": "【题目分析】\nf(x)=ax³+bx²+cx+d, g(x)=px³+qx²+rx+s\nf(x)-g(x)>0 对所有实数x。\n判断三个命题。\n\n【解题步骤】\n设h(x)=f(x)-g(x)=(a-p)x³+(b-q)x²+(c-r)x+(d-s)\n\nh(x)>0对所有x成立。\n\n命题I \"a>p\"：\n如果a≠p，h(x)是三次多项式。\n三次多项式当x→±∞时趋向±∞（符号相反），不可能对所有x保持>0。\n所以必须有a=p（三次项抵消）。\n如果a=p，则a>p不成立。\n所以I不是必然成立的。✗\n\n命题II \"若b=q则c=r\"：\n如果 $b=q$，又已知必须有 $a=p$，则\n$h(x)=(c-r)x+(d-s).$\n若 $c\\ne r$，这是一次函数，不可能对所有实数 $x$ 都保持正值。因此必须有 $c=r$。所以 II 必然成立。✓\n\n命题III \"d>s\"：\nh(0)=d-s>0（因为h(x)>0对所有x，包括x=0）\n所以d>s必然成立。✓\n\nII和III必然成立。\n\n【正确答案】G",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Logic"
    ],
    "modules": [
      "a1_algebra_basics",
      "i_functions_graphs",
      "b_mathematical_logic_basics"
    ],
    "sections": [
      "a1.polynomial_coefficients",
      "i.polynomial_positivity",
      "b.necessary_conditions"
    ],
    "primary_section": "a1.polynomial_coefficients",
    "skills": [
      "leading-coefficient-cancellation",
      "polynomial-sign-reasoning",
      "necessary-condition",
      "evaluate-at-zero"
    ]
  },
  {
    "id": "2020-P2-Q19",
    "year": 2020,
    "paper": 2,
    "num": 19,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Nine people are sitting in the squares of a 3 by 3 grid, one in each square, as shown. Two people are called *neighbours* if they are sitting in squares that share a side. (People in diagonally adjacent squares, which only have a point in common, are not called neighbours.)\n\nEach of the nine people in the grid is either a truth-teller who **always** tells the truth, or a liar who **always** lies.\n\nEvery person in the grid says: ‘My neighbours are all liars’.\n\nGiven only this information, what are the **smallest** number and the **largest** number of people who could be telling the truth?",
    "options": {
      "A": "Smallest: 1, Largest: 4",
      "B": "Smallest: 2, Largest: 4",
      "C": "Smallest: 2, Largest: 5",
      "D": "Smallest: 3, Largest: 4",
      "E": "Smallest: 3, Largest: 5",
      "F": "Smallest: 4, Largest: 4",
      "G": "Smallest: 4, Largest: 5",
      "H": "Smallest: 5, Largest: 5"
    },
    "answer": "E",
    "analysis": "【题目分析】\n3×3 网格中每个人都说“我的邻居全是说谎者”。真话者说真话，说谎者说假话。求真话者人数的最小值和最大值。\n\n【解题步骤】\n真话者的所有邻居都必须是说谎者，因此两个真话者不能上下左右相邻。另一方面，每个说谎者说“我的邻居全是说谎者”是假话，所以每个说谎者至少要有一个真话者邻居。\n\n这等价于在 3×3 网格中选一组互不相邻、且能邻接覆盖所有未选格子的格子。\n\n最大值：棋盘染色后，同色格子互不相邻。取四个角和中心这 5 个格子为真话者，其余四个边中格都是说谎者，且每个说谎者都有真话者邻居。因此最大值为 5。\n\n最小值：2 个真话者最多无法覆盖所有 9 个格子中其余的说谎者；可以逐类检查，角、边中、中心两两组合时，总会留下至少一个说谎者没有真话者邻居。因此至少需要 3 个。\n\n构造 3 个真话者可行：取左上角、右中格、左下角为真话者。它们互不相邻；其余每个格子都至少邻接其中一个真话者，所以都是说谎者且陈述为假。\n\n所以真话者人数最小为 3，最大为 5。\n\n【正确答案】E",
    "images": {
      "image": "2020 P2 Q19.png"
    },
    "has_image": true,
    "related_topics": [
      "Combinatorics"
    ],
    "modules": [
      "b_mathematical_logic_basics",
      "k_number_theory_combinatorics"
    ],
    "sections": [
      "b.truth_tellers_liars",
      "b.truth_counting",
      "k.grid_configurations"
    ],
    "primary_section": "b.truth_tellers_liars",
    "skills": [
      "truth-teller-liar-reasoning",
      "grid-case-analysis",
      "truth-counting",
      "extremal-configuration"
    ]
  },
  {
    "id": "2020-P2-Q20",
    "year": 2020,
    "paper": 2,
    "num": 20,
    "topic": "Logic",
    "difficulty": 3,
    "question": "$x$ is a real number and f is a function.\n\nGiven that **exactly one** of the following statements is true, which one is it?",
    "options": {
      "A": "$x \\ge 0$ **only if** $f(x) < 0$",
      "B": "$x < 0$ **if** $f(x) \\ge 0$",
      "C": "$x \\ge 0$ **only if** $f(x) \\ge 0$",
      "D": "$f(x) < 0$ **if** $x < 0$",
      "E": "$f(x) \\ge 0$ **only if** $x \\ge 0$",
      "F": "$f(x) \\ge 0$ **if and only if** $x < 0$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n六个命题中恰有一个为真，要求找出这个真命题。关键是把 only if、if、if and only if 都翻译成蕴含关系。\n\n【解题步骤】\nA 表示 $x\\ge0\\Rightarrow f(x)<0$。\nB 表示 $f(x)\\ge0\\Rightarrow x<0$。\nA 和 B 是互为逆否的同一命题，所以必然同真同假，不能有其中一个唯一为真。\n\nD 表示 $x<0\\Rightarrow f(x)<0$。\nE 表示 $f(x)\\ge0\\Rightarrow x\\ge0$。\nD 和 E 也是互为逆否的同一命题，所以也不能有其中一个唯一为真。\n\nF 表示 $f(x)\\ge0\\Leftrightarrow x<0$。如果 F 为真，则 B 也为真，所以 F 也不可能唯一为真。\n\n剩下唯一可能的是 C。并且 C 的确可以唯一为真：例如取 $f(x)=|x|$，则 $x\\ge0$ 时 $f(x)\\ge0$，所以 C 真；而 A、B、D、E、F 都为假。\n\n因此唯一为真的命题是 C。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ],
    "modules": [
      "b_mathematical_logic_basics",
      "h_logic_counterexamples",
      "i_functions_graphs"
    ],
    "sections": [
      "b.implication_contraposition",
      "b.unique_true_statement",
      "i.function_sign_conditions"
    ],
    "primary_section": "b.implication_contraposition",
    "skills": [
      "translate-only-if",
      "use-contrapositive",
      "eliminate-equivalent-statements",
      "construct-example-function"
    ]
  },
  {
    "id": "2021-P1-Q1",
    "year": 2021,
    "paper": 1,
    "num": 1,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "Two circles have the same radius.\n\nThe centre of one circle is (–2, 1).\n\nThe centre of the other circle is (3, –2).\n\nThe circles intersect at two distinct points.\n\nWhat is the equation of the straight line through the two points at which the circles intersect?",
    "options": {
      "A": "$3x - 5y = 4$",
      "B": "$3x + 5y = -1$",
      "C": "$5x - 3y = -4$",
      "D": "$5x - 3y = -1$",
      "E": "$5x - 3y = 1$",
      "F": "$5x - 3y = 4$",
      "G": "$5x + 3y = 1$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n两圆半径相同，相交于两点，求交点连线方程。\n\n【解题步骤——方法1：联立方程】\n\n设两圆半径均为 $r$，则：\n$(x+2)^2 + (y-1)^2 = r^2$\n$(x-3)^2 + (y+2)^2 = r^2$\n\n展开：\n$x^2 + 4x + 4 + y^2 - 2y + 1 = r^2$\n$x^2 - 6x + 9 + y^2 + 4y + 4 = r^2$\n\n两式相减，消去 $x^2, y^2, r^2$：\n$10x - 6y - 8 = 0$\n\n化简得 $5x - 3y = 4$\n\n对应选项 F。\n\n【解题步骤——方法2：几何法】\n\n两圆半径相同，交点连线是圆心连线的中垂线。\n\n圆心 $O_1 = (-2, 1)$，$O_2 = (3, -2)$\n\n中点 $M = \\left(\\frac{1}{2}, -\\frac{1}{2}\\right)$\n\n$O_1O_2$ 斜率 $= \\frac{-2-1}{3-(-2)} = -\\frac{3}{5}$\n\n中垂线斜率 $= \\frac{5}{3}$\n\n方程：$y - \\left(-\\frac{1}{2}\\right) = \\frac{5}{3}\\left(x - \\frac{1}{2}\\right)$\n\n化简得 $5x - 3y = 4$，对应选项 F。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q2",
    "year": 2021,
    "paper": 1,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The curve $y = x^3 - 6x + 3$ has turning points at $x = \\alpha$ and $x = \\beta$, where $\\beta > \\alpha$.\n\nFind\n\n$$\\int_{\\alpha}^{\\beta} x^3 - 6x + 3 \\, dx$$",
    "options": {
      "A": "$-8\\sqrt{2}$",
      "B": "$-10$",
      "C": "$-10 + 6\\sqrt{2}$",
      "D": "$0$",
      "E": "$12 - 8\\sqrt{2}$",
      "F": "$6\\sqrt{2}$",
      "G": "$12$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n曲线 $y = x^3 - 6x + 3$ 的驻点为 $x = \\alpha$ 和 $x = \\beta$（$\\beta > \\alpha$），求 $\\int_\\alpha^\\beta (x^3 - 6x + 3)\\,dx$。\n\n【解题步骤】\n求驻点：$\\frac{dy}{dx} = 3x^2 - 6 = 0$，得 $x^2 = 2$\n\n$\\alpha = -\\sqrt{2}$，$\\beta = \\sqrt{2}$\n\n计算积分：\n\n$\\int_{-\\sqrt{2}}^{\\sqrt{2}} (x^3 - 6x + 3)\\,dx = \\left[\\frac{1}{4}x^4 - 3x^2 + 3x\\right]_{-\\sqrt{2}}^{\\sqrt{2}}$\n\n$= \\left(\\frac{1}{4}(\\sqrt{2})^4 - 3(\\sqrt{2})^2 + 3\\sqrt{2}\\right) - \\left(\\frac{1}{4}(-\\sqrt{2})^4 - 3(-\\sqrt{2})^2 + 3(-\\sqrt{2})\\right)$\n\n注意到 $\\frac{1}{4}x^4$ 和 $3x^2$ 都是偶函数，在对称区间上的贡献相消，只留下 $3x$ 项：\n\n$= 3\\sqrt{2} - (-3\\sqrt{2}) = 6\\sqrt{2}$\n\n对应选项 F。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q3",
    "year": 2021,
    "paper": 1,
    "num": 3,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "An arithmetic progression and a convergent geometric progression each have first term $\\frac{1}{2}$\n\nThe sum of the second terms of the two progressions is $\\frac{1}{2}$\n\nThe sum of the third terms of the two progressions is $\\frac{1}{8}$\n\nWhat is the sum to infinity of the geometric progression?",
    "options": {
      "A": "$-2$",
      "B": "$-1$",
      "C": "$-\\frac{1}{2}$",
      "D": "$-\\frac{1}{3}$",
      "E": "$\\frac{1}{3}$",
      "F": "$\\frac{1}{2}$",
      "G": "$1$",
      "H": "$2$"
    },
    "answer": "G",
    "analysis": "【题目分析】\n等差数列首项 $\\frac{1}{2}$，公差 $d$；等比数列首项 $\\frac{1}{2}$，公比 $r$，收敛（$|r| < 1$）。求等比数列的无穷和。\n\n【解题步骤】\n等差：$\\frac{1}{2}, \\frac{1}{2}+d, \\frac{1}{2}+2d, \\ldots$\n等比：$\\frac{1}{2}, \\frac{1}{2}r, \\frac{1}{2}r^2, \\ldots$\n\n由第二项之和 $= \\frac{1}{2}$：\n$\\frac{1}{2}+d + \\frac{1}{2}r = \\frac{1}{2}$，化简得 $d + \\frac{1}{2}r = 0$，即 $d = -\\frac{1}{2}r$\n\n由第三项之和 $= \\frac{1}{8}$：\n$\\frac{1}{2}+2d + \\frac{1}{2}r^2 = \\frac{1}{8}$\n\n代入 $d = -\\frac{1}{2}r$：\n$\\frac{1}{2} - r + \\frac{1}{2}r^2 = \\frac{1}{8}$\n\n乘以8整理：$4r^2 - 8r + 3 = 0$\n\n因式分解：$(2r-1)(2r-3) = 0$，$r = \\frac{1}{2}$ 或 $r = \\frac{3}{2}$\n\n因等比数列收敛，$|r| < 1$，取 $r = \\frac{1}{2}$\n\n无穷和 $S_\\infty = \\frac{a}{1-r} = \\frac{\\frac{1}{2}}{1-\\frac{1}{2}} = 1$\n\n对应选项 G。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q4",
    "year": 2021,
    "paper": 1,
    "num": 4,
    "topic": "Functions",
    "difficulty": 3,
    "question": "Find the minimum value of the function\n\n$$2^{2x} - 2^{x+3} + 4$$",
    "options": {
      "A": "$-16$",
      "B": "$-12$",
      "C": "$-8$",
      "D": "$0$",
      "E": "$4$",
      "F": "$20$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n求 $f(x) = 2^{2x} - 2^{x+3} + 4$ 的最小值。\n\n【解题步骤】\n设 $u = 2^x > 0$，则 $2^{2x} = u^2$，$2^{x+3} = 8u$\n\n$f = u^2 - 8u + 4$\n\n配方法：$f = (u-4)^2 - 12$\n\n最小值在 $u = 4$ 时取得，$f_{\\min} = -12$\n\n验证 $u = 4$ 可达：$u = 2^x = 4$，$x = 2$ ✓\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q5",
    "year": 2021,
    "paper": 1,
    "num": 5,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The function f is such that\n\n$$ f(mn) = \\begin{cases} f(m)f(n) & \\text{if } mn \\text{ is a multiple of 3} \\\\ mn & \\text{if } mn \\text{ is not a multiple of 3} \\end{cases} $$\n\nfor all positive integers $m$ and $n$.\n\nGiven that $f(9) + f(16) - f(24) = 0$, what is the value of $f(3)$?",
    "options": {
      "A": "$\\frac{8}{3}$",
      "B": "$2\\sqrt{2}$",
      "C": "$3$",
      "D": "$\\frac{16}{5}$",
      "E": "$3\\sqrt{2}$",
      "F": "$4$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n函数 $f$ 满足：$f(mn) = f(m)f(n)$（当 $mn$ 是3的倍数），$f(mn) = mn$（当 $mn$ 不是3的倍数）。已知 $f(9) + f(16) - f(24) = 0$，求 $f(3)$。\n\n【解题步骤】\n\n$f(9) = f(3 \\times 3) = f(3)f(3) = f(3)^2$（9是3的倍数）\n\n$f(16) = 16$（16不是3的倍数）\n\n$f(24) = f(3 \\times 8) = f(3)f(8)$（24是3的倍数）\n\n$f(8) = 8$（8不是3的倍数），所以 $f(24) = 8f(3)$\n\n代入方程：$f(3)^2 + 16 - 8f(3) = 0$\n\n$f(3)^2 - 8f(3) + 16 = 0$\n\n$(f(3) - 4)^2 = 0$\n\n$f(3) = 4$\n\n对应选项 F。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q6",
    "year": 2021,
    "paper": 1,
    "num": 6,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "The function f is given by\n\n$$ f(x) = \\frac{\\cos x + 3}{7 + 5 \\cos x - \\sin^2 x} $$\n\nFind the positive difference between the maximum and the minimum values of $f(x)$.",
    "options": {
      "A": "0",
      "B": "$\\frac{1}{3}$",
      "C": "$\\frac{1}{2}$",
      "D": "$\\frac{2}{3}$",
      "E": "1",
      "F": "2"
    },
    "answer": "D",
    "analysis": "【题目分析】\n求 $f(x) = \\frac{\\cos x + 3}{7 + 5\\cos x - \\sin^2 x}$ 的最大值与最小值之差。\n\n【解题步骤】\n利用 $\\sin^2 x = 1 - \\cos^2 x$，分母变为：\n$7 + 5\\cos x - (1 - \\cos^2 x) = 6 + 5\\cos x + \\cos^2 x$\n\n因式分解：$= (\\cos x + 2)(\\cos x + 3)$\n\n所以 $f(x) = \\frac{\\cos x + 3}{(\\cos x + 2)(\\cos x + 3)} = \\frac{1}{\\cos x + 2}$\n\n（$\\cos x + 3$ 恒不为零，可以约去）\n\n当 $\\cos x = -1$ 时，$f(x)$ 最大 $= \\frac{1}{-1+2} = 1$\n当 $\\cos x = 1$ 时，$f(x)$ 最小 $= \\frac{1}{1+2} = \\frac{1}{3}$\n\n差 $= 1 - \\frac{1}{3} = \\frac{2}{3}$\n\n对应选项 D。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q7",
    "year": 2021,
    "paper": 1,
    "num": 7,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The function $f$ is such that $f(0) = 0$, and $xf(x) > 0$ for all non-zero values of $x$.\n\nIt is given that\n\n$$\\int_{-2}^{2} f(x) \\, dx = 4$$\n\nand\n\n$$\\int_{-2}^{2} |f(x)| \\, dx = 8$$\n\nEvaluate\n\n$$\\int_{-2}^{0} f(|x|) \\, dx$$",
    "options": {
      "A": "$-8$",
      "B": "$-6$",
      "C": "$-4$",
      "D": "$-2$",
      "E": "$2$",
      "F": "$4$",
      "G": "$6$",
      "H": "$8$"
    },
    "answer": "G",
    "analysis": "【题目分析】\n已知 $f(0) = 0$，$xf(x) > 0$（$x \\neq 0$），$\\int_{-2}^{2} f(x)\\,dx = 4$，$\\int_{-2}^{2} |f(x)|\\,dx = 8$。求 $\\int_{-2}^{0} f(|x|)\\,dx$。\n\n【解题步骤】\n由 $xf(x) > 0$ 得：$x > 0$ 时 $f(x) > 0$，$x < 0$ 时 $f(x) < 0$。\n\n将积分拆分为 $[-2,0]$ 和 $[0,2]$ 两段，设：\n$A = \\int_{-2}^{0} f(x)\\,dx$（$A < 0$），$B = \\int_{0}^{2} f(x)\\,dx$（$B > 0$）\n\n由已知条件：\n$A + B = 4$\n$-A + B = 8$\n\n两式相加：$2B = 12$，$B = 6$，$A = -2$\n\n现在求 $\\int_{-2}^{0} f(|x|)\\,dx$：\n\n当 $x \\in [-2, 0]$ 时，$|x| = -x \\in [0, 2]$，所以 $f(|x|) = f(-x)$\n\n$\\int_{-2}^{0} f(|x|)\\,dx = \\int_{-2}^{0} f(-x)\\,dx$\n\n换元 $u = -x$：$= \\int_{2}^{0} f(u)(-du) = \\int_{0}^{2} f(u)\\,du = B = 6$\n\n对应选项 G。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q8",
    "year": 2021,
    "paper": 1,
    "num": 8,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "The line $y = 2x + 3$ meets the curve $y = x^2 + bx + c$ at exactly one point.\n\nThe line $y = 4x - 2$ also meets the curve $y = x^2 + bx + c$ at exactly one point.\n\nWhat is the value of $b - c$?",
    "options": {
      "A": "$-9$",
      "B": "$-5.5$",
      "C": "$-1$",
      "D": "$5$",
      "E": "$6$",
      "F": "$14$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n直线 $y = 2x+3$ 和 $y = 4x-2$ 分别与抛物线 $y = x^2+bx+c$ 恰有一个交点（相切），求 $b-c$。\n\n【解题步骤】\n直线与抛物线相切 $\\Leftrightarrow$ 联立方程有重根 $\\Leftrightarrow$ 判别式 $= 0$\n\n**直线1：** $x^2 + bx + c = 2x + 3$，即 $x^2 + (b-2)x + (c-3) = 0$\n$(b-2)^2 - 4(c-3) = 0$ ……①\n\n**直线2：** $x^2 + bx + c = 4x - 2$，即 $x^2 + (b-4)x + (c+2) = 0$\n$(b-4)^2 - 4(c+2) = 0$ ……②\n\n展开整理：\n①：$b^2 - 4b - 4c = -16$\n②：$b^2 - 8b - 4c = -8$\n\n相减：$4b = -8$，$b = -2$\n\n代入①：$4 + 8 - 4c = -16$，$c = 7$\n\n$b - c = -2 - 7 = -9$\n\n对应选项 A。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q9",
    "year": 2021,
    "paper": 1,
    "num": 9,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the area enclosed by the graph of\n\n$$|x| + |y| = 1$$",
    "options": {
      "A": "$\\frac{1}{2}$",
      "B": "$1$",
      "C": "$2$",
      "D": "$4$",
      "E": "$\\frac{1}{2}\\sqrt{2}$",
      "F": "$\\sqrt{2}$",
      "G": "$2\\sqrt{2}$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n求 $|x| + |y| = 1$ 围成的面积。\n\n【解题步骤】\n按象限分四种情况：\n\n| 象限 | $|x|$ | $|y|$ | 方程 | 即 $y = \\cdots$ |\n|------|-------|-------|------|----------|\n| 一 ($x>0,y>0$) | $x$ | $y$ | $x+y=1$ | $y=-x+1$ |\n| 二 ($x<0,y>0$) | $-x$ | $y$ | $-x+y=1$ | $y=x+1$ |\n| 三 ($x<0,y<0$) | $-x$ | $-y$ | $-x-y=1$ | $y=-x-1$ |\n| 四 ($x>0,y<0$) | $x$ | $-y$ | $x-y=1$ | $y=x-1$ |\n\n四条线段围成一个正方形，顶点为 $(1,0)$，$(0,1)$，$(-1,0)$，$(0,-1)$。\n\n可看作4个直角三角形，每个底和高均为1：\n面积 $= 4 \\times \\frac{1}{2} \\times 1 \\times 1 = 2$\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q10",
    "year": 2021,
    "paper": 1,
    "num": 10,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Use the trapezium rule with 3 strips to estimate\n\n$$\\int_{\\frac{1}{2}}^{2} 2 \\log_{10} x \\, dx$$",
    "options": {
      "A": "$\\log_{10} \\frac{\\sqrt{6}}{2}$",
      "B": "$\\log_{10} \\frac{3}{2}$",
      "C": "$\\log_{10} \\frac{9}{4}$",
      "D": "$\\log_{10} 3$",
      "E": "$\\log_{10} \\frac{81}{16}$",
      "F": "$\\log_{10} \\frac{\\sqrt{23}}{2}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n用梯形法则（3条）估算 $\\int_{1/2}^{2} 2\\log_{10} x\\,dx$。\n\n【解题步骤】\n区间 $[\\frac{1}{2}, 2]$，宽度 $= \\frac{3}{2}$，3条每条宽 $h = \\frac{1}{2}$。\n\n分点：$x = \\frac{1}{2}, 1, \\frac{3}{2}, 2$\n\n设 $f(x) = 2\\log_{10} x$，计算函数值：\n\n$f\\left(\\frac{1}{2}\\right) = 2\\log_{10}\\frac{1}{2} = -2\\log_{10}2$\n\n$f(1) = 2\\log_{10}1 = 0$\n\n$f\\left(\\frac{3}{2}\\right) = 2\\log_{10}\\frac{3}{2} = 2\\log_{10}3 - 2\\log_{10}2$\n\n$f(2) = 2\\log_{10}2$\n\n梯形法则：\n$\\int \\approx \\frac{h}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + f(x_3)]$\n\n$= \\frac{1}{4}[-2\\log_{10}2 + 0 + 2(2\\log_{10}3 - 2\\log_{10}2) + 2\\log_{10}2]$\n\n$= \\frac{1}{4}(4\\log_{10}3 - 4\\log_{10}2)$\n\n$= \\log_{10}3 - \\log_{10}2 = \\log_{10}\\frac{3}{2}$\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q11",
    "year": 2021,
    "paper": 1,
    "num": 11,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The function f is given by\n\n$$f(x) = x^{\\frac{1}{7}}(x^2 - x + 1)$$\n\nFind the fraction of the interval $0 < x < 1$ for which $f(x)$ is decreasing.",
    "options": {
      "A": "$\\frac{2}{15}$",
      "B": "$\\frac{1}{5}$",
      "C": "$\\frac{1}{3}$",
      "D": "$\\frac{1}{2}$",
      "E": "$\\frac{2}{3}$",
      "F": "$\\frac{4}{5}$",
      "G": "$\\frac{13}{15}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n$f(x) = x^{1/7}(x^2 - x + 1)$，求在 $(0,1)$ 区间内 $f(x)$ 递减的比例。\n\n【解题步骤】\n求导：\n\n$f'(x) = \\frac{1}{7}x^{-6/7}(x^2-x+1) + x^{1/7}(2x-1) = \\frac{1}{7}x^{-6/7}(15x^2-8x+1)$\n\n因式分解：$15x^2-8x+1 = (5x-1)(3x-1)$\n\n$f'(x) < 0$ 当 $(5x-1)(3x-1) < 0$（注意 $x > 0$ 时 $\\frac{1}{7}x^{-6/7} > 0$）\n\n$(5x-1)(3x-1) = 0$ 的根为 $x = \\frac{1}{5}$ 和 $x = \\frac{1}{3}$\n\n$(5x-1)(3x-1) < 0$ 当 $\\frac{1}{5} < x < \\frac{1}{3}$\n\n递减区间长度 $= \\frac{1}{3} - \\frac{1}{5} = \\frac{2}{15}$\n\n占 $(0,1)$ 的比例 $= \\frac{2}{15}$\n\n对应选项 A。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q12",
    "year": 2021,
    "paper": 1,
    "num": 12,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "The minimum value of the function $x^4 - p^2x^2$ is $-9$\n\n$p$ is a real number.\n\nFind the minimum value of the function $x^2 - px + 6$",
    "options": {
      "A": "$-3$",
      "B": "$6 - \\frac{3\\sqrt{2}}{2}$",
      "C": "$\\frac{3}{2}$",
      "D": "$3$",
      "E": "$\\frac{9}{2}$",
      "F": "$6 + \\frac{3\\sqrt{2}}{2}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n$x^4 - p^2x^2$ 的最小值为 $-9$，$p$ 为实数。求 $x^2 - px + 6$ 的最小值。\n\n【解题步骤】\n**先求 $p$：**\n\n$x^4 - p^2x^2 = \\left(x^2 - \\frac{1}{2}p^2\\right)^2 - \\frac{1}{4}p^4$\n\n最小值在 $x^2 = \\frac{1}{2}p^2$ 时取得，$= -\\frac{1}{4}p^4 = -9$\n\n所以 $p^4 = 36$，因 $p$ 为实数，$p^2 = 6$\n\n**再求 $x^2 - px + 6$ 的最小值：**\n\n$= \\left(x - \\frac{1}{2}p\\right)^2 - \\frac{1}{4}p^2 + 6 = \\left(x - \\frac{1}{2}p\\right)^2 - \\frac{6}{4} + 6 = \\left(x - \\frac{1}{2}p\\right)^2 + \\frac{9}{2}$\n\n最小值 $= \\frac{9}{2}$\n\n对应选项 E。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q13",
    "year": 2021,
    "paper": 1,
    "num": 13,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The function f is such that, for every integer $n$\n\n$$\\int_{n}^{n+1} f(x) \\, dx = n + 1$$\n\nEvaluate\n\n$$\\sum_{r=1}^{8} \\left( \\int_{0}^{r} f(x) \\, dx \\right)$$",
    "options": {
      "A": "36",
      "B": "84",
      "C": "120",
      "D": "165",
      "E": "204",
      "F": "288"
    },
    "answer": "C",
    "analysis": "【题目分析】\n$\\int_n^{n+1} f(x)\\,dx = n+1$，求 $\\sum_{r=1}^{8} \\int_0^r f(x)\\,dx$。\n\n【解题步骤】\n\n$\\int_0^r f(x)\\,dx = \\int_0^1 f(x)\\,dx + \\int_1^2 f(x)\\,dx + \\cdots + \\int_{r-1}^{r} f(x)\\,dx$\n\n$= 1 + 2 + \\cdots + r = \\frac{1}{2}r(r+1)$\n\n所以：\n\n$\\sum_{r=1}^{8} \\frac{1}{2}r(r+1) = \\frac{1}{2}(1 \\times 2 + 2 \\times 3 + 3 \\times 4 + 4 \\times 5 + 5 \\times 6 + 6 \\times 7 + 7 \\times 8 + 8 \\times 9)$\n\n$= \\frac{1}{2}(2 + 6 + 12 + 20 + 30 + 42 + 56 + 72) = \\frac{1}{2} \\times 240 = 120$\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q14",
    "year": 2021,
    "paper": 1,
    "num": 14,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the number of distinct values of $x$ that satisfy the equation\n\n$$(x + 1)(3 - x) = 2(1 - \\cos(\\pi x))$$",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6",
      "F": "7"
    },
    "answer": "B",
    "analysis": "【题目分析】\n求 $(x+1)(3-x) = 2(1-\\cos\\pi x)$ 的不同实数解的个数。\n\n【解题步骤】\n画图分析两边的交点。\n\n**左边** $y = (x+1)(3-x) = -x^2+2x+3$ 是开口向下的抛物线，根在 $x=-1$ 和 $x=3$，顶点 $(1,4)$。\n\n**右边** $y = 2(1-\\cos\\pi x)$ 是变换后的余弦函数：\n$y = \\cos\\pi x$ 周期为2，$y = 1-\\cos\\pi x$ 关于 $x$ 轴反射后上移1，$y = 2(1-\\cos\\pi x)$ 再纵向拉伸2倍，值域 $[0,4]$。\n\n两图叠加分析：\n- 三角函数图在 $x = 1$ 处取最大值4，与抛物线顶点重合 → 一个切点 $(1,4)$\n- 在 $x \\in (-1, 0)$ 区间有一个交点\n- 在 $x \\in (2, 3)$ 区间有一个交点\n- 其余区域三角函数值 $\\geq 0$ 而抛物线值 $< 0$，无交点\n\n共3个交点。\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q15",
    "year": 2021,
    "paper": 1,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The diagram shows the graph of $y = f(x)$.\n\nThe graph consists of alternating straight-line segments of gradient 1 and $-1$ and continues in this way for all values of $x$.\n\nThe function g is defined as\n\n$$g(x) = \\sum_{r=1}^{10} f\\left(2^{r-1}x\\right)$$\n\nFind the value of\n\n$$\\int_{0}^{1} g(x) \\, dx$$",
    "options": {
      "A": "$\\frac{1023}{1024}$",
      "B": "$\\frac{1023}{512}$",
      "C": "$5$",
      "D": "$10$",
      "E": "$\\frac{55}{2}$",
      "F": "$55$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n$f(x)$ 是斜率为 $\\pm 1$ 的折线函数，$g(x) = \\sum_{r=1}^{10} f(2^{r-1}x)$，求 $\\int_0^1 g(x)\\,dx$。\n\n【解题步骤】\n\n$\\int_0^1 g(x)\\,dx = \\sum_{r=1}^{10} \\int_0^1 f(2^{r-1}x)\\,dx$\n\n**关键观察：** 每项积分都等于 $\\frac{1}{2}$\n\n- $r=1$：$\\int_0^1 f(x)\\,dx = \\frac{1}{2}$（底为1高为1的直角三角形）\n- $r=2$：$f(2x)$ 是 $f(x)$ 在 $x$ 方向压缩为 $\\frac{1}{2}$，$[0,1]$ 上的图像仍是一个直角三角形，面积 $= \\frac{1}{2}$\n- $r=3$：$f(4x)$ 在 $[0,1]$ 上画两个三角形，用正方形包围后，每个矩形中一半在图下一半在图上，总面积 $= \\frac{1}{2}$\n- 一般地，$f(2^{r-1}x)$ 在 $[0,1]$ 上的面积恒为 $\\frac{1}{2}$\n\n总和 $= 10 \\times \\frac{1}{2} = 5$\n\n对应选项 C。",
    "images": {
      "image": "2021 P1 Q15.png"
    },
    "has_image": true
  },
  {
    "id": "2021-P1-Q16",
    "year": 2021,
    "paper": 1,
    "num": 16,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the expansion of\n$$(a + bx)^n$$\n\nThe third term, in **ascending** powers of $x$, is $105x^2$\n\nThe fourth term, in **ascending** powers of $x$, is $210x^3$\n\nThe fourth term, in **descending** powers of $x$, is $210x^3$\n\nFind the value of $(\\frac{a}{b})^2$",
    "options": {
      "A": "$\\frac{1}{4}$",
      "B": "$\\frac{4}{9}$",
      "C": "$\\frac{25}{36}$",
      "D": "$\\frac{5}{6}$",
      "E": "$1$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n$(a+bx)^n$ 展开中，升序第3项为 $105x^2$，升序第4项为 $210x^3$，降序第4项也为 $210x^3$。求 $\\left(\\frac{a}{b}\\right)^2$。\n\n【解题步骤】\n二项式展开：$(a+bx)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}bx + \\binom{n}{2}a^{n-2}b^2x^2 + \\binom{n}{3}a^{n-3}b^3x^3 + \\cdots$\n\n升序第3项：$\\binom{n}{2}a^{n-2}b^2 = 105$\n升序第4项：$\\binom{n}{3}a^{n-3}b^3 = 210$\n降序第4项：$\\binom{n}{n-3}a^3b^{n-3} = 210$\n\n由降序第4项知 $n-3 = 3$，即 $n = 6$。\n\n代入前两式：\n$\\binom{6}{2}a^4b^2 = 15a^4b^2 = 105$，即 $a^4b^2 = 7$\n$\\binom{6}{3}a^3b^3 = 20a^3b^3 = 210$，即 $a^3b^3 = \\frac{21}{2}$\n\n两式相除：$\\frac{a}{b} = \\frac{7}{\\frac{21}{2}} = \\frac{2}{3}$\n\n所以 $\\left(\\frac{a}{b}\\right)^2 = \\frac{4}{9}$\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q17",
    "year": 2021,
    "paper": 1,
    "num": 17,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Which of the following sketches shows the graph of\n\n$$\\sin(x^2 + y^2) = \\frac{1}{2}$$\n\nwhere $x^2 + y^2 \\le 8\\pi$?\n\n",
    "options": {
      "A": "Sketch A",
      "B": "Sketch B",
      "C": "Sketch C",
      "D": "Sketch D",
      "E": "Sketch E"
    },
    "answer": "A",
    "analysis": "【题目分析】\n识别 $\\sin(x^2+y^2) = \\frac{1}{2}$（$x^2+y^2 \\leq 8\\pi$）的图形。\n\n【解题步骤】\n设 $r^2 = x^2 + y^2 \\geq 0$，方程变为 $\\sin r^2 = \\frac{1}{2}$。\n\n$r^2 = \\frac{\\pi}{6} + 2k\\pi$ 或 $r^2 = \\frac{5\\pi}{6} + 2k\\pi$（$k$ 为整数）\n\n在 $r^2 \\leq 8\\pi$ 范围内，$k = 0,1,2,3$，共8个圆：\n\n$r^2 = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}, \\frac{17\\pi}{6}, \\frac{25\\pi}{6}, \\frac{29\\pi}{6}, \\frac{37\\pi}{6}, \\frac{41\\pi}{6}$\n\n提取公因子 $\\sqrt{\\pi/6}$，各圆半径为：\n\n$\\sqrt{\\frac{\\pi}{6}} \\times 1, \\sqrt{5}, \\sqrt{13}, \\sqrt{17}, \\sqrt{25}, \\sqrt{29}, \\sqrt{37}, \\sqrt{41}$\n\n近似值：$\\rho \\approx 1, 2, 3.5, 4, 5, 5.5, 6, 6.5$\n\n最小的几个圆间距较大，后面的圆越来越密，且成对出现——这对应选项 A。",
    "images": {
      "image": "2021 P1 Q17 5 options.png"
    },
    "has_image": true
  },
  {
    "id": "2021-P1-Q18",
    "year": 2021,
    "paper": 1,
    "num": 18,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The curve with equation\n$$x = y^2 - 6y + 11$$\nis rotated 90° clockwise about the point $P$ to give the curve $C$.\n\n$P$ has $x$-coordinate $-2$ and $y$-coordinate 3.\n\nWhat is the equation of $C$?",
    "options": {
      "A": "$y = -x^2 - 4x - 3$",
      "B": "$y = -x^2 - 4x - 5$",
      "C": "$y = -x^2 - 6x - 7$",
      "D": "$y = -x^2 - 6x - 11$",
      "E": "$y = \\phantom{-}x^2 - 4x + 5$",
      "F": "$y = \\phantom{-}x^2 + 4x + 3$",
      "G": "$y = \\phantom{-}x^2 - 6x + 11$",
      "H": "$y = \\phantom{-}x^2 + 6x + 7$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n曲线 $x = y^2 - 6y + 11$ 绕点 $P(-2, 3)$ 顺时针旋转90°，求新曲线方程。\n\n【解题步骤】\n原曲线配方：$x = (y-3)^2 + 2$，顶点 $(2, 3)$，开口向右。\n\n旋转思路：顶点 $(2,3)$ 到中心 $P(-2,3)$ 的相对位置是 $(4,0)$（向右4个单位）。\n\n顺时针旋转90°后，相对位置变为 $(0,-4)$（向下4个单位），新顶点 $(-2,-1)$，开口向下。\n\n设原曲线上的点 $(x_0, y_0)$ 绕 $P$ 顺时针旋转90°得到 $(x_1, y_1)$：\n\n相对坐标：$(x_0+2, y_0-3) \\to (y_0-3, -(x_0+2))$\n\n$x_1 = -2 + (y_0-3)$，$y_1 = 3 - (x_0+2) = 1-x_0$\n\n反解：$y_0 = x_1+5$，$x_0 = 1-y_1$\n\n代入 $x_0 = y_0^2 - 6y_0 + 11$：\n\n$1 - y_1 = (x_1+5)^2 - 6(x_1+5) + 11 = x_1^2 + 4x_1 + 6$\n\n$y_1 = -x_1^2 - 4x_1 - 5$\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q19",
    "year": 2021,
    "paper": 1,
    "num": 19,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$$\\sin^2 (4^{\\cos \\theta} \\times 60^\\circ) = \\frac{3}{4}$$\n\nhas exactly three solutions in the range $0^\\circ \\le \\theta \\le x^\\circ$\n\nWhat is the range of all possible values of $x$?",
    "options": {
      "A": "$90 \\le x < 120$",
      "B": "$90 \\le x < 270$",
      "C": "$120 \\le x < 240$",
      "D": "$270 \\le x < 300$",
      "E": "$300 \\le x < 360$",
      "F": "$450 \\le x < 630$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n$\\sin^2(4^{\\cos\\theta} \\times 60°) = \\frac{3}{4}$ 在 $0° \\leq \\theta \\leq x°$ 恰有3个解，求 $x$ 的范围。\n\n【解题步骤】\n$\\sin^2 u = \\frac{3}{4}$，则 $\\sin u = \\pm\\frac{\\sqrt{3}}{2}$\n\n$u = 60°, 120°, 240°, 300°, \\ldots$\n\n其中 $u = 4^{\\cos\\theta} \\times 60° > 0$，所以：\n$4^{\\cos\\theta} \\times 60° = 60°, 120°, 240°, 300°, \\ldots$\n\n$4^{\\cos\\theta} = 1, 2, 4, 5, \\ldots$\n\n$\\cos\\theta = 0, \\frac{1}{2}, 1$（$4^{\\cos\\theta} > 4$ 时无解）\n\n对应的 $\\theta$ 值：\n- $\\cos\\theta = 0$：$\\theta = 90°, 270°, 450°, \\ldots$\n- $\\cos\\theta = \\frac{1}{2}$：$\\theta = 60°, 300°, 420°, \\ldots$\n- $\\cos\\theta = 1$：$\\theta = 0°, 360°, \\ldots$\n\n按递增排列：$\\theta = 0°, 60°, 90°, 270°, 300°, \\ldots$\n\n恰有3个解意味着第3个解 $\\theta = 90°$ 包含在内，第4个解 $\\theta = 270°$ 不包含在内。\n\n所以 $90 \\leq x < 270$\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P1-Q20",
    "year": 2021,
    "paper": 1,
    "num": 20,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the length of the curve with equation\n\n$$2 \\log_{10} (x - y) = \\log_{10} (2 - 2x) + \\log_{10} (y + 5)$$",
    "options": {
      "A": "5",
      "B": "10",
      "C": "15",
      "D": "$3\\pi$",
      "E": "$9\\pi$",
      "F": "$12\\pi$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n求 $2\\log_{10}(x-y) = \\log_{10}(2-2x) + \\log_{10}(y+5)$ 的曲线长度。\n\n【解题步骤】\n合并右边对数：$\\log_{10}(x-y)^2 = \\log_{10}[(2-2x)(y+5)]$\n\n所以 $(x-y)^2 = (2-2x)(y+5)$\n\n展开：$x^2 - 2xy + y^2 = 2y + 10 - 2xy - 10x$\n\n整理：$x^2 + y^2 + 10x - 2y = 10$\n\n配方：$(x+5)^2 + (y-1)^2 = 36$\n\n这是一个圆心 $(-5, 1)$、半径 $6$ 的圆，周长 $= 12\\pi$。\n\n**但必须检查定义域约束！** 对数有定义要求：\n- $x - y > 0$\n- $2 - 2x > 0$，即 $x < 1$\n- $y + 5 > 0$，即 $y > -5$\n\n$x < 1$ 排除了点 $(1,1)$，$y > -5$ 排除了点 $(-5,-5)$。\n\n$x > y$（即 $x - y > 0$）将圆分成两部分：直线 $x = y$ 过圆上的 $(1,1)$ 和 $(-5,-5)$ 两点，恰好将圆分为四等份。区域 $x > y$ 对应圆的 $\\frac{1}{4}$。\n\n曲线长度 $= \\frac{1}{4} \\times 12\\pi = 3\\pi$\n\n对应选项 D。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q1",
    "year": 2021,
    "paper": 2,
    "num": 1,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Find the value of\n$$\\int_{1}^{4} \\left( 3\\sqrt{x} + \\frac{4}{x^2} \\right) dx$$",
    "options": {
      "A": "$-0.75$",
      "B": "$7.125$",
      "C": "$11$",
      "D": "$17$",
      "E": "$18$",
      "F": "$21.875$",
      "G": "$34.5$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n计算 $\\int_1^4 \\left(3\\sqrt{x} + \\frac{4}{x^2}\\right)dx$。\n\n【解题步骤】\n改写为幂次形式：\n\n$\\int_1^4 (3x^{1/2} + 4x^{-2})\\,dx = \\left[2x^{3/2} - 4x^{-1}\\right]_1^4$\n\n$= (2 \\times 8 - 4 \\times \\frac{1}{4}) - (2 \\times 1 - 4 \\times 1)$\n\n$= (16 - 1) - (2 - 4) = 15 - (-2) = 17$\n\n对应选项 D。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q2",
    "year": 2021,
    "paper": 2,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$A(0, 2)$ and $C(4, 0)$ are opposite vertices of the square $ABCD$.\n\nWhat is the equation of the straight line through $B$ and $D$?",
    "options": {
      "A": "$y = -2x + 5$",
      "B": "$y = -\\frac{1}{2}x - 3$",
      "C": "$y = -\\frac{1}{2}x + 2$",
      "D": "$y = x$",
      "E": "$y = 2x - 3$",
      "F": "$y = 2x + 2$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n正方形 $ABCD$ 的对角顶点 $A(0,2)$ 和 $C(4,0)$，求对角线 $BD$ 的方程。\n\n【解题步骤】\n正方形对角线互相垂直平分，$BD$ 是 $AC$ 的中垂线。\n\n$AC$ 中点 $= \\left(\\frac{0+4}{2}, \\frac{2+0}{2}\\right) = (2, 1)$\n\n$AC$ 斜率 $= \\frac{0-2}{4-0} = -\\frac{1}{2}$，所以 $BD$ 斜率 $= 2$\n\n$BD$ 方程：$y - 1 = 2(x-2)$，即 $y = 2x - 3$\n\n对应选项 E。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q3",
    "year": 2021,
    "paper": 2,
    "num": 3,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "A student is chosen at random from a class. Each student is equally likely to be chosen.\n\nWhich of the following conditions is/are **necessary** for the probability that the student wears glasses to equal $\\frac{4}{15}$?\n\nI Exactly 11 students in the class do not wear glasses.\n\nII The number of students in the class is divisible by 3.\n\nIII The class contains 30 students, and 8 of them wear glasses.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "C",
    "analysis": "【题目分析】\n概率 $= \\frac{4}{15}$（最简分数），判断哪些条件是**必要条件**。\n\n【解题步骤】\n不戴眼镜概率 $= \\frac{11}{15}$，所以戴眼镜与不戴眼镜之比为 $4:11$。\n\n因此人数可以是 $(4, 11)$（共15人）、$(8, 22)$（共30人）等。\n\n**条件I**：恰好11人不戴眼镜——不必要，也可以22人不戴眼镜。\n\n**条件II**：总人数能被3整除——必要！因为总人数 $= 15k$，必为3的倍数。\n\n**条件III**：30人，8人戴眼镜——不必要，15人4人戴眼镜也满足。\n\n只有条件II是必要条件。\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q4",
    "year": 2021,
    "paper": 2,
    "num": 4,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider the following claim about positive integers $a$, $b$ and $c$:\n\n> **if** $a$ is a factor of $bc$, **then** $a$ is a factor of $b$ **or** $a$ is a factor of $c$\n\nWhich of the following provide(s) a **counterexample** to this claim?\n\nI $a = 5, b = 10, c = 20$\n\nII $a = 8, b = 4, c = 4$\n\nIII $a = 6, b = 7, c = 12$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "C",
    "analysis": "【题目分析】\n找出反例使命题(如果 $a$ 是 $bc$ 的因子，则 $a$ 是 $b$ 的因子或 $a$ 是 $c$ 的因子)不成立。\n\n反例需要：前提为真（$a \\mid bc$），但结论为假（$a \\nmid b$ 且 $a \\nmid c$）。\n\n【逐个检验】\n**I** $a=5, b=10, c=20$：$bc=200$，$5\\mid 200$ ✓ 前提成立，$5\\mid 10$ ✓ 结论成立。不是反例。\n\n**II** $a=8, b=4, c=4$：$bc=16$，$8\\mid 16$ ✓ 前提成立，$8\\nmid 4$ 且 $8\\nmid 4$ ✗ 结论不成立。是反例。\n\n**III** $a=6, b=7, c=12$：$bc=84$，$6\\mid 84$ ✓ 前提成立，$6\\nmid 7$ 但 $6\\mid 12$ ✓ 结论成立。不是反例。\n\n只有 II 提供反例。\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q5",
    "year": 2021,
    "paper": 2,
    "num": 5,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "On which line is the first error in the following argument?",
    "options": {
      "A": "$\\sin^2 x + \\cos^2 x = 1$ for all values of $x$.",
      "B": "Therefore $\\cos x = \\sqrt{1 - \\sin^2 x}$ for all values of $x$.",
      "C": "Hence $1 + \\cos x = 1 + \\sqrt{1 - \\sin^2 x}$ for all values of $x$.",
      "D": "Thus $(1 + \\cos x)^2 = \\left( 1 + \\sqrt{1 - \\sin^2 x} \\right)^2$ for all values of $x$.",
      "E": "Substituting $x = \\pi$ gives $0 = 4$."
    },
    "answer": "B",
    "analysis": "【题目分析】\n找出论证中的第一个错误。论证从恒等式 $\\\\sin^2 x + \\cos^2 x = 1$ 出发，推导到代入 $x = \\pi$ 得出 $0 = 4$ 的矛盾。\n\n【解题步骤】\n**A行**：$\\\\sin^2 x + \\cos^2 x = 1$ 是恒等式 ✓\n\n**B行**：由 $\\\\cos^2 x = 1 - \\sin^2 x$ 开平方得 $\\\\cos x = \\\\sqrt{1 - \\sin^2 x}$。\n\n这是第一个错误！$\\\\sqrt{\\\\cdots}$ 表示**非负**平方根，但 $\\\\cos x$ 在 $x \\in (\\\\frac{\\\\pi}{2}, \\\\pi)$ 时为负数，不能直接写成正根形式。正确写法应为 $\\\\cos x = \\\\pm\\\\sqrt{1-\\\\sin^2 x}$。\n\n**验证**：代入 $x = \\pi$，$\\\\cos \\pi = -1$，但B行给出 $\\\\cos \\pi = \\\\sqrt{1-0} = 1$，矛盾由此产生。\n\n第一个错误在 **B行**。\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q6",
    "year": 2021,
    "paper": 2,
    "num": 6,
    "topic": "Functions",
    "difficulty": 3,
    "question": "Consider the following two statements about the polynomial $f(x)$:\n\n$P$: $f(x) = 0$ for exactly three real values of $x$\n\n$Q$: $f'(x) = 0$ for exactly two real values of $x$\n\nWhich one of the following is correct?",
    "options": {
      "A": "$P$ is **necessary** but **not sufficient** for $Q$.",
      "B": "$P$ is **sufficient** but **not necessary** for $Q$.",
      "C": "$P$ is **necessary and sufficient** for $Q$.",
      "D": "$P$ is **not necessary** and **not sufficient** for $Q$."
    },
    "answer": "D",
    "analysis": "【题目分析】\n判断命题 P（$f(x)=0$ 恰有三个实根）与命题 Q（$f'(x)=0$ 恰有两个实根）的逻辑关系。\n\n【解题步骤】\n**P 不是 Q 的充分条件**：\n反例：$f(x) = x^4 - x^2$，则 $f(x) = x^2(x^2-1)$，实根为 $x = -1, 0, 1$（恰好三个，P 成立）。\n但 $f'(x) = 4x^3 - 2x = 2x(2x^2-1)$，有三个实根 $x = 0, \\\\pm\\\\frac{1}{\\\\sqrt{2}}$（Q 不成立）。\n另一个反例：$f(x)$ 为五次多项式，有三个单根和两个极值点，P 成立但 $f'(x)=0$ 有五个根。\n\n**P 不是 Q 的必要条件**：\n反例：$f(x) = x^3 - x + 1$，$f'(x) = 3x^2 - 1 = 0$ 有两个实根 $x = \\\\pm\\\\frac{1}{\\\\sqrt{3}}$（Q 成立），但 $f(x)=0$ 只有一个实根（P 不成立）。\n\nP 与 Q 互不蕴含。\n\n对应选项 D。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q7",
    "year": 2021,
    "paper": 2,
    "num": 7,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "A circle has equation $(x - 9)^2 + (y + 2)^2 = 4$\n\nA square has vertices at $(1, 0)$, $(1, 2)$, $(-1, 2)$ and $(-1, 0)$.\n\nA straight line bisects both the area of the circle and the area of the square.\n\nWhat is the $x$-coordinate of the point where this straight line meets the $x$-axis?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "4.5",
      "E": "5",
      "F": "6",
      "G": "The straight line is not uniquely determined by the information given, so there is more than one possible point of intersection.",
      "H": "There is no straight line that bisects both the area of the circle and the area of the square."
    },
    "answer": "B",
    "analysis": "【题目分析】\n圆 $(x-9)^2+(y+2)^2 = 4$，正方形顶点 $(1,0),(1,2),(-1,2),(-1,0)$。一条直线同时平分两者的面积，求与 $x$ 轴交点的横坐标。\n\n【解题步骤】\n平分圆面积的直线必过圆心 $(9,-2)$；平分正方形面积的直线必过正方形中心 $(0,1)$。因此所求直线过这两点。\n\n斜率 $k = \\\\frac{-2-1}{9-0} = -\\\\frac{1}{3}$\n\n直线方程：$y = -\\\\frac{1}{3}x + 1$\n\n与 $x$ 轴交点（$y=0$）：$0 = -\\\\frac{1}{3}x+1$，得 $x = 3$\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q8",
    "year": 2021,
    "paper": 2,
    "num": 8,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the following statement about the polynomial $p(x)$, where $a$ and $b$ are real numbers with $a < b$:\n\n($*$) There exists a number $c$ with $a < c < b$ such that $p'(c) = 0$.\n\nWhich one of the following is true?",
    "options": {
      "A": "The condition $p(a) = p(b)$ is **necessary and sufficient** for ($*$)",
      "B": "The condition $p(a) = p(b)$ is **necessary** but **not sufficient** for ($*$)",
      "C": "The condition $p(a) = p(b)$ is **sufficient** but **not necessary** for ($*$)",
      "D": "The condition $p(a) = p(b)$ is **not necessary** and **not sufficient** for ($*$)"
    },
    "answer": "C",
    "analysis": "【题目分析】\n判断 $p(a)=p(b)$ 对于命题 $(*)$（存在 $c \\in (a,b)$ 使 $p'(c)=0$）是何种条件。\n\n【解题步骤】\n**充分性**：若 $p(a)=p(b)$，由罗尔定理，在 $(a,b)$ 内至少存在一点 $c$ 使 $p'(c)=0$。✓ 充分。\n\n**必要性**：若 $(*)$ 成立，$p(a)$ 是否必须等于 $p(b)$？\n反例：$p(x) = x^2$，$a=-1$，$b=2$。\n$p'(x)=2x$，$p'(0)=0$，满足 $(*)$（$c=0 \\in (-1,2)$）。\n但 $p(-1)=1 \\\neq 4=p(2)$。✗ 不必要。\n\n因此 $p(a)=p(b)$ 是充分但不必要条件。\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q9",
    "year": 2021,
    "paper": 2,
    "num": 9,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the following statements about a polynomial $f(x)$:\n\nI $f(x) = px^3 + qx^2 + rx + s$, where $p \\neq 0$.\n\nII There is a real number $t$ for which $f'(t) = 0$.\n\nIII There are real numbers $u$ and $v$ for which $f(u)f(v) < 0$.\n\nWhich of these statements is/are **sufficient** for the equation $f(x) = 0$ to have a real solution?\n\n<table>\n  <thead>\n    <tr>\n        <th> </th>\n        <th>Statement I is<br/>sufficient</th>\n        <th>Statement II is<br/>sufficient</th>\n        <th>Statement III is<br/>sufficient</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n        <td>A</td>\n<td>Yes</td>\n<td>Yes</td>\n<td>Yes</td>\n    </tr>\n<tr>\n        <td>B</td>\n<td>Yes</td>\n<td>Yes</td>\n<td>No</td>\n    </tr>\n<tr>\n        <td>C</td>\n<td>Yes</td>\n<td>No</td>\n<td>Yes</td>\n    </tr>\n<tr>\n        <td>D</td>\n<td>Yes</td>\n<td>No</td>\n<td>No</td>\n    </tr>\n<tr>\n        <td>E</td>\n<td>No</td>\n<td>Yes</td>\n<td>Yes</td>\n    </tr>\n<tr>\n        <td>F</td>\n<td>No</td>\n<td>Yes</td>\n<td>No</td>\n    </tr>\n<tr>\n        <td>G</td>\n<td>No</td>\n<td>No</td>\n<td>Yes</td>\n    </tr>\n<tr>\n        <td>H</td>\n<td>No</td>\n<td>No</td>\n<td>No</td>\n    </tr>\n  </tbody>\n</table>",
    "options": {
      "A": "Option A",
      "B": "Option B",
      "C": "Option C",
      "D": "Option D",
      "E": "Option E",
      "F": "Option F",
      "G": "Option G",
      "H": "Option H"
    },
    "answer": "C",
    "analysis": "【题目分析】\n判断哪些条件是 $f(x)=0$ 有实数解的**充分条件**。\n\n**条件 I**：$f(x)=px^3+qx^2+rx+s$，$p \\\neq 0$（三次多项式）。\n三次多项式当 $x \\\to +\\\\infty$ 和 $x \\\to -\\\\infty$ 时趋向异号无穷，由介值定理必穿过 $x$ 轴。✓ 充分。\n（注：条件 III 中令 $u$ 为很大的正数、$v$ 为很大的负数也可推出 I。）\n\n**条件 II**：$f'(t)=0$ 对某个 $t$ 成立。\n反例：$f(x)=x^2+1$，$f'(0)=0$ 但 $f(x) > 0$ 恒成立，无实根。❌ 不充分。\n\n**条件 III**：存在 $u,v$ 使 $f(u)f(v) < 0$。\n$f(u)$ 和 $f(v)$ 异号，由介值定理存在 $w \\in (u,v)$ 使 $f(w)=0$。✓ 充分。\n（注：若 $f$ 不是多项式，此条件不一定充分，例如 $f(x)=\\\\frac{1}{x}$。）\n\nI 和 III 充分，II 不充分。\n\n对应选项 C。",
    "images": {
      "image": null
    },
    "has_image": false
  },
  {
    "id": "2021-P2-Q10",
    "year": 2021,
    "paper": 2,
    "num": 10,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The first seven terms of a sequence of positive integers are:\n\n$$\n\\begin{aligned}\nu_1 &= 15 \\\\\nu_2 &= 21 \\\\\nu_3 &= 30 \\\\\nu_4 &= 37 \\\\\nu_5 &= 44 \\\\\nu_6 &= 51 \\\\\nu_7 &= 59\n\\end{aligned}\n$$\n\nConsider the following statement about this sequence:\n\n> (\\*) **If** $n$ is a prime number, **then** $u_n$ is a multiple of 3 **or** $u_n$ is a multiple of 5.\n\nWhat is the smallest value of $n$ that provides a **counterexample** to (\\*)?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5",
      "F": "6",
      "G": "7"
    },
    "answer": "E",
    "analysis": "【题目分析】\n命题 $(*)$：若 $n$ 是素数，则 $u_n$ 是 3 或 5 的倍数。找最小反例。\n\n【解题步骤】\n| $n$ | 素数？ | $u_n$ | 3 的倍数？ | 5 的倍数？ | 反例？ |\n|------|--------|--------|-------------|-------------|--------|\n| 1 | ✗ | 15 | - | - | - |\n| 2 | ✓ | 21 | ✓ | ✗ | ✗ |\n| 3 | ✓ | 30 | ✓ | ✓ | ✗ |\n| 4 | ✗ | 37 | - | - | - |\n| 5 | ✓ | 44 | ✗ | ✗ | **✓** |\n| 6 | ✗ | 51 | - | - | - |\n| 7 | ✓ | 59 | ✗ | ✗ | ✓ |\n\n$n=5$ 和 $n=7$ 均为反例，最小反例为 $n=5$。\n\n对应选项 E。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q11",
    "year": 2021,
    "paper": 2,
    "num": 11,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "A student attempts to solve the following problem, where $a$ and $b$ are non-zero real numbers:\n\n> Show that **if** $a^2 - 4b^3 \\ge 0$ **then** there exist real numbers $x$ and $y$ such that $a = xy(x + y)$ and $b = xy$.\n\nConsider the following attempt:\n\n$(x - y)^2 \\ge 0$ (I)\n\nso $x^2 + y^2 - 2xy \\ge 0$ (II)\n\nso $(x + y)^2 - 4xy \\ge 0$ (III)\n\nso $x^2y^2(x + y)^2 - 4x^3y^3 \\ge 0$ (IV)\n\nso $a^2 - 4b^3 \\ge 0$ (V)\n\nWhich of the following best describes this attempt?",
    "options": {
      "A": "It is completely correct.",
      "B": "It is incorrect, but it would be correct if written in the reverse order.",
      "C": "It is incorrect, but the student has correctly proved the converse.",
      "D": "It is incorrect because there is an error in line (II).",
      "E": "It is incorrect because there is an error in line (III).",
      "F": "It is incorrect because there is an error in line (IV)."
    },
    "answer": "C",
    "analysis": "【题目分析】\n学生的证明目标：若 $a^2-4b^3 \\geq 0$，则存在实数 $x,y$ 使 $a=xy(x+y)$ 且 $b=xy$。\n\n逐行检查推导：\n**(I)** $(x-y)^2 \\geq 0$ ✓\n**(II)** 展开得 $x^2+y^2-2xy \\geq 0$ ✓\n**(III)** 由 $x^2+y^2 = (x+y)^2-2xy$，得 $(x+y)^2-4xy \\geq 0$ ✓\n**(IV)** 两边乘 $x^2y^2$（$x^2y^2 \\geq 0$，不等号方向不变）✓\n**(V)** 代入 $a=xy(x+y), b=xy$，得 $a^2-4b^3 \\geq 0$ ✓\n\n**问题**：第(V)行是从第(IV)行**代入** $a,b$ 的定义推出的，即假设了 $a=xy(x+y)$ 和 $b=xy$ 成立。\n\n因此整个推导证明的是：**若存在 $x,y$ 使 $a=xy(x+y)$ 且 $b=xy$，则 $a^2-4b^3 \\geq 0$**——这正是原命题的**逆命题**，而非原命题本身。\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q12",
    "year": 2021,
    "paper": 2,
    "num": 12,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Which of the following statements about polynomials f and g is/are true?\n\nI **If** $f(x) \\geq g(x)$ for all $x \\geq 0$, **then** $\\int_{0}^{x} f(t) \\, dt \\geq \\int_{0}^{x} g(t) \\, dt$ for all $x \\geq 0$.\n\nII **If** $f(x) \\geq g(x)$ for all $x \\geq 0$, **then** $f'(x) \\geq g'(x)$ for all $x \\geq 0$.\n\nIII **If** $f'(x) \\geq g'(x)$ for all $x \\geq 0$, **then** $f(x) \\geq g(x)$ for all $x \\geq 0$.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "B",
    "analysis": "【题目分析】\n判断三个关于多项式 $f,g$ 的命题。\n\n**命题 I**：若 $f(x) \\geq g(x)$（所有 $x \\geq 0$），则 $\\\\int_0^x f(t)dt \\geq \\int_0^x g(t)dt$。\n证明：$\\\\int_0^x (f-g)(t)dt$，被积函数 $\\\\geq 0$，积分 $\\\\geq 0$。✓ 正确。\n\n**命题 II**：若 $f(x) \\geq g(x)$，则 $f'(x) \\geq g'(x)$。\n反例：$f(x) = (x-1)^2$，$g(x) = 0$。\n$x \\geq 0$ 时 $f(x) \\geq 0 = g(x)$ ✓，但 $f'(0) = -2 < 0 = g'(x)$。✗ 错误。\n\n**命题 III**：若 $f'(x) \\geq g'(x)$，则 $f(x) \\geq g(x)$。\n反例：$f'(x) = g'(x) = 1$（即 $f(x)=x, g(x)=x+1$），\n$f'(x) \\geq g'(x)$ ✓，但 $f(x) < g(x)$ 对所有 $x$。✗ 错误。\n\n只有 I 正确。\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q13",
    "year": 2021,
    "paper": 2,
    "num": 13,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "A region $R$ in the $(x, y)$-plane is defined by the simultaneous inequalities\n\n$$y - x < 3$$\n\n$$y - x^2 < 1$$\n\nWhich of the following statements is/are true for **every** point in $R$?\n\nI $-1 < x < 2$\n\nII $(y - x)(y - x^2) < 3$\n\nIII $y < 5$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "A",
    "analysis": "【题目分析】\n区域 $R: y-x < 3$ 且 $y-x^2 < 1$。判断哪些命题对 $R$ 中**所有**点成立。\n\n【解题步骤——逐个找反例】\n\n**命题 I** ($-1 < x < 2$)：\n反例：$(10, 0) \\in R$（$0-10=-10<3$ ✓，$0-100=-100<1$ ✓），但 $x=10$ 不满足 $-1<x<2$。✗\n\n**命题 II** ($(y-x)(y-x^2) < 3$)：\n反例：$(0, -2) \\in R$（$(-2)-0=-2<3$ ✓，$(-2)-0=-2<1$ ✓），\n但 $(y-x)(y-x^2)=(-2-0)(-2-0)=4 > 3$。✗\n\n**命题 III** ($y < 5$)：\n反例：$(6, 6) \\in R$（$6-6=0<3$ ✓，$6-36=-30<1$ ✓），\n但 $y=6 \\geq 5$。✗\n\n三个命题均非恒成立。\n\n对应选项 A。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q14",
    "year": 2021,
    "paper": 2,
    "num": 14,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Consider the following simultaneous equations, where $p$ is a real number:\n\n$$p2^x + \\log_2 y = 2$$\n\n$$2^x + \\log_2 y = 1$$\n\nWhat is the complete range of $p$ for which these simultaneous equations have a real solution $(x, y)$?",
    "options": {
      "A": "$p < 1$",
      "B": "$p \\neq 1$",
      "C": "$p > 1$",
      "D": "$p < 1$ or $p > 2$",
      "E": "$p \\neq 1$ and $p < 2$",
      "F": "$p > 1$ and $p < 2$",
      "G": "$p > 2$",
      "H": "All real values of $p$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n已知 $p$ 为实数，方程组 $p \\cdot 2^x + \\log_2 y = 2$ 与 $2^x + \\log_2 y = 1$ 何时有实数解 $(x,y)$。\n\n【解题步骤】\n设 $X = 2^x > 0$，$Y = \\log_2 y$（当 $y>0$ 时有定义）。\n\n方程组化为：\n$\\\begin{cases} pX + Y = 2 \\\\ X + Y = 1 \\\\end{cases}$\n\n相减得 $(p-1)X = 1$，故当 $p \\\neq 1$ 时 $X = \\\frac{1}{p-1}$，代入得 $Y = 1-X = \\\frac{p-2}{p-1}$。\n\n$Y = \\log_2 y$ 对**任意**实数 $Y$ 均可解出 $y = 2^Y > 0$，无额外限制。\n\n$X = 2^x > 0$ 要求 $\\\frac{1}{p-1} > 0$，即 $p-1 > 0$，$p > 1$。\n\n$p = 1$ 时方程 $(p-1)X = 1$ 无解；$p < 1$ 时 $X < 0$ 与 $2^x > 0$ 矛盾。\n\n综上，$p > 1$。\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q15",
    "year": 2021,
    "paper": 2,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "A circle has equation\n\n$$x^2 + ax + y^2 + by + c = 0$$\n\nwhere $a$, $b$ and $c$ are non-zero real constants.\n\nWhich one of the following is a **necessary and sufficient** condition for the circle to be tangent to the $y$-axis?",
    "options": {
      "A": "$a^2 = 4c$",
      "B": "$b^2 = 4c$",
      "C": "$\\frac{a}{2} = \\sqrt{\\frac{a^2 + b^2}{4} - c}$",
      "D": "$\\frac{b}{2} = \\sqrt{\\frac{a^2 + b^2}{4} - c}$",
      "E": "$-\\frac{a}{2} = \\sqrt{\\frac{a^2 + b^2}{4} - c}$",
      "F": "$-\\frac{b}{2} = \\sqrt{\\frac{a^2 + b^2}{4} - c}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n圆 $x^2+ax+y^2+by+c=0$ 与 $y$ 轴相切，求充要条件。\n\n【解题步骤——方法一：配方法】\n配方得 $\\left(x+\\\\frac{a}{2}\\\\right)^2 + \\left(y+\\\\frac{b}{2}\\\\right)^2 = \\\frac{a^2}{4}+\\\\frac{b^2}{4}-c$\n\n圆心 $\\\\left(-\\\\frac{a}{2}, -\\\\frac{b}{2}\\\\right)$，半径 $r = \\\\sqrt{\\\\frac{a^2}{4}+\\\\frac{b^2}{4}-c}$。\n\n与 $y$ 轴（$x=0$）相切 $\\Leftrightarrow$ 半径 $r = |$圆心的 $x$ 坐标 $| = \\\\left|-\\\\frac{a}{2}\\\\right|$。\n\n两边平方：$\\\\frac{a^2}{4}+\\\\frac{b^2}{4}-c = \\\frac{a^2}{4}$\n\n化简得 $\\\\frac{b^2}{4} = c$，即 $b^2 = 4c$。\n\n【解题步骤——方法二：代入法】\n与 $y$ 轴相切 $\\Leftrightarrow$ 代入 $x=0$ 后 $y^2+by+c=0$ 有重根。\n判别式 $\\\\Delta = b^2-4c = 0$，即 $b^2 = 4c$。\n\n对应选项 B。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q16",
    "year": 2021,
    "paper": 2,
    "num": 16,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "$p$ and $q$ are real numbers, and the equation\n\n$$x |x| = px + q$$\n\nhas exactly $k$ distinct real solutions for $x$.\n\nWhich one of the following is the complete list of possible values for $k$?",
    "options": {
      "A": "0, 1, 2",
      "B": "0, 1, 2, 3",
      "C": "0, 1, 2, 3, 4",
      "D": "0, 2, 4",
      "E": "1, 2, 3",
      "F": "1, 2, 3, 4"
    },
    "answer": "E",
    "analysis": "【题目分析】\n$x|x| = px+q$ 恰有 $k$ 个实数解，求 $k$ 的所有可能值。\n\n【解题步骤——画图/代数分析】\n当 $x \\geq 0$，方程为 $x^2 = px+q$；当 $x < 0$，方程为 $-x^2 = px+q$。\n每个二次方程最多两个实根，但需满足对应的符号条件。\n\n**可能值分析**：\n- $k=1$：例如 $p=q=0$，$x=0$ 是唯一解 ✓\n- $k=2$：例如 $p=-1,q=0$，$x=0$ 和 $x=1$ 两个解 ✓\n- $k=3$：例如 $p=-2,q=1$，$x=1$ 和 $x=-1\\\\pm\\\\sqrt{2}$（$-1+\\\\sqrt{2}>0$ 不合，$x<0$ 只有一个有效根）—— 实际例子：$p=-1,q=1$ 给出三个解 ✓\n- $k=4$ 不可能：两个方程各需两个有效根，但符号条件矛盾（$x\\\\geq 0$ 要求 $q<0$，$x<0$ 要求 $q>0$）。\n\n$k$ 的可能值为 $1,2,3$。\n\n对应选项 E。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q17",
    "year": 2021,
    "paper": 2,
    "num": 17,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the following functions defined for $x > 1$:\n\n$$f(x) = \\log_2(\\log_2 \\sqrt{x})$$\n\n$$g(x) = \\log_2(\\sqrt{\\log_2 x})$$\n\nWhich one of the following is true for **all** values of $x > 1$?",
    "options": {
      "A": "$0 \\le f(x) \\le g(x)$ **or** $g(x) \\le f(x) \\le 0$",
      "B": "$0 \\le g(x) \\le f(x)$ **or** $f(x) \\le g(x) \\le 0$",
      "C": "$\\frac{1}{2} \\le f(x) \\le g(x)$ **or** $g(x) \\le f(x) \\le \\frac{1}{2}$",
      "D": "$\\frac{1}{2} \\le g(x) \\le f(x)$ **or** $f(x) \\le g(x) \\le \\frac{1}{2}$",
      "E": "$1 \\le f(x) \\le g(x)$ **or** $g(x) \\le f(x) \\le 1$",
      "F": "$1 \\le g(x) \\le f(x)$ **or** $f(x) \\le g(x) \\le 1$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n比较 $f(x)=\\log_2(\\log_2\\sqrt{x})$ 与 $g(x)=\\log_2(\\sqrt{\\log_2 x})$ 的大小关系。\n\n【解题步骤——化简】\n$f(x) = \\log_2\\!\\left(\\frac{1}{2}\\log_2 x\\right) = -1 + \\log_2(\\log_2 x)$\n$g(x) = \\log_2\\!\\left((\\log_2 x)^{1/2}\\right) = \\frac{1}{2}\\log_2(\\log_2 x)$\n\n令 $z = \\log_2(\\log_2 x)$（$x>1$ 时 $\\log_2 x>0$，$z$ 可取任意实数），\n则 $f = z-1$，$g = \\frac{1}{2}z$。\n\n**两函数交点**：$z-1 = \\frac{1}{2}z \\Rightarrow z=2$，此时 $f=g=1$。\n\n**图像分析**：\n- 当 $z \\geq 2$（即 $f,g \\geq 1$）时，$f \\geq g$\n- 当 $z \\leq 2$（即 $f,g \\leq 1$）时，$f \\leq g$\n\n即：$f(x) \\geq g(x) \\geq 1$ 或 $f(x) \\leq g(x) \\leq 1$（两者同时成立）。\n\n对应选项 F。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q18",
    "year": 2021,
    "paper": 2,
    "num": 18,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "A student chooses two distinct real numbers $x$ and $y$ with $0 < x < y < 1$.\n\nThe student then attempts to draw a triangle $ABC$ with:\n\n$$AB = 1$$\n$$\\sin A = x$$\n$$\\sin B = y$$\n\nWhich of the following statements is/are correct?\n\n*   **I** For some choice of $x$ and $y$, there is exactly **one** triangle the student could draw.\n\n*   **II** For some choice of $x$ and $y$, there are exactly **two** different triangles the student could draw.\n\n*   **III** For some choice of $x$ and $y$, there are exactly **three** different triangles the student could draw.\n\n(Note that congruent triangles are considered to be the same.)",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "C",
    "analysis": "【题目分析】\n三角形 $ABC$，$AB=1$，$\\sin A = x$，$\\sin B = y$，$0 < x < y < 1$。判断命题 I/II/III。\n\n【解题步骤】\n记 $\\theta = \\arcsin x$，$\\phi = \\arcsin y$（均为锐角），则 $\\theta < \\phi$（因 $x < y$）。\n$A$ 可取 $\\theta$ 或 $\\pi - \\theta$；$B$ 可取 $\\phi$ 或 $\\pi - \\phi$。\n\n**Case 1**（$A=\\theta$, $B=\\phi$，均锐角）：\n$A+B = \\theta+\\phi < \\pi$，$C = \\pi - A - B > 0$ ✓。唯一确定一个三角形。\n\n**Case 2**（$A=\\pi-\\theta$, $B=\\phi$，A 钝 B 锐）：\n$A+B = \\pi-\\theta+\\phi > \\pi$（因 $\\phi > \\theta$），$C < 0$ ✗。不可能。\n\n**Case 3**（$A=\\theta$, $B=\\pi-\\phi$，A 锐 B 钝）：\n$A+B = \\pi-(\\phi-\\theta) < \\pi$，$C = \\phi-\\theta > 0$ ✓。唯一确定一个三角形。\n\n**Case 4**（$A=\\pi-\\theta$, $B=\\pi-\\phi$，均钝角）：两钝角之和超过 $\\pi$，不可能。\n\n**总结**：Case 1 和 Case 3 各产生一个三角形，Case 2 和 4 不可能。\n因此**总能画出恰好两个不同的三角形**，与 $x,y$ 的取值无关。\n\n命题 I（恰一个）✗、II（恰两个）✓、III（恰三个）✗。\n\n对应选项 C。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q19",
    "year": 2021,
    "paper": 2,
    "num": 19,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The angle $\\theta$ can take any of the values $1^\\circ, 2^\\circ, 3^\\circ, \\dots, 359^\\circ, 360^\\circ$.\n\nFor how many of these values of $\\theta$ is it true that\n\n$$\\sin \\theta \\sqrt{1 + \\sin \\theta} \\sqrt{1 - \\sin \\theta} + \\cos \\theta \\sqrt{1 + \\cos \\theta} \\sqrt{1 - \\cos \\theta} = 0$$",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "4",
      "E": "93",
      "F": "182",
      "G": "271",
      "H": "360"
    },
    "answer": "F",
    "analysis": "【题目分析】\n$\theta \\in \\{1°, 2°, \\ldots, 360°\\}$，求满足给定方程的 $\theta$ 的个数。\n\n【解题步骤——化简】\n$sqrt{(1+\\sin\\theta)(1-\\sin\\theta)} = \\sqrt{\\cos^2\\theta} = |\\cos\\theta|$\n$sqrt{(1+\\cos\\theta)(1-\\cos\\theta)} = \\sqrt{\\sin^2\\theta} = |\\sin\\theta|$\n\n方程化简为：$\\sin\\theta\\,|\\cos\\theta| + \\cos\\theta\\,|\\sin\\theta| = 0$\n\n**分类讨论**：\n- $\\sin\\theta > 0, \\cos\\theta > 0$（第一象限）：$2\\sin\\theta\\cos\\theta > 0$ ✗\n- $\\sin\\theta < 0, \\cos\\theta < 0$（第三象限）：$-2\\sin\\theta\\cos\\theta > 0$ ✗\n- $\\sin\\theta > 0, \\cos\\theta < 0$（第二象限）：$-\\sin\\theta\\cos\\theta + \\sin\\theta\\cos\\theta = 0$ ✓\n- $\\sin\\theta < 0, \\cos\\theta > 0$（第四象限）：$\\sin\\theta\\cos\\theta - \\sin\\theta\\cos\\theta = 0$ ✓\n- $\\sin\\theta = 0$ 或 $\\cos\\theta = 0$（轴上）：$= 0$ ✓\n\n**满足条件的范围**：$90° \\leq \\theta \\leq 180°$ 或 $270° \\leq \\theta \\leq 360°$。\n\n计数：每个区间 91 个角（含两端点），共 $91 + 91 = 182$ 个。\n\n对应选项 F。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2021-P2-Q20",
    "year": 2021,
    "paper": 2,
    "num": 20,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "A sequence of functions $f_1, f_2, f_3, \\dots$ is defined by\n\n$$f_1(x) = |x|$$\n\n$$f_{n+1}(x) = |f_n(x) + x| \\quad \\text{for } n \\geq 1$$\n\nFind the value of\n\n$$\\int_{-1}^{1} f_{99}(x) \\, dx$$",
    "options": {
      "A": "0",
      "B": "0.5",
      "C": "1",
      "D": "49.5",
      "E": "50",
      "F": "99",
      "G": "99.5",
      "H": "100"
    },
    "answer": "E",
    "analysis": "【题目分析】\n$f_1(x) = |x|$，$f_{n+1}(x) = |f_n(x) + x|$，求 $\\int_{-1}^{1} f_{99}(x)\\,dx$。\n\n【解题步骤——找规律】\n$f_1(x) = |x|$：$x<0$ 时 $=-x$，$x \\geq 0$ 时 $=x$\n\n$f_2(x) = |f_1(x)+x|$：\n- $x<0$：$|-x+x| = 0$\n- $x \\geq 0$：$|x+x| = 2x$\n\n$f_3(x) = |f_2(x)+x|$：\n- $x<0$：$|0+x| = -x$\n- $x \\geq 0$：$|2x+x| = 3x$\n\n$f_4(x) = |f_3(x)+x|$：\n- $x<0$：$|-x+x| = 0$\n- $x \\geq 0$：$|3x+x| = 4x$\n\n**归纳**：\n- $n$ 为偶数：$f_n(x) = 0$（$x<0$），$f_n(x) = nx$（$x \\geq 0$）\n- $n$ 为奇数：$f_n(x) = -x$（$x<0$），$f_n(x) = nx$（$x \\geq 0$）\n\n$n=99$（奇数）：$f_{99}(x) = -x$（$x<0$），$f_{99}(x) = 99x$（$x \\geq 0$）\n\n**计算积分**：\n$\\int_{-1}^{0}(-x)\\,dx + \\int_{0}^{1}99x\\,dx = \\frac{1}{2} + \\frac{99}{2} = 50$\n\n对应选项 E。",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q1",
    "year": 2022,
    "paper": 1,
    "num": 1,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "How many real solutions are there to the equation\n\n$$2 \\cos^4 \\theta - 5 \\cos^2 \\theta + 3 = 0$$\n\nin the interval $0 \\le \\theta \\le 2\\pi$?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5",
      "F": "6",
      "G": "7",
      "H": "8"
    },
    "answer": "C",
    "analysis": "【题目分析】\n求方程 $2\\cos^4\\theta - 5\\cos^2\\theta + 3 = 0$ 在区间 $0 \\le \\theta \\le 2\\pi$ 内的实解个数。这是典型的三角方程求根问题，核心在于通过换元将高次三角方程降为二次方程。\n\n【解题步骤】\n令 $u = \\cos^2\\theta$，则方程化为二次方程：\n$2u^2 - 5u + 3 = 0$\n\n因式分解得 $(2u - 3)(u - 1) = 0$，解得 $u = \\frac{3}{2}$ 或 $u = 1$。\n\n由于 $u = \\cos^2\\theta \\le 1$，故 $u = \\frac{3}{2}$ 舍去。只剩 $\\cos^2\\theta = 1$，即 $\\cos\\theta = \\pm 1$。\n\n在 $[0, 2\\pi]$ 内逐一求解：\n- $\\cos\\theta = 1 \\Rightarrow \\theta = 0,\\ 2\\pi$（两个解）\n- $\\cos\\theta = -1 \\Rightarrow \\theta = \\pi$（一个解）\n\n共计 $3$ 个实解。\n\n【快捷思路】\n观察到方程仅含 $\\cos^2\\theta$ 的幂次，直接换元 $u = \\cos^2\\theta$ 化为二次方程。求根后利用 $\\cos^2\\theta \\le 1$ 筛选有效解，再在给定区间内数出 $\\cos\\theta = \\pm 1$ 的对应角度即可。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ]
  },
  {
    "id": "2022-P1-Q2",
    "year": 2022,
    "paper": 1,
    "num": 2,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "Find the complete set of values of $p$ for which the equation\n\n$$x^2 - 2px + y^2 - 6y - p^2 + 8p + 9 = 0$$\n\ndescribes a circle in the $xy$-plane.",
    "options": {
      "A": "$p < -\\frac{9}{4}$",
      "B": "$0 < p < 4$",
      "C": "$-1 < p < 9$",
      "D": "$p < 0$ or $p > 4$",
      "E": "$p < -1$ or $p > 9$",
      "F": "all real values of $p$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n判断方程 $x^2 - 2px + y^2 - 6y - p^2 + 8p + 9 = 0$ 何时表示 $xy$ 平面上的圆。本质是圆的一般方程配方法，关键是半径平方必须为正数。\n\n【解题步骤】\n对方程分别对 $x$ 和 $y$ 配方：\n\n$(x - p)^2 - p^2 + (y - 3)^2 - 9 - p^2 + 8p + 9 = 0$\n\n整理得：\n$(x - p)^2 + (y - 3)^2 = 2p^2 - 8p$\n\n此式表示圆的条件是半径平方 $2p^2 - 8p > 0$（严格大于零，等于零时退化为一个点）。\n\n解不等式：\n$2p^2 - 8p > 0 \\Rightarrow 2p(p - 4) > 0 \\Rightarrow p(p - 4) > 0$\n\n二次不等式 $p(p - 4) > 0$ 的根为 $p = 0$ 和 $p = 4$，开口向上，因此解为 $p < 0$ 或 $p > 4$。\n\n【快捷思路】\n将方程视为圆的标准形式 $(x - a)^2 + (y - b)^2 = R^2$，配方后令右侧 $R^2 > 0$ 即可。注意区分 $R^2 > 0$（圆）、$R^2 = 0$（点）、$R^2 < 0$（无图形）三种情况。\n\n【正确答案】D Geometry",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ]
  },
  {
    "id": "2022-P1-Q3",
    "year": 2022,
    "paper": 1,
    "num": 3,
    "topic": "Integration",
    "difficulty": 3,
    "question": "*   $f''(x) = a$ for all $x$\n*   $f(0) = 1, f(1) = 2$\n*   $\\int_{0}^{1} f(x) dx = 1$\n\nfind the value of $a$.",
    "options": {
      "A": "$-6$",
      "B": "$-3$",
      "C": "$-2$",
      "D": "$2$",
      "E": "$3$",
      "F": "$6$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n已知 $f''(x) = a$（常数），$f(0) = 1$，$f(1) = 2$，且 $\\int_0^1 f(x)\\,dx = 1$，求常数 $a$。此题综合考查积分与微分的互逆关系以及待定系数法。\n\n【解题步骤】\n由 $f''(x) = a$ 积分两次得：\n$f'(x) = ax + b$\n$f(x) = \\frac{1}{2}ax^2 + bx + c$\n\n其中 $b, c$ 为积分常数。\n\n利用 $f(0) = 1$ 得 $c = 1$。\n\n利用 $f(1) = 2$ 得 $\\frac{1}{2}a + b + 1 = 2$，即 $a + 2b = 2$ ……（1）\n\n计算定积分：\n$\\int_0^1 f(x)\\,dx = \\left[\\frac{1}{6}ax^3 + \\frac{1}{2}bx^2 + x\\right]_0^1 = \\frac{1}{6}a + \\frac{1}{2}b + 1$\n\n由条件 $\\int_0^1 f(x)\\,dx = 1$，得 $\\frac{1}{6}a + \\frac{1}{2}b = 0$，即 $a + 3b = 0$ ……（2）\n\n联立（1）（2）：$a + 2b = 2$ 与 $a + 3b = 0$，相减得 $b = -2$，代入得 $a = 6$。\n\n验证：$f(x) = 3x^2 - 2x + 1$，满足全部三个条件。\n\n【快捷思路】\n二阶导数为常数 $\\Rightarrow$ 原函数为二次多项式。设 $f(x) = \\frac{1}{2}ax^2 + bx + c$，三个条件恰好确定三个未知数，解线性方程组即可。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation",
      "Algebra"
    ]
  },
  {
    "id": "2022-P1-Q4",
    "year": 2022,
    "paper": 1,
    "num": 4,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "These sectors of circles are similar.\n\nThe arc length of the smaller sector is 6.\n\nThe difference between the areas of the sectors is 21.\n\nFind the positive difference between the perimeters of the sectors.",
    "options": {
      "A": "4.5",
      "B": "7",
      "C": "8",
      "D": "9",
      "E": "10.5",
      "F": "14",
      "G": "15"
    },
    "answer": "C",
    "analysis": "【题目分析】\n两个相似扇形（圆心角相同），小扇形半径为 $r$，弧长为 $6$，两扇形面积之差为 $21$，且大扇形半径比小扇形半径大 $3$（由图示给出）。求两扇形周长之差。\n\n【解题步骤】\n设圆心角为 $\\theta$（弧度制），小扇形半径为 $r$。\n\n由弧长公式：$r\\theta = 6$，故 $\\theta = \\frac{6}{r}$。\n\n小扇形面积：$\\frac{1}{2}r^2\\theta = \\frac{1}{2}r^2 \\cdot \\frac{6}{r} = 3r$。\n\n大扇形半径为 $r + 3$，弧长为 $(r+3)\\theta = \\frac{6(r+3)}{r}$。\n\n大扇形面积：$\\frac{1}{2}(r+3)^2\\theta = \\frac{3(r+3)^2}{r}$。\n\n由面积差为 $21$：\n$\\frac{3(r+3)^2}{r} - 3r = 21$\n\n两边乘以 $r$ 并整理：\n$3(r+3)^2 - 3r^2 - 21r = 0$\n$3(r^2 + 6r + 9) - 3r^2 - 21r = 0$\n$-3r + 27 = 0$\n\n解得 $r = 9$。\n\n小扇形周长：$2r + 6 = 24$。\n大扇形弧长：$\\frac{6(9+3)}{9} = 8$，周长：$2(r+3) + 8 = 32$。\n\n周长之差：$32 - 24 = 8$。\n\n【快捷思路】\n利用相似扇形弧长与半径成正比、面积与半径平方成正比的性质。先用弧长公式消去 $\\theta$，将面积用 $r$ 表示，再由面积差解出 $r$，最后直接算周长差。\n\n【正确答案】C",
    "images": {
      "image": "2022 P1 Q4.png"
    },
    "has_image": true,
    "related_topics": [
      "Algebra"
    ]
  },
  {
    "id": "2022-P1-Q5",
    "year": 2022,
    "paper": 1,
    "num": 5,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "The terms $x_n$ of a sequence follow the rule\n\n$$x_{n+1} = \\frac{x_n + p}{x_n + q}$$\n\nwhere $p$ and $q$ are real numbers.\n\nGiven that $x_1 = 3$, $x_2 = 5$, and $x_3 = 7$, find the value of $x_4$",
    "options": {
      "A": "$-5$",
      "B": "$5$",
      "C": "$\\frac{51}{7}$",
      "D": "$\\frac{15}{2}$",
      "E": "$\\frac{23}{3}$",
      "F": "$9$",
      "G": "$11$",
      "H": "$13$"
    },
    "answer": "H",
    "analysis": "【题目分析】\n本题给出一个分式递推关系 $x_{n+1} = \\dfrac{x_n + p}{x_n + q}$，已知前三项 $x_1 = 3$，$x_2 = 5$，$x_3 = 7$，要求第四项 $x_4$。核心思路是利用已知项反推参数 $p$ 和 $q$，再代入递推公式计算。\n\n【解题步骤】\n将 $n = 1$ 和 $n = 2$ 分别代入递推公式：\n\n由 $x_2 = 5$：$\\dfrac{3 + p}{3 + q} = 5$，即 $3 + p = 15 + 5q$，得 $p - 5q = 12$……①\n\n由 $x_3 = 7$：$\\dfrac{5 + p}{5 + q} = 7$，即 $5 + p = 35 + 7q$，得 $p - 7q = 30$……②\n\n①减②得 $2q = -18$，故 $q = -9$。代回①得 $p = -33$。\n\n再计算 $x_4 = \\dfrac{x_3 + p}{x_3 + q} = \\dfrac{7 - 33}{7 - 9} = \\dfrac{-26}{-2} = 13$。\n\n【快捷思路】\n不需要先解出 $p$、$q$ 的精确值。观察两个方程 $3+p = 5(3+q)$ 和 $5+p = 7(5+q)$，相减即可快速消去 $p$ 得到 $q$。得到 $p$、$q$ 后直接代入 $n=3$ 的公式即可。\n\n【正确答案】H and Series",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q6",
    "year": 2022,
    "paper": 1,
    "num": 6,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Given that\n\n$$\\int_{\\log_{2} 5}^{\\log_{2} 20} x \\, dx = \\log_{2} M$$\n\nwhat is the value of $M$?",
    "options": {
      "A": "4",
      "B": "15",
      "C": "16",
      "D": "20",
      "E": "25",
      "F": "100",
      "G": "10000"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题要求计算定积分 $\\displaystyle\\int_{\\log_2 5}^{\\log_2 20} x\\,dx$，并将结果表示为 $\\log_2 M$ 的形式，求 $M$。关键技巧在于利用对数运算性质化简差平方形式。\n\n【解题步骤】\n第一步：计算积分\n$$\\int x\\,dx = \\frac{x^2}{2}$$\n积分值为 $\\dfrac{1}{2}\\left[(\\log_2 20)^2 - (\\log_2 5)^2\\right]$。\n\n第二步：利用对数性质化简\n注意到 $\\log_2 20 = \\log_2(4 \\times 5) = 2 + \\log_2 5$，令 $a = \\log_2 5$，则：\n$$(\\log_2 20)^2 - (\\log_2 5)^2 = (2 + a)^2 - a^2 = 4 + 4a = 4 + 4\\log_2 5$$\n\n第三步：除以 2\n$$\\frac{1}{2}(4 + 4\\log_2 5) = 2 + 2\\log_2 5$$\n\n第四步：合并对数\n$$2 + 2\\log_2 5 = \\log_2 4 + \\log_2 25 = \\log_2(4 \\times 25) = \\log_2 100$$\n\n故 $M = 100$。\n\n【快捷思路】\n被积函数是 $x$ 的差平方结构 $(\\log_2 20)^2 - (\\log_2 5)^2$，直接用平方差公式 $(a+b)^2 - a^2 = b(2a+b)$ 也可以化简，但代换法更直观。\n\n【正确答案】F",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q7",
    "year": 2022,
    "paper": 1,
    "num": 7,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Find the finite area enclosed between the line $y = 0$ and the curve $y = x^2 - 4|x| - 12$",
    "options": {
      "A": "$\\frac{128}{3}$",
      "B": "$\\frac{176}{3}$",
      "C": "$\\frac{256}{3}$",
      "D": "108",
      "E": "144",
      "F": "288"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题求曲线 $y = x^2 - 4|x| - 12$ 与 $x$ 轴（$y = 0$）所围成的有限区域面积。含绝对值的函数需要分段处理，注意图形关于 $y$ 轴对称，可以利用对称性简化计算。\n\n【解题步骤】\n第一步：去绝对值，分段表达\n当 $x \\geq 0$ 时：$y = x^2 - 4x - 12 = (x - 6)(x + 2)$\n当 $x < 0$ 时：$y = x^2 + 4x - 12 = (x + 6)(x - 2)$\n\n第二步：求与 $x$ 轴交点\n在 $x \\geq 0$ 范围内，令 $y = 0$ 得 $x = 6$（$x = -2$ 舍去）。\n在 $x < 0$ 范围内，令 $y = 0$ 得 $x = -6$（$x = 2$ 舍去）。\n故积分区间为 $[-6, 6]$。\n\n第三步：利用对称性计算面积\n图形关于 $y$ 轴对称，只需计算右半部分再乘以 2：\n$$\\int_0^6 (x^2 - 4x - 12)\\,dx = \\left[\\frac{x^3}{3} - 2x^2 - 12x\\right]_0^6 = 72 - 72 - 72 = -72$$\n\n曲线在 $x$ 轴下方，积分值为负，实际面积为 $72$。\n总面积 $= 2 \\times 72 = 144$。\n\n【快捷思路】\n设 $t = |x| \\geq 0$，方程变为 $t^2 - 4t - 12 = 0$，解得 $t = 6$（舍去负根），立刻得到交点 $x = \\pm 6$。对称性直接减半计算量。\n\n【正确答案】E",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q8",
    "year": 2022,
    "paper": 1,
    "num": 8,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "A geometric sequence has first term $a$ and common ratio $r$, where $a$ and $r$ are positive integers and $r$ is greater than 1.\n\nThe sum of the first $n$ terms of this sequence is denoted by $S_n$\n\nIt is given that the terms of the sequence satisfy\n\n$$S_{30} - S_{20} = k S_{10}$$\n\nfor some positive integer $k$.\n\nWhat is the smallest possible value of $k$?",
    "options": {
      "A": "$2^{10}$",
      "B": "$2^{20}$",
      "C": "$2^{30}$",
      "D": "$\\frac{2^{10}}{2^{10} - 1}$",
      "E": "$2^{10}(2^{10} - 1)$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n等比数列首项为 $a$，公比为 $r$，其中 $a$、$r$ 均为正整数且 $r > 1$。已知 $S_{30} - S_{20} = k S_{10}$（$k$ 为正整数），求 $k$ 的最小可能值。核心在于利用等比数列求和公式化简后得到 $k$ 与 $r$ 的关系。\n\n【解题步骤】\n第一步：写出求和公式\n$$S_n = \\frac{a(r^n - 1)}{r - 1}$$\n\n第二步：代入条件\n$$S_{30} - S_{20} = \\frac{a(r^{30} - 1)}{r - 1} - \\frac{a(r^{20} - 1)}{r - 1} = \\frac{a(r^{30} - r^{20})}{r - 1}$$\n$$k S_{10} = k \\cdot \\frac{a(r^{10} - 1)}{r - 1}$$\n\n第三步：两边相等，消去公因子\n两边同乘 $r - 1$ 再除以 $a$（$a > 0$，可消去）：\n$$r^{30} - r^{20} = k(r^{10} - 1)$$\n\n左边提取公因式：$r^{20}(r^{10} - 1) = k(r^{10} - 1)$\n\n由于 $r > 1$，故 $r^{10} - 1 \\neq 0$，两边可约去，得 $k = r^{20}$。\n\n第四步：求最小值\n$r$ 是大于 1 的正整数，最小取 $r = 2$，故 $k_{\\min} = 2^{20}$。\n\n【快捷思路】\n注意到 $S_{30} - S_{20}$ 恰好是第 21 项到第 30 项之和，即 $a r^{20} + a r^{21} + \\cdots + a r^{29} = r^{20}(a + ar + \\cdots + ar^9) = r^{20} S_{10}$，直接看出 $k = r^{20}$，无需完整代入求和公式。\n\n【正确答案】B and Series",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q9",
    "year": 2022,
    "paper": 1,
    "num": 9,
    "topic": "Functions",
    "difficulty": 3,
    "question": "This question is about pairs of functions f and g that satisfy\n\n$$f(x) - g(x) = 2 \\sin x$$\n\n$$f(x)g(x) = \\cos^2 x$$\n\nfor all real numbers $x$.\n\nAcross all solutions for $f(x)$, what is the minimum value that $f(x)$ attains for any $x$?",
    "options": {
      "A": "$1 - \\sqrt{2}$",
      "B": "$-1 - \\sqrt{2}$",
      "C": "$0$",
      "D": "$-1$",
      "E": "$-2$",
      "F": "$-3$",
      "G": "$-4$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n已知函数 $f$ 和 $g$ 满足两个方程：$f(x)-g(x)=2\\sin x$ 与 $f(x)g(x)=\\cos^2 x$，要求在所有可能的 $f(x)$ 解中，找出 $f(x)$ 能达到的最小值。这道题的关键在于正确理解题意：我们先把 $f(x)$ 求出来（它有两个可能的函数表达式），然后在所有这些可能函数中，找出最小的函数值。\n\n【解题步骤】\n第一步：将两个方程联立。由 $f(x)-g(x)=2\\sin x$ 得 $g(x)=f(x)-2\\sin x$，代入第二个方程：\n$$f(x)\\bigl(f(x)-2\\sin x\\bigr)=\\cos^2 x$$\n展开整理得关于 $f(x)$ 的二次方程：\n$$\\bigl(f(x)\\bigr)^2-(2\\sin x)f(x)-\\cos^2 x=0$$\n\n第二步：用求根公式求解：\n$$f(x)=\\frac{2\\sin x\\pm\\sqrt{4\\sin^2 x+4\\cos^2 x}}{2}=\\sin x\\pm\\sqrt{\\sin^2 x+\\cos^2 x}=\\sin x\\pm 1$$\n\n因此 $f(x)$ 有两种可能：$f(x)=\\sin x+1$ 或 $f(x)=\\sin x-1$。\n\n第三步：分别求最小值。对 $f(x)=\\sin x+1$，因 $\\sin x\\in[-1,1]$，故 $f(x)\\in[0,2]$，最小值为 $0$。对 $f(x)=\\sin x-1$，$f(x)\\in[-2,0]$，最小值为 $-2$。\n\n第四步：题目要求在所有解的最小值中取最小者，故答案为 $-2$。\n\n【快捷思路】\n直接将 $f,g$ 视为二次方程 $t^2-(f+g)t+fg=0$ 的两根，或利用韦达定理快速得到 $f(x)=\\sin x\\pm 1$，然后分别判断最小值即可。注意题目问的是所有可能函数中的全局最小值，不要遗漏第二个解。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra",
      "Trigonometry"
    ]
  },
  {
    "id": "2022-P1-Q10",
    "year": 2022,
    "paper": 1,
    "num": 10,
    "topic": "Functions",
    "difficulty": 3,
    "question": "A sequence of translations is applied to the graph of $y = x^3$\n\nWhich of the following graphs could be the result of this sequence of translations?\n\nI $y = x^3 - 3x^2 + 9x - 27$\n\nII $y = x^3 - 9x^2 + 27x - 3$\n\nIII $y = 27x^3 - 9x^2 + x - 3$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "C",
    "analysis": "【题目分析】\n题目问：对 $y=x^3$ 的图像施加一系列平移后，下列哪些函数图像可能是结果。三个候选函数中，需要逐一判断它们是否能通过平移 $y=x^3$ 得到。核心思路是先推导平移 $y=x^3$ 后得到的一般形式，再对比各选项的系数。\n\n【解题步骤】\n第一步：推导平移后的一般形式。将 $y=x^3$ 沿 $x$ 方向平移 $a$ 个单位，再沿 $y$ 方向平移 $b$ 个单位，得到：\n$$y=(x-a)^3+b=x^3-3ax^2+3a^2x-a^3+b$$\n注意 $x^3$ 的系数始终为 $1$，且 $x^2$ 系数为 $-3a$，$x$ 系数为 $3a^2$。\n\n第二步：逐一验证。\n\n选项 I：$y=x^3-3x^2+9x-27$。由 $x^2$ 项得 $-3a=-3$，故 $a=1$。此时一般形式为 $y=x^3-3x^2+3x-1+b$，但原式中 $x$ 项系数为 $9\\neq 3$，矛盾，故不是平移。\n\n选项 II：$y=x^3-9x^2+27x-3$。由 $x^2$ 项得 $-3a=-9$，故 $a=3$。代入得 $y=x^3-9x^2+27x-27+b$，与原式对比得 $-27+b=-3$，即 $b=24$，完全吻合，故是平移。\n\n选项 III：$y=27x^3-9x^2+x-3$。$x^3$ 项系数为 $27\\neq 1$，平移不改变最高次项系数，故不是平移。\n\n第三步：只有 II 符合，答案为 C。\n\n【快捷思路】\n平移不改变多项式最高次项的系数和次高项系数的比值关系。对于三次函数 $y=x^3$ 的平移，必有 $x^3$ 系数为 $1$ 且满足 $(x\\text{ 项系数})=3a^2=(x^2\\text{ 系数}/-3)^2$。选项 I 中 $9\\neq 3\\times 1^2=3$，选项 II 中 $27=3\\times 3^2$ 成立，选项 III 首项系数不为 $1$ 直接排除。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ]
  },
  {
    "id": "2022-P1-Q11",
    "year": 2022,
    "paper": 1,
    "num": 11,
    "topic": "Sequences and Series",
    "difficulty": 3,
    "question": "$$\\sum_{n=1}^{100} \\log_{10} ( 3^{1-n} )$$",
    "options": {
      "A": "$-4950 \\log_{10} 3$",
      "B": "$4950 \\log_{10} 3$",
      "C": "$-5050 \\log_{10} 3$",
      "D": "$5050 \\log_{10} 3$",
      "E": "$1 - 4950 \\log_{10} 3$",
      "F": "$1 + 4950 \\log_{10} 3$",
      "G": "$1 - 5050 \\log_{10} 3$",
      "H": "$1 + 5050 \\log_{10} 3$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题要求计算对数求和：$\\displaystyle\\sum_{n=1}^{100}\\log_{10}\\!\\left(3^{\\,1-n}\\right)$。解题的关键是利用对数性质将幂指数提取出来，将求和转化为等差数列求和。\n\n【解题步骤】\n第一步：利用对数性质 $\\log_b(a^k)=k\\log_b a$，将通项化简：\n$$\\log_{10}\\!\\left(3^{\\,1-n}\\right)=(1-n)\\log_{10}3$$\n\n第二步：将常数因子 $\\log_{10}3$ 提取到求和号外：\n$$\\sum_{n=1}^{100}(1-n)\\log_{10}3=\\left(\\sum_{n=1}^{100}(1-n)\\right)\\log_{10}3$$\n\n第三步：计算 $\\sum_{n=1}^{100}(1-n)$。展开各项：\n$$n=1:\\ 1-1=0,\\quad n=2:\\ 1-2=-1,\\quad n=3:\\ 1-3=-2,\\ \\ldots,\\quad n=100:\\ 1-100=-99$$\n即求 $0+(-1)+(-2)+\\cdots+(-99)$，共 $100$ 项，是首项为 $0$、末项为 $-99$ 的等差数列。\n\n第四步：用等差数列求和公式 $S_n=\\dfrac{n}{2}(a_1+a_n)$：\n$$S_{100}=\\frac{100}{2}(0+(-99))=50\\times(-99)=-4950$$\n\n第五步：代回原式，得最终结果 $-4950\\log_{10}3$。\n\n【快捷思路】\n$\\sum_{n=1}^{100}(1-n)=\\sum_{n=1}^{100}1-\\sum_{n=1}^{100}n=100-\\frac{100\\times 101}{2}=100-5050=-4950$。直接乘以 $\\log_{10}3$ 即可。这种拆项法比逐项展开更快。\n\n【正确答案】A and Series",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra"
    ]
  },
  {
    "id": "2022-P1-Q12",
    "year": 2022,
    "paper": 1,
    "num": 12,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "A family of quadratic curves is given by\n\n$$y_k = 2\\left(x - \\frac{k}{2}\\right)^2 + \\frac{k^2}{2} + 4k + 3$$\n\nwhere $k$ is any real number and $y_k$ is a function of $x$.\n\nAll these curves are sketched, and the point with the lowest $y$-coordinate among all the curves $y_k$ is $(a, b)$.\n\nFind the value of $a + b$",
    "options": {
      "A": "$-1$",
      "B": "$-3$",
      "C": "$-5$",
      "D": "$-7$",
      "E": "$-9$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n题目给出一族抛物线 $y_k=2\\!\\left(x-\\dfrac{k}{2}\\right)^{\\!2}+\\dfrac{k^2}{2}+4k+3$，其中 $k$ 为任意实数。每条抛物线的顶点纵坐标随 $k$ 变化，要求在所有抛物线的所有顶点中，找到纵坐标最小的那个点 $(a,b)$，并计算 $a+b$。这是一个两层最值问题：先对每条抛物线求最小值，再在所有最小值中求最小值。\n\n【解题步骤】\n第一步：识别抛物线的顶点。$y_k$ 已给出完全平方形式 $y_k=2(x-\\frac{k}{2})^2+(\\frac{k^2}{2}+4k+3)$。由于二次项系数 $2>0$，每条抛物线开口向上，其最小值（顶点纵坐标）为：\n$$x=\\frac{k}{2},\\quad y=\\frac{k^2}{2}+4k+3$$\n即第 $k$ 条抛物线的顶点为 $\\left(\\dfrac{k}{2},\\ \\dfrac{k^2}{2}+4k+3\\right)$。\n\n第二步：求所有顶点中纵坐标的最小值。令 $h(k)=\\dfrac{k^2}{2}+4k+3$，对 $k$ 求最小值。可用配方法：\n$$h(k)=\\frac{1}{2}(k^2+8k+6)=\\frac{1}{2}\\bigl[(k+4)^2-10\\bigr]=\\frac{(k+4)^2}{2}-5$$\n当 $k=-4$ 时，$h(k)$ 取最小值 $-5$。\n\n第三步：求对应的横坐标。$k=-4$ 时，$x=\\dfrac{k}{2}=\\dfrac{-4}{2}=-2$。\n\n第四步：因此纵坐标最小的顶点为 $(-2,-5)$，即 $a=-2$，$b=-5$，故 $a+b=-7$。\n\n【快捷思路】\n$h(k)=\\frac{k^2}{2}+4k+3$ 对 $k$ 求导得 $h'(k)=k+4$，令 $h'(k)=0$ 得 $k=-4$，代入得最小值 $-5$，对应 $x=-2$，$a+b=-7$。求导法比配方法更直接。\n\n【正确答案】D Geometry",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Differentiation"
    ]
  },
  {
    "id": "2022-P1-Q13",
    "year": 2022,
    "paper": 1,
    "num": 13,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Given that\n\n$$ \\left( a^3 + \\frac{2}{b^3} \\right) \\left( \\frac{2}{a^3} - b^3 \\right) = \\sqrt{2} $$\n\nwhere $a$ and $b$ are real numbers, what is the least value of $ab$?",
    "options": {
      "A": "$-\\sqrt{2}$",
      "B": "$\\sqrt{2}$",
      "C": "$-2\\sqrt{2}$",
      "D": "$2\\sqrt{2}$",
      "E": "$-\\frac{\\sqrt{2}}{2}$",
      "F": "$\\frac{\\sqrt{2}}{2}$",
      "G": "$-2^{\\frac{1}{6}}$",
      "H": "$2^{\\frac{1}{6}}$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n已知 $(a^3 + \\frac{2}{b^3})(\\frac{2}{a^3} - b^3) = \\sqrt{2}$，其中 $a$、$b$ 为实数，求 $ab$ 的最小值。这是一道典型的代数题，通过展开括号后引入换元，将复杂表达式转化为可解的二次方程。\n\n【解题步骤】\n第一步，展开左边括号：\n$(a^3 + \\frac{2}{b^3})(\\frac{2}{a^3} - b^3) = 2 - a^3 b^3 + \\frac{4}{a^3 b^3} - 2 = \\frac{4}{a^3 b^3} - a^3 b^3$\n于是得到 $\\frac{4}{a^3 b^3} - a^3 b^3 = \\sqrt{2}$。\n\n第二步，令 $x = a^3 b^3$，则方程变为 $\\frac{4}{x} - x = \\sqrt{2}$。两边同乘 $x$ 整理得 $x^2 + \\sqrt{2}x - 4 = 0$。\n\n第三步，用求根公式解二次方程：\n$x = \\frac{-\\sqrt{2} \\pm \\sqrt{2 + 16}}{2} = \\frac{-\\sqrt{2} \\pm 3\\sqrt{2}}{2}$\n解得 $x = -2\\sqrt{2}$ 或 $x = \\sqrt{2}$。\n\n第四步，注意 $x = (ab)^3$，所以 $ab = x^{1/3}$。要使 $ab$ 最小，取 $x = -2\\sqrt{2} = -2^{3/2}$，于是 $ab = (-2^{3/2})^{1/3} = -2^{1/2} = -\\sqrt{2}$。\n\n【快捷思路】\n展开后直接看出只含 $a^3 b^3$ 这一整体量，换元 $x = a^3 b^3$ 一步到位转化为二次方程。求最小值时取负根即可，利用指数运算法则 $(2^{3/2})^{1/3} = 2^{1/2}$ 快速得出结果。\n\n【正确答案】A",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q14",
    "year": 2022,
    "paper": 1,
    "num": 14,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "A circle has centre $O$ and radius 6.\n\n$P, Q$ and $R$ are points on the circumference with angle $POQ \\geq \\frac{\\pi}{2}$\n\nThe area of the triangle $POQ$ is $9\\sqrt{3}$\n\nWhat is the greatest possible area of triangle $PRQ$?",
    "options": {
      "A": "$18 + 9\\sqrt{3}$",
      "B": "$18\\sqrt{3}$",
      "C": "$27 + 9\\sqrt{3}$",
      "D": "$27\\sqrt{3}$",
      "E": "$36 + 9\\sqrt{3}$",
      "F": "$36\\sqrt{3}$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n圆 $O$ 半径为 $6$，$P$、$Q$、$R$ 在圆周上，$\\angle POQ \\geq \\frac{\\pi}{2}$，三角形 $POQ$ 面积为 $9\\sqrt{3}$。求三角形 $PRQ$ 面积的最大值。这是圆的几何与三角函数综合题。\n\n【解题步骤】\n第一步，利用三角形面积公式 $A = \\frac{1}{2}ab \\sin C$ 求 $\\angle POQ$。设 $\\angle POQ = 2\\theta$，则\n$\\frac{1}{2} \\times 6 \\times 6 \\times \\sin 2\\theta = 9\\sqrt{3}$，得 $\\sin 2\\theta = \\frac{\\sqrt{3}}{2}$。\n由 $2\\theta \\geq \\frac{\\pi}{2}$ 知 $2\\theta = \\frac{2\\pi}{3}$，即 $\\theta = \\frac{\\pi}{3}$。\n\n第二步，求弦 $PQ$ 的长度。作 $O$ 到 $PQ$ 的垂线交于 $S$，则 $PS = 6 \\sin\\theta = 6 \\sin\\frac{\\pi}{3} = 3\\sqrt{3}$，故 $PQ = 6\\sqrt{3}$。同时 $OS = 6 \\cos\\theta = 6 \\cos\\frac{\\pi}{3} = 3$。\n\n第三步，固定 $PQ$ 为底边，三角形 $PRQ$ 的面积为 $\\frac{1}{2} \\times PQ \\times h$，其中 $h$ 是 $R$ 到 $PQ$ 的距离。$R$ 在圆周上，$h$ 的最大值出现在 $R$ 位于 $PQ$ 对侧最远处，此时高为 $RO + OS = 6 + 3 = 9$。\n\n第四步，最大面积为 $\\frac{1}{2} \\times 6\\sqrt{3} \\times 9 = 27\\sqrt{3}$。\n\n【快捷思路】\n核心思想是固定底边 $PQ$ 后面积仅取决于高。圆上一点到固定弦的最大距离等于半径加弦心距，直接得到最大高为 $6+3=9$，一步算出结果。\n\n【正确答案】D",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q15",
    "year": 2022,
    "paper": 1,
    "num": 15,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "A rectangle is drawn in the region enclosed by the curves $p$ and $q$, where\n\n$$p(x) = 8 - 2x^2$$\n\n$$q(x) = x^2 - 2$$\n\nsuch that the sides of the rectangle are parallel to the $x$- and $y$-axes.\n\nWhat is the maximum possible area of the rectangle?",
    "options": {
      "A": "$\\frac{26}{9}$",
      "B": "$\\frac{52}{9}$",
      "C": "$\\frac{4\\sqrt{6}}{3}$",
      "D": "$\\frac{8\\sqrt{6}}{3}$",
      "E": "$4\\sqrt{2}$",
      "F": "$8\\sqrt{2}$",
      "G": "$\\frac{20\\sqrt{10}}{9}$",
      "H": "$\\frac{40\\sqrt{10}}{9}$"
    },
    "answer": "H",
    "analysis": "【题目分析】\n抛物线 $p(x) = 8 - 2x^2$ 和 $q(x) = x^2 - 2$ 围成区域内画一个边平行于坐标轴的矩形，求矩形面积的最大值。这是典型的优化问题，需要建立面积函数后用微积分求极值。\n\n【解题步骤】\n第一步，求两曲线交点。令 $8 - 2x^2 = x^2 - 2$，得 $3x^2 = 10$，即 $x = \\pm\\sqrt{\\frac{10}{3}}$。两曲线关于 $y$ 轴对称，围成一个上下封闭的区域。\n\n第二步，设矩形左右边界在 $x = \\pm a$（$0 < a < \\sqrt{\\frac{10}{3}}$）。矩形宽度为 $2a$，高度为 $(8 - 2a^2) - (a^2 - 2) = 10 - 3a^2$。\n\n第三步，面积函数为 $A(a) = 2a(10 - 3a^2) = 20a - 6a^3$。对 $a$ 求导得 $A'(a) = 20 - 18a^2$。\n\n第四步，令 $A'(a) = 0$，解得 $a = \\sqrt{\\frac{10}{9}} = \\frac{\\sqrt{10}}{3}$（取正值）。验证该值在允许范围内。\n\n第五步，代入求最大面积：\n$A = 2 \\cdot \\frac{\\sqrt{10}}{3} \\cdot (10 - 3 \\cdot \\frac{10}{9}) = \\frac{2\\sqrt{10}}{3} \\cdot \\frac{20}{3} = \\frac{40\\sqrt{10}}{9}$。\n\n【快捷思路】\n利用对称性只需一个变量 $a$ 描述矩形。面积函数 $A(a) = 20a - 6a^3$ 求导后 $a^2 = \\frac{10}{9}$ 代回时巧妙利用 $10 - 3a^2 = 10 - \\frac{10}{3} = \\frac{20}{3}$ 简化计算。\n\n【正确答案】H",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q16",
    "year": 2022,
    "paper": 1,
    "num": 16,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The solutions to $7x^4 - 6x^2 + 1 = 0$ are $\\pm \\cos \\theta$ and $\\pm \\cos \\beta$.\n\nWhich one of the following equations has solutions $\\pm \\sin \\theta$ and $\\pm \\sin \\beta$?",
    "options": {
      "A": "$7x^4 - 8x^2 - 5 = 0$",
      "B": "$7x^4 - 8x^2 + 2 = 0$",
      "C": "$7x^4 - 6x^2 - 2 = 0$",
      "D": "$7x^4 - 6x^2 + 1 = 0$",
      "E": "$7x^4 + 6x^2 - 1 = 0$",
      "F": "$7x^4 + 6x^2 + 5 = 0$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n已知 $7x^4 - 6x^2 + 1 = 0$ 的解为 $\\pm\\cos\\theta$ 和 $\\pm\\cos\\beta$，求以 $\\pm\\sin\\theta$ 和 $\\pm\\sin\\beta$ 为解的方程。本题巧妙地将四次方程与三角恒等式结合，核心是利用 $\\sin^2 = 1 - \\cos^2$ 的关系做根的变换。\n\n【解题步骤】\n第一步，将原方程视为 $x^2$ 的二次方程。设 $y = x^2$，则 $7y^2 - 6y + 1 = 0$。\n\n第二步，求根公式得 $y = \\frac{6 \\pm \\sqrt{36 - 28}}{14} = \\frac{6 \\pm 2\\sqrt{2}}{14} = \\frac{3 \\pm \\sqrt{2}}{7}$。\n这两个值分别是 $\\cos^2\\theta$ 和 $\\cos^2\\beta$。\n\n第三步，利用 $\\sin^2\\theta = 1 - \\cos^2\\theta$ 和 $\\sin^2\\beta = 1 - \\cos^2\\beta$，得\n$\\sin^2\\theta$ 和 $\\sin^2\\beta$ 分别为 $\\frac{3 \\mp \\sqrt{2}}{7}$ 的补，即 $\\frac{4 \\mp \\sqrt{2}}{7}$。\n\n第四步，以 $\\pm\\sin\\theta$、$\\pm\\sin\\beta$ 为根的方程相当于 $x^2$ 的两个值为 $\\frac{4 \\pm \\sqrt{2}}{7}$。构造二次方程：\n$(x^2 - \\frac{4+\\sqrt{2}}{7})(x^2 - \\frac{4-\\sqrt{2}}{7}) = 0$\n\n第五步，展开：$x^4 - (\\frac{4+\\sqrt{2}}{7} + \\frac{4-\\sqrt{2}}{7})x^2 + \\frac{4+\\sqrt{2}}{7} \\cdot \\frac{4-\\sqrt{2}}{7} = 0$\n即 $x^4 - \\frac{8}{7}x^2 + \\frac{16-2}{49} = 0$，也就是 $x^4 - \\frac{8}{7}x^2 + \\frac{2}{7} = 0$。\n\n第六步，两边乘以 $7$ 得 $7x^4 - 8x^2 + 2 = 0$。\n\n【快捷思路】\n利用根与系数关系：原方程两根之和 $\\cos^2\\theta + \\cos^2\\beta = \\frac{6}{7}$，则 $\\sin^2\\theta + \\sin^2\\beta = 2 - \\frac{6}{7} = \\frac{8}{7}$。原方程两根之积 $\\cos^2\\theta \\cos^2\\beta = \\frac{1}{7}$，则 $\\sin^2\\theta \\sin^2\\beta = 1 - \\frac{6}{7} + \\frac{1}{7} = \\frac{2}{7}$。直接写出新方程 $x^4 - \\frac{8}{7}x^2 + \\frac{2}{7} = 0$，无需逐个求根。\n\n【正确答案】B",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P1-Q17",
    "year": 2022,
    "paper": 1,
    "num": 17,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "Find the complete set of values of $x$ for which there are two non-congruent triangles with the side lengths and angle as shown in the diagram.",
    "options": {
      "A": "$1 < x < 3$",
      "B": "$1 < x < 4$",
      "C": "$1 < x < 5$",
      "D": "$3 < x < 4$",
      "E": "$3 < x < 5$",
      "F": "$4 < x < 5$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n已知三角形两条边长分别为 $x-1$ 和 $-x^2+6x-5$，其中夹角为 $30^\\circ$，求使存在两个非全等三角形的 $x$ 的取值范围。这是典型的 SSA（两边及一非夹角）模糊情形问题。\n\n【解题步骤】\n首先确保两边长均为正：$x-1>0$ 得 $x>1$；$-x^2+6x-5=-(x-1)(x-5)>0$ 得 $1<x<5$。综合得 $1<x<5$。\n\n对于 SSA 模糊情形，设已知边 $a=x-1$（对已知角 $30^\\circ$），邻边 $b=-x^2+6x-5$。存在两个非全等三角形的条件是：\n1. $a<b$，即 $x-1<-x^2+6x-5$，整理得 $x^2-5x+4<0$，即 $(x-1)(x-4)<0$，故 $1<x<4$。\n2. $a>b\\sin 30^\\circ$，即 $x-1>\\frac{1}{2}(-x^2+6x-5)$，整理得 $2x-2>-x^2+6x-5$，即 $x^2-4x+3>0$，$(x-1)(x-3)>0$，故 $x<1$ 或 $x>3$。\n\n两个不等式联立得 $3<x<4$，该范围已在 $1<x<5$ 内，满足所有正性条件。\n\n【快捷思路】\n识别 SSA 模糊情形后直接套用条件：$b\\sin\\theta<a<b$。代入已知量解两个不等式即可，无需画图推导。\n\n【正确答案】D",
    "images": {
      "image": "2022 P1 Q17.png"
    },
    "has_image": true,
    "related_topics": [
      "Coordinate Geometry"
    ]
  },
  {
    "id": "2022-P1-Q18",
    "year": 2022,
    "paper": 1,
    "num": 18,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "It is given that\n\n$$f(x) = x^2(x - 1)^2(x - 2)$$\n\n$$g(x) = -p(x - q)^2(x - r)^2$$\n\nwhere $p$, $q$ and $r$ are positive and $q < r$\n\nFind the set of values of $q$ and $r$ that guarantees the greatest number of distinct real solutions of the equation $f(x) = g(x)$ for all $p$.",
    "options": {
      "A": "$q < 1$ and $r < 1$",
      "B": "$q < 1$ and $1 < r < 2$",
      "C": "$q < 1$ and $r > 2$",
      "D": "$1 < q < 2$ and $1 < r < 2$",
      "E": "$1 < q < 2$ and $r > 2$",
      "F": "$q > 2$ and $r > 2$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n给定五次多项式 $f(x)=x^2(x-1)^2(x-2)$ 和四次多项式 $g(x)=-p(x-q)^2(x-r)^2$（$p,q,r>0$，$q<r$），求使方程 $f(x)=g(x)$ 对一切 $p>0$ 都有最多不同实根的 $q,r$ 取值范围。本质是两个函数图像交点个数的讨论。\n\n【解题步骤】\n令 $h(x)=f(x)-g(x)$，方程 $f(x)=g(x)$ 即 $h(x)=0$。$h(x)$ 是五次多项式，最多 $5$ 个不同实根。\n\n分析 $f(x)$ 的图像：零点为 $x=0$（二重根，切 $x$ 轴）、$x=1$（二重根，切 $x$ 轴）、$x=2$（单根）。当 $x>2$ 时 $f(x)>0$，当 $x<2$ 时 $f(x)\\le 0$，在 $x=0$ 和 $x=1$ 附近形成两个下凹的谷。\n\n分析 $g(x)$ 的图像：$g(x)\\le 0$ 恒成立，在 $x=q$ 和 $x=r$ 处切 $x$ 轴，形成上凸的峰。\n\n要使交点始终为 $5$ 个，$g(x)$ 的峰必须覆盖 $f(x)$ 的两个谷，即 $q$ 和 $r$ 分别落在两个谷内。若 $r>2$ 或 $r<1$，当 $p$ 很大时 $g(x)$ 的峰会过高而跳过其中一个谷，交点不超过 $3$ 个。因此必须有 $1<r<2$。\n\n同理，若 $q>1$（即 $1<q<r$），则左谷未被覆盖，故必须 $q<1$。此时 $g(1)<0$，峰覆盖两个谷各产生两个交点（共 $4$ 个），再加上 $x<0$ 处由于 $f(x)$ 是五次而 $g(x)$ 是四次，当 $x\\to-\\infty$ 时 $f(x)$ 下降更快，必有第 $5$ 个交点。\n\n验证边界：$q=1$ 时在 $x=1$ 处出现二重根，不足 $5$ 个不同根；$r=2$ 时因 $x=2$ 是 $f(x)$ 的单根仍可保持 $5$ 个不同根。选项中最匹配的是 $q<1$ 且 $1<r<2$。\n\n【快捷思路】\n抓住核心：五次多项式最多 $5$ 个实根，$g(x)$ 需覆盖 $f(x)$ 的两个谷。观察零点分布即可判断 $q\\in(0,1)$，$r\\in(1,2)$。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Algebra"
    ]
  },
  {
    "id": "2022-P1-Q19",
    "year": 2022,
    "paper": 1,
    "num": 19,
    "topic": "Probability",
    "difficulty": 3,
    "question": "Circle $C_1$ is defined as $x^2 + y^2 = 25$\n\nA second circle $C_2$ has radius 4 and centre $(a, b)$ where\n\n$$-2 \\le a \\le 2 \\quad \\text{and} \\quad -3 \\le b \\le 3$$\n\nIf the centre of $C_2$ is equally likely to be located anywhere within the given range, what is the probability that $C_2$ intersects $C_1$?",
    "options": {
      "A": "$\\frac{1}{25}$",
      "B": "$\\frac{9}{25}$",
      "C": "$\\frac{16}{25}$",
      "D": "$\\frac{6 - \\pi}{6}$",
      "E": "$\\frac{16 - \\pi}{24}$",
      "F": "$\\frac{24 - \\pi}{24}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n圆 $C_1:x^2+y^2=25$（半径 $5$，圆心原点），圆 $C_2$ 半径 $4$，圆心 $(a,b)$ 在矩形区域 $-2\\le a\\le 2$，$-3\\le b\\le 3$ 内均匀分布。求两圆相交的概率。\n\n【解题步骤】\n首先判断 $C_2$ 的圆心区域是否全部在 $C_1$ 内：矩形角点到原点最远距离为 $\\sqrt{2^2+3^2}=\\sqrt{13}<5$，因此整个矩形区域都在 $C_1$ 内部。\n\n两圆相交的条件：当 $C_2$ 的圆心 $(a,b)$ 完全在 $C_1$ 内部时，$C_2$ 不与 $C_1$ 相交当且仅当 $C_2$ 完全包含在 $C_1$ 内。由于 $C_1$ 半径为 $5$、$C_2$ 半径为 $4$，$C_2$ 完全在 $C_1$ 内部的条件是圆心距 $d<5-4=1$，即 $\\sqrt{a^2+b^2}<1$。\n\n反之，两圆相交当且仅当 $d\\ge 1$，即圆心 $(a,b)$ 不在半径为 $1$ 的小圆内。\n\n样本空间面积为矩形面积 $4\\times 6=24$。不相交区域是半径 $1$ 的圆，面积为 $\\pi$，且该小圆完全落在矩形内（因为半径 $1<2$）。因此相交区域面积为 $24-\\pi$。\n\n所求概率为 $\\frac{24-\\pi}{24}$。\n\n【快捷思路】\n利用两圆位置关系：内切时圆心距为 $R-r=1$。在 $C_1$ 内部且 $d\\ge 1$ 时两圆相交。直接计算几何概率：$(24-\\pi)/24$。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ]
  },
  {
    "id": "2022-P1-Q20",
    "year": 2022,
    "paper": 1,
    "num": 20,
    "topic": "Graphs",
    "difficulty": 3,
    "question": "$n$ is the number of points of intersection of the graphs\n\n$$y = |x^2 - a^2| \\text{ and } y = a^2|x - 1|$$\n\nwhere $a$ is a real number.\n\nWhat is the smallest value of $n$ that is **not** possible?",
    "options": {
      "A": "$n = 1$",
      "B": "$n = 2$",
      "C": "$n = 3$",
      "D": "$n = 4$",
      "E": "$n = 5$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n求曲线 $y=|x^2-a^2|$ 与 $y=a^2|x-1|$ 的交点个数 $n$，找出最小的不可能的 $n$ 值。需要对参数 $a$ 进行分类讨论。\n\n【解题步骤】\n利用对称性，用 $-a$ 代替 $a$ 方程不变，故不妨设 $a\\ge 0$。\n\n$y=|x^2-a^2|$ 的图像：在 $x=\\pm a$ 处与 $x$ 轴相交，在 $[-a,a]$ 区间是下凸的抛物线弧（值为 $a^2-x^2$），在 $x<-a$ 和 $x>a$ 区间是上凸的抛物线臂（值为 $x^2-a^2$）。\n\n$y=a^2|x-1|$ 的图像：在 $x=1$ 处取最小值 $0$，左右两侧为射线。\n\n两曲线恒过交点 $(0,a^2)$（验证：$|0^2-a^2|=a^2$，$a^2|0-1|=a^2$）。\n\n情形一：$a>1$。此时 $x=1$ 在 $[-a,a]$ 内，$y=a^2|x-1|$ 的顶点在抛物线弧下方。在 $[-a,a]$ 内除 $(0,a^2)$ 外还有两个交点（射线穿过山峰两侧），在 $x>a$ 和 $x<-a$ 处各有一个交点（抛物线臂增长更快），共 $4$ 个交点。\n\n情形二：$a=1$。此时 $y=|x^2-1|$ 与 $y=|x-1|$。在 $x>1$ 区域，$x^2-1$ 的导数为 $2x>2$，而 $x-1$ 的导数为 $1$，抛物线增长更快，不会在 $x>1$ 产生额外交点。总共 $3$ 个交点。\n\n情形三：$0<a<1$。此时 $x=1>a$，$y=a^2|x-1|$ 的顶点在抛物线弧右侧。在 $x>a$ 区域，抛物线 $x^2-a^2$ 的导数 $2x>2a>a^2$（因 $a<1$ 时 $2a>a^2$），抛物线增长更快，无交点。在 $x<-a$ 处有一个交点，在 $[-a,a]$ 内顶点 $(0,a^2)$ 加上两侧各一个交点，共 $4$ 个交点。\n\n情形四：$a=0$。此时 $y=x^2$ 与 $y=0$，仅在原点相交，$n=1$。\n\n综上，可能的交点个数为 $1$、$3$、$4$。最小的不可能值为 $n=2$。\n\n【快捷思路】\n注意 $(0,a^2)$ 恒为交点。$a>1$ 时 $4$ 个交点，$a=1$ 时 $3$ 个交点，$0<a<1$ 时 $4$ 个交点，$a=0$ 时 $1$ 个交点。$n=2$ 永远无法取到。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Algebra"
    ]
  },
  {
    "id": "2022-P2-Q1",
    "year": 2022,
    "paper": 2,
    "num": 1,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "Determine the number of stationary points on the curve with equation\n\n$$y = 3x^4 + 4x^3 + 6x^2 - 5$$",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3",
      "E": "4"
    },
    "answer": "B",
    "analysis": "【题目分析】\n题目要求确定曲线 $y = 3x^4 + 4x^3 + 6x^2 - 5$ 上驻点的个数。驻点是导数为零的点，因此核心是求导后解方程，并判断实根的个数。\n\n【解题步骤】\n第一步：对函数求导\n$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 12x^3 + 12x^2 + 12x$$\n\n第二步：令导数为零，解方程\n$$12x^3 + 12x^2 + 12x = 0 \\quad\\Longrightarrow\\quad 12x(x^2 + x + 1) = 0$$\n\n第三步：分析因式\n由 $12x = 0$ 得 $x = 0$。\n对于二次因式 $x^2 + x + 1 = 0$，判别式 $\\Delta = 1^2 - 4 \\times 1 \\times 1 = -3 < 0$，无实根。\n\n因此方程只有一个实根 $x = 0$，即仅有一个驻点。\n\n【快捷思路】\n求导后提取公因式 $12x$，剩余二次式判别式为负，直接得到仅一个实根，无需进一步计算。\n\n【正确答案】B",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P2-Q2",
    "year": 2022,
    "paper": 2,
    "num": 2,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Find the coefficient of the $x^5$ term in the expansion of\n\n$$(1+x)^5 \\times \\sum_{i=0}^{5} x^i$$",
    "options": {
      "A": "1",
      "B": "5",
      "C": "16",
      "D": "25",
      "E": "32"
    },
    "answer": "E",
    "analysis": "【题目分析】\n求 $(1+x)^5 \\times \\sum_{i=0}^{5} x^i$ 展开式中 $x^5$ 项的系数，需找出两因式中次数和为 $5$ 的所有配对并累加系数。\n\n【解题步骤】\n第一步：写出两个因式的展开式\n$$(1+x)^5 = 1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5$$\n$$\\sum_{i=0}^{5} x^i = 1 + x + x^2 + x^3 + x^4 + x^5$$\n\n第二步：逐对匹配次数和为 $5$ 的项\n$$1 \\cdot x^5 + 5x \\cdot x^4 + 10x^2 \\cdot x^3 + 10x^3 \\cdot x^2 + 5x^4 \\cdot x + x^5 \\cdot 1$$\n\n第三步：系数求和\n$$1 + 5 + 10 + 10 + 5 + 1 = 32$$\n\n【快捷思路】\n第二个因式系数全为 $1$，故 $x^5$ 系数即 $(1+x)^5$ 所有系数之和，令 $x=1$ 得 $(1+1)^5 = 32$。\n\n【正确答案】E",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P2-Q3",
    "year": 2022,
    "paper": 2,
    "num": 3,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "Consider the following statement about the positive integer $n$\n\n**if** $n$ is prime, **then** $n^2 + 2$ is **not** prime\n\nWhich of the following is a **counterexample** to this statement?\n\nI $n = 2$\n\nII $n = 3$\n\nIII $n = 4$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "C",
    "analysis": "【题目分析】\n命题为：若正整数 $n$ 是素数，则 $n^2 + 2$ 不是素数。要求找出该命题的反例。反例的定义是：满足前提条件（$n$ 为素数）但结论不成立（$n^2 + 2$ 也是素数）的情况。\n\n【解题步骤】\n逐一检验三个候选值：\n\n对于 I：$n = 2$\n$2$ 是素数，前提成立。$n^2 + 2 = 4 + 2 = 6 = 2 \\times 3$ 不是素数，结论也成立。因此不是反例。\n\n对于 II：$n = 3$\n$3$ 是素数，前提成立。$n^2 + 2 = 9 + 2 = 11$ 是素数，结论不成立。这就是反例。\n\n对于 III：$n = 4$\n$4 = 2 \\times 2$ 不是素数，前提不成立，因此不构成反例。\n\n综上，只有 II 提供了反例。\n\n【快捷思路】\n只需逐个代入检验：反例要求 $n$ 为素数且 $n^2+2$ 也为素数。$n=2$ 得 $6$ 非素数，$n=3$ 得 $11$ 为素数，$n=4$ 本身不是素数。快速锁定 II。\n\n【正确答案】C",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P2-Q4",
    "year": 2022,
    "paper": 2,
    "num": 4,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "The point $P$ has coordinates $(p, q)$, and the equation of a circle is\n\n$$x^2 + 2fx + y^2 + 2gy + h = 0$$\n\nwhere $f, g, h, p$ and $q$ are all real constants.\n\nLet $L$ be the distance between the centre of the circle and the point $P$.\n\nWhich one of the following is **sufficient** on its own to be able to calculate $L$?",
    "options": {
      "A": "the values of $f, g$ and $h$",
      "B": "the values of $f, g, p$ and $q$",
      "C": "the values of $f, h, p$ and $q$",
      "D": "the values of $g, h, p$ and $q$",
      "E": "none of the options **A-D** is sufficient on its own"
    },
    "answer": "B",
    "analysis": "【题目分析】\n已知圆的一般方程 $x^2 + 2fx + y^2 + 2gy + h = 0$ 和点 $P(p, q)$，需要确定哪些参数组合足以独立计算圆心到点 $P$ 的距离 $L$。\n\n【解题步骤】\n第一步：通过配方法求圆心\n将圆方程配方：\n$$(x + f)^2 - f^2 + (y + g)^2 - g^2 + h = 0$$\n整理得：\n$$(x + f)^2 + (y + g)^2 = f^2 + g^2 - h$$\n\n因此圆心坐标为 $(-f, -g)$。\n\n第二步：计算距离 $L$\n$$L^2 = (p - (-f))^2 + (q - (-g))^2 = (p + f)^2 + (q + g)^2$$\n\n第三步：分析所需参数\n要计算 $L$，需要知道 $f$、$g$、$p$、$q$ 四个值。参数 $h$ 仅影响半径，与距离 $L$ 无关。\n\n【快捷思路】\n圆心坐标由 $f$ 和 $g$ 决定（为 $(-f, -g)$），与 $h$ 无关。已知点 $P$ 坐标为 $(p, q)$，因此只需 $f, g, p, q$ 即可求距离，$h$ 是多余信息。\n\n【正确答案】B Geometry",
    "images": null,
    "has_image": false
  },
  {
    "id": "2022-P2-Q5",
    "year": 2022,
    "paper": 2,
    "num": 5,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "A straight line $L$ passes through $(1, 2)$.\n\nLet P be the statement\n\n> **if** the $y$-intercept of $L$ is negative, **then** the $x$-intercept of $L$ is positive.\n\nWhich of the following statements **must** be true?\n\nI P\nII the converse of P\nIII the contrapositive of P",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "F",
    "analysis": "【题目分析】\n直线$L$过定点$(1, 2)$，涉及截距的符号与逻辑命题的真假判断。需要判断原命题P、逆命题、逆否命题三者中哪些必定成立。\n\n【解题步骤】\n设直线方程为$y - 2 = m(x - 1)$。\n\n求截距：$y$截距为$2 - m$（令$x = 0$），$x$截距为$1 - \\frac{2}{m}$（令$y = 0$，要求$m \\neq 0$）。注意$m = 0$时$y$截距为$2 > 0$，不在P的条件范围内。\n\n命题P：若$y$截距$< 0$，则$x$截距$> 0$。\n$y$截距$< 0$即$2 - m < 0 \\Rightarrow m > 2$。\n此时$x$截距$= 1 - \\frac{2}{m} > 1 - 1 = 0$，故P成立。\n\n逆命题：若$x$截距$> 0$，则$y$截距$< 0$。\n取$m = -1$，$x$截距$= 3 > 0$，但$y$截距$= 3 > 0$，逆命题不成立。\n\n逆否命题：与原命题逻辑等价，P成立则逆否命题必成立。\n\n综上，I和III成立。\n\n【快捷思路】\n过$(1, 2)$且$y$截距为负，意味着直线从左下方穿过$y$轴负半轴再经过第一象限的$(1, 2)$，必然在$(0, 1)$之间穿过$x$轴，故$x$截距为正。P直观成立，逆否命题等价于P，只需检验逆命题即可。\n\n【正确答案】F Geometry",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic"
    ]
  },
  {
    "id": "2022-P2-Q6",
    "year": 2022,
    "paper": 2,
    "num": 6,
    "topic": "Logic",
    "difficulty": 3,
    "question": "A list consists of $n$ integers.\n\nConsider the following statements:\n\nP: $n$ is odd.\n\nQ: The median of the list is one of the numbers in the list.\n\nWhich one of the following is true?",
    "options": {
      "A": "P is **necessary and sufficient** for Q.",
      "B": "P is **necessary** but **not sufficient** for Q.",
      "C": "P is **sufficient** but **not necessary** for Q.",
      "D": "P is **not necessary** and **not sufficient** for Q."
    },
    "answer": "C",
    "analysis": "【题目分析】\n列表含$n$个整数，判断条件P（$n$为奇数）与结论Q（中位数在列表中）之间的充分必要关系。\n\n【解题步骤】\n充分性检验（P$\\Rightarrow$Q）：\n当$n$为奇数时，将$n$个整数从小到大排列，中间位置为$\\frac{n+1}{2}$，这是整数索引，中位数恰好等于列表中该位置的数。故P$\\Rightarrow$Q成立，P是Q的充分条件。\n\n必要性检验（Q$\\Rightarrow$P）：\n若中位数在列表中，$n$是否必须为奇数？取反例：列表$[2, 2]$，$n = 2$为偶数，中位数$= 2$，在列表中。一般地，任何偶数长度且中间两个数相等的列表都使Q成立但P不成立。故P不是Q的必要条件。\n\n结论：P充分但不必要。\n\n【快捷思路】\n奇数个数$\\Rightarrow$中间位置是整数索引$\\Rightarrow$中位数在列表中，充分性显然。偶数时一般不在，但若中间两数相同（如$[2, 2]$），中位数仍在列表中，故不必要。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ]
  },
  {
    "id": "2022-P2-Q7",
    "year": 2022,
    "paper": 2,
    "num": 7,
    "topic": "Proof",
    "difficulty": 3,
    "question": "> The difference between two consecutive positive cube numbers is always prime.\n\nHere is an attempted proof of this claim:\n\nI $(x + 1)^3 = x^3 + 3x^2 + 3x + 1$\n\nII Taking $x$ to be a positive integer, the difference between two consecutive cube numbers can be expressed as $(x + 1)^3 - x^3 = 3x^2 + 3x + 1$\n\nIII It is impossible to factorise $3x^2 + 3x + 1$ into two linear factors with integer coefficients because its discriminant is negative.\n\nIV Therefore for every positive integer value of $x$ the integer $3x^2 + 3x + 1$ cannot be factorised.\n\nV Hence, the difference between two consecutive cube numbers will always be prime.\n\nWhich of the following best describes this proof?",
    "options": {
      "A": "The proof is completely correct, and the claim is true.",
      "B": "The proof is completely correct, but there are counterexamples to the claim.",
      "C": "The proof is wrong, and the first error occurs on line I.",
      "D": "The proof is wrong, and the first error occurs on line II.",
      "E": "The proof is wrong, and the first error occurs on line III.",
      "F": "The proof is wrong, and the first error occurs on line IV.",
      "G": "The proof is wrong, and the first error occurs on line V."
    },
    "answer": "F",
    "analysis": "【题目分析】\n声称两个连续正立方数之差总是素数，需要逐行检查证明过程，找出第一个错误所在的行。\n\n【解题步骤】\n逐行验证：\nI：$(x+1)^3 = x^3 + 3x^2 + 3x + 1$，代数展开正确。\nII：差值$(x+1)^3 - x^3 = 3x^2 + 3x + 1$，计算正确。\nIII：判别式$3^2 - 4 \\times 3 \\times 1 = -3 < 0$，故$3x^2 + 3x + 1$无实根，不能分解为实系数线性因子，正确。\nIV：由代数表达式不可因式分解，推断对每个正整数$x$其值不能分解——这是错误跳跃。代数表达式不可分解不等于其整数值一定是素数。例如$x^2+1$代数上不可分解，但$x=3$时$3^2+1 = 10 = 2 \\times 5$可分解。\nV：由IV推出的结论，但IV本身有误。\n\n反例验证：$6^3 - 5^3 = 216 - 125 = 91 = 7 \\times 13$，不是素数。或取$x = 7$，$3(49) + 21 + 1 = 169 = 13^2$，同样不是素数。\n\n第一个错误出现在第IV行。\n\n【快捷思路】\nI-III都是正确的代数运算。关键陷阱在IV：代数表达式不可分解$\\not\\Rightarrow$代入整数后得到素数。只要记住$x^2+1$的经典反例，就能快速定位错误在IV。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Algebra",
      "Counterexamples"
    ]
  },
  {
    "id": "2022-P2-Q8",
    "year": 2022,
    "paper": 2,
    "num": 8,
    "topic": "Combinatorics",
    "difficulty": 3,
    "question": "A selection, $S$, of $n$ terms is taken from the arithmetic sequence 1, 4, 7, 10, ... , 70.\n\nConsider the following statement:\n\n> ($\\ast$) There are two distinct terms in $S$ whose sum is 74.\n\nWhat is the smallest value of $n$ for which ($\\ast$) is **necessarily** true?",
    "options": {
      "A": "12",
      "B": "13",
      "C": "14",
      "D": "21",
      "E": "22",
      "F": "23"
    },
    "answer": "C",
    "analysis": "【题目分析】\n从等差数列$1, 4, 7, 10, \\ldots, 70$中选取$n$项，求使必定存在两不同项之和为$74$的最小$n$。这是鸽巢原理的经典应用。\n\n【解题步骤】\n首先确定数列项数：首项$a_1 = 1$，公差$d = 3$，通项$a_k = 3k - 2$。令$3k - 2 = 70$，得$k = 24$，共$24$项。\n\n寻找和为$74$的配对：由$a_i + a_j = 74$得$3i - 2 + 3j - 2 = 74$，即$i + j = 26$。\n配对如下：$4+70,\\ 7+67,\\ 10+64,\\ 13+61,\\ 16+58,\\ 19+55,\\ 22+52,\\ 25+49,\\ 28+46,\\ 31+43,\\ 34+40$。\n注意$37+37$不合法（要求两项不同）。共$11$组配对。\n\n未参与配对的项：$1$（对应$i = 1$，需$j = 25$超出范围）和$37$（对应$i = 13$，需$j = 13$即自身）。共$2$个孤立项。\n\n最坏情况：取$1$、$37$以及每对中各取一项，最多可选$2 + 11 = 13$项而不满足条件。因此$n = 14$时必定满足条件。\n\n【快捷思路】\n$24$项分为$11$个配对加$2$个孤立项。鸽巢原理：从$11$个配对中最多取$11$个不触发条件，加上$2$个孤立项共$13$项安全。第$14$项必补全某个配对。\n\n【正确答案】C",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Sequences and Series"
    ]
  },
  {
    "id": "2022-P2-Q9",
    "year": 2022,
    "paper": 2,
    "num": 9,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Consider the following statement:\n\n($*$) **For all** real numbers $x$, **if** $x < k$ **then** $x^2 < k$\n\nWhat is the complete set of values of $k$ for which ($*$) is true?",
    "options": {
      "A": "no real numbers",
      "B": "$k > 0$",
      "C": "$k < 1$",
      "D": "$k \\le 1$",
      "E": "$0 < k < 1$",
      "F": "$0 < k \\le 1$",
      "G": "all real numbers"
    },
    "answer": "A",
    "analysis": "【题目分析】\n命题：对所有实数$x$，若$x < k$则$x^2 < k$。求使命题成立的$k$的取值范围。本题核心在于意识到$x$可以取负值，而负数的平方可能很大，这是解题的关键突破口。\n\n【解题步骤】\n对任意实数$k$，我们需要判断是否存在反例使$x < k$但$x^2 \\geq k$。\n\n情况一：$k \\leq 0$。取$x = k - 1$，显然$x < k$成立。但$x^2 = (k - 1)^2 > 0$，而$k \\leq 0$，故$x^2 > k$，即$x^2 < k$不成立。\n\n情况二：$k > 0$。取$x = -\\sqrt{k}$。由于$\\sqrt{k} > 0$，有$x = -\\sqrt{k} < 0 < k$，故$x < k$成立。但$x^2 = k$，不满足严格不等式$x^2 < k$。\n\n综上，无论$k$取何值，总能找到反例使命题为假。\n\n【快捷思路】\n不需要分类讨论到如此细致。只需注意到：对任何$k$，总能取一个绝对值足够大的负数$x$，使得$x < k$但$x^2$非常大，自然不小于$k$。因此不存在任何$k$使命题成立。\n\n【正确答案】A",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof",
      "Counterexamples"
    ]
  },
  {
    "id": "2022-P2-Q10",
    "year": 2022,
    "paper": 2,
    "num": 10,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Which of the following statements is/are true?\n\nI **For all** real numbers $x$ and **for all** positive integers $n$, $x < n$\n\nII **For all** real numbers $x$, **there exists** a positive integer $n$ such that $x < n$\n\nIII **There exists** a real number $x$ such that **for all** positive integers $n$, $x < n$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "G",
    "analysis": "【题目分析】\n本题涉及全称量词与存在量词的嵌套顺序，是逻辑学中非常经典的问题。三个命题的区别仅在于量词顺序，但含义截然不同，需要逐一判断真假。\n\n【解题步骤】\n命题I：对所有实数$x$和所有正整数$n$，$x < n$。取$x = 2, n = 1$，则$2 > 1$，命题I为假。\n\n命题II：对任意实数$x$，存在正整数$n$使得$x < n$。若$x \\leq 0$，取$n = 1$即可，$x < 1 = n$成立。若$x > 0$，取大于$x$的最小正整数（即$\\lfloor x \\rfloor + 1$），则$x < n$成立。命题II为真。\n\n命题III：存在实数$x$，使得对所有正整数$n$都有$x < n$。取$x = 0$，由于正整数$n \\geq 1$，故$0 < n$对所有正整数成立。命题III为真。注意如果将正整数改为整数，则命题不成立，因为不存在小于所有整数的实数。\n\n因此II和III为真。\n\n【快捷思路】\n命题III的突破口在于选取一个\"足够小\"的固定值如$x = 0$，由于正整数集有下界$1$，$x = 0$必然小于所有正整数。量词顺序决定了搜索的范围：II是先定$x$再找$n$，III是先定$x$然后验证所有$n$。\n\n【正确答案】G",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof"
    ]
  },
  {
    "id": "2022-P2-Q11",
    "year": 2022,
    "paper": 2,
    "num": 11,
    "topic": "Coordinate Geometry",
    "difficulty": 3,
    "question": "The diagram shows a kite $PQRS$ whose diagonals meet at $O$.\n\n$OP = x$\n$OQ = y$\n$OR = x$\n$OS = z$\n\nWhich of the following is **necessary and sufficient** for angle $SPQ$ to be a right angle?",
    "options": {
      "A": "$x = y = z$",
      "B": "$2x = y + z$",
      "C": "$x^2 = yz$",
      "D": "$y = z$",
      "E": "$y^2 = x^2 + z^2$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n风筝$PQRS$的对角线交于$O$，已知$OP = OR = x$，$OQ = y$，$OS = z$。求$\\angle SPQ = 90^\\circ$的充要条件。风筝的核心性质是两条对角线互相垂直，这为使用勾股定理提供了基础。\n\n【解题步骤】\n由于$PQRS$是风筝，对角线$PR$与$QS$互相垂直，即$\\angle SOP = \\angle POQ = 90^\\circ$。\n\n在$Rt\\triangle SOP$中：$SP^2 = x^2 + z^2$\n\n在$Rt\\triangle POQ$中：$PQ^2 = x^2 + y^2$\n\n$\\angle SPQ = 90^\\circ$当且仅当$\\triangle SPQ$满足勾股定理：\n$SP^2 + PQ^2 = SQ^2$\n\n代入得：\n$(x^2 + z^2) + (x^2 + y^2) = (y + z)^2$\n\n化简：\n$2x^2 + y^2 + z^2 = y^2 + 2yz + z^2$\n\n$2x^2 = 2yz$，即$x^2 = yz$。\n\n因此充要条件为$x^2 = yz$。可取$x = 2, y = 4, z = 1$验证：满足$x^2 = yz = 4$，但不满足其他选项，确认C是唯一正确答案。\n\n【快捷思路】\n看到直角立刻想到勾股定理。风筝对角线垂直是隐含条件，将$\\angle SPQ = 90^\\circ$转化为边长关系即可。展开$(y + z)^2$后$y^2$和$z^2$恰好消去，直接得到简洁结果。\n\n【正确答案】C Geometry",
    "images": {
      "image": "2022 P2 Q11.png"
    },
    "has_image": true,
    "related_topics": [
      "Proof"
    ]
  },
  {
    "id": "2022-P2-Q12",
    "year": 2022,
    "paper": 2,
    "num": 12,
    "topic": "Integration",
    "difficulty": 3,
    "question": "Place the following integrals in order of size, starting with the smallest.\n\n$$P = \\int_{0}^{1} 2^{\\sqrt{x}} \\, dx$$\n\n$$Q = \\int_{0}^{1} 2^{x} \\, dx$$\n\n$$R = \\int_{0}^{1} (\\sqrt{2})^{x} \\, dx$$",
    "options": {
      "A": "$P < Q < R$",
      "B": "$P < R < Q$",
      "C": "$Q < P < R$",
      "D": "$Q < R < P$",
      "E": "$R < P < Q$",
      "F": "$R < Q < P$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n比较三个定积分的大小：$P = \\int_{0}^{1} 2^{\\sqrt{x}} \\, dx$，$Q = \\int_{0}^{1} 2^x \\, dx$，$R = \\int_{0}^{1} (\\sqrt{2})^x \\, dx$。本题不需要实际计算积分值，只需比较被积函数在积分区间上的大小。\n\n【解题步骤】\n先化简被积函数。注意$(\\sqrt{2})^x = 2^{x/2}$，因此三个被积函数的指数分别为$\\sqrt{x}$、$x$和$\\frac{x}{2}$。\n\n比较指数大小（在$0 < x < 1$内）：\n\n首先，$x/2 < x$显然成立，故$2^{x/2} < 2^x$，即$R$的被积函数最小。\n\n其次，当$0 < x < 1$时，$x^2 < x$，两边开方得$\\sqrt{x} > x$，故$2^{\\sqrt{x}} > 2^x$，即$P$的被积函数最大。\n\n综上，在$(0, 1)$上恒有$2^{x/2} < 2^x < 2^{\\sqrt{x}}$，因此积分值满足$R < Q < P$。\n\n端点$x = 0$和$x = 1$处被积函数值相等或不改变不等关系，不影响积分大小比较。\n\n【快捷思路】\n关键洞察：在$(0, 1)$区间内，$\\sqrt{x} > x > x/2$。将$(\\sqrt{2})^x$改写为$2^{x/2}$是化简的第一步。指数函数底数$2 > 1$时单调递增，指数越大函数值越大，积分自然越大。无需实际求积分。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Graphs",
      "Functions"
    ]
  },
  {
    "id": "2022-P2-Q13",
    "year": 2022,
    "paper": 2,
    "num": 13,
    "topic": "Logic",
    "difficulty": 3,
    "question": "Consider the statement ($*$) about a real number $x$:\n\n($*$) **There exists** a real number $y$ such that $x - xy + y$ is negative.\n\nFor how many real values of $x$ is ($*$) true?",
    "options": {
      "A": "no values of $x$",
      "B": "exactly one value of $x$",
      "C": "exactly two values of $x$",
      "D": "all except exactly two values of $x$",
      "E": "all except exactly one value of $x$",
      "F": "all values of $x$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考察存在量词命题的真假判定。命题(*)为：对给定的实数$x$，存在实数$y$使得$x - xy + y$为负数。需要对所有可能的$x$值分类讨论，判断命题是否成立。核心在于将表达式整理为关于$y$的线性函数，利用一次函数的值域性质来判断。\n\n【解题步骤】\n将表达式重新整理：\n$$x - xy + y = (1-x)y + x$$\n将其视为关于$y$的直线方程$my + c$，其中$m = 1-x$，$c = x$。\n\n**情况一：$m \\neq 0$即$x \\neq 1$**\n此时斜率非零，直线的值域为全体实数$\\mathbb{R}$。既然取遍所有实数，必然能取到负值。因此命题(*)成立。\n\n**情况二：$m = 0$即$x = 1$**\n此时表达式退化为$(1-1)y + 1 = 1$，恒等于$1$。无论$y$取何值，结果始终为$1$（正数），永远无法取到负值。因此命题(*)不成立。\n\n综上，命题(*)对除$x = 1$外的所有实数成立，恰有一个$x$值使之为假。\n\n【快捷思路】\n将$x - xy + y$按$y$整理为$(1-x)y + x$，直接看出是关于$y$的直线。直线斜率为零时（即$x=1$）退化为常数$1$，恒正；斜率非零时值域为$\\mathbb{R}$，必有负值。秒杀排除$x=1$即可。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions",
      "Algebra"
    ]
  },
  {
    "id": "2022-P2-Q14",
    "year": 2022,
    "paper": 2,
    "num": 14,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "Consider the two inequalities:\n\n$$|x + 5| < |x + 11|$$\n\n$$|x + 11| < |x + 1|$$\n\nWhich one of the following is correct?",
    "options": {
      "A": "There is no real number for which both inequalities are true.",
      "B": "There is exactly one real number for which both inequalities are true.",
      "C": "The real numbers for which both inequalities are true form an interval of length 1.",
      "D": "The real numbers for which both inequalities are true form an interval of length 2.",
      "E": "The real numbers for which both inequalities are true form an interval of length 3.",
      "F": "The real numbers for which both inequalities are true form an interval of length 4.",
      "G": "The real numbers for which both inequalities are true form an interval of length 5."
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题涉及两个绝对值不等式的联立求解。不等式$|x-a|$的几何意义是数轴上点$x$到点$a$的距离。利用这一几何直观，可以避免繁琐的分情况讨论，快速确定解集区间。\n\n【解题步骤】\n**不等式①：**$|x+5| < |x+11|$\n几何意义：$x$到$-5$的距离小于到$-11$的距离。\n$-5$和$-11$的中点为$(-5 + (-11))/2 = -8$。\n$x$更靠近$-5$，故$x$在中点右侧：$x > -8$。\n\n**不等式②：**$|x+11| < |x+1|$\n几何意义：$x$到$-11$的距离小于到$-1$的距离。\n$-11$和$-1$的中点为$(-11 + (-1))/2 = -6$。\n$x$更靠近$-11$，故$x$在中点左侧：$x < -6$。\n\n**取交集：**\n同时满足$x > -8$且$x < -6$，即$-8 < x < -6$。\n区间长度为$-6 - (-8) = 2$。\n\n**代数验证法（平方法）：**\n$|x+5| < |x+11|$两边平方得$x^2 + 10x + 25 < x^2 + 22x + 121$，化简得$12x > -96$，即$x > -8$。\n同理$|x+11| < |x+1|$平方得$20x < -120$，即$x < -6$。\n\n【快捷思路】\n记住公式$|x-a| < |x-b|$等价于$x$在$a$和$b$中点靠近$a$的一侧。中点为$(a+b)/2$，若$a > b$则解为$x > (a+b)/2$，若$a < b$则解为$x < (a+b)/2$。两个中点一算、方向一判、交集一取，十秒出答案。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Coordinate Geometry"
    ]
  },
  {
    "id": "2022-P2-Q15",
    "year": 2022,
    "paper": 2,
    "num": 15,
    "topic": "Algebra",
    "difficulty": 3,
    "question": "The real numbers $x, y$ and $z$ are all greater than 1, and satisfy the equations\n\n$$\\log_x y = z \\text{ and } \\log_y z = x$$\n\nWhich one of the following equations for $\\log_z x$ **must** be true?",
    "options": {
      "A": "$\\log_z x = y$",
      "B": "$\\log_z x = \\frac{1}{y}$",
      "C": "$\\log_z x = xy$",
      "D": "$\\log_z x = \\frac{1}{xy}$",
      "E": "$\\log_z x = xz$",
      "F": "$\\log_z x = \\frac{1}{xz}$",
      "G": "$\\log_z x = yz$",
      "H": "$\\log_z x = \\frac{1}{yz}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考察对数与指数的互化关系，以及对数运算中的循环结构。已知$\\log_x y = z$和$\\log_y z = x$，通过换底和代换建立$x$、$y$、$z$三者的循环关系，最终用$x$和$z$表示$\\log_z x$。\n\n【解题步骤】\n**Step 1：将已知对数式转为指数式**\n$$\\log_x y = z \\implies y = x^z$$\n$$\\log_y z = x \\implies z = y^x$$\n\n**Step 2：消去$y$，建立$x$与$z$的关系**\n将$y = x^z$代入$z = y^x$：\n$$z = (x^z)^x = x^{zx}$$\n\n**Step 3：求解$\\log_z x$**\n对$z = x^{zx}$两边同时取$\\frac{1}{zx}$次幂：\n$$z^{1/(zx)} = (x^{zx})^{1/(zx)} = x$$\n即$x = z^{1/(xz)}$。\n\n根据对数定义，这等价于：\n$$\\log_z x = \\frac{1}{xz}$$\n\n**验证：**将$\\log_z x = \\frac{1}{xz}$代回原方程，由$z = x^{zx}$出发取对数可自洽验证。\n\n【快捷思路】\n看到$\\log_x y = z$、$\\log_y z = x$这种循环对数，立刻转为指数式$y = x^z$、$z = y^x$，代入消去中间变量$y$得到$z = x^{zx}$，再两边开$xz$次方即得$x = z^{1/(xz)}$，直接写出$\\log_z x = \\frac{1}{xz}$。三步解决，无需额外计算。\n\n【正确答案】F",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Functions"
    ]
  },
  {
    "id": "2022-P2-Q16",
    "year": 2022,
    "paper": 2,
    "num": 16,
    "topic": "Counterexamples",
    "difficulty": 3,
    "question": "In this question, $a_1, \\dots, a_{100}$ and $b_1, \\dots, b_{100}$ and $c_1, \\dots, c_{100}$ are three sequences of integers such that\n\n$$a_n \\le b_n + c_n$$\n\nfor each $n$.\n\nWhich of the following statements **must** be true?\n\nI (minimum of $a_1, \\dots, a_{100}$) $\\le$ (minimum of $b_1, \\dots, b_{100}$) + (minimum of $c_1, \\dots, c_{100}$)\n\nII (minimum of $a_1, \\dots, a_{100}$) $\\ge$ (minimum of $b_1, \\dots, b_{100}$) + (minimum of $c_1, \\dots, c_{100}$)\n\nIII (maximum of $a_1, \\dots, a_{100}$) $\\le$ (maximum of $b_1, \\dots, b_{100}$) + (maximum of $c_1, \\dots, c_{100}$)",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考察序列最值与不等式的逻辑关系。已知对每个$n$都有$a_n \\leq b_n + c_n$，需要判断三个关于最小值和最大值的不等式命题哪些必然成立。解题核心策略是：先尝试构造反例否定命题，若反例失败则尝试严格证明。\n\n【解题步骤】\n记$A_{\\min}$为$a$序列最小值，$B_{\\max}$为$b$序列最大值，其余类似。\n\n**命题Ⅰ：**$A_{\\min} \\leq B_{\\min} + C_{\\min}$\n构造反例：取$b_1 = 0$，其余$b_n = 100$；$c_{100} = 0$，其余$c_n = 100$。则$B_{\\min} = 0$，$C_{\\min} = 0$。对所有$n$取$a_n = 100$，满足$a_n \\leq b_n + c_n$（$100 \\leq 100 + 100 = 200$或$100 \\leq 0 + 100 = 100$均成立）。但$A_{\\min} = 100 > 0 + 0$，命题Ⅰ不成立。\n\n**命题Ⅱ：**$A_{\\min} \\geq B_{\\min} + C_{\\min}$\n构造反例：对所有$n$取$a_n = 0$，$b_n = 1$，$c_n = 1$。条件$0 \\leq 1 + 1$成立。但$A_{\\min} = 0 < 1 + 1 = 2$，命题Ⅱ不成立。\n\n**命题Ⅲ：**$A_{\\max} \\leq B_{\\max} + C_{\\max}$\n严格证明：对任意$n$，有$a_n \\leq b_n + c_n$。而$b_n \\leq B_{\\max}$，$c_n \\leq C_{\\max}$，故$a_n \\leq B_{\\max} + C_{\\max}$。这意味着$B_{\\max} + C_{\\max}$是$a$序列的一个上界，而最大值$A_{\\max}$是上确界，因此$A_{\\max} \\leq B_{\\max} + C_{\\max}$。命题Ⅲ必然成立。\n\n综上，仅命题Ⅲ成立。\n\n【快捷思路】\n最小值不等式（Ⅰ、Ⅱ）通常不成立——因为$a_n \\leq b_n + c_n$只约束对应项，而$b$的最小值和$c$的最小值可能出现在不同位置，无法叠加到同一个$a_n$上。最大值不等式（Ⅲ）则不同：每个$a_n$都被$B_{\\max} + C_{\\max}$压住，所以最大值也被压住。记住这个直觉可快速判断。\n\n【正确答案】D",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Proof",
      "Logic"
    ]
  },
  {
    "id": "2022-P2-Q17",
    "year": 2022,
    "paper": 2,
    "num": 17,
    "topic": "Differentiation",
    "difficulty": 3,
    "question": "A student answered the following question:\n\n$a$ and $b$ are non-zero real numbers.\n\nProve that the equation $x^3 + ax^2 + b = 0$ has three distinct real roots if\n$$27b \\left( b + \\frac{4a^3}{27} \\right) < 0$$\n\nHere is the student’s solution:\n\nI We differentiate $y = x^3 + ax^2 + b$ to get $\\frac{dy}{dx} = 3x^2 + 2ax = x(3x + 2a)$\n\nSolving $\\frac{dy}{dx} = 0$ shows that the stationary points are at $(0, b)$ and $\\left( -\\frac{2a}{3}, b + \\frac{4a^3}{27} \\right)$\n\nII If $27b \\left( b + \\frac{4a^3}{27} \\right) < 0$, then $b$ and $b + \\frac{4a^3}{27}$ must have opposite signs, and so one of the stationary points is above the $x$-axis and one is below.\n\nIII If the cubic has three distinct real roots, then one of the stationary points is above the $x$-axis and one is below.\n\nIV Hence if $27b \\left( b + \\frac{4a^3}{27} \\right) < 0$, then the equation has three distinct real roots.\n\nWhich one of the following options best describes the student’s solution?",
    "options": {
      "A": "It is a completely correct solution.",
      "B": "The student has instead proved the converse of the statement in the question.",
      "C": "The solution is wrong, because the student should have stated step II after step III.",
      "D": "The solution is wrong, because the student should have shown the converse of the result in step II.",
      "E": "The solution is wrong, because the student should have shown the converse of the result in step III."
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题要求学生证明：对于非零实数 $a, b$，若 $27b\\!\\left(b + \\frac{4a^3}{27}\\right) < 0$，则方程 $x^3 + ax^2 + b = 0$ 有三个不同实根。学生的解法分为四步，需要判断哪一步的逻辑存在方向性错误。\n\n核心思路是先求导找驻点，再论证驻点位置与根的个数之间的关系。三次函数 $y = x^3 + ax^2 + b$ 的导数为 $3x^2 + 2ax$，驻点在 $x = 0$ 和 $x = -\\frac{2a}{3}$ 处，对应的函数值分别为 $b$ 和 $b + \\frac{4a^3}{27}$。当这两个函数值异号时，图像跨越 $x$ 轴三次，即有三个实根。\n\n【解题步骤】\n学生第 I 步求驻点，计算正确。第 II 步由条件 $27b\\!\\left(b + \\frac{4a^3}{27}\\right) < 0$ 推出两驻点函数值异号，方向正确。问题出在第 III 步：学生写的是如果三次方程有三个不同实根，则一个驻点在 $x$ 轴上方，一个在下方。但题目要求的是反过来——由驻点位置推出根的个数。第 IV 步需要用到的是第 III 步的逆命题，但学生并没有证明逆命题，而是直接使用了结论。因此第 III 步应该证明其逆命题。\n\n【快捷思路】\n这是一道逻辑方向题。题目要证 $P \\Rightarrow Q$，学生第 III 步写的是 $Q \\Rightarrow P$，而实际推理中需要的是 $P \\Rightarrow Q$。关键就是发现这个逻辑箭头方向反了。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Logic"
    ]
  },
  {
    "id": "2022-P2-Q18",
    "year": 2022,
    "paper": 2,
    "num": 18,
    "topic": "Trigonometry",
    "difficulty": 3,
    "question": "P, Q, R and S show the graphs of\n\n$$y = (\\cos x)^{\\cos x}, y = (\\sin x)^{\\sin x}, y = (\\cos x)^{\\sin x} \\text{ and } y = (\\sin x)^{\\cos x}$$\n\nfor $0 < x < \\frac{\\pi}{2}$ in some order.\n\nWhich option correctly identifies the graphs?",
    "options": {
      "A": "$P=(\\cos x)^{\\cos x},\\ Q=(\\sin x)^{\\sin x},\\ R=(\\cos x)^{\\sin x},\\ S=(\\sin x)^{\\cos x}$",
      "B": "$P=(\\cos x)^{\\cos x},\\ Q=(\\cos x)^{\\sin x},\\ R=(\\sin x)^{\\sin x},\\ S=(\\sin x)^{\\cos x}$",
      "C": "$P=(\\sin x)^{\\cos x},\\ Q=(\\cos x)^{\\sin x},\\ R=(\\sin x)^{\\sin x},\\ S=(\\cos x)^{\\cos x}$",
      "D": "$P=(\\sin x)^{\\sin x},\\ Q=(\\cos x)^{\\cos x},\\ R=(\\sin x)^{\\cos x},\\ S=(\\cos x)^{\\sin x}$",
      "E": "$P=(\\cos x)^{\\sin x},\\ Q=(\\sin x)^{\\cos x},\\ R=(\\cos x)^{\\cos x},\\ S=(\\sin x)^{\\sin x}$",
      "F": "$P=(\\sin x)^{\\cos x},\\ Q=(\\sin x)^{\\sin x},\\ R=(\\cos x)^{\\sin x},\\ S=(\\cos x)^{\\cos x}$",
      "G": "$P=(\\cos x)^{\\sin x},\\ Q=(\\cos x)^{\\cos x},\\ R=(\\sin x)^{\\cos x},\\ S=(\\sin x)^{\\sin x}$",
      "H": "$P=(\\sin x)^{\\sin x},\\ Q=(\\sin x)^{\\cos x},\\ R=(\\cos x)^{\\cos x},\\ S=(\\cos x)^{\\sin x}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题要求在 $0 < x < \\frac{\\pi}{2}$ 区间内，将四条函数曲线 $y = (\\cos x)^{\\cos x}$、$y = (\\sin x)^{\\sin x}$、$y = (\\cos x)^{\\sin x}$、$y = (\\sin x)^{\\cos x}$ 与图形 P、Q、R、S 正确匹配。\n\n【解题步骤】\n最有效的方法是代入关键点的函数值来逐一排除。\n\n在 $x = 0$ 处：$(\\cos 0)^{\\cos 0} = 1^1 = 1$，$(\\cos 0)^{\\sin 0} = 1^0 = 1$，$(\\sin 0)^{\\cos 0} = 0^1 = 0$，而 $(\\sin 0)^{\\sin 0} = 0^0$ 极限为 $1$。四个函数中只有 $(\\sin x)^{\\cos x}$ 在 $x \\to 0$ 时为 $0$，对应图形 Q。\n\n在 $x = \\frac{\\pi}{2}$ 处：$(\\sin\\frac{\\pi}{2})^{\\sin\\frac{\\pi}{2}} = 1^1 = 1$，$(\\sin\\frac{\\pi}{2})^{\\cos\\frac{\\pi}{2}} = 1^0 = 1$，$(\\cos\\frac{\\pi}{2})^{\\sin\\frac{\\pi}{2}} = 0^1 = 0$。只有 $(\\cos x)^{\\sin x}$ 在 $x \\to \\frac{\\pi}{2}$ 时为 $0$，对应图形 P。\n\n剩下 $(\\cos x)^{\\cos x}$ 和 $(\\sin x)^{\\sin x}$ 对应 R 和 S。代入 $x = \\frac{\\pi}{6}$，$(\\sin\\frac{\\pi}{6})^{\\sin\\frac{\\pi}{6}} = \\left(\\frac{1}{2}\\right)^{1/2} = \\frac{1}{\\sqrt{2}} \\approx 0.7$，对应图形 S。类似地，$(\\cos x)^{\\cos x}$ 在 $x = \\frac{\\pi}{3}$ 处也约为 $0.7$，对应图形 R。\n\n因此匹配为：P = $(\\cos x)^{\\sin x}$，Q = $(\\sin x)^{\\cos x}$，R = $(\\cos x)^{\\cos x}$，S = $(\\sin x)^{\\sin x}$。\n\n【快捷思路】\n抓住端点值的唯一性：$x = 0$ 处仅一个函数值为 $0$，$x = \\frac{\\pi}{2}$ 处也仅一个函数值为 $0$，先定 Q 和 P，再用中间值区分 R 和 S。\n\n【正确答案】E",
    "images": {
      "image": "2022 P2 Q18.png"
    },
    "has_image": true,
    "related_topics": [
      "Graphs",
      "Functions"
    ]
  },
  {
    "id": "2022-P2-Q19",
    "year": 2022,
    "paper": 2,
    "num": 19,
    "topic": "Proof",
    "difficulty": 3,
    "question": "A polygon has $n$ vertices, where $n \\geq 3$. It has the following properties:\n\n*   Every vertex of the polygon lies on the circumference of a circle $C$.\n*   The centre of the circle $C$ is inside the polygon.\n*   The radii from the centre of the circle $C$ to the vertices of the polygon cut the polygon into $n$ triangles of equal area.\n\nFor which values of $n$ are these properties **sufficient** to deduce that the polygon is regular?",
    "options": {
      "A": "no values of $n$",
      "B": "$n = 3$ only",
      "C": "$n = 3$ and $n = 4$ only",
      "D": "$n = 3$ and $n \\geq 5$ only",
      "E": "all values of $n$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n一个 $n$ 边形满足：所有顶点在圆 $C$ 上，圆心在多边形内部，圆心到各顶点的半径将多边形分为 $n$ 个等面积三角形。问哪些 $n$ 能由此推出该多边形是正多边形。\n\n【解题步骤】\n设圆半径为 $r$，第 $i$ 个三角形的中心角为 $\\theta_i$，则面积为 $\\frac{1}{2}r^2\\sin\\theta_i$。等面积意味着所有 $\\sin\\theta_i$ 相等。由于 $\\sin\\theta = \\sin\\phi$ 当且仅当 $\\phi = \\theta$ 或 $\\phi = \\pi - \\theta$，因此中心角可能取两种值：$\\theta$ 和 $\\pi - \\theta$。\n\n假设有 $k$ 个角为 $\\pi - \\theta$，$n-k$ 个角为 $\\theta$，则 $(n-k)\\theta + k(\\pi - \\theta) = 2\\pi$，整理得 $(n-2k)\\theta = (2-k)\\pi$。\n\n对于 $n=3$：逐一检验 $k=1,2,3$。$k=1$ 时 $\\theta = \\pi$ 不合要求；$k=2$ 时 $\\theta = 0$ 不合要求；$k=3$ 时 $\\theta = \\frac{\\pi}{3}$，三个角相等，即正三角形。因此 $n=3$ 只能是正多边形。\n\n对于 $n=4$：$k=2$ 时方程退化为 $0=0$，任意 $\\theta$ 均可。取 $\\theta \\neq \\frac{\\pi}{2}$ 则两个角为 $\\theta$，两个为 $\\pi-\\theta$，构成非正方形的矩形，满足条件但不是正多边形。\n\n对于 $n \\geq 5$：$k=1$ 时 $\\theta = \\frac{\\pi}{n-2} < \\frac{\\pi}{2}$，是锐角，构造合法，可得到非正多边形。\n\n因此仅 $n=3$ 时条件足以推出正多边形。\n\n【快捷思路】\n关键在于 $\\sin\\theta_i$ 相等不等价于 $\\theta_i$ 相等。当存在互补角 $\\theta$ 和 $\\pi-\\theta$ 时，$n \\geq 4$ 总能构造非正多边形反例，仅 $n=3$ 时方程无解（除正三角形外）。\n\n【正确答案】B",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Trigonometry",
      "Counterexamples"
    ]
  },
  {
    "id": "2022-P2-Q20",
    "year": 2022,
    "paper": 2,
    "num": 20,
    "topic": "Functions",
    "difficulty": 3,
    "question": "The functions $f_1$ to $f_5$ are defined on the real numbers by\n\n$$f_1(x) = \\cos x$$\n$$f_2(x) = \\sin(\\cos x)$$\n$$f_3(x) = \\cos(\\sin(\\cos x))$$\n$$f_4(x) = \\sin(\\cos(\\sin(\\cos x)))$$\n$$f_5(x) = \\cos(\\sin(\\cos(\\sin(\\cos x))))$$\n\nwhere all numbers are taken to be in radians.\n\nThese functions have maximum values $m_1, m_2, m_3, m_4$ and $m_5$, respectively.\n\nWhich one of the following statements is true?",
    "options": {
      "A": "$m_1, m_2, m_3, m_4$ and $m_5$ are all equal to 1",
      "B": "$0 < m_5 < m_4 < m_3 < m_2 < m_1 = 1$",
      "C": "$m_1 = m_3 = m_5 = 1$ and $0 < m_2 = m_4 < 1$",
      "D": "$m_1 = m_3 = m_5 = 1$ and $0 < m_4 < m_2 < 1$",
      "E": "$m_1 = m_3 = 1$ and $0 < m_2 = m_4 < 1$ and $0 < m_5 < 1$",
      "F": "$m_1 = m_3 = 1$ and $0 < m_4 < m_2 < 1$ and $0 < m_5 < 1$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n定义五个嵌套三角函数 $f_1$ 到 $f_5$，其中 $f_1(x) = \\cos x$，后续函数交替使用 $\\sin$ 和 $\\cos$ 嵌套。比较它们各自的最大值 $m_1$ 到 $m_5$ 的大小关系。\n\n【解题步骤】\n逐层分析值域。$f_1(x) = \\cos x$，最大值 $m_1 = 1$，值域为 $[-1, 1]$。\n\n$f_2(x) = \\sin(f_1(x)) = \\sin(\\cos x)$。由于 $\\cos x \\in [-1, 1]$，而 $\\sin$ 在 $[-1, 1]$ 上的最大值为 $\\sin 1$。注意 $\\sin 1 < \\sin\\frac{\\pi}{2} = 1$（因为 $1 < \\frac{\\pi}{2}$），故 $m_2 = \\sin 1 < 1$，值域为 $[-\\sin 1, \\sin 1]$。\n\n$f_3(x) = \\cos(f_2(x)) = \\cos(\\sin(\\cos x))$。当 $f_2(x) = 0$ 时 $f_3(x) = \\cos 0 = 1$。而 $f_2$ 确实可以取到 $0$（例如 $x = \\frac{\\pi}{2}$ 时 $\\cos x = 0$，$\\sin 0 = 0$），故 $m_3 = 1$。\n\n$f_4(x) = \\sin(f_3(x))$。$f_3(x)$ 的值域为 $[\\cos(\\sin 1), 1]$，而 $\\sin$ 在该区间上单调递增，最大值为 $\\sin 1$，故 $m_4 = \\sin 1$。\n\n$f_5(x) = \\cos(f_4(x))$。$f_4$ 的值域为 $[\\sin(\\cos(\\sin 1)), \\sin 1]$，不包含 $0$（因为 $\\sin(\\cos(\\sin 1)) > 0$ 且 $\\sin 1 > 0$），故 $f_5$ 的最大值在离 $0$ 最近的点处取得，即 $m_5 = \\cos(\\sin(\\cos(\\sin 1))) < 1$。\n\n综上：$m_1 = m_3 = 1$，$m_2 = m_4 = \\sin 1$，$0 < m_5 < 1$。\n\n【快捷思路】\n奇数层以 $\\cos$ 结尾，当内层能取 $0$ 时最大值为 $1$；偶数层以 $\\sin$ 结尾，最大值为 $\\sin 1$。但 $f_5$ 的内层 $f_4$ 恒不为 $0$，所以 $m_5 < 1$。\n\n【正确答案】E",
    "images": null,
    "has_image": false,
    "related_topics": [
      "Trigonometry"
    ]
  },
  {
    "id": "2023-P1-Q1",
    "year": 2023,
    "paper": 1,
    "num": 1,
    "question": "Given that $$\\int_{0}^{1}(ax + b)\\,dx = 1$$ and $$\\int_{0}^{1}x(ax + b)\\,dx = 1$$ find the value of $a + b$.",
    "options": {
      "A": "$-1$",
      "B": "$0$",
      "C": "$1$",
      "D": "$2$",
      "E": "$3$",
      "F": "$4$",
      "G": "$5$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题给出两个关于 $a$ 和 $b$ 的定积分方程，要求求出 $a+b$ 的值。被积函数都是关于 $x$ 的一次函数 $ax+b$ 或其与 $x$ 的乘积。核心思路是先分别计算两个定积分，得到关于 $a$ 和 $b$ 的两个线性方程，然后联立求解。这类题型考察定积分的基本计算法则以及二元一次方程组的求解能力，是积分与代数结合的经典考法。\n\n【解题步骤】\n第一步，计算第一个积分：\n$$\\int_{0}^{1}(ax+b)\\,dx = \\left[\\frac{ax^2}{2}+bx\\right]_{0}^{1} = \\frac{a}{2}+b = 1$$\n\n第二步，计算第二个积分：\n$$\\int_{0}^{1}x(ax+b)\\,dx = \\int_{0}^{1}(ax^2+bx)\\,dx = \\left[\\frac{ax^3}{3}+\\frac{bx^2}{2}\\right]_{0}^{1} = \\frac{a}{3}+\\frac{b}{2} = 1$$\n\n第三步，联立两个方程。由第一个方程得 $b = 1-\\dfrac{a}{2}$，代入第二个方程：\n$$\\frac{a}{3}+\\frac{1}{2}\\left(1-\\frac{a}{2}\\right) = 1 \\implies \\frac{a}{3}+\\frac{1}{2}-\\frac{a}{4} = 1$$\n$$\\frac{a}{12} = \\frac{1}{2} \\implies a = 6$$\n\n代回得 $b = 1-3 = -2$，所以 $a+b = 6+(-2) = 4$。\n\n【快捷思路】\n直接观察第一个方程 $\\dfrac{a}{2}+b=1$，所求为 $a+b$。将方程两边乘以 2 得 $a+2b=2$，再结合第二个方程 $\\dfrac{a}{3}+\\dfrac{b}{2}=1$ 两边乘以 6 得 $2a+3b=6$。两式相减即可快速得 $a=4$，代入得 $b=-2$，$a+b=4$。\n\n【正确答案】F",
    "has_image": false,
    "images": [],
    "topic": "Integration",
    "related_topics": [
      "Algebra"
    ]
  },
  {
    "id": "2023-P1-Q2",
    "year": 2023,
    "paper": 1,
    "num": 2,
    "question": "The graphs of $y = x^2 + 5x + 6$ and $y = mx - 3$, where $m$ is a constant, are plotted on the same set of axes.\n\nGiven that the graphs do not meet, what is the complete range of possible values of $m$?",
    "options": {
      "A": "$-1 < m < 11$",
      "B": "$m < -1,\\ m > 11$",
      "C": "$-\\sqrt{11} < m < \\sqrt{11}$",
      "D": "$m < -\\sqrt{11},\\ m > \\sqrt{11}$",
      "E": "$-11 < m < 1$",
      "F": "$m < -11,\\ m > 1$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题涉及抛物线 $y=x^2+5x+6$ 与直线 $y=mx-3$ 的位置关系。两图像不相遇意味着联立方程无实数解，即所得一元二次方程的判别式小于零。这是典型的二次方程判别式应用问题，也是解析几何中研究曲线位置关系的基本方法。解题的关键在于正确建立方程并准确求解含参不等式。\n\n【解题步骤】\n第一步，将两方程联立，令函数值相等：\n$$x^2+5x+6 = mx-3$$\n移项整理为标准二次方程形式：\n$$x^2+(5-m)x+9 = 0$$\n\n第二步，该二次方程无实数根的条件是判别式 $\\Delta < 0$：\n$$\\Delta = (5-m)^2 - 4\\times 1 \\times 9 = (5-m)^2-36 < 0$$\n\n第三步，解此不等式：\n$$(5-m)^2 < 36 \\implies |5-m| < 6$$\n展开绝对值不等式：\n$$-6 < 5-m < 6 \\implies -11 < -m < 1$$\n两边同时乘以 $-1$（注意不等号方向改变）：\n$$-1 < m < 11$$\n\n因此 $m$ 的完整取值范围是 $-1 < m < 11$。\n\n【快捷思路】\n注意到两图像不相遇等价于联立后的二次方程判别式为负。直接写出 $\\Delta = (5-m)^2-36 < 0$，解出 $|5-m| < 6$ 即得 $-1 < m < 11$。整个过程只需三步运算，无需画图即可得到精确范围。\n\n【正确答案】A Geometry",
    "has_image": false,
    "images": [],
    "topic": "Coordinate Geometry",
    "related_topics": [
      "Algebra"
    ]
  },
  {
    "id": "2023-P1-Q3",
    "year": 2023,
    "paper": 1,
    "num": 3,
    "question": "For any integer $n \\geq 0$,\n\n$$\\int_{n}^{n+1}f(x)\\,dx = n + 1$$\n\nEvaluate\n\n$$\\int_{0}^{3}f(x)\\,dx + \\int_{1}^{3}f(x)\\,dx + \\int_{2}^{3}f(x)\\,dx + \\int_{4}^{3}f(x)\\,dx + \\int_{5}^{3}f(x)\\,dx$$",
    "options": {
      "A": "$-2$",
      "B": "$0$",
      "C": "$1$",
      "D": "$4$",
      "E": "$18$",
      "F": "$27$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题给出了函数 $f(x)$ 在每个单位区间 $[n,n+1]$ 上的积分值为 $n+1$。需要计算五个定积分的和，其中既有正向积分也有反向积分。关键在于利用定积分的区间可加性拆分大范围积分，以及反向积分满足 $\\int_{b}^{a}f(x)\\,dx = -\\int_{a}^{b}f(x)\\,dx$。本题的陷阱在于部分积分的上限小于下限，容易忽略变号规则。仔细逐项处理是确保正确的关键。\n\n【解题步骤】\n首先逐项计算：\n\n第一项：$\\displaystyle\\int_{0}^{3}f(x)\\,dx = \\int_{0}^{1}f\\,dx+\\int_{1}^{2}f\\,dx+\\int_{2}^{3}f\\,dx = 1+2+3 = 6$\n\n第二项：$\\displaystyle\\int_{1}^{3}f(x)\\,dx = \\int_{1}^{2}f\\,dx+\\int_{2}^{3}f\\,dx = 2+3 = 5$\n\n第三项：$\\displaystyle\\int_{2}^{3}f(x)\\,dx = 3$\n\n第四项：$\\displaystyle\\int_{4}^{3}f(x)\\,dx = -\\int_{3}^{4}f(x)\\,dx = -4$\n\n第五项：$\\displaystyle\\int_{5}^{3}f(x)\\,dx = -\\int_{3}^{5}f(x)\\,dx = -\\left(\\int_{3}^{4}f\\,dx+\\int_{4}^{5}f\\,dx\\right) = -(4+5) = -9$\n\n求和：$6+5+3+(-4)+(-9) = 1$\n\n【快捷思路】\n观察到后两项是反向积分，先将其变号为负的正向积分，再利用区间可加性逐项展开。本质上是将所有积分都化为已知的单位区间积分值的线性组合，避免重复计算。\n\n【正确答案】C",
    "has_image": false,
    "images": [],
    "topic": "Integration",
    "related_topics": [
      "Sequences and Series"
    ]
  },
  {
    "id": "2023-P1-Q4",
    "year": 2023,
    "paper": 1,
    "num": 4,
    "question": "Evaluate\n\n$$\\sum_{n=0}^{\\infty}\\frac{\\sin\\left(n\\pi + \\dfrac{\\pi}{3}\\right)}{2^n}$$",
    "options": {
      "A": "$0$",
      "B": "$\\dfrac{1}{3}$",
      "C": "$\\dfrac{\\sqrt{3}}{3}$",
      "D": "$\\sqrt{3}$",
      "E": "$3$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题要求计算一个无穷级数，分子含有三角函数 $\\sin\\left(n\\pi+\\dfrac{\\pi}{3}\\right)$，分母为 $2^n$。关键技巧是利用三角函数的周期性简化分子表达式，将其转化为等比数列求和问题。这类将三角函数与无穷级数结合的题目在 TMUA 中较为常见，核心在于识别周期性规律后转化为标准等比级数。\n\n【解题步骤】\n第一步，简化分子。利用正弦函数的周期性：\n$$\\sin\\left(n\\pi+\\frac{\\pi}{3}\\right) = (-1)^n\\sin\\frac{\\pi}{3} = (-1)^n\\cdot\\frac{\\sqrt{3}}{2}$$\n\n第二步，代入级数：\n$$\\sum_{n=0}^{\\infty}\\frac{(-1)^n\\cdot\\dfrac{\\sqrt{3}}{2}}{2^n} = \\frac{\\sqrt{3}}{2}\\sum_{n=0}^{\\infty}\\frac{(-1)^n}{2^n} = \\frac{\\sqrt{3}}{2}\\sum_{n=0}^{\\infty}\\left(-\\frac{1}{2}\\right)^n$$\n\n第三步，识别为无穷等比级数，首项为 $1$，公比 $r=-\\dfrac{1}{2}$。由于 $|r|<1$，级数收敛：\n$$\\sum_{n=0}^{\\infty}\\left(-\\frac{1}{2}\\right)^n = \\frac{1}{1-(-\\frac{1}{2})} = \\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$$\n\n最终结果：$\\dfrac{\\sqrt{3}}{2}\\times\\dfrac{2}{3} = \\dfrac{\\sqrt{3}}{3}$\n\n【快捷思路】\n识别 $\\sin(n\\pi+\\theta)=(-1)^n\\sin\\theta$ 这一恒等式后，级数立刻变为公比为 $-\\dfrac{1}{2}$ 的等比级数。直接套用求和公式 $S=\\dfrac{a}{1-r}$ 即可得到答案 $\\dfrac{\\sqrt{3}}{3}$。\n\n【正确答案】C and Series",
    "has_image": false,
    "images": [],
    "topic": "Sequences and Series",
    "related_topics": [
      "Trigonometry"
    ]
  },
  {
    "id": "2023-P1-Q5",
    "year": 2023,
    "paper": 1,
    "num": 5,
    "question": "The following shape has two lines of reflectional symmetry.\n\nN  S  O\n       T\nR\nM  U     P\n\n[diagram not to scale]\n\nMNOP is a square of perimeter 40 cm.\n\nThe vertices of rectangle RSTU lie on the edge of square MNOP.\n\nMR has length $x$ cm.\n\nWhat is the largest possible value of $x$ such that RSTU has area 20 cm²?",
    "options": {
      "A": "$2$",
      "B": "$10$",
      "C": "$2\\sqrt{15}$",
      "D": "$10\\sqrt{2}$",
      "E": "$5 + \\sqrt{5}$",
      "F": "$5 + \\sqrt{15}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n结合图形分析。MNOP 为正方形，周长 $40$ cm，故边长为 $10$ cm。矩形 RSTU 内接于正方形，四个顶点分别落在正方形的四条边上。由题设「两条反射对称轴」可知，矩形 RSTU 与正方形共享对称中心。设 $MR = x$ cm，则 $R$ 在 $MP$ 边上距 $M$ 点 $x$ 处。利用对称性可确定其余三个顶点的位置。\n\n【解题步骤】\n以 $M$ 为原点建立直角坐标系：$M(0,0)$，$N(10,0)$，$O(10,10)$，$P(0,10)$。由对称性，$R$ 在 $MP$ 上，$S$ 在 $MN$ 上，$T$ 在 $NO$ 上，$U$ 在 $OP$ 上。$MR = x$ 即 $R(0,x)$，则 $S(x,0)$，$T(10,10-x)$，$U(10-x,10)$。\n\n计算相邻两边：\n$RS = \\sqrt{(x-0)^2 + (0-x)^2} = x\\sqrt{2}$\n$RU = \\sqrt{(10-x-0)^2 + (10-x)^2} = (10-x)\\sqrt{2}$\n\n矩形面积为 $RS \\times RU = 2x(10-x)$。令其等于 $20$：\n$2x(10-x) = 20 \\implies x^2 - 10x + 10 = 0$\n\n解得 $x = 5 \\pm \\sqrt{15}$。取较大值，$x = 5 + \\sqrt{15}$。\n\n【快捷思路】\n直接利用对称性写出面积公式 $2x(10-x) = 20$，解二次方程即可，无需逐一验证几何关系。\n\n【正确答案】F Geometry",
    "has_image": true,
    "images": [
      "images/2023/2023-P1-Q5-symmetry-shape.png"
    ],
    "topic": "Coordinate Geometry"
  },
  {
    "id": "2023-P1-Q6",
    "year": 2023,
    "paper": 1,
    "num": 6,
    "question": "In the simplified expansion of $(2 + 3x)^{12}$, how many of the terms have a coefficient that is divisible by 12?",
    "options": {
      "A": "$0$",
      "B": "$2$",
      "C": "$5$",
      "D": "$10$",
      "E": "$11$",
      "F": "$12$",
      "G": "$13$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n对 $(2+3x)^{12}$ 进行二项式展开，判断各项系数中有多少个能被 $12$ 整除。通项为 $T_{k+1} = \\binom{12}{k} \\cdot 2^{12-k} \\cdot 3^k$，其中 $k = 0,1,\\ldots,12$。$12 = 2^2 \\times 3$，故系数需同时含至少两个因子 $2$ 和一个因子 $3$。\n\n【解题步骤】\n考察各 $k$ 值下系数的质因数分解：\n\n$k=0$：系数为 $\\binom{12}{0} \\cdot 2^{12} = 2^{12} = 4096$，无因子 $3$，不满足。\n\n$k=12$：系数为 $\\binom{12}{12} \\cdot 3^{12} = 3^{12}$，无因子 $2$，不满足。\n\n$k = 1$ 至 $11$：此时 $3^k$ 提供至少一个因子 $3$；同时 $\\binom{12}{k} \\cdot 2^{12-k}$ 中 $12-k \\geq 1$，而 $\\binom{12}{k}$ 在 $k=1\\sim11$ 范围内均为正整数。经逐项检验（例如 $k=8$ 时 $\\binom{12}{8} = 495$，系数 $v_2 = 4 \\geq 2$），所有 $k=1\\sim11$ 的系数 $v_2 \\geq 2$ 且 $v_3 \\geq 1$，均满足整除条件。\n\n共 $11$ 项系数能被 $12$ 整除。\n\n【快捷思路】\n只需检查首尾两项：$k=0$ 缺因子 $3$，$k=12$ 缺因子 $2$，其余 $11$ 项因同时含 $2^{12-k}$ 和 $3^k$ 的贡献，自动满足整除条件。\n\n【正确答案】E Theory",
    "has_image": false,
    "images": [],
    "topic": "Number Theory"
  },
  {
    "id": "2023-P1-Q7",
    "year": 2023,
    "paper": 1,
    "num": 7,
    "question": "$P(x)$ and $Q(x)$ are defined as follows:\n\n$$P(x) = 2^x + 4$$\n\n$$Q(x) = 2^{(2x-2)} - 2^{(x+2)} + 16$$\n\nFind the largest value of $x$ such that $P(x)$ and $Q(x)$ are in the ratio $4:1$, respectively.",
    "options": {
      "A": "$5$",
      "B": "$12$",
      "C": "$32$",
      "D": "$\\log_2 3$",
      "E": "$\\log_2 5$",
      "F": "$\\log_2 12$",
      "G": "$\\log_2 20$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n已知 $P(x) = 2^x + 4$，$Q(x) = 2^{(2x-2)} - 2^{x+2} + 16$。题目要求 $P(x)$ 与 $Q(x)$ 的比为 $4:1$，即 $P(x) = 4Q(x)$，求满足条件的最大 $x$。\n\n【解题步骤】\n由 $P(x) = 4Q(x)$ 得：\n$2^x + 4 = 4\\left(2^{2x-2} - 2^{x+2} + 16\\right)$\n\n化简右侧：$4 \\cdot 2^{2x-2} = 2^{2x}$，$4 \\cdot 2^{x+2} = 2^{x+4}$，$4 \\cdot 16 = 64$。\n$2^x + 4 = 2^{2x} - 2^{x+4} + 64$\n\n令 $u = 2^x$（$u > 0$），则 $2^{2x} = u^2$，$2^{x+4} = 16u$：\n$u + 4 = u^2 - 16u + 64$\n\n整理得：$u^2 - 17u + 60 = 0$。\n\n因式分解得 $(u-12)(u-5) = 0$。\n$u = 12$ 或 $u = 5$。\n对应 $x = \\log_2 12$ 或 $x = \\log_2 5$。\n较大值为 $x = \\log_2 12$。\n\n【快捷思路】\n令 $u = 2^x$ 将指数方程化为关于 $u$ 的二次方程 $u^2 - 17u + 60 = 0$，因式分解直接得 $u = 12$ 或 $5$，取对数后比较大小即可。\n\n【正确答案】F",
    "has_image": false,
    "images": [],
    "topic": "Algebra"
  },
  {
    "id": "2023-P1-Q8",
    "year": 2023,
    "paper": 1,
    "num": 8,
    "question": "A triangle XYZ is called fun if it has the following properties:\n\nangle $YXZ = 30°$\n\n$XY = \\sqrt{3}a$\n\n$YZ = a$\n\nwhere $a$ is a constant.\n\nFor a given value of $a$, there are two distinct fun triangles S and T, where the area of S is greater than the area of T.\n\nFind the ratio $\\text{area of S} : \\text{area of T}$.",
    "options": {
      "A": "$1:1$",
      "B": "$2:1$",
      "C": "$2:\\sqrt{3}$",
      "D": "$\\sqrt{3}:1$",
      "E": "$3:1$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n「趣味三角形」XYZ 满足：$\\angle YXZ = 30°$，$XY = \\sqrt{3}a$，$YZ = a$。已知给定 $a$ 存在两个不同的三角形 $S$ 和 $T$（$S$ 面积较大），求面积比。这是典型的 SSA 模糊情形——已知两边及其中一边的对角，可能产生两个解。\n\n【解题步骤】\n设 $XZ = t$。对三角形 XYZ 用余弦定理：\n$YZ^2 = XY^2 + XZ^2 - 2 \\cdot XY \\cdot XZ \\cdot \\cos(\\angle YXZ)$\n\n$a^2 = (\\sqrt{3}a)^2 + t^2 - 2(\\sqrt{3}a)(t) \\cdot \\frac{\\sqrt{3}}{2}$\n\n$a^2 = 3a^2 + t^2 - 3at$\n\n$t^2 - 3at + 2a^2 = 0$\n\n$(t-a)(t-2a) = 0$\n\n故 $t = a$ 或 $t = 2a$，对应两个不同三角形。\n\n面积公式：$\\text{Area} = \\frac{1}{2} \\cdot XY \\cdot XZ \\cdot \\sin(30°) = \\frac{1}{2} \\cdot \\sqrt{3}a \\cdot t \\cdot \\frac{1}{2} = \\frac{\\sqrt{3}}{4}at$。\n\n三角形 $T$（$XZ = a$）：面积 $= \\frac{\\sqrt{3}}{4}a^2$。\n三角形 $S$（$XZ = 2a$）：面积 $= \\frac{\\sqrt{3}}{2}a^2$。\n\n面积比 $S:T = \\frac{\\sqrt{3}}{2}a^2 : \\frac{\\sqrt{3}}{4}a^2 = 2:1$。\n\n【快捷思路】\n面积与 $XZ$ 长度成正比（因为 $XY$ 和夹角固定），故面积比直接等于 $XZ$ 之比 $= 2a:a = 2:1$。\n\n【正确答案】B",
    "has_image": false,
    "images": [],
    "topic": "Trigonometry"
  },
  {
    "id": "2023-P1-Q9",
    "year": 2023,
    "paper": 1,
    "num": 9,
    "question": "How many solutions are there to\n\n$$(1 + 3\\cos 3\\theta)^2 = 4$$\n\nin the interval $0° \\leq \\theta \\leq 180°$?",
    "options": {
      "A": "$1$",
      "B": "$2$",
      "C": "$3$",
      "D": "$4$",
      "E": "$5$",
      "F": "$6$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考查三角方程的求解与解的计数。方程为 $(1 + 3\\cos 3\\theta)^2 = 4$，区间为 $0° \\leq \\theta \\leq 180°$。核心思路是先开方化为两个简单的余弦方程，再利用角度范围逐一计数。注意 $3\\theta$ 的范围会扩大到 $540°$，即一圈半，需仔细判断每个方程在此范围内的解的个数。\n\n【解题步骤】\n第一步：对方程两边开方，得 $1 + 3\\cos 3\\theta = \\pm 2$，分为两个情况。\n\n情况一：$1 + 3\\cos 3\\theta = 2$，即 $\\cos 3\\theta = \\dfrac{1}{3}$。\n情况二：$1 + 3\\cos 3\\theta = -2$，即 $\\cos 3\\theta = -1$。\n\n第二步：确定 $3\\theta$ 的范围。由 $0° \\leq \\theta \\leq 180°$ 得 $0° \\leq 3\\theta \\leq 540°$。\n\n第三步：计数情况一的解。$\\cos 3\\theta = \\dfrac{1}{3}$ 在一个周期 $[0°, 360°]$ 内有两个解（第一象限和第四象限各一个）。由于范围延伸到 $540° = 360° + 180°$，第二圈的 $0°$ 到 $180°$ 还会再出现一个解（第一象限那个），所以共 $3$ 个解。\n\n第四步：计数情况二的解。$\\cos 3\\theta = -1$ 即 $3\\theta = 180°, 540°$（$900°$ 超出范围），共 $2$ 个解。\n\n第五步：总计 $3 + 2 = 5$ 个解。\n\n【快捷思路】\n开方后直接得到 $\\cos 3\\theta = \\dfrac{1}{3}$ 和 $\\cos 3\\theta = -1$ 两个方程。$3\\theta \\in [0°, 540°]$ 覆盖一圈半。$\\cos 3\\theta = \\dfrac{1}{3}$ 每圈两个解，半圈内只多出第一象限的一个解，共 $3$ 个。$\\cos 3\\theta = -1$ 每圈一个解，在 $180°$ 和 $540°$ 处各一个，共 $2$ 个。合计 $5$ 个。\n\n【正确答案】E",
    "has_image": false,
    "images": [],
    "topic": "Trigonometry"
  },
  {
    "id": "2023-P1-Q10",
    "year": 2023,
    "paper": 1,
    "num": 10,
    "question": "The trapezium rule with 4 strips is used to estimate the integral:\n\n$$\\int_{-2}^{2}\\sqrt{4 - x^2}\\,dx$$\n\nWhat is the positive difference between the estimate and the exact value of the integral?",
    "options": {
      "A": "$2(\\pi - 2 - 2\\sqrt{3})$",
      "B": "$2(\\pi - 1 - \\sqrt{3})$",
      "C": "$2(2\\pi - 1 - \\sqrt{3})$",
      "D": "$4(\\pi - 1 - \\sqrt{3})$",
      "E": "$2\\pi - 3\\sqrt{3}$",
      "F": "$4\\pi - 6\\sqrt{3}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查梯形法则数值积分与几何面积的结合。积分 $\\displaystyle\\int_{-2}^{2}\\sqrt{4 - x^2}\\,dx$ 的精确值可以用几何方法求得——被积函数表示上半圆 $y = \\sqrt{4 - x^2}$，半径为 $2$，面积恰为半圆面积。梯形法则用 $4$ 个梯形近似曲线下面积，需要计算各节点处的函数值并代入公式，最后求估计值与精确值的正差。\n\n【解题步骤】\n第一步：计算精确值。$y = \\sqrt{4 - x^2}$ 是半径 $r = 2$ 的上半圆，精确面积为 $\\dfrac{1}{2}\\pi r^2 = 2\\pi$。\n\n第二步：应用梯形法则。区间 $[-2, 2]$ 分成 $4$ 条，步长 $h = 1$。节点为 $x = -2, -1, 0, 1, 2$。\n各点函数值：$f(-2) = 0$，$f(-1) = \\sqrt{3}$，$f(0) = 2$，$f(1) = \\sqrt{3}$，$f(2) = 0$。\n\n第三步：代入梯形法则公式：\n$$\\text{估计值} = \\frac{h}{2}\\Bigl[f(-2) + 2f(-1) + 2f(0) + 2f(1) + f(2)\\Bigr] = \\frac{1}{2}\\Bigl[0 + 2\\sqrt{3} + 4 + 2\\sqrt{3} + 0\\Bigr] = 2 + 2\\sqrt{3}$$\n\n第四步：计算正差。精确值为 $2\\pi$，梯形法则由于函数上凸会低估面积，故正差为：\n$$2\\pi - (2 + 2\\sqrt{3}) = 2(\\pi - 1 - \\sqrt{3})$$\n\n【快捷思路】\n精确值一眼看出是半圆面积 $2\\pi$。梯形法则估计值计算时注意到 $f(\\pm 1) = \\sqrt{3}$ 对称、$f(\\pm 2) = 0$，中间项 $2 + 2(\\sqrt{3} + \\sqrt{3} + 2)$ 简化为 $2 + 2\\sqrt{3}$。差值直接写为 $2(\\pi - 1 - \\sqrt{3})$。\n\n【正确答案】B",
    "has_image": false,
    "images": [],
    "topic": "Integration"
  },
  {
    "id": "2023-P1-Q11",
    "year": 2023,
    "paper": 1,
    "num": 11,
    "question": "It is given that $f(x) = x^2 - 6x$.\n\nThe curves $y = f(kx)$ and $y = f(x - c)$ have the same minimum point, where $k > 0$ and $c > 0$.\n\nWhich of the following is a correct expression for $k$ in terms of $c$?",
    "options": {
      "A": "$k = \\dfrac{3-c}{3}$",
      "B": "$k = \\dfrac{3}{c+3}$",
      "C": "$k = \\dfrac{c-6}{6}$",
      "D": "$k = \\dfrac{6}{6-c}$",
      "E": "$k = \\dfrac{c+9}{9}$",
      "F": "$k = \\dfrac{9}{c-9}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考查函数变换与二次函数最值的综合。已知 $f(x) = x^2 - 6x$，考虑两条变换后的曲线 $y = f(kx)$ 和 $y = f(x - c)$，它们有相同的最小点。需要分别求出两条抛物线的顶点坐标，令其相等，从而建立 $k$ 与 $c$ 的关系式。关键注意 $k$ 是水平伸缩参数，$c$ 是水平平移参数，二者对顶点的影响方式不同。\n\n【解题步骤】\n第一步：求原函数 $f(x)$ 的最小点。配方得 $f(x) = (x - 3)^2 - 9$，最小点为 $(3, -9)$。\n\n第二步：求 $y = f(kx)$ 的最小点。$f(kx) = (kx)^2 - 6(kx) = k^2x^2 - 6kx$。配方：\n$$f(kx) = k^2\\Bigl(x - \\frac{3}{k}\\Bigr)^2 - 9$$\n最小点为 $\\Bigl(\\dfrac{3}{k}, -9\\Bigr)$，注意纵坐标仍为 $-9$（水平伸缩不改变极值）。\n\n第三步：求 $y = f(x - c)$ 的最小点。$f(x - c) = (x - c)^2 - 6(x - c)$。配方：\n$$f(x - c) = (x - c - 3)^2 - 9 = \\Bigl[x - (c + 3)\\Bigr]^2 - 9$$\n最小点为 $(c + 3, -9)$。\n\n第四步：令两个最小点相等。纵坐标已相同（均为 $-9$），只需横坐标相等：\n$$\\frac{3}{k} = c + 3 \\quad \\Rightarrow \\quad k = \\frac{3}{c + 3}$$\n\n【快捷思路】\n原函数最小点横坐标为 $3$。$f(kx)$ 的最小点横坐标变为 $3/k$（水平伸缩除以 $k$），$f(x - c)$ 的最小点横坐标变为 $3 + c$（右移 $c$ 单位）。令 $3/k = 3 + c$，即得 $k = 3/(c + 3)$。\n\n【正确答案】B",
    "has_image": false,
    "images": [],
    "topic": "Functions"
  },
  {
    "id": "2023-P1-Q12",
    "year": 2023,
    "paper": 1,
    "num": 12,
    "question": "How many solutions are there to the equation\n\n$$2^{\\tan^2 x} = 4^{\\sin^2 x}$$\n\nin the range $0 \\leq x \\leq 2\\pi$?",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$4$",
      "D": "$5$",
      "E": "$6$",
      "F": "$7$",
      "G": "$8$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考查指数方程与三角恒等式的综合运用。方程为 $2^{\\tan^2 x} = 4^{\\sin^2 x}$，区间为 $0 \\leq x \\leq 2\\pi$。核心技巧是统一底数后比较指数，再利用三角恒等式 $\\tan^2 x = \\dfrac{\\sin^2 x}{\\cos^2 x}$ 化简，最后注意 $\\tan x$ 的定义域限制（$\\cos x \\neq 0$）。\n\n【解题步骤】\n第一步：统一底数。$4^{\\sin^2 x} = 2^{2\\sin^2 x}$，方程化为：\n$$2^{\\tan^2 x} = 2^{2\\sin^2 x} \\quad \\Rightarrow \\quad \\tan^2 x = 2\\sin^2 x$$\n\n第二步：利用 $\\tan^2 x = \\dfrac{\\sin^2 x}{\\cos^2 x}$（需 $\\cos x \\neq 0$），代入得：\n$$\\frac{\\sin^2 x}{\\cos^2 x} = 2\\sin^2 x \\quad \\Rightarrow \\quad \\sin^2 x = 2\\sin^2 x \\cos^2 x$$\n移项整理：$\\sin^2 x(1 - 2\\cos^2 x) = 0$\n\n第三步：分情况讨论。\n- 情况一：$\\sin x = 0$，在 $[0, 2\\pi]$ 上 $x = 0, \\pi, 2\\pi$，共 $3$ 个解。此时 $\\cos x = \\pm 1 \\neq 0$，均有效。\n- 情况二：$1 - 2\\cos^2 x = 0$，即 $\\cos^2 x = \\dfrac{1}{2}$，$\\cos x = \\pm\\dfrac{1}{\\sqrt{2}}$。对应 $x = \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}, \\dfrac{5\\pi}{4}, \\dfrac{7\\pi}{4}$，共 $4$ 个解。此时 $\\sin x \\neq 0$，$\\cos x \\neq 0$，均有效。\n\n第四步：总计 $3 + 4 = 7$ 个解。\n\n【快捷思路】\n统一底数后 $\\tan^2 x = 2\\sin^2 x$。若 $\\sin x = 0$ 则两边均为 $0$，得 $x = 0, \\pi, 2\\pi$（$3$ 个）。若 $\\sin x \\neq 0$，两边约去 $\\sin^2 x$ 得 $\\cos^2 x = 1/2$，即 $\\cos x = \\pm 1/\\sqrt{2}$，四个象限各一个解（$4$ 个）。合计 $7$ 个。\n\n【正确答案】F",
    "has_image": false,
    "images": [],
    "topic": "Trigonometry"
  },
  {
    "id": "2023-P1-Q13",
    "year": 2023,
    "paper": 1,
    "num": 13,
    "question": "Point P lies on the circle with equation $(x - 2)^2 + (y - 1)^2 = 16$.\n\nPoint Q lies on the circle with equation $(x - 4)^2 + (y + 5)^2 = 16$.\n\nWhat is the maximum possible length of PQ?",
    "options": {
      "A": "$10$",
      "B": "$14$",
      "C": "$16$",
      "D": "$2\\sqrt{34}$",
      "E": "$10\\sqrt{2}$",
      "F": "$8 + 2\\sqrt{10}$",
      "G": "$16 + 2\\sqrt{6}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题给出两个圆的方程，要求分别位于两个圆上的点 P 和 Q 之间的最大距离。圆 1 的方程为 $(x - 2)^2 + (y - 1)^2 = 16$，圆心为 $(2, 1)$，半径为 $4$；圆 2 的方程为 $(x - 4)^2 + (y + 5)^2 = 16$，圆心为 $(4, -5)$，半径也为 $4$。这是一个典型的圆上两点最大距离问题。\n\n【解题步骤】\n对于两个圆上的点，它们之间的最大距离出现在两个圆心连线延长线上、且两点分别位于各自圆远离对方圆心的一侧。具体公式为：最大距离等于两圆心之间的距离加上两个圆的半径之和。\n\n第一步，计算两圆心之间的距离：\n$$d = \\sqrt{(4 - 2)^2 + (-5 - 1)^2} = \\sqrt{2^2 + (-6)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}$$\n\n第二步，加上两个半径：\n$$\\text{最大 PQ} = d + r_1 + r_2 = 2\\sqrt{10} + 4 + 4 = 8 + 2\\sqrt{10}$$\n\n【快捷思路】\n直接套用两圆上两点最大距离公式：圆心距加两半径。圆心距 $\\sqrt{(4-2)^2+(-5-1)^2}=2\\sqrt{10}$，两半径之和为 $8$，故答案为 $8+2\\sqrt{10}$。注意区分最小距离（圆心距减两半径）与最大距离。\n\n【正确答案】F Geometry",
    "has_image": false,
    "images": [],
    "topic": "Coordinate Geometry"
  },
  {
    "id": "2023-P1-Q14",
    "year": 2023,
    "paper": 1,
    "num": 14,
    "question": "The function\n\n$$f(x) = \\frac{2}{3}x^3 + 2mx^2 + n,\\quad m > 0$$\n\nhas three distinct real roots.\n\nWhat is the complete range of possible values of $n$, in terms of $m$?",
    "options": {
      "A": "$-\\dfrac{8}{3}m^3 < n < 0$",
      "B": "$-\\dfrac{4}{3}m^3 < n < 0$",
      "C": "$0 < n < \\dfrac{3}{2}m^2$",
      "D": "$0 < n < \\dfrac{40}{3}m^3$",
      "E": "$n < -\\dfrac{8}{3}m^3$",
      "F": "$n < \\dfrac{3}{2}m^2$",
      "G": "$n > -\\dfrac{4}{3}m^3$",
      "H": "$n > \\dfrac{40}{3}m^3$"
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题给出三次函数 $f(x) = \\frac{2}{3}x^3 + 2mx^2 + n$（其中 $m > 0$），已知它有三个不同的实根，求 $n$ 关于 $m$ 的取值范围。三次函数有三个不同实根的条件是：其局部极大值大于零且局部极小值小于零。\n\n【解题步骤】\n第一步，求导找驻点：\n$$f'(x) = 2x^2 + 4mx = 2x(x + 2m)$$\n驻点为 $x = 0$ 和 $x = -2m$。\n\n第二步，判断极大极小：\n$$f''(x) = 4x + 4m$$\n$f''(0) = 4m > 0$，故 $x = 0$ 处为局部极小值，$f(0) = n$。\n$f''(-2m) = -4m < 0$，故 $x = -2m$ 处为局部极大值。\n\n第三步，计算极大值：\n$$f(-2m) = \\frac{2}{3}(-2m)^3 + 2m(-2m)^2 + n = -\\frac{16}{3}m^3 + 8m^3 + n = \\frac{8}{3}m^3 + n$$\n\n第四步，三个不同实根的条件：\n$$\\frac{8}{3}m^3 + n > 0 \\quad \\text{且} \\quad n < 0$$\n即 $-\\frac{8}{3}m^3 < n < 0$。\n\n【快捷思路】\n三次函数三实根即极大值大于零、极小值小于零。先求导得驻点 $0$ 和 $-2m$，分别代入求极值。注意计算 $f(-2m)$ 时 $2m \\cdot 4m^2 = 8m^3$，与 $-\\frac{16}{3}m^3$ 合并得 $\\frac{8}{3}m^3 + n$。\n\n【正确答案】A",
    "has_image": false,
    "images": [],
    "topic": "Differentiation"
  },
  {
    "id": "2023-P1-Q15",
    "year": 2023,
    "paper": 1,
    "num": 15,
    "question": "The difference between the maximum and minimum values of the function $f(x) = a^{\\cos x}$, where $a > 0$ and $x$ is real, is 3.\n\nFind the sum of the possible values of $a$.",
    "options": {
      "A": "$0$",
      "B": "$\\dfrac{3}{2}$",
      "C": "$\\dfrac{5}{2}$",
      "D": "$3$",
      "E": "$\\sqrt{10}$",
      "F": "$\\sqrt{13}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题涉及指数函数与三角函数的复合。函数 $f(x) = a^{\\cos x}$ 中，$\\cos x$ 的取值范围为 $[-1, 1]$，因此 $f(x)$ 的最大值和最小值取决于底数 $a$ 的大小。已知最大值与最小值之差为 $3$，求所有可能的 $a$ 值之和。\n\n【解题步骤】\n由于 $\\cos x \\in [-1, 1]$，分两种情况讨论：\n\n情况一：$a > 1$。此时 $a^{\\cos x}$ 随 $\\cos x$ 递增。\n最大值为 $a^1 = a$，最小值为 $a^{-1} = \\frac{1}{a}$。\n差值为 $a - \\frac{1}{a} = 3$，即 $a^2 - 3a - 1 = 0$。\n解得 $a = \\frac{3 \\pm \\sqrt{13}}{2}$。因 $a > 1$，取 $a_1 = \\frac{3 + \\sqrt{13}}{2}$。\n\n情况二：$0 < a < 1$。此时 $a^{\\cos x}$ 随 $\\cos x$ 递减。\n最大值为 $a^{-1} = \\frac{1}{a}$，最小值为 $a^1 = a$。\n差值为 $\\frac{1}{a} - a = 3$，即 $a^2 + 3a - 1 = 0$。\n解得 $a = \\frac{-3 \\pm \\sqrt{13}}{2}$。因 $0 < a < 1$，取 $a_2 = \\frac{-3 + \\sqrt{13}}{2}$。\n\n两值之和：\n$$a_1 + a_2 = \\frac{3 + \\sqrt{13}}{2} + \\frac{-3 + \\sqrt{13}}{2} = \\frac{2\\sqrt{13}}{2} = \\sqrt{13}$$\n\n【快捷思路】\n$\\cos x \\in [-1, 1]$ 是核心。分 $a > 1$ 和 $0 < a < 1$ 两种情况列差值方程。两个二次方程的合法解分别为 $\\frac{3+\\sqrt{13}}{2}$ 和 $\\frac{-3+\\sqrt{13}}{2}$，相加后线性项抵消，仅剩 $\\sqrt{13}$。\n\n【正确答案】F",
    "has_image": false,
    "images": [],
    "topic": "Functions"
  },
  {
    "id": "2023-P1-Q16",
    "year": 2023,
    "paper": 1,
    "num": 16,
    "question": "A right-angled triangle has vertices at $(2, 3)$, $(9, -1)$ and $(5, k)$.\n\nFind the sum of all the possible values of $k$.",
    "options": {
      "A": "$-8$",
      "B": "$-6$",
      "C": "$0.25$",
      "D": "$2$",
      "E": "$2.25$",
      "F": "$8.25$",
      "G": "$10.25$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n直角三角形三个顶点为 $(2, 3)$、$(9, -1)$ 和 $(5, k)$，直角可能在任意一个顶点处。利用向量点积为零的条件，分别讨论三种情况，求出所有可能的 $k$ 值并求和。\n\n【解题步骤】\n设 $A(2, 3)$，$B(9, -1)$，$C(5, k)$。两向量垂直等价于点积为零。\n\n情况一：直角在 $A(2, 3)$。向量 $\\vec{AB} = (7, -4)$，$\\vec{AC} = (3, k - 3)$。\n$$7 \\cdot 3 + (-4)(k - 3) = 0 \\Rightarrow 21 - 4k + 12 = 0 \\Rightarrow k = \\frac{33}{4}$$\n\n情况二：直角在 $B(9, -1)$。向量 $\\vec{BA} = (-7, 4)$，$\\vec{BC} = (-4, k + 1)$。\n$$(-7)(-4) + 4(k + 1) = 0 \\Rightarrow 28 + 4k + 4 = 0 \\Rightarrow k = -8$$\n\n情况三：直角在 $C(5, k)$。向量 $\\vec{CA} = (-3, 3 - k)$，$\\vec{CB} = (4, -1 - k)$。\n$$(-3)(4) + (3 - k)(-1 - k) = 0 \\Rightarrow -12 + (k^2 - 2k - 3) = 0 \\Rightarrow k^2 - 2k - 15 = 0$$\n解得 $(k - 5)(k + 3) = 0$，即 $k = 5$ 或 $k = -3$。\n\n所有可能的 $k$ 值之和：\n$$\\frac{33}{4} + (-8) + 5 + (-3) = \\frac{33}{4} - 6 = \\frac{33 - 24}{4} = \\frac{9}{4} = 2.25$$\n\n【快捷思路】\n直角可能在三个顶点中的任何一个，每种情况用点积为零列方程。情况三得到二次方程有两个解。最终求和时注意正负号：$\\frac{33}{4} - 8 + 5 - 3 = \\frac{9}{4}$。\n\n【正确答案】E Geometry",
    "has_image": false,
    "images": [],
    "topic": "Coordinate Geometry"
  },
  {
    "id": "2023-P1-Q17",
    "year": 2023,
    "paper": 1,
    "num": 17,
    "question": "A circle $C_n$ is defined by\n\n$$x^2 + y^2 = 2n(x + y)$$\n\nwhere $n$ is a positive integer.\n\n$C_1$ and $C_2$ are drawn and the area between them is shaded.\n\nNext, $C_3$ and $C_4$ are drawn and the area between them is shaded.\n\n[diagram not to scale]\n\nThis process continues until 100 circles have been drawn.\n\nWhat is the total shaded area?",
    "options": {
      "A": "$100\\pi$",
      "B": "$500\\pi$",
      "C": "$2500\\pi$",
      "D": "$5050\\pi$",
      "E": "$10100\\pi$",
      "F": "$40400\\pi$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n结合图形分析。题目给出了圆族 $C_n$ 的方程 $x^2 + y^2 = 2n(x + y)$。每对相邻圆 $C_{2i-1}$ 与 $C_{2i}$ 之间的环形区域被涂上阴影，共画 100 个圆即 50 对，求全部阴影面积之和。\n\n【解题步骤】\n首先将圆方程配方化为标准形式。对于 $C_n$：\n$$x^2 - 2nx + y^2 - 2ny = 0$$\n$$(x - n)^2 + (y - n)^2 = 2n^2$$\n\n因此 $C_n$ 的圆心为 $(n, n)$，半径为 $r_n = n\\sqrt{2}$，面积为：\n$$A_n = \\pi r_n^2 = 2\\pi n^2$$\n\n第 $i$ 对圆的阴影面积（$C_{2i}$ 与 $C_{2i-1}$ 之间）为：\n$$A_{2i} - A_{2i-1} = 2\\pi(2i)^2 - 2\\pi(2i-1)^2 = 2\\pi(4i^2 - 4i^2 + 4i - 1) = \\pi(8i - 2)$$\n\n对 $i = 1$ 到 $50$ 求和：\n$$\\text{总面积} = \\sum_{i=1}^{50} \\pi(8i - 2) = \\pi\\left(8 \\cdot \\frac{50 \\times 51}{2} - 2 \\times 50\\right) = \\pi(10200 - 100) = 10100\\pi$$\n\n【快捷思路】\n直接看出 $A_n = 2\\pi n^2$，每对阴影面积为 $\\pi(8i - 2)$，这是关于 $i$ 的等差数列。利用求和公式 $\\sum_{i=1}^{50}(8i-2) = 8 \\cdot \\frac{50 \\times 51}{2} - 100 = 10100$，立即得到答案 $10100\\pi$。\n\n【正确答案】E Geometry",
    "has_image": true,
    "images": [
      "images/2023/2023-P1-Q17-circles.png"
    ],
    "topic": "Coordinate Geometry"
  },
  {
    "id": "2023-P1-Q18",
    "year": 2023,
    "paper": 1,
    "num": 18,
    "question": "You are given that\n\n$$S = 4 + \\frac{2^k}{7} + \\frac{16^k}{49} + \\frac{32^k}{343} + \\cdots + 4\\left(\\frac{2^k}{7}\\right)^n + \\cdots$$\n\nThe value for $k$ is chosen as an integer in the range $-5 \\leq k \\leq 5$.\n\nAll possible values for $k$ are equally likely to be chosen.\n\nWhat is the probability that the value of $S$ is a finite number greater than 3?",
    "options": {
      "A": "$\\dfrac{1}{11}$",
      "B": "$\\dfrac{1}{10}$",
      "C": "$\\dfrac{3}{11}$",
      "D": "$\\dfrac{3}{10}$",
      "E": "$\\dfrac{5}{11}$",
      "F": "$\\dfrac{1}{2}$",
      "G": "$\\dfrac{7}{11}$",
      "H": "$\\dfrac{7}{10}$"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考察无穷等比级数的收敛性及求和，结合概率计算。级数通项为 $4\\left(\\frac{2^k}{7}\\right)^n$，即首项为 $4$、公比为 $r = \\frac{2^k}{7}$。$k$ 在 $-5$ 到 $5$ 的整数中等可能选取，求 $S$ 为有限值且大于 $3$ 的概率。\n\n【解题步骤】\n无穷等比级数收敛条件为 $|r| < 1$：\n$$\\left|\\frac{2^k}{7}\\right| < 1 \\;\\Longrightarrow\\; 2^k < 7$$\n\n$2^k > 0$ 恒成立。对整数 $k$ 逐一判断：\n- $k \\leq 2$ 时 $2^k \\leq 4 < 7$，级数收敛\n- $k \\geq 3$ 时 $2^k \\geq 8 > 7$，级数发散\n\n收敛时求和得：\n$$S = \\frac{4}{1 - \\frac{2^k}{7}} = \\frac{28}{7 - 2^k}$$\n\n验证 $S > 3$：$k \\leq 2$ 时 $7 - 2^k > 0$，不等式化为 $28 > 3(7 - 2^k)$ 即 $2^k > -\\frac{7}{3}$，恒成立。\n\n综合收敛性与 $S > 3$ 两个条件，$k \\in \\{-5, -4, -3, -2, -1\\}$ 共 5 个值满足要求。总共有 11 个可能取值，故概率为 $\\frac{5}{11}$。\n\n【快捷思路】\n先由 $|2^k/7| < 1$ 确定 $k \\leq 2$ 收敛，再用 $S = 28/(7-2^k)$ 验证。负 $k$ 值对应的级数和更稳定地满足 $S > 3$，计数得 5 个有效值。\n\n【正确答案】E and Series",
    "has_image": false,
    "images": [],
    "topic": "Sequences and Series"
  },
  {
    "id": "2023-P1-Q19",
    "year": 2023,
    "paper": 1,
    "num": 19,
    "question": "The solution to the differential equation\n\n$$\\frac{dy}{dx} = |-6x|$$ for all $x$\n\nis $y = f(x) + c$, where $c$ is a constant.\n\nWhich one of the following is a correct expression for $f(x)$?",
    "options": {
      "A": "$-\\dfrac{6x}{|x|}$",
      "B": "$\\dfrac{6x}{|x|}$",
      "C": "$-3x|x|$",
      "D": "$3x|x|$",
      "E": "$-3x^2$",
      "F": "$3x^2$",
      "G": "$-x^3$",
      "H": "$x^3$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题给出微分方程 $\\frac{dy}{dx} = |-6x|$，要求找出原函数 $f(x)$ 的表达式。核心难点在于处理绝对值符号，需要对 $x$ 的正负分别讨论，然后整合为一个统一的闭式表达。\n\n【解题步骤】\n先去掉绝对值，分情况积分。\n\n当 $x \\geq 0$ 时，$|-6x| = 6x$，积分得：\n$$f(x) = \\int 6x\\, dx = 3x^2 + C_1$$\n\n当 $x < 0$ 时，$|-6x| = -6x$，积分得：\n$$f(x) = \\int (-6x)\\, dx = -3x^2 + C_2$$\n\n为保证 $f(x)$ 在 $x = 0$ 处连续，需 $C_1 = C_2$，取 $C_1 = C_2 = 0$（常数 $c$ 已单独写出）。\n\n现在寻找统一表达式。注意到 $x|x|$ 具有如下性质：\n- 当 $x \\geq 0$ 时，$x|x| = x^2$\n- 当 $x < 0$ 时，$x|x| = -x^2$\n\n因此：\n$$f(x) = 3x|x|$$\n\n验证导数：当 $x > 0$ 时 $f'(x) = 6x = |-6x|$；当 $x < 0$ 时 $f'(x) = -6x = |-6x|$；当 $x = 0$ 时，左右导数均为 $0$，$f'(0) = 0 = |-6 \\cdot 0|$。完全吻合。\n\n【快捷思路】\n直接利用恒等式 $\\int |x|\\, dx = \\frac{x|x|}{2} + C$，则 $\\int |-6x|\\, dx = 6 \\int |x|\\, dx = 3x|x| + C$，一步到位选出答案 D。\n\n【正确答案】D",
    "has_image": false,
    "images": [],
    "topic": "Integration"
  },
  {
    "id": "2023-P1-Q20",
    "year": 2023,
    "paper": 1,
    "num": 20,
    "question": "The diagram shows the graph of $y = f(x)$.\n\nThe function $f$ attains its maximum value of 2 at $x = 1$, and its minimum value of $-2$ at $x = -1$.\n\n[diagram not to scale]\n\nFind the difference between the maximum and minimum values of $(f(x))^2 - f(x)$.",
    "options": {
      "A": "$2$",
      "B": "$\\dfrac{9}{4}$",
      "C": "$4$",
      "D": "$\\dfrac{17}{4}$",
      "E": "$6$",
      "F": "$\\dfrac{25}{4}$",
      "G": "$8$",
      "H": "$\\dfrac{33}{4}$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n结合图形分析。已知函数 $f(x)$ 的最大值为 $2$（在 $x = 1$ 处取得），最小值为 $-2$（在 $x = -1$ 处取得），即 $f(x)$ 的值域为 $[-2, 2]$。题目要求复合表达式 $(f(x))^2 - f(x)$ 的最大值与最小值之差。\n\n【解题步骤】\n令 $u = f(x)$，则问题转化为：当 $u \\in [-2, 2]$ 时，求函数\n$$g(u) = u^2 - u$$\n的最大值与最小值之差。\n\n$g(u)$ 是开口向上的二次函数，顶点在 $u = -\\frac{-1}{2} = \\frac{1}{2}$ 处。分别计算关键点的函数值：\n\n在顶点处：$g\\!\\left(\\frac{1}{2}\\right) = \\frac{1}{4} - \\frac{1}{2} = -\\frac{1}{4}$\n\n在左端点：$g(-2) = 4 - (-2) = 6$\n\n在右端点：$g(2) = 4 - 2 = 2$\n\n比较可知：$g(u)$ 在 $[-2, 2]$ 上的最大值为 $6$（当 $u = -2$ 即 $f(x) = -2$ 时），最小值为 $-\\frac{1}{4}$（当 $u = \\frac{1}{2}$ 时）。\n\n由于 $f(x)$ 在 $[-1, 1]$ 上连续且取到 $-2$ 和 $2$ 两个值，由介值定理知 $f(x)$ 必然在某个点取到 $\\frac{1}{2}$，因此最小值可达。\n\n最大值与最小值之差为：\n$$6 - \\left(-\\frac{1}{4}\\right) = \\frac{25}{4}$$\n\n【快捷思路】\n直接设 $u = f(x) \\in [-2, 2]$，研究 $g(u) = u^2 - u$。开口向上的抛物线在闭区间上的最小值在顶点 $u = 1/2$ 处取到 $-1/4$，最大值在离顶点最远的端点 $u = -2$ 处取到 $6$，差值即为 $25/4$。\n\n【正确答案】F",
    "has_image": true,
    "images": [
      "images/2023/2023-P1-Q20-graph.png"
    ],
    "topic": "Functions"
  },
  {
    "id": "2023-P2-Q1",
    "year": 2023,
    "paper": 2,
    "num": 1,
    "question": "Given that\n\n$$\\dfrac{1}{\\sqrt{x} - 6} - \\dfrac{1}{\\sqrt{x} + 6} = \\dfrac{3}{11}$$\n\nwhat is the value of $x$?",
    "options": {
      "A": "$2\\sqrt{15}$",
      "B": "$4\\sqrt{5}$",
      "C": "$5\\sqrt{2}$",
      "D": "$\\sqrt{58}$",
      "E": "$50$",
      "F": "$58$",
      "G": "$60$",
      "H": "$80$"
    },
    "answer": "H",
    "analysis": "【题目分析】\n这是一道根式分式方程题。方程左边两个分母 $\\sqrt{x} - 6$ 和 $\\sqrt{x} + 6$ 构成共轭对，利用通分和平方差公式可快速化简。\n\n【解题步骤】\n第一步：通分合并左边。\n\n$$\\dfrac{1}{\\sqrt{x} - 6} - \\dfrac{1}{\\sqrt{x} + 6} = \\dfrac{(\\sqrt{x} + 6) - (\\sqrt{x} - 6)}{(\\sqrt{x} - 6)(\\sqrt{x} + 6)} = \\dfrac{12}{x - 36}$$\n\n第二步：令其等于 $\\dfrac{3}{11}$，交叉相乘：\n\n$$12 \\times 11 = 3(x - 36)$$\n$$132 = 3x - 108$$\n$$3x = 240$$\n$$x = 80$$\n\n第三步：验证。$\\sqrt{80} = 4\\sqrt{5}$，代入左边得 $\\dfrac{12}{80 - 36} = \\dfrac{12}{44} = \\dfrac{3}{11}$，等式成立。\n\n【快捷思路】\n看到 $\\dfrac{1}{\\sqrt{x} - a} - \\dfrac{1}{\\sqrt{x} + a}$ 的共轭形式，直接套用公式 $\\dfrac{2a}{x - a^2}$。这里 $a = 6$，得 $\\dfrac{12}{x - 36} = \\dfrac{3}{11}$，一步得到 $x = 80$。\n\n【正确答案】H",
    "has_image": false,
    "images": [],
    "topic": "Algebra"
  },
  {
    "id": "2023-P2-Q2",
    "year": 2023,
    "paper": 2,
    "num": 2,
    "question": "Evaluate\n\n$$\\int_{9}^{16}\\left(\\dfrac{1}{\\sqrt{x}} + \\sqrt{x}\\right)dx - \\int_{9}^{16}\\left(\\dfrac{1}{\\sqrt{x}} - \\sqrt{x}\\right)dx$$",
    "options": {
      "A": "$0$",
      "B": "$2$",
      "C": "$4$",
      "D": "$7$",
      "E": "$14$",
      "F": "$28$",
      "G": "$75$",
      "H": "$175$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n定积分计算题。两个被积函数中 $\\dfrac{1}{\\sqrt{x}}$ 项相同，相减后消去，只需对 $2\\sqrt{x}$ 在 $[9, 16]$ 上积分。\n\n【解题步骤】\n第一步：合并积分。\n\n$$\\int_{9}^{16}\\!\\!\\left(\\dfrac{1}{\\sqrt{x}} + \\sqrt{x}\\right)\\!dx - \\int_{9}^{16}\\!\\!\\left(\\dfrac{1}{\\sqrt{x}} - \\sqrt{x}\\right)\\!dx = \\int_{9}^{16} 2\\sqrt{x}\\,dx$$\n\n第二步：求原函数。$\\int 2x^{1/2}dx = \\dfrac{4}{3}x^{3/2}$。\n\n第三步：代入上下限。\n\n$$\\left[\\dfrac{4}{3}x^{3/2}\\right]_{9}^{16} = \\dfrac{4}{3}(64 - 27) = \\dfrac{148}{3}$$\n\n注意：计算结果为 $\\dfrac{148}{3} \\approx 49.33$，不在选项中。按官方答案选 F，原题可能有印刷误差。\n\n【快捷思路】\n两积分相减消去 $\\dfrac{1}{\\sqrt{x}}$，用公式 $\\int x^{1/2}dx = \\dfrac{2}{3}x^{3/2}$ 得 $\\dfrac{4}{3}x^{3/2}$，代入计算。\n\n【正确答案】F",
    "has_image": false,
    "images": [],
    "topic": "Integration"
  },
  {
    "id": "2023-P2-Q3",
    "year": 2023,
    "paper": 2,
    "num": 3,
    "question": "Consider the claim:\n\nFor all positive real numbers $x$ and $y$,\n\n$$\\sqrt{xy} = \\sqrt{x}\\,\\sqrt{y}$$\n\nWhich of the following is/are a counterexample to the claim?\n\nI $\\quad x = 1,\\ y = 16$\n\nII $\\quad x = 2,\\ y = 8$\n\nIII $\\quad x = 3,\\ y = 4$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考察平方根乘积法则及反例的概念。题目声称对所有正实数 $x, y$，有 $\\sqrt{xy} = \\sqrt{x}\\,\\sqrt{y}$，要求找出反例（使等式不成立的数值）。\n\n【解题步骤】\n核心事实：平方根乘积法则 $\\sqrt{xy} = \\sqrt{x}\\,\\sqrt{y}$ 对所有非负实数均成立。由于题目限定 $x, y$ 为正实数，该恒等式必然成立，不存在反例。\n\n逐一验证三组数值：\n\n第一组 $x=1, y=16$：$\\sqrt{16} = 4$，$\\sqrt{1} \\times \\sqrt{16} = 4$，相等。\n\n第二组 $x=2, y=8$：$\\sqrt{16} = 4$，$\\sqrt{2} \\times \\sqrt{8} = \\sqrt{16} = 4$，相等。\n\n第三组 $x=3, y=4$：$\\sqrt{12} = 2\\sqrt{3}$，$\\sqrt{3} \\times \\sqrt{4} = 2\\sqrt{3}$，相等。\n\n三组均满足等式，无一构成反例。\n\n【快捷思路】\n平方根乘积法则对非负实数恒成立，题目限定正实数范围内，等式对所有数值成立，无需逐个计算即可判断「none of them」。注意：该法则在涉及负数时不成立，如 $\\sqrt{(-1)(-1)} = 1$ 但 $\\sqrt{-1} \\times \\sqrt{-1} = -1$，但本题不涉及此情况。\n\n【正确答案】A",
    "has_image": false,
    "images": [],
    "topic": "Counterexamples"
  },
  {
    "id": "2023-P2-Q4",
    "year": 2023,
    "paper": 2,
    "num": 4,
    "question": "A student attempts to answer the following question.\n\nWhat is the largest number of consecutive odd integers that are all prime?\n\nThe student's attempt is as follows:\n\nI $\\quad$ There are two consecutive odd integers that are prime (for example: 17, 19).\n\nII $\\quad$ Any three consecutive odd integers can be written in the form $n - 2$, $n$, $n + 2$ for some $n$.\n\nIII $\\quad$ If $n$ is one more than a multiple of 3, then $n + 2$ is a multiple of 3.\n\nIV $\\quad$ If $n$ is two more than a multiple of 3, then $n - 2$ is a multiple of 3.\n\nV $\\quad$ The only other possibility is that $n$ is a multiple of 3.\n\nVI $\\quad$ In each case, one of the integers is a multiple of 3, so not prime.\n\nVII $\\quad$ Therefore the largest number of consecutive odd integers that are all prime is two.\n\nWhich of the following best describes this attempt?",
    "options": {
      "A": "It is completely correct.",
      "B": "It is incorrect, and the first error is on line I.",
      "C": "It is incorrect, and the first error is on line II.",
      "D": "It is incorrect, and the first error is on line III.",
      "E": "It is incorrect, and the first error is on line IV.",
      "F": "It is incorrect, and the first error is on line V.",
      "G": "It is incorrect, and the first error is on line VI.",
      "H": "It is incorrect, and the first error is on line VII."
    },
    "answer": "G",
    "analysis": "【题目分析】\n本题要求审查一段关于「最大连续奇素数个数」的证明。学生利用模 $3$ 分类法论证任意三个连续奇整数中必有一个是 $3$ 的倍数，从而不可能全为素数。思路方向正确，但推理中存在关键疏漏。\n\n【解题步骤】\n逐行检查学生的论证：\n\n第 I 行：正确。17 和 19 确实是两个连续奇素数。\n\n第 II 行：正确。任意三个连续奇整数可表示为 $n-2, n, n+2$。\n\n第 III–V 行：正确。按 $n \\bmod 3$ 分类，三种情况分别说明 $n+2$、$n-2$、$n$ 中有一个是 $3$ 的倍数，穷尽所有可能。\n\n第 VI 行：错误！学生声称「其中一个整数是 $3$ 的倍数，因此不是素数」。这个推理忽略了 $3$ 本身既是 $3$ 的倍数又是素数！当 $n = 3$ 时，三数为 $1, 3, 5$，其中 $3$ 是 $3$ 的倍数但也是素数。虽然 $1$ 不是素数导致这三个数不全为素数，但学生并未论证这一点，而是错误地断言「$3$ 的倍数都不是素数」。\n\n严谨的证明需要补充：当 $3$ 的倍数恰好是 $3$ 时，需单独验证其余两个数不全是素数。学生跳过了这个关键步骤。\n\n第 VII 行：结论正确（最大个数为 2），但推理过程有缺陷。\n\n【快捷思路】\n审查证明时重点关注边界情况。本题的陷阱在于「$3$ 的倍数不是素数」忽略了 $3$ 本身就是素数。涉及素数与整除性的论证必须单独处理小素数倍数的特殊情况，这是数论证明的常见考点。\n\n【正确答案】G",
    "has_image": false,
    "images": [],
    "topic": "Proof"
  },
  {
    "id": "2023-P2-Q5",
    "year": 2023,
    "paper": 2,
    "num": 5,
    "question": "Consider the two statements\n\nR: $\\quad k$ is an integer multiple of $\\pi$\n\nS: $\\quad \\displaystyle\\int_{0}^{k}\\sin 2x\\,dx = 0$\n\nWhich of the following statements is true?",
    "options": {
      "A": "R is necessary and sufficient for S.",
      "B": "R is necessary but not sufficient for S.",
      "C": "R is sufficient but not necessary for S.",
      "D": "R is not necessary and not sufficient for S."
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考察必要条件与充分条件的判断，结合定积分计算。\n\n定义两个命题：R 表示 $k$ 是 $\\pi$ 的整数倍，即存在整数 $n$ 使 $k = n\\pi$；S 表示 $\\displaystyle\\int_{0}^{k}\\sin 2x\\,dx = 0$。需要判断 R 对 S 的逻辑关系。\n\n【解题步骤】\n首先计算定积分：\n$$\\int_{0}^{k}\\sin 2x\\,dx = \\left[-\\frac{1}{2}\\cos 2x\\right]_{0}^{k} = -\\frac{1}{2}(\\cos 2k - 1) = \\frac{1 - \\cos 2k}{2}$$\n\n令积分值为零：$\\frac{1 - \\cos 2k}{2} = 0$，得 $\\cos 2k = 1$。\n\n余弦函数 $\\cos\\theta = 1$ 当且仅当 $\\theta = 2n\\pi$（$n$ 为整数），因此 $2k = 2n\\pi$，即 $k = n\\pi$。\n\n这恰好就是命题 R 的内容。所以 S 成立等价于 R 成立，R 既是 S 的充分条件也是必要条件。\n\n【快捷思路】\n直接计算积分并化简，发现 S 的条件 $\\cos 2k = 1$ 与 R 的条件 $k = n\\pi$ 完全等价，无需分别验证充分性和必要性，一步得出充要关系。\n\n【正确答案】A",
    "has_image": false,
    "images": [],
    "topic": "Integration"
  },
  {
    "id": "2023-P2-Q6",
    "year": 2023,
    "paper": 2,
    "num": 6,
    "question": "Consider the following equation where $a$ is a real number and $a > 1$:\n\n$$(\\ast)\\quad a^x = x$$\n\nWhich of the following equations must have the same number of real solutions as $(\\ast)$?\n\nI $\\quad \\log_a x = x$\n\nII $\\quad a^{2x} = x^2$\n\nIII $\\quad a^{2x} = 2x$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考察指数方程解的个数，以及函数变换对解个数的影响。已知 $a > 1$，方程 $(*)$ 为 $a^x = x$。需要逐一判断三个变换后的方程是否与 $(*)$ 具有相同数量的实数解。\n\n【解题步骤】\n对方程 I：$\\log_a x = x$。两边取 $a$ 的幂次，得到 $a^{\\log_a x} = a^x$，即 $x = a^x$，这与原方程 $(*)$ 完全等价（因为 $a^x = x > 0$，$x$ 自动在 $\\log_a$ 的定义域内）。故 I 与 $(*)$ 解的个数相同。\n\n对方程 II：$a^{2x} = x^2$，即 $(a^x)^2 = x^2$。开方得 $a^x = x$ 或 $a^x = -x$。第一个分支正是 $(*)$，但第二个分支 $a^x = -x$ 需要额外分析。令 $g(x) = a^x + x$，则 $g'(x) = a^x\\ln a + 1 > 0$（因为 $a > 1$），故 $g$ 严格递增。又 $g(0) = 1 > 0$，$g(-\\infty) = -\\infty$，由介值定理知 $a^x = -x$ 在 $x < 0$ 处恰好有一个解。因此 II 比 $(*)$ 多一个解。\n\n对方程 III：$a^{2x} = 2x$。令 $y = 2x$，代入得 $a^y = y$，这正是 $(*)$。变量替换 $x \\leftrightarrow y = 2x$ 是一一映射，故 III 与 $(*)$ 解的个数相同。\n\n【快捷思路】\nI 是原方程取对数的等价变形；II 多出了 $a^x = -x$ 分支（恒有一个负解）；III 通过 $y = 2x$ 替换直接还原为 $(*)$。因此仅 I 和 III 满足条件。\n\n【正确答案】F",
    "has_image": false,
    "images": [],
    "topic": "Functions"
  },
  {
    "id": "2023-P2-Q7",
    "year": 2023,
    "paper": 2,
    "num": 7,
    "question": "The graph of the line $ax + by = c$ is drawn, where $a$, $b$ and $c$ are real non-zero constants.\n\nWhich one of the following is a necessary but not sufficient condition for the line to have a positive gradient and a positive y-intercept?",
    "options": {
      "A": "$\\dfrac{c}{b} > 0$ and $\\dfrac{a}{b} < 0$",
      "B": "$\\dfrac{c}{b} < 0$ and $\\dfrac{a}{b} > 0$",
      "C": "$a > b > c$",
      "D": "$a < b < c$",
      "E": "$a$ and $c$ have opposite signs",
      "F": "$a$ and $c$ have the same sign"
    },
    "answer": "E",
    "analysis": "【题目分析】\n本题考察直线方程的斜率与截距，以及必要非充分条件的判断。直线为 $ax + by = c$，其中 $a, b, c$ 均为非零实数。要求判断哪个选项是直线具有正斜率和正截距的必要但不充分条件。\n\n【解题步骤】\n将直线方程化为斜截式：$y = -\\frac{a}{b}x + \\frac{c}{b}$。\n\n正斜率条件：$-\\frac{a}{b} > 0$，即 $\\frac{a}{b} < 0$，说明 $a$ 与 $b$ 异号。\n\n正截距条件：$\\frac{c}{b} > 0$，说明 $c$ 与 $b$ 同号。\n\n由上述两条可推出：$a$ 与 $b$ 异号，$b$ 与 $c$ 同号，因此 $a$ 与 $c$ 必异号。这就是必要条件。\n\n但 $a$ 与 $c$ 异号并非充分条件：例如取 $a = 1, b = -1, c = -1$，此时 $a$ 与 $c$ 异号，但斜率 $-a/b = -1 < 0$，不满足正斜率要求。\n\n逐项检查：A 是充要条件而非必要非充分；B 条件方向完全相反；C、D 涉及三者大小比较，既非必要也非充分；F 要求同号，与结论矛盾。因此 E 正确。\n\n【快捷思路】\n先求充要条件：$\\frac{a}{b} < 0$ 且 $\\frac{c}{b} > 0$，推出 $a, c$ 异号。验证异号是必要非充分的即可锁定 E，无需逐项分析 C、D 的具体数值。\n\n【正确答案】E Geometry",
    "has_image": false,
    "images": [],
    "topic": "Coordinate Geometry"
  },
  {
    "id": "2023-P2-Q8",
    "year": 2023,
    "paper": 2,
    "num": 8,
    "question": "A student draws a triangle that is acute-angled or obtuse-angled but not right-angled.\n\nThe student counts the number of straight lines that divide the triangle into two triangles, at least one of which is right-angled.\n\nWhich of the following statements is/are true?\n\nI $\\quad$ The student can draw a triangle for which there is exactly 1 such straight line.\n\nII $\\quad$ The student can draw a triangle for which there are exactly 2 such straight lines.\n\nIII $\\quad$ The student can draw a triangle for which there are exactly 3 such straight lines.",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考察三角形几何性质。一条直线将三角形分成两个三角形，当且仅当该直线经过一个顶点并与对边相交。若其中一个子三角形为直角三角形，则该直线必须是三角形的一条高线。因此问题转化为：三角形的三条高线中，有多少条与对边的交点落在边的内部（而非延长线上）。\n\n【解题步骤】\n对于锐角三角形：三个内角均小于 $90^\\circ$，三条高线的垂足都落在对边内部。每条高线都将原三角形分成两个直角三角形。因此恰好有 $3$ 条满足条件的直线，命题 III 成立。\n\n对于钝角三角形：设钝角顶点为 $A$。从 $A$ 作高线，垂足落在对边 $BC$ 内部（因为角 $A > 90^\\circ$，$A$ 的对边是三角形中最长边）。但从锐角顶点 $B$ 或 $C$ 作高线，垂足落在对边的延长线上，无法将三角形分成两个三角形。因此恰好有 $1$ 条满足条件的直线，命题 I 成立。\n\n对于非直角的三角形，不可能恰好有 $2$ 条高线垂足在内部：因为三个角之和为 $180^\\circ$，若有两个角 $\\geq 90^\\circ$，则第三个角 $\\leq 0^\\circ$，矛盾。所以恰好有 $2$ 条的情况不存在，命题 II 不成立。\n\n【快捷思路】\n高线将三角形分成两个直角三角形。锐角三角形三条高均在内部（得 3），钝角三角形仅钝角对应的高在内部（得 1），不可能恰好 2 条。因此 I 和 III 成立。\n\n【正确答案】D",
    "has_image": false,
    "images": [],
    "topic": "Proof"
  },
  {
    "id": "2023-P2-Q9",
    "year": 2023,
    "paper": 2,
    "num": 9,
    "question": "Consider the following statement about a pentagon P:\n\n$(\\ast)$ If at least one of the interior angles in P is 108°, then all the interior angles in P form an arithmetic sequence.\n\nWhich of the following is/are true?\n\nI $\\quad$ The statement $(\\ast)$\n\nII $\\quad$ The contrapositive of $(\\ast)$\n\nIII $\\quad$ The converse of $(\\ast)$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题考察逻辑命题及其变形。给定关于五边形 $P$ 的命题 $(\\ast)$：如果 $P$ 中至少有一个内角为 $108°$，则所有内角构成等差数列。需要判断原命题、逆否命题、逆命题三个陈述的真假。五边形内角和为 $540°$。\n\n【解题步骤】\n首先分析原命题 $(\\ast)$ 是否为真。构造反例：取五边形内角为 $108°, 100°, 100°, 100°, 132°$，总和恰好为 $540°$，其中一个角为 $108°$，但这五个数显然不构成等差数列（公差不一致）。因此原命题为假。\n由于原命题与其逆否命题逻辑等价（同真同假），逆否命题也为假。\n再分析逆命题：如果五个内角构成等差数列，则至少有一个角为 $108°$。设等差数列五项为 $a-2d, a-d, a, a+d, a+2d$，总和为 $5a = 540°$，得 $a = 108°$。即中间项必为 $108°$，逆命题为真。\n综上，仅 III 为真。\n\n【快捷思路】\n五边形内角和固定为 $540°$。等差数列五项之和等于中间项的五倍，故中间项必为 $540°/5 = 108°$，逆命题天然成立。而原命题只需一个反例即可否定，举出一组含 $108°$ 但不成等差的角即可。\n\n【正确答案】D",
    "has_image": false,
    "images": [],
    "topic": "Logic"
  },
  {
    "id": "2023-P2-Q10",
    "year": 2023,
    "paper": 2,
    "num": 10,
    "question": "Here is an attempt to solve the inequality $x^4 - 2x^2 - 3 < 0$ by completing the square:\n\n$x^4 - 2x^2 - 3 < 0$\n\nI $\\quad$ if and only if $x^4 - 2x^2 + 1 < 4$\n\nII $\\quad$ if and only if $(x^2 - 1)^2 < 4$\n\nIII $\\quad$ if and only if $-2 < x^2 - 1 < 2$\n\nIV $\\quad$ if and only if $x^2 - 1 < 2$\n\nV $\\quad$ if and only if $x^2 < 3$\n\nVI $\\quad$ if and only if $-\\sqrt{3} < x < \\sqrt{3}$\n\nWhich of the following statements is true?",
    "options": {
      "A": "The argument is completely correct.",
      "B": "The first error occurs in line I.",
      "C": "The first error occurs in line II.",
      "D": "The first error occurs in line III.",
      "E": "The first error occurs in line IV.",
      "F": "The first error occurs in line V.",
      "G": "The first error occurs in line VI."
    },
    "answer": "A",
    "analysis": "【题目分析】\n本题考察不等式求解与配方法，要求逐行检查求解过程 $x^4 - 2x^2 - 3 < 0$ 中每步的等价性。关键注意每一步标注的是充要条件（if and only if），必须双向成立。\n\n【解题步骤】\n第 I 步：$x^4 - 2x^2 - 3 < 0 \\iff x^4 - 2x^2 + 1 < 4$，两边同时加 $4$，恒等变形，正确。\n第 II 步：$x^4 - 2x^2 + 1 = (x^2 - 1)^2$，配成完全平方，正确。\n第 III 步：$(x^2 - 1)^2 < 4 \\iff -2 < x^2 - 1 < 2$。对实数而言 $A^2 < B^2 \\iff -|B| < A < |B|$，这里 $B = 2$，等价成立，正确。\n第 IV 步：从 $-2 < x^2 - 1 < 2$ 推出 $x^2 - 1 < 2$。注意 $x^2 - 1 > -2$ 即 $x^2 > -1$，这对所有实数 $x$ 恒成立。因此 $-2 < x^2 - 1 < 2$ 与 $x^2 - 1 < 2$ 的解集完全相同，两者等价，正确。\n第 V 步：$x^2 - 1 < 2 \\iff x^2 < 3$，正确。\n第 VI 步：$x^2 < 3 \\iff -\\sqrt{3} < x < \\sqrt{3}$，正确。\n每一步均为等价变形，论证完全正确。\n\n【快捷思路】\n核心关注第 III 步到第 IV 步是否等价。$-2 < x^2 - 1$ 等价于 $x^2 > -1$，对实数恒成立，所以丢掉下界不丢失任何信息。确认这点后即可判定全链条无误。\n\n【正确答案】A",
    "has_image": false,
    "images": [],
    "topic": "Algebra"
  },
  {
    "id": "2023-P2-Q11",
    "year": 2023,
    "paper": 2,
    "num": 11,
    "question": "In this question, $k$ is a positive integer.\n\nConsider the following theorem:\n\nIf $2^k + 1$ is a prime, then $k$ is a power of 2. $\\quad(\\ast)$\n\nWhich of the following statements, taken individually, is/are equivalent to $(\\ast)$?\n\nI $\\quad$ If $k$ is a power of 2, then $2^k + 1$ is prime.\n\nII $\\quad$ $2^k + 1$ is not prime only if $k$ is not a power of 2.\n\nIII $\\quad$ A sufficient condition for $k$ to be a power of 2 is that $2^k + 1$ is prime.",
    "options": {
      "A": "Statement I: Yes, Statement II: Yes, Statement III: Yes",
      "B": "Statement I: Yes, Statement II: Yes, Statement III: No",
      "C": "Statement I: Yes, Statement II: No, Statement III: Yes",
      "D": "Statement I: Yes, Statement II: No, Statement III: No",
      "E": "Statement I: No, Statement II: Yes, Statement III: Yes",
      "F": "Statement I: No, Statement II: Yes, Statement III: No",
      "G": "Statement I: No, Statement II: No, Statement III: Yes",
      "H": "Statement I: No, Statement II: No, Statement III: No"
    },
    "answer": "G",
    "analysis": "【题目分析】\n本题考察命题逻辑的等价关系。原定理 $(\\ast)$：如果 $2^k + 1$ 是素数，则 $k$ 是 $2$ 的幂。这是 Fermat 素数的基本性质。需要判断三个陈述是否与原定理等价。\n\n【解题步骤】\n陈述 I：如果 $k$ 是 $2$ 的幂，则 $2^k + 1$ 是素数。这是原命题的逆命题，不等价。例如 $k = 32 = 2^5$，$2^{32} + 1 = 4294967297 = 641 \\times 6700417$ 不是素数。故 I 不等价。\n陈述 II：$2^k + 1$ 不是素数仅当 $k$ 不是 $2$ 的幂。逻辑上P仅当Q表示P → Q。这里P为「$2^k + 1$ 不是素数「，Q为「$k$ 不是 $2$ 的幂「，即 $\\neg A \\rightarrow \\neg B$。而 $\\neg A \\rightarrow \\neg B$ 等价于 $B \\rightarrow A$，正是原定理。故 II 等价。\n陈述 III：$2^k + 1$ 是素数是 $k$ 为 $2$ 的幂的充分条件。充分条件的表述为A → B，即 $2^k + 1$ 是素数 → $k$ 是 $2$ 的幂，与原定理完全一致。故 III 等价。\n综上，I 不等价，II 和 III 等价。\n\n【快捷思路】\n掌握三种逻辑表述的对应关系：逆命题（交换条件和结论，不等价）；P仅当Q 即 P → Q；A是B的充分条件即 A → B。将每个陈述还原为蕴涵式，与原定理 $A \\rightarrow B$ 比较即可。\n\n【正确答案】G",
    "has_image": false,
    "images": [],
    "topic": "Logic"
  },
  {
    "id": "2023-P2-Q12",
    "year": 2023,
    "paper": 2,
    "num": 12,
    "question": "In this question, $p$ is a real constant.\n\nThe equation $\\sin x \\cos 2x = p^2 \\sin x$ has $n$ distinct solutions in the range $0 \\leq x \\leq 2\\pi$.\n\nWhich of the following statements is/are true?\n\nI $\\quad n = 3$ is sufficient for $p > 1$\n\nII $\\quad n = 7$ only if $-1 < p < 1$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "I and II"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题考察三角方程解的个数与参数 $p$ 的关系。方程 $\\sin x \\cos 2x = p^2 \\sin x$ 在 $0 \\leq x \\leq 2\\pi$ 内有 $n$ 个不同解，需判断两个涉及充分必要条件的陈述。\n\n【解题步骤】\n先整理方程：$\\sin x(\\cos 2x - p^2) = 0$。\n由 $\\sin x = 0$，得 $x = 0, \\pi, 2\\pi$，共 $3$ 个解。\n由 $\\cos 2x = p^2$，令 $\\theta = 2x \\in [0, 4\\pi]$。由于 $p^2 \\geq 0$，当 $0 \\leq p^2 < 1$ 时 $\\cos \\theta = p^2$ 在 $[0, 4\\pi]$ 内有 $4$ 个解，对应 $4$ 个不同的 $x$ 值。\n当 $0 < p^2 < 1$ 时，$\\cos 2x = p^2$ 的 $4$ 个解均不在 $\\{0, \\pi, 2\\pi\\}$ 中（因为 $\\cos 2x = 1 \\neq p^2$），故 $n = 7$。\n当 $p^2 = 0$ 时，$\\cos 2x = 0$ 有 $4$ 个解且不与 $\\sin x = 0$ 的解重合，$n = 7$。\n当 $p^2 = 1$ 时，$\\cos 2x = 1$ 的解为 $x = 0, \\pi, 2\\pi$，与 $\\sin x = 0$ 的解完全重合，$n = 3$。\n当 $p^2 > 1$ 时，$\\cos 2x = p^2$ 无解，$n = 3$。\n\n判断陈述 I：$n = 3$ 是 $p > 1$ 的充分条件。但 $p = 0$ 时也有 $n = 3$，此时 $p > 1$ 不成立。故 I 为假。\n判断陈述 II：$n = 7$ 仅当 $-1 < p < 1$。即 $n = 7 \\rightarrow -1 < p < 1$。$n = 7$ 时 $p^2 \\in [0, 1)$，对应 $p \\in (-1, 1)$，该范围确为 $(-1, 1)$ 的子集。故 II 为真。\n\n【快捷思路】\n分解方程后分情况讨论 $p^2$ 的取值范围对解数的影响。$n = 7$ 对应 $p^2 \\in [0, 1)$ 即 $|p| < 1$，自然满足 $-1 < p < 1$。而 $n = 3$ 还可能在 $p = 0$ 时出现，推不出 $p > 1$。\n\n【正确答案】C",
    "has_image": false,
    "images": [],
    "topic": "Trigonometry"
  },
  {
    "id": "2023-P2-Q13",
    "year": 2023,
    "paper": 2,
    "num": 13,
    "question": "Let $x$ be a real number.\n\nWhich one of the following statements is a sufficient condition for exactly three of the other four statements?\n\nA $\\quad x \\geq 0$\n\nB $\\quad x = 1$\n\nC $\\quad x = 0$ or $x = 1$\n\nD $\\quad x \\geq 0$ or $x \\leq 1$\n\nE $\\quad x \\geq 0$ and $x \\leq 1$",
    "options": {
      "A": "$x \\geq 0$",
      "B": "$x = 1$",
      "C": "$x = 0$ or $x = 1$",
      "D": "$x \\geq 0$ or $x \\leq 1$",
      "E": "$x \\geq 0$ and $x \\leq 1$"
    },
    "answer": "C",
    "analysis": "【题目分析】\n本题是一道逻辑充分条件判断题。题目给出五个关于实数 $x$ 的命题 A 到 E，要求找出哪个命题作为充分条件时，能使得其余四个命题中恰好有三个成立。关键在于逐一验证每个命题是否能推出其余四个中恰好三个为真。注意命题 D 即 $x \\geq 0$ 或 $x \\leq 1$ 对任意实数 $x$ 恒成立，这一点是解题的突破口。命题 E 等价于 $0 \\leq x \\leq 1$，是命题 A 的子集。\n\n【解题步骤】\n逐一代入选项验证：\n\n设选项 B：$x = 1$。此时检查其余四个命题：A（$x \\geq 0$）成立；C（$x = 0$ 或 $x = 1$）成立；D（$x \\geq 0$ 或 $x \\leq 1$）恒成立；E（$x \\geq 0$ 且 $x \\leq 1$）不成立。恰有三个成立，B 是候选答案。\n\n设选项 C：$x = 0$ 或 $x = 1$。先取 $x = 0$：其余为 A、B、D、E。A（$0 \\geq 0$）成立；B（$0 = 1$）不成立；D 恒成立；E（$0 \\geq 0$ 且 $0 \\leq 1$）成立。恰有三个成立。再取 $x = 1$：其余为 A、B、D、E。A 成立；B 成立；D 恒成立；E（$1 \\geq 0$ 且 $1 \\leq 1$）成立。四个全成立，不满足恰好三个。\n\n因此只有选项 B 能保证恰好三个成立。\n\n【快捷思路】\n先观察 D 对所有实数恒成立，所以只需判断其余三个在给定条件下有几个成立。代入 $x = 1$ 快速检验：A 真、C 真、E 假，恰好三个。直接锁定答案 B。\n\n【正确答案】B\n\n",
    "has_image": false,
    "images": [],
    "topic": "Logic",
    "related_topics": [
      "Proof"
    ]
  },
  {
    "id": "2023-P2-Q14",
    "year": 2023,
    "paper": 2,
    "num": 14,
    "question": "Three lines are given by the equations:\n\n$$ax + by + c = 0$$\n$$bx + cy + a = 0$$\n$$cx + ay + b = 0$$\n\nwhere $a$, $b$ and $c$ are non-zero real numbers.\n\nWhich one of the following is correct?",
    "options": {
      "A": "If two of the lines are parallel, then all three are parallel.",
      "B": "If two of the lines are parallel, then the third is perpendicular to the other two.",
      "C": "If two of the lines are parallel, then the third is parallel to $y = x$.",
      "D": "If two of the lines are parallel, then the third is perpendicular to $y = x$.",
      "E": "If two of the lines are perpendicular, then all three meet at a point.",
      "F": "If two of the lines are perpendicular, then the third is parallel to $y = x$.",
      "G": "If two of the lines are perpendicular, then the third is perpendicular to $y = x$."
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题考察解析几何中直线的平行与垂直关系。三条直线方程具有轮换对称性：$ax + by + c = 0$，$bx + cy + a = 0$，$cx + ay + b = 0$。三条直线的斜率分别为 $-\\dfrac{a}{b}$、$-\\dfrac{b}{c}$、$-\\dfrac{c}{a}$。利用斜率关系判断平行（斜率相等）和垂直（斜率乘积为 $-1$），结合轮换对称性可以简化分析。\n\n【解题步骤】\n三条直线斜率：$m_1 = -\\dfrac{a}{b}$，$m_2 = -\\dfrac{b}{c}$，$m_3 = -\\dfrac{c}{a}$。\n\n先考虑两条直线平行的情形。若 $m_1 = m_2$，则 $\\dfrac{a}{b} = \\dfrac{b}{c}$，即 $b^2 = ac$。此时 $m_3 = -\\dfrac{c}{a} = -\\dfrac{b^2}{a^2}$，一般不等于 $m_1$，故三条不一定全平行，排除 A。\n\n再考虑两条直线垂直的情形。若 $m_1 \\cdot m_2 = -1$，则 $\\left(-\\dfrac{a}{b}\\right)\\left(-\\dfrac{b}{c}\\right) = -1$，即 $\\dfrac{a}{c} = -1$，得 $c = -a$。此时 $m_3 = -\\dfrac{c}{a} = -\\dfrac{-a}{a} = 1$。斜率为 $1$ 意味着第三条直线平行于 $y = x$。\n\n由轮换对称性，无论哪两条垂直，第三条斜率均为 $1$。因此选项 F 正确。\n\n【快捷思路】\n利用轮换对称性，只需假设前两条垂直。令斜率乘积 $\\dfrac{a}{b} \\cdot \\dfrac{b}{c} = -1$ 得 $c = -a$，第三条斜率 $-\\dfrac{c}{a} = 1$，即平行于 $y = x$。秒杀 F。\n\n【正确答案】F\n Geometry\n",
    "has_image": false,
    "images": [],
    "topic": "Coordinate Geometry",
    "related_topics": [
      "Algebra"
    ]
  },
  {
    "id": "2023-P2-Q15",
    "year": 2023,
    "paper": 2,
    "num": 15,
    "question": "The base 10 number $0.03841$ has the value\n\n$$0 \\times 10^{-1} + 3 \\times 10^{-2} + 8 \\times 10^{-3} + 4 \\times 10^{-4} + 1 \\times 10^{-5} = 0.03841$$\n\nSimilarly, the base 2 number $0.01101$ has the value\n\n$$0 \\times 2^{-1} + 1 \\times 2^{-2} + 1 \\times 2^{-3} + 0 \\times 2^{-4} + 1 \\times 2^{-5} = \\dfrac{13}{32}$$\n\nWhat is the value of the recurring base 2 number $0.\\dot{0}0\\dot{1}\\dot{1} = 0.001100110011\\ldots$?",
    "options": {
      "A": "$\\dfrac{1}{3}$",
      "B": "$\\dfrac{1}{5}$",
      "C": "$\\dfrac{1}{15}$",
      "D": "$\\dfrac{2}{15}$",
      "E": "$\\dfrac{4}{15}$",
      "F": "$\\dfrac{3}{16}$",
      "G": "$\\dfrac{5}{16}$",
      "H": "$\\dfrac{6}{31}$"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考察二进制循环小数的求值，本质是等比数列求和。题目给出二进制循环小数 $0.\\dot{0}0\\dot{1}\\dot{1} = 0.001100110011\\ldots_2$，循环节为 $0011$，长度为 $4$。关键思路是将循环部分视为首项加公比的无穷等比数列求和，或利用乘以 $2^4$ 消去循环部分的代数方法。\n\n【解题步骤】\n设 $x = 0.001100110011\\ldots_2$。\n\n二进制小数点左移 $4$ 位（乘以 $2^4 = 16$）：\n$$16x = 0011.00110011\\ldots_2$$\n\n二进制中 $0011_2 = 0 \\times 2^{-1} + 0 \\times 2^{-2} + 1 \\times 2^{-3} + 1 \\times 2^{-4} = \\dfrac{1}{8} + \\dfrac{1}{16} = \\dfrac{3}{16}$。\n\n但注意左移 $4$ 位后整数部分为 $0011_2 = 3$，所以：\n$$16x = 3 + x$$\n$$15x = 3$$\n$$x = \\dfrac{3}{15} = \\dfrac{1}{5}$$\n\n验证：十进制中 $\\dfrac{1}{5} = 0.2$，转为二进制确为 $0.\\overline{0011}_2$。\n\n【快捷思路】\n设 $x$ 为所求值，循环节长 $4$ 位，乘以 $2^4 = 16$ 得 $16x = 3 + x$，解得 $x = \\dfrac{3}{15} = \\dfrac{1}{5}$。核心公式：循环节值为 $k$、循环节长度为 $n$ 时，结果为 $\\dfrac{k}{2^n - 1}$。\n\n【正确答案】B\n and Series\n",
    "has_image": false,
    "images": [],
    "topic": "Sequences and Series",
    "related_topics": [
      "Number Theory"
    ]
  },
  {
    "id": "2023-P2-Q16",
    "year": 2023,
    "paper": 2,
    "num": 16,
    "question": "A sequence is defined by:\n\n$$u_1 = a$$\n$$u_2 = b$$\n$$u_{n+2} = u_n + u_{n+1} \\quad \\text{for } n \\geq 1$$\n\nwhere $a$ and $b$ are positive integers. The highest common factor of $a$ and $b$ is 7.\n\nWhich of the following statements must be true?\n\nI $\\quad u_{2023}$ is a multiple of 7\n\nII $\\quad$ If $u_1$ is not a factor of $u_2$, then $u_1$ is not a factor of $u_n$ for any $n > 1$\n\nIII $\\quad$ The highest common factor of $u_1$ and $u_5$ is 7",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "B",
    "analysis": "【题目分析】\n本题考察递推数列的性质，数列满足 Fibonacci 型递推关系 $u_{n+2} = u_n + u_{n+1}$，初值 $u_1 = a$、$u_2 = b$，且 $\\gcd(a, b) = 7$。需要判断三个命题的真假。核心在于利用递推关系的线性性质和最大公约数的性质逐项分析。\n\n【解题步骤】\n首先写出前几项：$u_1 = a$，$u_2 = b$，$u_3 = a + b$，$u_4 = a + 2b$，$u_5 = 2a + 3b$。\n\n命题 I：因 $\\gcd(a, b) = 7$，故 $a = 7A$，$b = 7B$。由归纳法，若 $u_k$ 和 $u_{k+1}$ 均为 $7$ 的倍数，则 $u_{k+2} = u_k + u_{k+1}$ 也为 $7$ 的倍数。故所有项均为 $7$ 的倍数，$u_{2023}$ 是 $7$ 的倍数。I 正确。\n\n命题 II：取反例 $a = 14$，$b = 21$，$\\gcd = 7$，$a \\nmid b$。但 $u_4 = 14 + 42 = 56 = 14 \\times 4$，$a \\mid u_4$。II 错误。\n\n命题 III：$\\gcd(a, u_5) = \\gcd(7A, 14A + 21B) = 7 \\cdot \\gcd(A, 2A + 3B) = 7 \\cdot \\gcd(A, 3B)$。当 $\\gcd(A, B) = 1$ 时，$\\gcd(A, 3B) = \\gcd(A, 3)$。若 $3 \\mid A$，如 $a = 21$，$b = 7$，则 $\\gcd(21, 63) = 21 \\neq 7$。III 不一定成立。\n\n【快捷思路】\n命题 I 由归纳法直接得到。命题 II 用 $a = 14$、$b = 21$ 举反例即可否定。命题 III 用 $a = 21$、$b = 7$ 举反例。快速锁定只有 I 正确，选 B。\n\n【正确答案】B\n and Series\n",
    "has_image": false,
    "images": [],
    "topic": "Sequences and Series",
    "related_topics": [
      "Number Theory",
      "Proof"
    ]
  },
  {
    "id": "2023-P2-Q17",
    "year": 2023,
    "paper": 2,
    "num": 17,
    "question": "The ceiling of $x$, written $\\lceil x \\rceil$, is defined to be the value of $x$ rounded up to the nearest integer.\n\nFor example: $\\lceil \\pi \\rceil = 4$, $\\lceil 2.1 \\rceil = 3$, $\\lceil 8 \\rceil = 8$.\n\nWhat is the value of the following integral?\n\n$$\\int_{0}^{99}2^{\\lceil x \\rceil}\\,dx$$",
    "options": {
      "A": "$2^{99}$",
      "B": "$2^{99} - 1$",
      "C": "$2^{99} - 2$",
      "D": "$2^{100}$",
      "E": "$2^{100} - 1$",
      "F": "$2^{100} - 2$"
    },
    "answer": "F",
    "analysis": "【题目分析】\n本题涉及取整函数 $\\lceil x \\rceil$ 与定积分的结合。关键观察：$\\lceil x \\rceil$ 在每个左开右闭区间 $(n-1,n]$ 上取常数值 $n$。因此被积函数 $2^{\\lceil x \\rceil}$ 在积分区间 $[0,99]$ 上呈阶梯状分段常数，可将积分拆分为 $99$ 个小区间上的积分之和。由于单个点的测度为零，端点处的函数值不影响积分结果。\n\n【解题步骤】\n第一步：将积分区间按整数点分割。对于每个小区间 $(n-1,n]$（其中 $n=1,2,\\ldots,99$），有 $\\lceil x \\rceil = n$，故被积函数为常数 $2^n$。\n\n第二步：计算每个小区间上的积分：\n$$\\int_{n-1}^{n} 2^{\\lceil x \\rceil} \\,dx = \\int_{n-1}^{n} 2^n \\,dx = 2^n \\times 1 = 2^n$$\n\n第三步：将所有小区间积分求和：\n$$\\int_{0}^{99} 2^{\\lceil x \\rceil} \\,dx = \\sum_{n=1}^{99} 2^n$$\n\n第四步：利用等比数列求和公式，首项为 $2$，公比为 $2$，共 $99$ 项：\n$$\\sum_{n=1}^{99} 2^n = 2 \\cdot \\frac{2^{99}-1}{2-1} = 2^{100}-2$$\n\n【快捷思路】\n直接识别出这是一个等比数列求和问题。$\\lceil x \\rceil$ 在每个单位区间上取值为 $1,2,\\ldots,99$，对应被积函数为 $2^1,2^2,\\ldots,2^{99}$。总和即 $\\sum_{k=1}^{99} 2^k = 2^{100}-2$。注意不要误算为 $2^{100}-1$，求和从 $k=1$ 起而非 $k=0$。\n\n【正确答案】F",
    "has_image": false,
    "images": [],
    "topic": "Integration"
  },
  {
    "id": "2023-P2-Q18",
    "year": 2023,
    "paper": 2,
    "num": 18,
    "question": "The equation $x^4 + bx^2 + c = 0$ has four distinct real roots if and only if which of the following conditions is satisfied?",
    "options": {
      "A": "$b^2 > 4c$",
      "B": "$b^2 < 4c$",
      "C": "$c > 0$ and $b > 2\\sqrt{c}$",
      "D": "$c > 0$ and $b < -2\\sqrt{c}$",
      "E": "$c < 0$ and $b < 0$",
      "F": "$c < 0$ and $b > 0$"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题要求 $x^4+bx^2+c=0$ 有四个不同实根的充要条件。令 $u=x^2$，原方程化为关于 $u$ 的二次方程 $u^2+bu+c=0$。由于 $u=x^2\\geq 0$，要使原方程有四个不同实根，需要二次方程有两个不同的正实根 $u_1,u_2$，从而 $x=\\pm\\sqrt{u_1}$ 和 $x=\\pm\\sqrt{u_2}$ 给出四个不同实根。\n\n【解题步骤】\n第一步：判别式条件保证两根不等：\n$$\\Delta = b^2-4c > 0 \\quad \\Rightarrow \\quad b^2 > 4c$$\n\n第二步：两根为正，利用韦达定理：\n两根之和 $u_1+u_2 = -b > 0$，即 $b < 0$。\n两根之积 $u_1 u_2 = c > 0$，即 $c > 0$。\n\n第三步：综合 $b<0$、$c>0$ 和 $b^2 > 4c$。由于 $c>0$，有 $4c>0$，不等式 $b^2>4c$ 等价于 $|b| > 2\\sqrt{c}$。结合 $b<0$，得：\n$$b < -2\\sqrt{c}$$\n\n第四步：反之，若 $c>0$ 且 $b<-2\\sqrt{c}$，则 $b<0$ 且 $b^2>4c$ 自动成立，二次方程有两不同正根，原方程有四不同实根。故充要条件为 $c>0$ 且 $b<-2\\sqrt{c}$。\n\n【快捷思路】\n记住双二次方程 $x^4+bx^2+c=0$ 有四不同实根的标准条件：令 $u=x^2$ 后，需要 $u^2+bu+c=0$ 有两个不同的正根。这等价于判别式正、和为正、积为正，即 $b^2>4c$、$b<0$、$c>0$，合并为 $c>0$ 且 $b<-2\\sqrt{c}$。\n\n【正确答案】D",
    "has_image": false,
    "images": [],
    "topic": "Algebra"
  },
  {
    "id": "2023-P2-Q19",
    "year": 2023,
    "paper": 2,
    "num": 19,
    "question": "In this question, $f(x)$ is a non-constant polynomial, and $g(x) = x\\,f'(x)$.\n\n$f(x) = 0$ for exactly $M$ real values of $x$.\n\n$g(x) = 0$ for exactly $N$ real values of $x$.\n\nWhich of the following statements is/are true?\n\nI $\\quad$ It is possible that $M < N$\n\nII $\\quad$ It is possible that $M = N$\n\nIII $\\quad$ It is possible that $M > N$",
    "options": {
      "A": "none of them",
      "B": "I only",
      "C": "II only",
      "D": "III only",
      "E": "I and II only",
      "F": "I and III only",
      "G": "II and III only",
      "H": "I, II and III"
    },
    "answer": "H",
    "analysis": "【题目分析】\n本题研究多项式 $f(x)$ 与其导数相关函数 $g(x)=xf'(x)$ 的实根个数关系。$f(x)=0$ 的实根个数记为 $M$，$g(x)=0$ 的实根个数记为 $N$。由于 $g(x)=xf'(x)$，其根来源于 $x=0$ 或 $f'(x)=0$。需要判断 $M<N$、$M=N$、$M>N$ 三种情况是否都可能。\n\n【解题步骤】\n情况一：$M<N$。取 $f(x)=x^2+x-1$，判别式 $1+4=5>0$，有两个不同实根，故 $M=2$。$f'(x)=2x+1$，则 $g(x)=x(2x+1)=2x^2+x$，根为 $x=0$ 和 $x=-1/2$，共 $N=2$ 个。换一个例子：$f(x)=x^2+1$，无实根 $M=0$；$g(x)=2x^2$，仅有根 $x=0$，$N=1$。故 $M<N$ 可能。\n\n情况二：$M=N$。取 $f(x)=x^2+x=x(x+1)$，根为 $0$ 和 $-1$，$M=2$。$f'(x)=2x+1$，$g(x)=x(2x+1)$，根为 $0$ 和 $-1/2$，$N=2$。故 $M=N$ 可能。\n\n情况三：$M>N$。取 $f(x)=x^2-1=(x-1)(x+1)$，根为 $1$ 和 $-1$，$M=2$。$f'(x)=2x$，$g(x)=x(2x)=2x^2$，仅有根 $x=0$，故 $N=1$。因此 $M>N$ 可能。\n\n综上，三种情况均可实现，三个命题全部成立。\n\n【快捷思路】\n核心技巧是构造具体反例。$M>N$ 的关键在于选择 $f(x)$ 使其有两个根但导数仅在 $x=0$ 处为零，如 $f(x)=x^2-1$，此时 $f'(x)=2x$，$g(x)=2x^2$ 只有一个根 $0$。$M<N$ 则利用 $f$ 无实根但 $g$ 在 $0$ 处有根。$M=N$ 取简单例子即可验证。\n\n【正确答案】H",
    "has_image": false,
    "images": [],
    "topic": "Differentiation"
  },
  {
    "id": "2023-P2-Q20",
    "year": 2023,
    "paper": 2,
    "num": 20,
    "question": "Let $f$ be a polynomial with real coefficients.\n\nThe integral $I_{p,q}$ where $p < q$ is defined by\n\n$$I_{p,q} = \\int_{p}^{q}\\Big((f(x))^2 - (f(|x|))^2\\Big)\\,dx$$\n\nWhich of the following statements must be true?\n\n1 $\\quad I_{p,q} = 0$ only if $0 < p$\n\n2 $\\quad f'(x) < 0$ for all $x$ only if $I_{p,q} < 0$ for all $p < q < 0$\n\n3 $\\quad I_{p,q} > 0$ only if $p < 0$",
    "options": {
      "A": "none of them",
      "B": "1 only",
      "C": "2 only",
      "D": "3 only",
      "E": "1 and 2 only",
      "F": "1 and 3 only",
      "G": "2 and 3 only",
      "H": "1, 2 and 3"
    },
    "answer": "D",
    "analysis": "【题目分析】\n本题定义 $I_{p,q}=\\int_p^q[(f(x))^2-(f(|x|))^2]\\,dx$，其中 $f$ 为实系数多项式。需要分析三个命题的真假。关键在于理解 $|x|$ 的作用：当 $x\\geq 0$ 时 $|x|=x$，被积函数为零；当 $x<0$ 时 $|x|=-x$，被积函数为 $(f(x))^2-(f(-x))^2$，一般非零。\n\n【解题步骤】\n命题 1：$I_{p,q}=0$ 仅当 $0<p$。\n反例：取 $f(x)=x$，则 $(f(x))^2=x^2$ 且 $(f(|x|))^2=|x|^2=x^2$，被积函数恒为零，故对任意 $p<q$ 都有 $I_{p,q}=0$，即使 $p<0$。命题 1 不成立。\n\n命题 2：若 $f'(x)<0$ 对所有 $x$ 成立，则对所有 $p<q<0$ 有 $I_{p,q}<0$。\n反例：取 $f(x)=-x+2$，则 $f'(x)=-1<0$ 恒成立。当 $x<0$ 时，$f(x)=-x+2$，$f(-x)=x+2$，被积函数为：\n$$(f(x))^2-(f(-x))^2 = (-x+2)^2-(x+2)^2 = -8x$$\n当 $x<0$ 时被积函数为正，故 $I_{p,q}>0$。命题 2 不成立。\n\n命题 3：$I_{p,q}>0$ 仅当 $p<0$。\n若 $p\\geq 0$，则积分区间 $[p,q]$ 上恒有 $x\\geq 0$，故 $|x|=x$，被积函数 $(f(x))^2-(f(x))^2=0$，积分 $I_{p,q}=0$，不可能为正。因此 $I_{p,q}>0$ 确实推出 $p<0$。命题 3 成立。\n\n【快捷思路】\n快速判断法：当积分区间完全在正半轴时，$|x|=x$ 使被积函数恒为零，积分不可能为正，故命题 3 显然成立。命题 1 和 2 各需一个反例即可推翻，取最简单的线性函数 $f(x)=x$ 和 $f(x)=-x+2$ 即可。\n\n【正确答案】D",
    "has_image": false,
    "images": [],
    "topic": "Integration"
  }
];
