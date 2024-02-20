import React, { useEffect, useState } from "react";
import "../styles/layout.css";
import Card from "../components/hobbiesCard";
import Navbar from "../components/navigation";
import MySlider from "../components/Slider";

import animeGirl from "../images/animeGirl.jpg";
import Music from "../images/Headphone.jpg";
import Games from "../images/games.jpg";
import Foods from "../images/foods.jpg";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const slides = [
    { image: animeGirl, caption: "Watching Anime" },
    { image: Music, caption: "Vibing to Music" },
    { image: Games, caption: "Playing Games" },
    { image: Foods, caption: "Eating Syempre" },
  ];

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div style={{ backgroundColor: "black" }}>
            <MySlider slides={slides} />
          </div>

          <div className="cards-container">
            <Card
              image={animeGirl}
              title="Watching Anime"
              description="I love watching anime especially Isekai."
            />
            <Card
              image={Music}
              title="Listening to Music"
              description="My favorite music mostly is JPop music, like Karano Kokoro"
            />
            <Card
              image={Games}
              title="Playing Games"
              description="Playing mobile app games like mobile legends and CODM is what I played mostly."
            />
            <Card
              image={Foods}
              title="Eating"
              description="I love to eat, especially when it is free."
            />
          </div>
        </>
      )}
    </>
  );
};

export default App;
