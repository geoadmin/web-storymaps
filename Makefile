

.PHONY: all
all: apache storymap4


.PHONY: storymap4
storymap4:
	cp scripts/hydro.cgi ../../cgi-bin

.PHONY: apache
apache:
	echo "Include /var/www/vhosts/web-storymaps/private/storymaps/apache/*.conf" > ../../conf/99-storymaps.conf


.PHONY: clean
clean:
	rm -i ../../cgi-bin/hydro.cgi
	rm -i ../../conf/99-storymaps.conf
