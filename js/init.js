jQuery(document).ready(function($){
	var smallWindow = false;

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (document.location.pathname.indexOf("/projects/") === 0) {
			if (scroll >= 50) {
				$('#logo-image').attr('src', '../img/dsdc-logo2.png')
				$(".important-class").addClass("padding-on-my-header");
				$(".important-class").addClass("nav-logo-header-2");
			}
			if (scroll < 50) {
				$(".important-class").removeClass("padding-on-my-header");
				$('#logo-image').attr('src', '../img/dsdc-logo1.png')
			}
		} else {
			if (scroll >= 50) {
				$('#logo-image').attr('src', 'img/dsdc-logo2.png')
				$(".important-class").addClass("padding-on-my-header");
			}
			if (scroll < 50) {
				$(".important-class").removeClass("padding-on-my-header");
				$('#logo-image').attr('src', 'img/dsdc-logo1.png')
			}
		}
	}).resize(function(){
		if ( !smallWindow && this.innerWidth <= 1024 ) {
			smallWindow = true;
			$('.top-bar-section').find('ul.right').hide(0).delay(500).show(0);
		}
		if ( smallWindow && this.innerWidth > 1024 ) {
			smallWindow = false;
		}
	});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#logo-image2').attr('src', '../img/dsdc-logo2.png')
			$(".important-class").addClass("padding-on-my-header");
		}
		if (scroll < 50) {
			$(".important-class").removeClass("padding-on-my-header");
			$('#logo-image2').attr('src', '../img/dsdc-logo1.png')
		}
	}).resize(function(){
		if ( !smallWindow && this.innerWidth <= 1024 ) {
			smallWindow = true;
			$('.top-bar-section').find('ul.right').hide(0).delay(500).show(0);
		}
		if ( smallWindow && this.innerWidth > 1024 ) {
			smallWindow = false;
		}
	});

	$('.bxslider').bxSlider();
});

 $(window).bind("load", function () {
    var footer = $("#footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - footer.height();
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});