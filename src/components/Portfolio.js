import React from "react";
import "./Style/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        <div className="project">
          <img src="https://via.placeholder.com/150" alt="Project 1" />
          <h2>Person 1</h2>
          <p>Description of Person 1</p>
        </div>
        <div className="project">
          <img src="./Images/Chrispen Magadzire.jpg" alt="Project 2" />
          <h2>Chrispen Magadzire</h2>
          <p>
            Chrispen Magadzire is a dedicated and passionate gardener, committed
            to nurturing and beautifying outdoor spaces with his green thumb.
            With years of experience in horticulture and landscaping, Chrispen
            brings a wealth of knowledge and expertise to his role. He possesses
            a keen eye for detail, ensuring that every plant is meticulously
            cared for and every garden is thoughtfully designed.
          </p>
          <hr />
          <p>
            In his work as a gardener, Chrispen takes pride in creating vibrant
            and thriving landscapes that enhance the natural beauty of their
            surroundings. Whether it's planting colorful flowers, trimming
            hedges, or maintaining lawns, he approaches each task with
            enthusiasm and care. His love for nature shines through in his work,
            as he seeks to create outdoor environments that are not only
            visually stunning but also sustainable and eco-friendly.
          </p>
        </div>
      </div>
      <h1>Main Point About This Portfolio:</h1>
      <p>
        This portfolio showcases a diverse range of projects undertaken by
        individuals (Person 1 and Chrispen Magadzire), highlighting their unique
        skills, expertise, and contributions. Each project represents a distinct
        accomplishment, demonstrating the capabilities and achievements of the
        individuals involved. Whether it's through innovative solutions,
        creative endeavors, or impactful initiatives, this portfolio aims to
        exemplify the talent and proficiency of its contributors while offering
        insights into their professional endeavors.
      </p>
    </div>
  );
};

export default Portfolio;
