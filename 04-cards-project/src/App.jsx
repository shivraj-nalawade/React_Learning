import React from 'react'
import Card from './components/Card'

const arr = [10, 20, 30, 40];
const App = () => {
  return (
    <div className='parent'>
      {arr.map(function(elem){
        return elem
      })}
    </div>
  )
}

export default App
