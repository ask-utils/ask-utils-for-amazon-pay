import AmazonPay from 'ask-utils-for-amazon-pay'

const authorizeAttributes = AmazonPay.Charge.AuthorizeAttributesBuilder
    .setReferenceId('MyReference ID')
    .setCurrencyCode('USD')
    .setAmount('500')
const sellerOrderAttribtes = AmazonPay.Charge.SellerOrderAttributesBuilder
    .setSellerOrderId('my seller id')
    .setStoreName('Example store')
const payload = AmazonPay.Charge.PayloadBuilder
    .setSellerId('my-seller-id')
    .setBillingAgreementId('agreement-id')
    .updateAuthorizeAttributes(authorizeAttributes)
    .updateSellerOrderAttributes(sellerOrderAttribtes)
    .getPayload()
console.log(payload)
