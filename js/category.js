let catelectro = document.querySelector ('.electronica')

catelectro.addEventListener ('click' , function (){
    fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(function(res) {
                return res.json ()
            })
            .then(function(data) {
                console.log(data);
                let title = document.querySelector(".hombreh1")
                title.innerHTML = `<h1>${data.title} </h1>`
            })
            .catch(function(error){
                console.log(error);
            })
})



 





