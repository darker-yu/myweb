$('#infomenu').find('li').mouseover(function(){

	$(this).addClass("thismenu");

	$(this).find('dd').slideDown();

}).mouseout(function(){

	$(this).removeClass("thismenu");

});

		 

$('#infomenu').find('li').each(function(i){

	$(this).find('b').html($(this).find('em').html())

});

	

$('dl.infolist li').mouseover(function(){

	$(this).addClass("thisli");

}).mouseout(function(){

	$(this).removeClass("thisli");

});
