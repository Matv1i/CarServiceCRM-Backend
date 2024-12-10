import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()

app.use(express.json())

const PORT = Number(process.env.port)

app.get("/", (req, res) => {
  res.send("This is home route")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
