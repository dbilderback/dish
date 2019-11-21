Overview

An application to store user's recipes and a forum to share ideas recipes

To Install

Clone repository
create a file in the config folder called default.json
contents
{
"mongoURI": "mongodb+srv://<user>:<password>@<server>?retryWrites=true&w=majority",
"jwtSecret": "ANy secret you want salting the passwords"
}

npm i
npm run server
