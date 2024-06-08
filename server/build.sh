#!/bin/bash

# Install Python
sudo apt-get update
sudo apt-get install python3 python3-pip

# Install pipenv
pip3 install --user pipenv

# Run pipenv install
pipenv install