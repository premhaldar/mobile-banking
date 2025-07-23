document.getElementById("btn-cash-out").addEventListener("click", function () {
  const totalBalance = document.getElementById("balance").innerText;
  const balance = parseFloat(totalBalance.replace(/,/g, ""));
  const inputCashOut = document.getElementById("input-cash-out").value;
  const CashOut = parseFloat(inputCashOut);
  const inputPin = document.getElementById("input-pin-number").value;
  if (inputPin === "1234") {
    const totalSubtractionBalance = balance - CashOut;

    const date = new Date();
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const tranAddMony = document.getElementById("transation-add-money");
    tranAddMony.innerHTML += `
    <div
            class="transaction-item p-4 rounded-lg flex items-center justify-between"
          >
            <div class="flex items-center">
              <div
                class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-minus text-white"></i>
              </div>
              <div>
                <p class="text-white font-semibold">Cash Out</p>
                <p class="text-white/70 text-sm">${formattedDate}</p>
              </div>
            </div>
            <p class="text-red-400 font-bold">-৳${CashOut}</p>
          </div>

    `;

    document.getElementById("balance").innerText =
      totalSubtractionBalance.toLocaleString();
    closeModal("cashOutModal");
    document.getElementById("input-cash-out").value = "";
    document.getElementById("input-pin-number").value = "";
  } else {
    alert("Failed to Cash Out !");
  }
});