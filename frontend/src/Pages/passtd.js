import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Passtd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InstructorList: [],
    };
  }

  async componentDidMount() {
    try {
      const InstructorRes = await fetch(
        `http://localhost:8000/Ensan/students/${sessionStorage.id}/`
      );
      const InstructorList = await InstructorRes.json();
      this.setState({
        InstructorList,
      });
    } catch (e) {
      console.log(e);
    }
  }
  update = (event) => {
    fetch(`http://localhost:8000/Ensan/students/${sessionStorage.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.InstructorList),
    })
      .then((data) => data.json())
      .then(() => {
        this.props.history.push("/student");
      })
      .catch((error) => console.error(error));
  };

  inputChanged = (event) => {
    const det = this.state.InstructorList;
    det['password'] = event.target.value;
    this.setState({ InstructorList : det });
    console.log(event.target.value)
  };

  render() {
    return (
      <div className="justify-content-center w-100 row">
        <div className="card shado col-md-5 p-5 mt-5 mb-5">
          <h1 style={{ color: "#ee4a8b" }}>Update Password Form</h1>
          <div className="form-group">
            <label htmlFor="p" style={{ color: "#168eca" }}>
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="p"
              placeholder="Password"
              onChange={this.inputChanged}
            />
          </div>
          <div className="row mb-5 mt-5">
            <button
              onClick={this.update}
              className="btn-outline-light btn-lg butt"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Passtd);
