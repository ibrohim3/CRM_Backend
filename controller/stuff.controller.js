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

// Get All Stuff
const getAllStuff = async (req, res) => {
    try {
        const stuffList = await Stuff.find({})
        if (!stuffList.length) {
            return res.status(404).json({
                success: false,
                message: "Hozircha hech qanday stuff mavjud emas"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Barcha Stuff lar ro'yxati olindi",
            count: stuffList.length,
            innerData: stuffList
        })

    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi: Malumotlar olinmadi"
        })

    }
}

// Get By Id
const getById = async (req, res) => {
    try {
        const stuffId = req.params.id

        const stuff = await Stuff.findById(stuffId)

        if (!stuff) {
            return res.status(404).json({
                success: false,
                message: "Bu id bilan stuff topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Stuff topildi",
            stuff
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server xatosi: ', error,
        })
    }
}

// Update Stuff
const updateStuff = async (req, res) => {
    try {
        const { id } = req.params
        const {
            first_name,
            last_name,
            phone_number,
            parol } = req.body
        const updateData = {
            first_name,
            last_name,
            phone_number,
            parol
        }
        const updatedStuff = await Stuff.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        )

        if (!updatedStuff) {
            return res.status(404).json({
                success: false,
                message: "Stuff topilmadi"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Stuff muvaffaqiyatli yangilandi",
            stuff: updatedStuff
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}

// Delete Suff
const deleteStuff = async (req, res) => {
    try {
        const { id } = req.params
        const deletedStuff = await Stuff.findByIdAndDelete(id)

        if (!deletedStuff) {
            return res.status(404).json({
                success: false,
                message: "Stuff topilmadi"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Stuff muvaffaqiyatli o'chirildi",
            data: deletedStuff
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server xatosi",
            error: error.message
        })
    }
}
// Search Stuff by name or phone number (optional)
const searchStuff = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query || typeof query !== "string") {
            return res.status(400).json({
                success: false,
                message: "Qidiruv so'rovi noto'g'ri."
            });
        }

        const results = await Stuff.find({
            $or: [
                { first_name: { $regex: query, $options: "i" } },
                { last_name: { $regex: query, $options: "i" } }
            ]
        });

        return res.status(200).json({
            success: true,
            count: results.length,
            results
        });

    } catch (error) {
        console.error("Error searching stuff: ", error);
        return res.status(500).json({
            success: false,
            message: "Server xatosi"
        });
    }
};

module.exports = {
    postRegister,
    getAllStuff,
    getById,
    updateStuff,
    deleteStuff,
    searchStuff
}