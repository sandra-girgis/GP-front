import React from "react";
import "./Piano.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export const Joinus = () => { 
  return (<>
          <h3 className='new2 pt-2 mb-5'style={{color:"#ee4a8b"}}>Send us a message</h3>
          <div className="shadow container mt-3" style={{ height:"20rem"}}>
          <Form style={{width:"50%"}} className="mx-auto mt-3">
          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
            <Form.Label style={{color:"#168eca"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{color:"#168eca"}}>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className="btn-outline-light btn-lg  butt" style={{backgroundColor:"#168eca"}} type="submit">
            Submit
          </Button>
        </Form>
        </div>
        <div className="mb-5"></div>
      </>
    );
  }



