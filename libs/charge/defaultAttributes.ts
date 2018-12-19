import { interfaces } from 'ask-sdk-model';

export const defaultSellerOrderAttributes: interfaces.amazonpay.model.request.SellerOrderAttributes  = {
    '@type': 'SellerOrderAttributes',
    '@version': '2'
}
export const defaultAuthorizeAttributes: interfaces.amazonpay.model.request.AuthorizeAttributes = {
    '@type': 'AuthorizeAttributes',
    '@version': '2',
    'authorizationReferenceId': 'dummy',
    'authorizationAmount': {
        '@type': "Price",
        "@version": "2",
        'amount': 'dummy',
        'currencyCode': 'dummy'
    }
}

export const defaultPayload: interfaces.amazonpay.request.ChargeAmazonPayRequest = {
    '@type': 'ChargeAmazonPayRequest',
    '@version': '2',
    'sellerId': '',
    'billingAgreementId': '',
    'paymentAction': 'AuthorizeAndCapture',
    'authorizeAttributes': defaultAuthorizeAttributes,
    'sellerOrderAttributes': defaultSellerOrderAttributes
}
