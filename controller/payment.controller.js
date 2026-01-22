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
        if (!student_id || !payment_last_date || !payment_date || !price || !is_paid || !total_attent) {
            return res.status(400).json({
                success: false,
                message: "Maydonlar to'ldirilmadi"
            })
        }
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
            newPayment
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
        const payments = await Payment.find().populate("student_id")
        if (!payments) {
            return res.status(404).json({
                success: false,
                message: "not found"
            })
        }
        return res.status(200).json({
            success: true,
            payments
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

        const payment = await Payment.findById(id).populate("student_id")

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "Payment topilmadi"
            });
        }

        return res.status(200).json({
            success: true,
            payment
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
        const {
            student_id,
            payment_last_date,
            payment_date,
            price,
            is_paid,
            total_attent
        } = req.body
        const updateData = {
            student_id,
            payment_last_date,
            payment_date,
            price,
            is_paid,
            total_attent
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
