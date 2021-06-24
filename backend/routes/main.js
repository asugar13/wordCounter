const express = require("express")
const fetch = require('node-fetch');
const router = express.Router()
const helpers = require("../helpers/main")

router.post("/word-count", async (req, res, next) => {
  try {
    const url = req.body.request
    const otherParam = {
      method: "GET"
    };
    let response = await fetch(url, otherParam);
    let DOMtext = await response.text();

    let sortedKeyValues = helpers.processText(DOMtext)

    return res.json(sortedKeyValues)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Error!" })
  }
})


module.exports = router
