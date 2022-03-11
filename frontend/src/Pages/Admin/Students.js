import React, { Component } from "react";
import "../Piano";
import Table from "react-bootstrap/Table";
// import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StudentList: [],
      id: 0,
    };
  }
  async componentDidMount() {
    try {
      const StudentRes = await fetch("http://localhost:8000/Ensan/students/");
      const StudentList = await StudentRes.json();
      console.log(StudentList);
      this.setState({
        StudentList,
      });
    } catch (e) {
      console.log(e);
    }
  }

  delete = (e) => {
    // console.log(`http://localhost:8000/Ensan/students/${e.target.id}`)
    fetch(`http://localhost:8000/Ensan/students/${e.target.id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.details),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  Student = () => {
    const students = this.state.StudentList;
    return students.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>
          {item.attend.map((i) => (
            <>
              <span>{i.PaymentStatus ? "Paid" : "Not Paid"}</span>
              <br />
            </>
          ))}
        </td>
        <td>
          {item.attend.map((i) => (
            <>
              <span>{i.ClassName}</span>
              <br />
            </>
          ))}
        </td>
        <td>
        <Link to="/addstudent"style={{textDecoration:"none"}}>
        <button className="butt" >Edit</button>
        </Link> 
        </td>
        <td>
          <Link to="#" style={{ textDecoration: "none" }}>
          <button
              id={item.id}
              className="butt"
              
              onClick={this.delete}
            >
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
          Students
        </h1>
        <button
          className="btn-outline-light btn-lg ms-5 mb-5 butt"
          
        >
          <NavLink className="nav nav-link bu active " exact to={"/addstudent"}>
            Add Student
          </NavLink>
        </button>
        <Table striped bordered hover className="shado container mb-5">
          <thead>
            <tr className="text-center">
              <th scope="col">Id</th>
              <th scope="col">Student-Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone-Number</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Courses</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.Student()}
          </tbody>
        </Table>
      </>
    );
  }
}
export default Students;
