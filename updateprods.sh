#!/bin/sh

HERE=$(realpath $0 | grep -o '^.*/')
PRODS="$HERE"resources/products.csv

RAWBEGLERI=$(sed -z 's:.*\[BEGLERI]\n*::; s:\n*\[.*:\n:; s:\n: :g;' "$HERE"/resources/products.csv)
NBEGLERI=$(echo $RAWBEGLERI | wc -w)

NEWBEGLERI=$(echo -n $RAWBEGLERI | awk -v RS=' ' -v ORS='' -v FS=, -v OFS='",' -v TREC=$NBEGLERI \
  'BEGIN{print "const BEGLERI = [\\n {"}
        {print "desc:\"" $1, "pric:\"" $2, "stat:\"" $3, "dyn:\"" $4, "link:\"" $5 "\"}"}
 NR<TREC{print ",\\n {"}
     END{print "\\n]"}')

sed -zi "s-const BEGLERI[^]]*]-$NEWBEGLERI-" "$HERE"/resources/funcs.js
