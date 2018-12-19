import { AuthorizeAttributesBuilder } from './AuthorizeAttributesBuilder'
import { interfaces } from 'ask-sdk-model';
import AuthorizeAttributes = interfaces.amazonpay.model.request.AuthorizeAttributes;
import Price = interfaces.amazonpay.model.request.Price;

export class AuthorizeAttributesFactory {
    public static init(): AuthorizeAttributesBuilder {
        const payload: AuthorizeAttributes = {
            '@type': 'AuthorizeAttributes',
            '@version': '2',
            'authorizationReferenceId': 'dummy',
            'authorizationAmount': {
                '@type': "Price",
                "@version": "2",
                'amount': 'dummy',
                'currencyCode': 'dummy'
            }
        }
        return {
            setReferenceId(referenceId: string): AuthorizeAttributesBuilder {
                payload.authorizationReferenceId = referenceId
                return this
            },
            setTransactionTimeout(time: number): AuthorizeAttributesBuilder {
                payload.transactionTimeout = time
                return this
            },
            setAuthorizationNote(note: string): AuthorizeAttributesBuilder {
                payload.sellerAuthorizationNote = note
                return this
            },
            updateAmountVersion(version: string): AuthorizeAttributesBuilder {
                payload.authorizationAmount['@version'] = version
                return this
            },
            setAmount(amount: string): AuthorizeAttributesBuilder {
                payload.authorizationAmount.amount = amount
                return this
            },
            setCurrencyCode(currencyCode: string): AuthorizeAttributesBuilder {
                payload.authorizationAmount.currencyCode = currencyCode
                return this
            },
            setSoftDescriptor(softDescriptor: string): AuthorizeAttributesBuilder {
                payload.softDescriptor = softDescriptor
                return this
            },
            updateVersion(version: string): AuthorizeAttributesBuilder {
                payload['@version'] = version
                return this
            },
            getAuthorizationAmount(): Price {
                if (payload.authorizationAmount.amount === 'dummy'){
                    throw new Error('authorizationAmount.amount should be updated')
                } else if (payload.authorizationAmount.currencyCode === 'dummy') {
                    throw new Error('authorizationAmount.currencyCode should be updated')
                }
                return payload.authorizationAmount
            },
            getAttributes(): AuthorizeAttributes {
                if (payload.authorizationReferenceId === 'dummy') {
                    throw new Error('payload.authorizationReferenceId should be updated')
                } else if (payload.authorizationAmount.amount === 'dummy'){
                    throw new Error('authorizationAmount.amount should be updated')
                } else if (payload.authorizationAmount.currencyCode === 'dummy') {
                    throw new Error('authorizationAmount.currencyCode should be updated')
                }
                return payload
            },
        }
    }
}
