describe("Research page", function () {
  it("has hidden elements in navigation which can be found by clicking the scroller", function () {
    cy.server();
    cy.visit("/research/early-years/executive-summary");
    cy.contains("Working life").then(el => Cypress.dom.isHidden(el));
    cy.get(".scroll-help.right").click();
    cy.contains("Working life").then(el => !Cypress.dom.isHidden(el));
  });
});
