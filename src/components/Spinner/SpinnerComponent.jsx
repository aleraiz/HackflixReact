import Spinner from "react-bootstrap/Spinner";
import { React } from "react";
import "./Styles.css";

const SpinnerComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center spinner">
      <Spinner animation="border" variant="light" />;
      <p className="text-light loading">Loading...</p>
    </div>
  );
};

export default SpinnerComponent;
