const express = require("express")
const { connect } = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middlewere
app.use(express.json())
app.use(cors())

// Database connection
async function connectToDb() {
    try {
        await connect(process.env.MONGO_URL)
        console.log("MongoDB ga ulandi");
    } catch (error) {
        console.error("MongoDB ga ulanishda xato yuz berdi: ", error.message);

    }
}
connectToDb()

// Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server ishga tushdi shu portda http://localhost:${PORT}`);
})

// Route 
const { stuff } = require("./routes/stuffRoute")
app.use("/api", stuff)