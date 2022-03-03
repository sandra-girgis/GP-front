import React from "react";
import "./Piano.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";

export const Piano = () => { 
  return (<>
        <div className="boback">
        <div className="">
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src="https://media.istockphoto.com/photos/grand-piano-in-dark-background-3d-rendering-picture-id1331353069?b=1&k=20&m=1331353069&s=170667a&w=0&h=-PfN3Mkh2fC78wPw54ZuWozUKtjmf5Le3J061E-j-Ko="
              alt="piano-img"
            />
            <div className="card-img-overlay text-center col-3 ms-5 ">
              <h1 className="card-title " style={{fontSize:"7rem"}}>Piano</h1>
              {/* <button className="btn btn-dark btn-lg card-text">
                Join Us
              </button> */}
            </div>
          </div>
       </div>
       {/* <div class="card mb-3" style="max-width: 540px;"> */}

       <br></br>
       <br></br>   
       <div className="container col-md-10" style={{paddingLeft:"2rem"}}>
          <div className="row g-0 ">
            <div className="col-md-4">
              <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
              className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">kids</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <div className="col-4 text-center"><button style={{backgroundColor:"#168eca"}} className="btn btn-outline-light" >Join Us</button></div>
            </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>   
        <div className="container col-md-10" style={{paddingLeft:"12rem"}}>
          <div className="row g-0 ">
          <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">middle age</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <div className="col-4 text-center"><button style={{backgroundColor:"#168eca"}} className="btn btn-outline-light" >Join Us</button></div>
            </div>
            </div>
            <div className="col-md-4">
              <img  src="https://media.istockphoto.com/photos/piano-lesson-picture-id1285507317?k=20&m=1285507317&s=612x612&w=0&h=yl7ThegscO4Nv8pEumIz6qxYR-UkoNc4fWy_Z7Z1uEM="
              className="img-fluid rounded-start" alt="..."/>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>   
        <div className="container col-md-10" style={{paddingLeft:"6rem"}}>
          <div className="row g-0 ">
            <div className="col-md-4">
              <img  src="https://media.istockphoto.com/photos/friends-playing-piano-all-together-picture-id991893172?k=20&m=991893172&s=612x612&w=0&h=L8ewogV3w1WnM6TYBmU5lanUBwjxdpW5gL8V6pfxmAI="
              className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Elderly</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <div className="col-4 text-center"><button style={{backgroundColor:"#168eca"}} className="btn btn-outline-light" >Join Us</button></div>

            </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container col-md-8" style={{paddingLeft:"4rem"}}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              {/* <div className=""> */}
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                 className="card-img-top instractor" style={{height:"14rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              {/* </div> */}
            </div>
            <div className="col">
              {/* <div className="card h-100"> */}
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                className="card-img-top instractor" style={{height:"14rem"}}alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a short card.</p>
                {/* </div> */}
              </div>
            </div>
            <div className="col">
              {/* <div className="card h-100"> */}
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                className="card-img-top instractor " style={{height:"14rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            {/* </div> */}
            <div className="col">
              {/* <div className="card h-100"> */}
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top instractor" style={{height:"14rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
        <br></br>
        <br></br>
        <br></br>


        </div>

      </>
    );
  }
// }
// export default Piano;
