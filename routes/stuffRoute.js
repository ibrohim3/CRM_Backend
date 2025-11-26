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

// Stuff Regiter
stuff.post("/stuffRegister", postRegister)

// Get All Stuff
stuff.get("/getAllStuff", getAllStuff)

// Get By Id
stuff.get("/getById/:id", getById)

// Update Stuff
stuff.patch("/update/:id", updateStuff)

// Delete 
stuff.delete("/delete/:id", deleteStuff)

// Search
stuff.get("/search", searchStuff)

module.exports = { stuff }