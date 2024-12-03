const express = require("express")


const housesRoutes = express.Router();

housesRoutes.get("/",(req,res)=>{
    try {
        res.status(200).send("welcome to houses routes")
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
})


module.exports = housesRoutes