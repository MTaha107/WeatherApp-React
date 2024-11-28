import React, { useEffect, useRef, useState } from 'react'

export default function WeatherApp() {

  const myapiKey = "6ceb0afccc313bd45ffd6ac21ebed5dc"
  const [weatherData,setWeatherData] = useState(false);
  const inputRef = useRef();

  const Search = async(city)=>{

    try {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myapiKey}`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    setWeatherData({
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      temperature: Math.floor(data.main.temp),
      location: data.name,
      icon: data.weather[0].icon,

    })
    }
     catch (error) {
      
    }
    
  }

  useEffect(()=>{
    Search("London")
  },[])

  return (
    <div>
       
<div className="container"> 
     <div className="search">
        <input ref={inputRef} className="searchbar" type="text" placeholder="City Name"/>
        <button className="sb" onClick={()=> Search(inputRef.current.value)}>Search</button>
     </div>

      <div className="clud"><img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt=""/></div>
      
      
   <div className="info">
    <h1><span className="temp">{weatherData.temperature}°C</span></h1>
    <span className="cityname">{weatherData.location}</span>
   </div>

<div className="c1">
   <div className="moreinfo">
    <span className="humidity">{weatherData.humidity}%</span>
    <span className="humi">Humidity</span>
   </div>

   <div className="moreinfop2">
    <span className="windspeed">{weatherData.windspeed}km/hr</span>
    <span className="ws">Windspeed</span>
   </div>
</div>


</div>


    </div>
  )
}
