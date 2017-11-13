#!/bin/bash

# _clean.sh repo_dir [-p list_to_protect] [-d list_to_delete]

if [[ $# -eq 0 ]] ; then
    echo "_clean.sh repo_dir [-p list_to_protect] [-d list_to_delete]"
    exit 0
fi

repo=$1
CWD=`pwd`
sort='LC_COLLATE=C sort'

cd $repo

git ls-files | LC_COLLATE=C sort -u > $CWD/cl.monw_current.lst
git rev-list --objects --all | git cat-file  --batch-check="%(objecttype) %(objectname) %(objectsize) %(rest)" | grep -E '^blob' | awk '{print $4;}' >$CWD/cl.monw_allfiles.lst
git rev-list --objects --all | git cat-file  --batch-check="%(objecttype) %(objectname) %(objectsize) %(rest)" | grep -E '^blob' | awk '{print $4," -- ", $2;}' | LC_COLLATE=C sort > $CWD/cl.blobs


while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -d|--delete)
    todelete=$2
    shift # past argument
    shift # past value
    ;;
    -p|--protect)
    toprotect=$2
    shift # past argument
    shift # past value
    ;;
    *)
    shift
    ;;
esac
done


grep -v -F -x -f $CWD/cl.monw_current.lst $CWD/cl.monw_allfiles.lst | LC_COLLATE=C  sort -u > $CWD/cl.todelete.lst

if [ ! -z $toprotect ]; then
    mv $CWD/cl.todelete.lst $CWD/cl.todelete.lst_tmp
    grep -v -G -x -f $CWD/$toprotect $CWD/cl.todelete.lst > $CWD/cl.todelete.lst
fi

if [ ! -z $todelete ]; then
    mv $CWD/cl.todelete.lst $CWD/cl.todelete.lst_tmp
    grep -G -x -f $CWD/$todelete $dfile > $CWD/cl.todelete.lst
fi

cat $CWD/cl.blobs $CWD/cl.todelete.lst | LC_COLLATE=C  sort -u | awk 'BEGIN{FS="  --  "}; !/  --  / {file=$0;fresh=1}; /  --  /{if (file==$1){ print $2; fresh=0;}else {if(fresh==1){print "blob missing", file, " ", $1;}}}' > $CWD/cl.bids


#To make actual cleanup:
#java -jar ../bfg-1.12.15.jar -bi ../cl.bids
#git reflog expire --expire=now --all && git gc --prune=now --aggressive
