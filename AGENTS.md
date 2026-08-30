# Repository Guidance

## Monorepo structure

This repository contains two applications:

- `frontend/`: the browser application.
- `backend/`: the future server application; its technology and architecture are not yet decided.

Keep frontend and backend responsibilities separate. Browser code must not contain privileged logic or credentials. Do not choose a backend framework, database, authentication system, storage provider, or API architecture as part of an unrelated task.

## Working approach

- Inspect the relevant existing code, configuration, and documentation before editing.
- Follow established project patterns and make the smallest change that satisfies the request.
- Avoid unrelated refactors and unnecessary file moves or renames.
- Do not invent requirements or silently introduce major architectural patterns.
- Add dependencies only when they provide a clear, necessary benefit and fit the existing stack.
- Use the repository's pinned Node and package-manager versions; change them only as a deliberate maintenance task.
- Do not delete, overwrite, or revert unrelated user changes.

## Safety and quality

- Never commit secrets, credentials, tokens, private keys, or sensitive user data.
- Never expose backend, database, service-role, or other privileged credentials to frontend code.
- Treat user input, uploaded content, and user-supplied identifiers as untrusted.
- Do not weaken lint rules, TypeScript checks, tests, or other validation to make a change pass.
- Run validation appropriate to the affected application and report results honestly. Never claim a command or test passed unless it was executed successfully.

## Validation

Run the relevant commands from the repository root:

- `npm run typecheck` delegates to the frontend TypeScript build check.
- `npm run lint` delegates to the frontend ESLint check.
- `npm run test` runs the frontend test suite once.
- `npm run build` delegates to the frontend production build.
- `npm run validate:commit` runs the typecheck, lint, and test commit gate.

Use `npm run test` for deterministic validation. Watch-mode commands are for interactive development, not completion evidence.

## Git operations

Do not commit, push, force-push, reset, rewrite history, or create or delete branches unless the user explicitly requests that operation. Do not bypass the pre-commit hook with `--no-verify` unless the user explicitly requests it.
