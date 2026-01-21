const { Router } = require("express")
const lidStatus = Router()

const {
    createLidStatus,
    getAllLidStatuses,
    getLidStatusById,
    updateLidStatus,
    deleteLidStatus
} = require("../controller/lidStatus.controller")
/**
 * @swagger
 * tags:
 *   - name: LidStatus
 *     description: Lid Status management
 */

/**
 * @swagger
 * /lid-status:
 *  post:
 *    summary: Lid Status
 *    tags: 
 *      - LidStatus
 *    description: Status 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: 
 *              - status
 *            properties:
 *              status:
 *                type: string
 *    responses: 
 *      201:
 *        description: Added
 *      500:
 *        description: Server xatosi
 */
lidStatus.post("/", createLidStatus)

/**
 * @swagger
 * /lid-status:
 *  get:
 *    summary: Status list
 *    tags:
 *      - LidStatus
 *    responses:
 *      200:
 *        description: Malumot olindi
 *      500:
 *        description: Server xatosi
 */
lidStatus.get("/", getAllLidStatuses)

/**
 * @swagger
 * /lid-status/{id}:
 *   get:
 *     summary: ID bilan olish
 *     tags:
 *       - LidStatus
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
lidStatus.get("/:id", getLidStatusById)

/**
 * @swagger
 * /lid-status/{id}:
 *  patch:
 *    summary: Status yangilash
 *    tags: 
 *      - LidStatus
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
 *            properties:
 *              status:
 *                type: string
 *    responses:
 *      200:
 *        description: Yangilandi
 *      404:
 *        description: Topilmadi
 *      500:
 *        description: Server xatosi
 */
lidStatus.patch("/:id", updateLidStatus)

/**
 * @swagger
 * /lid-status/{id}:
 *  delete:
 *    summary: Status o'chirish
 *    tags:
 *      - LidStatus
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: O'chiriladigan status ID si
 *    responses:
 *      200:
 *        description:  malumot o'chirildi.
 *      404: 
 *        description:  malumot topilmadi
 *      500:
 *        description: Server xatosi
 */
lidStatus.delete("/:id", deleteLidStatus)
module.exports = { lidStatus }   