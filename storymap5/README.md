SwissGuesser
============

This GeoAdmin Story Map is an interactive game to guess historical locations from the Swiss National Archive on the Swisstopo map of Switzerland.

This project is in Beta stage. Please follow our progress and raise technical issues in the [GitHub project](https://github.com/geoadmin/web-storymaps/issues?page=1&state=open). 

# Installation

The project is built with OpenLayers 3, jQuery 2 and the Twitter Bootstrap 3 framework, with a collection of tools powered by Node.js.

1. Install Node.js http://nodejs.org/download/
2. Install dependencies from the Node Package Manager with this command at the project root:

`storymap5$ npm install`

This will install Grunt and Bower automatically. However, it is recommended that they are installed globally:

`storymap5# npm install -g grunt-cli bower`

Run this command as root to use system-wide, or use the [nave.sh](https://github.com/isaacs/nave) utility for your local user.

Install dependencies

`storymap5# bower install`

or

`storymap5# node_modules/.bin/bower install`

For generating documentation, the [Pygments](http://pygments.org/) utility is required, which can be installed as indicated [on the website](http://pygments.org/download/) or on Ubuntu/Debian systems as follows:

`# sudo apt-get install python-pygments`

## Preparing data

The metadata for this project is provided in the form of a spreadsheet. Export this file to CSV then use the converter tool:

`storymap5$ node util/convertCSV.js`

Due to licensing restrictions, the photo archive JPEGs must be copied manually to the `/app/data/photos/` folder. Their filenames will correspond to the images defined in `base.json`, e.g. `14093_0799_A1.jpg`.

## Preparing translations

With a similar process, translations for this app are in a spreadsheet. Export to CSV and save the resulting file under `/app/data/i18n/translation.csv'. Then run:

`storymap5$ node util/translationCSV.js`

## Compiling resources

To a local server watching for changes, and open a browser:

`storymap5$ grunt server`

To create a `docs/` folder with HTML documentation, run:

`storymap5$ grunt docs`

See Grunt documentation and `Gruntfile.js` for other commands.

## Deploying releases

First you need to build the Bootstrap framework. From the `app/bower_components/bootstrap/` folder run:

`bootstrap$ npm install`

`bootstrap$ grunt dist`

Now you can build this project's distribution folder.

`storymap5$ grunt build`

Finally, zip up the `dist` folder and deploy it to the target host.

# Documentation

See [guesser](app/scripts/guesser.html) and [wms-custom-proj](app/scripts/wms-custom-proj.html) for a detailed code walkthrough.

For debugging the application, you can add `&debug=true` to the URL, which will include all images in the game instead of a random batch. The additional parameter `&ix=5` would then jump to the 5th image in the sequence.

# Licensing

Please see `LICENSE` in the project root.
