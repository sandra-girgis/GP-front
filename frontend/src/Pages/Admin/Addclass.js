import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import TimeField from "react-simple-timefield";

export const Addclass = (props) => {
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const [title, settitle] = useState(null);
const [content, setcontent] = useState(null);
const [fromTime, setfromTime] = useState();
const [toTime, settoTime] = useState();
const [day, setday] = useState(null);
const [Category_ID, setCategory_ID] = useState(null);
const [Instructor_ID, setInstructor_ID] = useState(null);

const [Instructor, setinstructor] = useState([]);
const [cat, setcat] = useState([]);

const cathandleChange = (event) => {
    setCategory_ID({ Category_ID: event.target.value });
};
const insHandleChange = (event) => {
    setInstructor_ID({ Instructor_ID: event.target.value });
};
const addNewStudent = async () => {
    let formField = new FormData();
    formField.append("title", title);
    formField.append("content", content);
    formField.append("fromTime", fromTime);
    formField.append("toTime", toTime);
    formField.append("day", day);
    formField.append("Category_ID", parseInt(Category_ID.Category_ID));
    formField.append("Instructor_ID", parseInt(Instructor_ID.Instructor_ID));
    await axios({
    method: "post",
    url: "http://localhost:8000/Ensan/classes/",
    data: formField,
    });
    props.history.push("/class");
};
useEffect(() => {
    instructor();
    category();
}, []);
const instructor = async () => {
    await axios({
    method: "get",
    url: "http://localhost:8000/Ensan/instructors/",
    }).then((response) => {
    setinstructor(response.data);
    });
};
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
        Add Class
        </h3>
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label style={{ color: "#168eca" }}>title </Form.Label>
        <Form.Control
            as="input"
            rows={1}
            name="title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ color: "#168eca" }}>content </Form.Label>
        <Form.Control
            as="textarea"
            rows={7}
            name="content"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
        />
        </Form.Group>
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea2"
        >
        <Form.Label style={{ color: "#168eca" }}>Category</Form.Label>
        <Form.Control as="select" multiple onChange={cathandleChange}>
            {cat.map((options) => (
            <option key={options.id} value={options.id}>
                {options.name}
            </option>
            ))}
        </Form.Control>
        </Form.Group>
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label style={{ color: "#168eca" }}>Instructor</Form.Label>
        <Form.Control as="select" multiple onChange={insHandleChange}>
            {Instructor.map((item) => (
            <option key={item.id} value={item.id}>
                {item.username}
            </option>
            ))}
        </Form.Control>
        </Form.Group>
        <Form.Group
        className="mb-3 row"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label className="col-1 py-2" style={{ color: "#168eca" }}>
            From
        </Form.Label>
        <TimeField
            className="form-control col-3"
            style={{ width: "15vw" }}
            required
            name="fromTime"
            format="00:00"
            onChange={(e) => setfromTime(e.target.value)}
            colon=":" 
        />
        </Form.Group>
        <Form.Group
        className="mb-3 row"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label className="col-1 py-2" style={{ color: "#168eca" }}>
            To
        </Form.Label>
        <TimeField
            className="form-control col-3"
            style={{ width: "15vw" }}
            value={toTime}
            required
            name="toTime"
            format="00:00" // {String}   required, format '00:00' or '00:00:00'
            onChange={(e) => settoTime(e.target.value)} // {Function} required
            colon=":" // {String}   default: ":"                              // {Boolean}  default: false
        />
        </Form.Group>
        <Form.Group
        className="mb-3 mt-5"
        controlId="exampleForm.ControlTextarea1"
        >
        <Form.Label style={{ color: "#168eca" }}>Day</Form.Label>
        <Form.Control
            as="select"
            multiple
            onChange={(e) => setday(e.target.value)}
        >
            {days.map((i, index) => (
            <option key={index} value={i}>
                {i}
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
};
