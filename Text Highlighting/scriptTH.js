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
window.addEventListener("load" , ()=>{
	const check = function(word){
		if(word.length > 8){
			return `<span>${word}</span>` ;
		}
		else{
			return word ;
		}
	}

	const text = document.querySelector("#text") ;

	text.innerHTML = text.textContent  // text.innerText
		.trim()
		.split(' ') 
		.map(check)
		.join(' ') 
})