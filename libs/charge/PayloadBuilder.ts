import { interfaces } from 'ask-sdk-model';
import ChargeAmazonPayRequest = interfaces.amazonpay.request.ChargeAmazonPayRequest;
import PaymentAction = interfaces.amazonpay.model.request.PaymentAction;
import {ChargeSellerOrderAttributesBuilder} from "./SellerOrderAttributesBuilder";
import {ChargeAuthorizeAttributesBuilder } from './AuthorizeAttributesBuilder'

export interface ChargePayloadBuilder {
    updateVersion(version: number): ChargePayloadBuilder
    setSellerId(sellerId: string): ChargePayloadBuilder
    setBillingAgreementId(billingAgreementId: string): ChargePayloadBuilder
    updatePaymentAction(action: PaymentAction): ChargePayloadBuilder
    updateAuthorizeAttributes(attributes: ChargeAuthorizeAttributesBuilder): ChargePayloadBuilder
    updateSellerOrderAttributes(attributes: ChargeSellerOrderAttributesBuilder): ChargePayloadBuilder
    getPayload(): ChargeAmazonPayRequest
}
