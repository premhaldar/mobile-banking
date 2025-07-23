document.getElementById("btn-add-money").addEventListener("click", function () {
  const totalBalance = document.getElementById("balance").innerText;
  const balance = parseFloat(totalBalance.replace(/,/g, ""));
  const inputAddMoney = document.getElementById("input-add-money").value;
  const addMoney = parseFloat(inputAddMoney);
  const inputPin = document.getElementById("input-pin").value;
  if (inputPin === "1234") {
    const totalAdditionBalance = balance + addMoney;
    // history
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
                class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-plus text-white"></i>
              </div>
              <div>
                <p class="text-white font-semibold">Add Money</p>
                <p class="text-white/70 text-sm">${formattedDate}</p>
              </div>
            </div>
            <p id="tran-add-money" class="text-green-400 font-bold">+৳${addMoney}</p>
          </div>

    `;

    document.getElementById("balance").innerText =
      totalAdditionBalance.toLocaleString();
    closeModal("addMoneyModal");
    document.getElementById("input-add-money").value = "";
    document.getElementById("input-pin").value = "";
  } else {
    alert("Failed to add Money !");
  }
});
