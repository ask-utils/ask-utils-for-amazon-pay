const { AuthorizeAttributesFactory } = require('./dist/charge/AuthorizeAttributesFactory')
const { SellerOrderAttributesFactory } = require('./dist/charge/SellerOrderAttributesFactory')
const { PayloadFactory } = require('./dist/charge/PayloadFactory')

module.exports = {
  Charge: {
    AuthorizeAttributesBuilder: AuthorizeAttributesFactory.init(),
    SellerOrderAttributesBuilder: SellerOrderAttributesFactory.init(),
    PayloadBuilder: PayloadFactory.init()
  }
}
