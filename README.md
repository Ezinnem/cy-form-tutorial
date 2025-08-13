
# 📦 React App with Cypress Testing

This project is a React application bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and configured with Cypress for end-to-end testing.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## 🖥 Development

### Start the Development Server

```bash
npm start
```

* Runs the app in **development mode**
* Open [http://localhost:3000](http://localhost:3000) in your browser
* Hot reload is enabled, so changes will be reflected immediately

---

## 🧪 Testing

### Unit & Integration Tests (Jest)

```bash
npm test
```

* Runs tests in watch mode
* Uses **Jest** & **React Testing Library**

### End-to-End Tests (Cypress)

```bash
npx cypress open
```

* Opens Cypress Test Runner
* Tests are located in `cypress/e2e/`

💡 **Note**: If no `supportFile` is required, set this in `cypress.config.js`:

```js
export default {
  e2e: {
    supportFile: false,
  },
};
```

---

## 📚 Learn More

* [React Documentation](https://reactjs.org/)
* [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
* [Cypress Docs](https://on.cypress.io/)
