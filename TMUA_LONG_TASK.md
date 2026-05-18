# TMUA Practice System Long Task

## Goal

Audit and improve the TMUA practice system question by question. The finished system should have clean question data, reliable rendering, correct answers and solutions, useful multi-topic classification, and stable deep links from the handouts into `/practice/tmua/`.

## Work Unit

Use `TMUA_PROGRESS.md`. Each long-task session selects the first unchecked paper in `## Next`, for example `2019 Paper 1`.

For that paper, split work into 20 independent subagent tasks, one per question ID:

```text
{year}-P{paper}-Q{num}
```

Example: `2019-P1-Q3`.

Each subagent may edit only the relevant question object in `public/practice/tmua/questions_data.js`, directly related image references under `public/practice/tmua/images/`, and directly related handout links or taxonomy notes when needed.

## Per-Question Checklist

Each subagent must check:

- Required fields: `id`, `year`, `paper`, `num`, `topic`, `difficulty`, `question`, `options`, `answer`, `analysis`, `images`, `has_image`.
- ID consistency: `id` must equal `{year}-P{paper}-Q{num}`.
- Options: labels must be consecutive letters, answer must exist among the labels, option text must be non-empty, and mathematical options must render.
- Question text: no stray page numbers, OCR headers/footers, broken line joins, duplicated stems, or orphaned option text inside the stem.
- Analysis: contains a coherent solution, ends with the correct answer, and does not contain conversion debris such as trailing topic fragments after the answer.
- Images: every referenced image exists, loads in the browser, and is neither cropped nor unrelated to the question.
- Handout links: add one or more `modules` that match the TMUA handout file names.
- Flexible tags: add `sections` and `skills` from the question analysis. Do not force them into a closed list; let useful concepts emerge during the audit.
- Browser rendering: direct link `/practice/tmua/?id={id}` opens that question, formulas render, options are clickable, answer submission works, and the analysis panel reveals the correct answer.

## Static Audit

Run:

```powershell
node scripts/tmua-static-audit.mjs --paper 2019-P1
```

The static audit checks structural consistency, option/answer validity, duplicate IDs, missing images, obvious conversion debris, topic vocabulary, and answer-marker mismatches.

Run the full sweep periodically:

```powershell
node scripts/tmua-static-audit.mjs
```

## Browser Audit

After building or starting a local preview, run:

```powershell
node scripts/tmua-browser-audit.mjs --paper 2019-P1 --base http://localhost:4321
```

The browser audit opens direct question links, checks for visible question/options/analysis UI, verifies KaTeX output, tests topic filtering for the paper's topics, and reports console/page errors.

## Classification Standard

Use a three-layer taxonomy. The first layer is fixed to the handouts. The second and third layers are allowed to grow as question analysis reveals useful concepts.

Keep the existing simple public topic names in `topic` for compatibility, and keep `related_topics` for broad secondary topics. Treat `modules`, `sections`, and `skills` as the source of truth for the later handout-to-question mapping.

Recommended question fields:

```js
{
  topic: "Algebra",
  related_topics: ["Sequences and Series"],
  modules: ["a1_algebra_basics", "c_sequences_series"],
  sections: ["a1.expansion_collection", "c.binomial_coefficients"],
  skills: ["coefficient-comparison", "binomial-expansion"],
  primary_section: "a1.expansion_collection"
}
```

### Layer 1: Handout Modules

`modules` must match the TMUA handout file names under `src/content/docs/tmua/`:

- `a1_algebra_basics`
- `a2_equations_inequalities`
- `a3_exponents_logarithms`
- `b_mathematical_logic_basics`
- `c_sequences_series`
- `d_coordinate_geometry`
- `e_trigonometry`
- `f_differentiation`
- `g_integration`
- `h_logic_counterexamples`
- `i_functions_graphs`
- `j_sets_probability`
- `k_number_theory_combinatorics`
- `l_proof_methods`
- `m_comprehensive_training`
- `n_mock_exam_sprint`

Every audited question should receive at least one module. Multiple modules are encouraged when the question naturally supports more than one handout location.

### Layer 2: Handout Sections

`sections` should describe the actual handout section or future handout section that the question supports. These are not locked in advance. Use stable, readable identifiers:

- Prefix with the module letter when possible, e.g. `a1.expansion_collection`, `a2.quadratic_inequalities`, `i.graph_intersections`.
- Use lower-case ASCII, dots for hierarchy, and underscores inside names.
- Add new section identifiers when the existing handout does not yet have the right place. This is useful evidence that the handout may need a new subsection or a renamed subsection.
- If a question exposes a gap in the current handout, note it in the session summary and keep the new section tag rather than forcing it into an approximate old section.

