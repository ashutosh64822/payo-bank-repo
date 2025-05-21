document.getElementById('withdrow-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const cashOutAmount = getValueById('cashOut-amount');
    const cashOutPinNumber = getValueById('cashOut-pin-number');
    const mainBalance = getInnerTextById('main-balance');

    if(cashOutAmount > mainBalance){
        alert('insufficient balance!');
        return;
    }

    if(agentNumber.length === 11){
        if(cashOutPinNumber===1234){
            const sum = mainBalance - cashOutAmount;
            getValue('main-balance',sum);


            const container = document.getElementById('transaction-container');
            const div = document.createElement('div');
            div.innerHTML=`
                <p class="card bg-base-100 w-full max-w-sm shadow-2xl p-2">cash out ${cashOutAmount} tk from ${agentNumber} account</p>
            `
            container.appendChild(div);
        }
        else{
            alert('please check you pin number!');
        }
    }
    else{
        alert('please check you account number!');
    }

});