class CharTracker {
  constructor() {
    this.raw = '';
    this.data = [];
  }

  source(string) {
    this.raw = string;
    this.data = string.split(/\s+/);
  }

  find(query) {
    return this.data
      .filter(word => word.includes(query))
      .map(word => {
        return {
          word: word,
          count: this.data.filter(w => w === word).length
        };
      });
  }
}

const charTracker = new CharTracker();

const sourceInput = document.getElementById('source');
const queryInput = document.getElementById('query');
const searchButton = document.getElementById('search');
const result = document.getElementById('result');

searchButton.addEventListener('click', () => {
  charTracker.source(sourceInput.value);
  const findings = charTracker.find(queryInput.value);
  result.textContent = JSON.stringify(findings);
});
