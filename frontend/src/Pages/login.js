import React, { Component } from "react";
class Login extends Component {

    state = {
        details:{
            username : "",
            password : ""
        }
    }

    register = event => {
        // fetch('http://localhost:8000/Ensan/persons/',{
        // fetch('http://localhost:8000/Ensan/students/',{
        fetch('http://localhost:8000/Ensan/instructors/',{
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.details)
        })
        .then(
            data => data.json()
        )
        .then(
            data => {
                console.log(data.token);
            }
        )
        .catch(error => console.error(error))
    }

    login = event => {
        fetch('http://localhost:8000/auth/',{
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
                <div className="card bg-dark text-white col-5 p-5 mt-5 mb-5">
                    <h1>Log in form</h1>
                    <div className="form-group">
                        <label htmlFor="u">User Name</label>
                        <input name="username" type="text" className="form-control"
                            id="u" placeholder="Enter username"
                            value={this.state.details.username}
                            onChange={this.inputChanged}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="p">Password</label>
                        <input name="password" type="password" className="form-control"
                            id="p" placeholder="Password"
                            value={this.state.details.password}
                            onChange={this.inputChanged}/>
                    </div>
                    <div className="row mb-5 mt-5">
                        <button onClick={this.login} className="btn btn-primary col-4 offset-1">Log in</button>
                        <button onClick={this.register} className="btn btn-primary col-4 offset-1">Register</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;