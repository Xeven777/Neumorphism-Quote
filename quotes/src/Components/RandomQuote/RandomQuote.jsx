import React, { useState, useEffect } from "react";
import axios from "axios";
import xSvg from "../Assets/x.svg";
import "./Rq.css";

const apiKey = process.env.REACT_APP_API_KEY;
const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const loadQuotes = async () => {
    // const category = "happiness";
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes`, {
        headers: {
          "X-Api-Key": apiKey,
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
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
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
