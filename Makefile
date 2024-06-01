run_client:
	cd client && yarn dev

run_server:
	cd server && pipenv run python manage.py runserver
