import './App.css';
import React, { useEffect, useState } from "react"
import {Box,Button,Input} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import Axios from "./axios"
import Weather from "./components/weather"
import Error from "./components/error";
function App() {
 
const [weatherData,setWeatherData] =useState({})
 
const [cityName,setCityName] = useState("")

useEffect(()=>{
  fetchWeather()
  console.log(weatherData);
},[weatherData])


const  fetchWeather= ()=>{
  Axios.get("/getWeather")
  .then(res =>  setWeatherData(res.data))
  .catch(e=>console.log(e))
}

function handleChange(event){
const {value} = event.target
setCityName(value)
}

function handleClick(e){
  e.preventDefault()
  Axios.post("/getWeather",{cityName})
  .then((res)=>console.log(res))
  .catch(e=> console.log(e))
  setCityName("")
}



return (
<Box className="container">
<h1 className="heading">Weather App</h1> 


 <form className="form"> 
<Input type="text" placeholder="Enter City Name" name="cityName" value={cityName} onChange={handleChange} style={{width:'75%'}}/>
<Button onClick={handleClick} style={{float:"right"}}><SearchIcon/></Button>
</form> 
{weatherData.id ? <Weather data ={weatherData}/> :<Error/> }
</Box> );
}

export default App;
