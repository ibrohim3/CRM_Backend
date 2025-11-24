const { Router } = require("express")
const stuff = Router()

const {
    postRegister
} = require("../controller/stuff.controller")

// Stuff Regiter
stuff.post("/stuffRegister", postRegister)

module.exports = { stuff }