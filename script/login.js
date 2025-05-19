document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const pinNumber = getValueById('pin-number');


        if (accountNumber.length === 11) {
            if (pinNumber === 1234) {
                window.location.href = './main.html';

            }
            else {
                alert('check your pin & try again');
            }
        }
        else {
            alert('check your number & try again');
        }
    })