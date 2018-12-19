import { interfaces } from 'ask-sdk-model';
import SellerOrderAttributes = interfaces.amazonpay.model.request.SellerOrderAttributes;
export interface SellerOrderAttributesBuilder {
    setSellerOrderId(orderId: string): SellerOrderAttributesBuilder
    setStoreName(storeName: string): SellerOrderAttributesBuilder
    setCustomInformation(information: string): SellerOrderAttributesBuilder
    sellerNote(note: string): SellerOrderAttributesBuilder
    updateVersion(version: string): SellerOrderAttributesBuilder
    getAttributes(): SellerOrderAttributes
}
