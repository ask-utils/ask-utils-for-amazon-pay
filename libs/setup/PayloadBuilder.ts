import { interfaces } from 'ask-sdk-model';
import SetupAmazonPayRequest = interfaces.amazonpay.request.SetupAmazonPayRequest

import {SetupBillingAgreementBuilder} from './BillingAgreementBuilder'
export interface SetupPayloadBuilder {
    setSellerId(sellerId: string): SetupPayloadBuilder
    setCountryOfEstablishment(countryOfEstablishment: string): SetupPayloadBuilder
    setLedgerCurrency(ledgerCurrency: string): SetupPayloadBuilder
    setCheckoutLanguage(checkoutLanguage: string): SetupPayloadBuilder
    withAmazonShippingAddress(isNeedAmazonShippingAddress: boolean): SetupPayloadBuilder
    isSandboxMode(isSandbox: boolean): SetupPayloadBuilder
    setSandboxCustomerEmailId(emailId: string): SetupPayloadBuilder
    updateVersion(version: string): SetupPayloadBuilder
    updateBillingAgreement(billingAgreement: SetupBillingAgreementBuilder): SetupPayloadBuilder
    getPayload(): SetupAmazonPayRequest
}
