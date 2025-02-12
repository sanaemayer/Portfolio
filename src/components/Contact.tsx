// Contact.tsx
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Grab the form values
    const form = e.target as HTMLFormElement;

    // Use EmailJS to send the email
    emailjs
      .sendForm(
        "service_wzmhedi", // replace with your service ID
        "template_vlo5icb", // replace with your template ID
        form,
        "KYg3jIgsTmFVBnukx" // replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setFormStatus("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="contact-section">
      <h1>Contact Me</h1>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Display status after form submission */}
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default Contact;
