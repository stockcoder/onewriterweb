/* tslint:disable */
/* eslint-disable */
/**
 * Academic AI Writer
 * AI writer specifically developed for academic
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Price
 */
export interface Price {
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    productName: string;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    readonly humanReadablePrice: string;
    /**
     * 
     * @type {string}
     * @memberof Price
     */
    readonly paymentAmount: string;
    /**
     * A brief description of the plan, hidden from customers.
     * @type {string}
     * @memberof Price
     */
    nickname?: string;
    /**
     * The unit amount in cents to be charged, represented as a whole integer if possible. Null if a sub-cent precision is required.
     * @type {number}
     * @memberof Price
     */
    unitAmount?: number | null;
}

/**
 * Check if a given object implements the Price interface.
 */
export function instanceOfPrice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "productName" in value;
    isInstance = isInstance && "humanReadablePrice" in value;
    isInstance = isInstance && "paymentAmount" in value;

    return isInstance;
}

export function PriceFromJSON(json: any): Price {
    return PriceFromJSONTyped(json, false);
}

export function PriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Price {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'productName': json['product_name'],
        'humanReadablePrice': json['human_readable_price'],
        'paymentAmount': json['payment_amount'],
        'nickname': !exists(json, 'nickname') ? undefined : json['nickname'],
        'unitAmount': !exists(json, 'unit_amount') ? undefined : json['unit_amount'],
    };
}

export function PriceToJSON(value?: Price | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'product_name': value.productName,
        'nickname': value.nickname,
        'unit_amount': value.unitAmount,
    };
}

