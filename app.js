const express = require("express")
const fetch = require("node-fetch")
const https = require("https")
const cors = require("cors");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())


var cityName = ""
app.post("/getWeather",(req,res)=>{
  cityName = req.body.cityName
  
})

app.get("/getweather",(req,res)=>{
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=cd237535a195c935817c39cf2f822fe3&units=metric")
  .then(res => res.json())
  .then(json => res.json(json))
}) 

 
app.listen(5000,()=>{
console.log("server running in port 5000");
})
