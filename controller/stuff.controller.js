const { Stuff } = require("../model/stuffSchema")

// Post Stuff
const postRegister = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            phone_number,
            login,
            parol,
            is_active
        } = req.body

        if (!first_name || !phone_number) {
            return res.status(400).json({
                success: false,
                message: "Majburiy maydonlar to'ldirilmadi"
            })
        } else {
            const newStuff = new Stuff({
                first_name,
                last_name,
                phone_number,
                login,
                parol,
                is_active
            })
            await newStuff.save()
            return res.status(201).json({
                success: true,
                message: "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi "
        })
    }
}


module.exports = {
    postRegister
}