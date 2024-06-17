let se = document.querySelector(".productos") 
let boton = document.querySelector(".desc")
let comprar = document.querySelector(".agregara")

let datosEnLocal = localStorage.getItem("datosLocalStorage");

let datosparseados = JSON.parse(datosEnLocal)
console.log(datosparseados);
console.log(datosEnLocal);
if (datosEnLocal == null) {
    se.innerHTML = "<h2>Su Carrito está Vacío</h2>"
    boton.style.display = "none";
} else {
    for(i=0;i<datosparseados.length;i++){
        fetch (`https://fakestoreapi.com/products/${datosparseados[i].id}`)
        .then(function(response){
        return response.json();
        })
        .then(function(data){
             console.log(data);
             se.innerHTML += `
             <section class="prodindividual">
                <article>
                    <img class="section-images" src="${data.image}">                 
                </article>
                <article class="text">
                    <h3>${data.title}</h3>
                    <p>$${data.price}</p>                
                </article>
             </section`
         })
         .catch (function(err){
             console.log(err)
         })
    }
    comprar.addEventListener("click", function(){
        localStorage.clear();
       alert("GRACIAS POR SU COMPRA")
    })
}


