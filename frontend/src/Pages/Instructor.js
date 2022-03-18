import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Piano.css";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InstructorList: [],
      ins: [],
      picture:""
    };
  }
  async componentDidMount() {
    try {
      const InstructorRes = await fetch(
        `http://localhost:8000/Ensan/instructors/${sessionStorage.id}/`
      );
      const InstructorList = await InstructorRes.json();
      const ins = await InstructorList.classinfo;
      const picture = await InstructorList.picture;
      this.setState({
        InstructorList,
        ins,
        picture
      });
    } catch (e) {
      console.log(e);
    }
  }
  update = (e) => {
    this.props.history.push("/pasins");
  };
  imgupdate = (e) => {
    this.props.history.push("/imgins");
  };
  render() {
    const instructor = this.state.InstructorList;
    const ins = this.state.ins;
    const Picture = this.state.picture;
    return (
      <>
        <div className="ins_header">
            <img
              src={
                Picture
                  .replaceAll("http://localhost:8000", "")}
                  className="mt-5 ms-5 ins_image" alt="..."
            />
        </div>
        <br></br>
        <div className="row w-100">
          <div className="offset-md-1 col-md-5">
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
            
            <div className="ins_info fs-md-4 text-muted">
              <span>Your Rate: {Math.round(instructor.avg_rating * 100)/100}</span>
              <FontAwesomeIcon className="star" icon={faStar} />
              </div>
              <div className="ins_info fs-md-4 text-muted">
              <span>No. of Students rated you :{instructor.no_of_ratings}</span>
            </div>

            <button
              id={instructor.id}
              onClick={this.update}
              style={{ backgroundColor: "white", border: "1px solid grey" }}
              className="ins_info fs-md-6 btn mt-3 pink bl"
            >
              Edit Password
            </button>
            {/* <button
              id={instructor.id}
              onClick={this.imgupdate}
              style={{ backgroundColor: "white", border: "1px solid grey" }}
              className="ins_info fs-md-6 btn mt-3 pink bl"
            >
              Edit Image
            </button> */}
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
                <Card className="shado ms-2 col-sm-8 mt-4">
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
export default withRouter(Instructor);