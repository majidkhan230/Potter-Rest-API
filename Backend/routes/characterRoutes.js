const express = require("express");
const { characters } = require("../data/characters");


const characterRoutes = express.Router();



characterRoutes.get("/",(req,res)=>{
    try {
        res.status(200).send(characters)
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
})


module.exports = characterRoutes 