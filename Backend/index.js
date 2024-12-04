const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const characterRoutes = require("./routes/characterRoutes");
const housesRoutes = require("./routes/housesRoutes");
const spellRoutes = require("./routes/spellRoutes.js");
const dotenv = require("dotenv").config();
const path = require("path")
const fs = require("fs")


const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
 try {
  const filepath = path.join(__dirname,"public","/index.html")
  const file = fs.readFileSync(filepath,'utf-8')
  res.setHeader("Content-Type", "text/html"); 
  res.status(200).send(file);
 } catch (error) {
  res.status(500).send({
    message:"an error occured",
    error : error.message
  })
 }
})

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message:
//       "This is PotterAPI, a REST API that stores images and information about Harry Potter characters, books and spells. For more info about the routes and query params, visit the github repo.",
//     repo: "https://github.com/majidkhan230/Potter-Rest-API/",
//     routes: ["/books", "/characters", "/houses", "/spells"],
//   });
// });

app.use("/books", bookRoutes);
app.use("/characters", characterRoutes);
app.use("/houses", housesRoutes);
app.use("/spells", spellRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is sucessfully started at ${PORT}`);
});
