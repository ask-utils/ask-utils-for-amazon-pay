import { SellerOrderAttributesFactory } from '../../libs/charge/SellerOrderAttributesFactory';

describe('Charge/SellerOrderAttributesFactory', () => {
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
})
