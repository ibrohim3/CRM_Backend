const { Schema, model } = require("mongoose")

const paymentSchema = new Schema({
    student_id: { type: Number, required: true },
    payment_last_date: { type: Date, required: true },
    payment_date: { type: Date, required: true },
    price: { type: Types.Decimal128, required: true },
    is_paid: { type: Boolean, required: true },
    total_attent: { type: Number, required: true }
})

const Payment = model("payment", paymentSchema)
module.exports = { Payment }