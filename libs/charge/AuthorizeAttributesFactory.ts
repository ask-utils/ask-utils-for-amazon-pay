import { interfaces } from 'ask-sdk-model';
import AuthorizeAttributes = interfaces.amazonpay.model.request.AuthorizeAttributes;
import Price = interfaces.amazonpay.model.request.Price;

import { ChargeAuthorizeAttributesBuilder } from './AuthorizeAttributesBuilder'
import { defaultAuthorizeAttributes } from './defaultAttributes'
export default class ChargeAuthorizeAttributesFactory {
    public static init(): ChargeAuthorizeAttributesBuilder {
        const attributes: AuthorizeAttributes = JSON.parse(JSON.stringify(defaultAuthorizeAttributes))
        return {
            setReferenceId(referenceId: string): ChargeAuthorizeAttributesBuilder {
                attributes.authorizationReferenceId = referenceId
                return this
            },
            setTransactionTimeout(time: number): ChargeAuthorizeAttributesBuilder {
                attributes.transactionTimeout = time
                return this
            },
            setAuthorizationNote(note: string): ChargeAuthorizeAttributesBuilder {
                attributes.sellerAuthorizationNote = note
                return this
            },
            updateAmountVersion(version: string): ChargeAuthorizeAttributesBuilder {
                attributes.authorizationAmount['@version'] = version
                return this
            },
            setAmount(amount: string): ChargeAuthorizeAttributesBuilder {
                attributes.authorizationAmount.amount = amount
                return this
            },
            setCurrencyCode(currencyCode: string): ChargeAuthorizeAttributesBuilder {
                attributes.authorizationAmount.currencyCode = currencyCode
                return this
            },
            setSoftDescriptor(softDescriptor: string): ChargeAuthorizeAttributesBuilder {
                attributes.softDescriptor = softDescriptor
                return this
            },
            updateVersion(version: string): ChargeAuthorizeAttributesBuilder {
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
