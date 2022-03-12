import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
// import img from "../images/logo.ico"

function Nav(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <img
          src={require("../images/logo.ico")}
          alt="logo.img"
          className="log"
          style={{ width: "3rem" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav mb-2 ml-auto">
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav nav-link pink bl" exact to="/news">
                News
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav nav-link pink bl" exact to="/gallery">
                Gallery
              </NavLink>
            </li> */}
            <NavDropdown
              title="Gallery"
              id="basic-nav-dropdown"
              className=" pink bl"
            >
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/concerts">
                  Concerts
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/workshops">
                  Workshops
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/exhibitions">
                  Exhibitions
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/classes">
                  Classes
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Music"
              id="basic-nav-dropdown"
              className=" pink bl"
            >
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/piano">
                  Piano
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/violin">
                  Violin
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/flute">
                  Flute
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/guitar">
                  Guitar
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Performance Arts "
              id="basic-nav-dropdown"
              className="pink bl"
            >
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/ballet">
                  Ballet
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/theatre">
                  Theatre
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Classical Arts "
              id="basic-nav-dropdown"
              className="pink bl"
            >
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to={"/artCourses"}>
                  Art Courses
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to={"/workshop"}>
                  Workshop
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            {sessionStorage.token ? (
              <>
                <li className="nav-item ms-4">
                  <NavLink className="nav nav-link pink bl" exact to="/event">
                    Admin
                  </NavLink>
                </li>
                <li className="nav-item ms-4">
                  <NavLink
                    className="nav nav-link pink bl"
                    exact
                    to="/instructor"
                  >
                    Instructor
                  </NavLink>
                </li>
                <li className="nav-item ms-4">
                  <NavLink className="nav nav-link pink bl" exact to="/student">
                    Student
                  </NavLink>
                </li>
                <li className="nav-item ms-4">
                  <NavLink className="nav nav-link pink bl" exact to="#">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
            <li className="nav-item ms-4">
              <NavLink className="nav nav-link pink bl" exact to="/login">
                Login
              </NavLink>
            </li>
              </>
            )}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Nav;

// rehab

// import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar'
// import React from "react";
// import "./Navbar.css";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// // import img from "../images/logo.ico"

// function Nav () {
//   return (<>

// <Navbar bg="light" expand="lg" className="ms-auto" >
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav" >
//       <Nav className="justify-content-end" style={{width:"100%"}}>
//         <img src={require('../images/logo.ico')} alt="logo.img" className='log ' style={{width:"3rem"}}/>
//       <ul className="navbar-nav me-auto mb-2 mb-sm-0 bl " >
//           <li className="nav-item">
//           <NavLink className="nav nav-link pink bl" exact to="/">Home</NavLink>
//           </li>
//           <li className="nav-item">
//           <NavLink className="nav nav-link pink bl" exact to="/news">News</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav nav-link pink bl" exact to="/gallery">Gallery</NavLink>
//           </li>
//         <NavDropdown title="Music" id="basic-nav-dropdown" renderMenuMount={true} className="pink bl">
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to="/piano">Piano</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to="/violin">Violin</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to="/flute">Flute</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to="/guitar">Guitar</NavLink></NavDropdown.Item>
//           </NavDropdown>
//           <NavDropdown title="Performance Arts " id="basic-nav-dropdown" renderMenuMount={true} className="pink bl">
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to="/ballet">Ballet</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to="/theatre">Theatre</NavLink></NavDropdown.Item>
//           </NavDropdown>
//           <NavDropdown title="Classical Arts " id="basic-nav-dropdown" renderMenuMount={true} className="pink bl">
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to={"/artCourses"}>Art Courses</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav pink bl" exact to={"/workshop"}>Workshop</NavLink></NavDropdown.Item>
//           </NavDropdown>
//           <li className="nav-item">
//             <NavLink className="nav nav-link pink bl" exact to="/login">Login</NavLink>
//           </li>
//       </ul>
//       </Nav>
//     </Navbar.Collapse>
// </Navbar>
//   </>
//   );
// }

// export default Nav;

// samah

//  <div cz-shortcut-listen="true">
// <main>
// <nav className="navbar navbar-expand-sm navbar-light bg-light" aria-label="Third navbar example">
//     <div className="container-fluid">

//     <img src={require('../images/logo.ico')} alt="logo.img" className='log' style={{width:"3rem"}}/>

// {/* <img src= {img} alt="logo.img" className='log' style={{width:"3rem"}}/>    */}

//       {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse colr" id="navbarsExample03">
//         <ul className="navbar-nav me-auto mb-2 mb-sm-0" >
//           <li className="nav-item">
//           <NavLink className="nav nav-link active" exact to="/">Home</NavLink>
//           </li>
//           <li className="nav-item">
//           <NavLink className="nav nav-link active" exact to="/news">News</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav nav-link active" exact to="/gallery">Gallery</NavLink>
//           </li>
//           <NavDropdown title="Music" id="basic-nav-dropdown">
//                   <NavDropdown.Item><NavLink className="nav" exact to="/piano">Piano</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav" exact to="/violin">Violin</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav" exact to="/flute">Flute</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav" exact to="/guitar">Guitar</NavLink></NavDropdown.Item>
//           </NavDropdown>
//           <NavDropdown title="Performance Arts " id="basic-nav-dropdown">
//                   <NavDropdown.Item><NavLink className="nav" exact to="/ballet">Ballet</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav" exact to="/theatre">Theatre</NavLink></NavDropdown.Item>
//           </NavDropdown>
//           <NavDropdown title="Classical Arts " id="basic-nav-dropdown">
//                   <NavDropdown.Item><NavLink className="nav" exact to={"/artCourses"}>Art Courses</NavLink></NavDropdown.Item>
//                   <NavDropdown.Item><NavLink className="nav" exact to={"/workshop"}>Workshop</NavLink></NavDropdown.Item>
//           </NavDropdown>
//         </ul>
//       </div>
//     </div>
//   </nav>
//   </main>
//  </div>
