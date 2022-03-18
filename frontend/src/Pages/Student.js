import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Piano.css";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFaceSadTear,
  faFaceGrinHearts,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InstructorList: [],
      ins: [],
      stars: "",
      picture:""
    };
  }
  async componentDidMount() {
    try {
      const InstructorRes = await fetch(
        `http://localhost:8000/Ensan/students/${sessionStorage.id}/`
      );
      const InstructorList = await InstructorRes.json();
      const ins = await InstructorList.attend;
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
  update = () => {
    this.props.history.push("/passtd");
  };
  imgupdate = () => {
    this.props.history.push("/imgstd");
  };
  change = (e) => {
    this.setState({
      stars: parseInt(e.target.value),
    });
  };
  rate = async (e) => {
    let formField = new FormData();
    formField.append("stars", parseInt(this.state.stars));
    formField.append("student", parseInt(sessionStorage.id));
    formField.append("instructor", parseInt(e.target.id));

    await axios({
      method: "post",
      url: "http://localhost:8000/Ensan/ratings/",
      data: formField,
    })
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
            <h3 style={{ color: "#ee4a8b" }} className="ms-4 mt-5 fs-1">
              Courses
            </h3>
            {ins.map((i) => (
              <>
                <Card className="shado ms-2 col-sm-8 mt-4 ">
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
                    <Card.Text className="text-muted">
                      Payment Status : {i.PaymentStatus ? "Paid" : "Not Paid"}
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Category : {i.CategoryName}
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Instructor's Name : {i.Instructor_ID}
                    </Card.Text>
                    {i.Rating ? (
                      <Card.Text className="text-muted">
                        Instructor's Rate :
                        {Array(i.Rating).fill(null).map((value, index) => (
                              <FontAwesomeIcon key={index} className="star" icon={faStar} />
                          ))}
                      </Card.Text>
                    ) : (
                      <Form className="mt-3 gx-2">
                        <Form.Label style={{ color: "#168eca" }}>
                        Instructor's Rate :
                        </Form.Label>
                        <Form.Group
                          className=" mb-3 "
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            className="form-control col-6"
                            type="number"
                            name="stars"
                            value={this.state.stars}
                            onChange={this.change}
                          />
                          <span className="input-group-text justify-content-center col-6">
                            <FontAwesomeIcon
                            className="Angry d-inline  "
                            icon={faFaceSadTear}
                          />
                          <div className="green d-inline align-top">
                            1 2 3 4 5
                          </div>
                          <FontAwesomeIcon
                            className="Heart d-inline  "
                            icon={faFaceGrinHearts}
                          />
                          </span>
                        </Form.Group>
                        <Button
                          className="btn-outline-light btn-lg butt"
                          type="submit"
                          id={i.InsID}
                          onClick={this.rate}
                        >
                          Submit
                        </Button>
                      </Form>
                    )}
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
export default withRouter(Student);
