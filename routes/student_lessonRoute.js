const { Router } = require("express")
const stLesson = Router()
const {
    stLessonCreate,
    getAllStudentLesson,
    getByIdStLesson,
    updateStLesson,
    deleteStLesson,
} = require("../controller/student_lesson.controller")
const { validate } = require("../middlewares/validate.js")
const { createStudentLessonValidation, updateStudentLessonValidation } = require("../validation/studentLesson.validation.js")
const { idParamValidationSchema } = require("../validation/common.validation.js")


/**
 * @swagger
 * tags:
 *  - name: Studentlesson
 *    description: Student lesson management
 */
/**
 * @swagger
 * /student-lesson:
 *  post:
 *    summary: student va lessonni ulash
 *    tags:
 *      - Studentlesson
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - student_id
 *              - lesson_id
 *            properties: 
 *              lesson_id:
 *                type: string
 *              student_id:
 *                type: string
 *              is_there:
 *                type: boolean
 *              reason:
 *                type: string
 *              be_paid:
 *                type: boolean
 *    responses:
 *      201:
 *        description: Ulandi
 *      400:
 *        description: maydon to'ldirilmadi
 *      500:
 *        description: Server xatosi
*/
stLesson.post("/", validate(createStudentLessonValidation, "body"), stLessonCreate)

/**
 * @swagger
 * /student-lesson:
 *   get:
 *     tags:
 *       - Studentlesson
 *     responses: 
 *       200: 
 *         description: Barcha Studentlesson royxati olindi
 *       404:
 *         description: Topilmadi
 *       500: 
 *         description: Server xatosi
 */
stLesson.get("/", getAllStudentLesson)

/**
 * @swagger
 * /student-lesson/{id}:
 *   get:
 *     summary: ID orqali olish
 *     tags:
 *       - Studentlesson
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: string
 *         description: StudentLesson ID si
 *     responses:
 *       200:
 *         description: Malumot olindi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server xatosi
 */
stLesson.get("/:id", validate(idParamValidationSchema, "params"), getByIdStLesson)

/**
 * @swagger
 * /student-lesson/{id}:
 *   patch:
 *     summary: StudentLesson yangilash
 *     tags: 
 *       - Studentlesson
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
 *               lesson_id:
 *                 type: string
 *               student_id:
 *                 type: string
 *               is_there:
 *                 type: boolean
 *               reason:
 *                 type: string
 *               be_paid:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: yangilandi
 *       404:
 *         description: topilmadi
 *       500:   
 *         description: Server xatosi
 */
stLesson.patch("/:id", validate(updateStudentLessonValidation, "body"), updateStLesson)

/**
 * @swagger
 * /student-lesson/{id}:
 *   delete:
 *     summary: Studentlesson o'chirish
 *     tags: 
 *       - Studentlesson
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
stLesson.delete("/:id", validate(idParamValidationSchema, "params"), deleteStLesson)


module.exports = { stLesson }