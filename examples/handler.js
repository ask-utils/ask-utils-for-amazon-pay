const AMAZONPay = require('ask-utils-for-amazon-pay')
const Alexa = require('ask-sdk-core')
const { canHandle } = require('ask-utils')
const AmazonChargeHandler = {
  canHandle (handlerInput) {
    return canHandle(handlerInput, 'IntentRequest', 'ChargeIntent')
  },
  handle(handlerInput) {
    const authorizeAttributes = AMAZONPay.Charge.AuthorizeAttributesBuilder
      .setReferenceId('MyReference ID')
      .setCurrencyCode('USD')
      .setAmount('500')
    const sellerOrderAttributes = AMAZONPay.Charge.SellerOrderAttributesBuilder
      .setSellerOrderId('my seller id')
      .setStoreName('Example store')
    const payload = AMAZONPay.Charge.PayloadBuilder
      .setSellerId('my-seller-id')
      .setBillingAgreementId('agreement-id')
      .updateAuthorizeAttributes(authorizeAttributes)
      .updateSellerOrderAttributes(sellerOrderAttributes)
      .getPayload()
    const setupDirectiveObject = {
      "type": "Connections.SendRequest",
      "name": "Charge",
      "payload": payload,
      "token": 'token'
    };
    return setupDirectiveObject

    return handlerInput.responseBuilder
      .addDirective(setupDirectiveObject)
      .withShouldEndSession(true)
      .getResponse();
  },
}


const AmazonSetupHandler = {
  canHandle (handlerInput) {
    return canHandle(handlerInput, 'IntentRequest', 'SetupIntent')
  },
  handle(handlerInput) {
    const SellerOrderAttributes= AMAZONPay.Setup.BillingAgreementBuilder
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

    return handlerInput.responseBuilder
      .addDirective({
        "type": "Connections.SendRequest",
        "name": "Setup",
        "payload": setupPayload.getPayload(),
        "token": 'token'
      })
      .withShouldEndSession(true)
      .getResponse();
  },
}


const skillBuilder = Alexa.SkillBuilders.custom()
exports.handler = skillBuilder
  .addRequestHandlers(
    AmazonChargeHandler,
    AmazonSetupHandler
  )
  .lambda()
