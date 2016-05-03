#!/usr/bin/env python
# -*- coding: utf-8 -*-


"""

    hydro.cgi is a CGI script to convert BAFU XML Hydrodaten to a JSON file

    If you provide a parameter 'format=xml' it will only return the original
    XML data acting as a proxy only.

    As 1st of Mai 2016, the format has change to the following:
    <?xml version='1.0' encoding='utf-8'?><!DOCTYPE AKT_Data SYSTEM "AKT_Data.dtd"><?xml-stylesheet type="text/xsl" href="pseudosms.xsl"?>
    <AKT_Data ID="SMS-Liste" ZeitSt="03.05.2016 16:55">
      <MesPar DH="HBCHa" StrNr="2415" Typ="10" Var="10">
      <Name>Glatt - Rheinsfelden</Name>
      <Datum>03.05.2016</Datum>
      <Zeit>16:00</Zeit>
      <Wert>9.97</Wert>
      <Wert dt="-24h">12.01</Wert>
      <Wert Typ="delta24">-2.043</Wert>
      <Wert Typ="m24">10.65</Wert>
      <Wert Typ="max24">12.01</Wert>
      <Wert Typ="min24">9.97</Wert>
      </MesPar>
      ...
    </AKT_Data>

"""

import sys
import os
import cgi
import json
import datetime

from urllib2 import Request, urlopen, URLError
from xml.dom.minidom import parseString
from urlparse import parse_qs


def get_data(url):

    req = Request(url)
    try:
        response = urlopen(req)
    except URLError as e:
        if hasattr(e, 'reason'):
            print 'Failed to reach a server.'
            print 'Reason: ', e.reason
        elif hasattr(e, 'code'):
            print 'The server couldn\'t fulfill the request.'
            print 'Error code: ', e.code
    else:
        return response.read()


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

            w[attribute_val] = getText(wert.childNodes)  # attribute_name
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
        d['StrNrs'] = ids

        return d
    else:
        return data


def handleStation(station):
    d = {}
    for key, value in list(station.attributes.items()):
        if key == 'StrNr':
            try:
                d['strnr'] = int(value)
            except ValueError:
                d['strnr'] = value

        else:
            d[key] = value

    if d[u'Typ'] != u'03':
        return None

    name = station.getElementsByTagName("Name")[0]
    datum = station.getElementsByTagName("Datum")[0]
    zeit = station.getElementsByTagName("Zeit")[0]
    werte = station.getElementsByTagName("Wert")

    messungen = handleWerte(werte)

    c = {"Name": "%s" % getText(name.childNodes),
         "Datum": "%s" % getText(datum.childNodes),
         "Zeit": "%s" % getText(zeit.childNodes),
         "Wert": messungen,
         "Current": messungen['current'],
         "temp": messungen['current']


         }
    res = dict(d, **c)

    return res


def handleStations(stations, max_num=25):
    a = []
    for s in stations:
        data = handleStation(s)
        if data:
            a.append(data)

    all_sorted = sorted(a, key=lambda k: k[u'Current'], reverse=True)

    if max_num and len(all_sorted) >= max_num:
        return all_sorted[:max_num - 1]

    return all_sorted


def main():

    try:
        qs = os.environ['QUERY_STRING']
    except:
        qs = 'format=xml'
    params = parse_qs(qs)
    data = get_data("http://www.hydrodaten.admin.ch/lhg/SMS.xml")
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
    print json.dumps(handleSMSList(data), indent=4)

if __name__ == '__main__':
    main()
