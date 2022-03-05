import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./Piano.css";
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/home.jpg"
// import img2 from "../images/4.jpg"
import img3 from "../images/v2.jpg"
import img4 from "../images/k6.jpg"
import img5 from "../images/c2.jpg"

export const Home =() =>{
  return (<>

<div className="boback">
<Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100" src="https://media.istockphoto.com/photos/children-doing-autumn-handcrafts-picture-id1168454133?k=20&m=1168454133&s=612x612&w=0&h=v9aCQ4OwzW8V44rVCPBmcraNx8iETRpfePH9KrTSTZM="
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"src={img4}alt="First slide"/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100" src={img5}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br></br>
<h3 className='new2 pt-2'style={{color:"#f1552d"}}>About Our News</h3>
<br></br>
<div className="container col-md-11" >
          <div className="row g-0 ">
            <div className="col-md-5">
              <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
              className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#168eca"}}>News</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="col-4 text-center"><button style={{backgroundColor:"#168eca"}} className="btn btn-outline-light " > <NavLink className="nav nav-link active colorr" exact to={"/news"}>Show All News</NavLink>
                </button></div>
            </div>
            </div>
          </div>
        </div>
  <br></br>
  <hr></hr>
  <h3 className='new2 pt-2'style={{color:"#f1552d"}}>Send us a message</h3>
  <br></br>
  <Form style={{width:"50%"}} className="mx-auto">
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label style={{color:"#ee4a8b"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label style={{color:"#ee4a8b"}}>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button style={{backgroundColor:"#168eca"}} type="submit">
    Submit
  </Button>
</Form>
<br>
</br>
</div>

  </>
  );
}