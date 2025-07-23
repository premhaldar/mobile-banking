
document.getElementById("btn-add-money").addEventListener("click", function () {
  const totalBalance = document.getElementById("balance").innerText;
  const balance = parseFloat(totalBalance.replace(/,/g, ""));
  const inputAddMoney = document.getElementById("input-add-money").value;
  const addMoney = parseFloat(inputAddMoney);
  const inputPin = document.getElementById("input-pin").value;
  if (inputPin === "1234") {
    const totalAdditionBalance = balance + addMoney;
    document.getElementById("balance").innerText =
      totalAdditionBalance.toLocaleString();
    closeModal("addMoneyModal");
    document.getElementById("input-add-money").value = "";
    document.getElementById("input-pin").value = "";
  } else {
    alert("Failed to add Money !");
  }
});
