import { useEffect } from "react";

export default function useFullPageTranslator(targetLang = "zh") {

  async function translateText(text) {
    try {
      const res = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "en",
          target: targetLang
        }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      return data.translatedText;
    } catch (error) {
      console.error("Translation failed:", error);
      return text;
    }
  }

  async function translateNode(node) {
    const originalText = node.nodeValue.trim();
    if (originalText.length < 2) return;

    const translated = await translateText(originalText);
    node.nodeValue = translated;
  }

  async function translateAllTextNodes() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;
    while ((node = walker.nextNode())) {
      await translateNode(node);
    }
  }

  useEffect(() => {

    // Initial translation
    translateAllTextNodes();

    // Continuous observer for new changes
    const observer = new MutationObserver(() => {
      translateAllTextNodes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => observer.disconnect();
  }, [targetLang]);
}
