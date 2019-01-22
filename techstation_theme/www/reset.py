# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals

no_sitemap = 1

no_cache = True

def get_context(context):
	if frappe.session.user != "Guest" and frappe.session.data.user_type=="System User":
		frappe.local.flags.redirect_location = "/desk"
		raise frappe.Redirect

	# get settings from site config
	context.no_header = True
	context.for_test = 'reset.html'
	context["title"] = "Reset Password"
	company = frappe.defaults.get_user_default('company')
	if not company:
		company = frappe.db.get_value("Global Defaults", None, "default_company")	
	context['company']=   company #frappe.db.get_default("company")

