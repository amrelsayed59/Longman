/*global $,  document, window*/

$(document).ready(function () {

	//Auto Resizing
	$(window).on("resize", function () {

		calculateNewScale();
	});

	  calculateNewScale(); // if the user go to the page and his window is less than 1366px
	
		function calculateNewScale() {

		var percentageOn1 = $(window).height() / 660, //660 598
			percentageOn2 = $(window).width() / 1720; //1920 1366 
		
		$("body").css({
			"-moz-transform": "scale(" + percentageOn1 + ")",
			"-webkit-transform": "scale(" + percentageOn1 + ")",
			"transform": "scale(" + percentageOn1 + ")"
		});

		$(".wrapper").css({
			"-moz-transform": "scale(" + percentageOn2 + ")",
			"-webkit-transform": "scale(" + percentageOn2 + ")",
			"transform": "scale(" + percentageOn2 + ")"
		});

		};
	
	//Button Show
	$('.eye').on('click', function () {

		$('.write').addClass('show').removeClass('hidden');
		$('.wrong, .eye').addClass('disabled')
	});


	//Hidden Marks	
	$('.next, .prev').on('click', function () {
		
		$('.write, .eye').addClass('hidden').removeClass('show disabled');
		$('.wrong').removeClass('disabled')
	});

	//Button Reply
	$('.reply').on('click', function () {

		$('.write, .eye').addClass('hidden').removeClass('show disabled');
		$('.wrong').removeClass('disabled')
	});

	//Button Refesh
	$('.refresh').on('click', function () {
		
		location.reload();
		
	});
	
	// Start Preloading
    $(window).on('load', function () {
		
        $('.loading-overlay,.loader-xbox').delay('1800').fadeOut('slow', function () {
			
            $(this).remove();
        });
    });

    });//End Doc Ready
	

	//Audio
	var myAudio = new Audio('http://www.noiseaddicts.com/samples_1w72b820/4930.mp3'),
		secAudio = new Audio("https://www.soundjay.com/button/beep-09.mp3")

	function stopaudio(){
		myAudio.pause();
		myAudio.currentTime = 0;
	}

	//Write Mark With Audio
	$('.write').click(function(){
		

		if($(this).is('.show')) {
			
			myAudio.pause();
		
		} else {
			myAudio.play();
			$(this).removeClass('hidden').addClass('show');


			if($('.write').is('.show')) {
				$(this).siblings().addClass("disabled");
			}

		}

		/*
		if($('.my-p').children().is('.show')){
			$('.eye').addClass('disabled');
		} 
		*/
		
	});

	//Wrong Mark With Audio
	$('.wrong').click(function(){
		//secAudio.play();

		if($(this).is('.show')) {
			
			secAudio.pause();
		
		} else {
			secAudio.play();
			$(this).removeClass('hidden').addClass('show');

			//hidden Mark
			setTimeout( function(){
				$('.wrong').removeClass('show').addClass('hidden');
			},1200);

			if($(this).is('.disabled')) {
				secAudio.pause();
				$(this).removeClass('show hidden');
			}
		}

	});