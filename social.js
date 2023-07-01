document.querySelector(".logo").addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.add("fade-out");
  setTimeout(function () {
    window.location = e.target.href;
  }, 300); // Adjust the delay to match the transition duration (0.3s)
});
