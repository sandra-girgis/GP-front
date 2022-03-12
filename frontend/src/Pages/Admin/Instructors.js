import React, { Component } from "react";
import "../Piano";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InstructorList: [],
    };
  }
  async componentDidMount() {
    try {
      const InstructorRes = await fetch("http://localhost:8000/Ensan/instructors/");
      const InstructorList = await InstructorRes.json();
      console.log(InstructorList);
      this.setState({
        InstructorList,
      });
    } catch (e) {
      console.log(e);
    }
  }
  Instructor = () => {
    const instructors = this.state.InstructorList;
    return instructors.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>
          {item.classinfo.map((i) => (
            <>
              <span>{i.CategoryName}</span>
              <br />
            </>
          ))}
        </td>
        <td>
          {item.classinfo.map((i) => (
            <>
              <span>{i.ClassName}</span>
              <br />
            </>
          ))}
        </td>
        <td>{item.salary}</td>
        <td>
        <Link to="/addinstructor"style={{textDecoration:"none"}}>
        <button className="butt" >Edit</button>
        </Link>
        </td>
        <td>
          <Link to="#" style={{ textDecoration: "none" }}>
            <button className="butt" >
              Delete
            </button>
          </Link>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <>
        <div className="nav-scroller bg-body shadow-sm">
          <nav className="nav nav-underline" aria-label="Secondary navigation">
            <Link className="nav-link  adm" to="/instructors">
              Instructors
            </Link>
            <Link className="nav-link  adm" to="/students">
              Students
            </Link>
            <Link className="nav-link  adm" to="/event">
              Events
            </Link>
            <Link className="nav-link  adm" to="/imagealbum">
              Image Album
            </Link>
          </nav>
        </div>
        <h1
          className="fw-bold display-4 text-center"
          style={{ color: "#168eca" }}
        >
          Instructors
        </h1>
        <button
          className="btn-outline-light btn-lg ms-5 mb-5 butt"
          
        >
          <NavLink
            className="nav nav-link bu active "
            exact
            to={"/addinstructor"}
          >
            Add Instructors
          </NavLink>
        </button>
        <Table striped bordered hover className="shado container mb-5">
          <thead>
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">Instructors-Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone-Number</th>
              <th scope="col">Category</th>
              <th scope="col">Courses</th>
              <th scope="col">salary</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.Instructor()}
          </tbody>
        </Table>
      </>
    );
  }
}
export default Instructors;