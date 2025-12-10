const { Payment } = require("../model/paymentSchema")

// CREATE
const createPayment = async (req, res) => {
    try {
        const {
            student_id,
            payment_last_date,
            payment_date,
            price,
            is_paid,
            total_attent
        } = req.body;

        const newPayment = await Payment.create({
            student_id,
            payment_last_date,
            payment_date,
            price,
            is_paid,
            total_attent
        });

        return res.status(201).json({
            success: true,
            message: "Payment qo'shildi",
            data: newPayment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
};

// GET ALL
const getPayments = async (req, res) => {
    try {
        const payments = await Payment.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: payments
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
};

// GET ONE
const getPayment = async (req, res) => {
    try {
        const { id } = req.params;

        const payment = await Payment.findById(id);

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "Payment topilmadi"
            });
        }

        return res.status(200).json({
            success: true,
            data: payment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
};

// UPDATE
const updatePayment = async (req, res) => {
    try {
        const { id } = req.params;

        const allowed = [
            "student_id",
            "payment_last_date",
            "payment_date",
            "price",
            "is_paid",
            "total_attent"
        ];

        const updateData = {};
        for (const key of allowed) {
            if (req.body[key] !== undefined) {
                updateData[key] = req.body[key];
            }
        }

        const updated = await Payment.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Payment topilmadi"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Yangilandi",
            data: updated
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
};

// DELETE
const deletePayment = async (req, res) => {
    try {
        const { id } = req.params;

        const removed = await Payment.findByIdAndDelete(id);

        if (!removed) {
            return res.status(404).json({
                success: false,
                message: "Payment topilmadi"
            });
        }

        return res.status(200).json({
            success: true,
            message: "O'chirildi",
            removed: removed
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        });
    }
};

module.exports = {
    createPayment,
    getPayments,
    getPayment,
    updatePayment,
    deletePayment
};
