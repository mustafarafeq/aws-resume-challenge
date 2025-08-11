// Example interactivity – dynamically highlight your name on page load
window.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector("h1");
  name.style.color = "#004aad";

  // Visitor counter placeholder
  const counterElement = document.getElementById("visitor-counter");

  // Simulated fetch from backend (replace with AWS API Gateway URL later)
  // Example: fetch('https://your-api-gateway-url.com/dev/counter')
  setTimeout(() => {
    const fakeCount = Math.floor(Math.random() * 100) + 1; // Random number 1–100
    counterElement.innerText = fakeCount;
  }, 500); // delay for visual effect
});
