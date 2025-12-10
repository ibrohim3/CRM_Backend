const { Router } = require('express');
const payment = Router()

const {
    createPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment
} = require("../controller/payment.controller")

payment.post("/register", createPayment)

payment.get("/", getPayments)

payment.get("/byId/:id", getPayment)

payment.patch("/update/:id", updatePayment)

payment.delete("/delete/:id", deletePayment)

module.exports = { payment }