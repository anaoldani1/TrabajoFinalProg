
 console.log(location.search);

 let queryString = location.search

 let querystringObj= new URLSearchParams(queryString)

 let categoryid = querystringObj.get("id")

 console.log(categoryid);

 fetch(`https://fakestoreapi.com/products/category/
 ${category}`) 

    .then(function(res){
        return res.json ()
    })

    .then (function(data){
        console.log(data);
        let seccioncat = document.querySelector(".seccioncategoria")

        seccioncat.innerHTML = `
                        <h2> ${data.title} </h2>
                        <img src = ${data.image} > 
                        <p> ${data.description} </p>
                        <p> ${data.price} </p>
        `
    })

    .catch(function(err){
        console.log(err);
    })

   
