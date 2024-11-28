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
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=500&auto=format&fit=crop&q=60",
    "https://files.oaiusercontent.com/file-S2YffgS3b5My8viZcxSKmN?se=2024-11-27T17%3A39%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800",
    "https://files.oaiusercontent.com/file-UJepsPqheVpcZioxfvJHwf?se=2024-11-27T17%3A42%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800",
    "https://files.oaiusercontent.com/file-CwGRLVZQH9qjyKUXgrdmCg?se=2024-11-27T17%3A44%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800"
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");
const quoteImage = document.getElementById("quoteImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const userName = prompt("Welcome! What's your name?") || "Guest";

// Initialize first quote and image
quoteElement.textContent = ${userName}, ${quotes[currentQuoteIndex]};
quoteImage.src = images[currentQuoteIndex];

function updateQuoteAndImage() {
    // Update the quote and image for the current index
    quoteElement.textContent = ${userName}, ${quotes[currentQuoteIndex]};
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
