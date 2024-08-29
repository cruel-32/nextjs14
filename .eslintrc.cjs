require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "next/core-web-vitals",
    "@rushstack/eslint-config/profile/web-app",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: [
    "react",
    "react-refresh",
    "jsx-a11y",
    "react-refresh",
    "no-relative-import-paths",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/no-unknown-property": "off",
    "react/prop-types": "off",
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "18.3.1",
    },
  },
};
