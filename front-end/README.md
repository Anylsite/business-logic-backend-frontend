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

## DEMO

The demo has been deployed [here](http://dashboard.anyledger.io.s3-website.ap-south-1.amazonaws.com)

- [http://dashboard.anyledger.io.s3-website.ap-south-1.amazonaws.com](http://dashboard.anyledger.io.s3-website.ap-south-1.amazonaws.com)

> P.S. the demo backend api is deployed on now where the deployments freeze due to inactivity. If you do not receive a response on ping endpoint, wait for a few seconds and try again.
