          // Header JS  
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

        // Unite conveter JS 


  function Celsius(value) {
    var x ;
     x = (value*9/5)+32 ;
     document.getElementById("resulte").innerText = "Fahrenheit Value : " + x + "F" ;
  }