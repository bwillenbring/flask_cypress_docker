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

#### 5. Expect this output
```bash
Starting template_flask_app_flask_1 ... done
Starting template_flask_app_cypress_1 ... done
Attaching to template_flask_app_flask_1, template_flask_app_cypress_1
flask_1    |  * Serving Flask app "app" (lazy loading)
flask_1    |  * Environment: production
flask_1    |    WARNING: Do not use the development server in a production environment.
flask_1    |    Use a production WSGI server instead.
flask_1    |  * Debug mode: on
flask_1    |  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
flask_1    |  * Restarting with stat
flask_1    |  * Debugger is active!
flask_1    |  * Debugger PIN: 206-428-825
```

#### 6. Check the contents of `cypress/videos`
There should be 4 .mp4 files showing the test run.

----
