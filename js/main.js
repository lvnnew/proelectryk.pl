// nav
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
// accordion
$(function(){
  $(".cusanmcig-sunantum").click(function(e){
   
  e.preventDefault();
   
  var contenido=$(this).next(".nadaump-cinangum");

  if(contenido.css("display")=="none"){ //open  
  contenido.slideDown(300);  
  $(this).addClass("open");
  }
  else{ //close  
  contenido.slideUp(300);
  $(this).removeClass("open");  
  }

  });
  //magnificPopup
  $('.facility').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });
});

// Scrolling smooth
// This is currently only supported in the most bleeding edge browsers.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// For older browser support, you can use this jQuery technique
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
// form
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Dziękuję!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});