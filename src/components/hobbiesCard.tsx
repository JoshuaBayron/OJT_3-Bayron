import React from "react";
import "../styles/layout.css";
import TransButton from "./readMore";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} style={{borderRadius:"50%",border:"10px solid burlywood"}}></img>
      <h5 style={{textAlign:"center", marginTop:"2%"}}>{title}</h5>
      <TransButton label={description} />
    </div>
  );
};

export default Card;
