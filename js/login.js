let campoEmail= document.querySelector('#email')
let campoPassword= document.querySelector('#password')
let form= document.querySelector("#loginForm")
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
    }else{
        alert ("Felicidades has podidio completar el formulario")
        
    localStorage.setItem('email', campoEmail.value)
    window.location.href = "index.html"

    }
})

