import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./Piano.css";
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../images/home.jpg"
// import img2 from "../images/4.jpg"
import img6 from "../images/12.jpg"
import img3 from "../images/v2.jpg"
import img4 from "../images/k6.jpg"
import img5 from "../images/c2.jpg"
import img7 from "../images/kkids.jpg"
import img8 from "../images/v1.jpg"
import img9 from "../images/5.jpg"





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
<h3 className='new2 pt-2 fw-bold'style={{color:"#f1552d"}}>Our Events</h3>
<br></br>
<div className="container col-md-12 flip-card shadow ">
          <div className="row g-0 ">
            <div className="col-md-5">
              <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
              className="img-fluid rounded-start" alt="event"/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title fw-bold"style={{color:"#168eca"}}>News</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="col-4 text-center"> <NavLink className="nav  btn  nav-link butt active " exact to={"/news"}>Show All News</NavLink>
               </div>
              {/* <div className="col-4 text-center"><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" /><NavLink className="nav nav-link active colorr" exact to={"/news"}>Show All News</NavLink> */}
               {/* </div> */}
            </div>
            </div>
          </div>
        </div>
  <br></br>
  {/* <hr></hr>
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
</br> */}

<div className="container mt-5  mb-5 justify-content-center">
<div className="row">
  <div className="flip-box col-md-3 me-md-5">
    <div className="flip-box-inner mb-5">
      <div className="flip-box-front">
        <img src={img9} alt="Paris" className="img"/>
      </div>
      <div className="flip-box-back">
        <img src={img7} alt="Paris" className="img"/>
      </div>
    </div>
  </div>
  <div className="flip-box col-md-3 me-md-5">
    <div className="flip-box-inner mb-5">
      <div className="flip-box-front">
        <img src={img9} alt="Paris" className="img"/>
      </div>
      <div className="flip-box-back">
        <img src={img6} alt="Paris" className="img"/>
      </div>
    </div>
  </div>
    <div className="flip-box col-md-3 me-md-5">
    <div className="flip-box-inner mb-5">
      <div className="flip-box-front ">
        <img src={img9} alt="Paris" className="img"/>
      </div>
      <div className="flip-box-back ">
        <img src={img7} alt="Paris" className="img"/>
      </div>
    </div>
  </div>
  <div className="flip-box col-md-3">
    <div className="flip-box-inner mb-5">
      <div className="flip-box-front ">
        <img src={img9} alt="Paris" className="img"/>
      </div>
      <div className="flip-box-back ">
        <img src={img6} alt="Paris" className="img"/>
      </div>
    </div>
  </div>
</div>
  </div>





















{/* <div className="card-deck row container  mt-5 mb-5 ">
  <div className=" col-md-6 flip-box-inner  rounded-start">
    <div className='flip-box-front'>
    <img  src="https://media.istockphoto.com/photos/little-ballerinas-in-ballet-studio-picture-id1161652373?k=20&m=1161652373&s=612x612&w=0&h=8xIBoeahwR8G6RRrLGmj9ACtpCaM0sO5uD6NfuLvQQg="/>
    </div>
    <div className='flip-box-back'>
    <img  src={img8} alt="Card image cap"/>
    </div> 
  </div>
  <div className=" col-md-6  flip-box-inner flipp mb-lg-5  rounded-start">
    <div className='flip-box-front'>
    <img  src={img9}/>
    </div>
    <div className='flip-box-back'>
    <img  src="https://media.istockphoto.com/photos/guitar-teacher-teaching-boy-to-play-acoustic-guitar-picture-id1130955921?k=20&m=1130955921&s=612x612&w=0&h=peKXfjkeLmclKQbIGfXLfFJ9Q0AHKXxVDzBpYCn3134=" alt="Card image cap"/>
    </div> 
  </div> */}
  {/* <div className="flip-box col-md-6 ml-5">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src={img7} alt="kids" 
        />
      </div>
      <div className="flip-box-back">
        <img src={img6} alt="kids" />
      </div>
    </div>
  </div> */}





  {/* <div className="flip-box col-md-6 ml-5">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src={img7}alt="Paris" 
        />
      </div>
      <div className="flip-box-back">
        <img src={img6} alt="kan" style={{width:"200px;"}}/>
      </div>
    </div>
  </div>
  <div className="flip-box col-md-6">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src={img7} alt="Paris" style={{width:"200px;"}}/>
      </div>
      <div className="flip-box-back">
        <img src={img6} alt="Paris" style={{width:"200px;"}}/>
      </div>
    </div>
  </div>
  </div>
  <div className="row">
    <div className="flip-box col-md-6">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src={img7}  alt="Paris"/>
      </div>
      <div className="flip-box-back">
        <img src={img6} alt="Paris" />
      </div>
    </div>
  </div>
  <div className="flip-box col-md-6">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src={img7} alt="Paris"/>
      </div>
      <div className="flip-box-back">
        <img src={img6}  alt="Paris" />
      </div>
    </div>
  </div> */}
  






{/* </div> */}





















































{/* <div className="card-group container mb-5 flipp">
  <div className="card">
    <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c=" alt="Card image cap"/>
  </div>
  <div className="card">
    <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c=" alt="Card image cap"/>
  </div>
</div>

<div className="card-group  container mb-5 flip-box">
  <div className="card">
    <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c=" alt="Card image cap"/>
  </div>
  <div className="card">
    <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c=" alt="Card image cap"/>
  </div>
  </div> */}






{/* <div className="container-fluid row mb-lg-5 ml-5">
  <div className="flip-box col-md-6 ml-5">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src="img_paris.jpg" alt="Paris" 
        />
      </div>
      <div className="flip-box-back">
        <img src="img_5terre_wide.jpg" alt="kan" style={{width:"200px;"}}/>
      </div>
    </div>
  </div>
  <div className="flip-box col-md-6">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src="img_paris.jpg" alt="Paris" style={{width:"200px;"}}/>
      </div>
      <div className="flip-box-back">
        <img src="img_5terre_wide.jpg" alt="Paris" style={{width:"200px;"}}/>
      </div>
    </div>
  </div>
  </div>
  <div className="row">
    <div className="flip-box col-md-6">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src="img_paris.jpg" alt="Paris" style={{width:"200px;"}}/>
      </div>
      <div className="flip-box-back">
        <img src="img_5terre_wide.jpg" alt="Paris" style={{width:"200px;"}}/>
      </div>
    </div>
  </div>
  <div className="flip-box col-md-6">
    <div className="flip-box-inner">
      <div className="flip-box-front">
        <img src="img_paris.jpg" alt="Paris" style={{width:"200px;"}}/>
      </div>
      <div className="flip-box-back">
        <img src="img_5terre_wide.jpg" alt="Paris" style={{width:"200px;"}}/>
      </div>
    </div>
  </div>
</div> */}










{/* <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c=" 
    classNameName="img-fluid rounded-start  flipp" alt="..."/>  */}


</div>

  </>
  );
}