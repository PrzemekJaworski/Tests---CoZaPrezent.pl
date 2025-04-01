describe("Homepage Test for cozaprezent.pl", () => {
  // Przed każdym testem odwiedzamy stronę główną sklepu
  beforeEach(() => {
    cy.visit("https://cozaprezent.pl/");
  });

  it("should display the main elements", () => {
    // Sprawdzamy, czy element z klasą .shop-name jest widoczny
    cy.get(".shop-name").should("be.visible");
    // Sprawdzamy, czy .shop-name zawiera tekst "Co Za Prezent !"
    cy.get(".shop-name").should("contain.text", "Co Za Prezent !");

    // Sprawdzamy, czy element <nav> (menu) jest widoczny
    cy.get("nav").should("be.visible");

    // Sprawdzamy, czy elementy o klasach .top-products lub .products są widoczne
    cy.get(".top-products, .products").should("be.visible");

    // Sprawdzamy, czy wszystkie obrazki (img) są widoczne
    cy.get("img").should("be.visible");
  });
});
