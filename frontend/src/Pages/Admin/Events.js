import React from "react";
import "../Piano";
// import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


export const Events = () => { 
  return (<>
  <div className="nav-scroller bg-body shadow-sm" style={{backgroundcolor:"#fff2f7"}}>
  <nav className="nav nav-underline" aria-label="Secondary navigation">
    <Link className="nav-link adm" to="/instructors">Instructors</Link>
    <Link className="nav-link adm" to="/students">Students</Link>
    <Link className="nav-link adm" to="/admin">Events</Link>
    <Link className="nav-link adm" to="/imagealbum">Image Album</Link>
  </nav>
</div>

      </>
    );
  }

