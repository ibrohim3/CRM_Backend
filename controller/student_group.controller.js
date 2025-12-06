const { StudentGroup } = require("../model/student_groupSchema")

// Post
const createGroup = async (req, res) => {
    try {
        const {
            student_id,
            group_id
        } = req.boddy
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
            message: "Server xatosi"
        })
    }
}

module.exports = {
    createGroup
}