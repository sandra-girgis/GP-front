/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useContext, useEffect, useState } from 'react';
// import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export  function Navbar () { 
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
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="../Pages/News.js">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="../Pages/Gallery.js">Gallery</a>
          </li>
{/* --------------------------------------------------------------------- */}
{/* <Link class="dropdown-item" href="#">
              Submenu &raquo;
            </Link>
            <ul class="dropdown-menu dropdown-submenu">
              <li>
                <a class="dropdown-item" href="#">Submenu item 1</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 2</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <a class="dropdown-item" href="#">Multi level 1</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Multi level 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 4</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Submenu item 5</a>
              </li>
            </ul> */}
{/* ----------------------------------------------------- */}

          {/* <NavDropdown title="Activites" id="basic-nav-dropdown"> */}
          {/* <NavDropdown.Item>music</NavDropdown.Item> */}
          {/* <NavDropdown>music
                  <NavDropdown.Item Link="#action1" to="./Pages/Piano.js">Piano</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">Violin</NavDropdown.Item>
                  <NavDropdown.Item href="#action3">Flute </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Guitar</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Performance Arts"></NavDropdown>
          <NavDropdown title="Classical Arts"></NavDropdown>
          </NavDropdown>  */}
          <NavDropdown title="Music" id="basic-nav-dropdown"> 
                  <NavDropdown.Item><Link to={"../Pages/Piano"}>Piano</Link></NavDropdown.Item>
                  <NavDropdown.Item href="../Pages/Violin.js">Violin</NavDropdown.Item>
                  <NavDropdown.Item href="../Pages/Flute.js">Flute </NavDropdown.Item>
                  <NavDropdown.Item href="../Pages/Guitar.js">Guitar</NavDropdown.Item>
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
