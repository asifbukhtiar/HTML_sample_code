$(document).ready(function() {  
	$("#owl-demo").owlCarousel({
	  navigation : true,
	  items:3,
	  autoplay:true,
	  animateOut: 'slideOutDown',
	  animateIn: 'flipInX',
	  smartSpeed:450,
	  responsive:{
	      0:{
	          items:1,
	          nav:true
	      },
	      600:{
	          items:3,
	          nav:false
	      },
	      1000:{
	          items:3,
	          nav:true,
	          loop:false
	      }
	  }
	});

});
$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      	singleItem: true,
    	items:1,
    	loop: true,
    	slideSpeed: 300,
    	paginationSpeed: 400,
    	autoplay: true,
    	animateIn: 'fadeIn', // add this
   		animateOut: 'fadeOut', // and this
    	responsive:{
	      0:{
	          items:1,
	          nav:true
	      }
	  }
	});
 
});