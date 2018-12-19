const { AuthorizeAttributesFactory } = require('./dist/AuthorizeAttributesFactory')
const { SellerOrderAttributesFactory } = require('./dist/SellerOrderAttributesFactory')

module.exports = {
  AuthorizeAttributesBuilder: AuthorizeAttributesFactory.init(),
  SellerOrderAttributesBuilder: SellerOrderAttributesFactory.init()
}
