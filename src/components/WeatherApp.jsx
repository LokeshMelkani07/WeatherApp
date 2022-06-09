import React, { useEffect, useState } from "react";
import "./css/style.css";

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a6dfeac1c162ddaf9df0e15c1e57d217`;
      const res = await fetch(url);
      //   console.log(res);
      const jsonRes = await res.json();
      setCity(jsonRes.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="input">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(Event) => {
              setSearch(Event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p
            style={{
              fontWeight: "bolder",
              fontSize: "5rem",
              color: "red",
            }}
          >
            No Data Found
          </p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i> {search}
              </h2>
              <h3 className="temp">{city.temp} °C</h3>
              <h3 className="maxmin">
                Min : {city.temp_min} °C | Max : {city.temp_max} °C
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
