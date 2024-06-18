let catelectro = document.querySelector ('<li> <a href="./category.html">ELECTRÓNICA</a></li>')

catelectro.addEventListener ('click' , function(){
 fetch('https://fakestoreapi.com/products/category/electronics')
            .then(function(response){
                return response.json ();
            } )
            .then(function(data) {
                console.log(data);
                let hoodienegro = document.querySelector(".algo2")
                
            } )   
    
            .catch(function(err) {
                console.log(err);
            } )
            

})








