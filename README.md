## Installation and Setup
### 1. Pull KnowMyClass code
From the parent folder you want KnowMyClass in 

```$ git clone git@github.com:yuboooo/KnowMyClass.git```


### 2. Virtual Environment - Ignore for now
Using your preferred virtual environment method create an environment for the project. We can use Python3.8 for the project, I used Python3.8.10.

* Conda: \
```$ cd KnowMyClass``` \
```$ conda create --name <env_name> --file requirements.txt```
* venv: \
```$ cd KnowMyClass``` \
```$ python3.8 -m virtualenv <env_name>``` \
```$ source <env_name>/bin/activate``` \
```$ pip install -r requirements.txt```

### 3. MySQL Set up for Mac:
#### Installation and Setup
- https://www.youtube.com/watch?v=2cvH0HRjZF8&t=4s
- You may need to use ```$ open -t .zprofile``` instead of .bash_profile
- Add this path: export PATH=${PATH}:/usr/local/mysql/bin
#### Possible error for mysqlclient:
- pip install mysql-connector-python
- pip install mysqlclient
- if error: try "xcode-select --install" for mac

### 4. Run the Project
1. Open one terminal to start django server:
- cd backend/
- python manage.py runserver

2. Open another terminal to start react server:
- cd frontend/
- npm install (if you do not have node_modules)
- npm start

3. To view the django admin page:
- admin username: admin
- admin password: knowmyclass
