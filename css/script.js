document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const moreInfo = document.getElementById("moreInfo");

  toggleBtn.addEventListener("click", function () {
    moreInfo.classList.toggle("show");
    toggleBtn.textContent = moreInfo.classList.contains("show") ? "Show Less" : "Show More";
  });
});
