import React from "react";
import "../Piano";
import Table from 'react-bootstrap/Table'
// import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export const Students = () => { 
  return (<>
<div className="nav-scroller bg-body shadow-sm">
  <nav className="nav nav-underline"  aria-label="Secondary navigation">
    <Link className="nav-link  adm" to="/instructors">Instructors</Link>
    <Link className="nav-link  adm" to="/students">Students</Link>
    <Link className="nav-link  adm" to="/event">Events</Link>
    <Link className="nav-link  adm" to="/imagealbum">Image Album</Link>
  </nav>
</div>

<h1 className="fw-bold display-4 text-center"style={{color:"#168eca"}}>Students</h1>
<button className="btn-outline-light btn-lg ms-5 mb-5 butt" style={{backgroundColor:"#168eca"}}><NavLink className="nav nav-link bu active " exact to={"/addstudent"}>Add Student</NavLink></button>
<Table striped bordered hover className="shado container mb-5">
  <thead>
    <tr class="text-center">
        <th scope="col">Id</th>
        <th scope="col">Student-Name</th>
        <th scope="col">Is-Staff</th>
        <th scope="col">Email</th>
        <th scope="col">image</th>
        <th scope="col">Phone-Number</th>
        <th scope="col">Phone-Number</th>
        <th scope="col">Payment Status</th>
        <th scope="col">Courses</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>


      <td>
      <button className="butt" style={{backgroundColor:"#168eca"}}><NavLink className="nav nav-link bu active " exact to={"/addstudent"}>Edit</NavLink></button>
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
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>

      <td>
      <button className="butt" style={{backgroundColor:"#168eca"}}><NavLink className="nav nav-link bu active " exact to={"/addstudent"}>Edit</NavLink></button>
        </td>
        <td>
        <Link to="#"style={{textDecoration:"none"}}>
        <button className="butt" style={{backgroundColor:"#168eca"}}>Delete</button>
        </Link>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>

      <td>
      <button className="butt" style={{backgroundColor:"#168eca"}}><NavLink className="nav nav-link bu active " exact to={"/addstudent"}>Edit</NavLink></button>
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

