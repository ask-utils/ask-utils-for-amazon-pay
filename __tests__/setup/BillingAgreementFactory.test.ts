import SetupBillingAgreementFactory from '../../libs/setup/BillingAgreementFactory';

describe('Setup/SetupBillingAgreementFactory', () => {
  let SellerOrderAttributesBuilder = SetupBillingAgreementFactory.init()
  beforeEach(() => {
    SellerOrderAttributesBuilder = SetupBillingAgreementFactory.init()
  })
  test('get Default value', () => {
    expect(SellerOrderAttributesBuilder.getAttributes())
      .toEqual({
          "@type": "BillingAgreementAttributes",
          "@version": "2",
          "sellerBillingAgreementAttributes": {
              "@type": "SellerBillingAgreementAttributes",
              "@version": "2"
          }
      })
  })
  test('get Full attributes', () => {
      SellerOrderAttributesBuilder.setPlatFormId('My id')
      SellerOrderAttributesBuilder.setSellerNote('my note')
      SellerOrderAttributesBuilder.setSellerBillingAgreementId('agreement id')
      SellerOrderAttributesBuilder.setSellerNote('My store')
      SellerOrderAttributesBuilder.setCustomInformation('custom info')
      expect(SellerOrderAttributesBuilder.getAttributes())
          .toEqual({
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
          })
  })
})
