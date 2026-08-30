# Frontend Guidance

These instructions apply to the React 19, TypeScript 6, Vite 8, and React Router 7 application in this directory. Use the pinned Node 24 and pnpm versions; repository-level validation delegates to this package through npm.

## React

- Use functional components and hooks.
- Keep components simple and readable. Prefer composition over premature abstractions.
- Extract a reusable component when there is genuine reuse or a clear separation of responsibility; avoid oversized components where practical.
- Do not add a state-management library without a demonstrated need.
- Keep data and API access separate from purely presentational components where practical.
- Pages should generally coordinate page-level behavior and compose smaller components.
- Follow the existing routing and source organization unless the task requires a deliberate change.

## TypeScript

- Preserve the enabled TypeScript `strict` checks in new and changed code.
- Avoid `any`, `@ts-ignore`, and unsafe type assertions.
- Handle nullable and optional values explicitly.
- Reuse existing types instead of creating near-duplicate interfaces.
- Do not weaken `tsconfig` or suppress errors to make code compile.

## Security

- Treat frontend authorization checks as user experience only, never as security enforcement.
- Hidden buttons, routes, and client-side state are not access control; enforce authorization in the future backend.
- Never expose server, service-role, database, signing, or other privileged secrets to browser code.
- Treat user input and user-supplied identifiers as untrusted.

## Validation

Run the relevant commands from the repository root after frontend changes:

- `npm run typecheck` runs the frontend `tsc -b` check.
- `npm run lint` runs the configured frontend ESLint checks.
- `npm run test` runs the Vitest suite once using jsdom and React Testing Library.
- `npm run build` runs `tsc -b` and the Vite production build.

Prefer tests that exercise visible behavior through accessible queries. Avoid assertions coupled to component internals. Use `npm run test` for completion evidence; `npm --prefix frontend run test:watch` is for interactive development only.
