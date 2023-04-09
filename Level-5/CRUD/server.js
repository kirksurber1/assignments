const express = require('express')
const app = express()
const morgan = require('morgan')


// Middleware 

app.use(express.json())
app.use(morgan('dev'))
//Routes

app.use("/inventory", require("./Routes/inventoryRouter.js"))


// Error 





app.listen(9000, () => {
    console.log("the App is running on server 9000")
})
