document.addEventListener("DOMContentLoaded", (event) => {
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
