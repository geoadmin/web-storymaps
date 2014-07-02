Data Update Storymap3
---------------------------------------

In Storymaps3 the files cotaining the dam data are static, i.e., they have been retreived from the BGDI PostGIS data base and locally stored on the server as *.csv and *.geojson file. Below a description is given how to retrieve and handle the data in case the dam data set needs to be updated.

1) Copy the FME file "Storymaps3.fme" to a local computer where you have FME and have access to the FSDI PostGIS database containing the uvek data. 

2) Open the file with FME 

3) Add the correct username and password for accessing the database (uvek[POSTGIS] -> Parameters -> Username + Password)

4) Run the script

5) Replace the outputed stauanlangen.csv and stauanlagen.geojson,  files on the server (./storymap3/data/).




Of course you could modify the files as well manually using a texteditor (csv file) and QGIS (geojson file).


