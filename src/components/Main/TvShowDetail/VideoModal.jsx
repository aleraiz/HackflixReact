import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import { useEffect, useState } from "react";

const VideoModal = ({ videoKey }) => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  // console.log(videoKey);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      <p className="me-2 mb-2 pointer" onClick={() => handleShow()}>
        Watch Trailer
      </p>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Body className="bg-dark d-flex justify-content-center align-items-center">
          <iframe
            className="movie-trailer"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VideoModal;
