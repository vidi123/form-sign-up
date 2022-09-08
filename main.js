var valid = function() {
    if(document.getElementById('password').value == document.getElementById('password2').value) {
        document.getElementById('confirm').innerHTML = ''; 
        document.getElementById('submit').type = 'submit';

    } else {
        document.getElementById('confirm').innerHTML = '*Password tidak sesuai'; 
        document.getElementById('submit').type = 'button';
    }
    return valid;
}