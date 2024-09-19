document.getElementById('btn-add-mony').addEventListener('click', function(event){
    event.preventDefault();
    const addMonyInput = document.getElementById('input-add-mony').value;
    const pinNumberInput = document.getElementById('input-add-mony-pin').value;

    if(pinNumberInput === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const addMonyNumber = parseFloat(addMonyInput);
        const updateBalance = addMonyNumber + balanceNumber;
        document.getElementById('account-balance').innerText = updateBalance;
        
    }else{
        alert('Faild to add mone please try to agin');
    }
})
