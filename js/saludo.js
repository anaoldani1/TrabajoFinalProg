document.addEventListener("DOMContentLoaded", function() {
    let userEmail = localStorage.getItem('email');

    if (userEmail && document.getElementById("welcomeMessage")) {
        document.getElementById("welcomeMessage").textContent = "Bienvenido: " + userEmail;
    }
});
