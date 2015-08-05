#!/bin/bash

pwda=$(pwd)
echo $pwda
prog=${pwda: -3}
echo $prog

psa=$(/mnt/home/cmd/ps1.sh $prog)
psb=$(echo $psa|gawk '{print $2}')
echo "ps: "$psb
if [ -z "$psb" ];then
sleep 1;
npm start &
else
echo $psb
fi
