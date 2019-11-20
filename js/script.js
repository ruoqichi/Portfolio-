// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});


$(document).ready(function(){
	$('.modal').modal();
});
$(document).ready(function () {
  $('.carousel').carousel({
    fullWidth: false,
    dist: 0,
    indicators: true,
    duration: 100
  }
  )
})
