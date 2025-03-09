import React, { useEffect, useState } from "react";
import "../styles/layout.css";
import Card from "../components/hobbiesCard";

import animeGirl from "../images/animeGirl.jpg";
import Music from "../images/Headphone.jpg";
import Games from "../images/games.jpg";
import Foods from "../images/foods.jpg";

const cardsData = [
  { id: 1, image: animeGirl, title: "Watching Anime", description: "I love watching anime, especially Isekai." },
  { id: 2, image: Music, title: "Listening to Music", description: "My favorite music is mostly JPop, like Karano Kokoro." },
  { id: 3, image: Games, title: "Playing Games", description: "I enjoy playing mobile games like Mobile Legends and CODM." },
  { id: 4, image: Foods, title: "Eating", description: "I love eating, especially when it's free." },
];

const Hobbies: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [fetchedDescriptions, setFetchedDescriptions] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const toggleDescription = (id: number) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);

      if (!fetchedDescriptions[id]) {
        setFetchedDescriptions((prev) => ({
          ...prev,
          [id]: "Fetching description...",
        }));

        setTimeout(() => {
          const card = cardsData.find((c) => c.id === id);
          if (card) {
            setFetchedDescriptions((prev) => ({ ...prev, [id]: card.description }));
          }
        }, 500);
      }
    }
  };

  return (
    <div className={`app-container ${expandedCardId !== null ? "overlay-active" : ""}`}>
      {/* Show overlay and ONLY the expanded card */}
      {expandedCardId !== null ? (
        <div className="overlay" onClick={() => setExpandedCardId(null)}>
          <div className="expanded-card-container" onClick={(e) => e.stopPropagation()}>
            <Card
              {...cardsData.find((card) => card.id === expandedCardId)!}
              expandedCardId={expandedCardId}
              onToggle={toggleDescription}
            />
          </div>
        </div>
      ) : (
        // Show all cards only when no card is expanded
        <div className="cards-container">
          {loading ? (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <div className="loader"></div>
              <p>Loading...</p>
            </div>
          ) : (
            cardsData.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                description={expandedCardId === card.id ? fetchedDescriptions[card.id] || "Fetching description..." : ""}
                expandedCardId={expandedCardId}
                onToggle={toggleDescription}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Hobbies;