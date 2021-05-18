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
    await fetch("https://arcane-sands-17213.herokuapp.com/api/media", {
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
    <div className="libraryContainer">
      <div className="container">
        <div className="genreText">Comedy</div>
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
                  <p className="mediaText">{clickMedia[3]}</p>
                  <p className="mediaText">{clickMedia[1]}</p>
                  <p className="mediaText">{clickMedia[4]}</p>
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
        <div className="genreText">Action</div>
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
                  <p className="mediaText">{clickMedia[3]}</p>
                  <p className="mediaText">{clickMedia[1]}</p>
                  <p className="mediaText">{clickMedia[4]}</p>
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
        <div className="genreText">Sci-fi</div>
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
                  <p className="mediaText">{clickMedia[3]}</p>
                  <p className="mediaText">{clickMedia[1]}</p>
                  <p className="mediaText">{clickMedia[4]}</p>
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
        <div className="genreText">Family-Friendly</div>
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
                  <p className="mediaText">{clickMedia[3]}</p>
                  <p className="mediaText">{clickMedia[1]}</p>
                  <p className="mediaText">{clickMedia[4]}</p>
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
    </div>
  );
};
export default Slider;
