import React from "react";
import "./Piano.css";
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/i6.jpg"
import img2 from "../images/i19.jpg"
import img3 from "../images/i11.jpg"
// import img4 from "../images/k4.jpg"
// import img5 from "../images/k1.jpg"
// import img6 from "../images/kkids.jpg"
import img7 from "../images/5.jpg"
import img8 from "../images/h2.jpg"


export const Artcourses = () => { 
  return (<>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 " 
      src="https://media.istockphoto.com/photos/children-doing-autumn-handcrafts-picture-id1168454133?k=20&m=1168454133&s=612x612&w=0&h=v9aCQ4OwzW8V44rVCPBmcraNx8iETRpfePH9KrTSTZM="
      alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/illustrations/colourful-and-bright-people-crowd-background-pattern-illustration-id1096171442?k=20&m=1096171442&s=612x612&w=0&h=LaY1Ud8BYPi-wGmy3_cNxO-OQdWwGq8MflBDwQ_S3V4="
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/profile-of-a-little-girl-smiling-while-painting-a-landscape-in-art-picture-id1294593477?k=20&m=1294593477&s=612x612&w=0&h=-6tUlqQcNuW3czFOEUdNFcryW_rXnudD7y5dUlxOH4k="
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/artist-working-on-her-new-drawing-in-home-studio-picture-id1305974077?k=20&m=1305974077&s=612x612&w=0&h=WEoc9z4ny-SXHMee3RhXoUgjHpFJPglcBwSZfCfJ_EM="
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/family-looking-at-photograph-of-animal-on-wall-picture-id478169337?k=20&m=478169337&s=612x612&w=0&h=tGRG2bMa8z9Xct0RJn9XiakpIjO3FOA8-X7WVtsJ_1U="
      alt="Second slide"/>
  </Carousel.Item>
  {/* <Carousel.Item >
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
  <Carousel.Item>
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
       {/* <div class="card mb-3" style="max-width: 540px;"> */}

       <div className="container mt-5 mb-5">
       <h1 className="mb-5 fw-bold display-4"style={{color:"#ee4a8b"}}>About Our Classes</h1>
              <div className="container mb-5 flip-card">
                  <div className="row g-0 "style={{height:"40vh"}}>
                    <div className="col-md-4 border rounded">
                    <img  src={img7} 
                      className="img-fluid rounded-start kirly" alt="kids"/>
                    </div>
                    <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                      <div className="card-body">
                        <h5 className="card-title"style={{color:"#168eca"}}>kids  (From 4 to 6 years old)</h5>
                        <p className="card-text desc">
 The drawing course for this age is designed to let the kids unleash
 their imagination during the painting
 In addition to learning the basic geometric shapes in an indirect way</p>
                    </div>
                    </div>
                  </div>
              </div>
              <br></br>
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                <div className="col-md-6 offset-md-2"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}} >middle age  (From 7 to 9 years old)</h5>
                      <p className="card-text desc">
At this age stage, the kids start to learn more about the basic proportions of the human body and faces. Also, they train about the famous artists.</p>
                  </div>
                  </div>
                  <div className="col-md-4 border rounded ">
                  <img  src={img8}
                    className="img-fluid rounded-start kirly" alt="middle age"/>
                  </div>
                </div>
              </div>
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                  <div className="col-md-4 border rounded">
                  <img  src="https://media.istockphoto.com/photos/happy-latin-female-working-on-a-painting-picture-id1144643775?b=1&k=20&m=1144643775&s=170667a&w=0&h=4nagCwIv30VVCMonQg2KTHiL5SxeENGzUzbpzX2VR4M="
                    className="img-fluid rounded-start" alt="Elderly"/>
                  </div>
                  <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>Elderly (From 9 years old and above)</h5>
                      <p className="card-text desc">The teens start to use different materials and colors, 
                      to produce a painting integrates elements</p>

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
              className="img-fluid rounded-start rounded-circle art flute" style={{width:"24rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Amira Shousha (visual artist)</h5>
                <p className="card-text desc">is the head of the trainers at Ensan Art. 
During her 6 years of instructing art in different shapes(painting, drawing, collage, clay, and crafts), she had organized and prepared for three Art exhibitions Lots of creative workshops
In addition, she participated in a few art competitions. 
She is patient and determined to bring the best out of her students At the same time she is a Professional Photographer and a Creative Graphic Designer, Amira uses her skills in designing to create amazing posters, flyers, and posts for Ensan Art. 
is a graduate of the 2012 faculty of Fine Arts( Graphic department).
Amira loves and enjoys practicing art with her students.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mb-5 flip-card shadow1">
            <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}> Maryam Reda saudi (visual artist ) </h5>
                <p className="card-text desc"> graduated from the faculty of fine arts ( painting department ) 2018
<br></br>Worked at Rasha el ajroudi's art studio as a painter from 2016 to 2020 
Participated in several important projects at the new administrative capital and a number of hotels
<br></br>Worked at ensan art from 2018 - now 
Make a lot of workshops for kids in different places with ensan art
Organized and prepared for two art exhibitions
<br></br>Worked at kaumeya language schools (British department ) from 2021.</p>
              </div>
            </div>
            <div className="col-md-4 im">
              <img src={img2}
              className="img-fluid rounded-end rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
          </div>
        </div>
        <div className="card mb-5 instractor flip-card shadow">
            <div className="row g-0">
            <div className="col-md-4">
              <img src={img3} 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Menna Allah Hazem (interior designer)</h5>
                <p className="card-text desc">Is a trainer at Ensan art.<br></br> 
She graduated from the faculty of fine arts interior design major class 2020<br></br> 
She continued her love for design by starting her own business in handmade wooden goods and enjoys sharing her experience with other students<br></br>
She inspires students from every age group to tap into the "inner artist" that she truly believes we all possess<br></br>
She joined Ensan art team in 2019
Besides being a teacher she is still learning more art techniques and new design visions<br></br>
She is a positive, calm, and committed art teacher who encourages and provides young artists with the opportunity to achieve their individual potential.</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card mb-5 flip-card shadow1">
            <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Rawan Haggag</h5>
                <p className="card-text desc">Born in Alexandria in 1998.
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


