import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Piano.css";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewsList: [],
    };
  }
  async componentDidMount() {
    try {
      const newsRes = await fetch('http://localhost:8000/Ensan/news');
      const NewsList = await newsRes.json();
      this.setState({
        NewsList
      });
    } catch (e) {
      console.log(e);
  }
  }
  News = () => {
    const news = this.state.NewsList
    return news.map(item => (
      <>
        <div key={item.id} className="row g-0 ">
            <div className="col-md-4 mt-4 rounded">
              <img
                src={require('../images'+item.picture.replaceAll('%20'," "))} 
                className="img-fluid rounded-start"
                alt="..."/>
            </div>
            <div className="col-md-6">
              <div className="card-body ">
                <h5 className="card-title ps-5 mt-1 ">
                {item.title}
                </h5>
                <p className="card-text ps-5 new mt-4">
                {item.content}
                </p>
                <div>
                  <span className="card-text ps-5 text-muted">
                  {item.date.replaceAll("T"," ").replaceAll("Z"," ")}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="btn btn-dark ms-4">
                  {item.Category_ID}
                  </span>
                </div>
              </div>
            </div>
          </div>
      </>
    ));
  };
  render() {
    return (
      <>
        <br></br>
        <h1 className="new2">NEWS</h1>
        <br></br>
        <br></br>
        <div className="container ">
        {this.News()}
        </div>
      </>
    );
  }
}
export default News;
