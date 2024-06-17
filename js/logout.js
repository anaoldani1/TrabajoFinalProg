let bienvenido = document.querySelector ('.logout-link')

bienvenido.addEventListener('click' , function (){
     let nav= document.querySelector('.barra')
     let disappear= document.querySelector ('.none')
     let disappear2= document.querySelector ('.none2')
 
     document.querySelector(".logout-link").innerHTML = (" ")

     console.log(nav);
     console.log(disappear);
     console.log(disappear2);
 
         if (userEmail==""){
             disappear.style.display= "none"
             disappear2.style.display= "none"
         } else{
             disappear.style.display= "block"
             disappear2.style.display= "block"
           
         } 
 
}) ;
  
