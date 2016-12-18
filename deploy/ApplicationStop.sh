#!/bin/bash
echo 'ApplicationStop'

# Stop application via upstart (don't care if it works).
service deployment-testing stop || true
