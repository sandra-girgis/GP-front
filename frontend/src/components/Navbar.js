import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { withRouter } from "react-router-dom";

function Nav(props) {
  const logout = () => {
    sessionStorage.clear();
    this.props.history.push("/");
  };
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
              {/* <NavDropdown.Item>
                <NavLink className="nav pink bl" exact to="/theatre">
                  Theatre
                </NavLink>
              </NavDropdown.Item> */}
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
                {sessionStorage.is_superuser === "true" ? (
                  <li className="nav-item ms-4">
                    <NavLink className="nav nav-link pink bl" exact to="/event">
                      Admin
                    </NavLink>
                  </li>
                ) : sessionStorage.is_staff === "true" ? (
                  <li className="nav-item ms-4">
                    <NavLink
                      className="nav nav-link pink bl"
                      exact
                      to="/instructor"
                    >
                      Instructor
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item ms-4">
                    <NavLink
                      className="nav nav-link pink bl"
                      exact
                      to="/student"
                    >
                      Student
                    </NavLink>
                  </li>
                )}
                <li className="nav-item ms-4">
                  <NavLink
                    onClick={logout}
                    className="nav nav-link pink bl"
                    exact
                    to="#"
                  >
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
export default withRouter(Nav);
