import React from "react";
import { useForm, ValidationError } from "@formspree/react"; // Import the useForm hook from Formspree
import "./Style/Contact.css";

const ContactUs = () => {
  // Use the useForm hook to handle the Formspree form submission
  const [state, handleSubmit] = useForm("mdoqebwl");
  if (state.succeeded) {
    return (
      <h5
        style={{
          textAlign: "center",
        }}
      >
        Thank you for reaching out to us. We will get back to you when we get
        your Email.
      </h5>
    );
  }
  const handleWhatsApp = () => {
    // Replace the phone number with your own WhatsApp number
    window.open("https://wa.me/0781540518", "_blank");
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" class="form-label">
            Names
          </label>
          <input id="name" type="text" name="name" class="form-input" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email" class="form-label">
            Email Address
          </label>
          <input id="email" type="email" name="email" class="form-input" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="email">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          <button type="button" className="whatsapp" onClick={handleWhatsApp}>
            WhatsApp
          </button>
        </form>
      </div>
      <div className="map-container">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.867062364896!2d28.8078823!3d-25.8250308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9563fea675398b%3A0xb64631be26756ba!2s4%20Seasons%20Country%20Club!5e0!3m2!1sen!2suk!4v1644149920982!5m2!1sen!2suk"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
