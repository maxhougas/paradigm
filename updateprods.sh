#!/bin/sh

HERE=$(realpath $0 | grep -o '^.*/')
PRODS="$HERE"resources/products.csv

RAWBEGLERI=$(sed -z 's:.*\[BEGLERI]\n*::; s:\n*\[.*:\n:; s:\n:__NEWLINE__:g;' "$HERE"/resources/products.csv)
NBEGLERI=$(echo $RAWBEGLERI | grep -o '__NEWLINE__' | wc -l)

echo $NBEGLERI 
echo $RAWBEGLERI

NEWBEGLERI=$(echo -n $RAWBEGLERI | awk -v RS='__NEWLINE__' -v ORS='' -v FS=, -v OFS='",' -v TREC=$NBEGLERI \
  'BEGIN{print "const BEGLERI = [\\n {"}
        {print "desc:\"" $1, "pric:\"" $2, "link:\"" $3 "\"}"}
 NR<TREC{print ",\\n {"}
     END{print "\\n]"}')

echo  $NEWBEGLERI

sed -zi "s-const BEGLERI[^]]*]-$NEWBEGLERI-" "$HERE"/resources/funcs.js
