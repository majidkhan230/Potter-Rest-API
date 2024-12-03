const express = require("express")


const characterRoutes = express.Router();



characterRoutes.get("/",(req,res)=>{
    try {
        res.status(200).send("wlcome to  character routes")
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
})


module.exports = characterRoutes 