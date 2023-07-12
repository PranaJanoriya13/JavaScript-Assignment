// Header JS  

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// Vowel Project Script

    function countVowels() {
      var input = document.getElementById("In").value;
      var count = 0;
      for (var i = 0; i < input.length; i++) {
        if (/[aeiouAEIOU]/.test(input.charAt(i))) {
          count++;
        }
      }
      document.getElementById("resulte").innerHTML="The Number vowel in this passage :"+ count ;
      
    } 