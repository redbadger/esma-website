describe("Homepage", function () {
  it("has a 'find out how' button", function () {
    cy.server();
    cy.visit("/");
    cy.contains("Find out how").click();
    /* Currently it does nothing */
  });

  it("shows third stat when I click the third dot", function () {
    cy.server();
    cy.visit("/");
    // When I click the third dot
    cy.get(".carousel .dot:nth-of-type(3)").click();
    // Then I read the '27%' hero stat
    cy.contains("27");
  });
});
