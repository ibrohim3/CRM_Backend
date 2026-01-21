const { Router } = require("express")
const stuff = Router()

const {
    postRegister,
    getAllStuff,
    getById,
    updateStuff,
    deleteStuff,
    searchStuff
} = require("../controller/stuff.controller")
const { validate } = require("../middlewares/validate")
const { createStuffValidation, updateStuffValidation } = require("../validation/stuff.validation")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")

// Stuff Regiter
stuff.post("/", validate(createStuffValidation, "body"), postRegister)
// Get All Stuff
stuff.get("/", getAllStuff)
// Get By Id
stuff.get("/:id", validate(idParamValidationSchema, "params"), getById)
// Update Stuff
stuff.patch("/:id", validate(updateStuffValidation, "body"), updateStuff)
// Delete 
stuff.delete("/:id", validate(idParamValidationSchema, "params"), deleteStuff)
// Search
// stuff.get("/search", validate(searchValidationSchema, "query"), searchStuff)

module.exports = { stuff }