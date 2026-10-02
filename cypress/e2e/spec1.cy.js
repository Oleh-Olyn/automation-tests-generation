describe("MODIVO.UA", () => {
  it("TC-MODIVO-CYPRESS-001: login link is visible on the home page", () => {
    // Prompt step 1: Visit 'https://modivo.ua/'
    cy.visit("https://modivo.ua/");

    // Prompt step 2: Verify that the 'Ввійти' link is visible
    cy.get('a[href="/login"]').should("be.visible");
  });
});
