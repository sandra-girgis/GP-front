import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from 'react-bootstrap/Card'
import { BrowserRouter,Routes, Route, Link } from "react-router-dom"; 


export const Guitar = () => {
    return(
        <>
        <Card>
    <Card.Img variant="top" src="https://online.berklee.edu/takenote/wp-content/uploads/2021/01/acoustic_guitar_techniques_article_image_2021.jpg" />
    <Card.Body>
      <Card.Text>
        Guitar
      </Card.Text>
    </Card.Body>
  </Card>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://online.berklee.edu/takenote/wp-content/uploads/2021/01/acoustic_guitar_techniques_article_image_2021.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Description</p>
        <p className="card-text"><small className="text-muted">Reviews</small></p>
      </div>
    </div>
  </div>
</div>
         </>
     );
 }



// export default Guitar;