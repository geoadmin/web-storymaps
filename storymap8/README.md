SwissGuesser
============

This SwissGuessr Story Map is an interactive game to guess cable cars all around switzerland.
Play here:
http://storymaps.geo.admin.ch/storymaps/storymap8

# Installation

The project uses a custom build of OpenLayers 3 for the GeoAdmin map, jQuery 2 and the Twitter Bootstrap 3 framework, with a collection of tools powered by Node.js. Deployment instructions:

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

## Install OpenLayers 3

A custom GeoAdmin build of the OpenLayers framework needs to be placed in the `app/src` directory, so that `app/src/build/ga.js` is available at runtime. We are using the [ga fork](https://github.com/geoadmin/ol3/):

1. Check out [geoadmin/ol3](https://github.com/geoadmin/ol3/), then build it using: 
`$ python build-ga.py build`
2. Copy the `build` folder to `storymap5/app/src`.

## Preparing data

The metadata for this project is provided in the form of a spreadsheet. Export this file to CSV then use the converter tool:

`storymap5$ node util/convertCSV.js`

Due to licensing restrictions, the photo archive JPEGs must be copied manually to the `/app/data/photos/` folder. Their filenames will correspond to the images defined in `base.json`.

## Preparing translations

With a similar process, translations for this app are in a spreadsheet. Export to CSV and save the resulting file under `/app/data/i18n/translation.csv'. Then run:

`storymap5$ node util/translationCSV.js`

## Compiling resources

To a local server watching for changes, and open a browser:

`storymap5$ node_modules/.bin/grunt server`

To create a `docs/` folder with HTML documentation, run:

`storymap5$ node_modules/.bin/grunt docs`

See Grunt documentation and `Gruntfile.js` for other commands.

## Deploying releases

First you need to build the Bootstrap framework. From the `app/bower_components/bootstrap/` folder run:

`bootstrap$ npm install grunt-cli`

`bootstrap$ node_modules/.bin/grunt dist`

Now you can build this project's distribution folder.

`storymap5$ node_modules/.bin/grunt build`

Finally, zip up the `dist` folder and deploy it to the target host.

# Documentation

For debugging the application, you can add `&debug=true` to the URL, which will include all images in the game instead of a random batch. The additional parameter `&ix=5` would then jump to the 5th image in the sequence.

# Licensing

Please see `LICENSE` in the project root.

# Install on mf0t

 npm install
 npm install bower
 node_modules/.bin/bower install
 npm install grunt
 npm install grunt-cli
 node_modules/.bin/grunt build --force
 cd dist
 cp -R ../app/src .
