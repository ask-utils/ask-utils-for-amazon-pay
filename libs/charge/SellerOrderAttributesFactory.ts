
import { interfaces } from 'ask-sdk-model';
import SellerOrderAttributes = interfaces.amazonpay.model.request.SellerOrderAttributes;
import { ChargeSellerOrderAttributesBuilder } from './SellerOrderAttributesBuilder'
import { defaultSellerOrderAttributes } from './defaultAttributes'

export default class ChargeSellerOrderAttributesFactory {
    public static init(): ChargeSellerOrderAttributesBuilder {
        const attributes: SellerOrderAttributes  = JSON.parse(JSON.stringify(defaultSellerOrderAttributes))
        return {
            setSellerOrderId(orderId: string): ChargeSellerOrderAttributesBuilder {
                attributes.sellerOrderId = orderId
                return this
            },
            setStoreName(storeName: string): ChargeSellerOrderAttributesBuilder {
                attributes.storeName = storeName
                return this
            },
            setCustomInformation(information: string): ChargeSellerOrderAttributesBuilder {
                attributes.customInformation = information
                return this
            },
            sellerNote(note: string): ChargeSellerOrderAttributesBuilder {
                attributes.sellerNote = note
                return this
            },
            updateVersion(version: string): ChargeSellerOrderAttributesBuilder {
                attributes['@version'] = version
                return this
            },
            getAttributes(): SellerOrderAttributes {
                return attributes
            },
        }
    }
}
