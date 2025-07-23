// Modal functions
function openModal(modalId) {
  document.getElementById(modalId).classList.remove("hidden");
  document.getElementById(modalId).classList.add("flex");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
  document.getElementById(modalId).classList.remove("flex");
}