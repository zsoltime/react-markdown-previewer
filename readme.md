# React Markdown Previewer

This is my markdown previewer for Free Code Camp's [first React challenge](https://www.freecodecamp.com/challenges/build-a-markdown-previewer). Demo is available on [my site](https://zsolti.co/fcc/markdown/).

## User Stories

- [x] I can type GitHub-flavored Markdown into a text area.
- [x] I can see a preview of the output of my markdown that is updated as I type.

## Tools Used

- [React.js library](https://facebook.github.io/react/)
- [Webpack module bundler](https://webpack.js.org/)
- [Babel.js compiler](https://babeljs.io/)
- [ESLint linter](http://eslint.org/) with [Airbnb's JS config](https://github.com/airbnb/javascript)
- [Sass](http://sass-lang.com/) preprocessor with [PostCSS' Autoprefixer](https://github.com/postcss/autoprefixer)
- [Karma](https://karma-runner.github.io) test runner
- [Mocha](https://mochajs.org/) test framework
- [Expect](https://github.com/mjackson/expect) assertion library
- [Marked](https://github.com/chjj/marked) markdown parser and compiler

## Install and Build

You need to have `yarn` [installed](https://yarnpkg.com/lang/en/docs/install/) on your computer, or you can use `npm`.

#### Clone this repo

``` bash
git clone https://github.com/zsoltime/react-markdown-previewer.git
cd react-markdown-previewer
```

#### Install dependencies

``` bash
yarn
# OR
npm install
```

#### Start dev server with hot reload

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every saved changes.

``` bash
yarn start
# OR
npm start
```

#### Build production bundle

It builds production bundle, uglifies JS, minifies CSS - ready to upload.

``` bash
yarn build
# OR
npm run build
```

#### Run unit tests

Run unit tests with Karma and Mocha

``` bash
yarn test
# OR
npm run test
```
