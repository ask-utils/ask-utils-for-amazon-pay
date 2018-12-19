import { interfaces } from 'ask-sdk-model';
import BillingAgreementAttributes = interfaces.amazonpay.model.request.BillingAgreementAttributes;
import SellerBillingAgreementAttributes = interfaces.amazonpay.model.request.SellerBillingAgreementAttributes;

import {BillingAgreementBuilder} from './BillingAgreementBuilder'

// default
import {defaultSellerBillingAgreementAttributes, defaultBillingAgreementAttributes } from './defaultAttributes'

export class BillingAgreementFactory {
    public static init(): BillingAgreementBuilder {
        const sellerAgreement: SellerBillingAgreementAttributes = JSON.parse(JSON.stringify(defaultSellerBillingAgreementAttributes))
        const billingAgreement: BillingAgreementAttributes = JSON.parse(JSON.stringify(defaultBillingAgreementAttributes))
        return {
            setPlatFormId(platFormId: string): BillingAgreementBuilder {
                billingAgreement.platformId = platFormId
                return this
            },
            setSellerNote(sellerNote: string): BillingAgreementBuilder {
                billingAgreement.sellerNote = sellerNote
                return this
            },
            setSellerBillingAgreementAttributes(sellerBillingAgreementAttributes: SellerBillingAgreementAttributes): BillingAgreementBuilder {
                billingAgreement.sellerBillingAgreementAttributes = sellerBillingAgreementAttributes
                return this
            },
            setSellerBillingAgreementId(sellerBillingAgreementId: string): BillingAgreementBuilder {
                sellerAgreement.sellerBillingAgreementId = sellerBillingAgreementId
                return this
            },
            setStoreName(storeName: string): BillingAgreementBuilder {
                sellerAgreement.storeName = storeName
                return this
            },
            setCustomInformation(information: string): BillingAgreementBuilder {
                sellerAgreement.customInformation = information
                return this
            },
            updateSellerBillingAgreementVersion(version: string): BillingAgreementBuilder {
                sellerAgreement['@version'] = version
                return this
            },
            updateVersion(version: string): BillingAgreementBuilder {
                billingAgreement['@version'] = version
                return this
            },
            getSellerBillingAgreementAttributes(): SellerBillingAgreementAttributes {
                return sellerAgreement
            },
            getAttributes(): BillingAgreementAttributes {
                billingAgreement.sellerBillingAgreementAttributes = this.getSellerBillingAgreementAttributes()
                return billingAgreement
            },
        }
    }
}
