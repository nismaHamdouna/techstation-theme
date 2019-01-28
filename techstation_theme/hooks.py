# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "techstation_theme"
app_title = "techstation"
app_publisher = "techstation"
app_description = "techstation"
app_icon = "techstation"
app_color = "grey"
app_email = "techstation"
app_license = "MIT"

# Includes in <head>
# ------------------
app_include_css = [
	"/assets/techstation_theme/css/techstation.css",
	"/assets/techstation_theme/css/form.css",
	"/assets/techstation_theme/css/module.css",
	"/assets/techstation_theme/css/erpnext.css"
]
app_include_js = "/assets/techstation_theme/js/techstation.js"

website_context = {
	"favicon": 	"/assets/techstation_theme/img/favicon.png",
	"splash_image": "/assets/techstation_theme/img/favicon.png"
}

error_report_email = "support@techstation.com.eg"
# include js, css files in header of web template
# web_include_css = "/assets/techstation_theme/css/techstation_theme.css"
# web_include_js = "/assets/techstation_theme/js/techstation_theme.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "index"


email_brand_image = "assets/techstation_theme/images/logo.png"

default_mail_footer = """
	<span>
		Sent via Techstation Soft
	</span>
"""



# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "techstation_theme.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "techstation_theme.install.before_install"
after_install = "techstation_theme.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "techstation_theme.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"techstation_theme.tasks.all"
# 	],
# 	"daily": [
# 		"techstation_theme.tasks.daily"
# 	],
# 	"hourly": [
# 		"techstation_theme.tasks.hourly"
# 	],
# 	"weekly": [
# 		"techstation_theme.tasks.weekly"
# 	]
# 	"monthly": [
# 		"techstation_theme.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "techstation_theme.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "techstation_theme.event.get_events"
# }

