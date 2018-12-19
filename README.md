# ask-utils-for-amazon-pay

## Getting Started

```bash
$ git clone git@github.com:ask-utils/ask-utils-for-amazon-pay.git
$ cd ask-utils-for-amazon-pay
$ yarn install
$ yarn run build
```

## Example

```javascript
const { SellerOrderAttributesBuilder } = require('./index')
console.log(SellerOrderAttributesBuilder.getAttributes())
{ '@type': 'SellerOrderAttributes', '@version': '2' }
```

## Testing

```
$ yarn test

or

$ yarn test -- --watch
```


## Contributing

```bash
$ git checkout -b YOUR_TOPIC_BRANCH
$ yarn test
$ git add ./
$ git commit -m "YOUR UPDATE DESCRIPTION"
```
