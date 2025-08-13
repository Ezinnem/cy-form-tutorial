const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // where your React app runs
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
