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
// import img6 from "../images/12.jpg";
import img3 from "../images/v2.jpg";
import img4 from "../images/k6.jpg";
import img5 from "../images/c2.jpg";
// import img7 from "../images/kkids.jpg";
// import img8 from "../images/v1.jpg";
// import img9 from "../images/5.jpg";
// import img10 from "../images/17.jpg";
// import img11 from "../images/18.jpg";

export const Home = () => {
  return (
    <>
      <div className="boback">
        <Carousel>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="fs-5">
                Ensan Art was established in 2012, it is one of the leading Arts
                schools in Egypt. Our center takes pride in providing drawing
                classes, music lessons, and ballet courses for kids and adults.
                Our team consists of highly qualified teachers
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
              <h3 className="fs-5" style={{ color: "#000000" }}>
                Our music courses help our students to learn, read and
                understand notes, learn theory, and training.
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h3 className="fs-5">
                We provide music lessons such are: Piano, Guitar, Violin
                classes. Our programs are designed to fully equip our students
                with the right elements they needed. We are also a registered
                institution to the prestigious ABRSM and Trinity of London{" "}
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img4} alt="First slide" />
            <Carousel.Caption>
              <h3 className="fs-5" style={{ color: "#000000" }}>
                The majority of our students and their parents opted to choose
                Ensan Art mainly because of our quality education, friendly,
                family-oriented atmosphere, and the exceptional service that we
                aim to provide to our customers.
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
        
          {/* {/* <marquee loop width="10%"></marquee>
          {/* <marquee loop width="10%"></marquee>
          <marquee loop direction="up" scrollamount="7" width="35%">
            <div className="row">
              <div className="row mb-3">
                <div className="san1"></div>
              </div>
              <div className="row mb-3">
                <div className="san2"></div>
              </div>
              <div className="row mb-3">
                <div className="san3"></div>
              </div>
              <div className="row mb-3">
                <div className="san4"></div>
              </div>
            </div>
          </marquee>
          <marquee loop width="10%"></marquee>
          <marquee loop direction="down" width="35%">
            <div className="row">
              <div className=" row mb-3">
                <div className="san4"></div>
              </div>
              <div className=" row mb-3">
                <div className="san3"></div>
              </div>
              <div className=" row mb-3">
                <div className="san2"></div>
              </div>
              <div className=" row mb-3">
                <div className="san1"></div>
              </div>
            </div>
          </marquee>
          // <marquee loop width="10%"></marquee> */}
        </div> 
      </div>
    </>
  );
};































































































































































{
  /* <marquee loop width = "10%"></marquee>
<marquee loop vspace="20" direction="right" scrollamount="7" width = "35%">
  <div className="row">
    <div className="col-3">
      <div className="san1"></div>
    </div>
    <div className="col-3">
      <div className="san2"></div>
    </div>
    <div className="col-3">
      <div className="san3"></div>
    </div>
    <div className="col-3">
      <div className="san4"></div>
    </div>
  </div>
</marquee>
<marquee loop width = "10%">
</marquee>
<marquee loop vspace="20" direction="right" width = "35%">
  <div className="row">
    <div className="col-3">
      <div className="san1"></div>
    </div>
    <div className="col-3">
      <div className="san2"></div>
    </div>
    <div className="col-3">
      <div className="san3"></div>
    </div>
    <div className="col-3">
      <div className="san4"></div>
    </div>
  </div>
</marquee>
<marquee loop width = "10%"></marquee>
<marquee loop width = "10%"></marquee>
<marquee loop direction="left" scrollamount="7" width = "35%">
  <div className="row">
    <div className="col-3">
      <div className="san1"></div>
    </div>
    <div className="col-3">
      <div className="san2"></div>
    </div>
    <div className="col-3">
      <div className="san3"></div>
    </div>
    <div className="col-3">
      <div className="san4"></div>
    </div>
  </div>
</marquee>
<marquee loop width = "10%">
</marquee>
<marquee loop direction="left" width = "35%">
  <div className="row">
    <div className="col-3">
      <div className="san4"></div>
    </div>
    <div className="col-3">
      <div className="san3"></div>
    </div>
    <div className="col-3">
      <div className="san2"></div>
    </div>
    <div className="col-3">
      <div className="san1"></div>
    </div>
  </div>
</marquee>
<marquee loop width = "10%"></marquee> */
}






{
  /* <div className="container mt-5">
<div className="row mt-5 mb-5 justify-content-center">
  <div className="flip-box col-md-6 me-5 mb-5">
    <div className="flip-box-inner">
      <div className="flip-box-front mt-5">
        <img
          src="https://media.istockphoto.com/photos/mature-female-ballet-teacher-demonstrating-dancing-moves-in-front-of-picture-id1146322678?k=20&m=1146322678&s=612x612&w=0&h=R_YL0zQB4_m23eRJnvfxSDDwUaKZNv1u26Cnz6bwUkE="
          alt="art"
          className="img"
        />
      </div>
      <div className="flip-box-back mt-5">
        <img src={img8} alt="art" className="img" />
      </div>
    </div>
  </div>
  <div className="flip-box col-md-6 mb-5">
    <div className="flip-box-inner">
      <div className="flip-box-front mt-5">
        <img src={img9} alt="art" className="img" />
      </div>
      <div className="flip-box-back mt-5">
        <img
          src="https://media.istockphoto.com/photos/guitar-teacher-teaching-boy-to-play-acoustic-guitar-picture-id1130955921?k=20&m=1130955921&s=612x612&w=0&h=peKXfjkeLmclKQbIGfXLfFJ9Q0AHKXxVDzBpYCn3134="
          alt="art"
          className="img"
        />
      </div>
    </div>
  </div>
</div>

<div className="row mt-5 mb-5 justify-content-center">
  <div className="flip-box col-md-6 me-5 mb-5">
    <div className="flip-box-inner">
      <div className="flip-box-front mt-5">
        <img src={img7} alt="art" className="img" />
      </div>
      <div className="flip-box-back mt-5">
        <img src={img6} alt="art" className="img" />
      </div>
    </div>
  </div>
  <div className="flip-box col-md-6 mb-5">
    <div className="flip-box-inner">
      <div className="flip-box-front mt-5">
        <img src={img10} alt="art" className="img" />
      </div>
      <div className="flip-box-back mt-5">
        <img src={img11} alt="art" className="img" />
      </div>
    </div>
  </div>
</div>
</div> */
}
