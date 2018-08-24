# vShop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

## Modularization ideas

vCart- Cart and products functionality

- Vuex: Cart, Products
- Vue: Cart, CartSummary

## Deployment

TBD

## Known Issues

### `braintree-web-drop-in` causes performance issues.

```bash
 warning

asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  js/chunk-vendors.45ea41df.js (421 KiB)

 warning

entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  app (432 KiB)
      js/chunk-vendors.45ea41df.js
      css/app.3995da3a.css
      js/app.5b55acfb.js
```