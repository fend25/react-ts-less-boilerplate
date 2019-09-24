# React boilerplate

A minimal boilerplate with typescript, cosy styles and tests.

Last check and dependencies bump: September 2019

## How to work with

```bash
# how to start
git clone https://github.com/fend25/react-ts-less-boilerplate
cd react-ts-less-boilerplate
rm -rf .git
yarn
```         

 - `yarn start` starts in dev mode, HMR and so on
 - `yarn build` build in production mode
 - `yarn analyze` build project like `yarn build`, and builds a bundle diagram
 - `yarn test` starts tests
 
#### env vars
`NODE_ENV` passes automatically depending on `start` or `build` script.
There is second env var: `DEBUG`. You can pass any value to this env var, and this value will be provided as `process.env.DEBUG`.
Also, there is boolean var `process.env.isDebug`, which is true when there is the `DEBUG` env var. 

## Technologies
 - react
 - typescript 
 - less 
 - tests:
    - jest
    - enzyme    
    
#### Comment on technologies decision:

##### Typescript (and no babel)
The goal of this boilerplate is to use typescript. 
Since it already uses TS, there is no babel at all. 
With all respect to babel, there is no necessary in it.

##### Less (and no sass)
From styles, I need just nesting, variables and color functions. 
Less is much more lightweight than sass, and sass has good tradition 
to have a breaking change in binary part with every Node major release.
Less is pretty fast and it doesn't spend time for 'node-sass building...' at every `npm i` or `yarn` invocation.

Less can be installed once and it works.

Still it can be extremely easy replaced with sass.

PostCSS and Autoprefixer are not provided here, since it's a minimal config and 
it's easy to add them manually.
All styles preprocessing config is condensed in one place in `webpack/webpack.common.conf`.
 
### What is absent
 - PostCSS and Autoprefixer
 - routing
 - store and data management
 - linting
 
Because there are too much ways and approaches and this is a minimal _react_ boilerplate.    

### workflow features   
 - full assets support (fonts and images works properly) 
 - in dev mode: full HMR and modern approach  
 - in build mode: optimized build 
 - bundle analyzing included
 - ready example of work with images and fonts (provided font and image weight just 10Kb)
 - ready example of tests
 - polyfills are included (core-js/stable)
 - regenerator runtime is not needed because typescript compiles async-await itself 
 - neat config without spaghetti
 - lots of small but important details like .less and .css module declaration for transparent work with TS 
  