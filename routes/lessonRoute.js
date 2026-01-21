const { Router } = require("express")
const lesson = Router()
const {
    postLesson,
    getAll,
    getById,
    updateLesson,
    deleteLesson,
    searchLesson
} = require("../controller/lesson.controller")
const { validate } = require("../middlewares/validate")
const { createLessonValidation, updateLessonValidation } = require("../validation/lesson.validation")
const { idParamValidationSchema, searchValidationSchema } = require("../validation/common.validation.js")


/**
 * @swagger
 * tags:
 *   - name: Lesson
 *     description: Lesson management
 */
/**
 * @swagger
 * /lesson:
 *   post:
 *     summary: Lesson qo'shish
 *     tags:
 *       - Lesson
 *     description: Lesson qo'shish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lesson_number
 *               - group_id
 *             properties:
 *               lesson_theme:
 *                 type: string
 *               lesson_number:
 *                 type: number
 *               group_id:
 *                 type: string
 *               lesson_date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created successfuly
 *       400:
 *         description: Majburiy maydonlar to'ldirilmadi yoki validatsiya xatosi
 *       500:
 *         description: Server xatosi
 */
lesson.post("/", validate(createLessonValidation, "body"), postLesson)

/**
 * @swagger
 * /lesson:
 *   get:
 *     summary: Barcha lessons ni olish
 *     tags:
 *       - Lesson
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server xatosi
 */
lesson.get("/", getAll)

/**
 * @swagger
 * /lesson/{id}:
 *  get: 
 *    summary: ID bn olish
 *    tags:
 *      - Lesson
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: ID kirit
 *    responses:
 *      200:
 *        description: Success olindi
 *      404:
 *        description: Not Found
 *      500: 
 *        description: Server xatosi
 */
lesson.get("/:id", validate(idParamValidationSchema, "params"), getById)

/**
 * @swagger
 * /lesson/{id}:
 *  patch:
 *    summary: Lesson malumotini yangilash
 *    tags: 
 *      - Lesson
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:  
 *          type: string
 *        description: Lesson ID si
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              lesson_theme:
 *                type: string
 *              lesson_number:
 *                type: number
 *              group_id:
 *                type: string
 *              lesson_date:
 *                type: string
 *    responses:
 *      200:
 *        description: Yangilandi
 *      404:
 *        description: Topilmadi
 *      500: 
 *        description: Server xatosi
 */
lesson.patch("/:id", validate(idParamValidationSchema, "params"), validate(updateLessonValidation, "body"), updateLesson)

/**
 * @swagger
 * /lesson/{id}:
 *   delete:
 *     summary: O'chirish
 *     tags: 
 *       - Lesson
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
lesson.delete("/:id", validate(idParamValidationSchema, "params"), deleteLesson)

// lesson.get("/", validate(searchValidationSchema, "query"), searchLesson)
module.exports = { lesson }