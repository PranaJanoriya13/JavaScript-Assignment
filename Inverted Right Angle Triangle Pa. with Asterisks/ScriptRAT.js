// Header JS  
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// I
// required elements from HTML
let inNum = document.querySelector("#in-num") ;
let btnSubmit = document.querySelector("#Btn") ;
let opScreen = document.querySelector("#op-screen")

let inNumValue ;

// input event on inNum
inNum.addEventListener("input" , (e)=>{
	inNumValue = Number(e.target.value)
}) 

// click event on btnSubmit 
btnSubmit.addEventListener("click" , ()=>{
	opScreen.innerHTML = "" ;
	// loop for row's
	for(let i=inNumValue; i>=1; i--){
		// loop for column's
		for(var j=1; j<=i; j++){
			console.log("* ") ;
			opScreen.innerHTML = opScreen.innerHTML + "*" ;
		}
		console.log("") ;
		opScreen.innerHTML = opScreen.innerHTML + "<br>" ;
	}
}) ;

