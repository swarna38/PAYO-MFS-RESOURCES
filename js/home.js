// step-1: add an event handler to the add mony btn 
document.getElementById('btn-add-mony').addEventListener('click', function(event){
    event.preventDefault();

    // step-2: get mony to be added to the account 
    const addMonyInput = document.getElementById('input-add-mony').value;
    console.log(addMonyInput);

    // get the pinNumber provided
    const pinNumberInput = document.getElementById('input-add-mony-pin').value;
    console.log(pinNumberInput);

    // step-3: valided phone number 
    if(pinNumberInput === '1234'){
        console.log('add mony');

        // step-4:get the current balance 
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // stpe-5: add addMonyInput with balance 
        const addMonyNumber = parseFloat(addMonyInput);
        const balanceNumber = parseFloat(balance);
        const updateBalance = addMonyNumber + balanceNumber;
        console.log(updateBalance);

        // step-6: update the balance dom 
        document.getElementById('account-balance').innerText = updateBalance;
    }else{
        alert('Faild to add mony please try to agin');
    }

})
