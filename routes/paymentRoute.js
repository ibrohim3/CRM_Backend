const { Router } = require('express');
const payment = Router()
const {
    createPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment
} = require("../controller/payment.controller")
const { validate } = require("../middlewares/validate")
const { createPaymentValidation, updatePaymentValidation } = require("../validation/payment.validation")
const { idParamValidationSchema } = require("../validation/common.validation.js")

payment.post("/", validate(createPaymentValidation, "body"), createPayment)
payment.get("/", getPayments)
payment.get("/:id", validate(idParamValidationSchema, "params"), getPayment)
payment.patch("/:id", validate(updatePaymentValidation, "body"), updatePayment)
payment.delete("/:id", validate(idParamValidationSchema, "params"), deletePayment)
module.exports = { payment }