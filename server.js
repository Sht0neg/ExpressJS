const express = require("express")
const router = require("./router")
const expressHbs = require("express-handlebars") 

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set("view engine", "hbs")
app.engine("hbs", expressHbs.engine({
    layoutsDir: "layouts",
    defaultLayout: "base.hbs"
}))

app.use((req, res, next) => {
    console.log(`${req.url}${req.method}`)
    console.log(req.ip)
    next()
})

app.use("/static/", express.static(__dirname + "/static"))

app.use(router)

app.listen(5000, () => console.log("http://127.0.0.1:5000"))