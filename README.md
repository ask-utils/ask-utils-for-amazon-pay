# ask-utils-for-amazon-pay

## Getting Started

```bash
$ npm i -S ask-utils-for-amazon-pay

// If you using typescript
$ npm i -D ask-utils-for-amazon-pay
```

## Example

### Setup API

```javascript
const AMAZONPay = require('./index')
const SellerOrderAttributes = AMAZONPay.Setup.BillingAgreementBuilder
  .setPlatFormId('My id')
  .setSellerNote('my note')
  .setSellerBillingAgreementId('agreement id')
  .setSellerNote('My store')
  .setCustomInformation('custom info')
const setupPayload = AMAZONPay.Setup.PayloadBuilder
  .setSellerId('my seller id')
  .setCountryOfEstablishment('country')
  .setLedgerCurrency('ledger currency')
  .setCheckoutLanguage('checkout lang')
  .withAmazonShippingAddress(true)
  .isSandboxMode(true)
  .setSandboxCustomerEmailId('email')
  .updateBillingAgreement(SellerOrderAttributes)
const payload = setupPayload.getPayload()
console.log(JSON.stringify(payload))


{
  "@type": "SetupAmazonPayRequest",
  "@version": "v2",
  "sellerId": "my seller id",
  "countryOfEstablishment": "country",
  "ledgerCurrency": "ledger currency",
  "checkoutLanguage": "checkout lang",
  "needAmazonShippingAddress": true,
  "sandboxMode": true,
  "sandboxCustomerEmailId": "email",
  "billingAgreementAttributes": {
    "@type": "BillingAgreementAttributes",
    "@version": "2",
    "platformId": "My id",
    "sellerNote": "My store",
    "sellerBillingAgreementAttributes": {
      "@type": "SellerBillingAgreementAttributes",
      "@version": "2",
      "sellerBillingAgreementId": "agreement id",
      "customInformation": "custom info"
    }
  }
}
```

### Charge API

```javascript
const AMAZONPay = require('./index')

const authorizeAttributes = AMAZONPay.Charge.AuthorizeAttributesBuilder
  .setReferenceId('MyReference ID')
  .setCurrencyCode('USD')
  .setAmount('500')
const sellerOrderAttribtes = AMAZONPay.Charge.SellerOrderAttributesBuilder
  .setSellerOrderId('my seller id')
  .setStoreName('Example store')
const payload = AMAZONPay.Charge.PayloadBuilder
  .setSellerId('my-seller-id')
  .setBillingAgreementId('agreement-id')
  .updateAuthorizeAttributes(authorizeAttributes)
  .updateSellerOrderAttributes(sellerOrderAttribtes)
  .getPayload()

console.log(payload)

{
  "@type": "ChargeAmazonPayRequest",
  "@version": "2",
  "sellerId": "my-seller-id",
  "billingAgreementId": "agreement-id",
  "paymentAction": "AuthorizeAndCapture",
  "authorizeAttributes": {
    "@type": "AuthorizeAttributes",
    "@version": "2",
    "authorizationReferenceId": "MyReference ID",
    "authorizationAmount": {
      "@type": "Price",
      "@version": "2",
      "amount": "500",
      "currencyCode": "USD"
    }
  },
  "sellerOrderAttributes": {
    "@type": "SellerOrderAttributes",
    "@version": "2",
    "sellerOrderId": "my seller id",
    "storeName": "Example store"
  }
}
```

## Testing

```
$ yarn test

or

$ yarn test -- --watch
```


## Contributing

### Getting started

```bash
$ git clone git@github.com:ask-utils/ask-utils-for-amazon-pay.git
$ cd ask-utils-for-amazon-pay
$ yarn install
$ yarn run build
```

### Before making a Pull Request

```bash
$ git checkout -b YOUR_TOPIC_BRANCH
$ yarn test
$ git add ./
$ git commit -m "YOUR UPDATE DESCRIPTION"
```
