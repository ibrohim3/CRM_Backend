const { Reason } = require("../model/reasonSchema")

// POST
const createReasonLid = async (req, res) => {
    try {
        const { reason_lid } = req.body

        if (!reason_lid) {
            return res.status(400).json({
                success: false,
                message: "reason_lid majburiy"
            })
        }

        const newReasonLid = await Reason.create({ reason_lid })

        return res.status(201).json({
            success: true,
            message: "Reason qo'shildi",
            data: newReasonLid
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Get all
const getAllReasons = async (req, res) => {
    try {
        const reasons = await Reason.find({})
        if (!reasons) {
            return res.status(404).json({
                success: false,
                message: "Reason lid topilamdi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Topildi",
            count: reasons.length,
            data: reasons
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Get one 
const getOneReason = async (req, res) => {
    try {

        const { id } = req.params
        const reason = await Reason.findById(id)
        if (!reason || reason.length === 0) {
            return res.status(404).json({
                success: false,
                message: "reason topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Topildi",
            data: reason
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
const updateReason = async (req, res) => {
    try {
        const { id } = req.params
        const {
            reason_lid
        } = req.body
        const updateData = {
            reason_lid
        }
        const updatedReason = await Reason.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedReason) {
            return res.status(404).json({
                success: false,
                message: "Topilmadi",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Yangilandi",
            updated: updatedReason
        })
    } catch (error) {
        return res.status({
            success: false,
            message: "server xatosi",
            error: error.message
        })
    }
}

// Delete
const deleteReason = async (req, res) => {
    try {
        const { id } = req.params
        const removed = await Reason.findByIdAndDelete(id)
        if (!removed) {
            return res.status(404).json({
                success: false,
                message: "Topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "O'chirildi",
            removed: removed
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi"
        })
    }
}
module.exports = {
    createReasonLid,
    getAllReasons,
    getOneReason,
    updateReason,
    deleteReason
}