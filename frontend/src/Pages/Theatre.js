import React from "react";
import "./Piano.css";
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



export const Theatre = () => { 
  return (<>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 " 
      src="https://media.istockphoto.com/photos/red-theatre-curtain-picture-id672272950?k=20&m=672272950&s=612x612&w=0&h=crLfjyP2Oa4neLkgdMu4fFlqsrKrTIO5whQTwm1Q9M8="
      alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://www.kuna.net.kw/NewsPictures/2015/5/20/dc805567-f85f-4952-abb5-e304c49cd57c.jpg"
      alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
     src="https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 "
      alt="Second slide"/>
  </Carousel.Item>
</Carousel>
       <div className="container mt-5 mb-5">
       <h1 className="mb-5 fw-bold display-4" style={{color:"#ee4a8b"}}> About Our Classes</h1>
              <div className="container mb-5 flip-card">
                  <div className="row g-0 ">
                    <div className="col-md-4 border rounded">
                      <img  src="https://media.istockphoto.com/photos/boy-wearing-make-up-and-large-coat-with-toy-sword-picture-id488845584?k=20&m=488845584&s=612x612&w=0&h=0URSpcg36ptWT7vOzh1zv2x2LSlplQAJqJRf0Lvruzw="
                      className="img-fluid rounded-start" alt="kids"/>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body"style={{backgroundColor:"#fff2f7"}}>
                        <h5 className="card-title"style={{color:"#168eca"}}>kids</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                  </div>
              </div>
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                <div className="col-md-6 offset-md-2"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>middle age</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                  </div>
                  <div className="col-md-4 border rounded">
                  <img  src="https://daycreekhowl.org/wp-content/uploads/2019/03/Day-In-The-Life-.jpg"
                    className="img-fluid rounded-start" alt="middle age"/>
                  </div>
                </div>
              </div>        
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                  <div className="col-md-4 border rounded">
                  <img  src="https://media.istockphoto.com/photos/acting-coach-directing-an-improv-exercise-with-her-students-in-a-picture-id1348130723?k=20&m=1348130723&s=612x612&w=0&h=TwEljwjsFCbjOiXgFqJQ5Q9M__ZskV5EFu4X1cECvGk="
                    className="img-fluid rounded-start" alt="Elderly"/>
                  </div>
                  <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>Elderly</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  </div>
                  </div>
                </div>
              </div>
        </div>
        

       
      </>
    );
  }


