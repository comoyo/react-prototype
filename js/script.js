$(document).ready(function() {
	// setting height of sidebar according to body for firefox
    var bodyHeight = $('body').innerHeight();
    $('.expanded-menu').css('max-height', bodyHeight);

    // Open Sidebar
    $('body').on('click', '.navbar-toggle', function () {
        $('.expanded-menu').addClass('open');
        $('body').append('<div class="dim"></div>');
        var drawerHeight = $('.expanded-menu').innerHeight();
        $('body').css('height', drawerHeight);
        $('body').css('overflow-y', 'hidden');
        //console.log(drawerHeight);
    });
	
	// Closing sidebar
    $('body').on('click', '.close-sidebar, .dim', function () {
        $('.expanded-menu').removeClass('open');
        $('.dim').remove();
        $('body').css('height', 'auto');
        $('body').css('overflow-y', 'auto');
    });
	
	// toggle bootstrap dropdown icon
	$('.dropdown').on('show.bs.dropdown hide.bs.dropdown', function(){
      $(this).find('.dropdown-arrow').toggleClass('up');
	  $(this).find('.caret').toggleClass('caret-up');
    });
	
	$('.carousel-control.left').hide();
	$('#myCarousel').on('slid.bs.carousel', checkitem);

	function checkitem()                        // check function
	{
		var $this = $('#myCarousel');
		if ($('.carousel-inner .item:first').hasClass('active')) {
			$this.children('.left.carousel-control').hide();
			$this.children('.right.carousel-control').show();
		} else if ($('.carousel-inner .item:last').hasClass('active')) {
			$this.children('.right.carousel-control').hide();
		} else {
			$this.children('.carousel-control').show();

		}
	}
}); 