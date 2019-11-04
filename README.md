# Cypress & Flask Example Docker
A bare bones example of getting containerized [Cypress](https://cypress.io) to target a containerized simple [Flask](https://flask.palletsprojects.com) app. `docker-compose.yml` consists of 2 services:
1. `flask`: has a volume mount that allow you to modify the app on the fly by editing [flask/app.py](flask/app.py)
1. `cypress`: has a volume mount that allows you to modify the cypress test [cypress/integration/flask_spec.js](cypress/integration/flask_spec.js)

----
## Requirements for usage
- `Docker engine 18.06.0` or higher (the docker-compose file uses compose version 3.7)
----

## How to get this working
#### 1. Clone the repo locally
```
git clone https://github.com/bwillenbring/flask_cypress_docker.git
```

#### 2. cd into the top level directory
```
cd flask_cypress_docker
```
Typing `ls` should show these files...
```
LICENSE			README.md		cypress			docker-compose.yml	flask
```

#### 3. Build the container
```
docker-compose build
```
Wait for this:
```
Successfully tagged flask_cypress_docker:latest
```

#### 4. Run the container
```
docker-compose up
```

----
