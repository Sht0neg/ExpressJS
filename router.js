const express = require("express")
const fs = require("fs")

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

router.get("/products", (req, res) => {
    let title = req.query.title
    
    const data = JSON.parse(fs.readFileSync("data.json"))
    console.log(data)

    if (title){
        const product = data.find((product) => product.title == title)
        if (product){
            res.json(product)
        }
        else{
            res.sendStatus(404)
        }
    }
    else{
        //res.json(data)
    }
})

module.exports = router