import React from "react";
import "./Piano.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/i10.jpg";
export const Ballet = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://images.unsplash.com/photo-1598255539863-122cca274e15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbGxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/rehearsal-in-childrens-ballet-studio-picture-id1071207976?k=20&m=1071207976&s=612x612&w=0&h=4dVx2LfpcZfQ57_4IfSI2iKqbUen6Vhlhft29tQa5lw="
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/beautiful-legs-of-dancer-in-pointe-picture-id540375066?k=20&m=540375066&s=612x612&w=0&h=wDinAgkWrsA0DpNso-aM76WSIvvd3O1eV5zxiF_Z70I="
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="container mt-5 mb-5">
        <h1 className="mb-5 fw-bold display-4" style={{ color: "#ee4a8b" }}>
          {" "}
          About Our Classes
        </h1>
        <div className="container mb-5 flip-card">
          <div className="row g-0 ">
            <div className="col-md-4 border rounded">
              <img
                src="https://media.istockphoto.com/photos/little-ballerinas-in-ballet-studio-picture-id1161652373?k=20&m=1161652373&s=612x612&w=0&h=8xIBoeahwR8G6RRrLGmj9ACtpCaM0sO5uD6NfuLvQQg="
                className="img-fluid rounded-start"
                alt="kids"
              />
            </div>
            <div className="col-md-6" style={{ backgroundColor: "#fff2f7" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#168eca" }}>
                  Ballet Classes{" "}
                </h5>
                <p className="card-text desc">
                  from 4 years old and above<br></br> with Dr. Tahany Hassan.
                  (group classes from 15 students)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5 flip-card">
          <div className="row g-0 ">
            <div
              className="col-md-6 offset-md-2"
              style={{ backgroundColor: "#fff2f7" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#168eca" }}>
                  Why to learn Ballet at Ensan Art?
                </h5>
                <p className="card-text desc">
                  {" "}
                  • Highly qualified and friendly Ballet instructors<br></br>•
                  Annual Student Performance
                </p>
              </div>
            </div>
            <div className="col-md-4 border  rounded">
              <img
                src="https://media.istockphoto.com/photos/mature-female-ballet-teacher-demonstrating-dancing-moves-in-front-of-picture-id1146322678?k=20&m=1146322678&s=612x612&w=0&h=R_YL0zQB4_m23eRJnvfxSDDwUaKZNv1u26Cnz6bwUkE="
                className="img-fluid rounded-start"
                alt="middle age"
              />
            </div>
          </div>
        </div>
        <div className="container mb-5 flip-card">
          <div className="row g-0 ">
            <div className="col-md-4 border rounded">
              <img
                src="https://media.istockphoto.com/photos/group-of-ballerinas-on-ballet-class-picture-id1144347933?k=20&m=1144347933&s=612x612&w=0&h=ePIvveM1FFEhVgi4hXiacurn464Rj_CDVmWDwXEmaeo="
                className="img-fluid rounded-start"
                alt="Elderly"
              />
            </div>
            <div className="col-md-6" style={{ backgroundColor: "#fff2f7" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#168eca" }}>
                  Benefit of dancing Ballet:{" "}
                </h5>
                <p className="card-text desc">
                  {" "}
                  • Ballet makes us understand our body better<br></br>• It
                  teaches flexibility, poise and grace<br></br>• Builds strong
                  lean muscles<br></br>• Gives one a good grounding technique
                  <br></br>• Better appreciate rhythm and music<br></br>•
                  Qualified and Friendly Instructors
                </p>
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
                className="img-fluid rounded-start rounded-circle flut"
                style={{ width: "15rem" }}
                alt="instractors"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#ee4a8b" }}>
                Dr. Tahany Hassan 
                </h5>
                <p className="card-text desc">
                
Dancer in the Cairo Opera Ballet Troupe since 89.
She holds a Ph.D. from the Higher Institute of Ballet - Academy of Arts in Cairo<br></br>
Director of the Ballet School at the Academy of Arts in Cairo and Director of Units in Alexandria.<br></br>
Responsible for a ballet studio at the Russian Cultural Center in Cairo.
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
