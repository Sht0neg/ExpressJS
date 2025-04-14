const express = require("express")

const router = express.Router()

router.get("/",(req, res) => {
    res.render("indexdz.hbs")
})

router.get("/catalog", (req, res) => {
    res.render("catalogdz.hbs")
})

router.get("/about", (req, res) =>{
    res.render("aboutdz.hbs")
})
router.get("/contacts", (req, res) =>{
    res.render("contactsdz.hbs")
})

module.exports = router