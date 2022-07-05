#!/bin/bash

cd api && docker-compose down -v && cd .. && cd client && docker-compose down
