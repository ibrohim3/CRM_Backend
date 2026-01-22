const { StudentGroup } = require("../model/student_groupSchema")

// Post
const createGroup = async (req, res) => {
    try {
        const {
            student_id,
            group_id
        } = req.body
        if (!student_id || !group_id) {
            return res.status(400).json({
                success: false,
                message: "maydonlar to'ldirilmadi"
            })
        } else {
            const newStudentGroup = new StudentGroup({
                student_id,
                group_id
            })
            await newStudentGroup.save()
            return res.status(201).json({
                success: true,
                message: "Muvaffaqiyatli"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Get all
const getAll = async (req, res) => {
    try {
        const studentGroup = await StudentGroup.find({})

        if (!studentGroup || studentGroup.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Hozircha student group mavjud emas."
            })
        }
        return res.status(200).json({
            success: true,
            message: "xamma student group olindi",
            count: studentGroup.length,
            studentGroup: studentGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Get Id 
const getById = async (req, res) => {
    try {
        const studentGroupId = req.params.id

        const studentGroup = await StudentGroup.findById(studentGroupId)

        if (!studentGroup) {
            return res.status(404).json({
                success: false,
                message: "Student Group topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Student group topilid",
            data: studentGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi, ", error
        })
    }
}

// Update
const studentGroupUpdate = async (req, res) => {
    try {

        const { id } = req.params
        const {
            student_id,
            group_id
        } = req.body
        const updateData = {
            student_id,
            group_id
        }
        const updatedStudentGroup = await StudentGroup.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedStudentGroup) {
            return res.status(404).json({
                success: false,
                message: "Student Group topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "yangilandi",
            updated: updatedStudentGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi: ",
            error: error.message
        })
    }
}

// Delete
const studentGroupDelete = async (req, res) => {
    try {
        const { id } = req.params
        const deletedStudentGroup = await StudentGroup.findByIdAndDelete(id)

        if (!deletedStudentGroup) {
            return res.status(404).json({
                success: false,
                message: "Topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "O'chirildi",
            deleted: deletedStudentGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}
module.exports = {
    createGroup,
    getAll,
    getById,
    studentGroupUpdate,
    studentGroupDelete
}