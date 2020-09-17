describe("Best Practice page", function () {
  it("can be found from homepage", function () {
    cy.server();
    cy.visit("/");
    // gotta open the menu
    cy.wait(100);
    cy.get('[aria-label="Navigation menu"]').click();
    cy.contains("Best Practice").click();
    cy.contains("Coming September 2021");
  });

  it("lists Andrew Garard on page load, then has Martin Lewis in Third Sector view", function () {
    cy.server();
    cy.visit("/best-practice");
    cy.get("h2").contains("Best Practice");
    cy.contains("Andrew Garard");
    cy.wait(100);
    cy.contains("Third Sector").click();
    cy.contains("Martin Lewis");
  });
});
