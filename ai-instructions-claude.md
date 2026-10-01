# Playwright MCP Test Automation Rules

## 1. Project Scope

- Work only inside the current project.
- Do not modify files outside the project.
- Test specifications must be stored in `tests`.
- Page Object files must be stored in `tests/pageObjects`.
- Test-generation prompts must be stored in `tests/prompts`.

## 2. Playwright MCP

- Use Playwright MCP for browser navigation and UI inspection when generating Playwright tests.
- Use Playwright MCP to inspect the real application DOM.
- Use Playwright MCP to discover and validate locators.
- Do not guess locators when they can be discovered through Playwright MCP.
- For every new or modified locator, validate it against the actual application.
- Prefer stable locators in the following order:
  1. `getByRole`
  2. `getByLabel`
  3. `getByPlaceholder`
  4. `getByTestId`
  5. stable CSS attributes
- Avoid XPath unless there is no stable alternative.

## 3. Page Object Model

- Page Object Model is mandatory for every UI test.
- Never create a test spec without the corresponding Page Object.
- Store Page Objects in `tests/pageObjects`.
- All page locators must be defined inside Page Object classes.
- All page interactions must be implemented as Page Object methods.
- Tests must use Page Object methods instead of direct locators.
- Tests must describe business behavior rather than implementation details.
- Reuse existing Page Objects whenever possible.
- Do not create duplicate Page Objects for the same page.

## 4. Test Specifications

- Store all test specifications in `tests`.
- Use the `.spec.ts` extension.
- Use descriptive test names.
- Each test must represent one independent test scenario.
- Tests must not depend on execution order.
- Follow Arrange / Act / Assert structure where appropriate.
- Every expected result from the test case must have an explicit assertion.

## 5. Locators

- Prefer user-facing and accessibility-based locators.
- Prefer `getByRole` whenever appropriate.
- Use accessible names when available.
- Use `getByTestId` when a stable test ID exists.
- Do not use fragile generated class names.
- Do not use arbitrary CSS selectors when a semantic locator is available.
- Do not use XPath unless necessary.
- Validate locators through Playwright MCP before adding them to Page Objects.

## 6. Waits

- Do not use arbitrary `waitForTimeout`.
- Do not add hardcoded delays to make tests pass.
- Rely on Playwright auto-waiting.
- Use explicit Playwright waiting mechanisms only when required by the application behavior.

## 7. Assertions

- Use Playwright `expect` assertions.
- Assertions must verify observable application behavior.
- Every important expected result must have an explicit assertion.
- Do not use assertions that only verify that an action was executed.
- Prefer specific assertions over generic assertions.

## 8. Test Data

- Do not hardcode passwords, API keys, tokens, or other secrets.
- Sensitive values must be provided through environment variables.
- Keep test data readable and maintainable.
- Do not use production credentials in test files.

## 9. Clean Code

- Use TypeScript.
- Use meaningful names for classes, methods, variables, and tests.
- Keep methods focused on a single responsibility.
- Avoid duplicated code.
- Reuse common Page Object methods.
- Avoid unnecessary abstractions.
- Keep test specifications concise and readable.
- Do not put implementation details into test specifications when they belong in Page Objects.

## 10. Test Case Traceability

Every generated test must correspond to a defined test case containing:

- Test Case ID
- Title
- Preconditions
- Test Data
- Steps
- Expected Results

The implementation must cover all required expected results from the test case.

## 11. File Creation

- Do not create random spec files.
- Do not create UUID-based test filenames.
- Do not create temporary files inside the test directories.
- Do not create duplicate files.
- Before creating a new Page Object, check whether an existing Page Object can be reused or extended.

## 12. Reports and Generated Files

- Do not commit Playwright reports.
- Do not commit `test-results`.
- Do not commit screenshots, videos, or traces unless explicitly required.
- Do not create cache files in the source directories.

## 13. MCP-Based Debugging

When a generated test fails:

1. Inspect the failure.
2. Use Playwright MCP to inspect the current application state.
3. Verify the locator.
4. Verify the expected application behavior.
5. Fix the root cause.
6. Do not add arbitrary waits or retries as a workaround.

## 14. Final Validation

Before considering a generated test complete:

- Verify that POM is used.
- Verify that all locators are inside Page Objects.
- Verify that test interactions use Page Object methods.
- Verify that every expected result has an assertion.
- Verify that the test is independent.
- Verify that there are no hardcoded secrets.
- Verify that no unnecessary files were created.
- Verify that the test follows the project's naming conventions.
- Verify that the generated test can be executed with Playwright.
