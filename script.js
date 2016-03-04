function readMore(){
	
		var temp = document.getElementById("readMore").style.display;
		if(temp=="none")
		
			document.getElementById("readMore").style.display="block";
			
		else
		
			document.getElementById("readMore").style.display="none"
		
}

function readMore2(){
	
		var temp = document.getElementById("readMore2").style.display;
		if(temp=="none")
		
			document.getElementById("readMore2").style.display="block";
			
		else
		
			document.getElementById("readMore2").style.display="none"
		
}


function readMore3(){
	
		var temp = document.getElementById("readMore3").style.display;
		if(temp=="none")
		
			document.getElementById("readMore3").style.display="block";
			
		else
		
			document.getElementById("readMore3").style.display="none"
		
}


function readMore4(){
	
		var temp = document.getElementById("readMore4").style.display;
		if(temp=="none")
		
			document.getElementById("readMore4").style.display="block";
			
		else
		
			document.getElementById("readMore4").style.display="none"
		
}



function readMore5(){
	
		var temp = document.getElementById("readMore5").style.display;
		if(temp=="none")
		
			document.getElementById("readMore5").style.display="block";
			
		else
		
			document.getElementById("readMore5").style.display="none"
		
}


function readMore6(){
	
		var temp = document.getElementById("readMore6").style.display;
		if(temp=="none")
		
			document.getElementById("readMore6").style.display="block";
			
		else
		
			document.getElementById("readMore6").style.display="none"
		
}




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