### Layer 3: Skills

`skills` should capture the concrete solving moves. They are also open-ended. Use lower-case kebab-case, for example:

- `coefficient-comparison`
- `factor-theorem`
- `sign-chart`
- `parameter-condition`
- `counterexample-construction`
- `graph-intersection`
- `case-analysis`

Prefer tags that a student could use for targeted revision. If two agents invent near-duplicate skills, keep both during the first pass and consolidate later after reviewing frequency.

Primary topic names:

- `Algebra`: algebraic manipulation, expansion, factorisation, equations, inequalities, ratios, surds, indices when the main method is algebraic.
- `Functions`: function notation, composition, inverse functions, transformations, domains/ranges, function equations.
- `Graphs`: graph interpretation, curve transformations, intersections, qualitative behaviour, visual reasoning not mainly coordinate geometry.
- `Coordinate Geometry`: straight lines, gradients, circles, distances, geometric transformations in the coordinate plane.
- `Sequences and Series`: sequences, recurrence, arithmetic/geometric series, binomial expansion when treated as sequence/series structure.
- `Trigonometry`: trig equations, identities, radians, sectors, sine/cosine rule, trig graphs.
- `Differentiation`: derivatives, tangents/normals, stationary points, optimisation, monotonicity via derivatives.
- `Integration`: definite/indefinite integration, area under/between curves, trapezium rule, simple differential equations.
- `Logic`: propositions, quantifiers, implication, necessary/sufficient conditions, truth-value reasoning.
- `Counterexamples`: disproof, finding examples that break a statement, identifying false universal claims.
- `Proof`: proof review, proof methods, line-by-line argument checking, validity of deductions.
- `Sets`: set notation, Venn diagrams, unions/intersections/complements, classification by set membership.
- `Probability`: probability calculations, conditional probability, expected counting under uncertainty, tree/table methods.
- `Number Theory`: divisibility, primes, remainders, parity, integer constraints.
- `Combinatorics`: counting, arrangements, combinations, pigeonhole principle, paths/coding.

When a question spans categories, keep the most central solving method as `topic`, then add the rest to `related_topics`. Examples:

- Normal line length: `topic: "Differentiation"`, `related_topics: ["Coordinate Geometry"]`.
- Area bounded by a transformed curve: `topic: "Integration"`, `related_topics: ["Graphs"]`.
- Pigeonhole probability/counting question: choose `Probability` or `Combinatorics` as primary according to the main final step, put the other in `related_topics`.
- Proof about divisibility: `topic: "Proof"`, `related_topics: ["Number Theory"]`.

### Algebra Guidance

`Algebra` is too broad to be useful by itself. During audit, do not simply replace it with a fixed list of subtopics. Instead:

- Add the handout modules that really apply, usually one or more of `a1_algebra_basics`, `a2_equations_inequalities`, `a3_exponents_logarithms`, `c_sequences_series`, or `i_functions_graphs`.
- Add `sections` that show where the question belongs in the handout, even if that section does not exist yet.
- Add `skills` that name the solving moves.
- If the algebra is only a tool inside another idea, move the primary `topic` to the real mathematical idea and keep `Algebra` only as a related topic when useful.

Recommended future UI behaviour: filters should eventually match `topic`, `related_topics`, `modules`, `sections`, and `skills`. The public label can still show the primary topic first, with section/skill filters added later.

## Additional Optimisation Targets

- Add or improve a topic filter that includes both `topic` and `related_topics`, not only the primary topic.
- Later, add module/section/skill filters after enough tags have accumulated to make the UI meaningful.
- Use tag-frequency reports to find gaps or awkward structure in the handouts, then revise the handouts and consolidate tags.
- Keep handout links and practice links aligned: examples in `src/content/docs/tmua/*.md` should point directly to the relevant question or topic filter.
- Add a lightweight "question data version" or visible total-count check so stale browser caches are easier to notice.
- Make image questions accessible with clear alt text or nearby captions when the image carries mathematical information.
- Keep rendering robust for multiline formulas, tables, percentages, and option lists with 5, 6, 7, or 8 choices.

## Completion Rule

Only mark the paper item `[x]` in `TMUA_PROGRESS.md` after:

1. Every question subagent has returned a concise finding/fix summary.
2. Static audit passes for that paper.
3. Astro build passes.
4. Browser audit passes for that paper.
5. A human-readable summary of topic/module/section/skill changes and content fixes is included in the commit message or session summary.
