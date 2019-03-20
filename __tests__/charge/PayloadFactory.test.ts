import ChargePayloadFactory from '../../libs/charge/PayloadFactory';
import ChargeAuthorizeAttributesFactory from '../../libs/charge/AuthorizeAttributesFactory';
import ChargeSellerOrderAttributesFactory from '../../libs/charge/SellerOrderAttributesFactory';

describe('Charge/ChargePayloadFactory', () => {
    let PayloadBuilder = ChargePayloadFactory.init()
    beforeEach(() => {
        PayloadBuilder = ChargePayloadFactory.init()
    })
    describe('Exceptions', () => {
        test('should throw error if authorizationAmount.amount does not updated', () => {
            expect(() => {
                PayloadBuilder.getPayload()
            }).toThrow('payload.authorizeAttributes.authorizationReferenceId should be updated')
        })
    })
    describe('Integrations', () => {
        let AuthorizeAttributesBuilder = ChargeAuthorizeAttributesFactory.init()
        let SellerOrderAttributesBuilder = ChargeSellerOrderAttributesFactory.init()
        beforeEach(() => {
            AuthorizeAttributesBuilder = ChargeAuthorizeAttributesFactory.init()
            SellerOrderAttributesBuilder = ChargeSellerOrderAttributesFactory.init()
        })
        test('should build valid payload object', () => {
            const authorizeAttributes = AuthorizeAttributesBuilder
                .setReferenceId('MyReference ID')
                .setCurrencyCode('USD')
                .setAmount('500')
            const sellerOrderAttribtes = SellerOrderAttributesBuilder
                .setSellerOrderId('my seller id')
                .setStoreName('Example store')
            const payload = PayloadBuilder
                .setSellerId('my-seller-id')
                .setBillingAgreementId('agreement-id')
                .updateAuthorizeAttributes(authorizeAttributes)
                .updateSellerOrderAttributes(sellerOrderAttribtes)
                .getPayload()
            expect(payload).toEqual({
                "@type": "ChargeAmazonPayRequest",
                "@version": "2",
                "sellerId": "my-seller-id",
                "billingAgreementId": "agreement-id",
                "paymentAction": "AuthorizeAndCapture",
                "authorizeAttributes": {
                    "@type": "AuthorizeAttributes",
                    "@version": "2",
                    "authorizationReferenceId": "MyReference ID",
                    "authorizationAmount": {
                        "@type": "Price",
                        "@version": "2",
                        "amount": "500",
                        "currencyCode": "USD"
                    }
                },
                "sellerOrderAttributes": {
                    "@type": "SellerOrderAttributes",
                    "@version": "2",
                    "sellerOrderId": "my seller id",
                    "storeName": "Example store"
                }
            })
        })
    })
})
