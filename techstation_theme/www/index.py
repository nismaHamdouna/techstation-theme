
from __future__ import unicode_literals
import frappe
import frappe.utils
from frappe.utils.oauth import get_oauth2_authorize_url, get_oauth_keys, login_via_oauth2, login_oauth_user as _login_oauth_user, redirect_post_login
import json
from frappe import _
from frappe.auth import LoginManager


no_cache = True

def get_context(context):
	# get settings from site config
	
	context.no_header = True
	context.for_test = 'index.html'
	context.title = 'Home'
	company = frappe.defaults.get_user_default('company')
	if not company:
		company = frappe.db.get_value("Global Defaults", "Global Defaults", "default_company")	
	if not company:
		company_l= frappe.get_list("Company",['name'])
		if company_l:
			company=frappe.get_doc("Company",company_l[0].name)
	context.company =   company #frappe.db.get_default("company")

	return context



