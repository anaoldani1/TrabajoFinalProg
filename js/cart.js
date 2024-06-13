let se = document.querySelector(".productos") 
let boton = document.querySelector(".desc")

fetch (`https://fakestoreapi.com/products`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let datosEnLocal = localStorage.getItem("datosLocalStorage");
    if (datosEnLocal == null){
        se.innerHTML = "<h2>Su Carrito está Vacío</h2>"
        boton.style.display = "none";
    } else {
       let datosParseados = JSON.parse(datosEnLocal) // como recupero los datos con el id de cada uno for? //
        se.innerHTML = `
        <article>
            <img class="section-images" src="${data.image}">                 
        </article>
        <article class="text">
            <h3>${data.title}</h3>
            <p>$${data.price}</p>                
        </article> `  
    }
    console.log(localStorage);

})
.catch (function(err){
    console.log(err);
})