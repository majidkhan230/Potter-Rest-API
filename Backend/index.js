const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const characterRoutes = require("./routes/characterRoutes");
const housesRoutes = require("./routes/housesRoutes");
const spellRoutes = require("./routes/spellRoutes");
const dotenv =require('dotenv').config()



const app = express();



app.use(express.json())


app.get("/en",(req,res)=>{
    res.status(200).send({message:"welcome to backend"})
})


app.use("/en/books",bookRoutes)
app.use("/en/characters",characterRoutes)
app.use("/en/houses",housesRoutes)
app.use("/en/spells",spellRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is sucessfully started at ${PORT}`)
})