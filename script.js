"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const buttonLeft = document.querySelector(".btn--left");
  const buttonRight = document.querySelector(".btn--right");
  const buttonTopLeft = document.querySelector(".quote-type--1");
  const buttonTopRight = document.querySelector(".quote-type--2");

  const quote = document.querySelector(".main-quote");
  const author = document.querySelector("h1");

  async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      quote.textContent = data.content;
      author.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  buttonLeft.addEventListener("click", updateQuote);
  buttonRight.addEventListener("click", updateQuote);
  buttonRight.addEventListener("click", updateQuote);
  buttonTopLeft.addEventListener("click", updateQuote);
  buttonTopRight.addEventListener("click", updateQuote);

  updateQuote();
});
