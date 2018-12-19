import { SellerOrderAttributesFactory } from '../libs/SellerOrderAttributesFactory';

describe('SellerOrderAttributesFactory', () => {
    let SellerOrderAttributesBuilder = SellerOrderAttributesFactory.init()
    beforeEach(() => {
        SellerOrderAttributesBuilder = SellerOrderAttributesFactory.init()
    })
    test('get Default value', () => {
        expect(SellerOrderAttributesBuilder.getAttributes())
            .toEqual({
                '@type': 'SellerOrderAttributes',
                '@version': '2'
            })
    })
    test('get Full attributes', () => {
        SellerOrderAttributesBuilder.sellerNote('My note')
        SellerOrderAttributesBuilder.setCustomInformation('customer info')
        SellerOrderAttributesBuilder.setStoreName('My store')
        expect(SellerOrderAttributesBuilder.getAttributes())
            .toEqual({
                '@type': 'SellerOrderAttributes',
                "customInformation": "customer info",
                "sellerNote": "My note",
                "storeName": "My store",
                '@version': '2'
            })
    })
    /*
    test('Should get authorizationAmount object', () => {
        SellerOrderAttributesBuilder.setReferenceId('referenceId')
        SellerOrderAttributesBuilder.setTransactionTimeout(100)
        SellerOrderAttributesBuilder.setAmount('1000')
        SellerOrderAttributesBuilder.setCurrencyCode('USD')
        expect(SellerOrderAttributesBuilder.getAuthorizationAmount())
            .toEqual({
                "@type": "Price",
                "@version": "2",
                "amount": "1000",
                "currencyCode": "USD"
            });
    })
    */
})
