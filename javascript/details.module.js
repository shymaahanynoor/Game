
import {design} from "./ui.module.js"
var x=new design();

var datalist=[]
export class detail{



}
detail.prototype.getdetails=async function (data){

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '98ede916e8msh977beaa071f587bp1e3eddjsn4b731f75d0b5',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

var api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${data}`, options)
	
var response =await  api.json()
	datalist=response;
	x.displayDetail(datalist)
	 console.log(datalist);
}








