"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn-quote");
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

  button.addEventListener("click", updateQuote);

  updateQuote();
});
