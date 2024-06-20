

    fetch('https://fakestoreapi.com/products/category/jewelery') 
        .then(function(res){
            return res.json ()
        })
        .then(function (data){

            console.log (data);

            let divcategoria = document.querySelector (".flexbox-container1")
                for (let i = 0 ;i<data.length; i++) {
                    let stockcat = data [i] ;
                    prodcat =  `
                                    <div class="algo2">
                                        <h1> ${stockcat.category} </h1>
                                        <h3> ${stockcat.title} </h3>
                                        <img class="fotos" src="${stockcat.image} ">
                                        <p> ${stockcat.description}</p>
                                        <p>${stockcat.price} </p>
                                        <a href="../TrabajoFinalProg/producto.html" class="Ver"> Ver más </a>    
                                    </div>`
                                divcategoria.innerHTML += prodcat ; 
            }
            
        })

        .catch(function(err){
            console.log(err);
 })
