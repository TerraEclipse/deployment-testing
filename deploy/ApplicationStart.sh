#!/bin/bash
echo 'ApplicationStart'

# Start application via upstart (don't care if it works).
service deployment-testing start || true
