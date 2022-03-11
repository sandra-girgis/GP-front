import React from "react";
import "./Piano.css";
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/i4.jpg"
// import img2 from "../images/12.jpg"
// import img3 from "../images/17.jpg"
// import img4 from "../images/18.jpg"
// import img5 from "../images/15.jpg"


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
      src="https://media.istockphoto.com/photos/dad-teaching-guitar-and-ukulele-to-his-daughterlittle-girl-learning-picture-id1219407299?k=20&m=1219407299&s=612x612&w=0&h=v5lDASvutwXgi5vE3jSdSKs_v4Mc4MGxdokYhaun9iM="  
       alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/young-teenager-girl-alone-at-home-childhood-picture-id825882882?k=20&m=825882882&s=612x612&w=0&h=ifc7rhHFqJCHuSoiiho1XFNGGwKu0vc6vzkMTboGx2g="
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/boy-teaching-to-play-guitar-picture-id1048436392?k=20&m=1048436392&s=612x612&w=0&h=rEk017VuXGj2hzIQosYbscycasBlAfwFWKkZBlzMPHo="
      alt="fourth slide"
    />
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="fifth slide"
    />
  </Carousel.Item> */}
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
       {/* <div className="card mb-3" style="max-width: 540px;"> */}

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
                    <img  src="https://media.istockphoto.com/photos/musician-plays-guitar-close-up-picture-id1097767690?k=20&m=1097767690&s=612x612&w=0&h=7YF-DXt5DxaimNnWgq2-f4lIK8Kr64G6kMyvTV_5IUM="
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
        <h1 className="mb-5 fw-bold display-4"style={{color:"#ee4a8b"}}>About Our Instructors</h1>
        <div className="card mb-5 instractor flip-card shadow">
            <div className="row g-0">
            <div className="col-md-4">
              <img src={img1}
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Dina Dawood </h5>
                <p className="card-text desc">Dina Dawood was born in 1991.
                 She started his Studies in Conservatoire de Musique d'Alexandrie first, 
                 under the supervision of Mr. Shady Nagy, after that he has been studying with Mr.
                Karim Frege till now. She finished 5th Grade, in the year of 2017 and 7th Grade in 2019;
               she also did the 5th Grade ABRSM Music theory exam in 2018. 
               Dina attended and performed in a Masterclass for Classical Guitar of Pawel Kuzuma, 
               David Pavlovits and Chelsea Green in 2015, 2016, and 2018. Dina is now working as a Music 
               teacher in IBCA and a guitar teacher in Bibliotheca Alexandrina and Ensan Art Center. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <button className="btn-outline-light btn-lg fs-2 butt" >
            <NavLink className="nav nav-link bu active " exact to={"/joinus"}>Join Us</NavLink></button></div>
        



        {/* <div className="card mb-3">
            <div className="row g-0">
            
            <div className="col-md-8">
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
            <div className="col-md-4 im">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="img-fluid rounded-end rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
          </div>
        </div> */}
        

        












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

