## Setup

### Dependencies

#### Node and NPM
Go to https://nodejs.org/en/download/ in order to download node and npm.

#### Material UI
In order to install material ui into your project go to the root directory of your project and run
```
$ npm install @material-ui/core
```

#### Random Words
To make requests to the dictionary api with random words, you'll need to install the random words package in ordert to generate te words.
```
$ npm install random-words
```

### Initial Setup

#### Make a Merriam Webster Dictionary Developer Account
In order to access the dictionary API that we'll use later on, you'll need to go to the Merriam Webster Dictionary developer site and register for an account. You can do that here: https://dictionaryapi.com/register/index. Make sure when registering for an account you register for access to the Merriam-Webster's Collegiate® Dictionary with Audio because this will be the endpoint that we will be hitting. Once you're registered go to products, Merriam-Webster's Collegiate® Dictionary with Audio, and you'll find the endpoint that we'll be hitting to get information from the dictionary api, 
```
https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key
```
In order to hit this enpoint you'll need to replace the 'your-api-key' part of the API call with your own personal API key that you can find on your account.

#### Create a React App
In order to create a new react app, go to the directory on your computer you want to create the directory in and run
```
$ npx create-react-app dictionary
```
This will create a starter project in your chosen directory with a file structure of a React application. In order to test that you did this correctly run the commands
```
$ cd dictionary
$ npm start
```
and you should see a starter react screen on localhost:3000