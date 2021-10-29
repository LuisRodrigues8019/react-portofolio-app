import "./contact.scss";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contacts() {
  const [message, setMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "gmail",
        "gmailtemplate",
        e.target,
        "user_JVzgAzWIyQO5rW05njWQE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    setTimeout(() => {
      setMessage(false);
    }, 5000);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Email"
            label="Email"
            name="email"
            required
          />
          <textarea
            placeholder="Message"
            label="Message"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn-hover color-7">
            Send
          </button>
        </form>
        {message && <span>Thanks, I'll reply ASAP</span>}
      </div>
    </div>
  );
}
