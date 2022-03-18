import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { Component, useState } from "react";
import "./Piano.css";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useAsync } from "react-async";
class Exhibitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AlbumsList: [],
      start: [],
    };
  }
  async componentDidMount() {
    try {
      const albumsRes = await fetch("http://localhost:8000/Ensan/albumsnew/3");
      const AlbumsList = await albumsRes.json();
      this.setState({
        AlbumsList,
      });
    } catch (e) {
      console.log(e);
    }
  }
  Albums = () => {
    const Albums = this.state.AlbumsList.reverse(true);
    return Albums.map((item) => (
      <div className="col-md-4 key={item.id} ">
        <div className="card mb-4 shadow-sm">
        <div className="bd-placeholder-img">
            <img
              src={item.album[0].replaceAll("http://localhost:8000", "")}
              className="img-fluid rounded-start big"
              alt="empty album"
            />
          </div>
          <div className="card-body">
            <p className="card-text">
              {item.name}
              <br></br>
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Example id={item.id} />
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
              Exhibitions
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
export default Exhibitions;

const loadUsers = async ({ id }) =>
  await fetch(`http://localhost:8000/Ensan/albumphotonew/${id}`)
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function Example(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const { data, error, isLoading } = useAsync({
    promiseFn: loadUsers,
    id: props.id,
  });
  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
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
              {data.map((item) => (
                <Carousel.Item key={item.id}>
                  <img
                      src={
                        item.picture
                          .replaceAll("http://localhost:8000", "")}
                          className="d-block w-100"
                      alt="..."
                    />
                </Carousel.Item>
              ))}
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
