const express = require('express')
const inventoryRouter = express.Router()
const uuid = require('uuid').v4
const Inventory = require('../Models/inventory.js')

const inventory = [ 
    { name: "Laptop", price: "1,299", _id: uuid()},
    { name: "1957 Corvette", price: "120,999", _id: uuid()},
    { name: "Power Adapter", price: "24.99", _id: uuid()},
    { name: "Cell Phone", price: "999", _id: uuid()}
]

inventoryRouter.use("/", express.json())


inventoryRouter.get("/", (req, res) => {
    res.send(inventory)
})

inventoryRouter.get("/:inventory", (req, res) => {
    const inventoryId = req.params.inventoryId
    const foundInventory = inventory.find(inventory => inventory._id === inventoryId)
    res.send(foundInventory)
})


inventoryRouter.post("/", (req, res) => {
    const newInventory = req.body
    newInventory._id = uuid()
    inventory.push(newInventory)    
    res.send("successfully added new Inventory")
})

inventoryRouter.delete("/:inventoryId", (req, res) => {
    const inventoryId = req.params.inventoryId
    const inventoryIndex = inventory.findIndex(inventoryItem => inventoryItem._id === inventoryId)
    inventory.splice(inventoryIndex, 1)
    res.send("Your item is deleted")
})

inventoryRouter.put("/:inventoryId", (req, res) => {
    const inventoryId = req.params.inventoryId
    const inventoryIndex = inventory.findIndex(inventoryItem => inventoryItem._id === inventoryId)
    const updatedInventory = Object.assign(inventory[inventoryIndex], req.body)
    res.send(updatedInventory)
})

module.exports =inventoryRouter