import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const Addimage = (props) => {
const [picture, setPicture] = useState(null);
const [Album_ID, setAlbum] = useState(null);
const handleChange = (event) => {
    setAlbum({ Album_ID: event.target.value });
};
const [cat, setcat] = useState([]);
const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("Album_ID", parseInt(Album_ID.Album_ID));
    if (picture !== null) {
    formField.append("picture", picture);
    }
    await axios({
    method: "post",
    url: "http://localhost:8000/Ensan/albumPhotos/",
    data: formField,
    })
    props.history.push("/image");
};
useEffect(() => {
    category();
}, []);
const category = async () => {
    await axios({
    method: "get",
    url: "http://localhost:8000/Ensan/albums/",
    }).then((response) => {
    setcat(response.data);
    });
};
return (
    <div className="shado mb-5 pt-3 container">
    <Form>
        <h3 className="new2 pt-2 mb-5 text-center" style={{ color: "#ee4a8b" }}>
        Add Image
        </h3>
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label style={{ color: "#168eca" }}>Album Name</Form.Label>
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
        className="btn-outline-light btn-lg mt-4 mb-4 butt"
        style={{ backgroundColor: "#168eca" }}
        onClick={addNewStudent}
        >
            Submit
        </Button>
    </Form>
    </div>
);
};