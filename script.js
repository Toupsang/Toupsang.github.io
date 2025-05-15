document.addEventListener("DOMContentLoaded", () => {
  // View ID Card button click event
  const viewIdCardBtn = document.getElementById("view-id-card-btn");
  const mainView = document.getElementById("main-view");
  const idCardView = document.getElementById("id-card-view");
  const backToMainBtn = document.getElementById("back-to-main");
  const infoButton = document.querySelector(".info-button");
  const infoPanel = document.getElementById("info-panel");
  const closeInfoBtn = document.getElementById("close-info-btn");
  // View ID Card button click event
  

  // Check if chevron is clicked

  // Check if chevron is clicked
  const chevron = document.querySelector(".chevron");
  if (chevron) {
    chevron.addEventListener("click", () => {
      mainView.classList.add("hidden");
      idCardView.classList.remove("hidden");
      idCardView.classList.add("slide-in");
    });
  }

  // View ID Card button click event
  if (viewIdCardBtn) {
    viewIdCardBtn.addEventListener("click", () => {
      mainView.classList.add("hidden");
      idCardView.classList.remove("hidden");
      idCardView.classList.add("slide-in");
    });
  }

  // Back button click event
  if (backToMainBtn) {
    backToMainBtn.addEventListener("click", () => {
      idCardView.classList.add("hidden");
      mainView.classList.remove("hidden");
    });
  }

  // Info button click event
  if (infoButton) {
    infoButton.addEventListener("click", () => {
      infoPanel.classList.add("active");
    });
  }

  // Close info panel button click event
  if (closeInfoBtn) {
    closeInfoBtn.addEventListener("click", () => {
      infoPanel.classList.remove("active");
    });
  }

  // Update current time in the status bar
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Format time as HH:MM
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("current-time").textContent = hours + ":" + minutes;
  }

  // Update time initially and then every minute
  updateTime();
  setInterval(updateTime, 60000);
});
