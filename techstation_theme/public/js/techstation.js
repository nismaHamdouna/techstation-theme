
$(document).ready(function() {
document.body.style.backgroundColor= '#f7fafc';

//document.body.append(frappe.render_template("search", {}));

//$("#search").append(frappe.render_template("ser", {}));

frappe.utils.set_title(__("Applications"));

$('.navbar-home').html('<img class="erpnext-icon" src="'+frappe.urllib.get_base_url()+'/assets/techstation_theme/img/logo.png" />');


if (["ar", "he", "fa"].indexOf(frappe.boot.lang) >= 0) {
			var ls = document.createElement('link');
			ls.rel="stylesheet";
			ls.href= "assets/techstation_theme/css/rtl.css";
			document.getElementsByTagName('head')[0].appendChild(ls);
			$('body').addClass('rtl')
		}
});
