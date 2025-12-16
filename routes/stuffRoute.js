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
stuff.post("/stuffRegister", validate(createStuffValidation, "body"), postRegister)
// Get All Stuff
stuff.get("/getAllStuff", getAllStuff)
// Get By Id
stuff.get("/getById/:id", validate(idParamValidationSchema, "params"), getById)
// Update Stuff
stuff.patch("/update/:id", validate(updateStuffValidation, "body"), updateStuff)
// Delete 
stuff.delete("/delete/:id", validate(idParamValidationSchema, "params"), deleteStuff)
// Search
stuff.get("/search", validate(searchValidationSchema, "query"), searchStuff)

module.exports = { stuff }