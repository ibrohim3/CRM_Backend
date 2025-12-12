const Reason = require("../model/reasonSchema")

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


module.exports = {
    createReasonLid
}