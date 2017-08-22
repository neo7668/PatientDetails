var DefaultBuilder = require("truffle-default-builder");

module.exports = {
  build: new DefaultBuilder({
    "index.html": "index.html",
    "app.js": [
      "vendor/angular/angular.js",
      "vendor/angular-route/angular-route.js",
      "javascript/app.js",
      "javascript/controllers/login.js",
      "javascript/controllers/main.js",
      "javascript/controllers/addPatient.js",
      "javascript/controllers/showDetails.js",
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/",
    "views/": "views/"
  }),

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // match any network
      gas: 3137000
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network
    }
  }
};
