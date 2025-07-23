document.getElementById("btn-cash-out").addEventListener("click", function () {
  const totalBalance = document.getElementById("balance").innerText;
  const balance = parseFloat(totalBalance.replace(/,/g, ""));
  const inputCashOut = document.getElementById("input-cash-out").value;
  const CashOut = parseFloat(inputCashOut);
  const inputPin = document.getElementById("input-pin-number").value;
  if (inputPin === "1234") {
    const totalSubtractionBalance = balance - CashOut;
    document.getElementById("balance").innerText =
      totalSubtractionBalance.toLocaleString();
    closeModal("cashOutModal");
    document.getElementById("input-cash-out").value = "";
    document.getElementById("input-pin-number").value = "";
  } else {
    alert("Failed to Cash Out !");
  }
});