const { Router } = require("express")
const role = Router()
const {
    postRole,
    getRoles,
    getOneRole,
    updateRole,
    deleteRole,
    searchRole
} = require("../controller/role.controller")
const { validate } = require("../middlewares/validate")
const { createRoleValidation, updateRoleValidation } = require("../validation/role.validation")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")


/**
 * @swagger
 * tags:
 *  - name: Role
 *    description: Role management
 */
/**
 * @swagger
 * /role:
 *  post:
 *    summary: role qo'shish
 *    tags:
 *      - Role
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *            properties: 
 *              name:
 *                type: string
 *    responses:
 *      201:
 *        description: Qo'shildi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
*/
role.post("/", validate(createRoleValidation, "body"), postRole)

/**
 * @swagger
 * /role:
 *   get:
 *     tags:
 *       - Role
 *     responses: 
 *       200: 
 *         description: Barcha role royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
role.get("/", getRoles)

/**
 * @swagger
 * /role/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - Role
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: role ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
role.get("/:id", validate(idParamValidationSchema, "params"), getOneRole)

/**
 * @swagger
 * /role/{id}:
 *   patch:
 *     summary: role yangilash
 *     tags: 
 *       - Role
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
role.patch("/:id", validate(updateRoleValidation, "body"), updateRole)

/**
 * @swagger
 * /role/{id}:
 *   delete:
 *     summary: role o'chirish
 *     tags: 
 *       - Role
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
role.delete("/:id", validate(idParamValidationSchema, "params"), deleteRole)
module.exports = { role }