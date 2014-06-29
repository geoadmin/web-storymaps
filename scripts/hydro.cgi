#!/usr/bin/env python

import sys
import os
import cgi
import json
import datetime

import pprint
from urllib2 import Request, urlopen, URLError
from xml.dom.minidom import parse, parseString
from urlparse import parse_qs



def get_data(url):

    #someurl = "http://www.hydrodaten.admin.ch/lhg/SMS.xml"

    req = Request(url)
    try:
        response = urlopen(req)
    except URLError as e:
        if hasattr(e, 'reason'):
            print 'We failed to reach a server.'
            print 'Reason: ', e.reason
        elif hasattr(e, 'code'):
            print 'The server couldn\'t fulfill the request.'
            print 'Error code: ', e.code
    else:
        # everything is fine
        return response.read()


    

#with open('SMS.xml', 'r') as infile:
#    data = infile.read()

data = get_data("http://www.hydrodaten.admin.ch/lhg/SMS.xml")


#print dom.toprettyxml()

def num(s):
    try:
        return int(s)
    except ValueError:
        return s
        
def getText(nodelist, first=True):
    rc = []
    for node in nodelist:
        
        if node.nodeType == node.TEXT_NODE:
            rc.append(node.data)

    if first and len(rc):
        val = rc[0]
        try:
            return float(val)
        except:
            return val
    return rc


def handleWerte(werte):
    w = {}
    for wert in werte:
        
        if len(wert.attributes):
            attribute_name = wert.attributes.keys()[0]
            attribute_val = wert.attributes[attribute_name].nodeValue
            value = wert.nodeValue
            
            w[attribute_val] = getText(wert.childNodes) # attribute_name
        else:

            w[u'current'] = getText(wert.childNodes)
        
        
    return w



def handleSMSList(data, format='json'):
    dom = parseString(data)

    if format == 'json':
    
        stations = dom.getElementsByTagName('MesPar')
        
        mesPar = handleStations(stations)
        ids = [item['strnr'] for item in mesPar]
        d = {}
        elem = dom.getElementsByTagName("AKT_Data")[0]
        for key, value in list(elem.attributes.items()):
                d[key] = value
        
        d['mesPar'] = mesPar
        d['strnrs'] = ids
        
        return d
    else:
        return data

def handleStation(station):
    d = {}
    for key, value in list(station.attributes.items()):
        if key =='StrNr':
            d['strnr'] = int(value)
        else:
            d[key] = value

    if d[u'Typ'] != u'03':
        return None
    
    name = station.getElementsByTagName("Name")[0]
    datum = station.getElementsByTagName("Datum")[0]
    zeit = station.getElementsByTagName("Zeit")[0]
    werte = station.getElementsByTagName("Wert")

    messungen =  handleWerte(werte)


    c= {"Name": "%s" % getText(name.childNodes),
            "Datum": "%s" % getText(datum.childNodes),
             "Zeit": "%s" % getText(zeit.childNodes),
             "Wert":    messungen,
             "Current": messungen['current'],
             "temp": messungen['current']


            }
    res =dict(d, **c)

    #return [i for i in res if res[i][u'Typ'] == '10']
    return res
    
def handleStations(stations, max_num= 25):
    a = []
    for s in stations:
        data = handleStation(s)
        if data:
            a.append(data)

    all_sorted = sorted(a, key=lambda k: k[u'Current'],reverse=True)

    if max_num and len(all_sorted)>= max_num:
        return all_sorted[:max_num - 1]

    return all_sorted

    #return a


form = cgi.FieldStorage()
qs =  os.environ['QUERY_STRING']
params = parse_qs(qs)
if 'format' in params:
    print 'Content-Type: application/xml; charset=utf-8'
    print
    print handleSMSList(data, format='xml')
    sys.exit()
    
# default
time_format = "%a, %d %b %Y %H:%M:%S %Z"
print "Content-Type: application/javascript"
print "Expires: %s" % (
        (datetime.datetime.now()
        + datetime.timedelta(minutes=10)).strftime(time_format)
        )
print
print json.dumps(handleSMSList(data),indent=4)


