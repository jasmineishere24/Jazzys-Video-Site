document.addEventListener("DOMContentLoaded", () => {
  // HIDE MAIN CONTENT UNTIL LOGIN
  const mainContent = document.getElementById("main-content");
  mainContent.style.display = "none";

  // COLLAPSIBLE BUTTON FUNCTIONALITY
  const collapsibles = document.getElementsByClassName("collapsible");
  for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

// LOGIN FUNCTION
function checkLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const correctUser = "Kay Faraday";
  const correctPass = "Sebastian Debeste";

  if (user === correctUser && pass === correctPass) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    document.getElementById("error").textContent = "Incorrect username or password.";
  }
}
