# eric-tran

My personal website - https://www.erictran.ca

## Environment Variable Setup
My site uses the GitHub GraphQL API to fetch data, therefore a GitHub access token is required. You will need to create `config.js` in the `config` directory. The contents of the file should be as follows:

``` javascript
module.exports = {
    GITHUB_TOKEN: '<put-your-access-token-here>'
}

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
