const languageButtons = document.querySelectorAll('[data-language]');

for (const button of languageButtons) {
  button.addEventListener('click', () => {
    const language = button.dataset.language;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-copy]').forEach((element) => {
      element.hidden = element.dataset.copy !== language;
    });
    languageButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  });
}
