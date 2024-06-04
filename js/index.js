let categorias = document.querySelector(".category"); 
let productos = "";


fetch('https://fakestoreapi.com/products/category/electronics')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i<6; i++){
            let products = data[i];        
            productos = `
            <h3 class="elemento2">${products.title}</h3>
            <img class="fotos" src="${products.image}">
            <p class="elemento3">${products.description}</p>
            <p class="elemento4">$${products.price}</p>
            <form action="../cart.html" method="GET">
                <button type="submit">AGREGAR</button>
            </form>
            <form action="../producto.html" method="GET">
                <button type="submit">VER MAS</button>
            </form>
            `
            categorias.innerHTML += productos;
        }
    })
  