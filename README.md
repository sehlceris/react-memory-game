# react-memory-game

A classic memory game - the kind you might get asked to implement during a job screening. Implemented using:

- React
- Redux
- SASS
- TypeScript
- FontAwesome 5

## running the app for development

Run the following command, then visit [localhost:3000](http://localhost:3000):

```bash
npm start
```

## how to play

- launch the app
- each round, the player may choose two cards to flip over
- the goal is to have the two cards' symbols match. if they match, then the cards are eliminated from the game. if they do not match, they both flip back over
- the game is won when all of the cards have been matched

## how this app's tooling was started

In case you need to create a similarly tooled app in the future, this is how the tooling was set up current as of (2020-12-21).

```bash
npx create-react-app react-memory-game --template typescript
npm i --save-dev node-sass@4 # create-react-app doesn't yet work with node-sass 5+
npm i redux react-redux
npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```