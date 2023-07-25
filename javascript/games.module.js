
import {design} from "./ui.module.js"
var x=new design();

import{detail} from "./details.module.js"
var y=new detail();

var datalist=[]

export class all{
    
}



all.prototype.getelement=async function (type){

  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98ede916e8msh977beaa071f587bp1e3eddjsn4b731f75d0b5',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
    };
    
       const api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options)
        var response =await  api.json()
       datalist=response;
      x.displayGame(datalist)
     
   console.log(datalist);
  
   var link=document.querySelectorAll(".col-md-3")
   console.log(link);
   
       link.forEach(ele => {
          ele.addEventListener("click",function(){
           console.log(ele);
           var z=ele.getAttribute("idRec")
         y.getdetails(z)
         $("#details").removeClass("d-none")
         $("#game").addClass("d-none")

          })
         
       });
  }

  
  
 