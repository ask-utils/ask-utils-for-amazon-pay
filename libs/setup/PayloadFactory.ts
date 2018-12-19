import { interfaces } from 'ask-sdk-model';
import BillingAgreementAttributes = interfaces.amazonpay.model.request.BillingAgreementAttributes;
import SetupAmazonPayRequest = interfaces.amazonpay.request.SetupAmazonPayRequest

import {SetupBillingAgreementBuilder} from './BillingAgreementBuilder'
import {SetupPayloadBuilder} from "./PayloadBuilder";
import {defaultSetupAmazonPayRequest } from './defaultAttributes'

export class SetupPayloadFactory {
    public static init(): SetupPayloadBuilder {
        const payload: SetupAmazonPayRequest = JSON.parse(JSON.stringify(defaultSetupAmazonPayRequest))
        return {
            setSellerId(sellerId: string): SetupPayloadBuilder {
                payload.sellerId = sellerId
                return this
            },
            setCountryOfEstablishment(countryOfEstablishment: string): SetupPayloadBuilder {
                payload.countryOfEstablishment = countryOfEstablishment
                return this
            },
            setLedgerCurrency(ledgerCurrency: string): SetupPayloadBuilder {
                payload.ledgerCurrency = ledgerCurrency
                return this
            },
            setCheckoutLanguage(checkoutLanguage: string): SetupPayloadBuilder {
                payload.checkoutLanguage = checkoutLanguage
                return this
            },
            withAmazonShippingAddress(isNeedAmazonShippingAddress: boolean): SetupPayloadBuilder {
                payload.needAmazonShippingAddress = isNeedAmazonShippingAddress
                return this
            },
            isSandboxMode(isSandbox: boolean): SetupPayloadBuilder {
                payload.sandboxMode = isSandbox
                return this
            },
            setSandboxCustomerEmailId(emailId: string): SetupPayloadBuilder {
                payload.sandboxCustomerEmailId = emailId
                return this
            },
            updateVersion(version: string): SetupPayloadBuilder {
                payload["@version"] = version
                return this
            },
            updateBillingAgreement(billingAgreement: SetupBillingAgreementBuilder): SetupPayloadBuilder {
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
