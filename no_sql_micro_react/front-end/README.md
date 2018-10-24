# Frontend

The front end of the application bootstrapped with `create-react-app` and making use of a UI Library [material-ui](https://www.npmjs.com/package/@material-ui/core)

_Please refer to the README of the parent project to generate the sample data for Filesystem adapter_

## Install Instructions

```bash
cd <project-directory>
yarn install
```
OR
```bash
cd <project-directory>
npm install
```

## Running the project

> Running it locally
```bash
yarn start
```

or 

```bash
npm start
```

This will start the dev server on Port `3000` which will automatically listen to changes

> Building it for Production
```bash
yarn build
```

or 

```bash
npm run build
```

This will build the project for production and create files under the build directory. Once the directory is build, open the index.html file in the browser.

You can deploy the build directory for running into production.

## Unit Tests
```bash
yarn test
```
OR 

```bash
npm test
```

By default the test script watches for changes, however, pass `CI=true` to only test once.
For e.g.

```bash
CI=true yarn test
```

## DEMO

The demo has been deployed [here](http://dashboard.anyledger.io.s3-website.ap-south-1.amazonaws.com)

- [http://dashboard.anyledger.io.s3-website.ap-south-1.amazonaws.com](http://dashboard.anyledger.io.s3-website.ap-south-1.amazonaws.com)

## And Finally, the project structure!

All the Javascript files reside in the `src` directory which comprises of a few files and folders.

```
+--src
    +--components
        |-- App Wide Components
    +--config
        |-- config.js           // configuration settings
        |-- index.js            // import & exports
        |-- redux               // configure redux store
        |-- theme               // theme & colors settings for the app
    +--pages
        +-- details
            +-- components      // UI & Functional Components
            |-- index.js        // imports & exports
            |-- page.js         // UI Page
        +-- home
            +-- components      // UI & Functional Components
            |-- actions.js      // Actions & Action Creators
            |-- index.js        // imports & exports
            |-- page.js         // UI Page
            |-- reducers.js     // redux reducers
        |-- index.js            // Pages imports & exports
    |--App.js                   // App Root component
    |--index.css                // Project's Custom CSS
    |--index.js                 // Register & Mount the root Component
    |--registerServiceWorker.js // create-react-app's service worker file
    |--setupTests.js            // setup enzyme for testing
```

#### Keep modular structure

- The project has been created with a modular structure, which means that components get their own data which is also why the use of Redux
- All Pages stay seperate, helping different developers write their own code
- A central and page level components directory helping individual developers write their own components while taking advantage of application level components making the UI consistent
- Configuration files stay seperate which allows single point changes for UI updates
- Adding features require the least amount of changes to the existing code base, preventing breaking changes

#### Key Points
- Redux persisted to localStorage for a better UX
- Making use of *Material UI Principles* for a better UI & UX
- Redux reducers are automatically added by simply exporting `reducers` along with the page in `pages/<pagename>/index.js`. For e.g. have a look at `src/pages/Home/index.js` at `export { default as reducers } from './reducers';` which configures the redux store to use those reducers.
- Make use of `React Router` for easy & parameterized navigation
- Mobile ready application

> P.S. the demo backend api is deployed on now where the deployments freeze due to inactivity. If you do not receive a response on ping endpoint, wait for a few seconds and try again.
