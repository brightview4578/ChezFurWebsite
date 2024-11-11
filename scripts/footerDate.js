// JavaScript to display the current date in the footer of the page
document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
      dateElement.textContent = new Date().toLocaleDateString();
    }
  });
  