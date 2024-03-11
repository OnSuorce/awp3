#!/bin/bash

docker exec mongo1 mongosh awp3 --eval "db.dropDatabase();" --authenticationDatabase admin --username root --password example
