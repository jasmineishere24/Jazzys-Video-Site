// COLLAPSIBLE BUTTON FUNCTIONALITY
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// LOGIN SYSTEM
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("main-content").style.display = "none";
});

function checkLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Your username and password
  const correctUser = "Kay Faraday";
  const correctPass = "Sebastian Debeste";

  if (user === correctUser && pass === correctPass) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    document.getElementById("error").textContent = "Incorrect username or password.";
  }
}
