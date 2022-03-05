import React from "react";
import "./Piano.css";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../images/v1.jpg"
// import img2 from "../images/v2.jpg"
// import img3 from "../images/k8.jpg"
// import img4 from "../images/k4.jpg"
// import img5 from "../images/k1.jpg"
// import img6 from "../images/kkids.jpg"
// import img7 from "../images/kmag.jpg"
// import img8 from "../images/kold.jpg"


export const Ballet = () => { 
  return (<>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 " 
      src="https://media.istockphoto.com/photos/cute-ballet-group-of-little-girls-streching-to-be-able-to-do-more-picture-id1146994624?k=20&m=1146994624&s=612x612&w=0&h=u0-PeBoisYiDwcNbtNtnd7F9UBQl9wuOMva3dwLQy3s="
      alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/ballet-school-class-picture-id658947658?k=20&m=658947658&s=612x612&w=0&h=roMAGQQ27CWiwKyyixT5VmhbRfHSs5d9piT-CzDKfEU="
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/girl-dreaming-of-becoming-a-ballerina-picture-id1128473828?k=20&m=1128473828&s=612x612&w=0&h=w1faMuGELcptktjj0IOG_UTQhckjpDg8Aj_cYN2PMVM="
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://media.istockphoto.com/photos/ballet-shoes-picture-id168779481?k=20&m=168779481&s=612x612&w=0&h=gPcv6QiggNxw0ZbmelcknxC8i21x77nh7AuUfR4tCiI="
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
       <h1 className="mb-5  text-center fw-bold display-4"style={{color:"#f1552d"}}>About Our Classes</h1>
              <div className="container mb-5">
                  <div className="row g-0 ">
                    <div className="col-md-4 border border-primary rounded">
                      <img  src="https://media.istockphoto.com/photos/little-ballerinas-in-ballet-studio-picture-id1161652373?k=20&m=1161652373&s=612x612&w=0&h=8xIBoeahwR8G6RRrLGmj9ACtpCaM0sO5uD6NfuLvQQg="
                      className="img-fluid rounded-start" alt="kids"/>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title"style={{color:"#168eca"}}>kids</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                  </div>
              </div>
              <div className="container mb-5">
                <div className="row g-0 ">
                <div className="col-md-6 offset-md-2">
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#f1552d"}}>middle age</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                  </div>
                  <div className="col-md-4 border border-danger rounded">
                  <img  src="https://media.istockphoto.com/photos/mature-female-ballet-teacher-demonstrating-dancing-moves-in-front-of-picture-id1146322678?k=20&m=1146322678&s=612x612&w=0&h=R_YL0zQB4_m23eRJnvfxSDDwUaKZNv1u26Cnz6bwUkE="
                    className="img-fluid rounded-start" alt="middle age"/>
                  </div>
                </div>
              </div>        
              <div className="container mb-5">
                <div className="row g-0 ">
                  <div className="col-md-4 border border-success rounded">
                  <img  src="https://media.istockphoto.com/photos/group-of-ballerinas-on-ballet-class-picture-id1144347933?k=20&m=1144347933&s=612x612&w=0&h=ePIvveM1FFEhVgi4hXiacurn464Rj_CDVmWDwXEmaeo="
                    className="img-fluid rounded-start" alt="Elderly"/>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#77aa2a"}}>Elderly</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  </div>
                  </div>
                </div>
              </div>
        </div>
        

        <div className="container mb-5">
        <h1 className="mb-5  text-center fw-bold display-4"style={{color:"#f1552d"}}>About Our Instructors</h1>
        <div className="card mb-3 instractor">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Card title</h5>
                <p className="card-text desc">Born in Alexandria in 1998.
                                          Omar graduated from Riada International School (IGCSE) and then studied Computer and Communications Engineering at the Faculty of Engineering - Alexandria University.
                                          In 2006, Omar joined the Suzuki Violin Class and the Alexandria Opera House Youth Orchestra with Dr. Nevine ELMahmoudy.
                                          Later on , he joined the conservatoire ( Academy of Arts in Alexandria ) where he studied violin with Dr. Nevine ELMahmoudy and Dr. Hassan Sharara.
                                          Omar performed a lot of solo concerts in Alexandria and Cairo , in which they made a huge success.
                                          He now works as a violinist in Alexandria Opera House String Orchestra and participated with the Arab Youth Philharmonic Orchestra concerts in Germany , Jordan , Egypt and France.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mb-3">
            <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Card title</h5>
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
        </div>
        <div className="card mb-3 instractor">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Card title</h5>
                <p className="card-text desc">Born in Alexandria in 1998.
                                          Omar graduated from Riada International School (IGCSE) and then studied Computer and Communications Engineering at the Faculty of Engineering - Alexandria University.
                                          In 2006, Omar joined the Suzuki Violin Class and the Alexandria Opera House Youth Orchestra with Dr. Nevine ELMahmoudy.
                                          Later on , he joined the conservatoire ( Academy of Arts in Alexandria ) where he studied violin with Dr. Nevine ELMahmoudy and Dr. Hassan Sharara.
                                          Omar performed a lot of solo concerts in Alexandria and Cairo , in which they made a huge success.
                                          He now works as a violinist in Alexandria Opera House String Orchestra and participated with the Arab Youth Philharmonic Orchestra concerts in Germany , Jordan , Egypt and France.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
            <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Card title</h5>
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
        </div>
        
        <div className="card mb-3 instractor">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Card title</h5>
                <p className="card-text desc">Born in Alexandria in 1998.
                                          Omar graduated from Riada International School (IGCSE) and then studied Computer and Communications Engineering at the Faculty of Engineering - Alexandria University.
                                          In 2006, Omar joined the Suzuki Violin Class and the Alexandria Opera House Youth Orchestra with Dr. Nevine ELMahmoudy.
                                          Later on , he joined the conservatoire ( Academy of Arts in Alexandria ) where he studied violin with Dr. Nevine ELMahmoudy and Dr. Hassan Sharara.
                                          Omar performed a lot of solo concerts in Alexandria and Cairo , in which they made a huge success.
                                          He now works as a violinist in Alexandria Opera House String Orchestra and participated with the Arab Youth Philharmonic Orchestra concerts in Germany , Jordan , Egypt and France.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-12 text-center"><button className="btn-outline-light btn-lg fs-2" style={{backgroundColor:"#168eca"}}>Join Us</button></div>


        





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


