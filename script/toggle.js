// 1st box 

document.getElementById('add-money-box').addEventListener('click', function () {

    document.getElementById('addMoney-section').setAttribute('class', 'block')

    document.getElementById('cash-out-section').setAttribute('class', 'hidden');

    document.getElementById('transfer-money-section').setAttribute('class', 'hidden');

    document.getElementById('get-bonus-section').setAttribute('class', 'hidden');

    document.getElementById('pay-bill-section').setAttribute('class', 'hidden');

    document.getElementById('transaction-history-section').setAttribute('class', 'hidden');
})

//2nd box
document.getElementById('cash-out-box').addEventListener('click', function () {

    document.getElementById('cash-out-section').removeAttribute('class');

    document.getElementById('addMoney-section').setAttribute('class', 'hidden');

    document.getElementById('transfer-money-section').setAttribute('class', 'hidden');

    document.getElementById('get-bonus-section').setAttribute('class', 'hidden');

    document.getElementById('pay-bill-section').setAttribute('class', 'hidden');

    document.getElementById('transaction-history-section').setAttribute('class', 'hidden');

});

//3rd box

document.getElementById('transfer-money-box').addEventListener('click', function () {

    document.getElementById('transfer-money-section').removeAttribute('class');

    document.getElementById('addMoney-section').setAttribute('class', 'hidden');

    document.getElementById('cash-out-section').setAttribute('class', 'hidden');

    document.getElementById('get-bonus-section').setAttribute('class', 'hidden');

    document.getElementById('pay-bill-section').setAttribute('class', 'hidden');

    document.getElementById('transaction-history-section').setAttribute('class', 'hidden');
});

//4th box
document.getElementById('get-bonus-box').addEventListener('click', function () {

    document.getElementById('get-bonus-section').removeAttribute('class');

    document.getElementById('addMoney-section').setAttribute('class', 'hidden');

    document.getElementById('cash-out-section').setAttribute('class', 'hidden');

    document.getElementById('transfer-money-section').setAttribute('class', 'hidden');

    document.getElementById('pay-bill-section').setAttribute('class', 'hidden');

    document.getElementById('transaction-history-section').setAttribute('class', 'hidden');
});

// 5th box 

document.getElementById('pay-bill-box').addEventListener('click', function () {

    document.getElementById('pay-bill-section').removeAttribute('class');

    document.getElementById('addMoney-section').setAttribute('class', 'hidden');

    document.getElementById('cash-out-section').setAttribute('class', 'hidden');

    document.getElementById('transfer-money-section').setAttribute('class', 'hidden');

    document.getElementById('get-bonus-section').setAttribute('class', 'hidden');

    document.getElementById('transaction-history-section').setAttribute('class', 'hidden');
});

// 6th box 

document.getElementById('transaction-box').addEventListener('click', function () {

    document.getElementById('transaction-history-section').removeAttribute('class');

    document.getElementById('addMoney-section').setAttribute('class', 'hidden');

    document.getElementById('cash-out-section').setAttribute('class', 'hidden');

    document.getElementById('transfer-money-section').setAttribute('class', 'hidden');

    document.getElementById('get-bonus-section').setAttribute('class', 'hidden');

    document.getElementById('pay-bill-section').setAttribute('class', 'hidden');
});