// Header JS  
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// Generate a Random Number

addEventListener("load" , ()=>{
	let randomNumber = (Math.floor(Math.random() * 100)) + 1 ;
	document.querySelector("#op-screen").innerHTML = randomNumber ;
})


/*
Why we write '+ 1' in line number 2 ?
-> Math.random() ,it gives the number from 0(inlcusive) to 1(exclusive) so here if we not add +1 then we mention as max 101 but with this 100 can possible but never come 1 .. as our problem statment we want random number from 1 to 100 ...not from 0 to 100 ..
*/