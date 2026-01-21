const { Schema, model } = require("mongoose")

const stuffSchema = new Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    phone_number: { type: String, require: true },
    login: { type: String, require: true, unique: true },
    parol: { type: String, require: true },
    is_active: { type: Boolean, default: true }
})

const Stuff = model("Stuff", stuffSchema)
module.exports = { Stuff }