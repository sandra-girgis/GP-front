import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Login extends Component {

    state = {
        details:{
            username : "",
            password : ""
        }
    }

    login = event => {
        fetch('http://localhost:8000/Ensan/authtoken/',{
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.details)
        })
        .then(
            data => data.json()
        )
        .then(
            data => {
                this.props.userlogin(data.token);
            }
        )
        .catch(error => console.error(error))
    }

    inputChanged =  event => {
        const det = this.state.details;
        det[event.target.name] = event.target.value;
        this.setState({details:det})
    }

    render(){
        return (
            
        );
    }
}
export default Login;