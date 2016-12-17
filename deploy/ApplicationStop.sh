#!/bin/bash
echo 'ApplicationStop'

# Stop application via upstart.
service deployment-testing stop
