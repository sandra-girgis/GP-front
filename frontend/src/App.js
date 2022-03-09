import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      classList: []
      };
  }

    async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/Ensan/all-classes');
        const classList = await res.json();
        this.setState({
          classList
        });
      } catch (e) {
        console.log(e);
    }
    }
    renderItems = () => {
      const newItems = this.state.classList
      return newItems.map(item => (
        <div key={item.id}>
          <div>
            <h1>id : {item.id}</h1>
            <p>title : {item.title}</p>
            <h1>content : {item.content}</h1>
            <h1>fromTime : {item.fromTime}</h1>
            <h1>toTime : {item.toTime}</h1>
            <h1>day : {item.day}</h1>
            <h1>Category_ID : {item.Category_ID}</h1>
            <h1>Instructor_ID : {item.Instructor_ID}</h1>
          </div>
        </div>
      ));
    };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }
  
export default App;