	document.addEventListener('invalid', (function () {
  return function (e) {
    e.preventDefault(); 

  };
})(), true);




	function validForm() {
		function checkMail(){
		  let inpMaile = document.querySelector("#email");  
		  if (!inpMaile.checkValidity()) {
		    document.querySelector(".toollip").style.display = "block";
		    inpMaile.classList.add("swing"); 
		    return false;
		  } else {
		    document.querySelector(".toollip").style.display = "none";
		    inpMaile.classList.remove("swing");
		      return false;
		  }
		  return true; 
		   }
		  function checkPass(){
		  let inpPass = document.querySelector("#password");  
		  if (!inpPass.checkValidity()) { 
		    inpPass.classList.add("swing"); 
		    return false;
		  } else { 
		    inpPass.classList.remove("swing");
		      return false;
		  } 
		return true;
	}
 
 checkMail();
checkPass();
} 
 