const { convert } = require('html-to-text');

//remove URLs, only keep alphabetic words, convert to lowercase
const processText = (DOMtext) => {
  let text = convert(DOMtext, {
    wordwrap: false
  });
  text = text.replace(/\[(.*?)\]/g, "") //arrays contain urls, replace with whitespace
  text = text.split(/[^a-zA-Z]+/); //create list with word elements

  let wordToCount = {}

  text.map(word => {
    word = word.toLowerCase()
    if (word.trim() !== "" && !(word.length === 1 && (word !== "a" && word !== "i"))) {
      if (wordToCount.hasOwnProperty(word)) {
        wordToCount[word] = wordToCount[word] + 1
      } else {
        wordToCount[word] = 1
      }
    }
  })

  const sortable = Object.fromEntries(
    Object.entries(wordToCount).sort(([, a], [, b]) => b - a)
  );
  return sortable
}

module.exports = {
  processText
}