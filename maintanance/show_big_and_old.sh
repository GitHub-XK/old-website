#!/bin/bash

# List files present in the history of the git, which are not present in the current revision
# Lists those which size is greater SLimit, calulates grand total for them
#  calulated size is not the size of the repository, but the size of unpaked files.
# potencial argument is the repository root dirrectory, or it assumes a directory above is the root directory for the repository

# ./script [git repository path]

CWD=`pwd`
SLimit=1000000
RepoDir=$1
if [ -z $RepoDir ]; then RepoDir=".."; fi
cd $RepoDir

git ls-files | LC_COLLATE=C sort -u | awk '{print "blob .[^ ]+ [0-9]+", $1}' > $CWD/info.monw_current.lst
git rev-list --objects --all | git cat-file  --batch-check="%(objecttype) %(objectname) %(objectsize) %(rest)" | grep -E '^blob' > $CWD/info.monw_allblob.lst

grep -v -E -f $CWD/info.monw_current.lst $CWD/info.monw_allblob.lst | sort -k3 -n | awk 'BEGIN {sum=0}; $3>'$SLimit' {print $3, " ", $4; sum+=$3;}; END{ print "Total size in the history, unpacked: ", sum}' | tee $CWD/info.oldfiles_$SLimit
