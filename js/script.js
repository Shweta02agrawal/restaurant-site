//this function us for collapsable button when collapsable menu loses focus using AJAX
$(function() {
  $("#navbarToggle").blur(function(event){
    var screenwidth=window.innerWidth;
    if(screenwidth < 768){
      $("#collapsable-nav").collapse('hide');
    }
  });
});
