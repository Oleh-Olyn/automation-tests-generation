# AI Test Automation

## Summary

This project contains UI automation tests for [MODIVO.UA](https://modivo.ua/) generated with three approaches:

- **Cursor + Playwright MCP** — 2 test cases
- **Claude Desktop + Playwright MCP** — 2 test cases
- **Cypress + Cypress Cloud + `cy.prompt()`** — 2 test cases

The Playwright tests use the **Page Object Model (POM)**.  
The prompts used to generate the tests are stored as Markdown files in `tests/prompts`.

## Test Cases

| Solution                | Test Case ID          | Test Case                                            |
| ----------------------- | --------------------- | ---------------------------------------------------- |
| Cursor + Playwright MCP | TC-MODIVO-CURSOR-001  | Verify login form elements after clicking "Ввійти"   |
| Cursor + Playwright MCP | TC-MODIVO-CURSOR-002  | Verify search field is displayed on the home page    |
| Claude + Playwright MCP | TC-MODIVO-CLAUDE-001  | Verify shopping cart is accessible                   |
| Claude + Playwright MCP | TC-MODIVO-CLAUDE-002  | Verify main navigation is displayed on the home page |
| Cypress + Cypress Cloud | TC-MODIVO-CYPRESS-001 | Verify login link is visible on the home page        |
| Cypress + Cypress Cloud | TC-MODIVO-CYPRESS-002 | Verify social media links are visible in the footer  |

## Requirements

### Software

- Node.js 22+ recommended
- npm
- Cursor IDE
- Claude Desktop
- Cypress 16.1.1+
- Google Chrome or another Chromium-based browser for Cypress `cy.prompt()`

### Project setup

Playwright dependencies are defined in `package.json`.

Cypress is configured in `cypress.config.js` and connected to Cypress Cloud using the project ID.

For Playwright MCP:

- Cursor configuration is stored in `.cursor/mcp.json`.
- Cursor rules are stored in `.cursor/rules/ai-instructions.mdc`.
- Claude Desktop uses its local MCP configuration with the official Playwright MCP server.
- Claude rules are stored in `ai-instructions-claude.md`.

## Installation Steps

1. Clone the repository.

```bash
git clone https://github.com/Oleh-Olyn/automation-tests-generation.git
cd automation-tests-generation
```

2. Install project dependencies.

```bash
npm install
```

3. Install Playwright browsers if they are not already installed.

```bash
npx playwright install
```

4. Open the project in Cursor and verify that Playwright MCP is connected.

5. Open Claude Desktop and verify that Filesystem access is configured for the project directory and Playwright MCP is connected.

6. Open Cypress when required:

```bash
npx cypress open
```

7. For Cypress Cloud recording, provide the Cypress Record Key through an environment variable. Do not store the key in the repository.

PowerShell:

```powershell
$env:CYPRESS_RECORD_KEY="YOUR_RECORD_KEY"
```

## How to Run Tests

### Playwright

Run all Playwright tests:

```bash
npx playwright test
```

Run the Cursor tests:

```bash
npx playwright test tests/modivo-cursor-login.spec.ts tests/modivo-cursor-home.spec.ts
```

Run the Claude tests:

```bash
npx playwright test tests/modivo-claude-cart.spec.ts tests/modivo-claude-navigation.spec.ts
```

Run a specific test in headed mode:

```bash
npx playwright test tests/modivo-claude-cart.spec.ts --headed
```

### Cypress

Open Cypress interactively:

```bash
npx cypress open
```

Run Cypress tests from the terminal:

```bash
npx cypress run
```

Run the Cypress suite with Cypress Cloud recording:

```bash
npx cypress run --record
```

`cy.prompt()` test generation is demonstrated in the Cypress specs. The natural-language prompts used for generation are also stored in `tests/prompts`.

## How to Generate Reports

### Playwright HTML Report

After a Playwright test run, open the HTML report with:

```bash
npx playwright show-report
```

Generated Playwright reports and test artifacts are excluded from Git by `.gitignore`.

### Cypress Cloud Report

Cypress Cloud stores recorded test runs in the connected Cypress Cloud project.

To publish a run:

```powershell
$env:CYPRESS_RECORD_KEY="YOUR_RECORD_KEY"
npx cypress run --record
```

Open the project in Cypress Cloud to review recorded runs, test results, command logs, and related artifacts.

## AI Rules and Prompts

### Playwright AI Rules

The project contains rules for both Playwright MCP solutions:

- `.cursor/rules/ai-instructions.mdc` — automatically applied by Cursor.
- `ai-instructions-claude.md` — read and remembered by Claude at the beginning of a session.

The rules cover:

- Playwright MCP usage
- Page Object Model
- stable locator strategy
- assertions
- clean code
- test case traceability
- file hygiene
- MCP-based debugging

### Test Generation Prompts

All prompts used to generate the test cases are stored in:

```text
tests/prompts/
```

Each prompt is kept as a separate Markdown file and corresponds to one test case.

## Project Structure

```text
automation-tests-generation/
├── .cursor/
│   ├── mcp.json
│   └── rules/
│       └── ai-instructions.mdc
├── cypress/
│   └── e2e/
│       ├── spec1.cy.js
│       └── spec2.cy.js
├── tests/
│   ├── pageObjects/
│   ├── prompts/
│   ├── modivo-cursor-login.spec.ts
│   ├── modivo-cursor-home.spec.ts
│   ├── modivo-claude-cart.spec.ts
│   └── modivo-claude-navigation.spec.ts
├── ai-instructions-claude.md
├── cypress.config.js
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore
```
