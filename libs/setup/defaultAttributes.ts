import { interfaces } from 'ask-sdk-model';
import BillingAgreementAttributes = interfaces.amazonpay.model.request.BillingAgreementAttributes;

export const defaultBillingAgreementAttributes: BillingAgreementAttributes = {
    '@type': 'BillingAgreementAttributes',
    '@version': '2'
}

export const defaultSellerBillingAgreementAttributes: interfaces.amazonpay.model.request.SellerBillingAgreementAttributes = {
    '@type': 'SellerBillingAgreementAttributes',
    '@version': "2",
}

export const defaultSetupAmazonPayRequest = {
    '@type': 'SetupAmazonPayRequest',
    '@version': 'v2',
    'sellerId': '',
    'countryOfEstablishment': '',
    'ledgerCurrency': '',
}
