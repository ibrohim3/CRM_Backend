const { Branch } = require("../model/branchSchema")

// Post
const createBranch = async (req, res) => {
    try {
        const {
            name,
            address,
            call_number
        } = req.body
        if (!name || !address || !call_number) {
            return res.status(400).json({
                success: false,
                message: "kerakli maydonlar to'ldirilmadi."
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

module.exports = {
    createBranch
}