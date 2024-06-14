
let userEmail = localStorage.getItem('email')

document.querySelector("#welcomeMessage").innerText = "Bienvenido: " + userEmail;


    let nav= document.querySelector('.barra')
    let disappear= document.querySelector ('.none')
    let disappear2= document.querySelector ('.none2')

    console.log(nav);
    console.log(disappear);
    console.log(disappear2);

        if (userEmail==""){
            disappear.style.display= "block"
            disappear2.style.display= "block"
        } else{
            disappear.style.display= "none"
            disappear2.style.display= "none"
            nav.innerHTML+= '<li><a href=`./logout.html` class=logout-link> LOGOUT</li>'
        }
