import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "out/**",
      "cory-fox-portfolio/**",
      "public/demos/**"
    ]
  },
  ...nextVitals,
  ...nextTypescript
];

export default config;
