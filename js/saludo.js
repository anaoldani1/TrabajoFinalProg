
let userEmail = localStorage.getItem('email')

document.querySelector("#welcomeMessage").innerText = "Bienvenido: " + userEmail;

let welcomeMessageElement = document.querySelector('.welcomeMessage');

        if (userEmail) {
            welcomeMessageElement.innerHTML = ` <a href='#' class=logout-link> Logout </a> `;
            document.querySelector('.logout-link').addEventListener('click', function (event) {
                event.preventDefault();
                localStorage.removeItem('email')
            });
        } 

        