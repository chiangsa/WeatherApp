import { useState } from 'react'
import './App.css'
import WeatherInfo from './components/weatherInfo'

function App() {

  return (
    <div>
      <h1>
        Weather App
      </h1>
      <div>
        <WeatherInfo />
      </div>
    </div>
  )
}

export default App
