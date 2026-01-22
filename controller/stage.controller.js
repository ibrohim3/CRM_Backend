const { Stage } = require("../model/stageSchema")
// Post
const createStage = async (req, res) => {
    try {
        const {
            name
        } = req.body
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Maydonlar to'ldirilmadi"
            })
        }
        const newStage = await Stage.create({ name })
        return res.status(201).json({
            success: true,
            message: "Stage qo'shildi",
            newStage
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
const getStages = async (req, res) => {
    try {
        const stages = await Stage.find({})
        if (!stages || stages.length === 0) {
            return res.stages(404).json({
                success: false,
                message: "Stage topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            count: stages.length,
            data: stages
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
}

// Get by id
const getStage = async (req, res) => {
    try {
        const { id } = req.params
        const stage = await Stage.findById(id)

        if (!stage) {
            return res.status(404).json({
                success: false,
                message: "Stage topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Stage topildi",
            result: stage
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
const updateStage = async (req, res) => {
    try {
        const { id } = req.params
        const {
            name
        } = req.body
        const updateData = {
            name
        }
        const updatedStage = await Stage.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedStage) {
            return res.status(404).json({
                success: false,
                message: "Stage topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Stage yangilandi",
            updated: updatedStage
        })
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Delete
const deleteStage = async (req, res) => {
    try {
        const { id } = req.params
        const removed = await Stage.findByIdAndDelete(id)

        if (!removed) {
            return res.status(404).json({
                success: false,
                message: "Stage topilmadi"
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
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Search
const searchStage = async (req, res) => {
    try {
        const { q } = req.query
        if (!q || typeof q !== "string") {
            return res.status(400).json({
                success: false,
                message: "Qidiruv so'rovi noto'g'ri"
            })
        }
        const results = await Stage.find({
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
    createStage,
    getStages,
    getStage,
    updateStage,
    deleteStage,
    searchStage
}