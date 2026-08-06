import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Button is Clicked");
    
  }
  function mouseEnter(){
    console.log('Mouse Entered')
  }

  function inputChanging(val){
    console.log(val);
  }
  return (
    <div>
      <h1>Hello, Shivraj</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click Here</button>
      <button onClick={btnClicked}>Explore This</button>

      <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default App
