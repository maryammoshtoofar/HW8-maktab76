const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  const userInfo = JSON.parse(localStorage.getItem("user Info"));
  const { userName, password } = userInfo;
  document.getElementById(
    "username"
  ).innerHTML = `Welcome ${userName}. Your Password is:<br>`;
  document.getElementById("password").innerHTML = password;
}
