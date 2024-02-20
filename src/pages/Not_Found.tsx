import React from "react";
import "../styles/layout.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import BackButton from "../components/btp";
import animeGirl8 from "../images/Anime-Home.png";

export default function Not_Found() {
  return (
    <>
      <div className="Home Homepage">
        <Container fluid>
          <div className="center-container home-h1">
          <img src={animeGirl8} alt="Anime Home" style={{width:"10%", height:"10%", margin:"0"}} />
            <h1>404 Page Not Found</h1>
            <p>Page Not Included or You don't have an access to this Page...</p>
            <div className="calculator-center-container-json">
              <BackButton />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
