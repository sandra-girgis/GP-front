import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Piano.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faRegStar } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import img1 from "../images/home.jpg";
import img3 from "../images/v2.jpg";
import img4 from "../images/k6.jpg";
import img5 from "../images/c2.jpg";


export const Home = () => {
  return (
    <>
      <div className="boback">
        <Carousel>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="fs-5" >
                Ensan Art was established in 2012, it is one of the leading Arts
                schools in Egypt. Our center takes 
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/children-doing-autumn-handcrafts-picture-id1168454133?k=20&m=1168454133&s=612x612&w=0&h=v9aCQ4OwzW8V44rVCPBmcraNx8iETRpfePH9KrTSTZM="
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="fs-5" style={{ color: "#000000" }} >
              pride in providing drawing classes, music lessons, and ballet courses for kids and adults.
              </h3>
            </Carousel.Caption>
           
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
            <h3 className="fs-5">
                Our music courses help our students to learn, read and
                understand notes, learn theory, and training.
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img4} alt="First slide" />
            <Carousel.Caption>
              <h3 className="fs-5" style={{ color: "#000000" }}>
              We are also a registered institution to the prestigious ABRSM and Trinity of London
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img5} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <h2 className="text-center pt-2 fw-bold" style={{ color: "#ee4a8b" }}>
          Our Events
        </h2>
        <br></br>
        <div className="container col-md-12 flip-card shadow px-0">
          <div className="row g-0 ">
            <div className="col-md-5">
              <img
                src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
                className="img-fluid rounded-start"
                alt="event"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ color: "#168eca" }}>
                  News
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="col-3  butt">
                  <NavLink className="show btn bu" exact to={"/news"}>
                    All Events{" "}
                    <FontAwesomeIcon className="" icon={faAngleDoubleRight} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="container my-5">
          <marquee loop width="10%"></marquee>
          <marquee loop vspace="20" direction="up" scrollamount="10" width="35%">
            <div className="row">
              <div className=" row mb-3">
                <div className="san1"></div>
              </div>
              <div className=" row mb-3">
                <div className="san2"></div>
              </div>
              <div className=" row mb-3">
                <div className="san3"></div>
              </div>
              <div className=" row mb-3">
                <div className="san4"></div>
              </div>
            </div>
          </marquee>
          <marquee loop width="10%"></marquee>
          <marquee loop vspace="20" direction="down" scrollamount="10" width="35%">
            <div className="row">
              <div className="row mb-3">
                <div className="san5"></div>
              </div>
              <div className="row mb-3">
                <div className="san6"></div>
              </div>
              <div className="row mb-3">
                <div className="san7"></div>
              </div>
              <div className="row mb-3">
                <div className="san8"></div>
              </div>
            </div>
          </marquee>
        </div> 
      </div>
    </>
  );
};