# open-database-and-api-with-freelancers
Find freelancers free


## Contrib

### Editor

Use Cloud9 to edit a project:

https://ide.c9.io/ivanrave/open-database-and-api-with-freelancers

### Database

To connect to a database (development version) in Cloud9:

ˋˋˋsudo sudo -u postgres psqlˋˋˋ

use ˋˋˋ\?ˋˋˋ for other psql commands

Connection parameters stores in process.env with a suffic DDD_ 

## Run

Dev mode: ```npm run dev``` (attached development environment variables, like DDD_)
Release mode: ```npm start``` (all environment variables - on the release server)

## Publish

This project uses AWS ElasticBeanstalk to publish release version

* Commit changes (necessary for next step)
* Zip a project ˋˋˋǹpm run archˋˋˋ
* Upload a zipped project to ElasticBeanstalk
  A project will be published and scaled automatically