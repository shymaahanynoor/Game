
export class design{
   

 displayGame (datalist){
        var temp=""

         for (const key in datalist) {
          
         
         temp+=`
         
         <div class=" item col-md-3   col-sm-6" idRec=${datalist[key].id}>
         <div class="border border-dark overflow-hidden card">
         
         <div class="item p-3 h-75">
           <img src="${datalist[key].thumbnail}" width="100%">
           <div class="d-flex justify-content-between align-items-center">
          
           <span class="col-9"style="font-size: 15px;display: inline-block; padding: 10px 0px;">${datalist[key].title}</span>
           <span style="font-size: 13px; background-color: #09c;padding:3px 0px; border-radius: 5px; cursor: pointer; " class="col-3 text-center">Free</span>
           </div>
           <p style="font-size: 15px; width: 100%; color:#6c757d; text-align: center;">${datalist[key].short_description}</p>

         </div>
          <hr>
          <div class="px-3 pb-3 d-flex justify-content-between  align-items-center" style="font-size: 15px;">
             <span style="background-color: #32383e; display: inline-block; padding: 0px 5px ; border-radius: 7px;" >${datalist[key].genre}</span>
             <span  style="background-color: #32383e; display: inline-block; padding: 0px 5px ; border-radius: 7px;">${datalist[key].platform}</span>
          </div>
       </div>
     </div>
`}

var dis=document.getElementById("row").innerHTML=temp;

return dis;
     }


   displayDetail(datalist){
        var temp=""
        
        temp+=`
        <div class="col-md-4 ">
        <img src="${datalist.thumbnail}" width="100%">
      </div>
      <div class="col-md-8">
       <p style="font-size: 28px;">Title:<span>${datalist.title}</span></p>
       <p>Category:<span style="border-radius: 5px;" class="bg-info px-1 ">${datalist.genre}</span></p>
       <p>Platform: <span style="border-radius: 5px;" class="bg-info px-1 "> ${datalist.platform}</span></p>
       <p>Status:<span style="border-radius: 5px;" class="bg-info px-1 ">${datalist.status}</span></p>
       <p>${datalist.short_description}</p>
         <button class="btn btn-outline-warning text-white">show game</button>
      </div>
      `
      var res=document.getElementById("det").innerHTML=temp;
      return res
    
    }

 


}


