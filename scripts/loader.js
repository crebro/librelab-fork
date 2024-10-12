function loadMarkdownItem(key) {
  let contentItem = contentFiles[key];

  loadTextContent(`./content/${contentItem.file}`, async (content) => {
    document.getElementById("content").innerHTML = markdownit({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch (__) {}
        }

        return ""; // use external default escaping
      },
    }).render(content);

    applyImageEffect();
  });
}
