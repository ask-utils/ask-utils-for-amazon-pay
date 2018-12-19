import { interfaces } from 'ask-sdk-model';
import ChargeAmazonPayRequest = interfaces.amazonpay.request.ChargeAmazonPayRequest;
import PaymentAction = interfaces.amazonpay.model.request.PaymentAction;
import AuthorizeAttributes = interfaces.amazonpay.model.request.AuthorizeAttributes;
import SellerOrderAttributes = interfaces.amazonpay.model.request.SellerOrderAttributes;
import {SellerOrderAttributesBuilder} from "./SellerOrderAttributesBuilder";
import {AuthorizeAttributesBuilder } from './AuthorizeAttributesBuilder'

export interface PayloadBuilder {
    updateVersion(version: number): PayloadBuilder
    setSellerId(sellerId: string): PayloadBuilder
    setBillingAgreementId(billingAgreementId: string): PayloadBuilder
    updatePaymentAction(action: PaymentAction): PayloadBuilder
    updateAuthorizeAttributes(attributes: AuthorizeAttributesBuilder): PayloadBuilder
    updateSellerOrderAttributes(attributes: SellerOrderAttributesBuilder): PayloadBuilder
    getPayload(): ChargeAmazonPayRequest
}
