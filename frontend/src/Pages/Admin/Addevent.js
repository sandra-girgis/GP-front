// import React from "react";
import "../Piano";
// import Carousel from 'react-bootstrap/Carousel'
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React from "react";

// import React, { Component } from "react";
import { useState ,useEffect} from "react";
import axios from 'axios';
import Image from "./Image";

import { NavLink } from "react-router-dom";
import API from "./API";

// class Addevent extends Component {

//     state = {
//         details:{
//             title: "",
//             content: "",
//             date: "",
//             picture: "",
//             Category_ID: "",
//         }
//     }
// }
// export default Addevent;

// class Addevent extends Component {
//     constructor(props) {
//       super(props);
//     }

// ---------------------------main---------------------------------//
// class Addevent extends Component {
  // state = {
  //   details: {
  //     title: "",
  //     content: "",
  //     image: null
  //   },
  // constructor(props) {
  //   super(props);
  //   this.onChangeTitle = this.onChangeTitle.bind(this);
  //   this.onChangeContent = this.onChangeContent.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  //   this.onImageChange = this.onImageChange.bind(this)

  //   this.state = {
  //     title:'',
  //     content:'',
  //     picture:null,
  //     EventList: [],
  //   };

  // };
//   onChangeTitle(e) {
//     this.setState({
//         title: e.target.value
//     });
// }
// onChangeContent(e) {
//     this.setState({
//         content: e.target.value
//     });
// }
//   onImageChange = e => {
//     if (e.target.files && e.target.files[0]) {
//       let img = e.target.files[0];
//       this.setState({
//         picture: URL.createObjectURL(img)
//       });
//     }
//   };

  

  // addevent = (e) => {
  //   // fetch('http://localhost:8000/Ensan/persons/',{
  //   fetch("http://localhost:8000/Ensan/news/", {
  //     // fetch('http://localhost:8000/Ensan/instructors/',{
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(this.state.details),
  //   })
  //     .then((data) => data.json())
      
  //     .catch((error) => console.error(error));
  // };

  // inputChanged = (event) => {
  //   const det = this.state.details;
  //   det[event.target.name] = event.target.value;
  //   this.setState({ details: det });
  // };
//   componentDidMount() {
//     this.addevent();
// }
      
// onSubmit(e) {
//   e.preventDefault();
//   const obj = {
//       title: this.state.title,
//       content: this.state.content
//   }
//   };
// ------------------end of main ----------------------//

// ----------------------tempo------------------//

export const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [starring, setStarring] = useState("");
  const [movieId, setMovieId] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedFile, setSelectedFile] = React.useState(null);


  useEffect(() => {
    refreshMovies();
  }, []);
  
  const refreshMovies = () => {
    API.get("/")
      .then((res) => {
        setMovies(res.data);
        // setName(res[0].name)
        // setGenre(res[0].genre)
        // setStarring(res[0].starring)
        // setMovieId(res[0].id)
      })
      .catch(console.error);
  };

  // const [selectedFile, setSelectedFile] = React.useState(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const formData = new FormData();
  //   formData.append("selectedFile", selectedFile);
  //   try {
  //     const response = axios({
  //       method: "post",
  //       url: "http://localhost:8000/Ensan/news/",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  // const handleFileSelect = (event) => {
  //   setSelectedFile(event.target.files[0])
  // }


  const onSubmit = (e) => {
    e.preventDefault();
    let item = { title, content };
    API.post("/", item).then(() => refreshMovies());
  };

  // const onUpdate = (id) => {
  //   let item = { name };
  //   API.patch(`/${id}/`, item).then((res) => refreshMovies());
  // };

  function selectMovie(id) {
    let item = movies.filter((movie) => movie.id === id)[0];
    setTitle(item.title);
    setContent(item.content);
    // setStarring(item.starring);
    // setMovieId(item.id);
  }


  // render() {
    // const { EventList } = this.state;

    return (
        <div className="shado mb-5 pt-3 container">
          <Form  >
            <h3
              className="new2 pt-2 mb-5 text-center"
              style={{ color: "#ee4a8b" }}
            >
              Add Event
            </h3>
              
            <Form.Group
              className="mb-3 mt-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "#168eca" }}>title </Form.Label>
              <Form.Control 
              as="textarea" 
              rows={1}  
              // onChange={this.onChangeTitle}
              // value={this.state.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "#168eca" }}>content </Form.Label>
              <Form.Control 
              as="textarea" 
              rows={7}
              // value={this.state.content}
              // onChange={this.onChangeContent}
              value={content}
                onChange={(e) => setContent(e.target.value)}
               />
            </Form.Group>
            
               {/* <div className="mb-1">
                  Image 
                  <span className="font-css top">*</span>
                   <div className="">
                       <input type="file" id="file-input" name="ImageStyle"/>
                   </div>
               </div>  */}


               {/* main image */}


               {/* <div>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file"  onChange={this.onImageChange} />
          </div> */}

          {/* end of main image */}
          {/* <input type="file" onChange={handleFileSelect}/> */}
      {/* <input type="submit" value="Upload File" /> */}

      <Image/>
            <Button
              className="btn-outline-light btn-lg ms-5 mb-5 butt"
              style={{ backgroundColor: "#168eca" }}
              onClick={onSubmit}
            >
              <NavLink className="nav nav-link bu active " exact to={"/event"} >
                Submit
              </NavLink>
            </Button>
            
          </Form>
        </div>
    );
  }
// }
// }
// export default AddMovie;
// export default Addevent;
