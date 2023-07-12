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
window.addEventListener("scroll" , function(){
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  	let scrolled = (winScroll / height) * 100;
  	document.getElementById("bar").style.width = scrolled + "%";
})
 