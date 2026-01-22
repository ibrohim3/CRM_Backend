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

/**
 * @swagger
 * tags:
 *  - name: Payment
 *    description: Payment managment
 */
/**
 * @swagger
 * /payment:
 *   post:
 *     summary: Payment qo'shish
 *     tags:
 *       - Payment
 *     description: Payment qo'shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object 
 *             required:
 *               - student_id
 *               - payment_last_date
 *             properties:
 *               student_id:
 *                 type: string
 *               payment_last_date:
 *                 type: string
 *                 format: date
 *               payment_date: 
 *                 type: string
 *                 format: date
 *               price:
 *                 type: number
 *               is_paid:
 *                 type: boolean
 *               total_attent: 
 *                 type: number
 *     responses:
 *       201:
 *         description: Created success!
 *       400: 
 *         description: Maydonlar to'ldirilmadi yoki validatsiya xatosi
 *       500: 
 *         description: Server xatosi
 */
payment.post("/", validate(createPaymentValidation, "body"), createPayment)

/**
 * @swagger
 * /payment:
 *   get:
 *     summary: Payment malumotlarini olish
 *     tags:
 *       - Payment
 *     responses:
 *       200:
 *         description: Payment malumotlari olindi
 *       404:
 *         description: Payment malumotlari topilmadi
 *       500:
 *         description: Server xatosi
 */
payment.get("/", getPayments)

/**
 * @swagger
 * /payment/{id}:
 *   get:
 *     summary: Payment malumotini ID bn olish
 *     tags: 
 *       - Payment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Payment ID si
 *     responses:
 *       200: 
 *         description: Topildi
 *       404: 
 *         description: Payment malumotlari topilmadi
 *       500:
 *         description: Server xatosi
 */
payment.get("/:id", validate(idParamValidationSchema, "params"), getPayment)

/**
 * @swagger
 * /payment/{id}:
 *   patch:
 *     summary: Payment malumotini yangilash
 *     tags:
 *       - Payment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               is_paid:
 *                 type: boolean
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: not found
 *       500:
 *         description: Server xatosi
 */
payment.patch("/:id", validate(updatePaymentValidation, "body"), updatePayment)

/**
 * @swagger
 * /payment/{id}:
 *   delete:
 *     summary: Payment malumotini o'chirish
 *     tags:
 *       - Payment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID
 *     responses:
 *       200:
 *         description: O'chirildi
 *       404:
 *         description: Payment malumoti topilmadi
 *       500:
 *         description: Server xatosi
 */
payment.delete("/:id", validate(idParamValidationSchema, "params"), deletePayment)
module.exports = { payment }