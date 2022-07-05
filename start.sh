#!/bin/bash

docker network create sail
cd api && docker-compose up -d && cd .. && cd client && docker-compose up -d
