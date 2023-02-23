const { defineConfig } = require("cypress");

const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin


module.exports = defineConfig({
  //viewportWidth:320,
  //viewportHeight:480,
  //chromeWebSecurity:false,
  //tiempo de espeera en cargar la apgina
  //pageLoadTimeout : 9000,
  //tiempo de espera en encontrar elementos
  //testFiles:"**/*.feature",
  defaultCommandTimeout: 15000,
  e2e: {
    
    async setupNodeEvents(on,config) {

      const bundler = createBundler({
        plugins: [nodePolyfills(),createEsbuildPlugin(config)]
      });
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on,config);

      return config;
    },
    specPattern: ["**/*.feature", "cypress/e2e/*.cy.{js,jsx,ts,tsx}"],
    chromeWebSecurity:false
  },
  
});


