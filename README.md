# wordCounter

wordCounter lets you enter the URL of your favorite website and shows you how many times each word occurs in it.

## Usage
There is a bash script that starts up the docker-compose process to instantiate the backend and frontend containers.
```bash
./start.sh
```
Alternatively, you can start up the project with 
```bash
docker-compose -f docker-compose.dev.yml up --build
```

Open your browser and visit http://localhost  (https does not work for now)
