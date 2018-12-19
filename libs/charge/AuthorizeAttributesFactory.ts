import { interfaces } from 'ask-sdk-model';
import AuthorizeAttributes = interfaces.amazonpay.model.request.AuthorizeAttributes;
import Price = interfaces.amazonpay.model.request.Price;

import { AuthorizeAttributesBuilder } from './AuthorizeAttributesBuilder'
import { defaultAuthorizeAttributes } from './defaultAttributes'
export class AuthorizeAttributesFactory {
    public static init(): AuthorizeAttributesBuilder {
        const attributes: AuthorizeAttributes = JSON.parse(JSON.stringify(defaultAuthorizeAttributes))
        return {
            setReferenceId(referenceId: string): AuthorizeAttributesBuilder {
                attributes.authorizationReferenceId = referenceId
                return this
            },
            setTransactionTimeout(time: number): AuthorizeAttributesBuilder {
                attributes.transactionTimeout = time
                return this
            },
            setAuthorizationNote(note: string): AuthorizeAttributesBuilder {
                attributes.sellerAuthorizationNote = note
                return this
            },
            updateAmountVersion(version: string): AuthorizeAttributesBuilder {
                attributes.authorizationAmount['@version'] = version
                return this
            },
            setAmount(amount: string): AuthorizeAttributesBuilder {
                attributes.authorizationAmount.amount = amount
                return this
            },
            setCurrencyCode(currencyCode: string): AuthorizeAttributesBuilder {
                attributes.authorizationAmount.currencyCode = currencyCode
                return this
            },
            setSoftDescriptor(softDescriptor: string): AuthorizeAttributesBuilder {
                attributes.softDescriptor = softDescriptor
                return this
            },
            updateVersion(version: string): AuthorizeAttributesBuilder {
                attributes['@version'] = version
                return this
            },
            getAuthorizationAmount(): Price {
                if (attributes.authorizationAmount.amount === 'dummy'){
                    throw new Error('authorizationAmount.amount should be updated')
                } else if (attributes.authorizationAmount.currencyCode === 'dummy') {
                    throw new Error('authorizationAmount.currencyCode should be updated')
                }
                return attributes.authorizationAmount
            },
            getAttributes(): AuthorizeAttributes {
                if (attributes.authorizationReferenceId === 'dummy') {
                    throw new Error('attributes.authorizationReferenceId should be updated')
                } else if (attributes.authorizationAmount.amount === 'dummy'){
                    throw new Error('authorizationAmount.amount should be updated')
                } else if (attributes.authorizationAmount.currencyCode === 'dummy') {
                    throw new Error('authorizationAmount.currencyCode should be updated')
                }
                return attributes
            },
        }
    }
}
