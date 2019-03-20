// functions
import SetupBillingAgreementFactory from './setup/BillingAgreementFactory'
import SetupPayloadFactory from './setup/PayloadFactory'
import ChargeAuthorizeAttributesFactory from './charge/AuthorizeAttributesFactory'
import ChargeSellerOrderAttributesFactory from './charge/SellerOrderAttributesFactory'
import ChargePayloadFactory from './charge/PayloadFactory'

export const Charge = {
    ChargeAuthorizeAttributesFactory,
    AuthorizeAttributesBuilder: ChargeAuthorizeAttributesFactory.init(),
    ChargeSellerOrderAttributesFactory,
    SellerOrderAttributesBuilder: ChargeSellerOrderAttributesFactory.init(),
    ChargePayloadFactory,
    PayloadBuilder: ChargePayloadFactory.init()
}
export const Setup = {
    SetupPayloadFactory,
    PayloadBuilder: SetupPayloadFactory.init(),
    SetupBillingAgreementFactory,
    BillingAgreementBuilder: SetupBillingAgreementFactory.init()
}

export default {
    Charge,
    Setup
}
