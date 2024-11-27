const quotes = [
        "Hard work never goes waste!",
        "Believe you can and you are halfway there.",
        "Practice makes a man perfect."

];

const images = [
    "https://plus.unsplash.com/premium_photo-1664304707130-04095161fe32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFyZCUyMHdvcmt8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1549633030-89d0743bad01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsaWV2ZSUyMGluJTIweW91cnNlbGZ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtlZXAlMjBnb2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    
];

            


let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");
const quoteImage = document.getElementById("quoteImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const userName = prompt("Welcome! What's your name?");
quoteElement.textContent = `Hello dear ❤! <br/>${userName}! ${quotes[currentQuoteIndex]}`;
quoteImage.src = images[currentQuoteIndex];
function updateQuoteAndImage() {
    quoteElement.textContent = ` ${quotes[currentQuoteIndex]}`;
    quoteImage.src = images[currentQuoteIndex];
}

nextBtn.addEventListener("click", () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length; 
    updateQuoteAndImage();
});

prevBtn.addEventListener("click", () => {
    currentQuoteIndex =
        (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    updateQuoteAndImage();
});
