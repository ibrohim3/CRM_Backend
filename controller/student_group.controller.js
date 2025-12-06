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
                succes: false,
                message: "maydonlar to'ldirilmadi"
            })
        } else {
            const newStudentGroup = new StudentGroup({
                student_id,
                group_id
            })
            await newStudentGroup.save()
            return res.status(201).json({
                succes: true,
                message: "Muvaffaqiyatli"
            })
        }
    } catch (error) {
        return res.status(500).json({
            succes: false,
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
                succes: false,
                message: "Hozircha student group mavjud emas."
            })
        }
        return res.status(200).json({
            succes: true,
            message: "xamma student group olindi",
            count: studentGroup.length,
            studentGroup: studentGroup
        })
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}
module.exports = {
    createGroup,
    getAll
}