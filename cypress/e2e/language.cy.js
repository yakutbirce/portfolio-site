describe("Language Toggle Test", () => {
    it("should switch languages when the button is clicked", () => {
      cy.visit("http://localhost:5174");
  
      // Sayfa Türkçe başlamalı (default)
      cy.contains("Yetenekler").should("exist");
      cy.contains("ENGLISH").should("exist");
  
      // Butona tıkla ➤ İngilizce olsun
      cy.contains("ENGLISH").click();
  
      // Yeni içerik kontrolü (İngilizce)
      cy.contains("Skills").should("exist");
      cy.contains("TÜRKÇE").should("exist");
      cy.contains("YE GEÇ").should("exist");
  
      // Tekrar tıkla ➤ tekrar Türkçe
      cy.contains("TÜRKÇE").click();
  
      // Geri Türkçe içerik
      cy.contains("Yetenekler").should("exist");
      cy.contains("ENGLISH").should("exist");
    });
  });
  