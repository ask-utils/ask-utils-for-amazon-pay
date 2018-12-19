import { SellerOrderAttributesBuilder } from './SellerOrderAttributesBuilder'
import { interfaces } from 'ask-sdk-model';

import SellerOrderAttributes = interfaces.amazonpay.model.request.SellerOrderAttributes;
export class SellerOrderAttributesFactory {
    public static init(): SellerOrderAttributesBuilder {
        const attributes: SellerOrderAttributes  = {
            '@type': 'SellerOrderAttributes',
            '@version': '2'
        }
        return {
            setSellerOrderId(orderId: string): SellerOrderAttributesBuilder {
                attributes.sellerOrderId = orderId
                return this
            },
            setStoreName(storeName: string): SellerOrderAttributesBuilder {
                attributes.storeName = storeName
                return this
            },
            setCustomInformation(information: string): SellerOrderAttributesBuilder {
                attributes.customInformation = information
                return this
            },
            sellerNote(note: string): SellerOrderAttributesBuilder {
                attributes.sellerNote = note
                return this
            },
            updateVersion(version: string): SellerOrderAttributesBuilder {
                attributes['@version'] = version
                return this
            },
            getAttributes(): SellerOrderAttributes {
                return attributes
            },
        }
    }
}
