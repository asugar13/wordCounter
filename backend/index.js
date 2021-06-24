const express = require("express")

const app = express()
const http = require("http").Server(app)


app.use(express.json())

// Headers for bypassing CORS policy and allowing communications between domains
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

http.listen(process.env.PORT, function () {
  console.log({ message: `Backend listening on port ${process.env.PORT}` })
})

// ROUTERS
const mainRouter = require("./routes/main")

const start = async () => {
  try {

    app.use("/main", mainRouter)

  } catch (error) {
    console.log({ message: error.message, data: error })
  }
}

start()
