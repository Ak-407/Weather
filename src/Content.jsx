import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    setWeather(response.data);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  function displayTemperature(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97a9745b0c3a1f932357060a2331ab49&units=metric`;
    axios.get(url)
      .then(showWeather)
      .catch(err => console.log(err));
  }
  let form = (
    <div>
      <form onSubmit={displayTemperature}>
        <input placeholder="Name a State" type="text" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  return (<>
    <img className="imgg" src="https://wallpaperaccess.com/full/1154405.jpg"></img>
    <div className="weather-app weather-container">
      {form}
      {/* Conditionally rendering the list */}
      {weather && (
        <ul className="top">
          <li className="img">
            <img className="weather-icon"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""></img>
          </li>
          <li>Temperature: {weather.main.temp}°C</li>
          <li>Description: {weather.weather[0].description}</li>
          <li>Humidity: {weather.main.humidity}%</li>
          <li>Wind: {weather.wind.speed}km/h</li>
        </ul>
      )}
    </div></>
  );
}













// import React, {useState} from "react";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';


// class WeatherTelling extends React.Component {
    
    
//   constructor(props) {
//     super(props);
//     this.state = {
//       temperature: null,
//       humidity: null,
//       windSpeed: null,
//       Country: null,
//     };
// }




// //   const locationn= req.body.location;
// //   const url = "https://api.openweathermap.org/data/2.5/weather?q="+locationn+"&units=metric&appid=674f5abe47a1ca3d661626b75c0271f2";
// //   https.get(url, function(amaan){
//     //       console.log(amaan);
//     //       console.log(amaan.statusCode);
//     //       amaan.on("data", function(data){
// //           const weatherdata = JSON.parse(data)
// //           var temp = weatherdata.main.temp;
// //           console.log(temp);
// //           var temp1 = weatherdata.weather[0].description;
// //           console.log(temp1);
// //           rec.write("<h1>The temperature in "+locationn+" is"  + temp +"  with weather " + temp1 + "</h1>");
// //           const icon = weatherdata.weather[0].icon;
// //           const imegeurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
// //           rec.write("<img src=" +imegeurl+ ">");
// //           rec.send();



// componentDidMount() {
//     const city = useState({}) 
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=674f5abe47a1ca3d661626b75c0271f2';
//     fetch(url)
    
//       .then(res => res.json())
//       .then(data => {
//           console.log(data.main.temp)
//         this.setState({
//           temperature: data.main.temp,
//           humidity: data.main.humidity,
//           windSpeed: data.wind.speed,
//           Country: data.sys.country,
//         });
//       });
//   }

//   render() {
//     return (

//       <div>
//       <form action="/" method="post">
//       <input type="text" name="city" />
//       <input type="submit" value="Search" />
// </form>
//         <h2>Weather Conditions</h2>
//         <p>Temperature: {this.state.temperature} °C</p>
//         <p>Humidity: {this.state.humidity} %</p>
//         <p>Wind Speed: {this.state.windSpeed} km/hr</p>
//         <p>Country: {this.state.Country}</p>
//       </div>
//     );
//   }
// }

// export default WeatherTelling;
  
  
