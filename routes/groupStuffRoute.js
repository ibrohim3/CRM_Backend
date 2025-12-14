const { Router } = require("express")
const groupStuff = Router()

const {
    createGroupStuff,
    getAllGroupStuff,
    getGroupStuff,
    updateGroupStaff,
    deleteGroupStaff
} = require("../controller/groupStuff.controller")

groupStuff.post("/create", createGroupStuff)
groupStuff.get("/", getAllGroupStuff)
groupStuff.get("/getById/:id", getGroupStuff)
groupStuff.patch("/update/:id", updateGroupStaff)
groupStuff.delete("/delete/:id", deleteGroupStaff)
module.exports = { groupStuff }