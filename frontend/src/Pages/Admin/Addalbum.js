import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const Addalbum = (props) => {
const [name, setName] = useState(null);
const [Collection_ID, setCollection] = useState(null);
const handleChange = (event) => {
    setCollection({ Collection_ID: event.target.value });
};
const [cat, setcat] = useState([]);
const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("name", name.replaceAll(" ", "_"));
    formField.append("Collection_ID", parseInt(Collection_ID.Collection_ID));
    await axios({
    method: "post",
    url: "http://localhost:8000/Ensan/albums/",
    data: formField,
    })
    props.history.push("/event");
};

useEffect(() => {
    collection();
}, []);
const collection = async () => {
    await axios({
    method: "get",
    url: "http://localhost:8000/Ensan/collections/",
    }).then((response) => {
    setcat(response.data);
    });
};
return (
    <div className="shado mb-5 pt-3 container">
    <Form>
        <h3 className="new2 pt-2 mb-5 text-center" style={{ color: "#ee4a8b" }}>
        Add Album
        </h3>
        <Form.Group
          className="mb-3 mt-5"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label style={{ color: "#168eca" }}>Album Name </Form.Label>
          <Form.Control
            as="input"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label style={{ color: "#168eca" }}>Collection Name</Form.Label>
        <Form.Control as="select" multiple onChange={handleChange}>
            {cat.map((options) => (
            <option key={options.id} value={parseInt(options.id)}>
                {options.name}
            </option>
            ))}
        </Form.Control>
        </Form.Group>
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
}
