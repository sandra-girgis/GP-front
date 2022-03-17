import React, { Component } from "react";
import "../Piano";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const MyAlbum = () => {
  const [students, setStudents] = React.useState([]);
  const fetchStudents = async () => {
    const result = await axios.get("http://localhost:8000/Ensan/albums/");
    setStudents(result.data.reverse(true));
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleted = async (e) => {
    await axios.delete(`http://localhost:8000/Ensan/albums/${e.target.id}`);
    fetchStudents();
  };

  return (
    students.map((item,index) =>
      <tr key={item.id}>
        <td>{index+1}</td>
        <td>{item.Collection_ID}</td>
        <td>{item.name}</td>
        <td>
          <Link to="/addalbum" style={{ textDecoration: "none" }}>
            <button className="butt">Edit</button>
          </Link>
        </td>
        <td>
          <Link to="#" style={{ textDecoration: "none" }}>
            <button
              id={item.id}
              className="butt"
              onClick={deleted}
            >
              Delete
            </button>
          </Link>
        </td>
      </tr>
  ));
};

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventList: [],
    };
  }
  render() {
    return (
      <>
        <div className="nav-scroller bg-body shadow-sm">
          <nav className="nav nav-underline" aria-label="Secondary navigation">
            <Link className="nav-link  adm" to="/instructors">
              Instructors
            </Link>
            <Link className="nav-link  adm" to="/students">
              Student
            </Link>
            <Link className="nav-link  adm" to="/event">
              Events
            </Link>
            <Link className="nav-link  adm" to="/image">
              Image
            </Link>
            <Link className="nav-link  adm" to="/album">
              Album
            </Link>
          </nav>
        </div>
        <h1
          className="fw-bold display-4 text-center"
          style={{ color: "#168eca" }}
        >
          Image
        </h1>
        <button className="btn-outline-light btn-lg ms-5 mb-5 butt">
          <NavLink className="nav nav-link bu active " exact to={"/addalbum"}>
          Add Album
          </NavLink>
        </button>
        <Table striped bordered hover className="shado container mb-5">
          <thead>
            <tr className="text-center">
            <th scope="col">No.</th>
              <th scope="col">Collection Name</th>
              <th scope="col">Album Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <MyAlbum />
          </tbody>
        </Table>
      </>
    );
  }
}
export default Album;
