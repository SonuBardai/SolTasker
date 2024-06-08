#!/bin/bash

# Print the Python version and pip version
python --version
pip --version

# Install pipenv globally
pip install pipenv

# Print the location of pipenv
which pipenv

# Run pipenv install using the python module invocation
python -m pipenv install
