document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const coupon = document.getElementById("bonus-coupon").value;
    const mainBalance = getInnerTextById("main-balance");

    if (coupon === "ashutosh") {
      alert("congratulation! you have got 50000 tk bonus!");
      const sum = mainBalance + 50000;
      getValue("main-balance", sum);

      const bonusAmount = 50000;
      const container = document.getElementById("transaction-container");
      const div = document.createElement("div");
      div.innerHTML = `
                <p class="card bg-base-100 w-full max-w-sm shadow-2xl p-2">
                you have got ${bonusAmount} tk bonus for this coupon code !
                </p>
            `;
      container.appendChild(div);
    } else {
      alert("please Enter coupon code !");
    }
  });
