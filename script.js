let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

function openGmail() {
  // Replace "brainxacademia@gmail.com" with the desired recipient email address
  const recipientEmail = "brainxacademia@gmail.com";

  // Gmail compose URL with the "to" field filled
  const gmailComposeURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipientEmail}`;

  // Open Gmail in a new tab
  window.open(gmailComposeURL, "_blank");
}
