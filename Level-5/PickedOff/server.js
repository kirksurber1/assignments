const express = require("express")
const app = express()
const uuid = require("uuid").v4

app.use(express.json())



//routes





app.listen(9000, () {
    console.log("Running on port 9K")
})