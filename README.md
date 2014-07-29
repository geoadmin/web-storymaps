Storymaps
=========

Story maps are lightweight, open-source web apps (ESRI definition).


1/ Install

Go to the storymaps directory:

    cd /var/www/vhosts/web-storymaps/private

Clone the code:

    git clone git@github.com:geoadmin/web-storymaps.git storymaps

Run the `Makefile`:

    make all

Restart apache:

    sudo apache2ctl graceful

2/ Deploy

cd /var/www/vhosts/web-storymaps/private/storymaps

sudo -u deploy deploy -r deploy/deploy.cfg int # or prod


Storymap1
=========
Morteratschgletscher: Ein Eisriese schwindet

http://storymaps.geo.admin.ch/storymaps/storymap3


Storymap2
=========
Städte: die zehn grössten im Zeitraffer

http://storymaps.geo.admin.ch/storymaps/storymap2


Storymap3
=========

Die 25 grössten Stauanlagen der Schweiz

http://storymaps.geo.admin.ch/storymaps/storymap3

Storymap4
=========

Die 10 wärmsten Fliessgewässer der Schweiz (Daten werden alle 10 Minuten aktualisert)

This storymap use a cgi script to retrieve the live data from the Federal office for the Environment (FOEN)


Storymap5
=========

SwissGuesser: Fotosammlung Erster Weltkrieg

Code: https://github.com/geoadmin/mf-swissguesser


Storymap6
=========

Der Bergsturz von Randa

http://storymaps.geo.admin.ch/storymaps/storymap6


Storymap8
=========

SwissGuesser: Schweizer Seilbahninventar

http://storymaps.geo.admin.ch/storymaps/storymap8


Code: https://github.com/geoadmin/mf-swissguesser



Storymap9
=========

SwissGuesser: Kulturgüterschutzinventar

http://storymaps.geo.admin.ch/storymaps/storymap9


Code: https://github.com/geoadmin/mf-swissguesser


Storymap10
==========

SwissGuesser: Historische Luftbilder

http://storymaps.geo.admin.ch/storymaps/storymap10

Code: https://github.com/geoadmin/mf-swissguesser


Storymap12
==========

Massnahmen gegen Strassenlärm

http://storymaps.geo.admin.ch/storymaps/storymap12



Storymap13
==========

Neue Landeskarten für die Schweiz

http://storymaps.geo.admin.ch/storymaps/storymap13

