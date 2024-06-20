let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let productoId = queryStringObj.get('id'); 
console.log(productoId);

fetch (`https://fakestoreapi.com/products/${productoId}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let prod = document.querySelector(".prod");
        prod.innerHTML = `                
        <article class="l">
            <img class="imagenbolso" src="${data.image}">
        </article>
        <article class="info">
            <h3>${data.title}</h3>
            <a class="categoriadelproducto" href="./category.html"><p>${data.category}</p></a>
            <p>$${data.price}</p> 
        </article>
        <article class="desc">
            <p> Description: </p>
            <p> ${data.description}</p>
            <a id="agregoCart" class="botones" href="./cart.html">AGREGAR AL CARRITO</a>      
        </article>`
        
    let agregarcartboton = document.querySelector("#agregoCart");
    let datosEnLocal = localStorage.getItem("datosLocalStorage");
    let ids = {
        id: productoId,
    }

    agregarcartboton.addEventListener("click", function(e){
        e.preventDefault()
        if(datosEnLocal == null){
            let array = []
            array.push(ids)
            let datosToString = JSON.stringify(array);
            localStorage.setItem("datosLocalStorage", datosToString);
        } else {
            let array = JSON.parse(datosEnLocal);
            array.push(ids)
            let datosToString = JSON.stringify(array);
            localStorage.setItem("datosLocalStorage", datosToString);
        }
        console.log(localStorage);
    });
    
    })
    .catch (function(err){
        console.log(err);
    })

