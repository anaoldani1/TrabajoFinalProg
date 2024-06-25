
 console.log(location.search);

 let queryStringcat = location.search

 let querystringcategory= new URLSearchParams(queryStringcat)

 let categoryid = querystringcategory.get("category")

 console.log(categoryid);


 let seccioncat = document.querySelector(".seccioncategoria")
 console.log(seccioncat);
 let productscategorias = " " ;

 fetch(`https://fakestoreapi.com/products/category/${categoryid}`) 

    .then(function(res){
        return res.json ()
    })

    .then (function(data){
        console.log(data);
        for (let i = 0; i<data.length; i++) {
            let productoscategoria = data[i]; 

            productscategorias += 
                    `<section class= "algo2" >
                            <h3>${productoscategoria.title}</h3>
                            <img class="fotos" src="${productoscategoria.image}">
                            <p>${productoscategoria.description}</p>
                            <p>$${productoscategoria.price}</p>
                            </section>
                            <section class="botones">
                            <a href="./producto.html?id=${productoscategoria.id}">VER MAS</a>
                    </section>
                        `
          
        }
        seccioncat.innerHTML = productscategorias
    }) 


    .catch(function(err){
        console.log(err);
    })

   
