import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Piano.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Student = () => {
    return (
      <>
      <div className="ins_header">
          <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" className="mt-5 ms-5 ins_image" />
      </div>
      <br></br>

      <div className="col-12 row">
<div className="col-md-6">
      <h3 className="mt-4 fs-md-5 mb-5 ins_name ">
          Student Name
      </h3>
      
      <div className=" fs-md-4 stu_info text-muted">
          Email:
      </div>
      <div className="stu_info fs-md-4 text-muted">
          Mobile Phone:
      </div>
      {/* <div className="ins_info fs-md-4 text-muted">
          Payment Status:
      </div> */}
      <button  className="ins_info fs-md-6 btn mt-3 ">
          Edit Password
      </button>
      </div>
      
      <div className=" col-md-6 ">
       

        <h3 style={{color:"#ee4a8b"}} className="ms-4 mt-5 fs-1">Courses</h3>
        <Card className="ms-3 mt-4" style={{ width: '30rem' }}>
  <Card.Body >
    <Card.Title style={{color:"#236aec"}} className="fs-4">Course Title</Card.Title>
    <Card.Subtitle  className="mb-3 mt-4 course_text">Course Content</Card.Subtitle>
    <Card.Text className="text-muted">
      From:
    </Card.Text>
    <Card.Text className="text-muted">
      To:
    </Card.Text >
    <Card.Text className="text-muted">
      Day:
    </Card.Text>
    <Card.Text className="text-muted">
      Payment Status:
    </Card.Text>
  </Card.Body>
</Card>        
<br>
</br>


          </div>

          </div>
      </>
      );
      }