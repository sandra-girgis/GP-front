import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Flute = () => { 
  return (<>
        <div className="">
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src="https://c0.wallpaperflare.com/preview/59/577/155/music-jazz-flute-musician.jpg"
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
      <img src="https://c0.wallpaperflare.com/preview/59/577/155/music-jazz-flute-musician.jpg"
       className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Description</p>
        <p className="card-text"><small className="text-muted">Reviews</small></p>
      </div>
    </div>
  </div>

      </>
    );
  }
// }
// export default Piano;
