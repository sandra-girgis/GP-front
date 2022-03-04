import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import "./Piano.css";


export const News =()=> {
    return (
      <>     
      <br>
      </br>
    <h1 className='new2'>
      NEWS
    </h1>
    <br>
    </br>
<br>
</br>
  <div className="container ">
                  <div className="row g-0 ">
                    <div className="col-md-4 mt-4 rounded">
                      <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
                      className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body ">
                        <h5 className="card-title ps-5 mt-1 ">Guitar Class - Suzuki Method</h5>
                        <p className="card-text ps-5 new mt-4">Salma Wael is an architect who works as a part time TA at the Arab Academy for science and Technology and wooooorks at Omran architects. She started playing piano when she was 7 years old and graduated from the "Academy of Arts" with a diploma in 2017 and was the top of her year.
                        Salma has also successfully taken part in the international music competition " Jugend Musiziert" several times. She played piano Solo but also has experiance in four hands and has accompained classic and modern vocals.
                        Further more Salma has teached piano for 4 months in 2018 at Tchikovsky school for performing Arts.
                        Salma finds passion in playing and teaching piano and looks forward to teaching and shaping young pianists
                        </p>
                        <div>
                        <span className="card-text ps-5 text-muted">
                          Audition on Saturday, November 6, 2021 At 6 PM
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='btn btn-dark ms-4'>Guitar</span>

                        </div>
                    </div>
                    </div>
                  </div>
              </div>


    </>
        );
}