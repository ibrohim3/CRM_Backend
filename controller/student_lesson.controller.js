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
        if (!lesson_id || !student_id || !is_there || !reason || !be_paid) {
            return res.status(400).json({
                success: false,
                message: "Maydonlar to'ldirilmadi"
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
                message: "Muvaffaqiyatli qo'shildi",
                newStLesson
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
        const studentLessons = await StudentLesson.find().populate("lesson_id").populate("student_id")
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
        const studentLesson = await StudentLesson.findById(studentLessonId).populate("lesson_id").populate("student_id")

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

// Update
const updateStLesson = async (req, res) => {
    try {
        const { id } = req.params;

        const allowedFields = [
            "lesson_id",
            "student_id",
            "is_there",
            "reason",
            "be_paid"
        ];

        const updateData = {};
        for (const key of allowedFields) {
            if (req.body[key] !== undefined) {
                updateData[key] = req.body[key];
            }
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Yangilanish uchun hech qanday ma’lumot kelmadi"
            });
        }

        const updatedStLesson = await StudentLesson.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedStLesson) {
            return res.status(404).json({
                success: false,
                message: "Student Lesson topilmadi"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Muvaffaqiyatli yangilandi",
            updated: updatedStLesson
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
};

// Delete
const deleteStLesson = async (req, res) => {
    try {
        const { id } = req.params
        const deletedStLesson = await StudentLesson.findByIdAndDelete(id)

        if (!deletedStLesson) {
            return res.status(404).json({
                succes: false,
                message: "Topilmadi"
            })
        }
        return res.status(200).json({
            succes: true,
            message: "O'chirildi",
            deleted: deletedStLesson
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
    stLessonCreate,
    getAllStudentLesson,
    getByIdStLesson,
    updateStLesson,
    deleteStLesson,
}