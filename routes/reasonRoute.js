const { Router } = require("express")
const reason = Router()

const {
    createReasonLid
} = require("../controller/reason.controller")

reason.post("/register", createReasonLid)
module.exports = { reason }