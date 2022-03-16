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
            <div className="justify-content-center row">
                <div className="card shado col-md-5 p-5 mt-5 mb-5">
                    <h1 style={{color:"#ee4a8b"}}>Log in form</h1>
                    <div className="form-group">
                        <label htmlFor="u"style={{color:"#168eca"}}>User Name</label>
                        <input name="username" type="text" className="form-control"
                            id="u" placeholder="Enter username"
                            value={this.state.details.username}
                            onChange={this.inputChanged}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="p" style={{color:"#168eca"}}>Password</label>
                        <input name="password" type="password" className="form-control"
                            id="p" placeholder="Password"
                            value={this.state.details.password}
                            onChange={this.inputChanged}/>
                    </div>
                    <div className="row mb-5 mt-5">
                        <button onClick={this.login} className="btn-outline-light btn-lg mb-5 butt" >Log in</button>
                    </div>
                    <NavLink className="nav nav-link pink bl" exact to="/register">
                        register
                    </NavLink>
                </div>
            </div>
        );
    }
}
export default Login;