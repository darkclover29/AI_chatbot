import { createContext, useState } from "react";

export const Context = createContext();

// Paste Your API KEY Below
const API_KEY = "OPENAI_API_KEY";
const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

const ContextProvider = (props) => {
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...chatMessages],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });
    const data = await response.json();
    return data.choices[0].message.content;
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    const userPrompt = prompt !== undefined ? prompt : input;

    setPrevPrompts((prev) => [...prev, userPrompt]);
    setRecentPrompt(userPrompt);

    const chatMessages = [{ role: "user", content: userPrompt }];
    const response = await processMessageToChatGPT(chatMessages);

    let responseArray = response.split("**");
    let newArray = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newArray += responseArray[i];
      } else {
        newArray += "<b>" + responseArray[i] + "</b>";
      }
    }

    responseArray = newArray.split("*").join("</br>").split(" ");
    for (let i = 0; i < responseArray.length; i++) {
      const nextWord = responseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const newChat = async () => {
    setLoading(false);
    setShowResult(false);
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
