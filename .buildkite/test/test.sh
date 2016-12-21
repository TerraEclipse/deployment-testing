#!/bin/bash

set -xeo pipefail

nave use 6.9.4
yarn
yarn test
