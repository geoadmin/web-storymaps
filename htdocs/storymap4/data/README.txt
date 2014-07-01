Data Update Storymap4
---------------------------------------

The geometiry point are static, i.e., they have been retreived from the BGDI PostGIS data base and locally stored on the server as *.csv and *.geojson file. Below a description is given how to retrieve and handle the data in case the dam data set needs to be updated.

1) Copy the FME file "Storymaps4.fme" to a local computer where you have FME and have access to the FSDI PostGIS database containing the BAFU data. 
2) Open the file with FME 
3) Add the correct username and password for accessing the database (bafu [POSTGIS] -> Parameters -> Username + Password)
4) Run the script
5) Replace the outputed hydromessstationen.geojson,  files on the server (./storymap4/data/).











