const { Router } = require("express")
const stage = Router()

const {
    createStage,
    getStages,
    getStage,
    updateStage,
    deleteStage,
    searchStage
} = require("../controller/stage.controller")

stage.post("/register", createStage)

stage.get("/", getStages)

stage.get("/byId/:id", getStage)

stage.patch("/update/:id", updateStage)

stage.delete("/delete/:id", deleteStage)

stage.get("/search", searchStage)
module.exports = { stage }