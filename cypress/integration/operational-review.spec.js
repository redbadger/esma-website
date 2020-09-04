describe("Operational review page", function () {
  it("can be found from homepage", function () {
    cy.server();
    cy.visit("/");
    // gotta open the menu
    cy.get('[aria-label="Navigation menu"]').click();
    cy.contains("Operational review").click();
    cy.contains("Coming September 2021");
  });

  it("lists Andrew Garard on page load, then has Martin Lewis in Third Sector view", function () {
    cy.server();
    cy.visit("/operational-review");
    cy.get("h2").contains("Operational Review");
    cy.contains("Andrew Garard");
    cy.contains("Third Sector").click();
    cy.contains("Martin Lewis");
  });
});
