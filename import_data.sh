#!/bin/bash

docker cp ./data.csv mongo1:/data.csv

docker exec -it mongo1 mongoimport --type csv -d awp3 -c cochanges --headerline --file /data.csv --authenticationDatabase admin --username root --password example

docker exec -it mongo1 mongosh awp3 --eval "db.createUser({user: 'admin', pwd: 'password', roles: [{role: 'dbOwner', db: 'awp3'}]});" --authenticationDatabase admin --username root --password example
