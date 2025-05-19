document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mainBalance = getInnerTextById('main-balance');
    const accountNumber = document.getElementById('account-number').value;
    const amount = getValueById('amount');
    const pinNumber = getValueById('pin-number');

    if (accountNumber.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance + amount;
            getValue('main-balance', sum);
        }
        else {
            alert('please conform your pin and try again!');
        }
    }
    else {
        alert('please conform your account number and try again!');
    }
})