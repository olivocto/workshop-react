import React, { useEffect, useState } from 'react';
import {Toggle} from '../components/Toggle';

function WeatherPage() {
  const API_key = process.env.REACT_APP_WEATHER_API_KEY
  const [isOn, setIsOn] = useState(false);

  const [location, setLocation] = useState(null)
  const [address, setAddress] = useState(null)
  const [weather, setWeather] = useState({
    maxTemperature : null,
    minTemperature: null,
    weatherDescription: null
  })
  const [isLoading, setIsLoading] = useState(true)
  const [nav, setNavigator] = useState(null)

  useEffect(() => {
    setNavigator(window.navigator)
  }, [])

  useEffect(() => {
    if (isOn && !location) { getLocation() }
  }, [isOn])

  useEffect(() => {
    if (location) { getAddress() }
  }, [location])

  useEffect(() => {
    if (address) {
      getWeather()
      setIsLoading(false)
    }
  }, [address])

  const getLocation = async () => {
    if (!('geolocation' in nav)) { return; }
    await nav.geolocation.getCurrentPosition(function(position) {
      const fetchedLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
      setLocation(fetchedLocation)
    }, function(err) {
      console.log(err);
      alert('Couldn\'t fetch location, please enter manually!');
    }, {timeout: 7000});
  }

  const getAddress = async () => {
    await fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${location.lng}&lat=${location.lat}`)
    .then((res) => res.json())
    .then((res) => {
      setAddress(res.features[0].properties.label)
    })

  }

  const getWeather = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${location.lng}&lat=${location.lat}&units=metric&appid=${API_key}`)
    .then((res) => res.json())
    .then((res) => {
      setWeather({
        maxTemperature : res.main.temp_max,
        minTemperature: res.main.temp_min,
        weatherDescription: res.weather[0].description
      })
    })
  }

  return (
    <>
      <Toggle  isOn={isOn} toggle={setIsOn}>
        {isLoading
          ? <p>...En cours de chargement</p>
          : <>
            <h1>Aujourd'hui:</h1>
            <p>Température Minimum: {weather.minTemperature}°C</p>
            <p>Température Maximum: {weather.maxTemperature}°C</p>
            <p>Description : {weather.weatherDescription}</p>
            <p>pour l'adresse : {address}</p>
          </>
        }

      </Toggle>
    </>
    
  );
};

export default WeatherPage;
