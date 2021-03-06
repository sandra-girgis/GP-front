import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
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
      const newsRes = await fetch("http://localhost:8000/Ensan/news/");
      const NewsList = await newsRes.json();
      this.setState({
        NewsList,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const news = this.state.NewsList.reverse(true);
    return (
      <>
        <h1 className="container" style={{ color: "#ee4a8b" }}>
          Events
        </h1>
        <div className="container mb-5 mt-5">
        {news.map((item) => (
          <div key={item.id} className="row flip_card2 ">
            <div className="col-md-6 mt-4 rounded">
          <img
            src={
              item.picture
                .replaceAll("http://localhost:8000", "")}
                className="img-fluid rounded-start big"
            alt="..."
          />
            </div>
            <div className="col-md-5">
              <div className="card-body ">
                <h5 className="card-title ps-3 mt-1 ">{item.title}</h5>
                <p className="card-text ps-3 new mt-4">{item.content}</p>
                <div>
                  <span className="card-text ps-3 text-muted date">
                    {item.date.replaceAll("T", " ").replaceAll("Z", " ")}
                  </span>
                  <span className="btn-outline-light btn-lg ms-5 mb-5 butt">
                    {item.Category_ID}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </>
    );
  }
}
export default News;
