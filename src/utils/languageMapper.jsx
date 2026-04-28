export const mapLanguage = (lang) => {
  const mapping = {
    zho: "zh",       // Chinese
    eng: "en",       // English
    tam: "ta",       // Tamil
    hin: "hi"        // Hindi
  };

  return mapping[lang] || "en";
};
