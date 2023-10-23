import React, { useState, useEffect } from "react";
import xSvg from "../Assets/x.svg";
import "./Rq.css";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const loadQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuote(data[Math.floor(Math.random() * data.length)]);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  return (
    <div className="container">
      <div className="text">{quote.text}</div>
      <div className="lower">
        <div className="line"></div>
        <div className="share">
          <div className="author"> - {quote.author.split(",")[0]}</div>
          <div className="icons">
            <img
              src="https://img.icons8.com/ios/50/available-updates.png"
              alt="reload"
              onClick={loadQuotes}
            />
            <img src={xSvg} alt="X" onClick={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
