// Balance counter animation
function animateBalance() {
  const balanceElement = document.getElementById("balance");
  const targetBalance = 25450;
  let currentBalance = 0;
  const increment = targetBalance / 100;

  const timer = setInterval(() => {
    currentBalance += increment;
    if (currentBalance >= targetBalance) {
      currentBalance = targetBalance;
      clearInterval(timer);
    }
    balanceElement.textContent = Math.floor(currentBalance).toLocaleString();
  }, 20);
}


// Button event listeners
document.getElementById("addMoneyBtn").addEventListener("click", function () {
  openModal("addMoneyModal");
});

document.getElementById("cashOutBtn").addEventListener("click", () => {
  openModal("cashOutModal");
});

document.getElementById("historyBtn").addEventListener("click", () => {
  openModal("historyModal");
});

// Close modal when clicking outside
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bg-black/50")) {
    closeModal("addMoneyModal");
    closeModal("cashOutModal");
    closeModal("historyModal");
  }
});

// Initialize animations
window.addEventListener("load", () => {
  animateBalance();
});

// Add some interactive feedback
document.querySelectorAll(".action-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});