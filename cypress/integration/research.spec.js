const thenWeSeeEarlyYearsLifeStageOverview = () => {
  cy.contains(
    "The time between birth and primary school is a critical time for a child’s social, emotional, cognitive and communication development."
  );
  cy.get("h2:first-of-type").contains("Life stage overview");
};

const thenWeSeeFamilyEnvironment = () => {
  cy.contains(
    "The family environment affects a child’s early social and cognitive development in a number of ways."
  );
  cy.get("h2:first-of-type").contains("Family environment");
};

const thenWeSeeHousing = () => {
  cy.contains(
    "Housing and people’s surrounding neighbourhood can either mitigate or exacerbate the impact of poverty on people’s lives."
  );
  cy.get("h2:first-of-type").contains("Housing and the neighbourhood");
};

const thenWeSeeSchoolYearsLifeStageOverview = () => {
  cy.contains(
    "The school system has been seen as a vital tool to support social mobility"
  );
  cy.get("h2:first-of-type").contains("Life Stage Overview");
};

const thenWeSeeSchoolYearsEarlyYearsFoundationStage = () => {
  cy.contains(
    "The Early Years Foundation Stage sets the standards for the learning, development and care of children from birth to five years of age."
  );
  cy.get("h2:first-of-type").contains("Early Years Foundation Stage");
};

const whenWeClickNextUp = () => {
  cy.contains("Next Up").click();
};

const whenWeClickPrevious = () => {
  cy.contains("Previous").click();
};

describe("Issues chronology research page", function () {
  it("has hidden elements in navigation which can be found by clicking the scroller", function () {
    cy.server();
    cy.visit("/issues-chronology/early-years/");
    cy.contains("Working life").then(el => Cypress.dom.isHidden(el));
    cy.get(".scroll-help.right").click();
    cy.contains("Working life").then(el => !Cypress.dom.isHidden(el));
  });

  it("has Next Up button which takes the user to the next page", function () {
    cy.server();
    cy.visit("/issues-chronology/early-years/");
    thenWeSeeEarlyYearsLifeStageOverview();
    whenWeClickNextUp();
    thenWeSeeFamilyEnvironment();
    whenWeClickNextUp();
    thenWeSeeHousing();
  });

  it("has Previous button which takes the user to the previous page", function () {
    cy.server();
    cy.visit("/issues-chronology/early-years/housing-and-neighbourhood");
    thenWeSeeHousing();
    whenWeClickPrevious();
    thenWeSeeFamilyEnvironment();
    whenWeClickPrevious();
    thenWeSeeEarlyYearsLifeStageOverview();
  });

  it("has pills which takes the user to those pages", function () {
    cy.server();
    cy.visit("/issues-chronology/early-years/");
    thenWeSeeEarlyYearsLifeStageOverview();
    cy.get("nav").contains("Housing and the neighbourhood").click();
    thenWeSeeHousing();
    cy.get("nav").contains("Impact of Covid-19").click();
    cy.get("h2:first-of-type").contains("Impact of Covid-19");
  });

  it("can navigate to other chronology sections", function () {
    cy.server();
    cy.visit("/issues-chronology/early-years/");
    thenWeSeeEarlyYearsLifeStageOverview();
    cy.get("nav").contains("Housing and the neighbourhood").click();
    thenWeSeeHousing();
    cy.get("nav").contains("School years").click();
    thenWeSeeSchoolYearsLifeStageOverview();
    whenWeClickNextUp();
    thenWeSeeSchoolYearsEarlyYearsFoundationStage();
    cy.get("nav").contains("Early years").click();
    thenWeSeeEarlyYearsLifeStageOverview();
  });
});
