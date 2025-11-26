const { Group } = require("../model/groupSchema")

// Post Group
const postGroup = async (req, res) => {
    try {
        const {
            group_name,
            lesson_start_time,
            lesson_continuous,
            lesson_week_day,
            group_stage_idint,
            room_number,
            room_floor,
            branch_id,
            lessons_quant,
            is_active
        } = req.body

        if (!group_name || !lesson_start_time) {
            return res.status(400).json({
                success: false,
                message: "Majburiy maydonlar to'ldirilmadi"
            })
        } else {
            const newGroup = new Group({
                group_name,
                lesson_start_time,
                lesson_continuous,
                lesson_week_day,
                group_stage_idint,
                room_number,
                room_floor,
                branch_id,
                lessons_quant,
                is_active
            })
            await newGroup.save()
            return res.status(201).json({
                success: true,
                message: "Group muvaffaqiyatli qo'shildi"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi ",
            error: error.message
        })
    }
}

// Get all groups
const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find().lean();

        if (!groups || groups.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Hozircha guruhlar mavjud emas"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Barcha guruhlar ro'yxati olindi",
            count: groups.length,
            data: groups
        });

    } catch (error) {
        console.error("getAllGroups error:", error);
        return res.status(500).json({
            success: false,
            message: "Serverda kutilmagan xatolik yuz berdi"
        });
    }
};

module.exports = {
    postGroup,
    getAllGroups
}