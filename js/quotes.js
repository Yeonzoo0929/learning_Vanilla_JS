const quotes = [
  {
    quote: "Just Do it",
    author: "NIKE",
  },
  {
    quote: "No one is ever satisfied where he is",
    author: "The Little Prince",
  },
  {
    quote:
      "The greatest glory in living lies not in ever falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Never let the feaf of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "All you need in this life is ignorance and confidence, then success is sure.",
    author: "Mark Twain",
  },
  {
    quote:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagace",
  },
  {
    quote:
      "If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Bruce Lee",
  },
  {
    quote:
      "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life. ",
    author: "Jackie Robinson",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
