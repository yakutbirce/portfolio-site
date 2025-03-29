describe("Portfolio Landing Page", () => {
  it("loads the homepage successfully", () => {
    cy.visit("http://localhost:5174"); 
    cy.contains("Yetenekler"); 
    cy.get("header").should("exist"); 
    cy.get("#skills").should("exist"); 
  });
});
