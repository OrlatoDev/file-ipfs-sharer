import * as IPFS from "ipfs-core"

import dotenv from "dotenv"
dotenv.config()

import express from "express"
import formidable from "express-formidable"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use(formidable())

const ipfs = await IPFS.create()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/share", (req, res) => {
    const files = req.files
    console.log(files)

    res.send(JSON.stringify("ok"))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
