import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import HelpPopup from "./HelpPopup";

const Sidebar = ({ setSelectedComponent }) => {
  const [extended, setExtended] = useState(false);
  const [showHelpPopup, setShowHelpPopup] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div
          className="bottom-item recent-entry"
          onClick={() => setSelectedComponent("Chatgpt")}
        >
          <img
            src={assets.chatgpt_icon}
            alt="ChatGPT"
            className="circular-logo"
          />
          {extended ? <p>ChatGPT</p> : null}
        </div>
        <div
          className="bottom-item recent-entry"
          onClick={() => setSelectedComponent("Gemini")}
        >
          <img
            src={assets.gemini_icon}
            alt="Gemini"
            className="circular-logo"
          />
          {extended ? <p>Gemini</p> : null}
        </div>
      </div>
      <div className="bottom">
        <div
          className="bottom-item recent-entry"
          onClick={() => setShowHelpPopup(true)}
        >
          <img src={assets.question_icon} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>
      </div>
      {showHelpPopup && <HelpPopup onClose={() => setShowHelpPopup(false)} />}
    </div>
  );
};

export default Sidebar;
