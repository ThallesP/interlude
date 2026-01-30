<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Convex-FF6B6B?style=for-the-badge&logo=convex&logoColor=white" alt="Convex" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

<h1 align="center">λ Interlude</h1>

<p align="center">
  <strong>Skip the frontend, ship the tool.</strong>
  <br />
  Turn your TypeScript functions into polished internal tools—no React, no CSS, no UI code required.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#development">Development</a>
</p>

---

## Why Interlude?

Building internal tools shouldn't require a frontend engineer. Interlude lets you write pure backend code that automatically generates beautiful, functional UIs for your team.

**Perfect for AI-assisted development**—no frontend tokens wasted. Just async functions with full type safety.

```typescript
import { Action, io } from "@interlude/sdk";

export default new Action({
  name: "Create user",
  handler: async () => {
    const email = await io.input.email("Email");
    const role = await io.select("Role", ["Admin", "Member"]);
    
    await createUser({ email, role });
    return io.message("User created!");
  }
});
```

## Features

- **Pure TypeScript** — No config files, no YAML, no visual builders. Just async functions with full type safety.
- **Reactive UI** — Each `await` generates a form field. When users submit, your code continues.
- **AI-Optimized** — Backend-only means fewer tokens, faster AI completions, and less context to juggle.
- **Rich Inputs** — Text, dates, selects, file uploads, tables, and more through simple `io.*` methods.
- **Auth Built In** — User management, team roles, and permissions come standard.
- **Open Source** — MIT licensed, free forever. Self-host anywhere.

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/) v1.3.5 or later
- Node.js 18+

### Installation

```bash
# Clone the repository
git clone https://github.com/ThallesP/interlude.git
cd interlude

# Install dependencies
bun install

# Start development servers
bun run dev
```

## How It Works

1. **Define your action** — Create an async handler using `io` methods to collect user input
2. **Run the server** — Interlude scans your actions and generates a web UI automatically
3. **Control access** — Configure who can see and run each action with role-based permissions

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Monorepo** | [Turborepo](https://turborepo.dev/) |
| **Package Manager** | [Bun](https://bun.sh/) |
| **Frontend** | [React 19](https://react.dev/) + [Vite](https://vite.dev/) |
| **Backend** | [Convex](https://convex.dev/) |
| **Authentication** | [Better Auth](https://better-auth.com/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Linting** | [Biome](https://biomejs.dev/) |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) |

## Project Structure

```
interlude/
├── apps/
│   └── web/                 # React frontend application
│       ├── src/
│       │   ├── pages/       # Application pages
│       │   ├── components/  # UI components
│       │   ├── lib/         # Utilities and auth client
│       │   └── providers.tsx
│       └── package.json
├── packages/
│   ├── backend/             # Convex backend
│   │   └── convex/          # Convex functions and schema
│   └── typescript-config/   # Shared TypeScript configs
├── turbo.json               # Turborepo configuration
├── biome.json               # Biome linter config
└── package.json             # Root package.json
```

## Development

### Available Scripts

```bash
# Start all apps in development mode
bun run dev

# Build all apps and packages
bun run build

# Lint the codebase
bun run lint

# Format code
bun run format

# Type check
bun run check-types
```

### Working with the Backend

```bash
# Navigate to backend package
cd packages/backend

# Start Convex development server
bun run dev

# Deploy to production
bun run deploy
```

## Inspiration

Interlude is inspired by [Interval](https://interval.com), a pioneering tool for building internal apps with backend code. Unfortunately, Interval was acquired and is no longer actively maintained. Interlude aims to carry forward that vision as an open-source alternative.

## License

MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">
  Built with ❤️ for developers who'd rather write logic than layouts.
</p>
