# tests-cozaprezent

**tests-cozaprezent** contains end-to-end tests for the WooCommerce shop [cozaprezent.pl](https://www.cozaprezent.pl) using Cypress. These tests verify the core functionality of the store, ensuring that key elements and user flows work correctly.

## ✨ Features Tested

✔ **Homepage**:
- The website loads successfully.
- The shop name and main elements (header, menu, products) are visible.

✔ **Navigation**:
- Menu items work correctly.
- Clicking on a menu link navigates to the correct page.

✔ **Search**:
- The search field is functional.
- Users can search for products, and results are displayed correctly.

✔ **Cart**:
- Products can be added to the cart.
- The cart page updates correctly.

✔ **Checkout**:
- The checkout process functions as expected.
- Users can proceed to payment.

## 🛠 Technologies

- **Cypress** – End-to-end testing framework for web applications.
- **JavaScript (ES6)** – Used for writing test scripts.

## 📁 Project Structure

```
tests-cozaprezent/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   ├── homepage.spec.js
│   │   ├── navigation.spec.js
│   │   ├── search.spec.js
│   │   ├── cart.spec.js
│   │   └── checkout.spec.js
│   ├── plugins/
│   └── support/
├── cypress.config.js
├── package.json
└── README.md
```

## 🚀 How to Run the Tests

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PrzemekJaworski/tests---cozaprezent.git
   ```

Navigate to the project folder:

```
cd tests---cozaprezent
```

Install dependencies:

```
npm install
```

Open Cypress Test Runner:

```
npm run cypress:open
```

Run the desired test suite from the Cypress interface.

## 👤 Author

Project created by Przemysław Jaworski.
For any questions or suggestions, please reach out!
