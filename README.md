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

### Getting Started

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
and you should see the following screen on localhost:3000
![create-react-app-screenshot](./react-create-app.png)

#### Make a Merriam Webster Dictionary Developer Account