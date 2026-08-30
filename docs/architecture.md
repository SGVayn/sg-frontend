# Architecture

## Repository

SG is a monorepo with separate `frontend/` and `backend/` applications. Browser-facing concerns belong in the frontend; privileged data access and security enforcement will belong in the backend once its architecture is chosen.

## Current technology

### Frontend

- React 19
- TypeScript 6
- Node.js 24.20.0
- Vite 8
- React Router 7
- ESLint 10
- Vitest 4 with jsdom and React Testing Library
- pnpm 11.24.0 lockfile

### Backend

Not yet decided.

### Database

Not yet decided.

### Authentication

Not yet decided.

### File and media storage

Not yet decided.

## Architectural decisions

Significant choices such as backend framework, API design, database, authentication, storage, and deployment should be evaluated and documented deliberately. Do not introduce them implicitly while implementing an unrelated feature.
