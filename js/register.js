let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let repeatPassword = document.getElementById("repeatPassword").value;


document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
        if (email==""){
            prompt= "Por favor complete el campo";
        }
})
