const express =require('express')


const bookRoutes = express.Router();


bookRoutes.get("/",(req,res)=>{
    try {
        res.status(200).send("welcome to book routes")
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
})

module.exports = bookRoutes