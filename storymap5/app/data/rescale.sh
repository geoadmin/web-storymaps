mkdir conv
for i in $( ls *.jpg); do convert -resize '1280x1280>' -quality 80 $i conv/$i; done
