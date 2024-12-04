const express = require('express');
const { spells } = require('../data/spells');

const spellRoutes = express.Router();

spellRoutes.get("/",(req,res)=>{
    try {
        res.status(200).send(spells)
    } catch (error) {
        res.status(500).send({ message: "An error occurred", error: error.message });
    }
})


module.exports = spellRoutes