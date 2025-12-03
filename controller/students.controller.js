const { get } = require("mongoose");
const { Students } = require("../model/studentsSchema")

// Post 
const postStudent = async (req, res) => {
    try {
        const { lid_id, first_name, last_name, phone_number, birthday, gender } = req.body;

        if (lid_id == null || first_name == null || last_name == null || phone_number == null || birthday == null || gender == null) {
            return res.status(400).json({
                success: false,
                message: "Barcha maydonlar to'ldirilishi kerak",
            });
        } else {
            const newStudent = new Students({
                lid_id,
                first_name,
                last_name,
                phone_number,
                birthday,
                gender,
            });

            await newStudent.save();
            return res.status(201).json({
                success: true,
                message: "Student muvaffaqiyatli qo'shildi",
            });
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message,
        });
    }
};

// get all
const getAllStudents = async (req, res) => {
    try {

        const student = await Students.find({})

        if (!student || student.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Hozircha o'quvchilar mavjud emas"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Barcha o'quvchilar ro'yxati olindi",
            count: student.length,
            data: student
        })
    } catch (error) {
        console.error("Get All Students error:", error);
        return res.status(500).json({
            success: false,
            message: "Serverda kutilmagan xatolik yuz berdi"
        });
    }
}

// get by id
const getById = async (req, res) => {
    try {
        const studentId = req.params.id
        const student = await Students.findById(studentId)

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Bu ID bilan student topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Student topildi",
            data: student
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Update student by id
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const {
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday,
            gender,
        } = req.body
        const updateData = {
            lid_id,
            first_name,
            last_name,
            phone_number,
            birthday,
            gender,
        }
        const updatedStudent = await Students.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Muvaffaqiyatli yangilandi",
            student: updatedStudent
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })

    }
}

// Delete
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params
        const deletedStudent = await Students.findByIdAndDelete(id)

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Student muvaffaqiyatli o'chirildi",
            deleted: deletedStudent
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi"
        })
    }
}

// Search
const searchStudent = async (req, res) => {
    try {
        const { q } = req.query

        if (!q || typeof q !== "string") {
            return res.status(400).json({
                success: false,
                message: "Qidiruv so'rovi noto'g'ri."
            })
        }
        const results = await Students.find({
            $or: [
                { first_name: { $regex: q, $options: "i" } }
            ]
        })
        return res.status(200).json({
            success: true,
            count: results.length,
            results
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}
module.exports = {
    postStudent,
    getAllStudents,
    getById,
    updateStudent,
    deleteStudent,
    searchStudent
}