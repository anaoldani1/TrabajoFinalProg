console.log(location.search); 
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let productoId = queryStringObj.get('id'); 
console.log(productoId);
let se = document.querySelector(".productos") 

fetch (`https://fakestoreapi.com/products/${productoId}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    se.innerHTML = `
        <article>
            <img class="section-images" src="${data.image}">                 
        </article>
        <article class="text">
            <h3>${data.title}</h3>
            <p>$${data.price}</p>                
        </article>
    `

})