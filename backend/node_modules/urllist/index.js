const fetch = require("node-fetch")

const urlList = (urls) => {
  return Promise.all(urls.map(url => fetch(url))).then(responses =>
    Promise.all(responses.map(res => res.json()))
  ).then(texts => {
    return Promise.resolve(texts)
  }).catch(error => {
    return Promise.reject(error)
  })
}

module.exports = urlList