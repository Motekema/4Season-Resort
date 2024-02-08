import React from "react";
import backgroundVideo from "./Video/video-6.mp4";
import "./Style/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="welcome-message">
        <h1>Welcome to 4 Seasons Resort</h1>
        <p>Experience Luxury in Every Season at 4Seasons Resort</p>
      </div>
    </div>
  );
};

export default Home;
