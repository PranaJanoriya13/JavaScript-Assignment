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
let email ;
let pass ;

// input event for email
document.querySelector("#in-email").addEventListener("input" , (e)=>{
	email = e.target.value ;
})

// input event for pass
document.querySelector("#in-pass").addEventListener("input" , (e)=>{
	pass = e.target.value ;
})

function checkEmail(e){
	let pattern = "@" ;
	let flag = 'g' ;
	let regEx = new RegExp(pattern, flag) ;

	return (e.match(regEx)) ;
}
function checkPass(p){
	return p.length >= 8 ? true : false
}

// click event on btn-submit
document.querySelector("#btn-submit").addEventListener("click" , ()=>{
	if(checkEmail(email) && checkPass(pass)){
		document.querySelector("#op-text-valid").style.display = "block" ;
		document.querySelector("#op-text-invalid").style.display = "none" ;
	}
	else{
		document.querySelector("#op-text-invalid").style.display = "block" ;
		document.querySelector("#op-text-valid").style.display = "none" ;
	}
})

