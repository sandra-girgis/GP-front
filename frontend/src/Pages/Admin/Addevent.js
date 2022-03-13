// import React from "react";
import "../Piano";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// class Addevent extends Component {

//     state = {
//         details:{
//             title: "",
//             content: "",
//             date: "",
//             picture: "",
//             Category_ID: "",
//         }
//     }
// }
// export default Addevent;

// class Addevent extends Component {
//     constructor(props) {
//       super(props);
//     }

class Addevent extends Component {
  // state = {
  //   details: {
  //     title: "",
  //     content: "",
  //     image: null
  //   },
  constructor(props) {
    super(props);
    // this.handleTitleChange = this.handleTitleChange.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    // this.handleSubjecChange = this.handleSubjectChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);

    this.state = {
      title: "",
      content: "",
      picture: null,
      EventList: [],
    };
  }
  // onImageChange = this.onImageChange.bind(this)
  // };
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }
  onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      this.setState({
        picture: URL.createObjectURL(img),
      });
    }
  };

  addevent = (e) => {
    // fetch('http://localhost:8000/Ensan/persons/',{
    fetch("http://localhost:8000/Ensan/news/", {
      // fetch('http://localhost:8000/Ensan/instructors/',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.details),
    })
      .then((data) => data.json())

      .catch((error) => console.error(error));
  };

  // inputChanged = (event) => {
  //   const det = this.state.details;
  //   det[event.target.name] = event.target.value;
  //   this.setState({ details: det });
  // };
  componentDidMount() {
    this.addevent();
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      content: this.state.content,
    };
  }

  render() {
    const { EventList } = this.state;

    return (
      <div className="shado mb-5 pt-3 container">
        <Form>
          <h3
            className="new2 pt-2 mb-5 text-center"
            style={{ color: "#ee4a8b" }}
          >
            Add Event
          </h3>

          <Form.Group
            className="mb-3 mt-5"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label style={{ color: "#168eca" }}>title </Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              onChange={this.onChangeTitle}
              value={this.state.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: "#168eca" }}>content </Form.Label>
            <Form.Control
              as="textarea"
              rows={7}
              value={this.state.content}
              onChange={this.onChangeContent}
            />
          </Form.Group>

          {/* <div className="mb-1">
                  Image 
                  <span className="font-css top">*</span>
                  <div className="">
                      <input type="file" id="file-input" name="ImageStyle"/>
                  </div>
              </div>  */}
          <div>
            <img src={this.state.image} alt="..." />
            <h1>Select Image</h1>
            <input type="file" onChange={this.onImageChange} />
          </div>
          <Button className="btn-outline-light btn-lg ms-5 mb-5 butt">
            <NavLink className="nav nav-link bu active " exact to={"/event"}>
              Submit
            </NavLink>
          </Button>
        </Form>
      </div>
    );
  }
}
export default Addevent;
