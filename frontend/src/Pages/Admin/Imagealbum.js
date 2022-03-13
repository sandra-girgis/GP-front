import React, { Component } from "react";
import "../Piano";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
class Imagealbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StudentList: [],
    };
  }
  async componentDidMount() {
    try {
      const StudentRes = await fetch(
        "http://localhost:8000/Ensan/albumPhotos/"
      );
      const StudentList = await StudentRes.json();
      console.log(StudentList);
      this.setState({
        StudentList,
      });
    } catch (e) {
      console.log(e);
    }
  }

  Student = () => {
    const students = this.state.StudentList;
    return students.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <img
            src={require("../../images" +
              item.picture
                .replaceAll("http://localhost:8000", "")
                .replaceAll("%20", " "))}
            style={{ width: "20rem" }}
            alt="..."
          />
        </td>
        <td>{item.Album_ID}</td>
        <td>
          <Link to="/addimage" style={{ textDecoration: "none" }}>
            <button className="butt">Edit</button>
          </Link>
        </td>
        <td>
          <Link to="#" style={{ textDecoration: "none" }}>
            <button className="butt">Delete</button>
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
          Image Album
        </h1>
        <button className="btn-outline-light btn-lg ms-5 mb-5 butt">
          <NavLink className="nav nav-link bu active " exact to={"/addimage"}>
            Add Image
          </NavLink>
        </button>
        <Table striped bordered hover className="shado container mb-5">
          <thead>
            <tr className="text-center">
              <th scope="col">picture</th>
              <th scope="col">Album_ID</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{this.Student()}</tbody>
        </Table>
      </>
    );
  }
}
export default Imagealbum;
