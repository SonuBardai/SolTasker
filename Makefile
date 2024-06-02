install:
	cd client && yarn
	cd server && pipenv install

run_client:
	cd client && yarn dev

run_server:
	cd server && pipenv run python manage.py runserver

generate:
	cd client && yarn generate