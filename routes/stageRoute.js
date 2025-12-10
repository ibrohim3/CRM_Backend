const { Router } = require("express")
const stage = Router()

const {
    createStage,
    getStages,
    getStage,
    updateStage
} = require("../controller/stage.controller")

stage.post("/register", createStage)

stage.get("/", getStages)

stage.get("/byId/:id", getStage)

stage.patch("/update/:id", updateStage)
module.exports = { stage }