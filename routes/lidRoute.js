const { Router } = require("express")
const lid = Router()

const {
    createLid,
    getAll,
    getByIdLid,
    updateLid,
    deleteLid,
    searchLid
} = require("../controller/lid.controller")

lid.post("/register", createLid)

lid.get("/", getAll)

lid.get("/getById/:id", getByIdLid)

lid.patch("/update/:id", updateLid)

lid.delete("/delete/:id", deleteLid)

lid.get("/search", searchLid)
module.exports = { lid }
