import React, { useEffect, useState } from "react";


const Weather = ({data})=>{
   
    const [time,setTime] = useState("")
    const currentDate = new Date().toDateString()
    const imgSrc = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
    useEffect(()=>{
        setTime(currentDate)
    },[])

    const capitalize = (str)=>{
     return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const getTime = (int)=>{
        var date = new Date(int *1000)
        var hour = date.getHours()
        var min =  "0" +date.getMinutes()
       return hour + ":" +min.substr(-2)
    }

return (
    <div className="card">
<div>
<h3>{data.name}, {data.sys.country}</h3>
<h4>{time}</h4>

<div className="description">
<img src={imgSrc} alt ={data.weather[0].description}/> 
<h1>{capitalize(data.weather[0].description)}</h1>

</div>


<div className="temp">
<div className="tempMain">
<h2>{data.main.temp}<span>&#xb0;</span> C</h2>
</div>
<div className="tempRange">
    <h3>Max {data.main.temp_max}<span>&#xb0;</span> C</h3>
    <hr/>
    <h3>Min {data.main.temp_min}<span>&#xb0;</span> C</h3>
</div>

</div>

<div className="bottomContainer">
<div>
    <p>Sunrise</p>
    <p className="bottomDetail" >{getTime(data.sys.sunrise)}</p>
</div>
<div>
    <p>Sunset</p>
    <p className="bottomDetail">{getTime(data.sys.sunset)}</p>
</div>
<div>
    <p>Wind</p>
    <p className="bottomDetail">{data.wind.speed}</p>
</div>
</div>
</div>
    </div>
)

}




export default Weather
