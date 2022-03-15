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
    };
  }
  async componentDidMount() {
    try {
      const InstructorRes = await fetch(
        `http://localhost:8000/Ensan/students/${sessionStorage.id}/`
      );
      const InstructorList = await InstructorRes.json();
      const ins = await InstructorList.attend;
      this.setState({
        InstructorList,
        ins,
      });
    } catch (e) {
      console.log(e);
    }
  }
  update = () => {
    this.props.history.push("/passtd");
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
    }).then((response) => {
      console.log(response);
    });
  };
  render() {
    const instructor = this.state.InstructorList;
    const ins = this.state.ins;
    return (
      <>
        <div className="ins_header">
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            className="mt-5 ms-5 ins_image"
            alt="..."
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
                        Instructor's Rate : {i.Rating}
                        <FontAwesomeIcon className="star" icon={faStar} />
                      </Card.Text>
                    ) : (
                      <Form className="g-5 mt-3">
                        <Form.Label style={{ color: "#168eca" }}>
                          Rate
                        </Form.Label>
                        <Form.Group
                          className=" mb-3 "
                          controlId="exampleForm.ControlInput1"
                        >
                          <FontAwesomeIcon
                            className="Angry "
                            icon={faFaceSadTear}
                          />
                          <input
                            className="form-control g-1 col-5"
                            type="number"
                            name="stars"
                            value={this.state.stars}
                            onChange={this.change}
                            placeholder="Rate your instructor from 1 to 5"
                          />
                          <FontAwesomeIcon
                            className="Heart "
                            icon={faFaceGrinHearts}
                          />
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
