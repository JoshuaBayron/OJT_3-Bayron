import React from "react";
import { Button } from "react-bootstrap";
import "../styles/layout.css";
const btp: React.FC = () => {
  return (
    <div className="home-button">
      <div className="button"></div>
      <Button
        variant="warning"
        className="button white burlywood-background br-burlywood antiquewhite-background btp"
        href="Home"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default btp;
