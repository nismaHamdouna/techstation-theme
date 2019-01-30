
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
		frappe.local.flags.redirect_location = "desk"
		raise frappe.Redirect

	# get settings from site config
	context.no_header = True
	context.for_test = 'manage.html'
	context.title = "Login"
	company = frappe.defaults.get_user_default('company')
	if not company:
		company = frappe.db.get_value("Global Defaults", "Global Defaults", "default_company")	
	if not company:
		company_l= frappe.get_list("Company",['name'])
		if company_l:
			company=frappe.get_doc("Company",company_l[0].name)
	context.company =   company #frappe.db.get_default("company")


	return context

@frappe.whitelist(allow_guest=True)
def validate_mail(email):
	ee = frappe.db.sql('select  name ,email from tabUser where enabled= 1 and name=%s',email);
	if ee:
		return {"status": "success",
			"email" : ee
			}
	else: 
		m = frappe.db.sql('select  name ,email from tabUser where name=%s',email);
		if m:
			return {"status": "in_active"}
		else:	
			return {"status": "error"}


