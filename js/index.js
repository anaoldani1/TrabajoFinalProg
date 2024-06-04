
///seccion electronica///
let categorias = document.querySelector(".category"); 
let productos = "";


fetch('https://fakestoreapi.com/products/category/electronics')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i<data.length; i++){
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


    ///seccion hombre///
    let men= document.querySelector(".catM")
    let prod=""

    fetch('https://fakestoreapi.com/products/category/men\'s clothing')
        .then (function(response){
            return response.json()
        })

        .then (function(data){
            console.log(data);
            for (let i=0; i<data.length; i++){

                let stock= data [i];
                prod=`
                <h3 class="elemento2">${stock.title}</h3>
                <img class="fotos" src="${stock.image}">
                <p class="elemento3">${stock.description}</p>
                <p class="elemento4">$${stock.price}</p>

                </form>
                <form action="./producto.html" method="GET">
                     <button type="submit">AGREGAR AL CARRITO</button>
                    <button type="submit">VER MÁS</button>
                </form>
                `

                men.innerHTML += prod;
            }
        })

  