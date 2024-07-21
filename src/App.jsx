import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Gemini from "./components/Main/Gemini";
import Chatgpt from "./components/Main/Chatgpt";
import ContextProviderChatGPT from "./context/Context_chatgpt";
import ContextProviderGemini from "./context/Context_gemini";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Chatgpt");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Chatgpt":
      default:
        return (
          <ContextProviderChatGPT>
            <Chatgpt />
          </ContextProviderChatGPT>
        );
      case "Gemini":
        return (
          <ContextProviderGemini>
            <Gemini />
          </ContextProviderGemini>
        );
    }
  };

  return (
    <>
      <Sidebar setSelectedComponent={setSelectedComponent} />
      {renderComponent()}
    </>
  );
};

export default App;
