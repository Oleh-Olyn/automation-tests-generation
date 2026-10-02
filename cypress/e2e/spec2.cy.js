describe("MODIVO.UA", () => {
  it("TC-MODIVO-CYPRESS-002: social media links are visible in the footer", () => {
    // Prompt step 1: Visit 'https://modivo.ua/'
    cy.visit("https://modivo.ua/");

    // Prompt step 2: Scroll to the bottom of the page
    cy.get("div.footer-bottom").scrollIntoView();

    // Prompt step 3: Verify that the MODIVO logo is visible in the footer
    cy.get("footer.base-footer").find("svg.club-logo").should("be.visible");

    // Prompt step 4: Verify that the Instagram social media link or icon is visible in the footer
    cy.get("footer.base-footer")
      .find('a[href="https://www.instagram.com/modivo_ua/"]')
      .should("be.visible");

    // Prompt step 5: Verify that the YouTube social media link or icon is visible in the footer
    cy.get("footer.base-footer")
      .find(
        'a[href="https://www.youtube.com/channel/UCYGPXwVkOgTUbpmV9uSYH8Q"]',
      )
      .should("be.visible");

    // Prompt step 6: Verify that the Facebook social media link or icon is visible in the footer
    cy.get("footer.base-footer")
      .find('a[href="https://www.facebook.com/modivoua"]')
      .should("be.visible");
  });
});
