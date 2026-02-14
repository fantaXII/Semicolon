# Agentic Development Guidelines for Semicolon Repository

This document outlines the conventions and commands necessary for agentic coding agents operating within this repository. Adherence to these guidelines ensures consistency, maintainability, and efficient collaboration.

## 1. Build, Lint, and Test Commands

The primary package manager for this project is **Yarn**.

### Build Commands
- **Full Build**: `yarn build`
  - Description: Compiles the project, including all assets and optimizations, for production deployment.

### Linting Commands
- **Lint All**: `yarn lint`
  - Description: Runs the linter across the entire codebase to enforce code style and identify potential issues.
- **Lint Single File**: `yarn lint <file-path>`
  - Description: Lints a specific file. Replace `<file-path>` with the relative path to the file (e.g., `src/components/Button.js`).

### Testing Commands
- **Run All Tests**: `yarn test`
  - Description: Executes the full test suite for the project.
- **Run Single Test**: `yarn test <test-file-path>`
  - Description: Executes tests for a specific file. Replace `<test-file-path>` with the relative path to the test file (e.g., `tests/components/Button.test.js`).
- **Run Specific Test (by name/pattern)**: `yarn test --grep "<test-name-pattern>"`
  - Description: Runs tests that match the provided name or pattern. This is useful for isolating and debugging specific test cases.

## 2. Code Style Guidelines

Adherence to these guidelines is crucial for maintaining a consistent and readable codebase.

### Imports
- **Order**: Imports should generally be grouped as follows:
    1. Built-in Node.js modules (if applicable)
    2. Third-party libraries (e.g., `aos`)
    3. Project-relative imports
- **Style**: Use absolute imports where possible, or relative paths (`./`, `../`) when necessary and clear. Avoid deeply nested relative paths.

### Formatting
- **Indentation**: Use 2 spaces for indentation.
- **Line Length**: Aim for a maximum line length of 100 characters.
- **Quotes**: Prefer single quotes (`'`) for strings, unless the string itself contains a single quote, in which case use double quotes (`"`).
- **Trailing Commas**: Use trailing commas in object and array literals for easier diffs.
- **Automatic Formatting**: It is highly recommended to use a code formatter like Prettier. If a configuration file (e.g., `.prettierrc`) is present, adhere to its rules. Otherwise, follow the general guidelines above.

### Types
- **Static Typing**: Utilize static typing wherever possible, preferably with TypeScript.
- **Type Annotations**: Use clear and concise type annotations for function parameters, return values, and complex variables.

### Naming Conventions
- **Variables & Functions**: Use `camelCase` (e.g., `getUserData`, `totalCount`).
- **Classes & Components**: Use `PascalCase` (e.g., `UserProfile`, `ModalComponent`).
- **Constants**: Use `UPPER_SNAKE_CASE` for true constants (values that never change) (e.g., `MAX_RETRIES`).
- **Booleans**: Prefix boolean variables with `is`, `has`, or `should` (e.g., `isActive`, `hasPermission`).

### Error Handling
- **`try...catch` Blocks**: Use `try...catch` blocks for operations that may fail (e.g., network requests, file I/O).
- **Meaningful Errors**: Throw errors with clear, descriptive messages that explain the cause of the failure.
- **Error Objects**: Extend built-in `Error` objects for custom error types when appropriate.
- **Logging**: Log errors effectively using a logging library or `console.error` for debugging. Avoid logging sensitive information.

### Consistency
- **Follow Existing Patterns**: When in doubt, refer to the existing codebase for examples of how similar logic, components, or patterns are implemented. Consistency with the existing project structure is paramount.

## 3. Project Structure and Folder Conventions

To ensure reusability and maintainability, follow these folder conventions:

- **Pages**: All pages should be client-side components for better performance and interactivity.
- **Server Actions**: Necessary server-side logic and actions should be encapsulated in separate files within the `lib` folder.
- **API**: API endpoints should be located in the `api` folder.
- **UI Components**: Reusable UI components should be created and organized within the `components` folder.

## 4. Project-Specific Rules

### Cursor Rules
No specific Cursor rules files (`.cursor/rules/` or `.cursorrules`) were found in the repository. Agents should follow general best practices.

### Copilot Rules
No specific Copilot instructions file (`.github/copilot-instructions.md`) was found in the repository. Agents should adhere to the general guidelines outlined in this document.

## 5. Version Control (Git)

- **Commits**: Make small, atomic commits. Each commit should represent a single logical change.
- **Commit Messages**: Write clear and concise commit messages following the Conventional Commits specification (e.g., `feat: add user authentication`, `fix: resolve infinite loop in data fetching`).
- **Branching**: Use feature branches for new development. Avoid committing directly to the main branch.
- **Pull Requests**: Create descriptive pull requests that clearly explain the changes and their purpose. Include relevant ticket numbers if applicable.

---
This document is a living guide and will be updated as the project evolves.
