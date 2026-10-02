# Test Generation Prompt: TC-MODIVO-CYPRESS-002

## Test Case

- ID: TC-MODIVO-CYPRESS-002
- Title: Verify social media links are visible in the footer

## Preconditions

- MODIVO.UA is available.
- User can access the home page.

## Test Data

- URL: https://modivo.ua/

## Steps

1. Visit `https://modivo.ua/`.
2. Scroll to the bottom of the page.
3. Verify that the MODIVO logo is visible in the footer.
4. Verify that the Instagram social media link or icon is visible in the footer.
5. Verify that the YouTube social media link or icon is visible in the footer.
6. Verify that the Facebook social media link or icon is visible in the footer.

## Expected Results

- The MODIVO logo is visible in the footer.
- The Instagram social media link or icon is visible in the footer.
- The YouTube social media link or icon is visible in the footer.
- The Facebook social media link or icon is visible in the footer.

## Cypress Prompt

```js
cy.prompt([
  "Visit 'https://modivo.ua/'",
  "Scroll to the bottom of the page",
  "Verify that the MODIVO logo is visible in the footer",
  "Verify that the Instagram social media link or icon is visible in the footer",
  "Verify that the YouTube social media link or icon is visible in the footer",
  "Verify that the Facebook social media link or icon is visible in the footer",
]);
```
