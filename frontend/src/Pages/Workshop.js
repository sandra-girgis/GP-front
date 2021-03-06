import React from "react";
import "./Piano.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../images/k6.jpg"
import img4 from "../images/i6.jpg"
import img2 from "../images/i19.jpg"
import img3 from "../images/i11.jpg"
import img5 from "../images/ws.jpg"

export const Workshop = () => { 
  return (<>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 " 
      src="https://images.unsplash.com/photo-1560831340-b9679dc9e9f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJ0JTIwd29ya3Nob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/cropped-image-of-african-american-parents-and-daughter-painting-eggs-picture-id935695902?k=20&m=935695902&s=612x612&w=0&h=gxNhsYXnJL0YT8rFbhKNpX8bDXhpREz9_4zJzAOIvb8="
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/two-kids-painting-easter-eggs-picture-id1138260123?k=20&m=1138260123&s=612x612&w=0&h=VTOBf26wc5fCHlHxMULZc8gEYljJdYqX_5Duy2GCLe0= "
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/little-kids-holding-christmas-character-decorated-popsicle-sticks-picture-id881475192?k=20&m=881475192&s=612x612&w=0&h=E1kbcHAs-vuOcI4cO4s0ZR4dJQrv0QMjiO-HeyAYuj0="
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src={img5}
      alt="Second slide"/>
  </Carousel.Item>
</Carousel>
       <div className="container mt-5 mb-5">
       <h1 className="mb-5 fw-bold display-4" style={{color:"#ee4a8b"}}> About our Workshops</h1>
              <div className="container mb-5 flip-card">
                  <div className="row g-0 ">
                    <div className="col-md-4 border rounded">
                      <img  src="https://media.istockphoto.com/photos/elementary-school-students-picture-id1153552608?k=20&m=1153552608&s=612x612&w=0&h=RKOLQdh12l8mqLM0CsN3DNuIZB6xbXSDzQ9m1rbBD5Q="
                      className="img-fluid rounded-start" alt="kids"/>
                    </div>
                    <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                      <div className="card-body">
                        <h5 className="card-title"style={{color:"#168eca"}}>Our Classes</h5>
                        <p className="card-text">We offer weekly craft workshops for kids from 5 years old</p>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          {/* </div>
        </div> */}
        <div className="container mb-5 flip-card">
          <div className="row g-0 ">
            <div
              className="col-md-6 offset-md-2"
              style={{ backgroundColor: "#fff2f7" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#168eca" }}>
                  Craft workshops{" "}
                </h5>
                <p className="card-text">
                  Craft activities foster communication, listening, attention,
                  and imagination. These activities can enhance mental health
                  and wellbeing as well as foster a whole range of developmental
                  skills in pre-schoolers
                </p>
              </div>
            </div>
            <div className="col-md-4 border rounded">
              <img
                src="https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=807&q=80"
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
                src="https://images.unsplash.com/photo-1637195141546-2469a5312504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                className="img-fluid rounded-start"
                alt="Elderly"
              />
            </div>
            <div className="col-md-6" style={{ backgroundColor: "#fff2f7" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#168eca" }}>
                  skills we focus on
                </h5>
                <p className="card-text">
                  ??? Fine motor skills and Enhancing children's hand-eye
                  coordination and building levels of manual dexterity<br></br>???
                  Identification of shapes, color, and texture<br></br>??? Working
                  with materials teaches them about colors, shapes, and
                  textures. How things work and how they fit together<br></br>???
                  Craft encourages children to play and experiment in a fun and
                  relaxed environment
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className="container mb-5">
        <h1 className="mb-5 fw-bold display-4" style={{ color: "#ee4a8b" }}>
          About Our Instructors
        </h1>
        <div className="card mb-5 instractor flip-card shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={img4}
                className="img-fluid rounded-start rounded-circle art flute"
                style={{ width: "24rem" }}
                alt="instractors"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#ee4a8b" }}>
                  Amira Shousha (visual artist)
                </h5>
                <p className="card-text desc">
                  is the head of the trainers at Ensan Art. During her 6 years
                  of instructing art in different shapes(painting, drawing,
                  collage, clay, and crafts), she had organized and prepared for
                  three Art exhibitions Lots of creative workshops In addition,
                  she participated in a few art competitions. She is patient and
                  determined to bring the best out of her students At the same
                  time she is a Professional Photographer and a Creative Graphic
                  Designer, Amira uses her skills in designing to create amazing
                  posters, flyers, and posts for Ensan Art. is a graduate of the
                  2012 faculty of Fine Arts( Graphic department). Amira loves
                  and enjoys practicing art with her students.
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
                  {" "}
                  Maryam Reda saudi (visual artist ){" "}
                </h5>
                <p className="card-text desc">
                  {" "}
                  graduated from the faculty of fine arts ( painting department
                  ) 2018
                  <br></br>Worked at Rasha el ajroudi's art studio as a painter
                  from 2016 to 2020 Participated in several important projects
                  at the new administrative capital and a number of hotels
                  <br></br>Worked at ensan art from 2018 - now Make a lot of
                  workshops for kids in different places with ensan art
                  Organized and prepared for two art exhibitions
                  <br></br>Worked at kaumeya language schools (British
                  department ) from 2021.
                </p>
              </div>
            </div>
            <div className="col-md-4 im">
              <img
                src={img2}
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
                src={img3}
                className="img-fluid rounded-start rounded-circle flut"
                style={{ width: "15rem" }}
                alt="instractors"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#ee4a8b" }}>
                  Menna Allah Hazem (interior designer)
                </h5>
                <p className="card-text desc">
                  Is a trainer at Ensan art.<br></br>
                  She graduated from the faculty of fine arts interior design
                  major class 2020<br></br>
                  She continued her love for design by starting her own business
                  in handmade wooden goods and enjoys sharing her experience
                  with other students<br></br>
                  She inspires students from every age group to tap into the
                  "inner artist" that she truly believes we all possess<br></br>
                  She joined Ensan art team in 2019 Besides being a teacher she
                  is still learning more art techniques and new design visions
                  <br></br>
                  She is a positive, calm, and committed art teacher who
                  encourages and provides young artists with the opportunity to
                  achieve their individual potential.
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
