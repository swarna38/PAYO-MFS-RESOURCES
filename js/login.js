
// document.getElementById('login-btn').addEventListener('click', function(event){
//     // page ta reloading broweser kora bujay preventDefault diye====
//     event.preventDefault()
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value ;
//     console.log(phoneNumber, pinNumber);

//     if(phoneNumber === '019377' && pinNumber === '23'){
//         console.log('you are log in');
//     }else{
//         alert('wrong phone number or pin');
//     }
// })






document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    // get phone number and pin====
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value ;

    if(phoneNumber === '5' && pinNumber === '1234'){
        alert('login');
        window.location.href = '/home.html';
    }else{
        alert('wrong number or pin');
    }


})