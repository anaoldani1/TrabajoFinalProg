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
            <h3>${products.title}</h3>
            <img class="fotos" src="${products.image}">
            <p>${products.description}</p>
            <p>$${products.price}</p>
            <form action="./cart.html" method="GET">
                <button type="submit">AGREGAR</button>
            </form>
            <form action="./producto.html" method="GET">
                <button type="submit">VER MAS</button>
            </form>
            ` 
            categorias.innerHTML += productos;
        }
    })
  