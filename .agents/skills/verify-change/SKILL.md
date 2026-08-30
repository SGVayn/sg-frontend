---
name: verify-change
description: Verify an implementation before considering a task complete. Use after repository changes when validation and an evidence-based completion report are needed.
---

# Verify Change

Verify the requested implementation without expanding its scope.

## Workflow

1. Inspect the final Git diff, including staged and unstaged changes.
2. Compare the implementation with the requested behavior and acceptance criteria.
3. Identify accidental, generated, or unrelated modifications.
4. Where applicable, inspect for obvious React and TypeScript problems, including unsafe types, incorrect hook usage, nullable-value mistakes, and misplaced data access.
5. Run the most relevant targeted tests when they exist.
6. Run type checking when an available project command supports it.
7. Run linting when available.
8. Run an appropriate production build when it provides useful confidence.
9. After any necessary in-scope fixes, re-inspect the diff and rerun affected checks.
10. Report exactly what was checked, what passed, what failed, what could not be run, and any remaining concerns.

## Constraints

- Do not claim a check passed unless it was actually executed successfully.
- Do not weaken tests, lint rules, TypeScript settings, or other safeguards to obtain a passing result.
- Do not fix unrelated problems unless they prevent the requested change from being completed or verified; report them separately instead.
- Distinguish failures caused by the current change from pre-existing failures when the available evidence permits it.
- Use the repository's documented commands and existing scripts. Do not invent validation commands or install dependencies without authorization.

## Repository validation

For this monorepo, run applicable validation from the repository root:

- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`

Use the deterministic root `test` script for completion evidence rather than an interactive watch-mode command.
Use `npm run validate:commit` when the combined commit gate is the appropriate validation scope.
