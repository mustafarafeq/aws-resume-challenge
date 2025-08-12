window.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector("h1");
  name.style.color = "#004aad";

  const counterElement = document.getElementById("visitor-counter");

  fetch(https://hu7b2m292j.execute-api.us-east-1.amazonaws.com/default)
    .then(res => res.json())
    .then(data => {
      counterElement.innerText = data.count;
    })
    .catch(err => {
      console.error("Error fetching count:", err);
      counterElement.innerText = "Error";
    });
});

