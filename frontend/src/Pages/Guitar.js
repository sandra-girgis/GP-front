import React from "react";
import "./Piano.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/i4.jpg"
import img2 from "../images/g2.jpg"
import img3 from "../images/g3.jpg"
import img4 from "../images/g5.jpg"
import img5 from "../images/g1.jpg"


export const Guitar = () => { 
  return (<>
  <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 " 
      src="https://media.istockphoto.com/photos/vintage-vinyl-record-playing-on-player-and-acoustic-guitar-on-with-picture-id956587676?k=20&m=956587676&s=612x612&w=0&h=ohV_VrGL_4a838UB8QiiZFi3WwPWxBXGoh6o8TklQG4=" 
      alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}  
       alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="fourth slide"
    />
  </Carousel.Item>
</Carousel>
       <div className="container mt-5 mb-5">
       <h1 className="mb-5  fw-bold display-4"style={{color:"#ee4a8b"}}>About Our Classes</h1>
              <div className="container mb-5 flip-card">
                  <div className="row g-0 ">
                    <div className="col-md-4 border rounded">
                      <img  src="https://media.istockphoto.com/photos/guitar-teacher-teaching-boy-to-play-acoustic-guitar-picture-id1130955921?k=20&m=1130955921&s=612x612&w=0&h=peKXfjkeLmclKQbIGfXLfFJ9Q0AHKXxVDzBpYCn3134="
                      className="img-fluid rounded-start" alt="kids"/>
                    </div>
                    <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                      <div className="card-body">
                        <h5 className="card-title"style={{color:"#168eca"}}>Guitar Classes</h5>
                        <p className="card-text desc">From 6 year sold and above also for Adults 
                        <br></br>With Dina Dawood</p>
                    </div>
                    </div>
                  </div>
              </div>
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                <div className="col-md-6 offset-md-2"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>Why to learn Guitar at Ensan Art?</h5>
                      <p className="card-text desc">    • Highly qualified and friendly instructors<br></br>
    • International Curriculum (ABRSM)<br></br> 
    • Bi-Annual concert</p>
                  </div>
                  </div>
                  <div className="col-md-4 border rounded">
                    <img  src="https://media.istockphoto.com/photos/female-pupil-playing-guitar-in-high-school-orchestra-picture-id498129995?k=20&m=498129995&s=612x612&w=0&h=oqKZBNcoa_YndIOzwyd5JhNyaSKB6gHLzXp5dZaaNy0="
                    className="img-fluid rounded-start" alt="middle age"/>
                  </div>
                </div>
              </div>        
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                  <div className="col-md-4 border rounded">
                    <img  src={img5}
                    className="img-fluid rounded-start" alt="Elderly"/>
                  </div>
                  <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>Benefit of playing classical Guitar:</h5>
                      <p className="card-text desc">   • Improved self-discipline through practicing certain skills over and over<br></br>
    • Stronger connections between left and right brain functions<br></br>
    • Improved right and left hand coordination<br></br>
    • Develops self-discipline</p>

                  </div>
                  </div>
                </div>
              </div>
            </div>
      <div className="container mb-5">
        <h1 className="mb-5 fw-bold display-4" style={{ color: "#ee4a8b" }}>
          About Our Instructors
        </h1>
        <div className="card mb-5 instractor flip-card shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img1}
                className="img-fluid rounded-start rounded-circle"
                style={{ width: "15rem" }}
                alt="instractors"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#ee4a8b" }}>
                  Dina Dawood{" "}
                </h5>
                <p className="card-text desc">
                  Dina Dawood was born in 1991. She started his Studies in
                  Conservatoire de Musique d'Alexandrie first, under the
                  supervision of Mr. Shady Nagy, after that he has been studying
                  with Mr. Karim Frege till now. She finished 5th Grade, in the
                  year of 2017 and 7th Grade in 2019; she also did the 5th Grade
                  ABRSM Music theory exam in 2018. Dina attended and performed
                  in a Masterclass for Classical Guitar of Pawel Kuzuma, David
                  Pavlovits and Chelsea Green in 2015, 2016, and 2018. Dina is
                  now working as a Music teacher in IBCA and a guitar teacher in
                  Bibliotheca Alexandrina and Ensan Art Center.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <button className="btn-outline-light btn-lg fs-2 butt">
            <NavLink className="nav nav-link bu active " exact to={"/joinus"}>
              Join Us
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
