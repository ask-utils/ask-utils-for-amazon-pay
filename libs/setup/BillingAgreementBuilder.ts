import { interfaces } from 'ask-sdk-model';
import BillingAgreementAttributes = interfaces.amazonpay.model.request.BillingAgreementAttributes;
import SellerBillingAgreementAttributes = interfaces.amazonpay.model.request.SellerBillingAgreementAttributes;
export interface SetupBillingAgreementBuilder {
    setPlatFormId(platFormId: string): SetupBillingAgreementBuilder
    setSellerNote(sellerNote: string): SetupBillingAgreementBuilder
    setSellerBillingAgreementAttributes(sellerBillingAgreementAttributes: SellerBillingAgreementAttributes): SetupBillingAgreementBuilder
    setSellerBillingAgreementId(SellerBillingAgreementId: string): SetupBillingAgreementBuilder
    setStoreName(storeName: string): SetupBillingAgreementBuilder
    setCustomInformation(information: string): SetupBillingAgreementBuilder
    updateSellerBillingAgreementVersion(version: string): SetupBillingAgreementBuilder
    updateVersion(version: string): SetupBillingAgreementBuilder
    getSellerBillingAgreementAttributes(): SellerBillingAgreementAttributes
    getAttributes(): BillingAgreementAttributes
}
