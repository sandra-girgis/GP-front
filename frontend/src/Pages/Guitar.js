import React from "react";
import "./Piano.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup' 

export const Guitar = () => {
  return (
    <>
      
      {/* <Card className=" head bg-dark text-white">
  <div className="head">

  </div>

  <Card.ImgOverlay>
    <Card.Title className="font ms-3">Guitar</Card.Title>
  </Card.ImgOverlay>
</Card> */}
<Card className="bg-dark text-white">
  <Card.Img className="head"  alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Guitar</Card.Title>
  </Card.ImgOverlay>
</Card>
      <br>
      </br>
      <h2 className="course ms-5">Courses</h2>
      <br>
      </br>
      {/* --------------------------------------------------------------- */}
      <div className="card container">
      {/* <div className="card mb-5 container"> */}

  <div className="row g-0 ">
    <div className="col-md-4 ">
      <img src="https://images.unsplash.com/photo-1548426589-b5560481a46e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title title">Music Course</h3>
        <br>
        </br>
        <p className="card-text title">Description</p>
        <p className="card-text "><small className="text-muted reviews">Reviews</small></p>
      </div>
    </div>
  </div>
  </div>
  {/* ------------------------------------------------------------------- */}
  <br>
  </br>
  {/* ----------------------------------------------------------------- */}
  <div className="card  container">

  <div className="row g-0 ">
    <div className="col-md-4 ">
      <img src="https://images.unsplash.com/photo-1548426589-b5560481a46e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title title">Music Course</h3>
        <br>
        </br>
        <p className="card-text title">Description</p>
        <p className="card-text "><small className="text-muted reviews">Reviews</small></p>
      </div>
    </div>
  </div>
  </div>
  {/* ---------------------------------------------------------------- */}
<br>
</br>
<br>
</br>
{/* ----------------------------------------------------------------------------- */}
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1082096450?k=20&m=1082096450&s=170667a&w=0&h=s7SFmeD2a5b3YfVocArJ2FH9ZUfRbwrotlCXs5izOkQ=" />
    <Card.Body>
      <Card.Title>Name</Card.Title>
      <Card.Text>
        Bio
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1082096450?k=20&m=1082096450&s=170667a&w=0&h=s7SFmeD2a5b3YfVocArJ2FH9ZUfRbwrotlCXs5izOkQ=" />
    <Card.Body>
      <Card.Title>Name</Card.Title>
      <Card.Text>
        Bio
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1082096450?k=20&m=1082096450&s=170667a&w=0&h=s7SFmeD2a5b3YfVocArJ2FH9ZUfRbwrotlCXs5izOkQ=" />
    <Card.Body>
      <Card.Title>Name</Card.Title>
      <Card.Text>
        Bio
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
      {/* </div> */}
      {/* </span> */}
    </>
  );
}
// }
// export default Piano;
