

const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/e-comm")


const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String
})

const CreateinDB = async ()=>{
    const productModel = mongoose.model("products",productSchema)
    const data = new productModel({
        name:"bbb",
        email:"b@gmail.com",
        city:"bindore"
    })
    const result = await data.save()
    console.log(result)
}
// CreateinDB();



const updateinDB = async()=>{
    const productModel = mongoose.model("products", productSchema)

    const data = await productModel.updateOne(
        {name:"aaa"},
        {
            $set:{email:"cccc", name:"aaaa"}
        })
    console.log(data)
}
// updateinDB();


const deleteinDb = async ()=>{

    const productModel = mongoose.model("products",productSchema);
    const data = await productModel.deleteOne({name:"aaaa"});
    console.log(data)
}
// deleteinDb();




const ReadinDb = async()=>{

    const productModel = mongoose.model("products", productSchema)
    const data = await productModel.find()
    console.log(data)

}

ReadinDb() 





















// const mongoose = require('mongoose');

// const main = async ()=>{

//     await mongoose.connect("mongodb://localhost:27017/e-comm")

//     const productSchema = new mongoose.Schema({
//         name:String,
//         email:String
//     })

//     const productModel = mongoose.model("products", productSchema);

//     let data = new productModel({name:"aaa", email:"a@gmail.com"})

//     let result  = await data.save()

//     console.log(result)
// }

// main();