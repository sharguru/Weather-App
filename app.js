const express = require("express")
const fetch = require("node-fetch")
const https = require("https")
const cors = require("cors");
// const { default: axios } = require("./frontend/src/axios");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())

// app.get("/getWeather",(req,res)=>{
  
//   // res.sendFile(__dirname + "/index.html")
//   url ="https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=cd237535a195c935817c39cf2f822fe3&units=metric"
//   https.get(url,(response)=>{
//     console.log(response.statusCode);
//       response.on("data",(data)=>{
       
//         const weatherData = JSON.parse(data)
//         console.log(weatherData);
//         const weatherTemp  = weatherData.main.temp
//         const weatherDescription = weatherData.weather[0].description
//         res.send({weatherTemp})
//       })
//     })
// })
// const apiCall =  (cityName) =>{
//   const apiKey = "cd237535a195c935817c39cf2f822fe3"
//   const unit = "metric"
//   url ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units="+ unit
//   https.get(url,(response)=>{
//     console.log(response.statusCode);
//       response.on("data",(data)=>{
//         const weatherData = JSON.parse(data)
//         console.log(weatherData);
//       })
//     })
// }
var cityName = ""
app.post("/getWeather",(req,res)=>{
  cityName = req.body.cityName
  
})

app.get("/getweather",(req,res)=>{
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=cd237535a195c935817c39cf2f822fe3&units=metric")
  .then(res => res.json())
  .then(json => res.json(json))
}) 

// app.get("/getweather",async (req,res)=>{
//   const data = await apiCall;
//   console.log(data,"in get call")
//     res.json({data});
// })
// app.post("/home",(req,res)=>{
  
//   const cityName = req.body.cityName
// })
 
app.listen(5000,()=>{
console.log("server running in port 5000");
})
