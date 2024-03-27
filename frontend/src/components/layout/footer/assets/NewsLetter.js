import React, { useState } from "react";

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <div className="foot-news-col">
        <div className="footer-logo">
          <img src="/Logo.png" alt="logo" />
        </div>
        <div className="newsletter-main">
          <h2>
            Subscribe to our Newsletter
          </h2>
            <p>Get all the latest information, Sales and Offers.</p>
        </div>
        <div className="footer-newsletter">
          <form onSubmit={handleSubmit} className="footer-newaletter-form">
            <input
              type="email"
              id="news-email"
              placeholder="email address here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input type="submit" value={`Subscribe`} />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
