import React from "react";
import { Button } from "react-bootstrap";
import "../styles/layout.css";

const Layout: React.FC = () => {
  return (
    <div className="home-button">
      <div className="button"></div>
      <Button
        variant="warning"
        className="button white burlywood-background br-burlywood antiquewhite-background"
        href="Calculator"
      >
        Calculator
      </Button>

      <Button
        variant="warning"
        className="button white burlywood-background br-burlywood antiquewhite-background"
        href="JSON"
      >
        JSON
      </Button>
    </div>
  );
};

export default Layout;
