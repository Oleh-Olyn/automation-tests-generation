# Prompt: MODIVO.UA login form visibility

Create and execute Playwright test for MODIVO.UA using Playwright MCP.

Test Case:
- ID: TC-MODIVO-LOGIN-001
- Title: Verify login form elements after clicking "Ввійти"

Steps:
1. Open https://modivo.ua/
2. Use Playwright MCP to find and click the "Ввійти" account/login button.
3. Verify that the login form is displayed.
4. Verify that an email input is visible.
5. Verify that a password input is visible.
6. Verify that the login button is visible.

Expected Results:
- The login form is displayed.
- Email input is visible.
- Password input is visible.
- Login button is visible.

Requirements:
- Use Playwright MCP to inspect the actual website and validate locators.
- Use Page Object Model.
- Put all locators inside Page Objects.
- Test spec must contain only business-level actions and assertions.
- Do not guess locators.
- Do not use waitForTimeout.
- Do not create duplicate Page Objects.
- Reuse existing Page Objects when possible.
- Store the test in tests/modivo-cursor-login.spec.ts.
- Store the prompt in tests/prompts/modivo-cursor-login.md.
- Add ISTQB-style documentation to the test: ID, title, preconditions, steps, test data, expected results.
- Run the test after creating it.
- Do not create unnecessary files.
