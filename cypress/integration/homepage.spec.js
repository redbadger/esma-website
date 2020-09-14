describe("Homepage", function () {
  it("has a hero with inspiring text", function () {
    cy.server();
    cy.visit("/");
    cy.contains("Social inequality is persistent and systematic.");
    cy.contains("Together we can change this.");
  });
});
