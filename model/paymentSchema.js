const { Schema, model } = require("mongoose")

const paymentSchema = new Schema({
    student_id: { type: Number, required: true },
    payment_last_date: { type: Date, required: true },
    payment_date: { type: Date, required: true },
    price: { type: Number, required: true },
    is_paid: { type: Boolean, required: true },
    total_attent: { type: Number, required: true }
})

const Payment = model("Payment", paymentSchema)
module.exports = { Payment }