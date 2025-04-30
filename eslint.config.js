import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";
// import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";

export default tseslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: [js.configs.recommended],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    name: "tseslint-config",
    files: ["**/*.{ts,tsx}"],
    plugins: { tseslint },
    extends: [
      // Remove ...tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      // other options...
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    name: "react-config",
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      // Add the react-x and react-dom plugins
      "react-x": reactX,
      "react-dom": reactDom,
    },
    rules: {
      // other rules...
      // Enable its recommended typescript rules
      ...reactX.configs["recommended-typescript"].rules,
      ...reactDom.configs.recommended.rules,
    },

    // "import/resolver": {
    //   alias: {
    //     map: [
    //       ["~", "./src/"],
    //       ["~apis", "./src/apis/"],
    //       ["~components", "./src/components/"],
    //       ["~contexts", "./src/contexts/"],
    //       ["~hooks", "./src/hooks/"],
    //       ["~icons", "./src/icons/"],
    //       ["~pages", "./src/pages/"],
    //       ["~services", "./src/services/"],
    //       ["~utils", "./src/utils/"],
    //       ["~types", "./src/types/"],
    //       ["~public", "./public/"],
    //     ],

    //     extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", ".css"],
    //   },
    // },
  }
  // {
  //   name: "no-relative-import-paths",
  //   plugins: {
  //     "no-relative-import-paths": noRelativeImportPaths,
  //   },
  //   rules: {
  //     "no-relative-import-paths/no-relative-import-paths": "error",
  //   },
  // },
);
