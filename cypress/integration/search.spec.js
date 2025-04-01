describe("Search Test for cozaprezent.pl", () => {
  // Przed każdym testem odwiedzamy stronę główną sklepu
  beforeEach(() => {
    cy.visit("https://cozaprezent.pl/");
  });

  it("should allow searching for a product", () => {
    // Klikamy przycisk otwierający wyszukiwarkę, jeśli jest to wymagane (np. rozwija pole wyszukiwania)
    cy.get("button.search-toggle-style-bordered").first().click();

    // Wpisujemy frazę "klocki" w pole wyszukiwania i symulujemy naciśnięcie Enter
    cy.get("input#woocommerce-product-search-field-0")
      .type("klocki{enter}");

    // Weryfikujemy, czy URL zawiera zapytanie wyszukiwania
    cy.url().should("include", "s=klocki");

    // Sprawdzamy, czy lista produktów (wyniki wyszukiwania) jest widoczna
    cy.get(".products").scrollIntoView().should("be.visible");
  });
});
