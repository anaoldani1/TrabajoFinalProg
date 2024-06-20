
let userEmail = localStorage.getItem('email')

    let nav= document.querySelector('.barra')
    let disappear= document.querySelector ('.none')
    let disappear2= document.querySelector ('.none2')

        if (userEmail==""){
            disappear.style.display= "block"
            disappear2.style.display= "block"
        } 
        else if (userEmail==null){
            disappear.style.display= "block"
            disappear2.style.display= "block"
        }
        else{
            document.querySelector("#welcomeMessage").innerText = "Bienvenido: " + userEmail;
            disappear.style.display= "none"
            disappear2.style.display= "none"
            nav.innerHTML+= '<li><a href= "#" class=logout-link> LOGOUT</li>'
        } 
