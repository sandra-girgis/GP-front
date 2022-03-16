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
        
      </>
    );
  }


