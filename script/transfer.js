document.getElementById('transferSendNow-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const transferNumber = document.getElementById('transferMoney-number').value;
    const transferAmount = getValueById('transfer-amount');
    const pin = getValueById('transfer-pin-number');
    const mainBalance = getInnerTextById('main-balance');

    if (transferNumber.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance - transferAmount;
            getValue('main-balance', sum);
        }
        else{
            alert('check you pin !');
        }
    }
    else{
        alert('check your number!');
    }
});