import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context_gemini";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const [isTyping, setIsTyping] = useState(false);
  const [news, setNews] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      message: input,
      direction: "outgoing",
      sender: "user",
    };
    setInput("");
    setIsTyping(true);
    await onSent(input);
    setIsTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey= YOUR NEWS API KEY"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="greet">
              <p>
                <span>Hello, I'm Gemini.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              {news.slice(0, 3).map((article, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => window.open(article.url, "_blank")}
                >
                  <p>{article.title}</p>
                  {article.urlToImage && (
                    <img src={article.urlToImage} alt={article.title} />
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyPress={handleKeyPress}
            />
            <div>
              {input ? (
                <img
                  onClick={handleSend}
                  src={assets.send_icon}
                  width={30}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
