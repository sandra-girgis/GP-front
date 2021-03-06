import React, { Component } from "react";
import "../Piano";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const MyEvent = (props) => {
  const [students, setStudents] = React.useState([]);
  const fetchStudents = async () => {
    const result = await axios.get("http://localhost:8000/Ensan/news/");
    setStudents(result.data.reverse(true));
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleted = async (e) => {
    await axios.delete(`http://localhost:8000/Ensan/news/${e.target.id}`);
    fetchStudents();
  };

  return (
    students.map((item) => 
    <tr key={item.id}>
      <td>{item.title}</td>
      <td>{item.content}</td>
      <td>{item.date.replaceAll("T", " ").replaceAll("Z", " ")}</td>
      <td>
      <img
            src={
              item.picture
                .replaceAll("http://localhost:8000", "")}
            style={{ width: "20rem" }}
            alt="..."
          />
      </td>
      <td>{item.Category_ID}</td>
      <td>
        <Link to="#" style={{ textDecoration: "none" }}>
          <button
            id={item.id}
            className="butt"
            style={{ backgroundColor: "#168eca" }}
            onClick={deleted}
          >
            Delete
          </button>
        </Link>
      </td>
    </tr>
  ));
};

class Events extends Component {
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
            <Link className="nav-link  adm" to="/class">
              Class
            </Link>
          </nav>
        </div>
        <h1
          className="fw-bold display-4 text-center"
          style={{ color: "#168eca" }}
        >
          Events
        </h1>
        <button className="btn-outline-light btn-lg ms-5 mb-5 butt">
          <NavLink className="nav nav-link bu active " exact to={"/addevent"}>
            Add Event
          </NavLink>
        </button>
        <Table striped bordered hover className="shado container mb-5">
          <thead>
            <tr className="text-center">
              <th scope="col">title</th>
              <th scope="col">content</th>
              <th scope="col">date</th>
              <th scope="col">picture</th>
              <th scope="col">Category_ID</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <MyEvent />
          </tbody>
        </Table>
      </>
    );
  }
}
export default Events;