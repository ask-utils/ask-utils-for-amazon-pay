import { PayloadFactory } from '../../libs/charge/PayloadFactory';
import { AuthorizeAttributesFactory } from '../../libs/charge/AuthorizeAttributesFactory';
import { SellerOrderAttributesFactory } from '../../libs/charge/SellerOrderAttributesFactory';

describe('Charge/PayloadFactory', () => {
    let PayloadBuilder = PayloadFactory.init()
    beforeEach(() => {
        PayloadBuilder = PayloadFactory.init()
    })
    describe('Exceptions', () => {
        test('should throw error if authorizationAmount.amount does not updated', () => {
            expect(() => {
                PayloadBuilder.getPayload()
            }).toThrow('payload.authorizeAttributes.authorizationReferenceId should be updated')
        })
    })
    describe('Integrations', () => {
        let AuthorizeAttributesBuilder = AuthorizeAttributesFactory.init()
        let SellerOrderAttributesBuilder = SellerOrderAttributesFactory.init()
        beforeEach(() => {
            AuthorizeAttributesBuilder = AuthorizeAttributesFactory.init()
            SellerOrderAttributesBuilder = SellerOrderAttributesFactory.init()
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
