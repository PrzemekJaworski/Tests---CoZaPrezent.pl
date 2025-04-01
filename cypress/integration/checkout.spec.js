describe("Checkout Test for cozaprezent.pl", () => {
  // Przed każdym testem odwiedzamy stronę główną i dodajemy produkt do koszyka
  beforeEach(() => {
    cy.visit("https://cozaprezent.pl/");

    // Klikamy w przycisk dodania produktu, aby mieć coś w koszyku
    cy.get(".products li a.add_to_cart_button")
      .first()
      .click({ force: true });

    // Czekamy chwilę, aby koszyk został zaktualizowany
    cy.wait(2000);
  });

  it("should load the checkout page", () => {
    // Klikamy przycisk koszyka w nagłówku
    cy.get("a.header-cart-button").click();

    // Weryfikujemy, czy URL zawiera fragment "/koszyk-prezentowy"
    cy.url().should("include", "/koszyk-prezentowy");

    // Czekamy, aby strona koszyka się załadowała
    cy.wait(2000);

    // Klikamy przycisk przejścia do kasy
    cy.get("a.checkout-button.button.alt.wc-forward")
      .should("be.visible")
      .click();
  });
});
