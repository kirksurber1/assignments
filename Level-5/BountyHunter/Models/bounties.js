const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountiesSchema = new Schema ({
    firstName: String, 
    lastName: String, 
    living: Boolean,
    bountyAmount: Number,
    type: String
})

module.exports = mongoose.model("Bounties", bountiesSchema)
