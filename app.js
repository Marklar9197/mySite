
'use strict';
//About Page

$(document).ready(function(){
$(".about-page").hide();
$("#click").click(function(){
$(".click-here").hide();
$(".about-page").show();
$(".box").animate({height:"400px"});
$("#contact").animate({marginTop:"30px"});


});

});

	
// Projects Page


$(document).ready(function(){
$(".mario-img").hide();
$(".pokemon-img").hide();
$(".play").hide();
$("#poke-play").hide();
//Click function for mario image
$(".match").click(function(){
$(".match").hide();
$(".mario-img").fadeIn(1000,'swing')
$(".mario-img").animate({marginLeft:'260px'});
$(".play").show().animate({left:"30px", bottom:"85px"});

});
// Click function for pokemon image
$(".pokemon").click(function(){
$(".pokemon").hide();
$(".pokemon-img").fadeIn(1000,'swing');
$("#poke-play").show().animate({left:"30px", bottom:"145px"});

});
if(counter > 0){
	$(".match").animate({
		right:'100px',
		top: '100px'
	});
}


});






//Home Page
function fadeIn(){
$(document).ready(function(){
$(".name").fadeIn(1000, 'swing');
$(".dev").fadeIn(1000, 'swing');	
});	

}









	
