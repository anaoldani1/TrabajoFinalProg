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
            <p>${data.category}</p>
            <p>$${data.price}</p> 
        </article>
        <article class="desc">
            <p> Descripción: </p>
            <p> ${data.description}</p>
            <a class="agregra" href="./cart.html" >Agregar al carrito</a>
        </article>`
    })
