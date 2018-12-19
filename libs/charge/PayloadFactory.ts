import { interfaces } from 'ask-sdk-model';
import ChargeAmazonPayRequest = interfaces.amazonpay.request.ChargeAmazonPayRequest;
import PaymentAction = interfaces.amazonpay.model.request.PaymentAction;

import { AuthorizeAttributesBuilder } from './AuthorizeAttributesBuilder'

import { PayloadBuilder } from './PayloadBuilder'
import { defaultPayload } from './defaultAttributes'
import { SellerOrderAttributesBuilder } from './SellerOrderAttributesBuilder'


export class PayloadFactory {
    public static init(): PayloadBuilder {
        const payload: ChargeAmazonPayRequest = JSON.parse(JSON.stringify(defaultPayload))
        return {
            updateVersion(version: number): PayloadBuilder {
                payload["@version"] = String(version)
                return this
            },
            setSellerId(sellerId: string): PayloadBuilder {
                payload.sellerId = sellerId
                return this
            },
            setBillingAgreementId(billingAgreementId: string): PayloadBuilder {
                payload.billingAgreementId = billingAgreementId
                return this
            },
            updatePaymentAction(action: PaymentAction): PayloadBuilder {
                payload.paymentAction = action
                return this
            },
            updateAuthorizeAttributes(attributes: AuthorizeAttributesBuilder ): PayloadBuilder {
                payload.authorizeAttributes = attributes.getAttributes()
                return this
            },
            updateSellerOrderAttributes(attributes: SellerOrderAttributesBuilder): PayloadBuilder {
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
