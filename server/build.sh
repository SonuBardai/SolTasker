#!/bin/bash

# Install Python
apt-get update
apt-get install python3 python3-pip

# Install pipenv
pip3 install --user pipenv

# Run pipenv install
pipenv install