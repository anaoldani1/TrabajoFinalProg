
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
            <p class="elemento1">${products.description}</p>
            <p>$${products.price}</p>
            <section class="botones">
            <a href="./cart.html?id=${products.id}">AGREGAR AL CARRITO</a>
            <a href="./producto.html?id=${products.id}">VER MAS</a>
            </section>
            ` 
            console.log(products.id);   
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
                <h3>${stock.title}</h3>
                <img class="fotos" src="${stock.image}">
<<<<<<< HEAD
                <p class="elemento3">${stock.description}</p>
                <p class="elemento4">$${stock.price}</p>

                </form>
                <form action="./producto.html" method="GET">
                     <button type="submit">AGREGAR AL CARRITO</button>
                     <button type="submit">VER MÁS</button>
                </form>
=======
                <p class="elemento1">${stock.description}</p>
                <p>$${stock.price}</p>
                <section class="botones">
                <a href="./cart.html?id=${stock.id}">AGREGAR AL CARRITO</a>
                <a href="./producto.html?id=${stock.id}">VER MAS</a>
                </section>
>>>>>>> 9414885456cc4a833df0a7b8e171e915a7f9b789
                `
                men.innerHTML += prod;
            }
        })
        .catch (function(err){
            console.log(err);
        })

  