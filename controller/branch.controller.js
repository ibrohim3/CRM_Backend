const { Branch } = require("../model/branchSchema")

// Post
const createBranch = async (req, res) => {
    try {
        const {
            name,
            address,
            call_number
        } = req.body
        const existingBranch = await Branch.findOne({ name })
        if (existingBranch) {
            return res.status(400).json({
                success: false,
                message: "Bu nom bilan branch mavjud."
            })
        }
        const newBranch = await Branch.create({
            name,
            address,
            call_number
        })
        return res.status(201).json({
            success: true,
            message: "Branch qo'shildi",
            newBranch
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Get All
const getBranches = async (req, res) => {
    try {
        const branches = await Branch.find({})
        if (!branches || branches.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Branch topilamdi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Branches topildi",
            count: branches.length,
            data: branches
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Srver xatosi",
            error: error.message
        })
    }

}

// Get one
const getBranch = async (req, res) => {
    try {
        const { id } = req.params
        const branch = await Branch.findById(id)

        if (!branch) {
            return res.status(404).json({
                success: false,
                message: "Branch topilmadi."
            })
        }
        return res.status(200).json({
            success: true,
            message: "Branch topildi",
            data: branch
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
const updateBranch = async (req, res) => {
    try {
        const { id } = req.params
        const {
            name,
            call_number
        } = req.body
        const updateData = {
            name,
            call_number
        }
        const updatedBranch = await Branch.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedBranch) {
            return res.status(404).json({
                success: false,
                message: "Branch topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Branch yangilandi",
            updated: updatedBranch
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
const deleteBranch = async (req, res) => {
    try {
        const { id } = req.params
        const removed = await Branch.findByIdAndDelete(id)
        if (!removed) {
            return res.status(404).json({
                success: false,
                message: "Branch topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Branch o'chirildi",
            removed: removed
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi:",
            error: error.message
        })
    }
}

// Search
const searchBranch = async (req, res) => {
    try {
        const { q } = req.query
        if (!q || typeof q !== "string") {
            return res.status(400).json({
                success: false,
                message: "Qidiruv so'rovi noto'g'ri"
            })
        }
        const results = await Branch.find({
            $or: [
                { name: { $regex: q, $options: "i" } }
            ]
        })
        return res.status(200).json({
            success: true,
            count: results.length,
            results
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
    createBranch,
    getBranches,
    getBranch,
    updateBranch,
    deleteBranch,
    searchBranch
}