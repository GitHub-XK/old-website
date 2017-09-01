#!/bin/bash
mkdir -p css
while IFS='' read -r line || [[ -n "$line" ]]; do
	ls -1 "$line" >> movedFiles.tmp
	cp "$line"/* .
done < "expandingDirectories.build"
for i in sass/[!_]?*.sass; do
	sass "$i" css${i//sass/}nest.sass.css --sourcemap=none;
done
