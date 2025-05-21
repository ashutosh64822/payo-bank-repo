document
  .getElementById("transferSendNow-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const transferNumber = document.getElementById(
      "transferMoney-number"
    ).value;
    const transferAmount = getValueById("transfer-amount");
    const pin = getValueById("transfer-pin-number");
    const mainBalance = getInnerTextById("main-balance");

    if (transferAmount > mainBalance) {
      alert("insufficient balance!");
      return;
    }

    if (transferNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance - transferAmount;
        getValue("main-balance", sum);

        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.innerHTML = `
                <p class="card bg-base-100 w-full max-w-sm shadow-2xl p-2">added ${transferAmount} tk from ${transferNumber} account</p>
            `;
        container.appendChild(div);
      } else {
        alert("check you pin !");
      }
    } else {
      alert("check your number!");
    }
  });
