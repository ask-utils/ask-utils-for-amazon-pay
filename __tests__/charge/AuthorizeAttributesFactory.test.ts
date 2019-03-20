import ChargeAuthorizeAttributesFactory from '../../libs/charge/AuthorizeAttributesFactory';

describe('Charge/ChargeAuthorizeAttributesFactory', () => {
    let AuthorizeAttributesBuilder = ChargeAuthorizeAttributesFactory.init()
    beforeEach(() => {
        AuthorizeAttributesBuilder = ChargeAuthorizeAttributesFactory.init()
    })
    describe('#getAuthorizationAmount()', () => {
        test('Should get authorizationAmount object', () => {
            AuthorizeAttributesBuilder.setReferenceId('referenceId')
            AuthorizeAttributesBuilder.setTransactionTimeout(100)
            AuthorizeAttributesBuilder.setAmount('1000')
            AuthorizeAttributesBuilder.setCurrencyCode('USD')
            expect(AuthorizeAttributesBuilder.getAuthorizationAmount())
                .toEqual({
                    "@type": "Price",
                    "@version": "2",
                    "amount": "1000",
                    "currencyCode": "USD"
                });
        })
        test('should throw error if authorizationAmount.amount does not updated', () => {
            AuthorizeAttributesBuilder.setReferenceId('referenceId')
            expect(() => {
                AuthorizeAttributesBuilder.setReferenceId('referenceId')
                AuthorizeAttributesBuilder.getAuthorizationAmount()
            }).toThrow('authorizationAmount.amount should be updated')
        })
        test('should throw error if authorizationAmount.currencyCode does not updated', () => {
            expect(() => {
                AuthorizeAttributesBuilder.setReferenceId('referenceId')
                AuthorizeAttributesBuilder.setAmount('1000')
                AuthorizeAttributesBuilder.getAuthorizationAmount()
            }).toThrow('authorizationAmount.currencyCode should be updated')
        })
    })
    describe('#getAttributes()', () => {
        test('Should get authorization attributes', () => {
            AuthorizeAttributesBuilder.setReferenceId('referenceId')
            AuthorizeAttributesBuilder.setTransactionTimeout(100)
            AuthorizeAttributesBuilder.setAmount('1000')
            AuthorizeAttributesBuilder.setCurrencyCode('USD')
            AuthorizeAttributesBuilder.setAuthorizationNote('example note')
            AuthorizeAttributesBuilder.setSoftDescriptor('soft descriptor')
            expect(AuthorizeAttributesBuilder.getAttributes())
                .toEqual({
                    '@type': 'AuthorizeAttributes',
                    '@version': '2',
                    'authorizationReferenceId': 'referenceId',
                    'transactionTimeout': 100,
                    'sellerAuthorizationNote': 'example note',
                    "softDescriptor": "soft descriptor",
                    'authorizationAmount': {
                        '@type': "Price",
                        "@version": "2",
                        'amount': '1000',
                        'currencyCode': 'USD'
                    }
                });
        })
        test('should throw error if authorizationReferenceId does not updated', () => {
            expect(() => AuthorizeAttributesBuilder.getAttributes()).toThrow('attributes.authorizationReferenceId should be updated')
        })
        test('should throw error if authorizationAmount.amount does not updated', () => {
            expect(() => {
                AuthorizeAttributesBuilder.setReferenceId('referenceId')
                AuthorizeAttributesBuilder.getAttributes()
            }).toThrow('authorizationAmount.amount should be updated')
        })
        test('should throw error if authorizationAmount.currencyCode does not updated', () => {
            expect(() => {
                AuthorizeAttributesBuilder.setReferenceId('referenceId')
                AuthorizeAttributesBuilder.setAmount('1000')
                AuthorizeAttributesBuilder.getAttributes()
            }).toThrow('authorizationAmount.currencyCode should be updated')
        })
    })
})
