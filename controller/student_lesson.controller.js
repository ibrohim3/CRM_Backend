const { StudentLesson } = require("../model/student_lessonSchema")

// post 
const stLessonCreate = async (req, res) => {
    try {
        const {
            lesson_id,
            student_id,
            is_there,
            reason,
            be_paid
        } = req.body
        if (!lesson_id || !student_id) {
            return res.status(400).json({
                success: false,
                message: "maydonlar to'ldirilmadi"
            })
        } else {
            const newStLesson = new StudentLesson({
                lesson_id,
                student_id,
                is_there,
                reason,
                be_paid
            })
            await newStLesson.save()
            return res.status(201).json({
                success: true,
                message: "Muvaffaqiyatli qo'shildi"
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

module.exports = { stLessonCreate }