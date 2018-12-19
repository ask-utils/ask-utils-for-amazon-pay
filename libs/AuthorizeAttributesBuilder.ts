import { interfaces } from 'ask-sdk-model';
import AuthorizeAttributes = interfaces.amazonpay.model.request.AuthorizeAttributes;
import Price = interfaces.amazonpay.model.request.Price;
export interface AuthorizeAttributesBuilder {
    setReferenceId(referenceId: string): AuthorizeAttributesBuilder
    setTransactionTimeout(time: number): AuthorizeAttributesBuilder
    setAuthorizationNote(note: string): AuthorizeAttributesBuilder
    updateAmountVersion(version: string): AuthorizeAttributesBuilder
    setAmount(amount: string): AuthorizeAttributesBuilder
    setCurrencyCode(currencyCode: string): AuthorizeAttributesBuilder
    setSoftDescriptor(softDescriptor: string): AuthorizeAttributesBuilder
    updateVersion(version: string): AuthorizeAttributesBuilder
    getAuthorizationAmount(): Price
    getAttributes(): AuthorizeAttributes
}
