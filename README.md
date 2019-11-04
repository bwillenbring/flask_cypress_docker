# Cypress & Flask Example Docker
A bare bones example of getting containerized [Cypress](https://cypress.io) to target a containerized simple [Flask](https://flask.palletsprojects.com) app. `docker-compose.yml` consists of 2 services:
1. `flask`: has a volume mount that allow you to modify the app on the fly by editing [flask/app.py](flask/app.py)
1. `cypress`: has a volume mount that allows you to modify the cypress test [cypress/integration/flask_spec.js](cypress/integration/flask_spec.js)

----
## Requirements for usage
- `Docker version 19.03.1` or higher

## To use
- Clone the repo locally: `git clone https://github.com/bwillenbring/template_flask_app.git`
- cd into the top level directory (where you can see `docker-compose.yml`)
- Build the container: `docker-compose build`
- Wait for this: `Successfully tagged template_flask_app_cypress:latest`
- Run it: `docker-compose up`

----
