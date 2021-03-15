# basic-auth

# LAB - Class 6

## Project: basic-auth

### Author: Arthur Lozano Jr


- [front-end application](https://basic-auth85.herokuapp.com/) (Heroku)
- [Jest](https://jestjs.io/) (Jest)
- [ci/cd](https://github.com/Arthur-Lozano/basic-auth/actions) (GitHub Actions)
- [Pull Request] (https://github.com/Arthur-Lozano/basic-auth/pull/1) 



### Setup

#### `.env` requirements (where applicable)
- `PORT` - 3333

#### How to initialize/run your application (where applicable)

- npm start
- `nodemon`

#### How to use your library (where applicable)

#### Tests
* POST to /signup to create a new user
* POST to /signin to login as a user (use basic auth)
* Need tests for auth middleware and the routes
* Does the middleware function (send it a basic header)
* Do the routes assert the requirements (signup/signin)
* This is going to require more “end to end” testing that you’ve done in the past
* To test signin, your tests actually need to create a user first, then try and login, so there’s a dependency built in
* Ensure that you use supergoose to test your routes and your database


#### UML

![UML](./assets/basicauth.png)
