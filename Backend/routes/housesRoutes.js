const express = require("express");
const { houses } = require("../data/houses");


const housesRoutes = express.Router();

housesRoutes.get("/",(req,res)=>{
    try {

        res.status(200).send(houses)
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
})


module.exports = housesRoutes