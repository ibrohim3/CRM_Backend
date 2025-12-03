const { Lesson } = require("../model/lessonSchema")

// Post Lesson
const postLesson = async (req, res) => {
    try {
        const {
            lesson_theme,
            lesson_number,
            group_id,
            lesson_date
        } = req.body

        if (!lesson_number || !lesson_theme || !group_id || !lesson_date) {
            return res.status(400).json({
                succes: false,
                message: "Maydonlar to'ldirilmadi"
            })
        } else {
            const newLesson = new Lesson({
                lesson_theme,
                lesson_number,
                group_id,
                lesson_date,
            })
            await newLesson.save()
            return res.status(201).json({
                succes: true,
                message: "Lesson qo'shildi"
            })
        }
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: "Server xatosi"
        })
    }
}

// get all
const getAll = async (req, res) => {
    try {
        const lessons = await Lesson.find({})

        if (!lessons || lessons.length === 0) {
            return res.status(404).json({
                succes: false,
                message: "Hozircha lesson mavjud emas"
            })
        }
        return res.status(200).json({
            succes: true,
            message: "Barcha lessons olindi",
            count: lessons.length,
            data: lessons
        })
    } catch (error) {
        console.error("Get All Lessons error: ", error);
        return res.status(500).json({
            succes: false,
            message: "Server xatosi"
        })
    }
}
module.exports = {
    postLesson,
    getAll
}