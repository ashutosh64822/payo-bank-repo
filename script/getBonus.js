document.getElementById('get-bonus-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cupon = document.getElementById('bonus-cupon').value;
    const mainBalance = getInnerTextById('main-balance');
    if (cupon === 'ashutosh') {
        alert('congratulation! you have got 50000 tk bonus!');
        const sum = mainBalance + 50000;
        getValue('main-balance', sum);
    }
})