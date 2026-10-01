# Test Generation Prompt: TC-MODIVO-CLAUDE-002

## Test Case

- **ID:** TC-MODIVO-CLAUDE-002
- **Title:** Verify main navigation is displayed on the home page

## Steps

1. Open https://modivo.ua/
2. Use Playwright MCP to inspect the main navigation.
3. Verify that the main navigation is visible.
4. Verify that the main category links in the navigation are visible.

## Expected Results

- The MODIVO.UA home page is displayed.
- The main navigation is visible.
- The main category links are visible and available to the user.

## Requirements

- Use Playwright MCP to inspect the real website and validate all locators.
- Do not guess locators.
- Use Page Object Model.
- Reuse the existing ModivoHomePage Page Object when possible.
- All locators and UI interactions must be inside Page Objects.
- The test spec must contain only business-level actions and assertions.
- Do not use waitForTimeout or arbitrary delays.
- Do not create duplicate Page Objects.
- Store the test in tests/modivo-claude-navigation.spec.ts.
- Store this prompt in tests/prompts/modivo-claude-navigation.md.
- Add ISTQB-style documentation to the spec:
  Test Case ID, Title, Preconditions, Test Data, Steps, Expected Results.
- Run the test after creating it.
- Run it in Chromium, Firefox and WebKit.
- Do not create unnecessary files.
