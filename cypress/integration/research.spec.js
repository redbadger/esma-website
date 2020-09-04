describe("Research page", function () {
  it("has hidden elements in navigation which can be found by clicking the scroller", function () {
    cy.server();
    cy.visit("/research/early-years/executive-summary");
    cy.contains("Working life").then(el => Cypress.dom.isHidden(el));
    cy.get(".scroll-help.right").click();
    cy.contains("Working life").then(el => !Cypress.dom.isHidden(el));
  });

  it("has Next Up button which takes the user to the next page", function () {
    cy.server();
    cy.visit("/research/early-years/executive-summary");
    cy.get("h2:first-of-type").contains("Life stage overview");
    cy.contains("Next Up").click();
    cy.contains(
      "The family environment affects a child’s early social and cognitive development in a number of ways."
    );
    cy.get("h2:first-of-type").contains("Family environment");
    cy.contains("Next Up").click();
    cy.get("h2:first-of-type").contains("Housing and the neighbourhood");
  });

  it("has Previous button which takes the user to the previous page", function () {
    cy.server();
    cy.visit("/research/early-years/housing-and-neighbourhood");
    cy.get("h2:first-of-type").contains("Housing and the neighbourhood");
    cy.contains("Previous").click();
    cy.contains(
      "The family environment affects a child’s early social and cognitive development in a number of ways."
    );
    cy.get("h2:first-of-type").contains("Family environment");
    cy.contains("Previous").click();
    cy.get("h2:first-of-type").contains("Life stage overview");
  });

  it("has pills which takes the user to those pages", function () {
    cy.server();
    cy.visit("/research/early-years/executive-summary");
    cy.get("h2:first-of-type").contains("Life stage overview");
    cy.get("nav").contains("Housing and the neighbourhood").click();
    cy.get("h2:first-of-type").contains("Housing and the neighbourhood");
    cy.get("nav").contains("Impact of Covid-19").click();
    cy.get("h2:first-of-type").contains("Impact of Covid-19");
  });
});
