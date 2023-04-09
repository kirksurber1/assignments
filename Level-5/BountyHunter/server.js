const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')


// Middleware

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/bountiesdb', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("Connected to the DB")
)

//Routes
app.use("/bounties", require("./Routes/bountyRouter.js"))


app.listen(9000, ()=> {
    console.log("The server is running on port 9000")
})



