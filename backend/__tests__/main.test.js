const helpers = require("../helpers/main")
const fetch = require('node-fetch');

test('Expect empty object if bad input is received', () => {
  let numericString = "123"
  expect(helpers.processText(numericString)).toStrictEqual({})
});

test('Expect addition of values for all keys to be equal to number of words in input', async () => {
  let sentence = "Hello, my 1name is."
  let wordToCount = helpers.processText(sentence)
  let sumValues = Object.keys(wordToCount).reduce((sum, key) => sum + parseFloat(wordToCount[key] || 0), 0);
  expect(sumValues).toBe(4)
});

test('Expect an object with at least one key when loading text from a live URL DOM', async () => {
  expect.assertions(2);
  try {
    let response = await fetch("https://www.nytimes.com/international/");
    let DOMtext = await response.text();
    let processedText = helpers.processText(DOMtext)
    expect(processedText).toBeInstanceOf(Object)
    expect(Object.keys(processedText).length).toBeGreaterThan(0)
  } catch (e) {
    console.log(e)
  }
})