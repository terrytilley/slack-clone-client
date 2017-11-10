module.exports = {
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "react",
    "prettier",
  ],
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "rules": {
    "no-console": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "error",
      {
        "tabWidth": 2,
        "useTabs": false,
        "singleQuote": true,
        "bracketSpacing": true,
        "trailingComma": "es5",
      },
    ],
  },
};