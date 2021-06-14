let email = document.getElementById('email').value;

funtion ValidateEmail()
    var input = document.createElement('input');

    input.type = 'email';
    input.required = true;
    input.value = value;

    return tpeof input.checkValidity === 'function'
    if(email == ""){
        alert("Please enter your email");
    }

    alert("Please enter your email");

     // var regx = /^[a-zA-Z0-9\._]+)@([a-zA-Z0-0])+.([a-z]+)(.[a-z]+)?$/

            // if(regx.tect(mail)){
            //     alert("Thank you!")
            //     return true
            // }
            // else{
            //     alert("Email invalid")
            //     return false;
            // }