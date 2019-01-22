
from __future__ import unicode_literals
import frappe
import frappe.utils
from frappe.utils.oauth import get_oauth2_authorize_url, get_oauth_keys, login_via_oauth2, login_oauth_user as _login_oauth_user, redirect_post_login
import json
from frappe import _
from frappe.auth import LoginManager


no_cache = True

def get_context(context):
	if frappe.session.user != "Guest" and frappe.session.data.user_type=="System User":
		frappe.local.flags.redirect_location = "/desk"
		raise frappe.Redirect

	# get settings from site config
	context.no_header = True
	context.for_test = 'manage.html'
	context["title"] = "Login"
	context["provider_logins"] = []
	context["disable_signup"] = frappe.utils.cint(frappe.db.get_value("Website Settings", "Website Settings", "disable_signup"))

	for provider in ("google", "github", "facebook", "frappe"):
		if get_oauth_keys(provider):
			context["{provider}_login".format(provider=provider)] = get_oauth2_authorize_url(provider)
			context["social_login"] = True


	login_name_placeholder = [_("Email address")]

	if frappe.utils.cint(frappe.get_system_settings("allow_login_using_mobile_number")):
		login_name_placeholder.append(_("Mobile number"))

	if frappe.utils.cint(frappe.get_system_settings("allow_login_using_user_name")):
		login_name_placeholder.append(_("Username"))

	
	return context

@frappe.whitelist(allow_guest=True)
def validate_mail(email):
	ee = frappe.db.sql('select  name ,email from tabUser where name=%s',email);
	if ee:
		return {"status": "success",
			"email" : ee
			}
	else: 
		return {"status": "error"}


