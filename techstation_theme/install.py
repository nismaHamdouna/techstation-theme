# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

# called from wnf.py
# lib/wnf.py --install [rootpassword] [dbname] [source]

from __future__ import unicode_literals, print_function

from six.moves import input

import os, json, sys, subprocess, shutil
import frappe
import frappe.database
import getpass
import importlib
from frappe import _
from frappe.model.db_schema import DbManager
from frappe.model.sync import sync_for
from frappe.utils.fixtures import sync_fixtures
from frappe.website import render
from frappe.desk.doctype.desktop_icon.desktop_icon import sync_from_app
from frappe.utils.password import create_auth_table
from frappe.utils.global_search import setup_global_search_table


def after_install():
	f=frappe.get_all("DocField",['name'],filters={"parent":"Item","fieldname":"hub_publishing_sb"})
	if f:
		ff=frappe.get_doc("DocField",f[0].name)
		ff.collapsible=1
		ff.hidden=1
		ff.flags.ignore_permissions=True
		ff.save()



