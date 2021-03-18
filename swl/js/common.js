document.querySelector('.profile_menu__btn').addEventListener('click', function() {
	document.querySelector('.overlay').classList.add('visible');
	document.querySelector('.profile_menu__block').classList.add('visible');
  });
  
 

document.querySelector('.overlay').addEventListener('click', function() {
		document.querySelector('.overlay').classList.remove('visible');
		document.querySelector('.profile_menu__block').classList.remove('visible');
	  });


	 