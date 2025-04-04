const express = require("express")

const router = express.Router()

router.get("/",(req, res) => {
    res.sendFile(__dirname + "/templates/index.html")
})

router.get("/feedback/ok", (req, res) => {
    res.sendFile(__dirname + "/templates/feedback.html")
})

router.post("/feedback", (req, res) => {
    const {login, content} = req.body
    console.log(login, content)
    res.redirect("/feedback/ok")
})

module.exports = router