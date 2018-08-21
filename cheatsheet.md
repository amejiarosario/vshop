# Cheatsheet

## Linting

```bash
npx vue-cli-service lint
```

## ESLint

```js
somthing(t) => 1 // eslint-disable-line no-unused-vars

// eslint-disable-next-line no-use-before-define
const thing = new Thing();

/*eslint-disable */
//suppress all warnings between comments
alert('foo');
/*eslint-enable */


/* eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/* eslint-enable no-alert */
```

## Braintree payments

Sandbox credit card:

- Card number: 4111 1111 1111 1111
- Expiry: 09/20
- CVV: 400
- Postal Code: 40000

## Deployment

https://cli.vuejs.org/guide/deployment.html#general-guidelines

Deploy to heroku just a folder

```bash
git subtree push --prefix server heroku master
```