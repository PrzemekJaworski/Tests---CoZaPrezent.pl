describe("Cart Test for cozaprezent.pl", () => {
  // Przed każdym testem odwiedzamy stronę główną sklepu
  beforeEach(() => {
    cy.visit("https://cozaprezent.pl/");
  });

  it("should add a product to the cart", () => {
    // Przewijamy stronę na dół, aby załadować produkty
    cy.scrollTo("bottom");

    // Znajdujemy pierwszy element z listy produktów, przewijamy go do widoku i klikamy w link produktu
    cy.get(".products")
      .first()
      .scrollIntoView()
      .find("a.woocommerce-loop-product__link")
      .click({ force: true });

    // Po wejściu na stronę produktu, klikamy przycisk "Dodaj do koszyka"
    cy.get("button.single_add_to_cart_button")
      .should("be.visible")
      .click();

    // Sprawdzamy, czy pojawiła się wiadomość potwierdzająca dodanie produktu do koszyka
    cy.get(".woocommerce-message")
      .should("contain.text", "został dodany do koszyka");
  });
});
