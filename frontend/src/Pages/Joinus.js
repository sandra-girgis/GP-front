import React from "react";
import "./Piano.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export const Joinus = () => { 
  return (<>
          <h3 className='new2 pt-2'style={{color:"#ee4a8b"}}>Send us a message</h3>
          <br></br>
          <Form style={{width:"50%"}} className="mx-auto">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{color:"#168eca"}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{color:"#168eca"}}>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button className="btn-outline-light btn-lg fs-2 butt" style={{backgroundColor:"#168eca"}} type="submit">
            Submit
          </Button>
        </Form>
        <br>
        </br>
      </>
    );
  }



