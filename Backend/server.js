require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

const port = process.env.PORT || 3000

connectToDB()
    .then(() => {
        app.listen(port, "0.0.0.0", () => {
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err)
        process.exit(1)
    })
