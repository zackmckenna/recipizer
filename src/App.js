import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { specs } from './specs'
import { foodTypes } from './foodTypes'

const App = () => {
  const [foodType, setFoodType] = useState('')
  const [spec, setSpec] = useState('')

  useEffect(() => {
    setFoodType(getRandomItem(foodTypes))
    setSpec(getRandomItem(specs))
  }, [])

console.log(specs)
console.log(foodTypes)

const randomizeRequirements = () => {
  setFoodType(getRandomItem(foodTypes))
  setSpec(getRandomItem(specs))
}

const handleRandomize = event => {
  event.preventDefault()
  randomizeRequirements()
}

const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

  return (
    <div className="App">
      <header className='App-header'>
        <p className='headerText'>recipizer helps you create un-believable recipes</p>
      </header>
      <div className='mainContent'>
        <h3><span className='createText'>Create a</span> <span className='foodTypeText'>{foodType}</span> <span className='thatText'>that</span> <span className='specText'>{spec}</span></h3>
        <button onClick={e => handleRandomize(e)}>recipize</button>
      </div>
    </div>
  );
}

export default App;
