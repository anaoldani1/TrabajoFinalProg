let campoEmail= document.querySelector('#email')
let campoPassword= document.querySelector('#password')
let campoRepeat=document.querySelector ('#rePassword')
let form= document.querySelector("#registerForm")
let errorRe= document.querySelector (".invalid-feedback-rePassword")
form.addEventListener('submit',function (evento){
    evento.preventDefault()

    if (campoEmail.value==""){
        alert("Porfavor complete el campo de email")
    }
    else if (campoPassword.value==""){
        alert("Porfavor complete el campo de contraseña")
    }
    else if (campoPassword.value.length<6){
        alert("La contraseña tiene que tener al menos 6 caracteres")
    }
    else if (campoPassword.value!==campoRepeat.value){
        console.log(campoRepeat);
        console.log(campoPassword);
        errorRe.innerHTML= "<p>Las contraseñas no coinciden</p>"
    }
    else{
        alert ("Felicidades has podidio completar el formulario")

    window.location.href = "login.html"
    }
})



