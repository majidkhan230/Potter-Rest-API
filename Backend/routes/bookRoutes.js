const express = require("express");
const path = require("path");
const fs = require("fs");
const { books } = require("../data/books");
const bookRoutes = express.Router();

bookRoutes.get("/", (req, res) => {
  try {
    const data = books
    // res.status(200).send("welcome to book routes");
    res.status(200).send(data)
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
});

module.exports = bookRoutes;
