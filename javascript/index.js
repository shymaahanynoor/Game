



import {all} from "./games.module.js"
var s=new all()

$(".nav-link").click(function(){
    $(this).addClass("active")
    $(".nav-link").not(this).removeClass("active")
}
)

s.getelement("mmorpg");

let links=document.querySelectorAll(".nav-link")
links.forEach(elem => {
  elem.addEventListener("click",function(){
      let typ=elem.innerHTML
     s.getelement(typ);
  
  })
});

$(".btn-close").click(function(){
    $("#game").removeClass("d-none")
    $("#details").addClass("d-none")
   })

   

   $(document).ready(function(){

    $(".loading").fadeOut(500)
})

