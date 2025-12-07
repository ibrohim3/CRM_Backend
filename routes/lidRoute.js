const { Router } = require("express")
const lid = Router()

const {
    createLid,
    getAll,
    getByIdLid,
    updateLid,
    deleteLid
} = require("../controller/lid.controller")

lid.post("/register", createLid)

lid.get("/", getAll)

lid.get("/getById/:id", getByIdLid)

lid.patch("/update/:id", updateLid)

lid.delete("/delete/:id", deleteLid)
module.exports = { lid }
