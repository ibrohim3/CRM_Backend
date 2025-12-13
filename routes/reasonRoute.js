const { Router } = require("express")
const reason = Router()

const {
    createReasonLid,
    getAllReasons,
    getOneReason,
    updateReason,
    deleteReason
} = require("../controller/reason.controller")

reason.post("/register", createReasonLid)
reason.get("/", getAllReasons)
reason.get("/getById/:id", getOneReason)
reason.patch("/update/:id", updateReason)
reason.delete("/delete/:id", deleteReason)
module.exports = { reason }