const quotes = [
    "Hard work never goes waste!",
    "Believe you can and you are halfway there.",
    "Practice makes a man perfect.",
    "Attitude is a little thing that makes a big difference.",
    "I cannot express how important it is to believe that taking one tiny—and possibly very uncomfortable—step at a time can ultimately add up to a great distance.",
    "Do your thing and don't care if they like it."
];

const images = [
    "https://plus.unsplash.com/premium_photo-1664304707130-04095161fe32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFyZCUyMHdvcmt8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1549633030-89d0743bad01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsaWV2ZSUyMGluJTIweW91cnNlbGZ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtlZXAlMjBnb2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JTIyQXR0aXR1ZGUlMjBpcyUyMGElMjBsaXR0bGUlMjB0aGluZyUyMHRoYXQlMjBtYWtlcyUyMGElMjBiaWclMjBkaWZmZXJlbmNlLiUyMiUyQyUyMGltYWdlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCUyMkklMjBjYW5ub3QlMjBleHByZXNzJTIwaG93JTIwaW1wb3J0YW50JTIwaXQlMjBpcyUyMHRvJTIwYmVsaWV2ZSUyMHRoYXQlMjB0YWtpbmclMjBvbmUlMjB0aW55JUUyJTgwJTk0YW5kJTIwcG9zc2libHklMjB2ZXJ5JTIwdW5jb21mb3J0YWJsZSVFMiU4MCU5NHN0ZXAlMjBhdCUyMGElMjB0aW1lJTIwY2FuJTIwdWx0aW1hdGVseSUyMGFkZCUyMHVwJTIwdG8lMjBhJTIwZ3JlYXQlMjBkaXN0YW5jZS4lMjIlMjBpbWFnZSUyMHJlbGF0ZWQlMjB0byUyMHRoaXMlMjBxdW90ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661578878097-6bc025a08ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWdub3JhbmNlfGVufDB8fDB8fHww"

];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");
const quoteImage = document.getElementById("quoteImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

const userName = prompt("Welcome! What's your name?") || "Guest";

// Show the welcome message only once when the page loads
welcomeMessage.textContent = `Welcome, ${userName}!`;

// Hide the welcome message after it has been shown
setTimeout(() => {
    welcomeMessage.style.display = "none";
}, 3000); // Hide after 3 seconds (you can adjust this duration)

quoteElement.textContent = `${quotes[currentQuoteIndex]}`;
quoteImage.src = images[currentQuoteIndex];

function updateQuoteAndImage() {
    quoteElement.textContent = `${quotes[currentQuoteIndex]}`;
    quoteImage.src = images[currentQuoteIndex];
}

nextBtn.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    updateQuoteAndImage();
});

prevBtn.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    updateQuoteAndImage();
});
quoteElement.classList.remove("fade-in");
void quoteElement.offsetWidth; 
quoteElement.classList.add("fade-in");
images.forEach((img) => {
    const image = new Image();
    image.src = img;
});

