// Highlight your name on page load
window.addEventListener("DOMContentLoaded", () => {
  // Optional: Change header color for a nice effect
  const name = document.querySelector("h1");
  if (name) {
    name.style.color = "#004aad";
  }

  // Visitor counter logic
  const counterElement = document.getElementById("visitor-counter");

  if (!counterElement) {
    console.error("No #visitor-counter element found in HTML.");
    return;
  }

  console.log("Visitor counter script running...");

  fetch("https://hu7b2m292j.execute-api.us-east-1.amazonaws.com/default/resume-visitor-counter")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Visitor counter API response:", data);
      counterElement.innerText = data.count ?? "0";
    })
    .catch(err => {
      console.error("Error fetching visitor count:", err);
      counterElement.innerText = "0";
    });
});

