#!/bin/bash

python -m ensurepip --upgrade
python -m pip install --upgrade pip setuptools wheel
python -m pip install pipenv
python -m pipenv install
