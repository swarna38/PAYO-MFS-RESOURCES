document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    // show the cash out form 
    document.getElementById('cash-out-form').classList.remove('hidden')

    // hidden the add mony form 
    document.getElementById('add-mony-form').classList.add('hidden')
})


// show add mony form and hidden cash out form 
document.getElementById('btn-show-add-mony').addEventListener('click',function(){
    document.getElementById('add-mony-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})