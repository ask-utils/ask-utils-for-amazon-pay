import { interfaces } from 'ask-sdk-model';
import SellerOrderAttributes = interfaces.amazonpay.model.request.SellerOrderAttributes;
export interface ChargeSellerOrderAttributesBuilder {
    setSellerOrderId(orderId: string): ChargeSellerOrderAttributesBuilder
    setStoreName(storeName: string): ChargeSellerOrderAttributesBuilder
    setCustomInformation(information: string): ChargeSellerOrderAttributesBuilder
    sellerNote(note: string): ChargeSellerOrderAttributesBuilder
    updateVersion(version: string): ChargeSellerOrderAttributesBuilder
    getAttributes(): SellerOrderAttributes
}
