let catelectro = document.querySelector ('<li> <a href="./category.html">ELECTRÓNICA</a></li>')

catelectro.addEventListener ('click' , function(){
 fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>console.log(json))
            

})



addEventListener 





