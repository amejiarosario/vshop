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