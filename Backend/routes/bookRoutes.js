const express =require('express')


const bookRoutes = expresss.router();


bookRoutes.get("/",(req,res)=>{
    req.send("welcome to book route")
})


export default bookRoutes;