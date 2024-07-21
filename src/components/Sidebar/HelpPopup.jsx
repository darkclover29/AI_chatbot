import React from "react";
import "./HelpPopup.css";

const HelpPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="faq">
          <h3>General Questions</h3>
          <div className="question">
            <h4>How do I use ChatGPT in this app?</h4>
            <p>
              Select the ChatGPT option from the sidebar to start interacting
              with the ChatGPT API.
            </p>
          </div>
          <div className="question">
            <h4>How do I use Gemini in this app?</h4>
            <p>
              Select the Gemini option from the sidebar to start interacting
              with the Gemini API.
            </p>
          </div>
          <div className="question">
            <h4>What is the purpose of this chatbot?</h4>
            <p>
              This chatbot allows you to interact with AI models for various
              tasks and get responses from ChatGPT or Gemini.
            </p>
          </div>
          <div className="question">
            <h4>How can I contact support?</h4>
            <p>
              You can click the "Contact Us Now" button to send an email to our
              support team.
            </p>
          </div>

          <button
            className="contact-btn"
            onClick={() =>
              (window.location.href = "mailto:codesdifferent@gmail.com")
            }
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPopup;
