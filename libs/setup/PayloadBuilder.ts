import { interfaces } from 'ask-sdk-model';
import SetupAmazonPayRequest = interfaces.amazonpay.request.SetupAmazonPayRequest

import {BillingAgreementBuilder} from './BillingAgreementBuilder'
export interface PayloadBuilder {
    setSellerId(sellerId: string): PayloadBuilder
    setCountryOfEstablishment(countryOfEstablishment: string): PayloadBuilder
    setLedgerCurrency(ledgerCurrency: string): PayloadBuilder
    setCheckoutLanguage(checkoutLanguage: string): PayloadBuilder
    withAmazonShippingAddress(isNeedAmazonShippingAddress: boolean): PayloadBuilder
    isSandboxMode(isSandbox: boolean): PayloadBuilder
    setSandboxCustomerEmailId(emailId: string): PayloadBuilder
    updateVersion(version: string):PayloadBuilder
    updateBillingAgreement(billingAgreement: BillingAgreementBuilder): PayloadBuilder
    getPayload(): SetupAmazonPayRequest
}
