import "../styles/layout.css";

import Forms from "../components/form";
import HomeButton from "../components/home_button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="Home Homepage">
        <div className="center-container">
          <h1 className="home-h1">Digital Transformation</h1>
        </div>
        <div className="center-container">
          <div className="author-container">
            <div className="author-introduction">
              <h5>
                <i>Created By:</i>
              </h5>
            </div>
            <div className="author-name">
              <Forms />
            </div>
          </div>
        </div>
        <div className="center-container" style={{ marginBottom: "2%" }}>
          <HomeButton />
        </div>
        <div className="center-container">
          <div className="about-container">
            <p className="h-details mr-5">
              &nbsp;Hi! My name is Joshua Bayron, By Clicking the <b>Button</b>{" "}
              below you will learn more about me.
            </p>
            <Button
              variant="warning"
              className="button white burlywood-background br-burlywood antiquewhite-background"
              href="Hobbies"
            >
              Learn More
            </Button>
          </div>
        
        </div>
      </div>
    </>
  );
}
