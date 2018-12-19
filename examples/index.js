const AMAZONPay = require('ask-utils-for-amazon-pay')

const chargePayloadExample = () => {
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
  console.log('=== Charge ===')
  console.log(JSON.stringify(payload))
}

const setupPayloadExample = () => {
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
  console.log('=== Setup ===')
  console.log(JSON.stringify(setupPayload.getPayload()))
}

chargePayloadExample()
setupPayloadExample()
