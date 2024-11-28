const quotes = [
    "Dear! Hard work never goes waste!",
    "Believe you can and you are halfway there.",
    "Practice makes a man perfect.",
    "Attitude is a little thing that makes a big difference.",
    "I cannot express how important it is to believe that taking one tiny—and possibly very uncomfortable—step at a time can ultimately add up to a great distance.",
    "Do your thing and don't care if they like it."
];

const images = [
    "https://plus.unsplash.com/premium_photo-1664304707130-04095161fe32?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1549633030-89d0743bad01?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=500&auto=format&fit=crop&q=60"
];

let currentQuoteIndex = 0;

// DOM elements
const quoteElement = document.getElementById("quote");
const quoteImage = document.getElementById("quoteImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Prompt for user name
const userName = prompt("Welcome! What's your name?") || "Guest";

// Initialize first quote and image
quoteElement.textContent = `${userName}, ${quotes[currentQuoteIndex]}`;
quoteImage.src = images[currentQuoteIndex % images.length];

// Function to update quote and image
function updateQuoteAndImage() {
    quoteElement.textContent = `${userName}, ${quotes[currentQuoteIndex]}`;
    quoteImage.src = images[currentQuoteIndex % images.length];
}

// Event listeners for navigation
nextBtn.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; 
    updateQuoteAndImage();
});

prevBtn.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    updateQuoteAndImage();
});
