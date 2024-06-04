window.addEventListener('load', function() {
let mail= document.querySelector (`#email`)
let contrasena= document.querySelector (`#password`)

mail.addEventListener("submit", function(){
    if (mail == `null`){
        prompt= "Por favor complete el campo"
    }
})

})

contrasena.addEventListener("submit", function(){
    if (contrasena==`null`){
        prompt= "Por favor complete el campo"
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const passwordField = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        // Check if the password has at least 6 characters
        if (passwordField.value.length < 6) {
            // Show error message
            alert('Debe ingresar al menos 6 caracteres');

            // Prevent the form from being submitted
            event.preventDefault();
        }
    });
});