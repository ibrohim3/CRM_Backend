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
module.exports = { lidStatus }   