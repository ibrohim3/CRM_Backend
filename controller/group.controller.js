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

// Get By Id
const getById = async (req, res) => {
    try {
        const groupId = req.params.id

        const group = await Group.findById(groupId)

        if (!group) {
            return res.status(404).json({
                success: false,
                message: "Bu ID bilan group topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Group topildi",
            data: group
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi", error
        })
    }
}

// Update Group
const updateGroup = async (req, res) => {
    try {
        const { id } = req.params
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
        const updateData = {
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
        }
        const updatedGroup = await Group.findByIdAndUpdate(
            id, updateData, { new: true }
        )

        if (!updatedGroup) {
            return res.status(404).json({
                success: false,
                message: "Group topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Group yangilandi",
            group: updatedGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Delete Group
const deleteGroup = async (req, res) => {
    try {
        const { id } = req.params
        const deletedGroup = await Group.findByIdAndDelete(id)

        if (!deletedGroup) {
            return res.status(404).json({
                success: false,
                message: "Group topilmadi"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Group muvaffaqiyatli o'chirildi",
            deletedGroup: deletedGroup
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi: ", error
        })
    }
}

// Search group
const searchGroup = async (req, res) => {
    try {
        const { query } = req.query

        if (!query || typeof query !== "string") {
            return res.status(400).json({
                success: false,
                message: "Qidiruv so'rovi noto'g'ri."
            });

        }
        const results = await Group.find({
            $or: [
                { group_name: { $regex: query, $options: "i" } }
            ]
        })

        return res.status(200).json({
            success: true,
            count: results.length,
            results
        });
    } catch (error) {
        console.error("Error searching group: ", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi"
        });
    }
}
module.exports = {
    postGroup,
    getAllGroups,
    getById,
    updateGroup,
    deleteGroup,
    searchGroup
}