import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '1tkg6b',
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

