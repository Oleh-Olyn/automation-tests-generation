# Test Generation Prompt: TC-MODIVO-CYPRESS-001

## Test Case

- ID: TC-MODIVO-CYPRESS-001
- Title: Verify login link is visible on the home page

## Preconditions

- MODIVO.UA is available.
- User is not logged in.

## Test Data

- URL: https://modivo.ua/

## Steps

1. Visit `https://modivo.ua/`.
2. Verify that the "Ввійти" link is visible.

## Expected Results

- The "Ввійти" link is visible on the MODIVO.UA home page.

## Cypress Prompt

```js
cy.prompt([
  "Visit 'https://modivo.ua/'",
  "Verify that the 'Ввійти' link is visible",
]);
```
