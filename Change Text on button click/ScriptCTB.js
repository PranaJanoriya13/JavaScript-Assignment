// Header JS  
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// Change Text on Button JS  

const text_1 = "The most Affordable Learning Platform" ;
const text_2 = "PW Skills"
let textState ;

window.addEventListener("load" , ()=>{
	document.querySelector("#para").textContent = text_1 ;
	textState = "text_1" ;
})

document.querySelector("#btn-change-text").addEventListener("click" , ()=>{
	if(textState == "text_1"){
		document.querySelector("#para").textContent = text_2 ;
		textState = "text_2" ;
	}
	else{
		document.querySelector("#para").textContent = text_1 ;
		textState = "text_1" ;
	}
})