const { Router } = require("express")
const studentGroup = Router()

const {
    createGroup,
    getAll,
    getById,
    studentGroupUpdate,
    studentGroupDelete
} = require("../controller/student_group.controller")
const { validate } = require("../middlewares/validate")
const { createStudentGroupValidation, updateStudentGroupValidation } = require("../validation/studentGroup.validation")
const { idParamValidationSchema } = require("../validation/common.validation.js")

/**
 * @swagger
 * tags:
 *  - name: StudentGroup
 *    description: Student group management
 */
/**
 * @swagger
 * /student-group:
 *  post:
 *    summary: student va groupni ulash
 *    tags:
 *      - StudentGroup
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - student_id
 *              - group_id
 *            properties: 
 *              student_id:
 *                type: string
 *              group_id:
 *                type: string
 *    responses:
 *      201:
 *        description: Ulandi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
*/
studentGroup.post("/", validate(createStudentGroupValidation, "body"), createGroup)

/**
 * @swagger
 * /student-group:
 *   get:
 *     tags:
 *       - StudentGroup
 *     responses: 
 *       200: 
 *         description: Barcha StudentGroup royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
studentGroup.get("/", getAll)

/**
 * @swagger
 * /student-group/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - StudentGroup
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: StudentGroup ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
studentGroup.get("/:id", validate(idParamValidationSchema, "params"), getById)

/**
 * @swagger
 * /student-group/{id}:
 *   patch:
 *     summary: StudentGroup yangilash
 *     tags: 
 *       - StudentGroup
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
 *               student_id:
 *                 type: string
 *               group_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
studentGroup.patch("/:id", validate(updateStudentGroupValidation, "body"), studentGroupUpdate)

/**
 * @swagger
 * /student-group/{id}:
 *   delete:
 *     summary: StudentGroup o'chirish
 *     tags: 
 *       - StudentGroup
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
studentGroup.delete("/:id", validate(idParamValidationSchema, "params"), studentGroupDelete)


module.exports = { studentGroup }