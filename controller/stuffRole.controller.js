const { StuffRole } = require("../model/stuffRoleSchema")

// Post
const createStuffRole = async (req, res) => {
    try {
        const { stuff_id, role_id } = req.body

        if (!stuff_id || !role_id) {
            return res.status(400).json({
                success: false,
                message: "Maydonlar to'ldirilmadi"
            })
        }

        const exists = await StuffRole.findOne({ stuff_id, role_id })
        if (exists) {
            return res.status(409).json({
                success: false,
                message: "Role allaqachon biriktirilgan"
            })
        }

        const newStuffRole = await StuffRole.create({ stuff_id, role_id })

        return res.status(201).json({
            success: true,
            message: "New StuffRole yaratildi",
            data: newStuffRole
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
const getStuffRoles = async (req, res) => {
    try {
        const stuffRoles = await StuffRole
            .find()
            .populate("stuff_id")
            .populate("role_id")
        if (!stuffRoles) {
            return res.status(404).json({
                success: false,
                message: "Stuff role topilmadi."
            })
        }
        return res.status(200).json({
            success: true,
            count: stuffRoles.length,
            data: stuffRoles
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
const getStuffRole = async (req, res) => {
    try {
        const stuffRoleId = req.params.id
        const stuffRole = await StuffRole
            .findById(stuffRoleId)
            .populate("stuff_id")
            .populate("role_id")

        if (!stuffRole || stuffRole.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Stuff role topilmadi."
            })
        }
        return res.status(200).json({
            success: true,
            data: stuffRole
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server xatosi',
            error: error.message
        })
    }
}

// Update
const updateStuffRole = async (req, res) => {
    try {
        const { id } = req.params
        const {
            stuff_id,
            role_id
        } = req.body
        const updateData = {
            stuff_id,
            role_id
        }
        const updatedStuffRole = await StuffRole.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedStuffRole) {
            return res.status(404).json({
                success: false,
                message: "Stuff role topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "muvaffaqiyatli yangilandi",
            updated: updatedStuffRole
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
const deleteStuffRole = async (req, res) => {
    try {
        const { id } = req.params
        const removed = await StuffRole.findByIdAndDelete(id)
        if (!removed) {
            return res.status(404).json({
                success: false,
                message: "Stuff role topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Muvaffaqiyatli o'chirildi",
            removed: removed
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
    createStuffRole,
    getStuffRoles,
    getStuffRole,
    updateStuffRole,
    deleteStuffRole
}