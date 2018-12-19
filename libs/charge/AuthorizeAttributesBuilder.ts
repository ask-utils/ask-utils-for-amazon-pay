import { interfaces } from 'ask-sdk-model';
import AuthorizeAttributes = interfaces.amazonpay.model.request.AuthorizeAttributes;
import Price = interfaces.amazonpay.model.request.Price;
export interface ChargeAuthorizeAttributesBuilder {
    setReferenceId(referenceId: string): ChargeAuthorizeAttributesBuilder
    setTransactionTimeout(time: number): ChargeAuthorizeAttributesBuilder
    setAuthorizationNote(note: string): ChargeAuthorizeAttributesBuilder
    updateAmountVersion(version: string): ChargeAuthorizeAttributesBuilder
    setAmount(amount: string): ChargeAuthorizeAttributesBuilder
    setCurrencyCode(currencyCode: string): ChargeAuthorizeAttributesBuilder
    setSoftDescriptor(softDescriptor: string): ChargeAuthorizeAttributesBuilder
    updateVersion(version: string): ChargeAuthorizeAttributesBuilder
    getAuthorizationAmount(): Price
    getAttributes(): AuthorizeAttributes
}
