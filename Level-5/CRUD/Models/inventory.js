const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: String,
    price: String,
    desc: String
})

module.exports = mongoose.model ("Inventory", inventorySchema)