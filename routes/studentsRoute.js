const { Router } = require("express")
const students = Router()
const {
    postStudent,
    getAllStudents,
    getById,
    updateStudent,
    deleteStudent,
    searchStudent
} = require("../controller/students.controller")
const { validate } = require("../middlewares/validate")
const { createStudentsValidate, updateStudentsValidate } = require("../validation/students.validate")
const { searchValidationSchema, idParamValidationSchema } = require("../validation/common.validation.js")

/**
 * @swagger
 * tags:
 *  - name: Student
 *    description: Student management
 */
/**
 * @swagger
 * /students:
 *  post:
 *    summary: student 
 *    tags:
 *      - Student
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - lid_id
 *              - first_name
 *            properties: 
 *              lid_id:
 *                type: string
 *              first_name:
 *                type: string
 *              last_name:
 *                type: string
 *              phone_number:
 *                type: string
 *              birthday:
 *                type: string
 *              gender: 
 *                type: string
 *    responses:
 *      201:
 *        description: Ulandi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
*/
students.post("/", validate(createStudentsValidate, "body"), postStudent)

/**
 * @swagger
 * /students:
 *   get:
 *     tags:
 *       - Student
 *     responses: 
 *       200: 
 *         description: Barcha Student royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
students.get("/", getAllStudents)

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - Student
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: Student ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
students.get("/:id", validate(idParamValidationSchema, "params"), getById)

/**
 * @swagger
 * /students/{id}:
 *   patch:
 *     summary: Student yangilash
 *     tags: 
 *       - Student
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
 *               lid_id:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone_number:
 *                 type: string
 *               birthday:
 *                 type: string
 *               gender: 
 *                 type: string
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
students.patch("/:id", validate(updateStudentsValidate, "body"), updateStudent)

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Student o'chirish
 *     tags: 
 *       - Student
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
students.delete("/:id", validate(idParamValidationSchema, "params"), deleteStudent)

module.exports = { students }