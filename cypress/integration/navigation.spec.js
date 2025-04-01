describe("Navigation Test for cozaprezent.pl", () => {
  // Przed każdym testem odwiedzamy stronę główną sklepu
  beforeEach(() => {
    cy.visit("https://cozaprezent.pl/");
  });

  it("should navigate to category 'Kontakt'", () => {
    // Klikamy w link w menu nawigacyjnym (element o ID menu-item-1421) i sprawdzamy, czy przenosi do strony Kontakt
    cy.get("nav #menu-item-1421 > a").click();
    cy.url().should("include", "https://cozaprezent.pl/kontakt/");
  });

  it("should navigate to 'Kontakt' page", () => {
    // Powtórzenie testu, który weryfikuje przejście do strony Kontakt
    cy.get("nav #menu-item-1421 > a").click();
    cy.url().should("include", "https://cozaprezent.pl/kontakt/");
  });
});
