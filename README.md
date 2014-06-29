Storymaps
=========

Story maps are lightweight, open-source web apps (ESRI definition).


1/ Install

cd /var/www/vhosts/web-storymaps/private

git clone git@github.com:geoadmin/web-storymaps.git storymaps

sudo apache2ctl graceful

2/ Deploy

cd /var/www/vhosts/web-storymaps/private/storymaps

sudo -u deploy deploy -r deploy/deploy.cfg int # or prod


Storymap4
=========

Die 10 wärmsten Fliessgewässer der Schweiz (Daten werden alle 10 Minuten aktualisert)

This storymap use a cgi script to retrieve the live data from the Federal office for the Environment (FOEN)


