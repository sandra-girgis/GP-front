import  {useState} from "react";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Piano.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';
import {HashLink} from 'react-router-hash-link';
import { FaStar } from "react-icons/fa";
import $ from 'jquery'; 

// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faRegStar } from "@fortawesome/free-solid-svg-icons";

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InstructorList: [],
      ins: [],
    };
  }
  async componentDidMount() {
    try {
      const InstructorRes = await fetch(
        "http://localhost:8000/Ensan/instructors/2/"
      );
      const InstructorList = await InstructorRes.json();
      const ins = await InstructorList.classinfo;
      this.setState({
        InstructorList,
        ins,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const instructor = this.state.InstructorList;
    const ins = this.state.ins;
    return (
      <>
        <div className="ins_header">
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            className="mt-5 ms-5 ins_image"
          />
        </div>
        <br></br>
        <div className="col-12 row">
          <div className="col-md-6">
            <h3 className="mt-4 fs-md-5 mb-5 ins_name ">
              {instructor.username}
            </h3>
            <div className=" fs-md-4 ins_info text-muted">
              Email : {instructor.email}
            </div>
            <div className="ins_info fs-md-4 text-muted">
              Mobile Phone : {instructor.phoneNumber}
            </div>
            <div className="ins_info fs-md-4 text-muted">
              Salary:{instructor.salary}
            </div>


            <div className="ins_info ">
            <div class="row">
            <div class="col text-center">
                <a href="{% url 'main-view' %}"><button class="btn btn-primary mt-3">Next</button></a>
            </div>
            <div class="col text-center">

                <form class="rate-form" action="" method="POST" id="{{object.id}}">
                    {/* {% csrf_token %} */}
                    <App/>
                    <button type="submit" class="fa fa-star fa-3x my-btnnn" id="first"></button>
                    <button type="submit" class="fa fa-star fa-3x my-btnnn" id="second"></button>
                    <button type="submit" class="fa fa-star fa-3x my-btnnn" id="third"></button>
                    <button type="submit" class="fa fa-star fa-3x my-btnnn" id="fourth"></button>
                    <button type="submit" class="fa fa-star fa-3x my-btnnn" id="fifth"></button>
                </form>
            </div>
            
        </div>


            </div>

            


            <button
              className=" edit_pass fs-md-6 btn  mt-3"
            >
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
            <h3 style={{ color: "#ee4a8b" }} id="intro" className="ms-3">
              Bio
            </h3>
            <p className="ins_bio mt-4 fs-6 container course_text">
              {instructor.bio}
            </p>
            <h3 style={{ color: "#ee4a8b" }} className="ms-3 mt-5" id="cour">
              Courses
            </h3>
            {ins.map((i) => (
              <>
                <Card className="ms-3 mt-4" style={{ width: "30rem" }}>
                  <Card.Body>
                    <Card.Title style={{ color: "#236aec" }} className="fs-4">
                      {i.ClassName}
                    </Card.Title>
                    <Card.Subtitle className="mb-3 mt-4 course_text">
                      {i.content}
                    </Card.Subtitle>
                    <Card.Text className="text-muted">
                      From : {i.from}
                    </Card.Text>
                    <Card.Text className="text-muted">To : {i.to}</Card.Text>
                    <Card.Text className="text-muted">Day : {i.day}</Card.Text>
                  </Card.Body>
                </Card>
              </>
            ))}
            <br></br>
          </div>
        </div>
      </>
    );
  }
}


export default Instructor;

function App() {

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  
  };
  
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
  
  
  };
  
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }

    const one = document.getElementById('first')
const two = document.getElementById('second')
const three = document.getElementById('third')
const four = document.getElementById('fourth')
const five = document.getElementById('fifth')

// get the form, confirm-box and csrf token
const form = document.querySelector('.rate-form')
const confirmBox = document.getElementById('confirm-box')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

const handleStarSelect = (size) => {
    const children = form.children
    console.log(children[0])
    for (let i=0; i < children.length; i++) {
        if(i <= size) {
            children[i].classList.add('checked')
        } else {
            children[i].classList.remove('checked')
        }
    }
}

const handleSelect = (selection) => {
    switch(selection){
        case 'first': {

            handleStarSelect(1)
            return
        }
        case 'second': {
            handleStarSelect(2)
            return
        }
        case 'third': {
            handleStarSelect(3)
            return
        }
        case 'fourth': {
            handleStarSelect(4)
            return
        }
        case 'fifth': {
            handleStarSelect(5)
            return
        }
        default: {
            handleStarSelect(0)
        }
    }

}

const getNumericValue = (stringValue) =>{
    let numericValue;
    if (stringValue === 'first') {
        numericValue = 1
    } 
    else if (stringValue === 'second') {
        numericValue = 2
    }
    else if (stringValue === 'third') {
        numericValue = 3
    }
    else if (stringValue === 'fourth') {
        numericValue = 4
    }
    else if (stringValue === 'fifth') {
        numericValue = 5
    }
    else {
        numericValue = 0
    }
    return numericValue
}

if (one) {
    const arr = [one, two, three, four, five]

    arr.forEach(item=> item.addEventListener('mouseover', (event)=>{
        handleSelect(event.target.id)
    }))

    arr.forEach(item=> item.addEventListener('click', (event)=>{
        // value of the rating not numeric
        const val = event.target.id
        
        let isSubmit = false
        form.addEventListener('submit', e=>{
            e.preventDefault()
            if (isSubmit) {
                return
            }
            isSubmit = true
            // picture id
            const id = e.target.id
            // value of the rating translated into numeric
            const val_num = getNumericValue(val)

            $.ajax({
                type: 'POST',
                url: '/rate/',
                data: {
                    'csrfmiddlewaretoken': csrf[0].value,
                    'el_id': id,
                    'val': val_num,
                },
                success: function(response){
                    console.log(response)
                    confirmBox.innerHTML = `<h1>Successfully rated with ${response.score}</h1>`
                },
                error: function(error){
                    console.log(error)
                    confirmBox.innerHTML = '<h1>Ups... something went wrong</h1>'
                }
            })
        })
    }))
}





  
  
    return (
      <div className="ins_info" style={styles.container}>
        
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
      </div>
    );
  };
  
  

// export default Instructor;

// get all the stars
