#!/usr/bin/env python

import csv
import sys
import json
import codecs

#EDIT THIS LIST WITH YOUR REQUIRED JSON KEY NAMES
fieldnames=["name", "lang","easting", "northing", "altitude","colour"]

def convert(filename):
     features = []
     csv_filename = filename[0]
     print "Opening CSV file: ",csv_filename 
     f=open(csv_filename, 'r')
     csv_reader = csv.DictReader(f,fieldnames,delimiter=';')
     json_filename = csv_filename.split(".")[0]+".json"
     print "Saving JSON to file: ",json_filename
     jsonf = open(json_filename,'w') 
     lines = [r for r in csv_reader]
     for line in lines:
         print line
         coordinates = [float(line['easting']), float(line['northing'])]
         print  coordinates
         geometry = {'type': 'Point', "coordinates": coordinates}
         print geometry, coordinates
         feature = {"type": "Feature", "geometry": geometry, "properties": line}
         print feature
         features.append(feature)

     collection = {"type": "FeatureCollection", "features": features}
     data = json.dumps(collection)
     jsonf.write(data) 
     f.close()
     jsonf.close()

     import requests

     validate_endpoint = 'http://geojsonlint.com/validate'
     good_geojson = data

     good_request = requests.post(validate_endpoint, data=good_geojson)

     print good_request.json()
                
if __name__=="__main__":
    convert(sys.argv[1:])
