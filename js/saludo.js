let userEmail = localStorage.getItem('email')

document.getElementById("welcomeMessage").innerText = "Bienvenido: " + userEmail;

let welcomeMessageElement = document.querySelector('.welcomeMessage');
        if (userEmail) {
            welcomeMessageElement.innerHTML = `Bienvenido: ${userEmail} <a href='#' class=logout-link> Logout </a> `;

            document.querySelector('.logout-link').addEventListener('click', function (event) {
                event.preventDefault();
                localStorage.removeItem('userEmail')
                
            })
        } 

        