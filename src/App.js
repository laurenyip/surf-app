<<<<<<< HEAD

import React, { useState, useEffect } from 'react';
=======
import React, { useState } from "react";
>>>>>>> 330c940b4c818b3e835d954487c4caef9b6b9d74
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
<<<<<<< HEAD
  const url = `https://marine-api.open-meteo.com/v1/marine?latitude=54.544587&longitude=10.227487&hourly=wave_height`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        

        const response = await fetch(url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []); // Run the effect only once when the component mounts

=======

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
>>>>>>> 330c940b4c818b3e835d954487c4caef9b6b9d74

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
     
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
<<<<<<< HEAD
        </div>
    

=======
      </div>
>>>>>>> 330c940b4c818b3e835d954487c4caef9b6b9d74
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{"Montreal"}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Liiike</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
