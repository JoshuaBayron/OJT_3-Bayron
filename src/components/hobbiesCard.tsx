import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  expandedCardId: number | null;
  onToggle: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, title, description, image, expandedCardId, onToggle }) => {
  const isExpanded = expandedCardId === id;

  return (
    <BootstrapCard
      className={`text-center mx-auto ${isExpanded ? "expanded-card" : ""}`}
      style={{
        maxWidth: isExpanded ? "100%" : "400px",
        transition: "0.3s ease-in-out",
        padding: isExpanded ? "20px" : "0",
        backgroundColor: isExpanded ? "white" : "inherit",
        zIndex: isExpanded ? 1001 : 1,
        border: isExpanded ? "none" : "1px solid #ccc",
        borderRadius: isExpanded ? "0" : "10px",
        boxShadow: isExpanded ? "none" : "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <BootstrapCard.Img
        variant="top"
        src={image}
        style={{ 
          borderRadius: "50%",
          border: "10px solid burlywood",
          width: "150px",
          height: "150px",
          objectFit: "cover",
          margin: "20px auto 0",
        }}
      />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        {isExpanded && <p>{description}</p>}
        <Button variant="primary" onClick={() => onToggle(id)} className="mt-2">
          {isExpanded ? "Close" : "Read More"}
        </Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
