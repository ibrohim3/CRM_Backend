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

// Get All Student Lesson
const getAllStudentLesson = async (req, res) => {
    try {
        const studentLessons = await StudentLesson.find({})
        if (!studentLessons || !studentLessons.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Student lesson topilmadi."
            })
        }
        return res.status(200).json({
            success: true,
            message: "Student lessons found",
            count: studentLessons.length,
            StudentLesson: studentLessons
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Get by id student lesson
const getByIdStLesson = async (req, res) => {
    try {
        const studentLessonId = req.params.id
        const studentLesson = await StudentLesson.findById(studentLessonId)

        if (!studentLesson) {
            return res.status(404).json({
                success: false,
                message: "Bu Id boyichi student lesson toilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Student Lesson topildi.",
            studentLesson: studentLesson,
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
    stLessonCreate,
    getAllStudentLesson,
    getByIdStLesson
}