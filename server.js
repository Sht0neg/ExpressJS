const express = require("express")
const router = require("./router")

const app = express()

app.use((req, res, next) => {
    console.log(`${req.url}${req.method}`)
    console.log(req.ip)
    next()
})

app.use("/static/", express.static(__dirname + "/static"))

app.use(router)

app.listen(5000, () => console.log("http://127.0.0.1:5000"))