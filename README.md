# SG

This repository contains the SG frontend and backend applications.

- `frontend/` - Vite frontend application
- `backend/` - Backend application

## Development

Use Node 24.20.0. The frontend pins pnpm 11.24.0 through Corepack.

After cloning the repository, activate its Git hooks once:

```sh
npm run setup:hooks
```

Each commit runs `npm run validate:commit`, which performs type checking, linting, and the test suite. A failing check stops the commit.

GitHub Actions runs the same validation plus the production build for pushes and pull requests targeting `main`.
