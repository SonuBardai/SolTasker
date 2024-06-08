#!/bin/bash

export PATH="$HOME/.local/bin:$PATH"
python -m pip install --user pipenv
$HOME/.local/bin/pipenv install
