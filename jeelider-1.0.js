//	Jeelider
//
//	Author:    Onat Yigit Mercan - onatmercan [at] gmail [dot] com
//	Date:      February, 2012
//	Version:   1.0.0
(function($){
    var Jeelider = function(element, options)
    {
		var elem = $(element);
		var obj = this;
		var defaults = {
			name:			'jeelider',
			slideClass:		'slide',
			pageClass: 		'pages',
			prevNext:		false,
			prevNextClass:	'navigation',
			prevClass: 		'previous-button',
			nextClass: 		'next-button',
			prevText: 		'Previous',
			nextText: 		'Next',
			speed: 			1000,
			interval:		4000
		};
		var options = $.extend(defaults, options);
		
		var w = $('.'+ options.slideClass).width();
		var c = $('.'+ options.slideClass).length;
		var s = w * c;
		var intVal;
		var activePage;
		
		this.init = function()
		{
			elem.css({'width' : s});
			if(options.prevNext)
			{
				$(document.createElement('span'))
				.attr('class',options.prevClass)
				.html('<a rel=\"prev\" href=\"#\">'+ options.prevText +'</a>')
				.appendTo($('.'+ options.prevNextClass))
				.click(function(){
					activePage = $('.'+ options.pageClass +' li.active'),
					obj.slide('prev',true),
					obj.auto();
				});
				$(document.createElement('span'))
				.attr('class',options.nextClass)
				.html('<a rel=\"prev\" href=\"#\">'+ options.nextText +'</a>')
				.appendTo($('.'+ options.prevNextClass))
				.click(function(){
					activePage = $('.'+ options.pageClass +' li.active').next(),
					obj.slide('next',true),
					obj.auto();
				});
			};
			for(var i=0;i<c;i++){
				$(document.createElement('li'))
				.html('<a rel='+ i +' href=\"#\">'+ (i+1) +'</a>')
				.appendTo($('.'+ options.pageClass))
				.click(function(){
					activePage = $(this),
					obj.slide('page',true),
					obj.auto();
				});
			};
			$('.'+ options.pageClass +' li:first').addClass('active');
			$('.'+ options.slideClass +' a').hover(function() {
				clearInterval(intVal);
				}, function() {
				obj.auto();
			});
		};
		
		this.slide = function(cmd,clicked){
			var r;
			switch(cmd)
			{
				case 'prev':
					r = activePage.find('a').attr('rel') - 1 ;
					if(r<0){
						r = c-1;
						activePage = $('.'+ options.pageClass +' li:last');
					}else{
						activePage = $('.'+ options.pageClass +' li.active').prev();
					}
				break;
				case 'next':
				default:
					if ( activePage.length === 0)
					{
						activePage = $('.'+ options.pageClass +' li:first');
					}
					r = activePage.find('a').attr('rel');
				break;
			};
			var p = r * w;
			$('.'+ options.pageClass +' li').removeClass('active');
			activePage.addClass('active');
			$('.'+ options.slideClass).animate({
				left: -p
			}, options.speed );
			if(clicked){
				clearInterval(intVal);
			}
		};

		this.auto = function()
		{
			intVal = setInterval(function(){
				activePage = $('.'+ options.pageClass +' li.active').next();
				obj.slide('next');
			}, options.interval);
		};
    };
	
	$.fn.jeelider = function(options){
		return this.each(function()
		{
			var element = $(this);
			if (element.data(options.name)) return;

			var jeelider = new Jeelider(this, options);
			element.data(options.name, jeelider);
			(element.data(options.name)).init();
			(element.data(options.name)).auto();
		});
	};
})(jQuery);