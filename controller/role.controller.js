const { Role } = require("../model/roleSchema")

// Post
const postRole = async (req, res) => {
    try {
        const {
            name
        } = req.body
        const existingRole = await Role.findOne({ name })
        if (existingRole) {
            return res.status(400).json({
                success: false,
                message: "Role allaqachon mavjud"
            })
        } else {
            const newRole = new Role({
                name
            })
            await newRole.save()
            return res.status(201).json({
                success: true,
                message: "Role muvaffaqiyatli qo'shildi",
                data: newRole
            })
        }
    } catch (error) {
        console.error("Xato:", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// get all
const getRoles = async (req, res) => {
    try {
        const roles = await Role.find({})
        if (!roles || roles.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Role topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            count: roles.length,
            roles: roles
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
const getOneRole = async (req, res) => {
    try {
        const { id } = req.params
        const role = await Role.findById(id)
        if (!role) {
            return res.status(404).json({
                success: false,
                message: "Role topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            found: role
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
const updateRole = async (req, res) => {
    try {
        const { id } = req.params
        const {
            name
        } = req.body
        const updateData = {
            name
        }
        const updatedRole = await Role.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedRole) {
            return res.status(404).json({
                success: false,
                message: "Role topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Role yangilandi",
            updated: updatedRole
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// delete
const deleteRole = async (req, res) => {
    try {
        const { id } = req.params
        const removed = await Role.findByIdAndDelete(id)
        if (!removed) {
            return res.status(404).json({
                success: false,
                message: "Role topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Role muvaffaqiyatli o'chirildi",
            removed: removed
        })
    } catch (error) {
        console.error("Role o'chirishda xato yuzaga keldi: ", error);
        return res.status(500).json({
            success: false,
            message: "Srver xatosi",
            error: error.message
        })
    }
}

module.exports = {
    postRole,
    getRoles,
    getOneRole,
    updateRole,
    deleteRole,
}