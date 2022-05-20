function myFunction() {
  const userInfo = {
    userName: document.getElementById("user-name").value,
    password: document.getElementById("password").value,
  };
  localStorage.setItem("user Info", JSON.stringify(userInfo));
}
