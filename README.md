# ask-utils-for-amazon-pay

## Getting Started

```bash
$ git clone git@github.com:ask-utils/ask-utils-for-amazon-pay.git
$ cd ask-utils-for-amazon-pay
$ yarn install
$ yarn run build
```

## Example

### Setup API

```javascript
const AMAZONPay = require('./index')
const SellerOrderAttributesBuilder = AMAZONPay.Setup.BillingAgreementBuilder
SellerOrderAttributesBuilder.setPlatFormId('My id')
SellerOrderAttributesBuilder.setSellerNote('my note')
SellerOrderAttributesBuilder.setSellerBillingAgreementId('agreement id')
SellerOrderAttributesBuilder.setSellerNote('My store')
SellerOrderAttributesBuilder.setCustomInformation('custom info')
const setupPayload = AMAZONPay.Setup.PayloadBuilder

setupPayload.setSellerId('my seller id')
setupPayload.setCountryOfEstablishment('country')
setupPayload.setLedgerCurrency('ledger currency')
setupPayload.setCheckoutLanguage('checkout lang')
setupPayload.withAmazonShippingAddress(true)
setupPayload.isSandboxMode(true)
setupPayload.setSandboxCustomerEmailId('email')
setupPayload.updateBillingAgreement(SellerOrderAttributesBuilder)
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

```bash
$ git checkout -b YOUR_TOPIC_BRANCH
$ yarn test
$ git add ./
$ git commit -m "YOUR UPDATE DESCRIPTION"
```
