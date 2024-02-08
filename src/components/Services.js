import React from "react";
import Slider from "./Card";
import "./Style/CardSlider.css";

const Services = () => {
  const services = [
    {
      title: "Guest Rooms",
      description: " R650 per night",
      image: "./Images/image2.jpg",
    },
    {
      title: "Bachelor flats",
      description: "R 3800 monthly",
      image: "./Images/image3.jpg",
    },
    {
      title: "2bedroom flats, 1barth,open plan kitchen",
      description: "R4500 monthly",
      image: "./Images/image11.jpg",
    },
    {
      title: "5bd with 3 bathrooms",
      description: "R5600 monthly ",
      image: "./Images/image29.jpg",
    },
  ];

  const additionalImages = [
    "./Images/image6.jpg",
    "./Images/image20.jpg",
    "./Images/image8.jpg",
    "./Images/image9.jpg",
    "./Images/image10.jpg",
    "./Images/image11.jpg",
    "./Images/image28.jpg",
    "./Images/image13.jpg",
    "./Images/image14.jpg",
    "./Images/image15.jpg",
    "./Images/image16.jpg",
    "./Images/image17.jpg",
    "./Images/image18.jpg",
    "./Images/image19.jpg",
    "./Images/image21.jpg",
    "./Images/image22.jpg",
    "./Images/image23.jpg",
    "./Images/image24.jpg",
  ];

  return (
    <div className="services" style={{ textAlign: "center" }}>
      <h1>Our Services</h1>
      <Slider>
        {services.map((service, index) => (
          <div key={index} className="service">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
      <h3
        style={{
          textDecoration: "underline",
          marginBottom: "10px",
          marginTop: "7px",
        }}
      >
        What you can expect...
      </h3>
      <div className="additional-images">
        {additionalImages.map((image, index) => (
          <img key={index} src={image} alt={`Additional ${index + 1}`} />
        ))}
      </div>
      <h5>
        The 4Season Resort is a luxurious accommodation destination offering a
        range of exquisite rooms and flats tailored to meet your needs.
      </h5>
      <div className="conclusion">
        <p>
          <h4>Guest Rooms</h4> Our elegantly designed guest rooms provide a
          comfortable stay with rates starting from R650 per night. Perfect for
          travelers seeking a peaceful retreat amidst scenic surroundings.
        </p>
        <p>
          <h4>Bachelor Flats:</h4> Experience convenience and sophistication in
          our bachelor flats, starting from R 3800 monthly. Ideal for
          individuals or couples looking for a modern living space with all
          amenities included.
        </p>
        <p>
          <h4>2 Bedroom Flats, 1 Bathroom, Open Plan Kitchen:</h4> Our spacious
          2-bedroom flats boast a contemporary design featuring an open-plan
          kitchen and a comfortable living area. Monthly rates starting from
          R4500 make it an affordable choice for families or groups seeking
          long-term accommodation.
        </p>
        <p>
          <h4>5 Bedrooms with 3 Bathrooms:</h4> Indulge in luxury with our
          expansive 5-bedroom residences, complete with 3 bathrooms for added
          convenience. Enjoy the epitome of comfort and style with monthly rates
          starting from R5600.
        </p>
        <hr />
        <p>
          At 4Season Resort, we strive to ensure your stay is nothing short of
          exceptional, offering unparalleled hospitality and amenities tailored
          to make your experience truly memorable.Immerse yourself in a world of
          luxury and comfort as our dedicated staff attends to your every need
          with warmth and efficiency. Whether you're here for business or
          leisure, our resort promises an unforgettable retreat filled with
          relaxation and rejuvenation.
        </p>
      </div>
    </div>
  );
};

export default Services;
