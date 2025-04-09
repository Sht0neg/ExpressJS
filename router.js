const express = require("express")

const router = express.Router()

router.get("/",(req, res) => {
    res.render("index.hbs", {title: "Главное"})
})

router.get("/feedback/ok", (req, res) => {
    res.render("feedback.hbs")
})

router.get("/about", (req, res) =>{
    res.render("contacts.hbs")
})

router.post("/feedback", (req, res) => {
    const {login, content} = req.body
    console.log(login, content)
    res.redirect("/feedback/ok")
})

module.exports = router