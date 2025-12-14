const { GroupStuff } = require("../model/groupStuffSchema")

// Post
const createGroupStuff = async (req, res) => {
    try {
        const {
            group_id,
            stuff_id
        } = req.body
        if (!group_id || !stuff_id) {
            return res.status(400).json({
                success: false,
                message: "Maydonlar to'ldirilmadi"
            })
        } else {
            const newGroupStuff = new GroupStuff({
                group_id,
                stuff_id
            })
            await newGroupStuff.save()
            return res.status(201).json({
                success: true,
                message: "new group staff qo'shildi",
                data: newGroupStuff
            })
        }
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Get all
const getAllGroupStuff = async (req, res) => {
    try {
        const groupStuffList = await GroupStuff.find({})
        if (!groupStuffList || groupStuffList.length === 0) {
            return res.status(404).json({
                succes: false,
                message: "group stuff topildi"
            })
        }
        return res.status(200).json({
            succes: true,
            count: groupStuffList.length,
            data: groupStuffList
        })
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: 'Server xatosi',
            error: error.message
        })
    }
}

// Get one
const getGroupStuff = async (req, res) => {
    try {
        const groupStuffId = req.params.id
        const groupStuff = await GroupStuff.findById(groupStuffId)
        if (!groupStuff) {
            return res.status(404).json({
                succes: false,
                message: "Group staff topilmadi"
            })
        }
        return res.status(200).json({
            succes: true,
            data: groupStuff
        })
    } catch (error) {
        return res.status(500).json({
            succes: false,
            error: error.message
        })
    }
}

// update
const updateGroupStaff = async (req, res) => {
    try {
        const { id } = req.params
        const {
            group_id,
            stuff_id
        } = req.body
        const updateData = {
            group_id,
            stuff_id
        }
        const updatedGroupStuff = await GroupStuff.findByIdAndUpdate(
            id, updateData, { new: true }
        )
        if (!updatedGroupStuff) {
            return res.status(404).json({
                succes: false,
                message: "Not found"
            })
        }
        return res.status(200).json({
            succes: true,
            updated: updatedGroupStuff
        })
    } catch (error) {
        return res.status(500).json({
            succes: false,
            error: error.message
        })
    }
}

// Delete 
const deleteGroupStaff = async (req, res) => {
    try {
        const { id } = req.params
        const removed = await GroupStuff.findByIdAndDelete(id)
        if (!removed) {
            return res.status(404).json({
                succes: false,
                message: "Not found"
            })
        }
        return res.status(200).json({
            succes: true,
            message: "removed",
            removed: removed
        })
    } catch (error) {
        return res.status(500).json({
            succes: false,
            error: error.message
        })
    }
}
module.exports = {
    createGroupStuff,
    getAllGroupStuff,
    getGroupStuff,
    updateGroupStaff,
    deleteGroupStaff
}