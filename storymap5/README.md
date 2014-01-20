SwissGuesser
============

This GeoAdmin Story Map is an interactive game to guess historical locations from the [Swiss National Archive](http://www.bar.admin.ch/) on a [Swisstopo](http://swisstopo.admin.ch) map of Switzerland. 

Play the game here:
http://storymaps.geo.admin.ch/storymaps/storymap5

# Installation

The project uses a custom build of OpenLayers 3 for the GeoAdmin map, jQuery 2 and the Twitter Bootstrap 3 framework, with a collection of tools powered by Node.js.

## a) Install Node.js and tools

1. Install Node.js http://nodejs.org/download/
2. Install dependencies from the Node Package Manager with this command at the project root:

`storymap5$ npm install`

This will install Grunt and Bower automatically. However, it is recommended that they are installed globally:

`storymap5# npm install -g grunt-cli bower`

Run this command as root to use system-wide, or use the [nave.sh](https://github.com/isaacs/nave) utility for your local user.

## b) Install dependencies

`storymap5# bower install`

or

`storymap5# node_modules/.bin/bower install`

For generating documentation, the [Pygments](http://pygments.org/) utility is required, which can be installed as indicated [on the website](http://pygments.org/download/) or on Ubuntu/Debian systems as follows:

`# sudo apt-get install python-pygments`

## c) Install OpenLayers 3

A custom GeoAdmin build of the OpenLayers framework needs to be placed in the `app/src` directory, so that `app/src/build/ga.js` is available at runtime. We are using the [ga fork](https://github.com/geoadmin/ol3/):

1. Check out [geoadmin/ol3](https://github.com/geoadmin/ol3/), then build it using: 
`$ python build-ga.py build`
2. Copy the `build` folder to `storymap5/app/src`.

## d) Preparing images

Photo JPEGs are copied manually to the `/app/data/photos/` folder and not included in the source code repository. Their filenames will correspond to the images defined in `base.json`, e.g. `14093_0799_A1.jpg`. 

Please see [app/data/photos/README.md](app/data/photos/README.md) for a file listing and information on how to obtain the original photos, which are available under a Creative Commons license.

## e) Preparing data

The metadata for this project is provided in the form of a spreadsheet. Export this file to CSV then use the converter tool:

`storymap5$ node util/convertCSV.js`

The converter will tell you about any missing images.

## f) Preparing translations

With a similar process, translations for this app are in a spreadsheet. Export to CSV and save the resulting file under `/app/data/i18n/translation.csv'. Then run:

`storymap5$ node util/translationCSV.js`

## g) Compile resources

To a local server watching for changes, and open a browser:

`storymap5$ grunt server`

To create a `docs/` folder with HTML documentation, run:

`storymap5$ grunt docs`

See Grunt documentation and `Gruntfile.js` for other commands.

## h) Deploying releases

First you need to build the Bootstrap framework. From the `app/bower_components/bootstrap/` folder run:

`bootstrap$ npm install`

`bootstrap$ grunt dist`

Now you can build this project's distribution folder.

`storymap5$ grunt build`

Finally, zip up the `dist` folder and deploy it to the target host.

# Further documentation

See [guesser](app/scripts/guesser.html) and [wms-custom-proj](app/scripts/wms-custom-proj.html) for a detailed code walkthrough.

For debugging the application, you can add `&debug=true` to the URL, which will include all images in the game instead of a random batch. The additional parameter `&ix=5` would then jump to the 5th image in the sequence.

# Licensing

Please see `LICENSE` in the web-storymaps project top folder.
