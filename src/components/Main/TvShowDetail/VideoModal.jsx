import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import { useEffect, useState } from "react";

const VideoModal = ({ videoKey }) => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  console.log(videoKey);

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

// const VideoModal = (props) => {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         {/* <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title> */}
//       </Modal.Header>
//       <Modal.Body className="video-modal">
//         <iframe
//           className="movie-trailer"
//           //   width="1000"
//           //   height="215"
//           src="https://www.youtube.com/embed/vGHrJDmepI0"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>
//         {/* <Button onClick={props.onHide}>Close</Button> */}
//       </Modal.Body>
//       {/* <Modal.Footer>
//       </Modal.Footer> */}
//     </Modal>
//   );
// };

export default VideoModal;
