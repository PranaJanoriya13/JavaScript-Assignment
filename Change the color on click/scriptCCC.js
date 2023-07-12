// Header JS  
function openNav() {
     document.getElementById("mySidebar").style.width = "250px";
     document.getElementById("main").style.marginLeft = "250px";
   }
   
   function closeNav() {
     document.getElementById("mySidebar").style.width = "0";
     document.getElementById("main").style.marginLeft= "0";
   }
 
//

let varBtn = document.querySelector("#btn") ;
let varBody = document.querySelector("body") ;
let varPara = document.querySelector("#para") ;

const hexCodeString = "0123456789ABCDEF" ;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function bgColorChange() {
	let hexCode = "#";
	let randInt ;
	for(let i=0; i<6; i++){
		randInt = getRandomInt(16) ;
		hexCode = hexCode + hexCodeString[randInt] ;
	}
	varBody.style.backgroundColor = hexCode ;
	varPara.textContent = hexCode ;
}