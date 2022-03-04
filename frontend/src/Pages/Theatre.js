// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const Theatre = () => { 
//   return (<>
//         <div className="">
//           <div className="card bg-dark text-white">
//             <img
//               className="card-img"
//               src="https://wallpaperaccess.com/full/1562020.jpg"
//               alt="Card image"
//             />
//             <div className="card-img-overlay text-center col-3 ms-5 ">
//               <h1 className="card-title  ">Piano</h1>
//               {/* <button className="btn btn-dark btn-lg card-text">
//                 Join Us
//               </button> */}
//             </div>
//           </div>
//        </div>
//        {/* <div class="card mb-3" style="max-width: 540px;"> */}
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src="https://wallpaperaccess.com/full/1562020.jpg"
//        className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">Title</h5>
//         <p className="card-text">Description</p>
//         <p className="card-text"><small className="text-muted">Reviews</small></p>
//       </div>
//     </div>
//   </div>

//       </>
//     );
//   }
// // }
// // export default Piano;
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const Artcourses = () => { 
//   return (<>
//         <div className="">
//           <div className="card bg-dark text-white">
//             <img
//               className="card-img"
//               src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
//               alt="Card image"
//             />
//             <div className="card-img-overlay text-center col-3 ms-5 ">
//               <h1 className="card-title  ">Piano</h1>
//               {/* <button className="btn btn-dark btn-lg card-text">
//                 Join Us
//               </button> */}
//             </div>
//           </div>
//        </div>
//        {/* <div class="card mb-3" style="max-width: 540px;"> */}
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
//        className="img-fluid rounded-start" alt="..."/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">Title</h5>
//         <p className="card-text">Description</p>
//         <p className="card-text"><small className="text-muted">Reviews</small></p>
//       </div>
//     </div>
//   </div>

//       </>
//     );
//   }
// // }
// // export default Piano;

import React from "react";
import "./Piano.css";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/01.jpg"
import img2 from "../images/12.jpg"
import img3 from "../images/17.jpg"
import img4 from "../images/18.jpg"
import img5 from "../images/15.jpg"

export const Theatre = () => { 
  return (<>
  <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 " 
      src={img1} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}   alt="Second slide"/>
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
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="fifth slide"
    />
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

       <div className="container mt-5 mb-5">
              <h1 className="mb-5  text-center fw-bold display-4">About Our Classes</h1>
              <div className="container mb-5">
                  <div className="row g-0 ">
                    <div className="col-md-4 border border-primary rounded">
                      <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
                      className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h5 className="card-title">kids</h5>
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
                      <h5 className="card-title">middle age</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                  </div>
                  <div className="col-md-4 border border-danger rounded">
                    <img  src="https://media.istockphoto.com/photos/piano-lesson-picture-id1285507317?k=20&m=1285507317&s=612x612&w=0&h=yl7ThegscO4Nv8pEumIz6qxYR-UkoNc4fWy_Z7Z1uEM="
                    className="img-fluid rounded-start" alt="..."/>
                  </div>
                </div>
              </div>        
              <div className="container mb-5">
                <div className="row g-0 ">
                  <div className="col-md-4 border border-success rounded">
                    <img  src="https://media.istockphoto.com/photos/friends-playing-piano-all-together-picture-id991893172?k=20&m=991893172&s=612x612&w=0&h=L8ewogV3w1WnM6TYBmU5lanUBwjxdpW5gL8V6pfxmAI="
                    className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Elderly</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center"><button className="btn-primary btn-lg fs-2" >Join Us</button></div>
        </div>
        

        <div className="container mb-5">
        <h1 className="mb-5  text-center fw-bold display-4">About Our Instractors</h1>
        <div className="card mb-3 instractor">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
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
          </div>
        </div>
        
        <div className="card mb-3">
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
        </div>
        <div className="card mb-3 instractor">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
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
          </div>
        </div>

        <div className="card mb-3">
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
        </div>
        
        <div className="card mb-3 instractor">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
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
          </div>
        </div>
        </div>
       


      

      </>
    );
  }


