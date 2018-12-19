import { interfaces } from 'ask-sdk-model';
import BillingAgreementAttributes = interfaces.amazonpay.model.request.BillingAgreementAttributes;
import SetupAmazonPayRequest = interfaces.amazonpay.request.SetupAmazonPayRequest

import {BillingAgreementBuilder} from './BillingAgreementBuilder'
import {PayloadBuilder} from "./PayloadBuilder";
import {defaultSetupAmazonPayRequest } from './defaultAttributes'

export class PayloadFactory {
    public static init(): PayloadBuilder {
        const payload: SetupAmazonPayRequest = JSON.parse(JSON.stringify(defaultSetupAmazonPayRequest))
        return {
            setSellerId(sellerId: string): PayloadBuilder {
                payload.sellerId = sellerId
                return this
            },
            setCountryOfEstablishment(countryOfEstablishment: string): PayloadBuilder {
                payload.countryOfEstablishment = countryOfEstablishment
                return this
            },
            setLedgerCurrency(ledgerCurrency: string): PayloadBuilder {
                payload.ledgerCurrency = ledgerCurrency
                return this
            },
            setCheckoutLanguage(checkoutLanguage: string): PayloadBuilder {
                payload.checkoutLanguage = checkoutLanguage
                return this
            },
            withAmazonShippingAddress(isNeedAmazonShippingAddress: boolean): PayloadBuilder {
                payload.needAmazonShippingAddress = isNeedAmazonShippingAddress
                return this
            },
            isSandboxMode(isSandbox: boolean): PayloadBuilder {
                payload.sandboxMode = isSandbox
                return this
            },
            setSandboxCustomerEmailId(emailId: string): PayloadBuilder {
                payload.sandboxCustomerEmailId = emailId
                return this
            },
            updateVersion(version: string):PayloadBuilder {
                payload["@version"] = version
                return this
            },
            updateBillingAgreement(billingAgreement: BillingAgreementBuilder): PayloadBuilder {
                payload.billingAgreementAttributes = billingAgreement.getAttributes()
                return this
            },
            getPayload(): SetupAmazonPayRequest {
                if (!payload.countryOfEstablishment) throw new Error('countryOfEstablishment is required')
                if (!payload.ledgerCurrency) throw new Error('ledgerCurrency is required')
                if (!payload.sellerId) throw new Error('sellerId is required')
                return payload
            },
        }
    }
}
