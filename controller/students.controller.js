const { Students } = require("../model/studentsSchema")

// Post 
const postStudent = async (req, res) => {
    try {
        const { lid_id, first_name, last_name, phone_number, birthday, gender } = req.body;

        if (!lid_id || !first_name || !last_name || !phone_number || !birthday || !gender) {
            return res.status(400).json({
                success: false,
                message: "Majburiy maydonlar to'ldirilmadi",
            });
        }

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

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message,
        });
    }
};


module.exports = {
    postStudent
}