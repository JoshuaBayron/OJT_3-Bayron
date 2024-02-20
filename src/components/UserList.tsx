import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface UserCardProps {
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  imageSrc: string; // Add an imageSrc prop
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  username,
  email,
  street,
  suite,
  city,
  zipcode,
  imageSrc, // Receive imageSrc prop
}) => {
  return (
    <div className="card-json">
      <img
        src={imageSrc}
        alt="Random"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "5px solid burlywood",
        }}
      />
      <h5>{name}</h5>

      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Street: {street}</p>
      <p>Suite: {suite}</p>
      <p>City: {city}</p>
      <p>Zipcode: {zipcode}</p>
    </div>
  );
};

export default UserCard;
