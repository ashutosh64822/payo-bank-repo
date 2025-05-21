document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mainBalance = getInnerTextById("main-balance");
    const accountNumber = document.getElementById("account-number").value;
    const amount = getValueById("amount");
    const pinNumber = getValueById("pin-number");

    if (amount < 0) {
      alert("please Enter valid number!");
      return;
    }

    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const sum = mainBalance + amount;
        getValue("main-balance", sum);

        const selectBank = document.getElementById("select-bank").value;

        const container = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.innerHTML = `
                <p class="card bg-base-100 w-full max-w-sm shadow-2xl p-2">added ${amount} tk from ${selectBank} and account number is: ${accountNumber} </p>
            `;
        container.appendChild(div);
      } else {
        alert("please conform your pin and try again!");
      }
    } else {
      alert("please conform your account number and try again!");
    }
  });
