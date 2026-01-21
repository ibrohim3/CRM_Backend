const { Router } = require("express")
const groupStuff = Router()

const {
    createGroupStuff,
    getAllGroupStuff,
    getGroupStuff,
    updateGroupStaff,
    deleteGroupStaff
} = require("../controller/groupStuff.controller")
const { validate } = require("../middlewares/validate")
const { createGroupStuffValidation, updateGroupStuffValidation } = require("../validation/groupStuff.validation")
const { idParamValidationSchema } = require("../validation/common.validation.js")

/**
 * @swagger
 * tags:
 *   - name: GroupStuff
 *     description: Group Stuff management
 */

/**
 * @swagger
 * /group-staff:
 *   post:
 *     summary: Group stuff qo‘shish
 *     tags:
 *       - GroupStuff
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - group_id
 *               - stuff_id
 *             properties:
 *               group_id:
 *                 type: string
 *                 example: "65c1a9f0e3b4d9a123456789"
 *               stuff_id:
 *                 type: string
 *                 example: "65c1aa12e3b4d9a987654321"
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
groupStuff.post("/", validate(createGroupStuffValidation, "body"), createGroupStuff)

/**
 * @swagger
 * /group-staff:
 *   get:
 *     summary: Barcha malumotni olish
 *     tags:
 *       - GroupStuff
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Malumot topilmadi
 *       500:
 *         description: Server xatosi
 */
groupStuff.get("/", getAllGroupStuff)

/**
 * @swagger
 * /group-staff/{id}:
 *   get:
 *     summary: ID bn olish
 *     tags: 
 *       - GroupStuff
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID
 *     responses: 
 *       200: 
 *         description: Muvaffaqiyatli olindi
 *       404: 
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
groupStuff.get("/:id", validate(idParamValidationSchema, "params"), getGroupStuff)

/**
 * @swagger
 * /group-staff/{id}:
 *  patch:
 *    summary: Yangilash
 *    tags:
 *      - GroupStuff
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - group_id
 *              - stuff_id
 *            properties:
 *              group_id:
 *                type: string
 *              stuff_id:
 *                type: string
 *    responses:
 *     200:
 *       description: Yangilandi
 *     404: 
 *       description: Topilmadi
 *     500: 
 *       description: Server error              
 */
groupStuff.patch("/:id", validate(updateGroupStuffValidation, "body"), updateGroupStaff)

/**
 * @swagger
 * /group-staff/{id}:
 *   delete:
 *     summary: O'chirish
 *     tags: 
 *       - GroupStuff
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID
 *     responses:
 *      200:
 *        description: O'chirildi
 *      404:
 *        description: Topilmadi
 *      500: 
 *        description: Server xatosi
 */
groupStuff.delete("/:id", validate(idParamValidationSchema, "params"), deleteGroupStaff)
module.exports = { groupStuff }