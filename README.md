
# Simple User Statistics Service

A simple backend service made in typescript, to simulate simple auth flow with google OAuth & basic email&password, email validation, and simple user statistic panel

## Features
* Google OAuth login
* Simple auth (login, register) with JWT integration, with basic auth as auth module
* User Statistics read
* Reset Password
* Email verification

## Tools Stack & prerequisites
* ReactJS
* MaterialUI

* Make local env file
```
 touch .env
```
* Fill the .env file with the desired variables based on your local setting. Example is in the .env.example file
```
REACT_APP_GOOGLE_OAUTH_URL=
REACT_APP_USER_STATISTICS_SERVICE_BACKEND_URL=
REACT_APP_FRONTEND_URL=
```
* Install node modules
```
npm i
```
* Run the server
```
npm start
```
* Enjoy !

### Endpoints
1. /login -> login page
2. /register-> register page
3. /users -> users list
4. /users/statistics -> user aggregate metrics
5. /reset-password -> reset password page