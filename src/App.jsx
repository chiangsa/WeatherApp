import { useState } from 'react'
import './App.css'
import { Chart as ChartJS } from 'chart.js/auto'
import WeatherGraph from './components/weatherGraph'
import WeatherInfo from './components/weatherInfo'

function App() {

  return (
    <div>
      <h1>
        Weather App
      </h1>
      <div>
        <WeatherGraph/>
      </div>
      <div>
        <WeatherInfo />
      </div>
    </div>
  )
}

export default App
