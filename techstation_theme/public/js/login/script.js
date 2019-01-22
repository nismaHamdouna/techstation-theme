jQuery(document).ready(function($) {

	$('.main_container .section_right .tabs li a').on('click', function(e) {
		e.preventDefault();
		if ($(this).attr('href') === '#createAccount') {
			$('#signIn').parent().removeClass('active');
		} else {
			$('#signIn').parent().addClass('active');
		}
	});

	$('.main_container .sessions_panel .btn').on('click', function(e) {
		e.preventDefault();
		$('.main_container .sessions_panel').removeClass('active');
	});

	$('.main_container .section_right_inner form input[type="password"]').each(function(index, el) {
		$(el).on('keyup', function(e) {
			if ($(e.target).val().length >= 4) {
				$(this).siblings('button').addClass('show');
			} else {
				$(this).siblings('button').removeClass('show');
			}
		})
	});

	var showPass = false;
	$('.main_container .section_right_inner form .form_group #showPassword').on('click', function(e) {
		if (!showPass) {
			$(this).siblings('input[type="password"]').attr('type','text');
			$(this).find('i').remove();
			$(this).append('<i class="icon-close"></i>');
			showPass = true;
		} 

		else {
			$(this).siblings('input').attr('type','password');
			$(this).find('i').remove();
			$(this).append('<i class="icon-eye"></i>');
			showPass = false;
		}
	});

	 $('form').on('submit', function(e) {
        var isFormValid = true;			
        
        $(this).find('.input_mandatory').each(function() {
            if ($.trim($(this).val()).length == 0){
                $(this).parent('.mandatory').removeClass("success");
                $(this).parent('.mandatory').addClass("highlight");
                isFormValid = false;
            }
            else{
                $(this).parent('.mandatory').removeClass("highlight");
                $(this).parent('.mandatory').addClass("success");
            }
        });
        return isFormValid;
    });

    // error classes for demo form
    $('form .input_mandatory').on('keyup', function(e) {
    	if ($.trim($(e.target).val()).length !== 0) {
    		$(e.target).parent('.mandatory').addClass('success').removeClass('highlight');
    	} else {
    		$(e.target).parent('.mandatory').removeClass('success').addClass('highlight');
    	}
    });

	 $('[data-modal]').each(function(index, el) {
		$(el).on('click', function(e) {
			e.preventDefault();
			$($(this).data('modal')).addClass('active');
		});
	 });

	 $(document).on('mousedown', function(e) {
	 	$('.modal_wrapper').each(function(index, el) {
	 		if (!$(el).children('.modal_body').is(e.target) && $(el).children('.modal_body').has(e.target).length === 0) {
	 			$(el).removeClass('active');
	 		}
	 	});
	 });

	 $('.modal_wrapper .close').on('click', function(e) {
	 	e.preventDefault();
	 	$('.modal_wrapper').removeClass('active');
	 });

	 $('.main_container .sessions_panel .sessions_list li a[href="#addAccount"]').on('click', function(e) {
	 	e.preventDefault();
	 	$('.main_container .sessions_panel').removeClass('active');
	 });

	 function browserName() {
		var ba = ["Vivaldi", "Trident", "Edge", "Chrome", "Firefox", "Safari", "Opera", "MSIE"];
		var browser, ua = navigator.userAgent;


		for(var i = 0; i < ba.length; i++) {
			if (ua.indexOf(ba[i]) > -1) {
				browser = ba[i];
				break;
			}
		}

		if (browser == 'Safari') {
			$('form .form_group_input').css('font-size','16px');
		}
	}

	browserName();
});
