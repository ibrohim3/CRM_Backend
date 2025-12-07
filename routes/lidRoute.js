const { Router } = require("express")
const lid = Router()

const {
    createLid,
    getAll,
    getById
} = require("../controller/lid.controller")

lid.post("/register", createLid)

lid.get("/", getAll)

lid.get("/getById", getById)
module.exports = { lid }