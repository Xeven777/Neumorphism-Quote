import React, { useState, useEffect } from "react";
import axios from "axios";
import xSvg from "../Assets/x.svg";
import "./Rq.css";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: ":)",
    author: "Anish",
  });

  const loadQuotes = async () => {
    // const category = "happiness";
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes`, {
        headers: {
          "X-Api-Key": "0aB/uM7KvMCxtbs7fE4qWg==HQvEjHvEZ0sz02ax",
        },
      });
      const newQuote = response.data[0];
      setQuote(newQuote);
    } catch (error) {
      console.error("Error loading quotes:", error);
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.quote} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  return (
    <div className="container">
      <div className="text">{quote.quote}</div>
      <div className="lower">
        <div className="line"></div>
        <div className="share">
          <div className="author"> - {quote.author}</div>
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
