import { BillingAgreementFactory } from '../../libs/setup/BillingAgreementFactory';
import { PayloadFactory } from "../../libs/setup/PayloadFactory";

describe('Setup/PayloadFactory', () => {
    let PayloadBuilder = PayloadFactory.init()
    beforeEach(() => {
        PayloadBuilder = PayloadFactory.init()
    })
    describe('Exception', () => {
        test('should throw error when countryOfEstablishment is undefined', () => {
            expect(() => {
                PayloadBuilder.getPayload()
            }).toThrow('countryOfEstablishment is required')
        })
        test('should throw error when ledgerCurrency is undefined', () => {
            expect(() => {
                PayloadBuilder.setCountryOfEstablishment('country')
                PayloadBuilder.getPayload()
            }).toThrow('ledgerCurrency is required')
        })
        test('should throw error when sellerId is undefined', () => {
            expect(() => {
                PayloadBuilder.setCountryOfEstablishment('country')
                PayloadBuilder.setLedgerCurrency('ledger currency')
                PayloadBuilder.getPayload()
            }).toThrow('sellerId is required')
        })
    })
    test('get Default value', () => {
        PayloadBuilder.setCountryOfEstablishment('country')
        PayloadBuilder.setLedgerCurrency('ledger currency')
        PayloadBuilder.setSellerId('my seller id')
        expect(PayloadBuilder.getPayload())
            .toEqual({
                "@type": "SetupAmazonPayRequest",
                "@version": "v2",
                "countryOfEstablishment": "country",
                "ledgerCurrency": "ledger currency",
                "sellerId": "my seller id"
            })
    })
    test('get Full attributes', () => {
        const SellerOrderAttributesBuilder = BillingAgreementFactory.init()
        SellerOrderAttributesBuilder.setPlatFormId('My id')
        SellerOrderAttributesBuilder.setSellerNote('my note')
        SellerOrderAttributesBuilder.setSellerBillingAgreementId('agreement id')
        SellerOrderAttributesBuilder.setSellerNote('My store')
        SellerOrderAttributesBuilder.setCustomInformation('custom info')

        PayloadBuilder.setSellerId('my seller id')
        PayloadBuilder.setCountryOfEstablishment('country')
        PayloadBuilder.setLedgerCurrency('ledger currency')
        PayloadBuilder.setCheckoutLanguage('checkout lang')
        PayloadBuilder.withAmazonShippingAddress(true)
        PayloadBuilder.isSandboxMode(true)
        PayloadBuilder.setSandboxCustomerEmailId('email')
        PayloadBuilder.updateBillingAgreement(SellerOrderAttributesBuilder)
        expect(PayloadBuilder.getPayload())
            .toEqual({
                "@type": "SetupAmazonPayRequest",
                "@version": "v2",
                "billingAgreementAttributes": {
                    "@type": "BillingAgreementAttributes",
                    "@version": "2",
                    "platformId": "My id",
                    "sellerBillingAgreementAttributes": {
                        "@type": "SellerBillingAgreementAttributes",
                        "@version": "2",
                        "customInformation": "custom info",
                        "sellerBillingAgreementId": "agreement id"
                    },
                    "sellerNote": "My store"
                },
                "checkoutLanguage": "checkout lang",
                "countryOfEstablishment": "country",
                "ledgerCurrency": "ledger currency",
                "needAmazonShippingAddress": true,
                "sandboxCustomerEmailId": "email",
                "sandboxMode": true,
                "sellerId": "my seller id"
            })
    })
})
