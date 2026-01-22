const { Lid } = require("../model/lidSchema")

// Post
const createLid = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reson_id
        } = req.body
        if (!first_name || !phone_number || !lid_stage_id || !test_date || !trial_lesson_group_id || !lid_status_id || !cancel_reson_id) {
            return res.status(400).json({
                success: false,
                message: "Maydonlar to'ldirilmadi"
            })
        } else {
            const newLid = Lid({
                first_name,
                last_name,
                phone_number,
                lid_stage_id,
                test_date,
                trial_lesson_date,
                trial_lesson_time,
                trial_lesson_group_id,
                lid_status_id,
                cancel_reson_id
            })
            await newLid.save()
            return res.status(201).json({
                success: true,
                message: "new lid qo'shildi",
                newLid
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

// Get All
const getAll = async (req, res) => {
    try {
        const lid = await Lid.find().populate("lid_stage_id").populate("trial_lesson_group_id").populate("lid_status_id").populate("cancel_reson_id")
        if (!lid || lid.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Lid mavjud emas"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Barcha lid lar ro'yxati",
            count: lid.length,
            lids: lid
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Sever xatosi",
            error: error.message
        })
    }
}

// get by id
const getByIdLid = async (req, res) => {
    try {
        const lidId = req.params.id
        const lid = await Lid.findById(lidId).populate("lid_stage_id").populate("trial_lesson_group_id").populate("lid_status_id").populate("cancel_reson_id")

        if (!lid) {
            return res.status(404).json({
                success: false,
                message: "Bu Id bilan lid topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Lid topildi",
            lid: lid
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// update
const updateLid = async (req, res) => {
    try {
        const { id } = req.params
        const {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reson_id
        } = req.body
        const updateData = {
            first_name,
            last_name,
            phone_number,
            lid_stage_id,
            test_date,
            trial_lesson_date,
            trial_lesson_time,
            trial_lesson_group_id,
            lid_status_id,
            cancel_reson_id
        }
        const updatedLid = await Lid.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedLid) {
            return res.status(404).json({
                success: false,
                message: "Lid topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Lid yangilandi",
            updated: updatedLid
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi:",
            error: error.message
        })
    }
}

// Delete
const deleteLid = async (req, res) => {
    try {
        const lidId = req.params.id
        const deletedLid = await Lid.findByIdAndDelete(lidId)

        if (!deletedLid) {
            return res.status(404).json({
                success: false,
                message: "lid topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Lid muvaffaqiyatli o'chirildi.",
            deleted: deletedLid
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
    createLid,
    getAll,
    getByIdLid,
    updateLid,
    deleteLid,
}