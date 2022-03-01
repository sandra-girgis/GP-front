
import { NavLink } from 'react-router-dom';
import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown'

function Navbar(){ 
  return (
  <>
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
            <a className="nav-link active" aria-current="page" href="#" >Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#" >Gallery</a>
          </li>

          <NavDropdown title="Music" id="basic-nav-dropdown"> 
                  <NavDropdown.Item><NavLink exact to="/piano">Piano</NavLink></NavDropdown.Item>
                  <NavDropdown.Item href="../Pages/Violin.js">Violin</NavDropdown.Item>
                  <NavDropdown.Item href="../Pages/Flute.js">Flute </NavDropdown.Item>
                  <NavDropdown.Item ><NavLink exact to="/guitar">Guitar</NavLink></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Performance Arts " id="basic-nav-dropdown"> 
                  <NavDropdown.Item href="../Pages/Ballet.js">Ballet</NavDropdown.Item>
                  <NavDropdown.Item href="../Pages/Theatre.js">Theatre</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Classical Arts " id="basic-nav-dropdown"> 
                  <NavDropdown.Item href="../Pages/Artcourses.js">Art Courses</NavDropdown.Item>
                  <NavDropdown.Item href="../Pages/Workshop.js">Workshops </NavDropdown.Item>
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
