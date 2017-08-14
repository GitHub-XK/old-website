#!/bin/bash
while IFS='' read -r line || [[ -n "$line" ]]; do
	ls -1 "$line" >> movedFiles.tmp
	cp "$line"/* .
done < "expandingDirectories.build"
