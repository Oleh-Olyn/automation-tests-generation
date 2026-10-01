# Test Generation Prompt: TC-MODIVO-CLAUDE-001

## Test Case

- **ID:** TC-MODIVO-CLAUDE-001
- **Title:** Verify shopping cart is accessible

## Steps

1. Open https://modivo.ua/
2. Use Playwright MCP to find the shopping cart control.
3. Click the shopping cart control.
4. Verify that the shopping cart page or cart panel is displayed.

## Expected Results

- The MODIVO.UA home page is opened.
- The shopping cart control is visible and accessible.
- After clicking it, the shopping cart page or cart panel is displayed.

## Requirements

- Use Playwright MCP to inspect the real website and validate locators.
- Do not guess locators.
- Use Page Object Model.
- Reuse existing Page Objects when possible.
- All locators and UI interactions must be inside Page Objects.
- Keep the test spec focused on business behavior and assertions.
- Do not use waitForTimeout or arbitrary delays.
- Do not create duplicate Page Objects.
- Store the test in tests/modivo-claude-cart.spec.ts.
- Store this prompt in tests/prompts/modivo-claude-cart.md.
- Add ISTQB-style documentation to the spec:
  Test Case ID, Title, Preconditions, Test Data, Steps, Expected Results.
- Run the test after creating it.
- Run it in Chromium, Firefox and WebKit.
- Do not create unnecessary files.
