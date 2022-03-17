import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
export const Addevent = (props) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [Category_ID, setCategory] = useState(null);
  const handleChange = (event) => {
    setCategory({ Category_ID: event.target.value });
  };
  const [cat, setcat] = useState([]);
  const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("title", title);
    formField.append("content", content);
    formField.append("Category_ID", Category_ID.Category_ID);
    if (picture !== null) {
      formField.append("picture", picture);
    }
    await axios({
      method: "post",
      url: "http://localhost:8000/Ensan/news/",
      data: formField,
    }).then((response) => {
      console.log(response);
    });
    props.history.push("/event");
  };
  useEffect(() => {
    category();
  }, []);
  const category = async () => {
    await axios({
      method: "get",
      url: "http://localhost:8000/Ensan/category/",
    }).then((response) => {
      setcat(response.data);
    });
  };
  return (
    <div className="shado mb-5 pt-3 container">
      <Form>
        <h3 className="new2 pt-2 mb-5 text-center" style={{ color: "#ee4a8b" }}>
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
            // onChange={this.onChangeTitle}
            // value={this.state.title}
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ color: "#168eca" }}>content </Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 mt-5"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label style={{ color: "#168eca" }}>Category </Form.Label>
          <Form.Control as="select" multiple onChange={handleChange}>
            {cat.map((options) => (
              <option key={options.id} value={parseInt(options.id)}>
                {options.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setPicture(e.target.files[0])}
        />
        <Button
          className="btn-outline-light btn-lg ms-5 mb-5 butt"
          style={{ backgroundColor: "#168eca" }}
          onClick={addNewStudent}
        >
            Submit
        </Button>
      </Form>
    </div>
  );
};