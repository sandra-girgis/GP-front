    // import React from "react";
    import "../Piano";
    // import Carousel from 'react-bootstrap/Carousel'
    import Form from 'react-bootstrap/Form'
    import "bootstrap/dist/css/bootstrap.min.css";
    import Button from "react-bootstrap/Button";
    import React, { Component } from "react";
    import { NavLink } from "react-router-dom";

    // class Addimage extends Component {

    //     state = {
    //         details:{
                //   Name: "",
                //   image:"",
    // //         }
    //     }
    // }
    // export default Addimage;



    export const Addimage = () => { 
    return (<>
    <div className="shado mb-5 pt-3 container">
    <Form>
    <h3 className='new2 pt-2 mb-5 text-center'style={{color:"#ee4a8b"}}> Add Image </h3>
    <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{color:"#168eca"}}>Image-Name</Form.Label>
                <Form.Control as="textarea" rows={1} />
    </Form.Group>
   

    {/* <Form.Group className="mb-3" controlId="exampleForm.uploadimage">
                <Form.Control action="/action_page.php"><label for="img" Select 
                image:type="file" id="img" name="img" accept="image/*" ></label>
                </Form.Control >
    </Form.Group> */}

    {/* <Button onClick={onImageRemoveAll}>Remove all images</Button>
                {imageList.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                    <Button onClick={() => onImageUpdate(index)}>Update</Button>
                    <Button onClick={() => onImageRemove(index)}>Remove</Button> */}

    <Button className="btn-outline-light btn-lg ms-5 mb-5 butt" ><NavLink className="nav nav-link bu active " exact to={"/imagealbum"}>Submit</NavLink></Button>
    </Form>
    </div>

        </>
        );
    }

