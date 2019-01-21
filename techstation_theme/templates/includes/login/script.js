$('.btn-next').on('click',function(e){
  e.preventDefault();
	frappe.call({
		type: "POST",
		args: {email : $('#login_email').val()},
		method: 'techstation_theme.www.login.validate_mail',
		freeze: true,
		callback: function(r){
			if(r.message){
				console.log(r.message);
				if(r.message.status=="success"){
						$('.mail').css('display','none');
						$('.user').css('display','block');
						$('.email').html(r.message.email[0][1]);
						$('.pass-f').css('display','block');
						$('.btn-login').css('display','block');
						$('.next').css('display','none');
						$('.error_user').css('display','none');
						$('.error_pass').css('display','none');
				}else{
				$('.error_user').css('display','block');
					}
			}
			}
		});

});


		

	
	var showPass = false;
	$('.pass-btn').on('click', function(e) {
		if (!showPass) {
			$(this).siblings('input[type="password"]').attr('type','text');
			$(this).html('Hide');
			showPass = true;
		} 

		else {
			$(this).siblings('input').attr('type','password');
			$(this).find('i').remove();
			$(this).html('Show');
			showPass = false;
		}
	});

	$('.ch-btn').on('click', function(e) {
			$('.mail').css('display','block');
			$('.user').css('display','none');
			$('.pass-f').css('display','none');
			$('.btn-login').css('display','block');
			$('.next').css('display','block');
			$('.error_user').css('display','none');
});


