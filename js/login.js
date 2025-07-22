document.getElementById('btn-login').addEventListener('click', function (event) {
    event.preventDefault(); // ফর্ম রিলোড আটকায়

    const phoneInput = document.getElementById('phone-number');
    const pinInput = document.getElementById('pin-number');

    const phone = phoneInput.value.trim();
    const pin = pinInput.value.trim();

    if (phone !== '01521314614' || pin !== '1234') {
        alert('Invalid Phone or Pin!');
         // Clear input fields here
        phoneInput.value = '';
        pinInput.value = '';
    } else {
        alert('Successfully Logged In!');
        window.location.href='home.html';
        
    }
});

