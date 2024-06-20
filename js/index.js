   ///seccion hombre///
    let men= document.querySelector(".catM")
    let prod="";

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
                <p class="elemento1">${stock.description}</p>
                <p>$${stock.price}</p>
                <section class="botones">
                <a href="./producto.html?id=${stock.id}">VER MAS</a>
                </section>
                `
                men.innerHTML += prod;
            }
        })
        .catch (function(err){
            console.log(err);
        })

  
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
            <a href="./producto.html?id=${products.id}">VER MAS</a>
            </section>
            `   
            categorias.innerHTML += productos;
        }
    })
    .catch (function(err){
        console.log(err);
    })


//seccion jewelery//

    let jeweleryhome = document.querySelector(".jeweleryhome"); 
let jeweleryh = "";


fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for (let i = 0; i<data.length; i++){
            let jeweleryprod = data[i];   
            jeweleryh = `
            <h3>${jeweleryprod.title} </h3>
            <img class="fotos" src="${jeweleryprod.image}">
            <p class="elemento1">${jeweleryprod.description} </p>
            <p> $${jeweleryprod.price} </p>
            <section class="botones">
            <a href="./producto.html?id=${jeweleryprod.id}"> VER MAS </a>
            </section>
            `   
            jeweleryhome.innerHTML += jeweleryh;
        }
    })
    .catch (function(err){
        console.log(err);
    })
 