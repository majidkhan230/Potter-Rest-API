const express = require("express");
const { default: bookRoutes } = require("./routes/bookRoutes");
const dotenv =require('dotenv').config()



const app = express();



app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).send({message:"welcome to backend"})
})


app.use("/book",bookRoutes)



const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is sucessfully started at ${PORT}`)
})