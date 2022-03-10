import React, { Component } from "react";
import "../Piano";
import Table from "react-bootstrap/Table";
// import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Addevent from "./Addevent";
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventList: [],
    };
  }
  async componentDidMount() {
    try {
      const EventRes = await fetch("http://localhost:8000/Ensan/news/");
      const EventList = await EventRes.json();
      this.setState({
        EventList,
      });
    } catch (e) {
      console.log(e);
    }
  }
  delete = (e) => {
    // console.log(`http://localhost:8000/Ensan/news/${e.target.id}`)
    fetch(`http://localhost:8000/Ensan/news/${e.target.id}`,{
            method : 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.details)
        })
        .then(
            data => data.json()
        )
        .then(
            data => {
                console.log(data);
            }
        )
        .catch(error => console.error(error))
  }
  edit = (e) => {
    <Addevent id={e.target.id} />
  }
  Event = () => {
    const events = this.state.EventList;
    return events.map((item) => (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>{item.content}</td>
        <td>{item.date.replaceAll("T", " ").replaceAll("Z", " ")}</td>
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
        <td>{item.Category_ID}</td>
        <td>
          <Link to="#" style={{ textDecoration: "none" }}>
            <button id={item.id} className="butt" style={{ backgroundColor: "#168eca" }} onClick={this.edit}>
            Edit
            </button>
          </Link>
        </td>
        {/* <td>
          <button className="butt" style={{ backgroundColor: "#168eca" }}>
            <NavLink className="nav nav-link bu active " exact to={"/addevent"} id={item.id} >
              Edit
            </NavLink>
          </button>
        </td> */}
        <td>
          <Link to="#" style={{ textDecoration: "none" }}>
            <button id={item.id} className="butt" style={{ backgroundColor: "#168eca" }} onClick={this.delete}>
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
            <Link className="nav-link  adm" to="/events">
              Student
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
          Events
        </h1>
        <button
          className="btn-outline-light btn-lg ms-5 mb-5 butt"
          style={{ backgroundColor: "#168eca" }}
        >
          <NavLink className="nav nav-link bu active " exact to={"/addevent"}>
            Add Event
          </NavLink>
        </button>
        <Table striped bordered hover className="shado container mb-5">
          <thead>
            <tr class="text-center">
              <th scope="col">title</th>
              <th scope="col">content</th>
              <th scope="col">date</th>
              <th scope="col">picture</th>
              <th scope="col">Category_ID</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{this.Event()}</tbody>
        </Table>
      </>
    );
  }
}
export default Events;
