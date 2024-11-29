const quotes = [
    "Dear! Hard work never goes waste!",
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
    "https://files.oaiusercontent.com/file-S2YffgS3b5My8viZcxSKmN?se=2024-11-27T17%3A39%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7f8833ec-650d-497a-8d22-5931f36fa7b8.webp&sig=jsZSKXzQvOwovhMaRXGxIib7VDZ4KZUdRvgpS6FocYQ%3D",
    "https://files.oaiusercontent.com/file-UJepsPqheVpcZioxfvJHwf?se=2024-11-27T17%3A42%3A24Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D68c488a6-93c6-4505-9a64-d630c592f2bd.webp&sig=G3yFNPSJYYG6pOPDk9I34y/N9HDHbnrUZzP6qkKrXvQ%3D",
    "https://files.oaiusercontent.com/file-CwGRLVZQH9qjyKUXgrdmCg?se=2024-11-27T17%3A44%3A32Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ddd5ea9ea-7235-4d85-bd3e-a0019124a689.webp&sig=BrfMbLXeIfbKHKQQAONaEkiXvsGiy9KD3Cg6oHjgbZY%3D"
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById("quote");
const quoteImage = document.getElementById("quoteImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const userName = prompt("Welcome! What's your name?");
quoteElement.textContent = ${userName}, ${quotes[currentQuoteIndex]};
quoteImage.src = images[currentQuoteIndex];

function updateQuoteAndImage() {
    quoteElement.textContent = ${quotes[currentQuoteIndex]};
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
