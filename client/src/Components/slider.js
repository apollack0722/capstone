import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { CreateOrderButton } from "./index";
const userId = localStorage.getItem("userId");

const Slider = () => {
  const [clickMedia, setClickMedia] = useState([]);
  const [media, setMedia] = useState([]);
  const [show, setShow] = useState(false);
  const addDescription = (id) => {
    media.forEach((product) => {
      if (product.id == id) {
        let newMedia = [
          product.title,
          product.description,
          product.genre,
          product.buyPrice,
          product.rating,
        ];
        setClickMedia(newMedia);
        setShow(true);
      }
    });
  };

  const getMedia = async () => {
    await fetch("http://localhost:3001/api/media", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMedia(result);
      })
      .catch(console.error);
  };
  useEffect(() => {
    getMedia();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Comedy</h2>
        {media.map((media, index) =>
          media.genre === "Comedy" ? (
            <div className="item" key={index}>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    {clickMedia[0]}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{clickMedia[3]}</p>
                  <p>{clickMedia[1]}</p>
                  <p>{clickMedia[4]}</p>
                </Modal.Body>
              </Modal>

              <input
                value={Number(media.id)}
                type="image"
                className="slider-img"
                src={media.imgUrl}
                alt=""
                onClick={(event) => addDescription(event.target.value)}
              />
              <CreateOrderButton
                purchased={false}
                mediaId={media.id}
                date={Date()}
                userId={userId}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="container">
        <h2>Action</h2>
        {media.map((media, index) =>
          media.genre === "Action" ? (
            <div className="item" key={index}>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    {clickMedia[0]}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{clickMedia[3]}</p>
                  <p>{clickMedia[1]}</p>
                  <p>{clickMedia[4]}</p>
                </Modal.Body>
              </Modal>

              <input
                value={Number(media.id)}
                type="image"
                className="slider-img"
                src={media.imgUrl}
                alt=""
                onClick={(event) => addDescription(event.target.value)}
              />
              <CreateOrderButton
                purchased={false}
                mediaId={media.id}
                date={Date()}
                userId={userId}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="container">
        <h2>Sci-fi</h2>
        {media.map((media, index) =>
          media.genre === "Sci-Fi" ? (
            <div className="item" key={index}>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    {clickMedia[0]}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{clickMedia[3]}</p>
                  <p>{clickMedia[1]}</p>
                  <p>{clickMedia[4]}</p>
                </Modal.Body>
              </Modal>

              <input
                value={Number(media.id)}
                type="image"
                className="slider-img"
                src={media.imgUrl}
                alt=""
                onClick={(event) => addDescription(event.target.value)}
              />
              <CreateOrderButton
                purchased={false}
                mediaId={media.id}
                date={Date()}
                userId={userId}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="container">
        <h2>Family-Friendly</h2>
        {media.map((media, index) =>
          media.genre === "Family Friendly" ? (
            <div className="item" key={index}>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    {clickMedia[0]}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{clickMedia[3]}</p>
                  <p>{clickMedia[1]}</p>
                  <p>{clickMedia[4]}</p>
                </Modal.Body>
              </Modal>

              <input
                value={Number(media.id)}
                type="image"
                className="slider-img"
                src={media.imgUrl}
                alt=""
                onClick={(event) => addDescription(event.target.value)}
              />
              <CreateOrderButton
                purchased={false}
                mediaId={media.id}
                date={Date()}
                userId={userId}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};
export default Slider;
