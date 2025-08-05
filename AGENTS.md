\
# Agent Guidelines for prim-ai-web

This document outlines the expected commands, code style, and conventions for agents operating within the prim-ai-web repository.

## 1. Commands

- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** No explicit single test command found. Use `npm test` or `npx vitest run <test_file_path>` as a convention.

## 2. Code Style & Conventions

- **Frameworks:** Next.js, React, Tailwind CSS, Radix UI.
- **TypeScript:** Strongly typed. Use explicit types for function arguments and return values.
- **Imports:** Use ES module syntax. Utilize path aliases (e.g., `@/components`) for component imports.
- **Formatting:** Consistent 2-space indentation. Adhere to ESLint/Prettier standards.
- **Naming:**
    - Components: PascalCase (e.g., `Header`, `ThemeProvider`).
    - Utility functions: camelCase (e.g., `cn`).
    - Variables: camelCase.
- **Error Handling:** Implement robust error handling, likely using try-catch blocks for operations prone to failure.
- **Theming:** `next-themes` is used for managing application themes.
