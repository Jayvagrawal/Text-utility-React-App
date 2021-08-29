import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
    console.log(props)

    const updateButtonColor = (color, bgcolor) => {
      props.changeButtonColor(color, bgcolor)
    }

    return(<>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
    
      </ul>
      <ul className="navbar-nav me-auto mb-3 mb-lg-1" >
      <li className="nav-item my-70">
        <button className="btn btn-primary mx-2" 
        style={{color: 'white', backgroundColor: 'green'}} 
        value='green' onClick={(e) => updateButtonColor('white', 'green')}>Green Theme</button>
        </li>
        <li className="nav-item my-70">
        <button className="btn btn-primary mx-2" 
        style={{color: 'white', backgroundColor: 'red'}} onClick={(e) => updateButtonColor('white', 'red')}>Red Theme</button>
        </li>
        <li className="nav-item my-70">
        <button className="btn btn-primary mx-2" 
        style={{color: '#fff', backgroundColor: '#0d6efd'}} onClick={(e) => updateButtonColor('#fff', '#0d6efd')}>Default</button>
        </li>
      </ul>        

      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
        <input className="form-check-input" type="checkbox" onChange={props.changeMode} id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark': 'light'} mode</label>
    </div>
    {/* 
      <form className="d-flex" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>  */}
    </div>
  </div>
</nav></>)
}

export default Navbar