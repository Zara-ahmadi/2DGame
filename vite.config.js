// vite.config.js is a configuration file used in projects built with Vite, which is a modern build tool for web development. Vite is designed to optimize the development experience by providing fast builds, hot module replacement (HMR), and a streamlined development server.
// The vite.config.js file allows developers to customize the behavior of Vite for their specific project requirements. Some common configurations that can be specified in this file include:
// Plugins: Vite supports various plugins for tasks like TypeScript support, CSS preprocessing, etc. These plugins can be configured in vite.config.js.
// Server Configuration: You can specify options for the development server, such as port number, proxy settings, etc.
// Build Configuration: Options for the production build, such as output directory, minification, etc., can be configured here.
// Aliases: Aliases for module imports, allowing you to specify custom paths for modules.
// Optimization: Settings related to code splitting, tree shaking, and other optimization techniques can be specified to improve the performance of the application.
// Environment Variables: Define environment-specific variables that can be accessed during the build process.
// Custom Rollup/Webpack Configuration: For more advanced use cases, you can provide custom Rollup or Webpack configurations to override Vite's default behavior.

import { defineConfig } from "vite";
export default defineConfig({
    base: "./",
    build: {
        minify: "terser",
    },
})
