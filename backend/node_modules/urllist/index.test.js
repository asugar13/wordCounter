const urlList = require("./index")

const urls = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

const badUrls = [
  'dfs://sdf-sdf-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

const url = 'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'

test('Expect response length to be equal to input length when successful', () => {
  return urlList(urls).then(data => {
    expect(data.length).toBe(urls.length);
  });
});

test('Expect TypeError if bad formatted urls are passed in array', async () => {
  expect.assertions(1);
  try {
    await urlList(badUrls);
  } catch (e) {
    expect(e).toBeInstanceOf(TypeError);
  }
});

test('Expect TypeError if a single string is passed', async () => {
  expect.assertions(1);
  try {
    await urlList(url);
  } catch (e) {
    expect(e).toBeInstanceOf(TypeError);
  }
})