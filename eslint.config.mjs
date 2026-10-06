import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Türkçe metinde kesme işareti (Antalya'da, Belek'te) doğal yazımdır; &apos; zorunluluğu gereksiz.
      "react/no-unescaped-entities": "off",
    },
  },
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts", "scripts/**", "lighthouse-reports/**"] },
];

export default config;
