// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import "./Piano.css";
import { render } from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function MyVerticallyCenteredModal(props) {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Concert Album 1
                    </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bounty.com/~/media/3aa3165f5be5457fa7b95d092e087c76.ashx?la=en"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bellybelly.com.au/wp-content/uploads/2013/10/when-do-babies-start-talking.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
          alt="Third slide"
        />

    
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export const Gallery =()=> {
    const [modalShow, setModalShow] = React.useState(false);
    return(<>     
      <section className="text-left mt-3">
            <div className="container">
                <h1>Concerts</h1>
            </div>
        </section>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm"><img className="bd-placeholder-img"  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="/>
                            <div className="card-body">
                                <p className="card-text">Concert Album 1<br></br></p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                    <Button variant="primary" onClick={() => setModalShow(true)}>
View
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
     </>
      );
      }
 