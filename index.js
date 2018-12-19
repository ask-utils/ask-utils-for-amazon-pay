const ChargeAuthAtts = require('./dist/charge/AuthorizeAttributesFactory')
const ChargeSellerAtts = require('./dist/charge/SellerOrderAttributesFactory')
const ChargePayload = require('./dist/charge/PayloadFactory')
const SetupPayload = require('./dist/setup/PayloadFactory')
const SetupBillingAgreement = require('./dist/setup/BillingAgreementFactory')

module.exports = {
  Charge: {
    AuthorizeAttributesBuilder: ChargeAuthAtts.AuthorizeAttributesFactory.init(),
    SellerOrderAttributesBuilder: ChargeSellerAtts.SellerOrderAttributesFactory.init(),
    PayloadBuilder: ChargePayload.PayloadFactory.init()
  },
  Setup: {
    PayloadBuilder: SetupPayload.PayloadFactory.init(),
    BillingAgreementBuilder: SetupBillingAgreement.BillingAgreementFactory.init()
  }
}
