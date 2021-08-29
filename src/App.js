import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import Textlabel from "./components/Textlabel"
import Alert from "./components/Alert"
// import About from "./components/About"
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [buttonColor, setButtonColor] = useState({color: '#fff', backgroundColor: '#0d6efd'})


  const changeButtonColor = (color, bgColor) => {
      setButtonColor({
        color: color,
        backgroundColor: bgColor
      })
      console.log('New Button Color', color, bgColor)
  }

  const setAAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1500)

  }

  const toggleMode = () => {
      if (mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743'
        setAAlert('Dark mode enabled', 'success')
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        setAAlert('Light mode enabled', 'success')
      }
      console.log("Current Mode", mode)
  } 

  return (
    <>
    {/* <Router> */}
    <Navbar title="TochO" mode={mode} changeMode={toggleMode}
     changeButtonColor={changeButtonColor}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <Textlabel heading="Text Analyzer" mode={mode} setAlert={setAAlert} buttonColor={buttonColor}
          setButtonColor={changeButtonColor}
          />
          {/* </Route> */}
      {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
