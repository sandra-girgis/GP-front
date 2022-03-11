import React from "react";
import "./Piano.css";
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/v1.jpg"
import img2 from "../images/v2.jpg"
import img3 from "../images/i20.jpg"



export const Flute = () => { 
  return (<>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 " 
      src={img1} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}   alt="Second slide"/>
  </Carousel.Item>
</Carousel>
        {/* <div className="boback">
        <div className="">
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src="https://media.istockphoto.com/photos/grand-piano-in-dark-background-3d-rendering-picture-id1331353069?b=1&k=20&m=1331353069&s=170667a&w=0&h=-PfN3Mkh2fC78wPw54ZuWozUKtjmf5Le3J061E-j-Ko="
              alt="piano-img"
            />
            <div className="card-img-overlay text-center col-3 ms-5 "> */}
              {/* <button className="btn btn-dark btn-lg card-text">
                Join Us
              </button> */}
            {/* </div>
          </div>
       </div> */}
       {/* <div class="card mb-3" style="max-width: 540px;"> */}

       <div className="container mt-5 mb-5 ">
       <h1 className="mb-5 fw-bold display-4"style={{color:"#ee4a8b"}}>About Our Classes</h1>
              <div className="container mb-5 flip-card">
                  <div className="row g-0 ">
                    <div className="col-md-4 border rounded">
                      <img  src="https://media.istockphoto.com/photos/homeschooling-music-classes-picture-id1300130169?k=20&m=1300130169&s=612x612&w=0&h=PpTkQl5W_CiUv8a1hPt6ATS4IL5ZdMtw2toXv0SKktA="
                      className="img-fluid rounded-start" alt="kids"/>
                    </div>
                    <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                      <div className="card-body">
                        <h5 className="card-title"style={{color:"#168eca"}}>Flute and Recorder Classes</h5>
                        <p className="card-text desc">from 7 years old and above, also for adults
                        <br></br>  With: Nouran Hathout </p>
                    </div>
                    </div>
                  </div>
              </div>
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                <div className="col-md-6 offset-md-2"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>Why to learn Flute at Ensan Art?</h5>
                      <p className="card-text desc">    • Highly qualified Flute instructors<br></br>
    • International curriculum<br></br>
    • Annual Students Concert</p>
                  </div>
                  </div>
                  <div className="col-md-4 border rounded">
                  <img  src="https://media.istockphoto.com/photos/concert-picture-id139578817?k=20&m=139578817&s=612x612&w=0&h=jVm5brCijjdFdmSOgX8UcaIs61yq0gAG98UZS_yjNZ4="
                    className="img-fluid rounded-start" alt="middle age"/>
                  </div>
                </div>
              </div>        
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                  <div className="col-md-4 border rounded">
                  <img  src="https://media.istockphoto.com/photos/flutist-playing-her-instrument-on-stage-picture-id587817144?k=20&m=587817144&s=612x612&w=0&h=_R2x1qzfl0f0hhfpfw6wKhTEJeqCdV6dbbkuiJN2ERI="
                    className="img-fluid rounded-start" alt="Elderly"/>
                  </div>
                  <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>Benefit of playing Flute:</h5>
                      <p className="card-text desc">    • Improves Reasoning Capacity<br></br>
    • Improves Student’s Time Management<br></br>
    • Improves Organizational Skills<br></br>
    • Builds Confidence and Encourages Self-expression</p>

                  </div>
                  </div>
                </div>
              </div>
        </div>
        

        <div className="container mb-5">
        <h1 className="mb-5 fw-bold display-4"style={{color:"#ee4a8b"}}>About Our Instructors</h1>
        <div className="card mb-5 instractor flip-card shadow">
            <div className="row g-0">
            <div className="col-md-4">
              <img src={img3} 
              className="img-fluid rounded-start rounded-circle flute" style={{width:"24rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Nouran Hathout</h5>
                <p className="card-text desc">• Obtained Grade 8 FLUTE ABRSM Summer 2019 with grade Merit<br></br>
• Obtained Grade 7 FLUTE ABRSM Summer 2017 with grade Merit<br></br>
• Planning ABRSM curriculum, delivering lessons for students, preparing them for their ABRSM grade exam<br></br>
• Lead Music (Flute) teacher Feb. 2017 – Jan. 2018 Russian Culture Centre<br></br>
• Coaching, preparing, and delivering lessons to classes with varied age groups (children and young learners)<br></br>
• Assistant Music (Flute) teacher March 2016 – Jan. 2017 Artopia Academy<br></br>
• Obtained Grade 5 FLUTE ABRSM Summer 2015 with grade Pass<br></br>
• Obtained Grade 5 THEORY ABRSM March 2015 with grade Merit.
                  </p>
              </div>
            </div>
          </div>
        </div>
        
       
        
        <div className="col-12 text-center">
          <button className="btn-outline-light btn-lg fs-2 butt" style={{backgroundColor:"#168eca"}}>
            <NavLink className="nav nav-link bu active " exact to={"/joinus"}>Join Us</NavLink></button></div>

        














































































          {/* <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                 className="card-img-top  rounded-circle" style={{width:"15rem"}}  alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Born in Alexandria in 1998.
                                          Omar graduated from Riada International School (IGCSE) and then studied Computer and Communications Engineering at the Faculty of Engineering - Alexandria University.
                                          In 2006, Omar joined the Suzuki Violin Class and the Alexandria Opera House Youth Orchestra with Dr. Nevine ELMahmoudy.
                                          Later on , he joined the conservatoire ( Academy of Arts in Alexandria ) where he studied violin with Dr. Nevine ELMahmoudy and Dr. Hassan Sharara.
                                          Omar performed a lot of solo concerts in Alexandria and Cairo , in which they made a huge success.
                                          He now works as a violinist in Alexandria Opera House String Orchestra and participated with the Arab Youth Philharmonic Orchestra concerts in Germany , Jordan , Egypt and France.</p>
                </div>
            </div>
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                className="card-img-top  rounded-circle" style={{width:"15rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a short card.</p>
              </div>
            </div>
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                className="card-img-top  rounded-circle" style={{width:"15rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top rounded-circle" style={{width:"15rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
           </div> */}
        </div>
       


        {/* </div> */}

      </>
    );
  }

