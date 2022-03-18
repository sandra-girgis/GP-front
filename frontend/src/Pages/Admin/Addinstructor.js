import React, { useState, useEffect } from "react";
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
    formField.append("username", formValues.username);
    formField.append("password", formValues.password);
    formField.append("email", formValues.email);
    formField.append("phoneNumber", formValues.phoneNumber);
    formField.append("salary", formValues.salary);
    formField.append("bio", formValues.bio);
    formField.append("is_staff", true);
    if (picture !== null) {
    formField.append("picture", formValues.picture);
    }
    await axios({
    method: "post",
    url: "http://localhost:8000/Ensan/instructors/",
    data: formField,
    }).then((response) => {
    console.log(response);
    });
    props.history.push("/instructors");
};

const initialValues = {username: "", email: "", password: "", phoneNumber:"", salary:"", bio:"", picture:""};
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
//    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
};

const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
};

useEffect(() => {
    console.log(formErrors)
    if(isSubmit){
        console.log(formValues);
        //setEmail(formValues.email)
        addNewStudent();
    }
},[formErrors])

const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
        errors.username = "Username is required.";
    }
    if(!values.email){
        errors.email = "Email is required.";
    }
    if(!values.password){
        errors.password = "Password is required.";
    }
    return errors;
};

return (
    <div className="shado mb-5 pt-3 container">
    <Form onSubmit={handleSubmit}>
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
            //value={username}
            //onChange={(e) => setUsername(e.target.value)}
            value={formValues.username}
            onChange={handleChange}
        />
        <p>{ formErrors.username }</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ color: "#168eca" }}>Email address </Form.Label>
        <Form.Control
            type="email"
            placeholder="Enter email"
            as="input"
            name="email"
            //value={email}
           // onChange={(e) => setEmail(e.target.value)}
           value={formValues.email}
           onChange={handleChange}
        />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        <p>{ formErrors.email }</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ color: "#168eca" }}>Password</Form.Label>
        <Form.Control
            as="input"
            placeholder="Enter Password"
            name="password"
            //value={password}
            //onChange={(e) => setPassword(e.target.value)}
            value={formValues.password}
            onChange={handleChange}
        />
        <p>{ formErrors.password }</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
        <Form.Label style={{ color: "#168eca" }}>Phone Number</Form.Label>
        <Form.Control
            as="input"
            type="text"
            placeholder="Enter Phone Number"
            name="phoneNumber"
            value={formValues.phoneNumber}
            //onChange={(e) => setPhoneNumber(e.target.value)}
            
            onChange={handleChange}
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
            value={formValues.bio}
            //onChange={(e) => setBio(e.target.value)}
            onChange={handleChange}
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
            value={formValues.salary}
            //onChange={(e) => setSalary(e.target.value)}
            onChange={handleChange}
        />
        </Form.Group>
        <input
        type="file"
        className="form-control"
        //onChange={(e) => setPicture(e.target.files[0])}
        onChange={handleChange}
        //value = {formValues.picture}
        />
        <Button
        className="btn-outline-light btn-lg ms-5 mb-5 butt"
        style={{ backgroundColor: "#168eca" }}
        //onClick={addNewStudent}
        >
            Submit
        </Button>
    </Form>
    </div>
);
};