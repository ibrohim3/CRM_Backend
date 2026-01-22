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


/**
 * @swagger
 * tags:
 *  - name: Stuff
 *    description: Stuff management
 */
/**
 * @swagger
 * /stuff:
 *  post:
 *    summary: Stuff 
 *    tags:
 *      - Stuff
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - first_name
 *              - parol
 *            properties: 
 *              first_name:
 *                type: string
 *              last_name:
 *                type: string
 *              phone_number:
 *                type: string
 *              login:
 *                type: string
 *              parol:
 *                type: string
 *              is_active: 
 *                type: boolean
 *    responses:
 *      201:
 *        description: Ulandi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
*/
stuff.post("/", validate(createStuffValidation, "body"), postRegister)

/**
 * @swagger
 * /stuff:
 *   get:
 *     tags:
 *       - Stuff
 *     responses: 
 *       200: 
 *         description: Barcha Stuff royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
stuff.get("/", getAllStuff)

/**
 * @swagger
 * /stuff/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - Stuff
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: Stuff ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
stuff.get("/:id", validate(idParamValidationSchema, "params"), getById)

/**
 * @swagger
 * /stuff/{id}:
 *   patch:
 *     summary: Stuff yangilash
 *     tags: 
 *       - Stuff
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: ID
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               login:
 *                 type: string
 *               parol:
 *                 type: string
 *               is_active: 
 *                 type: boolean
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
stuff.patch("/:id", validate(updateStuffValidation, "body"), updateStuff)

/**
 * @swagger
 * /stuff/{id}:
 *   delete:
 *     summary: Stuff o'chirish
 *     tags: 
 *       - Stuff
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
 *         description: Topilmadi
 *       500:   
 *         description: Server xatosi
 */
stuff.delete("/:id", validate(idParamValidationSchema, "params"), deleteStuff)

module.exports = { stuff }