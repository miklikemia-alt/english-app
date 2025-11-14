document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (localStorage.getItem(user) === pass) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong username or password!");
  }
});

document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const newUser = document.getElementById("newUser").value;
  const newPass = document.getElementById("newPass").value;

  localStorage.setItem(newUser, newPass);
  alert("Registration successful!");
  window.location.href = "login.html";
});
