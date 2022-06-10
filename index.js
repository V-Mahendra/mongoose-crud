
require("./config")
const productModel = require('./productModel')

const express = require('express')
const app = express()

app.use(express.json())


app.get("/list", async (req, resp) => {
    let data = await productModel.find()
    resp.send(data)
})


app.post("/create", async (req, resp) => {

    const data = new productModel(req.body)
    const result = await data.save()
    resp.send(result)
    console.log(result)
})




app.put("/update/:_id", async (req, resp) => {

    const data = await productModel.updateOne(
        req.params,
        { $set: req.body }
    )
    resp.send(data)
})



app.delete("/delete/:_id", async (req, resp) => {
    const data = await productModel.deleteOne(req.params)
    resp.send(data)
})






// search api by key using regex

app.get("/search/:key", async (req, resp) => {

    let data = await productModel.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "city": { $regex: req.params.key } },
                { "email": { $regex: req.params.key } }
            ]
        }
    )
    resp.send(data)
})




app.listen(4900)