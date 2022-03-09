import React from "react";
import "../Piano";
import Table from 'react-bootstrap/Table'
// import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


export const Imagealbum = () => { 
  return (<>
<div className="nav-scroller bg-body shadow-sm">
  <nav className="nav nav-underline"  aria-label="Secondary navigation">
    <Link className="nav-link  adm" to="/instructors">Instructors</Link>
    <Link className="nav-link  adm" to="/students">Students</Link>
    <Link className="nav-link  adm" to="/event">Events</Link>
    <Link className="nav-link  adm" to="/imagealbum">Image Album</Link>
  </nav>
</div>

<h1 className="fw-bold display-4 text-center"style={{color:"#168eca"}}>Image Album</h1>
<button className="btn-outline-light btn-lg ms-5 mb-5 butt" style={{backgroundColor:"#168eca"}}><NavLink className="nav nav-link bu active " exact to={"/addimage"}>Add Image</NavLink></button>
<Table striped bordered hover className="shado container mb-5">
  <thead>
    <tr class="text-center">
        <th scope="col">picture</th>
        <th scope="col">Album_ID</th>
        <th scope="col">Name</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>
      <Link to="/addimage"style={{textDecoration:"none"}}>
        <button className="butt" style={{backgroundColor:"#168eca"}}>Edit</button>
        </Link>
        </td>
        <td>
        <Link to="#"style={{textDecoration:"none"}}>
        <button className="butt" style={{backgroundColor:"#168eca"}}>Delete</button>
        </Link>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <Link to="/addimage"style={{textDecoration:"none"}}>
        <button className="butt" style={{backgroundColor:"#168eca"}}>Edit</button>
        </Link> </td>
        <td>
        <Link to="#"style={{textDecoration:"none"}}>
        <button className="butt" style={{backgroundColor:"#168eca"}}>Delete</button>
        </Link>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>
      <Link to="/addimage"style={{textDecoration:"none"}}>
        <button className="butt" style={{backgroundColor:"#168eca"}}>Edit</button>
        </Link>   
      </td>
        <td>
        <Link to="#"style={{textDecoration:"none"}}>
        <button className="butt" style={{backgroundColor:"#168eca"}}>Delete</button>
        </Link>
      </td>
    </tr>
  </tbody>
</Table>
      </>
    );
  }

