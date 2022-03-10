import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Piano.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HashLink } from "react-router-hash-link";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InstructorList: [],
      ins: [],
    };
  }
  async componentDidMount() {
    try {
      const InstructorRes = await fetch(
        "http://localhost:8000/Ensan/instructors/2/"
      );
      const InstructorList = await InstructorRes.json();
      const ins = await InstructorList.classinfo;
      this.setState({
        InstructorList,
        ins,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const instructor = this.state.InstructorList;
    const ins = this.state.ins;
    return (
      <>
        <div className="ins_header">
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            className="mt-5 ms-5 ins_image"
          />
        </div>
        <br></br>
        <div className="col-12 row">
          <div className="col-md-6">
            <h3 className="mt-4 fs-md-5 mb-5 ins_name ">
              {instructor.username}
            </h3>
            <div className=" fs-md-4 ins_info text-muted">
              Email : {instructor.email}
            </div>
            <div className="ins_info fs-md-4 text-muted">
              Mobile Phone : {instructor.phoneNumber}
            </div>
            <div className="ins_info fs-md-4 text-muted">
              Salary:{instructor.salary}
            </div>
            <button
              style={{ backgroundColor: "white", border: "1px solid grey" }}
              className="ins_info fs-md-6 btn  mt-3 pink"
            >
              Edit Password
            </button>
          </div>
          <div className=" col-md-6 ">
            <Navbar>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <HashLink className=" pink ins_nav" smooth to="#intro">
                    Introduction
                  </HashLink>
                </li>
                <li className="list-inline-item">
                  <HashLink className=" pink ins_nav ms-5" smooth to="#cour">
                    Courses
                  </HashLink>
                </li>
              </ul>
            </Navbar>
            <h3 style={{ color: "#ee4a8b" }} id="intro" className="ms-3">
              Bio
            </h3>
            <p className="ins_bio mt-4 fs-6 container course_text">
              {instructor.bio}
            </p>
            <h3 style={{ color: "#ee4a8b" }} className="ms-3 mt-5" id="cour">
              Courses
            </h3>
            {ins.map((i) => (
              <>
                <Card className="ms-3 mt-4" style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title style={{ color: "#236aec" }} className="fs-4">
                      {i.ClassName}
                    </Card.Title>
                    <Card.Subtitle className="mb-3 mt-4 course_text">
                      {i.content}
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      From : {i.from}
                    </Card.Text>
                    <Card.Text className="text-muted">To : {i.to}</Card.Text>
                    <Card.Text className="text-muted">Day : {i.day}</Card.Text>
                  </Card.Body>
                </Card>
              </>
            ))}
            <br></br>
          </div>
        </div>
      </>
    );
  }
}
export default Instructor;
