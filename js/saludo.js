
let userEmail = localStorage.getItem('email')

document.querySelector("#welcomeMessage").innerText = "Bienvenido: " + userEmail;

        // if (userEmail) {
        //     welcomeMessageElement.innerHTML = ` <a href='#' class=logout-link> Logout </a> `;
        //     document.querySelector('.logout-link').addEventListener('click', function (event) {
        //         event.preventDefault();
        //         localStorage.removeItem('email')
        //     });
        // } 

    let nav= document.querySelector('.barra')
    let disappear= document.querySelector ('.none')
    let disappear2= document.querySelector ('.none2')
        if (userEmail==""){
            disappear.style.display= "block"
            disappear2.style.display= "block"
        } else{
            disappear.style.display= "none"
            disappear2.style.display= "none"
            nav.innerHTML+= '<li><a href=`./logout.html` class=logout-link> LOGOUT</li>'
        }
