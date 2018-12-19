// silence is golden
// interfaces
// - setup
import { SetupBillingAgreementBuilder } from './setup/BillingAgreementBuilder'
import { SetupPayloadBuilder } from './setup/PayloadBuilder'
// - charge
import { ChargeAuthorizeAttributesBuilder } from './charge/AuthorizeAttributesBuilder'
import { ChargeSellerOrderAttributesBuilder } from './charge/SellerOrderAttributesBuilder'
import { ChargePayloadBuilder } from './charge/PayloadBuilder'

// functions
import { SetupBillingAgreementFactory } from './setup/BillingAgreementFactory'
import { SetupPayloadFactory } from './setup/PayloadFactory'
import { ChargeAuthorizeAttributesFactory } from './charge/AuthorizeAttributesFactory'
import { ChargeSellerOrderAttributesFactory } from './charge/SellerOrderAttributesFactory'
import { ChargePayloadFactory } from './charge/PayloadFactory'

export declare namespace interfaces {
    interface Charge {
        AuthorizeAttributesBuilder: ChargeAuthorizeAttributesBuilder;
        SellerOrderAttributesBuilder: ChargeSellerOrderAttributesBuilder;
        PayloadBuilder: ChargePayloadBuilder;
    }
    interface Setup {
        PayloadBuilder: SetupPayloadBuilder;
        BillingAgreementBuilder: SetupBillingAgreementBuilder;
    }
}

export interface AmazonPay {
    Charge: {
        AuthorizeAttributesBuilder: ChargeAuthorizeAttributesBuilder;
        SellerOrderAttributesBuilder: ChargeSellerOrderAttributesBuilder;
        PayloadBuilder: ChargePayloadBuilder;
    }
    Setup: {
        PayloadBuilder: SetupPayloadBuilder;
        BillingAgreementBuilder: SetupBillingAgreementBuilder;
    }
}
const AmazonPay: AmazonPay = {
    Charge: {
        AuthorizeAttributesBuilder: ChargeAuthorizeAttributesFactory.init(),
        SellerOrderAttributesBuilder: ChargeSellerOrderAttributesFactory.init(),
        PayloadBuilder: ChargePayloadFactory.init()
    },
    Setup: {
        PayloadBuilder: SetupPayloadFactory.init(),
        BillingAgreementBuilder: SetupBillingAgreementFactory.init()
    }
}
export default AmazonPay
module.exports = AmazonPay
