import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const Addstudent = (props) => {
const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);
const [email, setEmail] = useState(null);
const [phoneNumber, setPhoneNumber] = useState(null);
const [ClassName, setClass] = useState(null);
const [PaymentStatus, setPaymentStatus] = useState(null);

const handleChange = (event) => {
    setClass({ ClassName: event.target.value });
};
const [cat, setcat] = useState([]);
const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("username", username);
    formField.append("password", password);
    formField.append("email", email);
    formField.append("phoneNumber", phoneNumber);
    formField.append("is_staff", false);
    let formField2 = new FormData();
    formField2.append("paymentStatus", PaymentStatus);
    formField2.append("Class_ID",parseInt(ClassName.ClassName));

    await axios({
    method: "post",
    url: "http://localhost:8000/Ensan/students/",
    data: formField,
    }).then((response) => {
        formField2.append("Student_ID", parseInt(response.data.id));
    });

    await axios({
        method: "post",
        url: "http://localhost:8000/Ensan/attend/",
        data: formField2,
        }).then((response) => {
        console.log(response);
        });
    props.history.push("/students");
};
useEffect(() => {
    classes();
}, []);
const classes = async () => {
    await axios({
    method: "get",
    url: "http://localhost:8000/Ensan/classes/",
    }).then((response) => {
    setcat(response.data);
    });
};

return (
    <div className="shado mb-5 pt-3 container">
    <Form>
        <h3 className="new2 pt-2 mb-5 text-center" style={{ color: "#ee4a8b" }}>
        Add Student
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
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label style={{ color: "#168eca" }}>Class </Form.Label>
        <Form.Control as="select" multiple onChange={handleChange}>
            {cat.map((options) => (
            <option key={options.id} value={parseInt(options.id)}>
                {options.title}
            </option>
            ))}
        </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        style={{ color: "#168eca" }}
                        type="checkbox"
                        label="Paid"
                        // value={PaymentStatus}
                        name="PaymentStatus"
                        defaultChecked={PaymentStatus}
                        onChange={() => setPaymentStatus(!PaymentStatus)}
                        // onChange={(e) => setPaymentStatus(e.target.value)}
                    />
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
};