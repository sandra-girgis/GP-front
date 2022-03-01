import { NavLink } from 'react-router-dom';
import React from "react";
import "./Navbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar () { 
  return (<>
<body cz-shortcut-listen="true">
<main>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div className="container-fluid">

      <img  src="./logo.jpg" alt="logo.img"/>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
          <NavLink className="nav nav-link active" exact to={"/"}>Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav nav-link active" exact to={"/news"}>News</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav nav-link active" exact to={"/gallery"}>Gallery</NavLink>
          </li>
          <NavDropdown title="Music" id="basic-nav-dropdown"> 
                  <NavDropdown.Item><NavLink className="nav" exact to={"/piano"}>Piano</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink className="nav" exact to={"/violin"}>Violin</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink className="nav" exact to={"/flute"}>Flute</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink className="nav" exact to={"/guitar"}>Guitar</NavLink></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Performance Arts " id="basic-nav-dropdown"> 
                  <NavDropdown.Item><NavLink className="nav" exact to={"/ballet"}>Ballet</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink className="nav"  exact to={"/theatre"}>Theatre</NavLink></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Classical Arts " id="basic-nav-dropdown"> 
                  <NavDropdown.Item><NavLink className="nav" exact to={"/art Courses"}>Art Courses</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink className="nav" exact to={"/workshops"}>Workshops</NavLink></NavDropdown.Item>
          </NavDropdown>
        </ul>
      </div>
    </div>
  </nav>
  </main>
</body>
  </>
  );
}

export default Navbar;
