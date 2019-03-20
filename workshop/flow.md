# Workshop flow

## Day 1

- Intro
- What is React, React vs Angular
- Show modern JS coding
- React
  - Who is using
  - JSX, Vitrual DOM, State
  - Don't reinvent the wheel
- Begin to code

  - Counter example, start from scratch. Arrow vs old functions.
  - Controlled vs uncontrolled
  - fetch()
  - Login example from Material UI
  - Introduce Redux and redux-persist
  - Do some jest testing of redux

- SSR?? Next.js
- Testing

## Redux

What is it and when you should use it.
Demonstrate by building it from scratch
Explain and demonstrate thunk, async https://redux.js.org/recipes/reducing-boilerplate#userinfojs
“thunks” = functions returning functions
Structuring a large scale redux app

Examples:
Counter
Controlled vs uncontrolled
Use fetch() and render the return
React router
  controlled, uncontrolled
  nested eg /services and /services/shave
  login
  delete localStorage["persist:root"]
Redux
Redo the Counter in redux?
Maybe login using the baseup API, store user in redux persist
Updated logged in users name, it will update everywhere.

### Exercise 1
Create a simple login form in React.
Email field should be controlled
Password field uncontrolled.
Send a fetch request to https://
If json response contains `user` then print user.name in a h1 tag

npx create-react-app login (--typescript)
cd login
yarn start

## Day 2 - React Native

How does it work?
JS Bridge
React Navigation
Redux
Performance
FlatList using a fetch api