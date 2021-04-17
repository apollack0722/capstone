import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const Slider = () => {
  //  const addDescription = (id) => {
  //     media.forEach((product) => {
  //       if(product.id == id){
  //         // render a module
  //         //console.log(product.title, product.description, product.genre, product.buyPrice, product.rating)

  //       }
  //     })
  //  }

  const [media, setMedia] = useState([]);
  const [show, setShow] = useState(false);

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
                    {media.title}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{media.buyPrice}</p>
                  <p>{media.description}</p>
                  <p>{media.rating}</p>
                </Modal.Body>
              </Modal>

              <input
                value={Number(media.id)}
                type="image"
                className="slider-img"
                src={media.imgUrl}
                alt=""
                //onClick={(event) => addDescription(event.target.value)}
                onClick={() => setShow(true)}
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
              <img className="slider-img" src={media.imgUrl} alt="" />
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
              <img className="slider-img" src={media.imgUrl} alt="" />
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
              <img className="slider-img" src={media.imgUrl} alt="" />
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
// need to add a purchase button to each individual movie
//Which means the purchase button needs to be inside the map to grab the unique id of the movie
// maybe an onClick button, we can make a function outside which changes the isPurchased to true?
