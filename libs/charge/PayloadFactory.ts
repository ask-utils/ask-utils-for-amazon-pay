import { interfaces } from 'ask-sdk-model';
import ChargeAmazonPayRequest = interfaces.amazonpay.request.ChargeAmazonPayRequest;
import PaymentAction = interfaces.amazonpay.model.request.PaymentAction;

import { ChargeAuthorizeAttributesBuilder } from './AuthorizeAttributesBuilder'

import { ChargePayloadBuilder } from './PayloadBuilder'
import { defaultPayload } from './defaultAttributes'
import { ChargeSellerOrderAttributesBuilder } from './SellerOrderAttributesBuilder'


export class ChargePayloadFactory {
    public static init(): ChargePayloadBuilder {
        const payload: ChargeAmazonPayRequest = JSON.parse(JSON.stringify(defaultPayload))
        return {
            updateVersion(version: number): ChargePayloadBuilder {
                payload["@version"] = String(version)
                return this
            },
            setSellerId(sellerId: string): ChargePayloadBuilder {
                payload.sellerId = sellerId
                return this
            },
            setBillingAgreementId(billingAgreementId: string): ChargePayloadBuilder {
                payload.billingAgreementId = billingAgreementId
                return this
            },
            updatePaymentAction(action: PaymentAction): ChargePayloadBuilder {
                payload.paymentAction = action
                return this
            },
            updateAuthorizeAttributes(attributes: ChargeAuthorizeAttributesBuilder ): ChargePayloadBuilder {
                payload.authorizeAttributes = attributes.getAttributes()
                return this
            },
            updateSellerOrderAttributes(attributes: ChargeSellerOrderAttributesBuilder): ChargePayloadBuilder {
                payload.sellerOrderAttributes = attributes.getAttributes()
                return this
            },
            getPayload(): ChargeAmazonPayRequest {
                if (payload.authorizeAttributes.authorizationReferenceId === 'dummy') {
                    throw new Error('payload.authorizeAttributes.authorizationReferenceId should be updated')
                } else if (payload.authorizeAttributes.authorizationAmount.amount === 'dummy'){
                    throw new Error('payload.authorizeAttributes.authorizationAmount.amount should be updated')
                } else if (payload.authorizeAttributes.authorizationAmount.currencyCode === 'dummy') {
                    throw new Error('payload.authorizeAttributes.authorizationAmount.currencyCode should be updated')
                } else if (!payload.sellerId) {
                    throw new Error('payload.sellerId is required')
                // } else if (!payload.billingAgreementId) {
                //     throw new Error('payload.billingAgreementId is required')
                }
                return payload
            }
        }
    }
}
