document.getElementById('withdrow-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const cashOutAmount = getValueById('cashOut-amount');
    const cashOutPinNumber = getValueById('cashOut-pin-number');
    const mainBalance = getInnerTextById('main-balance');

    if(agentNumber.length === 11){
        if(cashOutPinNumber===1234){
            const sum = mainBalance - cashOutAmount;
            getValue('main-balance',sum);
        }
        else{
            alert('please check you pin number!');
        }
    }
    else{
        alert('please check you account number!');
    }

});