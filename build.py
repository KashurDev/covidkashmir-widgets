import os
from os import listdir
import json

widgets = [f for f in listdir("widgets")]

widgetdata = {}
for widget in widgets:
    widgetdata[widget] = json.load(open("widgets/%s/widget.json"%(widget)))

json.dump(widgetdata,open("data/widgets.json","w"))