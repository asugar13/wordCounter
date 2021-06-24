!/bin/bash
mode=$1


if ! [ -z "$mode" ] && [ $mode = "prod" ]; then
    export NODE_ENV="production"

    Run the production mode
    docker-compose up --build
else
    Running the project in development mode

    docker-compose -f docker-compose.dev.yml up --build
fi
