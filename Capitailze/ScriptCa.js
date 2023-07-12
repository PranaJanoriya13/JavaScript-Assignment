// Header JS  
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// Capitailze (Java Script Programe )

var fname = document.getElementById("name") ;
  fname.addEventListener('input', () => 
  {
    fname.value = fname.value.charAt(0).toUpperCase() + fname.value.slice(1).toLowerCase() ;
  }) ;

  var pemail = document.getElementById("email") ;
    pemail.addEventListener('input', () =>
    {
      pemail.value = pemail.value.toLowerCase() ; 
    }) ;
