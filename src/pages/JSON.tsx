import React, { useEffect, useState } from "react";
import UserCard from "../components/UserList"; // Renamed component to UserCard
import Navbar from "../components/navigation"; // Renamed component to Navbar
import { Row, Col } from "react-bootstrap";
import BackButton from "../components/btp";
import axios from "axios";

import animeGirl1 from "../images/animeGirl.jpg";
import animeGirl2 from "../images/anime2.jpg";
import animeGirl3 from "../images/anime3.jpg";
import animeGirl4 from "../images/anime4.jpg";
import animeGirl5 from "../images/anime5.jpg";
import animeGirl6 from "../images/anime6.jpg";
import animeGirl7 from "../images/anime7.jpg";
import animeGirl8 from "../images/Anime-Home.png";
import animeGirl9 from "../images/anime8.jpg";
import animeGirl10 from "../images/anime9.jpg";

// Define an interface for the user object
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const imageUrls = [
  animeGirl1,
  animeGirl2,
  animeGirl3,
  animeGirl4,
  animeGirl5,
  animeGirl6,
  animeGirl7,
  animeGirl8,
  animeGirl9,
  animeGirl10,
]; // Array of image URLs

export default function JSON() {
  const [users, setUsers] = useState<User[]>([]); // Annotate users array with User[] type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setTimeout(() => {
          // Introduce a delay here
          setUsers(response.data);
          setLoading(false);
        }, 1000); // Delay of 1000 milliseconds (1 second)
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const getRandomImage = () => {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)]; // Randomly select an image URL
  };

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
          <div className="cards-container">
            <Row className="scrollable-row">
              <h3 style={{ textAlign: "center", marginTop: "5%" }}>
                User List
              </h3>
              {users.map((user) => (
                <Col key={user.id} sm={3} md={3} lg={3} xl={3}>
                  <UserCard
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    street={user.address.street}
                    suite={user.address.suite}
                    city={user.address.city}
                    zipcode={user.address.zipcode}
                    imageSrc={getRandomImage()} // Random image for each user
                  />
                </Col>
              ))}
            </Row>
          </div>
          <div className="calculator-center-container-json">
            <BackButton />
          </div>
        </>
      )}
    </>
  );
}
