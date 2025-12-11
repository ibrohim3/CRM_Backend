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
        } else {
            const newBrach = await Branch.create({
                name,
                address,
                call_number
            })
            return res.status(201).json({
                success: true,
                message: "Branch qo'shildi",
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
module.exports = {
    createBranch,
    getBranches,
    getBranch
}