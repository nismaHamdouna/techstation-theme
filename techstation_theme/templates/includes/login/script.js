var status=true;
$('.btn-next').on('click',function(e){
  e.preventDefault();
	frappe.call({
		type: "POST",
		args: {email : $('#login_email').val()},
		method: 'techstation_theme.www.manage.validate_mail',
		freeze: true,
		 async: false,
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
						status=false;
				}else{
				$('.error_user').css('display','block');
					}
			}
			}
		});

});

$('.btn-next-reset').on('click',function(e){
  e.preventDefault();
	frappe.call({
		type: "POST",
		args: {email : $('#forgot_email').val()},
		method: 'techstation_theme.www.reset.validate_mail',
		freeze: true,
		 async: false,
		callback: function(r){
			if(r.message){
				console.log(r.message);
				if(r.message.status=="success"){
						$('.email').css('display','none');
						$('.user').css('display','block');
						$('.name').html(r.message.email[0][1]);
						$('.btn-next-reset').css('display','none');
						$('.error_user').css('display','none');
						$('.error_pass').css('display','none');
						status=false;
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
						status=true;
			$('.error_user').css('display','none');
});
		function fromsubmit(e){
		console.log($('.user').css('display'));
			if($('.user').css('display')=="none"){
				$('.mail').css('display','block');
				$('.user').css('display','none');
				$('.pass-f').css('display','none');
				$('.btn-login').css('display','none');
				$('.next').css('display','block');
						
				}	
			else{
				$('.mail').css('display','none');
				$('.user').css('display','block');
				$('.pass-f').css('display','block');
				$('.btn-login').css('display','block');
				$('.next').css('display','none');
						
				}
			return false;
	
	};
frappe.ready(function() {
	if(get_url_arg("key")) {
		$("#old_password").parent().toggle(false);
	}

	$("#reset-password").on("submit", function() {
		return false;
	});

	$("#new_password").on("keypress", function(e) {
		if(e.which===13) $("#update").click();
	})

	$("#update").click(function() {
		var args = {
			key: get_url_arg("key") || "",
			old_password: $("#old_password").val(),
			new_password: $("#new_password").val()
		}

		if(!args.old_password && !args.key) {
			frappe.msgprint("{{ _("Old Password Required.") }}");
			return;
		}
		if(!args.new_password) {
			frappe.msgprint("{{ _("New Password Required.") }}");
			return;
		}

		frappe.call({
			type: "POST",
			method: "frappe.core.doctype.user.user.update_password",
			btn: $("#update"),
			args: args,
			statusCode: {
				401: function() {
					$('.page-card-head .indicator').removeClass().addClass('indicator red')
						.text("{{ _('Invalid Password') }}");
				},
				200: function(r) {
					$("input").val("");
					$("#success_res").css("display","block");


					if(r.message) {
						frappe.msgprint("{{ _("Password Updated") }}");
	                    setTimeout(function() {
							window.location.href = r.message;
	                    }, 2000);
					}
				}
			}
		});

        return false;
	});
});
