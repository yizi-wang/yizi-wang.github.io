/** Presentation visibility is separate from mathematical experiment state. */
export function workedAnswersHidden() {
  return (
    document.body.classList.contains("teacher") &&
    Boolean(document.querySelector("#hide-worked")?.checked)
  );
}
