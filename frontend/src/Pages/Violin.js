import React from "react";
import "./Piano.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/k6.jpg";
import img2 from "../images/k7.jpg";
import img3 from "../images/k8.jpg";
import img4 from "../images/k4.jpg";
import img5 from "../images/k1.jpg";
import img6 from "../images/kkids.jpg";
import img7 from "../images/kmag.jpg";
import img8 from "../images/kold.jpg";
import img9 from "../images/i7.jpg";
import img10 from "../images/i5.jpg";
import img11 from "../images/i3.jpg";

export const Violin = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 " src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="fifth slide" />
        </Carousel.Item>
      </Carousel>
      <div className="container mt-5 mb-5">
        <h1 className="mb-5 fw-bold display-4" style={{ color: "#ee4a8b" }}>
          About Our Classes
        </h1>
        <div className="container mb-5 flip-card">
          <div className="row g-0 ">
            <div className="col-md-4 border rounded">
              <img src={img6} className="img-fluid rounded-start" alt="kids" />
            </div>
            <div className="col-md-6" style={{ backgroundColor: "#fff2f7" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#168eca" }}>
                  Violin Classes
                </h5>
                <p className="card-text desc">
                  from 8 years old and above and adults.<br></br>
                  With: Omar Akl , Maya ElRemaly and Nouran Qubeisi<br></br>
                  (Group classes from 8 students)
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
                  Why to learn Violin at Ensan Art?
                </h5>
                <p className="card-text desc">
                  {" "}
                  • Highly qualified Violin instructors<br></br>• Teaching
                  International Curriculum (ABRSM)<br></br>• Annual Students
                  Concert{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4 border rounded">
              <img
                src={img7}
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
                src={img8}
                className="img-fluid rounded-start"
                alt="Elderly"
              />
            </div>
            <div className="col-md-6" style={{ backgroundColor: "#fff2f7" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#168eca" }}>
                  Benefit of playing Violin:
                </h5>
                <p className="card-text desc">
                  {" "}
                  • Improved attention span and focus as he/she learns how
                  to read music<br></br>• Sharpened memory from learning how
                  to memories<br></br>• Improved
                  self-discipline through practicing certain skills over and
                  over<br></br>• Stronger connections between left and right
                  brain functions<br></br>• Improved right and left hand
                  coordination<br></br>• Develops self-discipline<br></br>•
                  Develops competency control and Improve the team work skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h1 className="mb-5  fw-bold display-4" style={{ color: "#ee4a8b" }}>
          About Our Instructors
        </h1>
        <div className="card mb-5 instractor flip-card shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img9}
                className="img-fluid rounded-start rounded-circle flut"
                style={{ width: "15rem" }}
                alt="instractors"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#ee4a8b" }}>
                  Omar Akl
                </h5>
                <p className="card-text desc">
                  Born in Alexandria in 1998. Omar graduated from Riada
                  International School (IGCSE) and then studied Computer and
                  Communications Engineering at the Faculty of Engineering -
                  Alexandria University. In 2006, Omar joined the Suzuki Violin
                  Class and the Alexandria Opera House Youth Orchestra with Dr.
                  Nevine ELMahmoudy. Later on ,<br></br>
                  he joined the conservatoire ( Academy of Arts in Alexandria )
                  where he studied violin with Dr. Nevine ELMahmoudy and Dr.
                  Hassan Sharara. Omar performed a lot of solo concerts in
                  Alexandria and Cairo , in which they made a huge success. He
                  now works as a violinist in Alexandria Opera House String
                  Orchestra and participated with the Arab Youth Philharmonic
                  Orchestra concerts in Germany , Jordan , Egypt and France.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-5 flip-card shadow1">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#ee4a8b" }}>
                  Maya ElRemaly
                </h5>
                <p className="card-text desc">
                  Since 2002 she Playing the violin when she has the age of 5
                  and a half ,in Jan 2020 Part-time member of the Cairo Symphony
                  Orchestra. Feb 2020 Played with the “Sout Masr” at Ali El
                  Haggar’s honorary concert, in 2017-2019 she was Member and
                  concert Master of the Choir and Orchestra of Sciences Po
                  (COSP),in 2016-2017 she was Member of the University of
                  Warwick Symphony Orchestra (UWSO) and Member of the City of
                  Birmingham Symphony Orchestra for Youth (CBSO), France, in May
                  2014 she git Diploma from the Cairo Conservatory, in May 2014
                  she git Diploma from the Cairo Conservatory, Since 2010 Member
                  of the Arabic Youth Philharmonic Orchestra (AYPO)-Section
                  Leader three years in a row (Participation at AlJem Music
                  Festival-Tunisia/Young Euro Classic Festival, Berlin-Germany),
                  Member of the International Youth Symphonic Orchestra
                  (IYSO),France and in 2008-2009 Participated as a section
                  leader in the musical camp of “Chateau d’Oex” in Geneva,
                  Switzerland.
                </p>
              </div>
            </div>
            <div className="col-md-4 im">
              <img
                src={img10}
                className="img-fluid rounded-end rounded-circle"
                style={{ width: "15rem" }}
                alt="instractors"
              />
            </div>
          </div>
        </div>

        <div className="card mb-5 instractor flip-card shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img11}
                className="img-fluid rounded-start rounded-circle flut"
                style={{ width: "15rem" }}
                alt="instractors"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#ee4a8b" }}>
                Nouran Qubeisi
                </h5>
                <p className="card-text desc">
                Born in Alexandria in 1996, she joined the Academy of Arts, the Conservatoire Institute in 2004, where she was tutored by Dr. Ahmed Fahmy, Dr. Nevin El Mahmoudi, and Dr. Hassan Sharara.<br></br>
She joined the Suzuki Violin School at the Talent Development Center at the Alexandria Opera House and the Alexandria Opera Children's Orchestra since its inception in 2005 and became its pioneer in 2009.<br></br>
She participated in the fifth and sixth sessions of the Arab Youth Philharmonic Orchestra with the International Youth Orchestra in Bremen, Germany in 2011, 20012 in Tunisia, 2016 in Berlin, and 2017 in Jordan.<br></br>
She also participated in the competition of the Supreme Council of Culture in 2012, and in the youth competition of Mediterranean schools for the German language in Greece, where she won second place. She also participated in many recitals at the Creativity Center, the Russian Center, the Jesuit, and the Atelier.
She is currently working as a member of the Alexandria Opera Orchestra and String Orchestra since 2009 to date. 
             
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
