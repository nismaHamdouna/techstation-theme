var status=true;
$('.btn-next').on('click',function(e){
  e.preventDefault();
	var m = this;
	$(m).css("disabled","true");
	$(m).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
	frappe.call({
		type: "POST",
		args: {email : $('#login_email').val()},
		method: 'techstation_theme.www.manage.validate_mail',
		freeze: true,
		 async: false,
		callback: function(r){
			if(r.message){
				console.log(r.message);
					$(m).css("disabled","false");
	$(m).html('Next');
				if(r.message.status=="success"){
						$('.mail').css('display','none');
						$('.user').css('display','block');
						$('.email').html(r.message.email[0][1]);
						$('.pass-f').css('display','block');
						$('.btn-login').css('display','block');
						$('.next').css('display','none');
						$('.error_user').css('display','none');
						$('.error_pass').css('display','none');
						$('.error_active').css('display','none');
						status=false;
				}else{
					if(r.message.status=="in_active"){
						$('.error_active').css('display','block');
					}
					else{
						$('.error_user').css('display','block');
						}
				
					}
			}
			}
		});

});

$('.btn-next-reset').on('click',function(e){
  	e.preventDefault();
	var m = this;
	$(m).css("disabled","true");
	$(m).html('<i class="fa fa-circle-o" aria-hidden="true"></i>');
	frappe.call({
		type: "POST",
		args: {email : $('#forgot_email').val()},
		method: 'techstation_theme.www.reset.validate_mail',
		freeze: true,
		 async: false,
		callback: function(r){
			if(r.message){
					$(m).css("disabled","false");
	$(m).html('Next');

				if(r.message.status=="success"){
						$('.email').css('display','none');
						$('.user').css('display','block');
						$('.name').html(r.message.email[0][1]);
						$('.btn-next-reset').css('display','none');
						$('.error_user').css('display','none');
						$('.error_pass').css('display','none');
						$('.error_active').css('display','none');
						status=false;
				}else{
					if(r.message.status=="in_active"){
						$('.error_active').css('display','block');
						$('.error_user').css('display','none');
					}
					else{
						$('.error_active').css('display','none');
						$('.error_user').css('display','block');
						}
				
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
function get_url_arg(name) {
	return get_query_params()[name] || "";
}

function get_query_params(query_string) {
	var query_params = {};
	if (!query_string) {
		query_string = location.search.substring(1);
	}

	var query_list = query_string.split("&");
	for (var i=0, l=query_list.length; i < l; i++ ){
		var pair = query_list[i].split("=");
		var key = pair[0];
		if (!key) {
			continue;
		}

		var value = pair[1];
		if (typeof value === "string") {
			value = value.replace(/\+/g, "%20");
			value = decodeURIComponent(value);
		}

		if (key in query_params) {
			if (typeof query_params[key] === "undefined") {
				query_params[key] = [];
			} else if (typeof query_params[key] === "string") {
				query_params[key] = [query_params[key]];
			}
			query_params[key].push(value);
		} else {
			query_params[key] = value;
		}
	}
	return query_params;
}
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
				417:function() {
					$(".pass_invalid").css("display","block");
				},

				401: function() {
					$('.page-card-head .indicator').removeClass().addClass('indicator red')
						.text("{{ _('Invalid Password') }}");
				},
				200: function(r) {
					$("input").val("");
					$(".success_res").css("display","block");
					$(".pass_invalid").css("display","none");
					$("#update").css("dispaly","none")


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
