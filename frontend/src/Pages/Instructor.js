import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Piano.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {HashLink} from 'react-router-hash-link';

export const Instructor = () => {
    return (
      <>
      <div className="ins_header">
          <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" className="mt-5 ms-5 ins_image" />
      </div>
      <br></br>

      <div className="col-12 row">
<div className="col-md-6">
      <h3 className="mt-4 fs-md-5 mb-5 ins_name ">
          Instructor Name
      </h3>
      {/* <br>
      </br>
      <br>
      </br> */}
      <div className=" fs-md-4 ins_info text-muted">
          Email:
      </div>
      <div className="ins_info fs-md-4 text-muted">
          Mobile Phone:
      </div>
      <div className="ins_info fs-md-4 text-muted">
          Salary:
      </div>
      <button style={{backgroundColor:"white" , border:"1px solid grey"}} className="ins_info fs-md-6 btn  mt-3 pink">
          Edit Password
      </button>
      </div>
      
      <div className=" col-md-6 ">
       <Navbar>

      <ul className="list-inline">
            <li className="list-inline-item">
              <HashLink className=" pink ins_nav" smooth to="#intro">
                Introduction
              </HashLink>
            </li>
            <li className="list-inline-item">
              <HashLink className=" pink ins_nav ms-5" smooth to="#cour">
                Courses
              </HashLink>
            </li>
            </ul>
        </Navbar>
        <h3 style={{color:"#ee4a8b"}} id="intro" className="ms-3">Bio</h3>
        <p className="ins_bio mt-4 fs-6 container course_text">
          Salma Wael is an architect who works as a part time TA at the Arab Academy 
                for science and Technology and works at Omran architects. 
                She started playing piano when she was 7 years old and graduated 
                from the “Academy of Arts” with a diploma in 2017 and was the top of
                 her year. Salma has also successfully taken part in the international music 
                 competition “Jugend Musiziert” several times. She plays piano solo but also 
                 has experience in four hands and has accompanied classic and modern vocals.
                  Furthermore Salma has teached piano for 4 months in 2018 at Tchikovsky
                   school for Preforming Arts.</p>  

        <h3 style={{color:"#ee4a8b"}} className="ms-3 mt-5" id="cour">Courses</h3>
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
  </Card.Body>
</Card>        
<br>
</br>


          </div>

          </div>
      </>
      );
      }