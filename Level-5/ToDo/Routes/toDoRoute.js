const express = require("express")
const toDoRoute = express.Router()
const uuid = require("uuid").v4

const todos = [ 
    { name: "Play Basketball", description: "Hoop it up!!!", imageUrl: "", completed: false, _id: uuid()},
    { name: "groceries", description: "Milk, eggs, bacon", imageUrl: "", completed: false, _id: uuid()},
    { name: "Gift", description: "Anniversary?", imageUrl: "", completed: false, _id: uuid()},
    { name: "Change Oil", description: "get oil change at dealership", imageUrl: "", completed: false, _id: uuid()}
]


toDoRoute.route("/")
    .get((req, res) => {
        res.send(todos)
    })

toDoRoute.post("/", (req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send("Added new item to your list")
    })

toDoRoute.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updateTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodo)
})

toDoRoute.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Your todo is Done")

})

toDoRoute.get("/search/id", (req, res) => {
    const id = req.query._id
    const filterId = todos.filter(todo => todo._id === id)
    res.send(filterId)
})



module.exports = toDoRoute