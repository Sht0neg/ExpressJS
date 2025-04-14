const express = require("express")
const router = require("./router")
const expressHbs = require("express-handlebars") 

const app = express()
app.set("view engine", "hbs")
app.engine("hbs", expressHbs.engine({
    layoutsDir: `${__dirname}/layouts`,
    defaultLayout: "basedz.hbs",

}))

app.use("/static/", express.static(__dirname + "/static"))
app.set("views", __dirname + "/views");

app.use(router)

app.listen(5000, () => console.log("http://127.0.0.1:5000"))