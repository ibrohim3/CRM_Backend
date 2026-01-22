const { Router } = require("express")
const stuffRole = Router()
const {
    createStuffRole,
    getStuffRoles,
    getStuffRole,
    updateStuffRole,
    deleteStuffRole
} = require("../controller/stuffRole.controller")
const { validate } = require("../middlewares/validate")
const { createStuffRoleValidation, updateStuffRoleValidation } = require("../validation/stuffRole.validation")
const { idParamValidationSchema } = require("../validation/common.validation.js")



/**
 * @swagger
 * tags:
 *  - name: StuffRole
 *    description: StuffRole management
 */
/**
 * @swagger
 * /stuff-role:
 *  post:
 *    summary: StuffRole ulash
 *    tags:
 *      - StuffRole
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - stuff_id
 *              - role_id
 *            properties: 
 *              stuff_id:
 *                type: string
 *              role_id:
 *                type: string
 *    responses:
 *      201:
 *        description: Ulandi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
*/
stuffRole.post("/", validate(createStuffRoleValidation, "body"), createStuffRole)

/**
 * @swagger
 * /stuff-role:
 *   get:
 *     tags:
 *       - StuffRole
 *     responses: 
 *       200: 
 *         description: Barcha StuffRole royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
stuffRole.get("/", getStuffRoles)

/**
 * @swagger
 * /stuff-role/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - StuffRole
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: StuffRole ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
stuffRole.get("/:id", validate(idParamValidationSchema, "params"), getStuffRole)

/**
 * @swagger
 * /stuff-role/{id}:
 *   patch:
 *     summary: StuffRole yangilash
 *     tags: 
 *       - StuffRole
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
 *               stuff_id:
 *                 type: string
 *               role_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
stuffRole.patch("/:id", validate(updateStuffRoleValidation, "body"), updateStuffRole)

/**
 * @swagger
 * /stuff-role/{id}:
 *   delete:
 *     summary: StuffRole o'chirish
 *     tags: 
 *       - StuffRole
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
stuffRole.delete("/:id", validate(idParamValidationSchema, "params"), deleteStuffRole)


module.exports = { stuffRole }