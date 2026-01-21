const { LidStatus } = require("../model/lidStatusSchema")

const createLidStatus = async (req, res) => {
    try {
        const { status } = req.body

        const lidStatus = await LidStatus.create({
            status
        })

        return res.status(201).json({
            success: true,
            message: "Lid status yaratildi",
            data: lidStatus
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

const getAllLidStatuses = async (req, res) => {
    try {
        const statuses = await LidStatus.find().sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            count: statuses.length,
            data: statuses
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

const getLidStatusById = async (req, res) => {
    try {
        const { id } = req.params

        const lidStatus = await LidStatus.findById(id)

        if (!lidStatus) {
            return res.status(404).json({
                success: false,
                message: "Lid status topilmadi"
            })
        }

        return res.status(200).json({
            success: true,
            data: lidStatus
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

const updateLidStatus = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body

        const updated = await LidStatus.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        )

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Lid status topilmadi"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Lid status yangilandi",
            data: updated
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

const deleteLidStatus = async (req, res) => {
    try {
        const { id } = req.params

        const deleted = await LidStatus.findByIdAndDelete(id)

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Lid status topilmadi"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Lid status o'chirildi",
            data: deleted
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
    createLidStatus,
    getAllLidStatuses,
    getLidStatusById,
    updateLidStatus,
    deleteLidStatus
}
