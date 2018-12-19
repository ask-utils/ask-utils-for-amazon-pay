# Example

## Just run the builder

```javascript
$ node index.js

=== Charge ===
{"@type":"ChargeAmazonPayRequest","@version":"2","sellerId":"my-seller-id","billingAgreementId":"agreement-id","paymentAction":"AuthorizeAndCapture","authorizeAttributes":{"@type":"AuthorizeAttributes","@version":"2","authorizationReferenceId":"MyReference ID","authorizationAmount":{"@type":"Price","@version":"2","amount":"500","currencyCode":"USD"}},"sellerOrderAttributes":{"@type":"SellerOrderAttributes","@version":"2","sellerOrderId":"my seller id","storeName":"Example store"}}
=== Setup ===
{"@type":"SetupAmazonPayRequest","@version":"v2","sellerId":"my seller id","countryOfEstablishment":"country","ledgerCurrency":"ledger currency","checkoutLanguage":"checkout lang","needAmazonShippingAddress":true,"sandboxMode":true,"sandboxCustomerEmailId":"email","billingAgreementAttributes":{"@type":"BillingAgreementAttributes","@version":"2","platformId":"My id","sellerNote":"My store","sellerBillingAgreementAttributes":{"@type":"SellerBillingAgreementAttributes","@version":"2","sellerBillingAgreementId":"agreement id","customInformation":"custom info"}}}
```


## Use with ask-sdk

```javascript
$ cat handler.js

# The file is example code to call the setup api and the charge api
```
