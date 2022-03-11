import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component, useState } from "react";
import "./Piano.css";
import { render } from "react-dom";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

class Concerts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AlbumsList: [],
      start: [],
    };
  }

  async componentDidMount() {
    try {
      const albumsRes = await fetch("http://localhost:8000/Ensan/albumsnew/1");
      const AlbumsList = await albumsRes.json();
      this.setState({
        AlbumsList,
      });
    } catch (e) {
      console.log(e);
    }
  }

  Albumsphotos = (e) => {
    fetch(`http://localhost:8000/Ensan/albumphotonew/${e}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    // const Albums = start;
    // console.log(Albums)
    // return Albums.map((item) => (
    //   <Carousel.Item key={item.id}>
    //     <img
    //       src={require("../images" + item.picture.replaceAll("%20", " "))}
    //       className="d-block w-100"
    //     />
    //   </Carousel.Item>
    // ));
  };

  Albums = () => {
    const Albums = this.state.AlbumsList;
    return Albums.map((item) => (
      <div className="col-md-4 key={item.id} ">
        <div className="card mb-4 shadow-sm">
          <img
            className="bd-placeholder-img"
            src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
          />
          <div className="card-body">
            <p className="card-text">
              {item.name}
              <br></br>
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Example photo={this.Albumsphotos(item.id)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <>
        <section className="text-left mt-3">
          <div className="container">
            <h1 className="" style={{ color: "#ee4a8b" }}>
              Concerts
            </h1>
          </div>
        </section>
        <div className="album py-5">
          <div className="container">
            <div className="row">{this.Albums()}</div>
          </div>
        </div>
      </>
    );
  }
}
export default Concerts;

function Example(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Concert Album 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.photo}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
