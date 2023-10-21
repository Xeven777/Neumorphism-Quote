import React, { useState } from "react";
import xSvg from "../Assets/x.svg";
import "./Rq.css";

const RandomQuote = () => {
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    quotes = data;
    console.log(quotes);
  }
  const randomQuote = () => {
    let index = Math.floor(Math.random() * quotes.length);
    let quote = quotes[index];
    setQuote(quote);
  };

  const [quote, setQuote] = useState({
    text: "Need new haters, old ones became my fans",
    author: "Anish",
  });

  const twitter=()=>{
    window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
  }
  loadQuotes();
  return (
    <div className="container">
      <div className="text">{quote.text}</div>
      <div className="lower">
        <div className="line"></div>
        <div className="share">
          <div className="author"> - {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img
              src="https://img.icons8.com/ios/50/available-updates.png"
              alt="reload"
              onClick={() => {
                randomQuote();
              }}
            />
            <img src={xSvg} alt="X" onClick={() => {
                twitter();
              }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
