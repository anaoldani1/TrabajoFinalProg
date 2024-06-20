let email = document.querySelector("#email")
let error = document.querySelector(".errortext")
let checkbox = document.querySelector("#quiero")
let todorc = document.querySelector(".todorc")

let form = document.querySelector(".formrc")

form.addEventListener("submit", function(e){
    e.preventDefault()
    if (email.value == ""){
        error.innerHTML = "<p>Por favor escriba su email.</p>"
        error.style.display = "block";
    } else if(!checkbox.checked){
        error.innerHTML = "<p>Por favor acepte el campo Quiero recuperar mi contraseña</p>"
        error.style.display = "block";
    } else {
        form.style.display = "none";
        todorc.innerHTML = "<h2>Recibirás un email con las instrucciones para recuperar tu contraseña</h2> <a href='./login.html'>Ir al Login</a>"
        error.style.display = "block";
    } 
})


