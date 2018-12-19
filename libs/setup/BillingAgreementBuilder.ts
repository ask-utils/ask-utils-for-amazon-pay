import { interfaces } from 'ask-sdk-model';
import BillingAgreementAttributes = interfaces.amazonpay.model.request.BillingAgreementAttributes;
import SellerBillingAgreementAttributes = interfaces.amazonpay.model.request.SellerBillingAgreementAttributes;
export interface BillingAgreementBuilder {
    setPlatFormId(platFormId: string): BillingAgreementBuilder
    setSellerNote(sellerNote: string): BillingAgreementBuilder
    setSellerBillingAgreementAttributes(sellerBillingAgreementAttributes: SellerBillingAgreementAttributes): BillingAgreementBuilder
    setSellerBillingAgreementId(SellerBillingAgreementId: string): BillingAgreementBuilder
    setStoreName(storeName: string): BillingAgreementBuilder
    setCustomInformation(information: string): BillingAgreementBuilder
    updateSellerBillingAgreementVersion(version: string): BillingAgreementBuilder
    updateVersion(version: string): BillingAgreementBuilder
    getSellerBillingAgreementAttributes(): SellerBillingAgreementAttributes
    getAttributes(): BillingAgreementAttributes
}
