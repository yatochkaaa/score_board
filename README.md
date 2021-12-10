# Title

Score Board

[DEMO LINK](https://yatochkaaa.github.io/score_board/)
||
[FIGMA DESIGN](https://www.figma.com/file/qowV3yFZcgCEIcDXC3ii6o/Front-end-test-task?node-id=0%3A1)


## Description

* App on React that include 2 pages with routes
  - `/` – Index
  - `/player/{player-name}` – Details
* App has responsive design
* App receive data from server via SSE (server-sent events)

## How to start project

* Fork the repository
* Clone the forked repo
* Open terminal and write `cd client` to open `Client` directory
* Open one more terminal and write `cd server` to open `Server` directory

Next commands use in Client and Server directories:

### Client directory
* Run `npm install` to install the dependencies
* Run `npm start` to run a development server at `http://localhost:3000`

### Server directory
* Run `npm install` to install the dependencies
* Run `npm start` to start the server

## App Tech Info:

* completed with Typescript
* use preprocessor Sass
* routing completed by react-router
* use classNames package
* use faker for adding people every 5 sec
* people info and people score sort order store in local storage