const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid").v4

const bounties = [
    { firstName : "Darth", lastName: "Bane", living: false, bountyAmount : 0, type: "Sith", _id: uuid() },
    { firstName: "Darth", lastName: "Plagueis", living: false, bountyAmount : 0, Type: "Sith", _id: uuid() },
    { firstName: "Darth", lastName: "Sidious", living: true, bountyAmount : 1000000, Type: "Sith", _id: uuid() },
    { firstName: "Darth", lastName: "Maul", living: true, bountyAmount : 7500, Type: "Sith", _id: uuid() },
    { firstName: "Darth", lastName: "Tyranus", living: true, bountyAmount : 700, Type: "Sith", _id: uuid() },
    { firstName: "Darth", lastName: "Vader", living: true, bountyAmount : 20000, Type: "Sith", _id: uuid() },
    { firstName: "Asajj", lastName: "Ventress", living: true, bountyAmount : 1000, Type: "Sith", _id: uuid() },
    { firstName: "Quinlan", lastName: "Voss", living: true, bountyAmount : 5000, Type: "Sith", _id: uuid() }
]


bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(`Successfuly added ${newBounty.firstName} ${newBounty.lastName} to the bounties list!`)

    })

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.indexOf(bounty => bounty.id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Your Sith Lord has been removed from the system")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.find(bounty => bounty.id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})


module.exports = bountyRouter