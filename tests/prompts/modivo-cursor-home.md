# Prompt: MODIVO.UA home page search field visibility

Create and execute Playwright test for MODIVO.UA using Playwright MCP.

Test Case:
- ID: TC-MODIVO-HOME-002
- Title: Verify search field is displayed on the MODIVO.UA home page

Steps:
1. Open https://modivo.ua/
2. Verify that the product search field is visible.

Expected Results:
- The MODIVO.UA home page is displayed.
- The product search field is visible and available to the user.

Requirements:
- Use Playwright MCP to inspect the actual website and validate the locator.
- Do not guess the locator.
- Use Page Object Model.
- Put the locator inside a Page Object.
- The test spec must contain only business-level actions and assertions.
- Do not use waitForTimeout.
- Do not use arbitrary waits.
- Reuse existing Page Objects when possible.
- Do not create duplicate Page Objects.
- Store the test in tests/modivo-cursor-home.spec.ts.
- Store this prompt in tests/prompts/modivo-cursor-home.md.
- Add ISTQB-style documentation to the spec:
  - Test Case ID
  - Title
  - Preconditions
  - Test Data
  - Steps
  - Expected Results
- Use Playwright expect assertions.
- Run the test after creating it.
- Run the test in Chromium, Firefox and WebKit.
- Do not create unnecessary files.

If an existing MODIVO home page Page Object can be reused, extend and reuse it instead of creating another duplicate Page Object.
