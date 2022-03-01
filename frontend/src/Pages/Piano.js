import React from "react";
import "./Piano.css";
// import logo from './images/ee7493467b11a597da884bdd3a15f443.png';
import "bootstrap/dist/css/bootstrap.min.css";
// class Piano extends React.Component {
//   constructor() {
//     super();
//   }
export const Piano = () => { 
  return (<>
        <div className="">
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Card image"
            />
            <div className="card-img-overlay text-center col-3 ms-5 ">
              <h1 className="card-title  ">Piano</h1>
              {/* <button className="btn btn-dark btn-lg card-text">
                Join Us
              </button> */}
            </div>
          </div>
       </div>
       {/* <div class="card mb-3" style="max-width: 540px;"> */}
  <div className="row g-0">
    <div className="col-md-4">
      <img  src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
       className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>

      </>
    );
  }
// }
// export default Piano;
