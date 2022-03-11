import React from "react";
import "./Piano.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Joinus = () => {
  return (
    <>
      {/* <h3 className="new2 pt-2 mb-5" style={{ color: "#ee4a8b" }}>
        Send us a message
      </h3>
      <div className="shado container pt-4 mt-3" style={{ height: "25rem" }}> */}
      
      <div className="justify-content-center mb-5 row">
        <div className="card shado col-md-5 p-5 mt-5 mb-5">
          <h1 style={{ color: "#ee4a8b" }}>Send us a message</h1>
          <Form className=" mt-3">
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#168eca" }}>
                Email address
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "#168eca" }}>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
              className="btn-outline-light btn-lg butt"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
      {/* <div className="mb-5"></div> */}
    </>
  );
};
