let bienvenido = document.querySelector ('.logout-link')

bienvenido.addEventListener('click' , function (){
     let nav= document.querySelector('.barra')
     let appear= document.querySelector ('.none')
     let appear2= document.querySelector ('.none2')
     let welcomemsj = document.querySelector ('.welcomeMessage')


     
     document.querySelector(".logout-link").innerHTML = (" ")

   document.querySelector("#welcomeMessage").innerHTML =  (" ")
     
     localStorage.removeItem ('email');


     console.log(nav);
     console.log(appear);
     console.log(appear2);
 
         if (userEmail==""){
             appear.style.display= "none"
             appear2.style.display= "none"
             welcomemsj.style.display= "block"
         } else{
             appear.style.display= "block"
             appear2.style.display= "block"
            
         } 
 
})
