import React, { Component } from "react";
import "../Piano";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MyInstructor = (props) => {
  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    const result = await axios.get("http://localhost:8000/Ensan/instructors/");
    setStudents(result.data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleted = async (e) => {
    await axios.delete(`http://localhost:8000/Ensan/instructors/${e.target.id}`);
    fetchStudents();
  };

  return (
    students.map((item) => 
    <tr key={item.id}>
      <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.salary}</td>
        {/* <img
              src={
                item.picture
                  .replaceAll("http://localhost:8000", "")}
                  className="mt-5 ms-5 ins_image" alt="..."
            /> */}
        <td>{Math.round(item.avg_rating * 100)/100}</td>
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

class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
        InstructorList: [],
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
          Instructors
        </h1>
        <button className="btn-outline-light btn-lg ms-5 mb-5 butt">
          <NavLink className="nav nav-link bu active " exact to={"/addinstructor"}>
          Add Instructors
                    </NavLink>
        </button>
        <Table striped bordered hover className="shado container mb-5">
          <thead>
            <tr className="text-center">
            <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">salary</th>
              <th scope="col">Rate</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <MyInstructor />
          </tbody>
        </Table>
      </>
    );
  }
}
export default Instructors;