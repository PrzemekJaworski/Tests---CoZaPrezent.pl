# tests-cozaprezent

**tests-cozaprezent** contains end-to-end tests for the WooCommerce shop [cozaprezent.pl](https://www.cozaprezent.pl) using Cypress. These tests ensure that the homepage loads correctly and displays key elements such as the header, menu, and product listings.

## ✨ Features Tested

- The homepage loads successfully.
- The header and main menu are visible.
- The product listing (or equivalent section) is displayed.
- (Optional) Additional elements like banners or sliders are visible.

## 🛠 Technologies

- **Cypress** – End-to-end testing framework for web applications.
- **JavaScript (ES6)** – For writing test scripts.

## 📁 Project Structure

```
tests-cozaprezent/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   ├── homepage.spec.js  // Test strony głównej
│   │   ├── navigation.spec.js // Test menu i nawigacji
│   │   ├── search.spec.js  // Test wyszukiwarki
│   │   ├── cart.spec.js  // Test koszyka
│   │   └── checkout.spec.js // Test procesu zakupu
│   ├── plugins/
│   └── support/
├── cypress.config.js
├── package.json
└── README.md
```

## 🚀 How to Run the Tests

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PrzemekJaworski/tests-cozaprezent.git
   ```

Navigate to the project folder:

```
cd tests-cozaprezent
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
