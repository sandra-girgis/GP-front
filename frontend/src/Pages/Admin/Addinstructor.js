// import React from "react";
import "../Piano";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";

// class Addinstructor extends Component {

//     state = {
//         details:{
// Instructors-Name: "",
//  Is-Staff: "",
//  Email: "",
//             Phone-Number: "",
//  Courses: "",
//   image:"",
//             salary:"",
//             Bio:"",
// //         }
//     }
// }
// export default Addinstructor;

export const Addinstructor = () => {
    const[disable,setDisable]= useState(false)
    const schema = yup.object().shape({
        iName: yup.string().required(),
        iEmail: yup.string().required().email(),
        iPhoneNumber: yup.string().required(),
        iBio: yup.string().required(),
        iCourses: yup.string().required(),
        iSalary: yup.string().required()
    });

    const handleChange = (e) => {
        if(e.target.value.length>=6){
            setDisable({disable:true})
        }
    }

 return (
    <>
    <div className="shado mb-5 pt-3 container">
        <Formik 
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            iName:"",
            iEmail:"",
            iPhoneNumber:"",
            iBio:"",
            iCourses:"",
            iSalary:""
        }}
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
        <h3
            className="new2 pt-2 mb-5 text-center"
            style={{ color: "#ee4a8b" }}
        >
            {" "}
            Add Instructor{" "}
        </h3>
        <Form.Group
            className="mb-3 mt-5"
            controlId="validationFormik01"
        >
            <Form.Label style={{ color: "#168eca" }}>
            Instructor's Name
            </Form.Label>
            <Form.Control 
              type="text"
              name="iName"
              placeholder="Enter Your Name"
              value={values.iName}
              onChange={handleChange}
              isValid={touched.iName && !errors.iName}
              isInvalid={!!errors.iName}
            />
            <Form.Control.Feedback type="invalid">
                {errors.iName}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationFormik02">
            <Form.Label style={{ color: "#168eca" }}>Email Address</Form.Label>
            <Form.Control
                type="email"
                name="iEmail"
                placeholder="Enter Your Email"
                value={values.iEmail}
                onChange={handleChange}
                isInvalid={!!errors.iEmail}
                isValid={touched.iEmail && !errors.iEmail}
            />
            <Form.Control.Feedback type="invalid">
                {errors.iEmail}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
            <Form.Label style={{ color: "#168eca" }}>Phone Number</Form.Label>
            <Form.Control type="text"
              name="iPhoneNumber"
              placeholder="Enter Your Phone"
              value={values.iPhoneNumber}
              onChange={handleChange}
              isValid={touched.iPhoneNumber && !errors.iPhoneNumber}
              isInvalid={!!errors.iPhoneNumber}
            />
            <Form.Control.Feedback type="invalid">
                {errors.iPhoneNumber}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: "#168eca" }}>Bio</Form.Label>
            <Form.Control type="text"
              name="iBio"
              placeholder="Enter Your Bio"
              value={values.iBio}
              onChange={handleChange}
              isValid={touched.iBio && !errors.iBio}
              isInvalid={!!errors.iBio}
            />
            <Form.Control.Feedback type="invalid">
                {errors.iBio}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: "#168eca" }}>Courses</Form.Label>
            <Form.Control type="text"
              name="iCourses"
              placeholder="Enter Your Course"
              value={values.iCourses}
              onChange={handleChange}
              isValid={touched.iCourses && !errors.iCourses}
              isInvalid={!!errors.iCourses}
            />
            <Form.Control.Feedback type="invalid">
                {errors.iCourses}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlNumber">
            <Form.Label style={{ color: "#168eca" }}>salary</Form.Label>
            <Form.Control type="text"
              name="iSalary"
              placeholder="Enter Your Salary"
              value={values.iSalary}
              onChange={handleChange}
              isValid={touched.iSalary && !errors.iSalary}
              isInvalid={!!errors.iSalary}
            />
            <Form.Control.Feedback type="invalid">
                {errors.iSalary}
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
            style={{ color: "#168eca" }}
            type="checkbox"
            label="Is Staff"
            />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="exampleForm.uploadimage">
                <Form.Control action="/action_page.php"><label for="img" Select 
                image:type="file" id="img" name="img" accept="image/*" ></label>
                </Form.Control >
    </Form.Group> */}

        {/* <Button onClick={onImageRemoveAll}>Remove all images</Button>
                {imageList.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                    <Button onClick={() => onImageUpdate(index)}>Update</Button>
                    <Button onClick={() => onImageRemove(index)}>Remove</Button> */}

        <Button className="btn-outline-light btn-lg ms-5 mb-5 butt" disabled={disable}>
            <NavLink
            className="nav nav-link bu active "
            exact
            to={"/instructors"}
            >
            Submit
            </NavLink>
        </Button>
        </Form>
        )}
        </Formik>
    </div>
    </>
);
};
