import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import "./Piano.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init("2DgWwUj_l6OTusFnD");

export const Joinus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d8igfor",
        "template_vgss0wj",
        form.current,
        "2DgWwUj_l6OTusFnD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="justify-content-center mb-5 row">
        <div className="card shado col-md-5 p-5 mt-5 mb-5">
          <h1 style={{ color: "#ee4a8b" }}>Send us a message</h1>
          <Form className=" mt-3" ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#168eca" }}>Name</Form.Label>
              <Form.Control type="text" name="name" />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#168eca" }}>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "#168eca" }}>Message</Form.Label>
              <Form.Control name="message" as="textarea" rows={3} />
            </Form.Group>
            <Button
              className="btn-outline-light btn-lg butt"
              type="submit"
              value="Send"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};