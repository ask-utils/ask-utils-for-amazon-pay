import { interfaces } from 'ask-sdk-model';
import BillingAgreementAttributes = interfaces.amazonpay.model.request.BillingAgreementAttributes;
import SellerBillingAgreementAttributes = interfaces.amazonpay.model.request.SellerBillingAgreementAttributes;

import {SetupBillingAgreementBuilder} from './BillingAgreementBuilder'

// default
import {defaultSellerBillingAgreementAttributes, defaultBillingAgreementAttributes } from './defaultAttributes'

export default class SetupBillingAgreementFactory {
    public static init(): SetupBillingAgreementBuilder {
        const sellerAgreement: SellerBillingAgreementAttributes = JSON.parse(JSON.stringify(defaultSellerBillingAgreementAttributes))
        const billingAgreement: BillingAgreementAttributes = JSON.parse(JSON.stringify(defaultBillingAgreementAttributes))
        return {
            setPlatFormId(platFormId: string): SetupBillingAgreementBuilder {
                billingAgreement.platformId = platFormId
                return this
            },
            setSellerNote(sellerNote: string): SetupBillingAgreementBuilder {
                billingAgreement.sellerNote = sellerNote
                return this
            },
            setSellerBillingAgreementAttributes(sellerBillingAgreementAttributes: SellerBillingAgreementAttributes): SetupBillingAgreementBuilder {
                billingAgreement.sellerBillingAgreementAttributes = sellerBillingAgreementAttributes
                return this
            },
            setSellerBillingAgreementId(sellerBillingAgreementId: string): SetupBillingAgreementBuilder {
                sellerAgreement.sellerBillingAgreementId = sellerBillingAgreementId
                return this
            },
            setStoreName(storeName: string): SetupBillingAgreementBuilder {
                sellerAgreement.storeName = storeName
                return this
            },
            setCustomInformation(information: string): SetupBillingAgreementBuilder {
                sellerAgreement.customInformation = information
                return this
            },
            updateSellerBillingAgreementVersion(version: string): SetupBillingAgreementBuilder {
                sellerAgreement['@version'] = version
                return this
            },
            updateVersion(version: string): SetupBillingAgreementBuilder {
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
