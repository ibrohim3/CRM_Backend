const { Router } = require("express")
const branch = Router()
const {
    createBranch,
    getBranches,
    getBranch,
    updateBranch,
    deleteBranch,
    searchBranch
} = require("../controller/branch.controller")
const {
    createBranchValidation,
    updateBranchValidation
} = require("../validation/branch.validation")
const {
    idParamValidationSchema,
    searchValidationSchema
} = require("../validation/common.validation.js")
const { validate } = require("../middlewares/validate.js")

/**
 * @swagger
 * tags: 
 *   - name: Branch
    *     description: Branch
 */
/**
 * @swagger
 * /branch:
 *  post:
 *    summary: Branch qoshish
 *    tags: 
 *      - Branch
 *    description: Branch qoshish
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
 *              address:
 *                type: string
 *              call_number:
 *                type: string
 *    responses:
 *      201:
 *        description: Muvaffqiyatli yaratildi
 *      400: 
 *        description: Bu nom bilan branch mavjud yoki validatsiya xatosi
 *      500: 
 *        description: Server xatosi 
 *           
 */
branch.post("/", validate(createBranchValidation), createBranch)

/**
 * @swagger
 * /branch:
 *   get:
 *     summary: Barcha branch malumotini olish
 *     tags:
 *       - Branch
 *     responses:
 *       200: 
 *         description: Muvaffaqiyatli olindi
 *       404: 
 *         description: Branch malumotlari topilmadi
 *       500: 
 *         description: Server xatosi
 */
branch.get("/", getBranches)

/**
 * @swagger
 * /branch/{id}:
 *  get:
 *    summary: Branchni ID si bn olish
 *    tags:
 *      - Branch
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: Branch ID si
 *    responses:
 *      200: 
 *        description: Branch malumoti olindi
 *      404: 
 *        description: Branch malumoti topilmadi
 *      500: 
 *        description: server xatosi
 */
branch.get("/:id", validate(idParamValidationSchema), getBranch)

branch.patch("/:id", validate(updateBranchValidation), updateBranch)

branch.delete("/:id", validate(idParamValidationSchema), deleteBranch)

// branch.get("/search", validate(searchValidationSchema), searchBranch)
module.exports = { branch }