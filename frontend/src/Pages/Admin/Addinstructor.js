import React, { useState,useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const Addinstructor = (props) => {
const [picture, setPicture] = useState(null);
const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);
const [email, setEmail] = useState(null);
const [phoneNumber, setPhoneNumber] = useState(null);
const [salary, setSalary] = useState(null);
const [bio, setBio] = useState(null);

const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("username", username);
    formField.append("password", password);
    formField.append("email", email);
    formField.append("phoneNumber", phoneNumber);
    formField.append("salary", salary);
    formField.append("bio", bio);
    formField.append("is_staff", true);
    if (picture !== null) {
    formField.append("picture", picture);
    }
    await axios({
    method: "post",
    url: "http://localhost:8000/Ensan/instructors/",
    data: formField,
    })
    props.history.push("/instructors");
};
return (
    <div className="shado mb-5 pt-3 container">
    <Form>
        <h3 className="new2 pt-2 mb-5 text-center" style={{ color: "#ee4a8b" }}>
        Add Instructor
        </h3>
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label style={{ color: "#168eca" }}>Instructor Name</Form.Label>
        <Form.Control
            as="input"
            placeholder="Enter Instructor Name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ color: "#168eca" }}>Email address </Form.Label>
        <Form.Control
            type="email"
            placeholder="Enter email"
            as="input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ color: "#168eca" }}>Password</Form.Label>
        <Form.Control
            as="input"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
        <Form.Label style={{ color: "#168eca" }}>Phone Number</Form.Label>
        <Form.Control
            as="input"
            type="text"
            placeholder="Enter Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ color: "#168eca" }}>Bio</Form.Label>
        <Form.Control
            as="textarea"
            rows={7}
            type="text"
            placeholder="Enter Bio"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
        <Form.Label style={{ color: "#168eca" }}>salary</Form.Label>
        <Form.Control
            as="input"
            rows={1}
            type="number"
            placeholder="Enter Salary"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
        />
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