const express = require("express")
const { connect } = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const { swaggerSpec, swaggerUi } = require("./swagger/Swagger")
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
    console.log(`Server shu portda ishga tushdi http://localhost:${PORT}`);
})

// Route 
const { stuff } = require("./routes/stuffRoute")
const { group } = require("./routes/groupRoute")
const { students } = require("./routes/studentsRoute")
const { lesson } = require("./routes/lessonRoute")
const { studentGroup } = require("./routes/student_groupRoute")
const { lid } = require("./routes/lidRoute")
const { stLesson } = require("./routes/student_lessonRoute")
const { payment } = require("./routes/paymentRoute")
const { stage } = require("./routes/stageRoute")
const { branch } = require("./routes/branchRoute")
const { reason } = require("./routes/reasonRoute")
const { role } = require("./routes/roleRoute")
const { stuffRole } = require("./routes/stuffRoleRoute")
const { groupStuff } = require("./routes/groupStuffRoute")
app.use("/stuff", stuff)
app.use("/group", group)
app.use("/students", students)
app.use("/lesson", lesson)
app.use("/student-group", studentGroup)
app.use("/lid", lid)
app.use("/student-lesson", stLesson)
app.use("/payment", payment)
app.use("/stage", stage)
app.use("/branch", branch)
app.use("/reason", reason)
app.use("/role", role)
app.use("/stuff-role", stuffRole)
app.use("/group-staff", groupStuff)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))